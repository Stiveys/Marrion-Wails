import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showStats?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title = "Your Safety Net for Life's Uncertainties",
  subtitle = "Marrion Wails Insurance Agency",
  description = "Trusted insurance and financial solutions tailored to your needs. With integrity, accountability, and client-centered service, we champion long-term partnerships that promote financial security and peace of mind.",
  primaryButtonText = "Get Your Quote Today",
  secondaryButtonText = "Learn More About Our Services",
  showStats = true
}) => {
  const stats = [
    { icon: Shield, number: "5000+", label: "Clients Protected" },
    { icon: Users, number: "15+", label: "Years Experience" },
    { icon: Award, number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                {title}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl text-cyan-400 font-semibold"
              >
                {subtitle}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                {description}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/quote"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <Link
                to="/services"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all text-center"
              >
                {secondaryButtonText}
              </Link>
            </motion.div>

            {/* Stats */}
            {showStats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="text-cyan-400" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Hero Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-8 lg:p-12 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Shield className="text-cyan-600" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Get Protected Today</h3>
                  <p className="text-cyan-100">
                    Join thousands of satisfied clients who trust us with their insurance needs
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs text-cyan-100">Support</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">Fast</div>
                      <div className="text-xs text-cyan-100">Claims</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-orange-500 opacity-20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
