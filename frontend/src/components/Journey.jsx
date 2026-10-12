import React from 'react';
import Reveal from './Reveal';

/** Professional care-scope strip — when Jelcos is the right fit. */
const Journey = () => {
  const items = [
    { title: 'Post-hospital recovery', text: 'Medication schedules, mobility support and wound-care coordination after discharge.' },
    { title: 'Elderly & bedridden care', text: 'Daily assistance, hygiene, companionship and round-the-clock monitoring options.' },
    { title: 'Family support at home', text: 'House help, child care and post-delivery support that keeps the household running.' },
  ];
  return (
    <section className="py-16 md:py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">When to call us</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mt-2 tracking-tight">
            Clear scope, no ambiguity
          </h2>
          <p className="text-ink-soft mt-3">
            Three common situations where families bring us in — with a documented plan from day one.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
          {items.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full">
                <div className="text-xs font-bold text-teal-600 mb-2">0{i + 1}</div>
                <h3 className="font-display text-lg font-bold text-ink mb-1.5">{m.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
