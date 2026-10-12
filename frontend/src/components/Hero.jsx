import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Star, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { Button } from './ui/button';
import Reveal from './Reveal';

import img1 from '../assets/pic1.png';
import img2 from '../assets/pic2.png';
import img3 from '../assets/pic3.png';
import img4 from '../assets/pic4.png';
import img5 from '../assets/pic5.png';

const heroImages = [img1, img2, img3, img4, img5];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % heroImages.length);
  const prevImage = () => setCurrentImageIndex((p) => (p === 0 ? heroImages.length - 1 : p - 1));

  return (
    <section id="home" className="warm-hero pt-28 pb-14 md:pt-32 md:pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-ink-soft shadow-sm">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                4.7 rated · 5,000+ families · Since 2017
              </span>
            </div>

            <h1 className="text-balance font-display text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-ink leading-[1.08] tracking-tight">
              Professional home nursing,
              <span className="block mt-1 text-teal-600">delivered with care</span>
            </h1>

            <p className="text-lg text-ink-soft leading-relaxed max-w-xl">
              Trained nurses, reliable house help and dedicated elderly care across
              Kollam &amp; Kerala — with transparent pricing and 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => navigate('/book')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base font-bold rounded-xl shadow-lg transition-all"
              >
                Book an appointment
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <a
                href="tel:+919446978999"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-teal-600 text-ink px-7 py-4 text-base font-bold rounded-xl transition-all"
              >
                <Phone size={17} className="text-teal-600" />
                +91 94469 78999
              </a>
            </div>

            {/* Clinical trust strip */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              {[
                { v: '5,000+', l: 'Families served' },
                { v: '4.7', l: 'Google rating' },
                { v: '24/7', l: 'Care & support' },
              ].map((s) => (
                <div key={s.l} className="bg-white border border-slate-200 rounded-xl px-4 py-4 text-center shadow-sm">
                  <div className="text-xl md:text-2xl font-extrabold text-ink font-display">{s.v}</div>
                  <div className="text-xs font-semibold text-ink-faint mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group border border-slate-200">
              <div className="relative aspect-[4/3.4] sm:aspect-[4/3]">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Jelcos home nursing care in Kerala (${index + 1})`}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>

              <button onClick={prevImage} aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-all">
                <ChevronLeft className="text-ink" size={20} />
              </button>
              <button onClick={nextImage} aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-all">
                <ChevronRight className="text-ink" size={20} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {heroImages.map((_, index) => (
                  <button key={index} onClick={() => setCurrentImageIndex(index)} aria-label={`Photo ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/60 w-1.5'}`} />
                ))}
              </div>
            </div>

            {/* single credibility card */}
            <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto bg-white rounded-xl shadow-lg border border-slate-200 px-4 py-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-ink text-sm leading-tight">Trained &amp; verified caregivers</div>
                <div className="text-xs text-ink-faint">Serving Kollam &amp; Kerala</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
