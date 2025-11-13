import React, { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import ServiceCard from '@/components/common/ServiceCard';
import { motion } from 'framer-motion';
import { 
  Car, 
  Heart, 
  Shield, 
  Briefcase, 
  TrendingUp, 
  Users,
  Tractor,
  Plane,
  Stethoscope,
  DollarSign,
  Clock,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('personal');

  useEffect(() => {
    // Handle anchor scrolling when component mounts or route changes
    const handleAnchorScroll = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Set active category based on hash
          if (['motor', 'health', 'property'].includes(hash)) {
            setActiveCategory('personal');
          } else if (['business', 'wiba', 'commercial'].includes(hash)) {
            setActiveCategory('business');
          } else if (['investment', 'unit-trust', 'group-life', 'whole-life'].includes(hash)) {
            setActiveCategory('investment');
          } else if (['critical-illness', 'asset-management', 'pension', 'annuities'].includes(hash)) {
            setActiveCategory('specialized');
          }
        }
      }
    };

    // Handle initial load
    setTimeout(handleAnchorScroll, 100);
    
    // Handle route changes
    window.addEventListener('hashchange', handleAnchorScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleAnchorScroll);
    };
  }, []);

  const serviceCategories = {
    personal: {
      title: "Personal Insurance",
      description: "Comprehensive protection for you and your family",
      services: [
        {
          icon: Car,
          title: "Motor Vehicle Insurance",
          description: "Complete protection for your vehicles with flexible coverage options and competitive rates.",
          features: [
            "Comprehensive Cover",
            "Third Party Insurance", 
            "Theft Protection",
            "Fire & Accident Coverage",
            "Quick Claims Processing",
            "24/7 Road Assistance"
          ],
          color: "cyan",
          link: "/quote",
          id: "motor"
        },
        {
          icon: Heart,
          title: "Health Insurance",
          description: "Access quality healthcare with our comprehensive medical coverage plans for individuals and families.",
          features: [
            "Individual & Family Plans",
            "Inpatient & Outpatient Cover",
            "Maternity Benefits",
            "Dental & Optical",
            "Emergency Medical Services",
            "Chronic Condition Management"
          ],
          color: "green",
          link: "/quote",
          id: "health"
        },
        {
          icon: Tractor,
          title: "Agricultural Insurance",
          description: "Specialized protection for farmers against crop, livestock, and weather-related risks.",
          features: [
            "Crop Insurance",
            "Livestock Protection",
            "Weather Index Insurance",
            "Farm Equipment Cover",
            "Greenhouse Insurance",
            "Post-Harvest Loss Cover"
          ],
          color: "orange",
          link: "/quote",
          id: "agricultural"
        },
        {
          icon: Plane,
          title: "Travel Insurance",
          description: "Comprehensive coverage for your domestic and international travel needs.",
          features: [
            "Medical Emergency Cover",
            "Trip Cancellation",
            "Lost Luggage Protection",
            "Flight Delays",
            "Personal Accident",
            "Emergency Evacuation"
          ],
          color: "purple",
          link: "/quote"
        }
      ]
    },
    business: {
      title: "Business Insurance",
      description: "Protect your business assets and operations",
      services: [
        {
          icon: Shield,
          title: "General Liability Insurance",
          description: "Comprehensive protection against third-party claims and business liabilities.",
          features: [
            "Public Liability",
            "Product Liability",
            "Professional Indemnity",
            "Employers Liability",
            "Property Damage",
            "Legal Defense Costs"
          ],
          color: "cyan",
          link: "/quote",
          id: "business"
        },
        {
          icon: Users,
          title: "WIBA (Work Injury Benefits)",
          description: "Mandatory employee coverage for work-related injuries and occupational diseases.",
          features: [
            "Work Injury Cover",
            "Medical Expenses",
            "Disability Benefits",
            "Death Benefits",
            "Rehabilitation Services",
            "Legal Compliance"
          ],
          color: "green",
          link: "/quote"
        },
        {
          icon: Briefcase,
          title: "Commercial Property Insurance",
          description: "Protection for your business premises, equipment, and inventory.",
          features: [
            "Building Insurance",
            "Equipment Cover",
            "Stock & Inventory",
            "Business Interruption",
            "Theft Protection",
            "Natural Disaster Cover"
          ],
          color: "orange",
          link: "/quote"
        }
      ]
    },
    investment: {
      title: "Investment & Life Insurance",
      description: "Build wealth and secure your future",
      services: [
        {
          icon: TrendingUp,
          title: "Unit Trust Funds",
          description: "Pooled investment options managed by experts to maximize returns and minimize risk.",
          features: [
            "Professional Management",
            "Diversified Portfolio",
            "Daily Liquidity",
            "Competitive Returns",
            "Low Entry Requirements",
            "Regular Statements"
          ],
          color: "cyan",
          link: "/quote",
          id: "investment"
        },
        {
          icon: DollarSign,
          title: "Long-Term Investment Plans",
          description: "Build financial security over time through disciplined savings and investment strategies.",
          features: [
            "Education Planning",
            "Retirement Planning",
            "Wealth Accumulation",
            "Regular Contributions",
            "Tax Benefits",
            "Flexible Terms"
          ],
          color: "green",
          link: "/quote"
        },
        {
          icon: Users,
          title: "Group Life Insurance",
          description: "Employee benefits for companies looking to protect their workforce and attract talent.",
          features: [
            "Employee Life Cover",
            "Funeral Benefits",
            "Disability Cover",
            "Critical Illness",
            "Flexible Coverage",
            "Competitive Rates"
          ],
          color: "purple",
          link: "/quote"
        },
        {
          icon: Award,
          title: "Whole of Life Cover",
          description: "Lifetime protection coupled with cash value accumulation and estate planning benefits.",
          features: [
            "Lifetime Protection",
            "Cash Value Accumulation",
            "Estate Planning",
            "Tax Advantages",
            "Flexible Premiums",
            "Dividend Options"
          ],
          color: "orange",
          link: "/quote",
          id: "whole-life"
        }
      ]
    },
    specialized: {
      title: "Specialized Services",
      description: "Advanced protection and financial solutions",
      services: [
        {
          icon: Stethoscope,
          title: "Critical Illness Cover",
          description: "Financial protection against the cost of managing serious illnesses and medical conditions.",
          features: [
            "Cancer Cover",
            "Heart Attack Protection",
            "Stroke Coverage",
            "Kidney Failure",
            "Major Organ Transplant",
            "Lump Sum Payment"
          ],
          color: "cyan",
          link: "/quote"
        },
        {
          icon: TrendingUp,
          title: "Asset Management",
          description: "Professional portfolio handling for growth, sustainability, and wealth preservation.",
          features: [
            "Portfolio Management",
            "Investment Advisory",
            "Risk Assessment",
            "Performance Monitoring",
            "Regular Reviews",
            "Strategic Planning"
          ],
          color: "green",
          link: "/quote"
        },
        {
          icon: Clock,
          title: "Pension Fund Management",
          description: "Long-term retirement solutions for organizations and individuals planning for the future.",
          features: [
            "Retirement Planning",
            "Pension Administration",
            "Investment Strategy",
            "Compliance Management",
            "Member Services",
            "Regular Reporting"
          ],
          color: "orange",
          link: "/quote"
        },
        {
          icon: DollarSign,
          title: "Annuities",
          description: "Steady income post-retirement for guaranteed financial peace of mind and security.",
          features: [
            "Retirement Income",
            "Guaranteed Payments",
            "Flexible Options",
            "Tax Benefits",
            "Inflation Protection",
            "Estate Benefits"
          ],
          color: "purple",
          link: "/quote"
        }
      ]
    }
  };

  const currentCategory = serviceCategories[activeCategory as keyof typeof serviceCategories];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Comprehensive Insurance Solutions"
        subtitle="Tailored to Your Needs"
        description="Explore our wide range of insurance products and financial services designed to protect what matters most to you, your family, and your business."
        primaryButtonText="Get Your Quote Today"
        secondaryButtonText="Speak to an Agent"
        showStats={false}
      />

      {/* Category Navigation */}
      <section className="py-12 bg-gray-50 sticky top-24 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 shadow-md'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {currentCategory.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentCategory.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Insurance Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond just providing insurance - we provide peace of mind and financial security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Quick Processing",
                description: "Fast application processing and claim settlements"
              },
              {
                icon: Award,
                title: "Expert Advice",
                description: "Professional guidance from experienced insurance advisors"
              },
              {
                icon: Shield,
                title: "Comprehensive Cover",
                description: "Wide range of coverage options to meet all your needs"
              },
              {
                icon: Users,
                title: "Personalized Service",
                description: "Tailored solutions that fit your unique requirements"
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              Ready to Get Covered?
            </h2>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Don't wait until it's too late. Get comprehensive insurance coverage today and enjoy peace of mind 
              knowing that you, your family, and your assets are protected by Kenya's most trusted insurance agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <span>Speak to an Expert</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;