import React from 'react';
import { Play } from 'lucide-react';

const VideoShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Our <span className="text-emerald-600">Care in Action</span>
          </h2>
          <p className="text-lg text-gray-600">
            Watch how we provide compassionate and professional care to families across Kerala
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ZYnDwjypquA"
                title="Jelcos Home Nursing Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-emerald-50 to-orange-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-orange-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">Certified</div>
              <div className="text-gray-700 font-medium">Professional Staff</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-orange-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">All Kerala</div>
              <div className="text-gray-700 font-medium">Service Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
