import React from 'react';
import { Play } from 'lucide-react';
import Reveal from './Reveal';

const VideoShowcase = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">See it for yourself</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mt-2 tracking-tight">
            A look at our care in action
          </h2>
          <p className="text-ink-soft mt-3 text-[15px] md:text-base">
            A quick reel from inside a Jelcos visit — then the full walkthrough if you'd like the details.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Portrait reel — the featured video */}
          <Reveal className="flex justify-center md:justify-start">
            <div className="relative">
              {/* soft accent glow */}
              <div className="absolute -inset-3 rounded-[2rem] bg-teal-100/50 blur-2xl" aria-hidden="true"></div>
              {/* phone-style frame */}
              <div className="relative w-[260px] sm:w-[300px] rounded-[1.75rem] p-2 bg-gradient-to-b from-teal-600 to-teal-700 shadow-xl ring-1 ring-teal-700/20">
                <div className="relative rounded-[1.35rem] overflow-hidden bg-ink">
                  <div className="aspect-[9/16]">
                    <iframe
                      src="https://www.youtube.com/embed/nr80ZnSZobs"
                      title="Jelcos Home Nursing Services - Short Overview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 shadow ring-1 ring-slate-200">
                <Play size={12} /> Quick reel
              </span>
            </div>
          </Reveal>

          {/* Secondary: full landscape walkthrough */}
          <Reveal delay={120}>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <Play size={16} />
              </span>
              <h3 className="font-display text-lg font-bold text-ink">Full service walkthrough</h3>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-ink ring-1 ring-slate-200">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ZYnDwjypquA"
                  title="Jelcos home nursing services"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <p className="text-ink-soft text-sm mt-3">
              A longer look at how our nurses and attendants support families across Kollam and Kerala.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;

