import React from 'react';
import Hero from '@/components/sections/Hero';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import { motion } from 'framer-motion';
import { 
  Car, 
  Heart, 
  Shield, 
  Briefcase, 
  TrendingUp, 
  Users,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Phone
} from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: "Motor Vehicle Insurance",
      description: "Comprehensive and third-party cover for personal and commercial vehicles with flexible payment options.",
      features: ["Comprehensive Cover", "Third Party Insurance", "Quick Claims Processing", "24/7 Road Assistance"],
      color: "cyan",
      link: "/services"
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Access to quality medical care through affordable individual and corporate health plans.",
      features: ["Individual Plans", "Corporate Coverage", "Inpatient & Outpatient", "Maternity Benefits"],
      color: "green",
      link: "/services"
    },
    {
      icon: Shield,
      title: "Business Insurance",
      description: "Comprehensive protection for businesses including liability and property coverage.",
      features: ["General Liability", "Property Insurance", "WIBA Compliance", "Business Interruption"],
      color: "purple",
      link: "/services"
    },
    {
      icon: Briefcase,
      title: "Investment Services",
      description: "Build financial security through disciplined savings and investment plans.",
      features: ["Unit Trust Funds", "Long-term Investments", "Pension Plans", "Asset Management"],
      color: "orange",
      link: "/services"
    }
  ];

  const testimonials = [
    {
      name: "Peter K.",
      role: "Small Business Owner",
      content: "Marrion Wails Insurance Agency truly cares. They took time to understand my needs and guided me toward the best cover without upselling. I felt heard.",
      rating: 5
    },
    {
      name: "Wanjiku M.",
      role: "Parent & Teacher",
      content: "I never knew insurance could be this empowering. The team is responsive, respectful, and sharp.",
      rating: 5
    },
    {
      name: "Amina O.",
      role: "Entrepreneur",
      content: "I felt valued and informed upon arrival at Marrion Wails Insurance, which clearly explained options without pressure.",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Complete Application",
      description: "Fill out our simple application form with your details and insurance needs.",
      icon: CheckCircle,
      color: "text-cyan-600"
    },
    {
      step: "02",
      title: "Get Quote ASAP",
      description: "Receive your personalized insurance quote within 24 hours of application.",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      step: "03",
      title: "Get Insured & Covered",
      description: "Finalize your policy and enjoy comprehensive protection and peace of mind.",
      icon: Shield,
      color: "text-green-600"
    }
  ];

  const benefits = [
    {
      title: "Client-Centric Philosophy",
      description: "We treat every client with dignity, empathy and transparency. Our agents are deeply knowledgeable in both insurance and financial planning.",
      icon: Users
    },
    {
      title: "Responsive Support",
      description: "Fast turnaround times, clear communication and reliable claims processes. We understand Kenya's evolving insurance landscape.",
      icon: Clock
    },
    {
      title: "Ethical Practice",
      description: "Our agency thrives on trust, integrity and long-term relationships - not just transactions.",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Insurance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive insurance solutions tailored to meet your personal, business, and investment needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all"
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting insured with us is quick and easy. Follow these simple steps to get the coverage you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center space-y-6"
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/quote"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              <span>Start Your Application</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Marrion Wails?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center space-y-6 p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-white"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Get Protected?
            </h2>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Join thousands of satisfied clients who trust Marrion Wails Insurance Agency for their insurance needs. 
              Get your personalized quote today and experience the difference of working with Kenya's most reliable insurance agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all"
              >
                <span>Get Your Quote Today</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <span>Speak to an Agent</span>
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;