import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';

const InstructionManualPage = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-jelcos-light via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-white border-2 border-gray-200 hover:border-jelcos-bright/30 p-3 rounded-xl shadow-sm hover:shadow-md transition-all"
              aria-label="Go back"
            >
              <ArrowLeft size={20} className="text-gray-700" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
                <FileText className="text-jelcos-dark mr-3" size={28} />
                Instruction Manual
              </h1>
              <p className="text-gray-600 mt-1">
                Complete guide for availing our services
              </p>
            </div>
          </div>
          <a
            href="/jelcos_instruction_manual.pdf"
            download
            className="inline-flex items-center space-x-2 bg-jelcos-dark hover:bg-jelcos-darker text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <Download size={20} />
            <span>Download PDF</span>
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="aspect-[8.5/11] w-full">
            <iframe
              src="/jelcos_instruction_manual.pdf"
              className="w-full h-full"
              title="Instruction Manual"
            />
          </div>
        </div>

        {/* Download Section at Bottom */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Having trouble viewing? Download the PDF directly.
          </p>
          <a
            href="/jelcos_instruction_manual.pdf"
            download
            className="inline-flex items-center space-x-2 bg-white border-2 border-jelcos-dark text-jelcos-dark hover:bg-jelcos-dark hover:text-white px-8 py-4 rounded-xl font-medium shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Download size={20} />
            <span>Download Instruction Manual</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default InstructionManualPage;