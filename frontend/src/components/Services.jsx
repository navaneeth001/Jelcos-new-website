import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Baby, Heart, Users, Check, ArrowRight } from 'lucide-react';
import { services } from '../serviceData';
import Reveal from './Reveal';

const iconMap = {
  home: Home,
  hospital: Building2,
  baby: Baby,
  heart: Heart,
  users: Users,
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">Our services</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mt-2 tracking-tight">
            Complete home healthcare, one team
          </h2>
          <p className="text-ink-soft mt-3">
            Nursing, elderly care, house help and recovery support — with clear scope and pricing, agreed upfront.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || Heart;
            return (
              <Reveal key={service.id} delay={(i % 3) * 70}>
                <Link
                  to={`/services/${service.slug}`}
                  className="card-lift group rounded-2xl p-6 border border-slate-200 bg-white hover:border-teal-200 hover:shadow-lg cursor-pointer h-full block"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed mb-4 text-ink-soft">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-ink-soft">
                        <Check size={15} className="text-teal-600 mr-2 shrink-0" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 group-hover:gap-2.5 transition-all">
                    View details <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
