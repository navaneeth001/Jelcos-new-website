import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Home, Building2, Baby, Heart, Users, Check, ArrowRight, ArrowLeft, Phone, ShieldCheck, Star } from 'lucide-react';
import { getServiceBySlug, services } from '../serviceData';
import Reveal from '../components/Reveal';

const iconMap = {
  home: Home,
  hospital: Building2,
  baby: Baby,
  heart: Heart,
  users: Users,
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);
  const Icon = service ? iconMap[service.icon] || Heart : Heart;

  if (!service) {
    return (
      <main className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-extrabold text-ink">Service not found</h1>
          <p className="text-ink-soft mt-2">This care page may have moved.</p>
          <Link to="/services" className="inline-flex items-center gap-2 mt-6 bg-teal-600 text-white px-6 py-3 rounded-xl font-bold">
            <ArrowLeft size={17} /> All services
          </Link>
        </div>
      </main>
    );
  }

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="pt-20 bg-white">
      {/* Breadcrumb + hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 hover:gap-2.5 transition-all">
              <ArrowLeft size={15} /> All services
            </Link>
            <div className="flex items-start gap-4 mt-5">
              <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                <Icon size={28} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">{service.tagline}</p>
                <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink tracking-tight mt-1">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="text-lg text-ink-soft mt-4 max-w-3xl leading-relaxed">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={() => navigate('/book')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                Book {service.title} <ArrowRight size={17} />
              </button>
              <a
                href="tel:+919446978999"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 px-7 py-3.5 rounded-xl font-bold text-ink hover:border-teal-600 transition-all"
              >
                <Phone size={16} className="text-teal-600" /> +91 94469 78999
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-5 text-xs font-semibold text-ink-faint">
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5">
                <ShieldCheck size={13} className="text-teal-600" /> Verified staff
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5">
                <Star size={12} className="fill-amber-400 text-amber-400" /> 4.7 rated
              </span>
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1.5">Kollam · Trivandrum · Kerala</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-sand border border-slate-200 rounded-2xl p-7">
              <h2 className="font-display text-2xl font-extrabold text-ink">What&apos;s included</h2>
              <p className="text-ink-soft mt-2 text-[15px] leading-relaxed">{service.detail.intro}</p>
              <ul className="mt-5 space-y-3">
                {service.detail.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink">
                    <span className="w-6 h-6 rounded-full bg-teal-600/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-teal-600" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white border border-slate-200 rounded-2xl p-7">
              <h2 className="font-display text-2xl font-extrabold text-ink">Who this is for</h2>
              <ul className="mt-4 space-y-3">
                {service.detail.whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                    <span className="w-2 h-2 rounded-full bg-teal-600 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-teal-700 text-white rounded-xl p-5">
                <p className="font-bold">Not sure which plan fits?</p>
                <p className="text-teal-100/80 text-sm mt-1">Tell us your situation — we&apos;ll recommend part-time, full-day or 24/7 care.</p>
                <button onClick={() => navigate('/book')} className="mt-4 bg-white text-teal-700 font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-teal-50 transition-all">
                  Get a care assessment
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-ink">Common questions</h2>
            <div className="mt-5 space-y-3">
              {service.detail.faqs.map((f) => (
                <details key={f.q} className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="cursor-pointer px-5 py-4 font-bold text-ink text-[15px] list-none flex items-center justify-between gap-3 hover:bg-slate-50">
                    {f.q}
                    <span className="text-teal-600 font-extrabold group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-ink-soft text-[15px] leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-5">
            <h2 className="font-display text-2xl font-extrabold text-ink">Explore other care</h2>
            <Link to="/services" className="text-sm font-bold text-teal-600 hover:gap-2 inline-flex items-center gap-1">
              View all <ArrowRight size={15} />
            </Link>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((o, i) => {
              const OIcon = iconMap[o.icon] || Heart;
              return (
                <Reveal key={o.slug} delay={i * 70}>
                  <Link to={`/services/${o.slug}`} className="card-lift block rounded-2xl p-6 border border-slate-200 bg-white hover:border-teal-200 hover:shadow-lg h-full">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                      <OIcon size={22} />
                    </div>
                    <h3 className="font-display font-bold text-ink">{o.title}</h3>
                    <p className="text-sm text-ink-soft mt-1 line-clamp-2">{o.tagline}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
