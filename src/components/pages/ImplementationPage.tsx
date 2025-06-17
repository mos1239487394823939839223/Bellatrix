import React from 'react';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';

const ImplementationPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center text-white overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `url(/images/6.jpg)`,
          backgroundColor: '#101323' // Fallback background color
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E1121]/80 z-10"></div> {/* Gradient overlay */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              NetSuite Implementation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Our seasoned experts provide unparalleled guidance through every phase of your NetSuite implementation journey, ensuring a seamless transition and optimal system performance for your business success.
            </p>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1d2e' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }}>
            Our Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <span className="text-2xl font-bold" style={{ color: '#0E1121' }}>1</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Discovery
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Understand your business needs and requirements
              </p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <span className="text-2xl font-bold" style={{ color: '#0E1121' }}>2</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Planning
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Develop a detailed implementation strategy
              </p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <span className="text-2xl font-bold" style={{ color: '#0E1121' }}>3</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Implementation
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Execute the implementation plan with precision
              </p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <span className="text-2xl font-bold" style={{ color: '#0E1121' }}>4</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Support
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Provide ongoing support and maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: '#101323' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }}>
            Why Choose Our Implementation Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1a1d2e' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Expert Team
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Our certified consultants bring years of experience in NetSuite implementation
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1a1d2e' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Proven Methodology
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Follow a structured approach to ensure successful implementation
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1a1d2e' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Customized Solutions
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Tailored implementation to meet your specific business needs
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1a1d2e' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Ongoing Support
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Continuous assistance and maintenance after implementation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImplementationPage;