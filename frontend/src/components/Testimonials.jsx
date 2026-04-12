import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../mockData';

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-jelcos-dark">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from families who trust us with their loved ones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="border-2 border-gray-100 hover:border-jelcos-bright/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote size={60} className="text-jelcos-bright" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {testimonial.title}
                </h3>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.date}</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-jelcos-bright/20 to-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-jelcos-dark font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join hundreds of satisfied families</p>
          <button 
            onClick={() => navigate('/book')}
            className="bg-jelcos-dark hover:bg-jelcos-darker text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Book Your Service Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
