import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';
import VideoShowcase from '../components/VideoShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Hero />
      <VideoShowcase />
      <WhyChooseUs />
      <Testimonials />

      {/* Instruction Manual CTA */}
      <section className="py-20 bg-gradient-to-br from-jelcos-light via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div 
              onClick={() => navigate('/instructions')}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-jelcos-bright/30 cursor-pointer group text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-jelcos-bright/20 to-lime-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="text-jelcos-dark" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-jelcos-dark transition-colors mb-3">
                View Full Instruction Manual
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Complete guide with detailed instructions for availing our services
              </p>
              <div className="inline-flex items-center space-x-2 bg-jelcos-dark hover:bg-jelcos-darker text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                <span>View Manual</span>
                <ExternalLink size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
