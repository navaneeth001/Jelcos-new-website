import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
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
              <h3 className="text-2xl font-bold text-emerald-400">Jelcos</h3>
              <Heart className="ml-2 fill-emerald-400 text-emerald-400" size={20} />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing compassionate and professional home nursing services across Kerala.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Contact Us</h4>
            <div className="space-y-3">
              <a href={`tel:${contactInfo.phone}`} className="flex items-start hover:text-emerald-400 transition-colors">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-start hover:text-emerald-400 transition-colors">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Location</h4>
            <div className="flex items-start">
              <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-emerald-400" />
              <p className="text-gray-400 leading-relaxed">
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('scheduler').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Book Appointment
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Testimonials
                </button>
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
