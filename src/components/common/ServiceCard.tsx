import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
  link: string;
  delay?: number;
  id?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  color,
  link,
  delay = 0,
  id
}) => {
  const colorVariants = {
    cyan: {
      bg: 'from-cyan-50 to-cyan-100',
      border: 'border-cyan-200',
      icon: 'text-cyan-600',
      button: 'bg-cyan-600 hover:bg-cyan-700',
      buttonText: 'text-cyan-600 group-hover:text-white'
    },
    orange: {
      bg: 'from-orange-50 to-orange-100',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      buttonText: 'text-orange-600 group-hover:text-white'
    },
    green: {
      bg: 'from-green-50 to-green-100',
      border: 'border-green-200',
      icon: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      buttonText: 'text-green-600 group-hover:text-white'
    },
    purple: {
      bg: 'from-purple-50 to-purple-100',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      buttonText: 'text-purple-600 group-hover:text-white'
    }
  };

  const colors = colorVariants[color as keyof typeof colorVariants] || colorVariants.cyan;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className={`group bg-gradient-to-br ${colors.bg} p-6 rounded-xl border-2 ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 mx-auto">
        <Icon className={`${colors.icon}`} size={32} />
      </div>

      {/* Content */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        
        {/* Features */}
        <ul className="space-y-2 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
              <div className={`w-2 h-2 rounded-full ${colors.button}`}></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to={link}
          className={`inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${colors.button} text-white group-hover:shadow-lg`}
        >
          <span>Learn More</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;