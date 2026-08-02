import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Building2, Baby, Heart, Users, Check, Brush } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { services } from '../mockData';

const iconMap = {
  home: Home,
  hospital: Building2,
  baby: Baby,
  heart: Heart,
  users: Users,
  brush: Brush
};

const Services = () => {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-jelcos-dark">Care Services</span> in Kollam, Trivandrum & Kerala
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive home nursing, elderly care, house help, and medical tourism support services tailored to meet your family's unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Brush;
            const isCleaning = service.id === 8;
            return (
              <Card 
                key={service.id} 
                onClick={() => {
                  if (isCleaning) {
                    navigate('/services/cleaning');
                  } else {
                    navigate('/book');
                  }
                }}
                className={`group hover:shadow-xl transition-all duration-300 border-2 cursor-pointer flex flex-col justify-between ${isCleaning ? 'border-emerald-200 hover:border-emerald-500 bg-emerald-50/10' : 'hover:border-jelcos-bright/30'}`}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${isCleaning ? 'bg-gradient-to-br from-emerald-100 to-teal-50' : 'bg-gradient-to-br from-jelcos-bright/20 to-orange-100'}`}>
                    <IconComponent className={isCleaning ? 'text-emerald-600' : 'text-jelcos-bright'} size={32} />
                  </div>
                  <CardTitle className={`text-xl font-bold text-gray-900 transition-colors ${isCleaning ? 'group-hover:text-emerald-700' : 'group-hover:text-jelcos-dark'}`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <Check className={isCleaning ? 'text-emerald-500 mr-2 flex-shrink-0' : 'text-jelcos-bright mr-2 flex-shrink-0'} size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {isCleaning && (
                    <div className="text-emerald-600 group-hover:text-emerald-700 font-semibold text-sm pt-2 flex items-center gap-1">
                      Learn More & View Plans <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  )}
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
