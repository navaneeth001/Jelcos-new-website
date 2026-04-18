import React from 'react';
import { Wallet, ShieldCheck, Headphones, HeartHandshake } from 'lucide-react';
import { whyChooseUs } from '../mockData';

const iconMap = {
  wallet: Wallet,
  'shield-check': ShieldCheck,
  headphones: Headphones,
  'home-heart': HeartHandshake
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-jelcos-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-jelcos-dark">Jelcos?</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're committed to providing exceptional care with professionalism and compassion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-jelcos-bright/20 to-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="text-jelcos-bright" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
