import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    { name: 'Motor Vehicle Insurance', href: '/services#motor' },
    { name: 'Health Insurance', href: '/services#health' },
    { name: 'Business Insurance', href: '/services#business' },
    { name: 'Agricultural Insurance', href: '/services#agricultural' },
    { name: 'Investment Services', href: '/services#investment' },
    { name: 'Life Insurance', href: '/services#whole-life' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center transform rotate-45">
                <span className="text-white font-bold transform -rotate-45">MW</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Marrion Wails</h3>
                <p className="text-sm text-gray-400">Insurance Agency</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your Safety Net for Life's Uncertainties. We provide comprehensive insurance 
              and financial solutions tailored to your needs with integrity and transparency.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-cyan-400" />
                <div className="space-y-1">
                  <a href="tel:+254700432010" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors block">
                    0700 432 010
                  </a>
                  <a href="tel:+254794586562" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors block">
                    0794 586 562
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-cyan-400" />
                <a href="mailto:mwinsuranceagency@gmail.com" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                  mwinsuranceagency@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-cyan-400" />
                <p className="text-sm text-gray-300">Nairobi, Kenya</p>
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/quote"
                className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Marrion Wails Insurance Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;