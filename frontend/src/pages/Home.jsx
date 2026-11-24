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

      <section className="py-16 bg-teal-50 border-t border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600 mb-3">
              Explore our app
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-ink mt-2">
              Download the Jelcos App
            </h2>
            <p className="text-ink-soft text-[15px] mt-3 max-w-xl mx-auto">
              Book vetted caregivers, track visits, and chat with your coordinator
              — all from one private, secure place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/app"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 text-white font-bold shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-600 shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
                Explore our App
              </a>
            </div>
          </Reveal>
        </div>
      </section>
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
