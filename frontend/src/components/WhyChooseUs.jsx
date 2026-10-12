import React from 'react';
import { Wallet, ShieldCheck, Headphones, HeartHandshake } from 'lucide-react';
import { whyChooseUs } from '../mockData';
import Reveal from './Reveal';

const iconMap = {
  wallet: Wallet,
  'shield-check': ShieldCheck,
  headphones: Headphones,
  'home-heart': HeartHandshake,
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-teal-700 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-200">Why Jelcos</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">
            Care you can hold us accountable for
          </h2>
          <p className="text-teal-100/80 mt-3">
            Verified staff, documented care plans, and a team that answers the phone.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyChooseUs.slice(0, 4).map((item, i) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <Reveal key={item.id} delay={i * 70}>
                <div className="bg-white/[0.07] border border-white/10 rounded-2xl p-6 h-full hover:bg-white/[0.11] transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-white/15 text-white inline-flex items-center justify-center mb-4">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="font-display text-base font-bold mb-1.5">{item.title}</h3>
                  <p className="text-teal-100/70 leading-relaxed text-sm">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
