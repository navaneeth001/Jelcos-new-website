import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToScheduler = () => {
    const element = document.getElementById('scheduler');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart size={16} className="fill-emerald-700" />
              <span>Trusted Care in Kerala</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Provide the Best
              <span className="text-emerald-600 block mt-2">Home Nursing Services</span>
              In Kerala
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Experienced and trained professionals providing compassionate care for your loved ones. 
              Available 24/7 with personalized care plans tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToScheduler}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Book an Appointment
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl transition-all"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">10+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-orange-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart size={120} className="mx-auto text-emerald-600 mb-6" strokeWidth={1.5} />
                  <p className="text-2xl font-semibold text-gray-800">Caring for Your Loved Ones</p>
                  <p className="text-gray-600 mt-4">With compassion and expertise</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="text-emerald-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5.0</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
