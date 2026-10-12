import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../mockData';
import Reveal from './Reveal';

const Testimonials = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const maxIndex = testimonials.length - 1;
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">Patient &amp; family feedback</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mt-2 tracking-tight">
            Rated 4.7 on Google by the families we serve
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative max-w-3xl">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.id} className="w-full shrink-0 pr-1">
                    <div className="bg-sand rounded-2xl p-7 md:p-8 border border-slate-200">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <h3 className="font-display text-lg font-bold text-ink mb-2">{t.title}</h3>
                      <p className="text-ink-soft leading-relaxed text-[15px]">{t.content}</p>
                      <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-200">
                        <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-ink text-sm">{t.name}</div>
                          <div className="text-xs text-ink-faint">{t.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <button onClick={prev} aria-label="Previous review" className="w-10 h-10 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-ink hover:border-teal-600 hover:text-teal-600 transition-all">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIndex(i)} aria-label={`Review ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-teal-600' : 'w-1.5 bg-slate-300'}`} />
                ))}
              </div>
              <button onClick={next} aria-label="Next review" className="w-10 h-10 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-ink hover:border-teal-600 hover:text-teal-600 transition-all">
                <ChevronRight size={18} />
              </button>
              <button onClick={() => navigate('/book')} className="ml-auto bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all">
                Book a visit
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
