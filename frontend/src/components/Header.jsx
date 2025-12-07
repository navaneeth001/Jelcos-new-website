import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-emerald-600">Jelcos</h1>
            <span className="ml-2 text-sm text-gray-600 hidden sm:block">Home Nursing</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('scheduler')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Book Now
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919446978999" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors">
              <Phone size={18} />
              <span className="font-medium">+91 9446978999</span>
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
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('scheduler')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                Book Now
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                Contact
              </button>
              <a href="tel:+919446978999" className="flex items-center space-x-2 text-emerald-600 pt-2">
                <Phone size={18} />
                <span className="font-medium">+91 9446978999</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
