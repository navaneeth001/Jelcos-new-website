import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, Clock } from 'lucide-react';
import { contactInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-jelcos-bright">Jelcos</h3>
              <Heart className="ml-2 fill-jelcos-bright text-jelcos-bright" size={20} />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing compassionate and professional home nursing services across Kerala.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-jelcos-bright">Contact Us</h4>
            <div className="space-y-3">
              <a href={`tel:${contactInfo.phone}`} className="flex items-start hover:text-jelcos-bright transition-colors">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-start hover:text-jelcos-bright transition-colors">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-jelcos-bright">Our Branches</h4>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-jelcos-bright" />
                <div>
                  <h5 className="text-white font-medium mb-1">Head Office</h5>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-jelcos-bright" />
                <div>
                  <h5 className="text-white font-medium mb-1">Branch Office</h5>
                  <a href={contactInfo.branch2Link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-jelcos-bright leading-relaxed text-sm transition-colors">
                    {contactInfo.addressBranch2}
                  </a>
                  <p className="text-gray-500 mt-1 text-xs">
                    {contactInfo.branch2Areas}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-jelcos-bright">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-jelcos-bright transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-400 hover:text-jelcos-bright transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-jelcos-bright transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jelcos Home Nursing. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with <Heart className="inline fill-red-500 text-red-500" size={14} /> for caring families
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
