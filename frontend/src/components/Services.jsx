import React from 'react';
import { Home, Building2, Baby, Heart, Users, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { services } from '../mockData';

const iconMap = {
  home: Home,
  hospital: Building2,
  baby: Baby,
  heart: Heart,
  users: Users
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-jelcos-dark">Care Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive healthcare services tailored to meet your family's unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-jelcos-bright/30 cursor-pointer"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-jelcos-bright/20 to-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-jelcos-bright" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-jelcos-dark transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <Check className="text-jelcos-bright mr-2 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
