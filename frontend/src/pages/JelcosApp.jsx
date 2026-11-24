import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const JelcosApp = () => {
  const navigate = useNavigate();

  // SEO: set page-specific meta tags. These run in the browser (client-side
  // navigation) and are also captured by react-snap when pre-rendering
  // /app/index.html, so crawlers see a fully tagged static page.
  useEffect(() => {
    const url = "https://www.jelcos.com/app";
    const title =
      "Jelcos App — Home Nursing, Elderly Care & Home Help in Kerala for NRIs & Malayalam Families Abroad";
    const description =
      "Download the Jelcos app to book vetted nurses, house maids, hospital bystanders, and child caregivers across Kerala — Kollam, Kochi, Thiruvananthapuram, Kozhikode, Thrissur and more. Built for NRIs and Malayalam families in the Gulf (UAE, Saudi Arabia, Qatar, Oman, Kuwait), UK, USA, Canada and Australia. Track visits, chat with your coordinator, and manage home healthcare from your phone. Private, discreet, arranged across Kerala since 2017. Available on Google Play and the App Store.";
    const keywords =
      "jelcos app, home nursing app kerala, home help app kerala, elderly care app kerala, hospital bystander app kerala, child care app kerala, post delivery care app kerala, home healthcare app kerala, nri home care app, malayalam home nursing app, book nurse kerala from abroad, home nursing for nris, kerala home care app uae, kerala home care app saudi arabia, kerala home care app qatar, kerala home care app oman, kerala home care app kuwait, kerala home care app uk, kerala home care app usa, kerala home care app canada, kerala home care app australia, malayalam caregiver app, home help kerala, elder care kerala, medical tourism kerala app, kollam home nursing, kochi home care, thiruvananthapuram home nurse";

    document.title = title;

    const setMeta = (name, value) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const setProperty = (property, value) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("geo.placename", "Kerala, India");
    setMeta("geo.position", "8.8932;76.6141");
    setMeta("ICBM", "8.8932, 76.6141");
    setMeta("content-language", "en-IN");

    // Canonical URL
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", url);

    // Open Graph
    setProperty("og:type", "website");
    setProperty("og:url", url);
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:image", "https://www.jelcos.com/logo.png");
    setProperty("og:site_name", "Jelcos");
    setProperty("og:locale", "en_IN");
    setProperty("og:locale:alternate", "ml_IN");

    // Twitter Card
    setProperty("twitter:card", "summary_large_image");
    setProperty("twitter:url", url);
    setProperty("twitter:title", title);
    setProperty("twitter:description", description);
    setProperty("twitter:image", "https://www.jelcos.com/logo.png");

    // iOS Smart App Banner
    let appBanner = document.querySelector('meta[name="apple-itunes-app"]');
    if (!appBanner) {
      appBanner = document.createElement("meta");
      appBanner.setAttribute("name", "apple-itunes-app");
      document.head.appendChild(appBanner);
    }
    appBanner.setAttribute("content", "app-id=6793068274");

    // JSON-LD SoftwareApplication schema (helps app visibility in search for Kerala + NRI queries)
    if (!document.querySelector('script[type="application/ld+json"][data-jelcos-app]')) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Jelcos App",
        "applicationCategory": "MedicalApplication",
        "applicationSubCategory": "Home Healthcare",
        "operatingSystem": "Android, iOS",
        "description": description,
        "keywords": keywords,
        "author": {
          "@type": "Organization",
          "name": "Jelcos Home Nursing",
          "url": "https://www.jelcos.com"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "NRIs, Malayalam-speaking families, Kerala residents, Gulf expatriates"
        },
        "areaServed": [
          "Kerala, India",
          "Kollam, Kerala",
          "Kochi, Kerala",
          "Thiruvananthapuram, Kerala",
          "Kozhikode, Kerala",
          "Thrissur, Kerala",
          "United Arab Emirates",
          "Saudi Arabia",
          "Qatar",
          "Oman",
          "Kuwait",
          "United Kingdom",
          "United States",
          "Canada",
          "Australia"
        ],
        "screenshot": "https://www.jelcos.com/logo.png",
        "sameAs": [
          "https://play.google.com/store/apps/details?id=com.jelcos.app",
          "https://apps.apple.com/in/app/jelcos/id6793068274"
        ]
      };
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-jelcos-app", "1");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600 mb-3">
              Jelcos App
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink tracking-tight mt-2 max-w-3xl leading-tight">
              The Jelcos App — Care, Delivered with Discretion
            </h1>
            <p className="text-lg text-ink-soft mt-6 max-w-2xl leading-relaxed">
              Book vetted nurses, house maids, and bystanders with a few taps. Track your
              visits, chat with your coordinator, and manage everything from your phone —
              private, discreet, and arranged across Kerala since 2017.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.jelcos.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Jelcos app on Google Play"
                className="group inline-flex items-center gap-3 rounded-xl bg-slate-900 px-7 py-4 text-white font-bold shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all"
              >
                <span className="relative w-10 h-10 flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5.14V19.14L19.14 12z" />
                  </svg>
                </span>
                Get it on Google Play
              </a>
              <a
                href="https://apps.apple.com/in/app/jelcos/id6793068274"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Jelcos app on the App Store"
                className="group inline-flex items-center gap-3 rounded-xl bg-teal-600 px-7 py-4 text-white font-bold shadow-lg hover:bg-teal-700 hover:-translate-y-1 transition-all"
              >
                <span className="relative w-10 h-10 flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 4 7.5 20h9zM9 13l6 0" />
                  </svg>
                </span>
                Download on the App Store
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      {/* Write-up */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-teal-600 mb-3">
              Why download the Jelcos App
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mb-6">
              Everything you need, in your pocket
            </h2>
            <p className="text-ink-soft text-[16px] leading-relaxed">
              The Jelcos app puts home healthcare at your fingertips. Book verified caregivers,
              schedule visits, receive real-time updates, and chat directly with your named
              coordinator — all from one private, secure place. Whether you need a home nurse,
              a house maid, or a hospital bystander, help is just a few taps away.
            </p>
          </Reveal>

          {/* App advertisement */}
          <div className="mt-16 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
            <img
              src={require('../assets/app-screenshots/App_advertisement.png')}
              alt="Jelcos App advertisement"
              className="w-full max-w-4xl mx-auto h-auto block"
            />
          </div>

        </div>
      </section>
      {/* Still prefer the website? CTA */}
      <section className="py-16 bg-sand border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-xl md:text-2xl font-extrabold text-ink mb-3">
              Prefer booking on the website?
            </h3>
            <p className="text-ink-soft text-[15px] mb-6">
              You can still book and manage everything right here on jelcos.com.
            </p>
            <button
              onClick={() => navigate('/book')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Book a visit <ArrowRight size={17} />
            </button>
            <p className="text-ink-soft text-[14px] mt-6">
              Or call us <a href="tel:+919446978999" className="text-teal-600 font-bold hover:underline">
                +91 94469 78999
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default JelcosApp;