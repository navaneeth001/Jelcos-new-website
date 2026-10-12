import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Heart, MapPin, Phone, Mail, Clock, Star, ArrowRight, GraduationCap, Award } from 'lucide-react';
import { contactInfo, testimonials } from '../mockData';
import Reveal from '../components/Reveal';
import foundersImg from '../assets/AboutUsIllustration.jpeg';

const AboutPage = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: ShieldCheck,
      title: 'Verified, trained staff',
      text: 'Every nurse and caregiver is ID-verified, reference-checked and supervised — no strangers in your home.',
    },
    {
      icon: Heart,
      title: 'Care with dignity',
      text: 'We treat every patient like our own family — with patience, privacy and respect for routines.',
    },
    {
      icon: Phone,
      title: 'Always reachable',
      text: 'A named coordinator, daily updates on WhatsApp, and a phone line that actually gets answered.',
    },
  ];

  const areas = ['Kollam', 'Trivandrum', 'Parippally', 'Chathanoor', 'Paravoor', 'Varkala', 'Kallambalam', 'Attingal', 'Kazhakoottam'];

  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">About Jelcos</p>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink tracking-tight mt-2 max-w-3xl">
              Home healthcare Kollam has trusted for years
            </h1>
            <p className="text-lg text-ink-soft mt-4 max-w-3xl leading-relaxed">
              Jelcos Home Nursing began in Kollam in 2017 with one belief — that hospital-quality care
              belongs at home, delivered by people you can trust. Today we serve 5,000+ families
              across Kerala with nursing, elderly care, house help and recovery support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={() => navigate('/book')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                Book a visit <ArrowRight size={17} />
              </button>
              <a
                href="tel:+919446978999"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 px-7 py-3.5 rounded-xl font-bold text-ink hover:border-teal-600 transition-all"
              >
                <Phone size={16} className="text-teal-600" /> +91 94469 78999
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: '5,000+', l: 'Families served' },
              { v: '4.7', l: 'Google rating' },
              { v: '7', l: 'Care services' },
              { v: '24/7', l: 'Support line' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 60}>
                <div className="bg-sand border border-slate-200 rounded-2xl px-5 py-6 text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-ink font-display">{s.v}</div>
                  <div className="text-sm font-semibold text-ink-faint mt-1">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founders — illustration in brand greens */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-white to-teal-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-8">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">The people behind Jelcos</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-ink mt-2">
              Led by experience, run with heart
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl h-full min-h-[320px]">
                <img
                  src={foundersImg}
                  alt="Prakash B and Mini — founders of Jelcos Home Nursing"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-800/85 via-teal-800/30 to-transparent p-6 pt-16">
                  <p className="text-white font-display font-bold text-lg leading-tight">Prakash B &amp; Mini</p>
                  <p className="text-teal-100 text-sm font-semibold">Founders, Jelcos Home Nursing · Kollam</p>
                </div>
              </div>
            </Reveal>
            <div className="space-y-4">
              <Reveal delay={80}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 hover:border-teal-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink">Prakash B — Founder</h3>
                    <p className="text-ink-soft text-[15px] mt-1 leading-relaxed">
                      Retired government employee in higher education. Brings administrative rigour,
                      process discipline and a lifetime of public service to how Jelcos recruits,
                      trains and supervises every caregiver.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 hover:border-teal-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink">Mini — Care Lead</h3>
                    <p className="text-ink-soft text-[15px] mt-1 leading-relaxed">
                      10 years in home healthcare and care curation, with an excellent track record
                      in customer success. Personally matches each family with the right nurse,
                      follows up on every placement, and steps in when it matters most.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="bg-teal-700 text-white rounded-2xl p-6">
                  <p className="font-bold">Why families mention them by name</p>
                  <p className="text-teal-100/85 text-[15px] mt-1 leading-relaxed">
                    Swift responses, honest advice on what care is actually needed, and caregivers
                    who are briefed on your family before they walk in — that&apos;s the
                    Prakash–Mini standard behind our 4.7 average Google rating.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Story + values */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-white border border-slate-200 rounded-2xl p-7 md:p-8">
              <h2 className="font-display text-2xl font-extrabold text-ink">Our story</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
                <p>
                  Jelcos started near Meditrina Hospital in Ayathil, Kollam — founded by
                  Mr. Prakash, who saw families struggling to find reliable care after discharge.
                  What began as a small nursing team is now one of Kerala&apos;s most-reviewed
                  home healthcare providers.
                </p>
                <p>
                  Our Kalluvathukkal branch extends that same standard to Parippally, Chathanoor,
                  Paravoor, Varkala, Kallambalam, Attingal and Kazhakoottam — so quality care
                  isn&apos;t limited to the city.
                </p>
                <p>
                  NRI families are a big part of our story: daily updates, photo reports and a
                  coordinator abroad families can call any time give them peace of mind from
                  thousands of miles away.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4">
              {values.map((v) => {
                const VIcon = v.icon;
                return (
                  <div key={v.title} className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 hover:border-teal-200 hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <VIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-ink">{v.title}</h3>
                      <p className="text-ink-soft text-[15px] mt-1 leading-relaxed">{v.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Branches */}
      <section className="py-10 md:py-14 bg-sand border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-8">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">Where to find us</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-ink mt-2">Two branches, all of Kerala</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <div className="bg-white border border-slate-200 rounded-2xl p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-ink text-lg">Head Office — Ayathil, Kollam</h3>
                  <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1 text-xs font-extrabold text-amber-700 shrink-0">
                    <Star size={12} className="fill-amber-400 text-amber-400" /> {contactInfo.ratingMain}
                  </span>
                </div>
                <p className="text-ink-soft text-[15px] mt-2 flex items-start gap-2">
                  <MapPin size={16} className="mt-1 shrink-0 text-teal-600" /> {contactInfo.address}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a href="tel:+919446978999" className="inline-flex items-center gap-2 text-teal-700 font-bold">
                    <Phone size={16} /> {contactInfo.phone}
                  </a>
                  <a href={contactInfo.addressLink} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-teal-600 underline">
                    View on map
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="bg-white border border-slate-200 rounded-2xl p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-ink text-lg">Branch — Kalluvathukkal</h3>
                  <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1 text-xs font-extrabold text-amber-700 shrink-0">
                    <Star size={12} className="fill-amber-400 text-amber-400" /> {contactInfo.ratingBranch}
                  </span>
                </div>
                <p className="text-ink-soft text-[15px] mt-2">{contactInfo.addressBranch2}</p>
                <p className="text-ink-faint text-sm mt-1">{contactInfo.branch2Areas}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a href="tel:+918139801294" className="inline-flex items-center gap-2 text-teal-700 font-bold">
                    <Phone size={16} /> {contactInfo.branchPhone}
                  </a>
                  <a href={contactInfo.branch2Link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-teal-600 underline">
                    View on map
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-6">
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm font-semibold text-ink-soft">
                  {a}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-5 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-1.5"><Mail size={15} className="text-teal-600" /> {contactInfo.email}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={15} className="text-teal-600" /> {contactInfo.hours}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-6">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600">What families say</p>
          </Reveal>
          <Reveal>
            <div className="bg-white border border-slate-200 rounded-2xl p-7 md:p-9 shadow-sm">
              <div className="flex gap-1 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-ink text-[17px] leading-relaxed text-center italic">
                “{testimonials[0].content.slice(0, 280)}…”
              </p>
              <p className="text-center font-bold text-ink mt-4">— {testimonials[0].name}</p>
              <div className="text-center mt-5">
                <Link to="/#testimonials" className="text-sm font-bold text-teal-600 hover:underline">
                  Read all reviews
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal className="text-center mt-8">
            <button onClick={() => navigate('/book')} className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all">
              Start with a care assessment
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
