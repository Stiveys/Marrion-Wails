import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+254700432010" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
              <Phone size={14} />
              <span>0700 432 010</span>
            </a>
            <a href="tel:+254794586562" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
              <span>0794 586 562</span>
            </a>
          </div>
          <a href="mailto:mwinsuranceagency@gmail.com" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
            <Mail size={14} />
            <span>mwinsuranceagency@gmail.com</span>
          </a>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center transform rotate-45">
              <span className="text-white font-bold text-lg transform -rotate-45">MW</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Marrion Wails</h1>
              <p className="text-sm text-gray-600">Insurance Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <motion.a
              href="/quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all"
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <motion.a
              href="/quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block mx-4 mt-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-cyan-700 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;