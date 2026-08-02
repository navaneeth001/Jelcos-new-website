import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Sparkles, 
  Brush, 
  Home as HomeIcon, 
  CalendarRange, 
  LockKeyhole, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ThumbsUp, 
  FileSpreadsheet, 
  UserCheck 
} from "lucide-react";
import { Button } from "../components/ui/button";

const CleaningServicesPage = () => {
  const navigate = useNavigate();

  const cleaningSubServices = [
    {
      id: "households",
      title: "Household Cleaning Staff",
      description: "Dedicated, vetted, and polite cleaning professionals for daily or deep household maintenance, customized entirely around your family's routine.",
      icon: HomeIcon,
      bgColor: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600",
      features: [
        "Dusting, sweeping, mops, and trash disposal",
        "Kitchen counter, stove, and sink sanitation",
        "Complete bathroom deep cleaning & scrubbing",
        "Polite, punctual, and background-verified staff"
      ]
    },
    {
      id: "routine",
      title: "Monthly Routine Deep Cleaning",
      description: "Comprehensive recurring cleaning visits to keep your home in pristine condition without needing a permanent live-in domestic worker.",
      icon: CalendarRange,
      bgColor: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600",
      features: [
        "Hard-to-reach areas and heavy dust removal",
        "Scrubbing tiles, tiles grouting, and mirrors",
        "Cleaning ceiling fans, fixtures, and window panes",
        "Flexible monthly, bi-weekly, or custom intervals"
      ]
    },
    {
      id: "unoccupied",
      title: "Unoccupied Home Care & Cleaning",
      description: "Specialized care and cleaning for vacant/locked properties. Perfect for NRIs who want to protect their investment from dust, mold, and pest infestations.",
      icon: LockKeyhole,
      bgColor: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600",
      features: [
        "Regular visits to air out, sweep, and mop the home",
        "Dampness checks, leakage inspections, and mold control",
        "Clearance of spiderwebs, dust buildup, and pest prevention",
        "Photo & video reports shared directly with owners online"
      ]
    }
  ];

  const highlights = [
    {
      title: "Vetted & Trained Staff",
      description: "All our cleaners undergo strict background verification and are trained to maintain absolute professionalism, courtesy, and efficiency.",
      icon: UserCheck
    },
    {
      title: "Eco-Friendly Products",
      description: "We use safe, high-grade, eco-friendly cleaning agents that are safe for children, seniors, and household pets.",
      icon: ThumbsUp
    },
    {
      title: "Transparent, Flat Rates",
      description: "No hidden charges or surprise costs. We provide clear, itemized quotes based on your home size and cleaning frequency.",
      icon: FileSpreadsheet
    },
    {
      title: "Reliable NRI Support",
      description: "Trustworthy caretaker service with photographic and video updates for locked homes in Kollam, Trivandrum, and Kerala.",
      icon: ShieldCheck
    }
  ];

  const faqs = [
    {
      question: "How do you verify your cleaning staff?",
      answer: "Safety is our priority. Every member of our cleaning staff is background-checked, vetted with government ID verification, and reference-checked. We train them in hospitality and home security to guarantee your peace of mind."
    },
    {
      question: "Do I need to be present during the cleaning?",
      answer: "No, you don't need to be present, especially for our Unoccupied Home Care service. For occupied homes, you can choose to stay or hand over keys securely to our team leader. We maintain strict protocols for key handling."
    },
    {
      question: "What is included in the Unoccupied Home Care report?",
      answer: "After every visit to your vacant property, we send a comprehensive WhatsApp or email update including high-definition photos and video footage of all rooms, moisture checks, garden upkeep status, and immediate feedback on any maintenance issues (like water leakage)."
    },
    {
      question: "How do I schedule or book a service?",
      answer: "You can book directly using our online scheduler by clicking 'Book Now', selecting 'Cleaning Services', or by calling Mr. Prakash at +91 9446978999 for customized monthly pricing."
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-emerald-50/40 via-white to-orange-50/40">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex items-center space-x-3 mb-6">
          <button
            onClick={() => navigate("/")}
            className="bg-white border-2 border-gray-100 hover:border-emerald-200 p-2.5 rounded-xl shadow-sm hover:shadow-md transition-all group"
            aria-label="Go back to Home"
          >
            <ArrowLeft size={18} className="text-gray-600 group-hover:text-emerald-600 transition-colors" />
          </button>
          <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase bg-emerald-100 px-3 py-1 rounded-full flex items-center">
            <Sparkles size={12} className="mr-1.5 fill-emerald-500 animate-spin-slow" />
            New Offering
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Premium <span className="text-emerald-600">Cleaning Services</span> <br />
              for Kerala Households
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Professional, vetted cleaning staff for daily household chores, scheduled routine monthly deep cleaning, and specialized caretaker services for unoccupied NRI homes across Kollam and Kerala.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => navigate("/book")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Book Cleaning Service
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("offerings");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl transition-all"
              >
                Our Offerings
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-emerald-500 rounded-3xl blur-2xl opacity-10 -rotate-3"></div>
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-bl-full -z-10"></div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Brush className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Clean Home Guarantee</h3>
                  <p className="text-emerald-600 text-sm font-medium">Safe, Trustworthy & Spotless</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you need a daily hand for chores, a deep clean before an event, or a protective companion for your locked property, Jelcos delivers uncompromising standards.
              </p>
              <div className="space-y-3.5">
                <div className="flex items-start">
                  <CheckCircle2 className="text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm text-gray-700 font-medium">Certified & verified cleaning experts</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm text-gray-700 font-medium">Eco-friendly sanitizers & fresh equipment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm text-gray-700 font-medium">Live digital photographic check-in reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Breakdown Section */}
      <div id="offerings" className="bg-white border-y border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized <span className="text-emerald-600">Cleaning Packages</span>
            </h2>
            <p className="text-lg text-gray-600">
              Tailored specifically to address unique household cleaning needs in Kerala, focusing on hygiene, scheduling, and vacant home safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningSubServices.map((sub) => {
              const Icon = sub.icon;
              return (
                <div
                  key={sub.id}
                  className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${sub.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className={sub.iconColor} size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{sub.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{sub.description}</p>
                    <ul className="space-y-3 mb-8">
                      {sub.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle2 className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    onClick={() => navigate("/book")}
                    className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/50 hover:border-emerald-300 shadow-none font-semibold rounded-xl py-5"
                  >
                    Select Plan
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us Highlight Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-emerald-600">Jelcos Cleaning</span>?
          </h2>
          <p className="text-lg text-gray-600">
            Building on our legacy of compassionate care and trustworthy household assistance, we bring security and perfection to professional cleaning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((hl, idx) => {
            const Icon = hl.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:border-emerald-200/60 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-emerald-600" size={22} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{hl.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{hl.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="text-gray-600 mt-2">Everything you need to know about our home cleaning arrangements</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-emerald-50/20 rounded-2xl p-6 border border-emerald-100/50"
              >
                <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-start">
                  <span className="text-emerald-600 font-extrabold mr-2">Q:</span>
                  {faq.question}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NRI Promo Banner CTA */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Living Abroad? Let Us Look After Your Home in Kerala.</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Protect your unoccupied home from the harsh tropical climate, moisture damage, and structural degradation. Our reliable team performs regular airing, deep cleaning, leakage checks, and garden maintenance, keeping you fully informed with detailed digital video updates.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919446978999"
              className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
            >
              <Clock size={18} className="mr-2" />
              Call +91 9446978999
            </a>
            <Button
              onClick={() => navigate("/book")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold border border-emerald-500/30 px-8 py-6 rounded-xl transition-all"
            >
              Schedule Online Inspection
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CleaningServicesPage;
