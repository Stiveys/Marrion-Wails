import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, animate, useMotionValue } from 'framer-motion';

type Direction = 'left' | 'right';

type LogoItem = {
  src: string;
  alt?: string;
  href?: string;
  fallback?: string;
};

const MarqueeLogo: React.FC<{ item: LogoItem; height: number }> = ({ item, height }) => {
  const [src, setSrc] = useState(item.src);
  const [error, setError] = useState(false);

  const getAlt = (i: LogoItem) => {
    if (i.alt && i.alt.trim().length) return i.alt;
    try {
      const u = new URL(i.src);
      return u.hostname.replace('www.', '');
    } catch {
      return 'Logo';
    }
  };

  const handleError = () => {
    if (src === item.src && item.fallback) {
      setSrc(item.fallback);
    } else {
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="text-white/80 font-semibold text-sm text-center px-2">
        {getAlt(item)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={getAlt(item)}
      loading="lazy"
      style={{ height, width: 'auto' }}
      className="object-contain"
      onError={handleError}
    />
  );
};

type Props = {
  items?: LogoItem[];
  endpoint?: string;
  height?: number;
  gap?: number;
  speed?: number;
  direction?: Direction;
  pauseOnHover?: boolean;
  swipeEnabled?: boolean;
  ariaLabel?: string;
  className?: string;
};

const LogoMarquee: React.FC<Props> = ({
  items,
  endpoint,
  height = 40,
  gap = 32,
  speed = 80,
  direction = 'left',
  pauseOnHover = true,
  swipeEnabled = true,
  ariaLabel,
  className
}) => {
  const [logos, setLogos] = useState<LogoItem[]>([]);
  const x = useMotionValue(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [halfWidth, setHalfWidth] = useState(600);

  const defaultItems: LogoItem[] = useMemo(
    () => [
      { src: 'https://www.google.com/s2/favicons?domain=jubileeinsurance.com&sz=128', alt: 'Jubilee Insurance' },
      { src: 'https://www.google.com/s2/favicons?domain=britam.com&sz=128', alt: 'Britam' },
      { src: 'https://www.google.com/s2/favicons?domain=cigna.com&sz=128', alt: 'Cigna Africa' },
      { src: 'https://www.google.com/s2/favicons?domain=oldmutual.co.ke&sz=128', alt: 'Old Mutual' },
      { src: 'https://www.google.com/s2/favicons?domain=aar-insurance.com&sz=128', alt: 'AAR Insurance' },
      { src: 'https://www.google.com/s2/favicons?domain=nhif.or.ke&sz=128', alt: 'NHIF' }
    ],
    []
  );

  const displayItems: LogoItem[] = useMemo(() => {
    if (items && items.length > 0) return items;
    if (logos.length > 0) return logos;
    return defaultItems;
  }, [items, logos, defaultItems]);

  const repeatedItems = useMemo(
    () => [...displayItems, ...displayItems],
    [displayItems]
  );

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      if (!endpoint) return;
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        if (!active) return;
        if (Array.isArray(data)) {
          const normalized: LogoItem[] = data.map((d: unknown) =>
            typeof d === 'string' ? { src: d } : (d as LogoItem)
          );
          setLogos(normalized);
        }
      } catch {
        void 0;
      }
    };
    fetchData();
    return () => {
      active = false;
    };
  }, [endpoint]);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const w = trackRef.current.scrollWidth / 2;
        setHalfWidth(w);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [displayItems.length]);

  useEffect(() => {
    const distance = direction === 'left' ? [0, -halfWidth] : [-halfWidth, 0];
    const duration = Math.max(halfWidth / speed, 1);
    animationRef.current = animate(x, distance, {
      duration,
      ease: 'linear',
      repeat: Infinity
    });
    return () => {
      animationRef.current?.stop();
    };
  }, [halfWidth, speed, direction, x, displayItems.length]);

  const onMouseEnter = () => {
    if (!pauseOnHover) return;
    animationRef.current?.pause();
  };
  const onMouseLeave = () => {
    if (!pauseOnHover) return;
    animationRef.current?.play();
  };

  return (
    <section className={className}>
      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex items-center min-w-max"
          style={{ x, gap }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          drag={swipeEnabled ? 'x' : false}
          dragConstraints={{ left: -halfWidth, right: 0 }}
          dragElastic={0.1}
          dragMomentum={false}
          onDragStart={() => animationRef.current?.stop()}
          onDragEnd={() => animationRef.current?.play()}
          aria-label={ariaLabel}
          role="list"
        >
          {repeatedItems.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className="flex items-center justify-center rounded-lg shadow-sm"
              style={{
                height: height + 24,
                width: Math.max(height * 2.5, 180),
                padding: 12,
                backgroundColor: '#ffffff'
              }}
              role="listitem"
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center justify-center w-full h-full"
                >
                  <MarqueeLogo item={item} height={height} />
                </a>
              ) : (
                <MarqueeLogo item={item} height={height} />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;
