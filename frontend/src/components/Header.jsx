import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src={require('../assets/fontStyle.png')} alt="Jelcos Logo" className="h-10 md:h-14 w-auto object-contain origin-left" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-gray-50/80 px-2 py-1.5 rounded-full border border-gray-200/60 shadow-sm backdrop-blur-md">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === '/' ? 'bg-white text-jelcos-dark shadow-sm' : 'text-gray-600 hover:text-jelcos-dark hover:bg-gray-100/50'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === '/services' ? 'bg-white text-jelcos-dark shadow-sm' : 'text-gray-600 hover:text-jelcos-dark hover:bg-gray-100/50'}`}
            >
              Services
            </Link>
            <Link 
              to="/book" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === '/book' ? 'bg-white text-jelcos-dark shadow-sm' : 'text-gray-600 hover:text-jelcos-dark hover:bg-gray-100/50'}`}
            >
              Book Now
            </Link>
            {location.pathname === '/' && (
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-jelcos-dark hover:bg-gray-100/50 transition-all duration-300"
              >
                Testimonials
              </button>
            )}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-jelcos-dark hover:bg-gray-100/50 transition-all duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+919446978999" className="flex items-center space-x-2 bg-jelcos-bright/20 text-jelcos-darker px-4 py-2 rounded-full hover:bg-jelcos-bright/30 transition-all duration-300">
              <Phone size={16} className="text-jelcos-dark" />
              <span className="font-semibold text-sm">+91 9446978999</span>
            </a>
            <a href="tel:+918139801294" className="flex items-center space-x-2 bg-jelcos-bright/20 text-jelcos-darker px-4 py-2 rounded-full hover:bg-jelcos-bright/30 transition-all duration-300">
              <Phone size={16} className="text-jelcos-dark" />
              <span className="font-semibold text-sm">+91 81398 01294</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-jelcos-dark transition-colors text-left">
                Home
              </Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-jelcos-dark transition-colors text-left">
                Services
              </Link>
              <Link to="/book" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-jelcos-dark transition-colors text-left">
                Book Now
              </Link>
              {location.pathname === '/' && (
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-jelcos-dark transition-colors text-left">
                  Testimonials
                </button>
              )}
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-jelcos-dark transition-colors text-left">
                Contact
              </button>
              <a href="tel:+919446978999" className="flex items-center space-x-2 text-jelcos-dark pt-2">
                <Phone size={18} />
                <span className="font-medium">+91 9446978999</span>
              </a>
              <a href="tel:+918139801294" className="flex items-center space-x-2 text-jelcos-dark">
                <Phone size={18} />
                <span className="font-medium">Kalluvathukkal: +91 81398 01294</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
