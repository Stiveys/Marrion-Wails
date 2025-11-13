import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative group"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-6">
        <div className="bg-cyan-600 text-white p-3 rounded-full shadow-lg">
          <Quote size={20} />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4 mt-6">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{content}"
      </p>

      {/* Author Info */}
      <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default TestimonialCard;