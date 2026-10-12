import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../mockData';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-jelcos-darker text-white pt-14 pb-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <img src={logo} alt="Jelcos" className="h-9 w-auto brightness-0 invert mb-4" />
            <p className="text-slate-300 leading-relaxed text-[15px]">
              Home nursing, house help &amp; elderly care across Kollam and Kerala.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <div className="space-y-2.5 text-[15px] text-slate-300">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} /> {contactInfo.phone}
              </a>
              <a href={`tel:${contactInfo.branchPhone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} /> {contactInfo.branchPhone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} /> {contactInfo.email}
              </a>
              <div className="flex items-center gap-2">
                <Clock size={16} /> {contactInfo.hours}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Locations</h4>
            <div className="space-y-3 text-[15px] text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <div>
                  <a href={contactInfo.addressLink} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                    {contactInfo.address}
                  </a>
                  <p className="text-slate-400 mt-1 text-xs">★ {contactInfo.ratingMain} on Google</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <div>
                  <a href={contactInfo.branch2Link} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                    {contactInfo.addressBranch2}
                  </a>
                  <p className="text-slate-400 mt-1 text-xs">★ {contactInfo.ratingBranch} on Google · {contactInfo.branch2Areas}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Quick links</h4>
            <ul className="space-y-2 text-[15px] text-slate-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors">Book appointment</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            </ul>
          </div>
        </div>

        <div className="sr-only" aria-hidden="true">
          <h2>About Jelcos Home Nursing & Healthcare Services</h2>
          <p>
            Jelcos provides home nursing services, house help, and elderly care in Kollam and across Kerala,
            including 24/7 home healthcare, hospital bystander support, child care, and post-delivery care.
          </p>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Jelcos Home Nursing · Caring since 2017 · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
