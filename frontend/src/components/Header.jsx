import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const linkCls = (active) =>
    `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
      active
        ? 'bg-teal-600 text-white shadow-md'
        : 'text-ink-soft hover:text-teal-700 hover:bg-teal-50'
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center">
            <img
              src={require('../assets/fontStyle.png')}
              alt="Jelcos Home Nursing"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className={linkCls(location.pathname === '/')}>Home</Link>
            <Link to="/about" className={linkCls(location.pathname === '/about')}>About Us</Link>
            <Link to="/services" className={linkCls(location.pathname.startsWith('/services'))}>Services</Link>
            <Link to="/book" className={linkCls(location.pathname === '/book')}>Book Appointment</Link>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 rounded-lg text-sm font-semibold text-ink-soft hover:text-teal-700 hover:bg-teal-50 transition-all">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919446978999" className="flex items-center gap-2 text-teal-700 font-bold text-sm hover:text-teal-800">
              <Phone size={16} />
              +91 94469 78999
            </a>
            <Link
              to="/book"
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-md transition-all"
            >
              Book Appointment
            </Link>
          </div>

          <button
            className="lg:hidden w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-slate-100">
            <nav className="flex flex-col gap-1 pt-2">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg font-semibold text-ink hover:bg-slate-50">Home</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg font-semibold text-ink hover:bg-slate-50">About Us</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg font-semibold text-ink hover:bg-slate-50">Services</Link>
              <Link to="/book" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg font-semibold text-white bg-teal-600">Book Appointment</Link>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-3 rounded-lg font-semibold text-ink hover:bg-slate-50 text-left">Contact</button>
              <a href="tel:+919446978999" className="flex items-center justify-center gap-2 bg-teal-50 text-teal-700 px-4 py-3 rounded-lg font-bold">
                <Phone size={16} /> +91 94469 78999
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
