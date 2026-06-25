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

      {/* YouTube Shorts Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-jelcos-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick <span className="text-jelcos-dark">Overview</span>
            </h2>
            <p className="text-lg text-gray-600">
              Watch a short video to learn more about our services
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/nr80ZnSZobs"
                  title="Jelcos Home Nursing Services - Short Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                View Full Instruction Manual for Home Nursing & Care Services
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Complete guide with detailed instructions for availing our home nursing, elderly care, house help, and medical tourism services in Kollam, Trivandrum & Kerala
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
