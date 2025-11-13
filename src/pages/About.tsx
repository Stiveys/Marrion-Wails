import React from 'react';
import Hero from '@/components/sections/Hero';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Heart, 
  Eye, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  Star,
  Target,
  Lightbulb
} from 'lucide-react';

const About: React.FC = () => {
  const missionPoints = [
    {
      icon: Target,
      title: "Empower Clients",
      description: "We empower clients with customized insurance solutions that meet their unique needs and circumstances."
    },
    {
      icon: Heart,
      title: "Build Trust",
      description: "We build lasting trust through honest communication and transparent business practices."
    },
    {
      icon: Lightbulb,
      title: "Promote Resilience",
      description: "We promote resilience with clear financial guidance and comprehensive protection plans."
    },
    {
      icon: Users,
      title: "Ethical Service",
      description: "We provide ethical service with genuine client care, putting your interests first."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct in all our dealings."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every client interaction with empathy, understanding, and genuine care."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in service delivery, continuously improving our offerings."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace innovation to provide modern, efficient insurance solutions."
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="About Marrion Wails Insurance Agency"
        subtitle="Your Trusted Insurance Partner"
        description="Marrion Wails Insurance Agency is a trusted leader in providing comprehensive insurance and financial solutions tailored to the evolving needs of individuals, families, and businesses."
        primaryButtonText="Get to Know Us Better"
        secondaryButtonText="View Our Services"
        showStats={false}
      />

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Leading with Integrity, Serving with Heart
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a strong foundation built on integrity, accountability, and client-centered service, 
                we champion long-term partnerships that promote financial security, resilience, and peace of mind.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Based in Kenya, we understand the unique challenges and opportunities in our market. 
                Our team of experienced professionals is dedicated to providing personalized insurance 
                solutions that protect what matters most to you.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2 text-cyan-600">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Licensed & Regulated</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-600">
                  <Award size={20} />
                  <span className="font-semibold">Industry Certified</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="bg-white p-6 rounded-xl text-center shadow-lg">
                        <Icon className="text-cyan-600 mx-auto mb-3" size={32} />
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center">
                  <Eye className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the most reliable and ethical insurance agency, redefining protection through 
                personalized service, innovative products, and community impact.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower clients with customized insurance solutions, build lasting trust through honest communication, 
                promote resilience with clear financial guidance, and provide ethical service with genuine client care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Points */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to serving our clients with excellence, integrity, and genuine care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-white"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and how we serve our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Conclusion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Your Trusted Insurance Partner
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              In a world full of uncertainties, Marrion Wails Insurance Agency stands as your unwavering shield—
              blending expertise, empathy, and ethical leadership to protect what matters most. With us, 
              insurance isn't just a policy; it's a promise. Empowering every journey with smart protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-lg font-bold hover:from-cyan-700 hover:to-cyan-800 transition-all"
              >
                <span>Get Your Quote Today</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg font-bold hover:bg-cyan-600 hover:text-white transition-all"
              >
                <span>Contact Us Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;