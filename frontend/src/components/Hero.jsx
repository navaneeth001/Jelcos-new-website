import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

import img1 from '../assets/pic1.png';
import img2 from '../assets/pic2.png';
import img3 from '../assets/pic3.png';
import img4 from '../assets/pic4.png';
import img5 from '../assets/pic5.png';

const heroImages = [
  img1, img2, img3, img4, img5
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-jelcos-light via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-jelcos-bright/20 text-jelcos-darker px-4 py-2 rounded-full text-sm font-medium">
              <Heart size={16} className="fill-jelcos-bright text-jelcos-bright" />
              <span>Trusted Care in Kerala</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Provide the Best
              <span className="text-jelcos-dark block mt-2">Home Nursing Services</span>
              In Kerala
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Experienced and trained professionals providing compassionate care for your loved ones. 
              Available 24/7 with personalized care plans tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/book')}
                className="bg-jelcos-dark hover:bg-jelcos-darker text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Book an Appointment
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/services')}
                className="border-2 border-jelcos-dark text-jelcos-dark hover:bg-jelcos-light px-8 py-6 text-lg rounded-xl transition-all"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-jelcos-dark">500+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-jelcos-dark">10+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-jelcos-dark">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Image Slideshow */}
              <div className="relative aspect-square">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Healthcare service ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="text-jelcos-dark" size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="text-jelcos-dark" size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
