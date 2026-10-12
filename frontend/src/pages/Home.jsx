import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import VideoShowcase from '../components/VideoShowcase';
import Journey from '../components/Journey';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Reveal from '../components/Reveal';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white">
      <Hero />
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">Who we are</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-ink mt-2">
              Kollam&apos;s home healthcare team, trusted by 5,000+ families
            </h2>
            <p className="text-ink-soft mt-3">
              From our Ayathil head office to our Kalluvathukkal branch — verified nurses,
              honest pricing, and a coordinator who answers.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="mt-5 inline-flex items-center gap-2 text-teal-700 font-bold hover:gap-3 transition-all"
            >
              More about us <ArrowRight size={17} />
            </button>
          </Reveal>
        </div>
      </section>
      <VideoShowcase />
      <Journey />
      <WhyChooseUs />
      <Testimonials />

      <section className="py-16 bg-sand border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto">
            <div
              onClick={() => navigate('/instructions')}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <FileText size={26} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-ink">
                  First time? Read how it works
                </h3>
                <p className="text-ink-soft text-[15px] mt-1">
                  Services, what to expect on the first visit, and how to book.
                </p>
              </div>
              <ArrowRight size={20} className="text-teal-600 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
