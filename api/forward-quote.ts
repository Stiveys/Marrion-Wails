export const config = { runtime: 'edge' };

function sanitize(input: unknown, max = 500) {
  return String(input ?? '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, max);
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let data: Record<string, unknown> = {};
  try {
    data = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ip =
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    'unknown';

  // Basic honeypot spam check
  if (typeof data.website === 'string' && data.website.trim().length > 0) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Minimal required fields
  const required = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'insuranceType',
  ];
  for (const field of required) {
    if (!data[field] || String(data[field]).trim().length === 0) {
      return new Response(
        JSON.stringify({ error: `Missing field: ${field}` }),
        {
          status: 422,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }

  const firstName = sanitize(data.firstName, 100);
  const lastName = sanitize(data.lastName, 100);
  const insuranceType = sanitize(data.insuranceType, 100);
  const subject = `New Quote Submission - ${firstName} ${lastName} - ${insuranceType}`;
  const timestamp = new Date().toISOString();

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, Arial; color: #111;">
      <h2 style="margin:0 0 12px;">New Quote Submission</h2>
      <p style="margin:0 0 16px;color:#555">Received: ${timestamp}</p>

      <h3 style="margin:20px 0 8px;">Contact Details</h3>
      <ul style="list-style:none;padding:0;margin:0 0 16px;">
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${sanitize(data.email, 200)}</li>
        <li><strong>Phone:</strong> ${sanitize(data.phone, 100)}</li>
        <li><strong>ID:</strong> ${sanitize(data.idNumber, 100)}</li>
        <li><strong>DOB:</strong> ${sanitize(data.dateOfBirth, 50)}</li>
      </ul>

      <h3 style="margin:20px 0 8px;">Insurance</h3>
      <ul style="list-style:none;padding:0;margin:0 0 16px;">
        <li><strong>Type:</strong> ${insuranceType}</li>
        <li><strong>Coverage:</strong> ${sanitize(data.coverageAmount, 100)}</li>
      </ul>

      <h3 style="margin:20px 0 8px;">Specific Details</h3>
      <ul style="list-style:none;padding:0;margin:0 0 16px;">
        <li><strong>Vehicle:</strong> ${sanitize(data.vehicleMake, 100)} ${sanitize(
    data.vehicleModel,
    100
  )} ${sanitize(data.vehicleYear, 10)} | Value: ${sanitize(
    data.vehicleValue,
    100
  )}</li>
        <li><strong>Property:</strong> ${sanitize(
          data.propertyType,
          100
        )} | Value: ${sanitize(data.propertyValue, 100)}</li>
        <li><strong>Health Cover:</strong> ${sanitize(data.healthCoverType, 100)}</li>
        <li><strong>Business Type:</strong> ${sanitize(data.businessType, 100)}</li>
      </ul>

      <h3 style="margin:20px 0 8px;">Additional Information</h3>
      <pre style="white-space: pre-wrap; background:#f6f8fa; padding:12px; border-radius:8px; color:#333;">${sanitize(
        data.additionalInfo,
        2000
      )}</pre>
      <p style="margin:16px 0;"><strong>Preferred Contact:</strong> ${sanitize(
        data.preferredContact,
        50
      )} | <strong>Urgency:</strong> ${sanitize(data.urgency, 50)}</p>
      <hr style="border:none;height:1px;background:#eee;margin:16px 0"/>
      <p style="font-size:12px;color:#666">Source IP: ${ip}</p>
    </div>
  `;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return new Response(
      JSON.stringify({
        error: 'Email service not configured',
        hint: 'Set RESEND_API_KEY and optional EMAIL_FROM',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const from = process.env.EMAIL_FROM || 'no-reply@mwinsuranceagency.com';
    const sendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: ['mwinsuranceagency@gmail.com'],
        subject,
        html,
        reply_to: sanitize(data.email, 200),
      }),
    });

    const sendBody: Record<string, unknown> = await sendResp.json();
    if (!sendResp.ok) {
      console.error('Forwarding failed', sendBody);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: sendBody }),
        {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const log = {
      event: 'quote_forwarded',
      at: timestamp,
      ip,
      subject,
    };
    console.log(JSON.stringify(log));

    const webhook = process.env.LOG_WEBHOOK_URL;
    if (webhook) {
      // Fire-and-forget webhook logging
      fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...log, payload: { ...data, email: sanitize(data.email, 200) } }),
      }).catch(() => {});
    }

    return new Response(JSON.stringify({ success: true, id: sendBody?.id || null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    console.error('Unexpected error');
    return new Response(JSON.stringify({ error: 'Unexpected error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
