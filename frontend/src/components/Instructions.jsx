import React, { useState } from 'react';
import { X, BookOpen, User, FileText, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import customerInstructions from '../assets/CustomerInstructions.png';
import employeeInstructions from '../assets/EmployeeInstructions.png';

const Instructions = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const navigate = useNavigate();

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  const instructionButtons = [
    {
      id: 'customer',
      label: 'Customer Instructions',
      image: customerInstructions,
      icon: User,
      iconBg: 'from-jelcos-bright/20 to-lime-100'
    },
    {
      id: 'employee',
      label: 'Employee Instructions',
      image: employeeInstructions,
      icon: BookOpen,
      iconBg: 'from-orange-100 to-amber-100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-jelcos-light via-white to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Instructions
          </h2>
          <p className="text-lg text-gray-600">
            Please read the instructions carefully before availing our services
          </p>
        </div>

        {/* Instruction Buttons */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
          {instructionButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.id}
                onClick={() => openFullscreen(btn.image)}
                className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-jelcos-bright/30 text-left"
              >
                <div className="flex items-start space-x-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${btn.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-jelcos-dark" size={32} />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-jelcos-dark transition-colors">
                      {btn.label}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-700 transition-colors">
                      Click to view in fullscreen
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* View Full Manual Link */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center space-x-3 bg-white border-2 border-gray-200 hover:border-jelcos-bright/30 rounded-2xl px-8 py-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => navigate('/instructions')}>
            <div className="w-12 h-12 bg-gradient-to-br from-jelcos-bright/20 to-lime-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FileText className="text-jelcos-dark" size={24} />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-jelcos-dark transition-colors">
                View Full Manual
              </h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">
                Complete instruction manual with detailed guide
              </p>
            </div>
            <ExternalLink size={20} className="text-jelcos-dark ml-2 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all border border-white/20 z-10"
            aria-label="Close fullscreen"
          >
            <X size={28} />
          </button>

          {/* Image */}
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <img
              src={fullscreenImage}
              alt="Instructions"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Click outside hint */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            Click anywhere outside the image to close
          </p>
        </div>
      )}
    </section>
  );
};

export default Instructions;