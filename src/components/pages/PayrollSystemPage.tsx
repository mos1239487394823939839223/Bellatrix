import React from 'react';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';

const PayrollSystemPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: '#101323' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
              NetSuite Payroll System
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: '#E5E5E5' }}>
              Streamline your payroll processes with our comprehensive solution
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="font-medium py-3 px-8 rounded-md transition"
                style={{ 
                  backgroundColor: '#B38BFF',
                  color: '#0E1121'
                }}
              >
                Schedule Demo
              </button>
              <button 
                className="font-medium py-3 px-8 rounded-md transition border-2"
                style={{ 
                  borderColor: '#B38BFF',
                  color: '#B38BFF'
                }}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1d2e' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }}>
            Comprehensive Payroll Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#101323' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Automated Calculations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Tax calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Deductions management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Benefits administration</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#101323' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Compliance & Reporting
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Tax filing</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Custom reports</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#101323' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Employee Self-Service
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Pay stub access</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Time-off requests</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Benefits enrollment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16" style={{ backgroundColor: '#101323' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }}>
            Seamless Integration
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Time Tracking Integration" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
                Time Tracking Integration
              </h3>
              <p className="mb-6" style={{ color: '#E5E5E5' }}>
                Our NetSuite Payroll System seamlessly integrates with time and attendance systems, providing:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#E5E5E5' }}>Real-time Data Sync</h4>
                    <p style={{ color: '#E5E5E5' }}>Automatic synchronization of time and attendance data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#E5E5E5' }}>Automated Processing</h4>
                    <p style={{ color: '#E5E5E5' }}>Streamlined payroll processing based on accurate time data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#E5E5E5' }}>Compliance Management</h4>
                    <p style={{ color: '#E5E5E5' }}>Ensures compliance with labor laws and regulations</p>
                  </div>
                </li>
              </ul>
              <button 
                className="mt-8 font-medium py-3 px-8 rounded-md transition"
                style={{ 
                  backgroundColor: '#B38BFF',
                  color: '#0E1121'
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12" style={{ backgroundColor: '#1a1d2e' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
            Ready to Streamline Your Payroll?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: '#E5E5E5' }}>
            Contact us today to learn how NetSuite's Payroll System can help you
            save time and ensure accuracy.
          </p>
          <button 
            className="font-medium py-3 px-8 rounded-md transition"
            style={{ 
              backgroundColor: '#B38BFF',
              color: '#0E1121'
            }}
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default PayrollSystemPage;