import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import { APP_NAME } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              {/* Logo Icon with Rainbow Gradient */}
              <div className="bg-gradient-to-br from-red-500 via-orange-400 via-green-400 to-blue-500 text-white p-2.5 rounded-xl shadow-md transition-transform group-hover:scale-105">
                <Brain size={28} strokeWidth={2.5} />
              </div>
              {/* Logo Text */}
              <div className="flex flex-col justify-center leading-none">
                <span className="font-sans font-bold text-xl text-brand-900 tracking-wide group-hover:text-brand-800 transition-colors">
                  RAJESH
                </span>
                <span className="font-sans font-bold text-lg tracking-wide">
                  <span className="text-orange-500">DIGITAL</span>
                  <span className="text-blue-500">IQ</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-accent-600'
                    : 'text-brand-600 hover:text-brand-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/programs/pg-digital-marketing"
              className="bg-brand-900 hover:bg-brand-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-600 hover:text-brand-900 focus:outline-none p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-brand-50 text-accent-600'
                    : 'text-brand-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/programs/pg-digital-marketing"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-accent-500 text-white px-4 py-3 rounded-lg font-semibold"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;