import React from 'react';
import Reveal from './Reveal';

const VideoShowcase = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">How we work</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mt-2 tracking-tight">
            A look at our care in practice
          </h2>
        </Reveal>

        <Reveal>
          <div className="max-w-4xl">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-ink">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default VideoShowcase;
