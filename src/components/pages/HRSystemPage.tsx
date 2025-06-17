import React from 'react';
import { CheckIcon, ArrowRightIcon, Users, Briefcase, Award, BarChart2, Shield, Clock } from 'lucide-react';

const HRSystemPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: '#101323' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
              NetSuite HR System
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: '#E5E5E5' }}>
              Comprehensive HR management solution to streamline your workforce operations
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

      {/* Key Benefits Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1d2e' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }}>
            Why Choose NetSuite HR?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <Users className="w-8 h-8" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Employee Experience
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Empower your workforce with self-service tools and seamless access to HR information
              </p>
            </div>
            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <Shield className="w-8 h-8" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Compliance & Security
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Stay compliant with labor laws and protect sensitive employee data
              </p>
            </div>
            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <BarChart2 className="w-8 h-8" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Analytics & Insights
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Make data-driven decisions with comprehensive HR analytics and reporting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16" style={{ backgroundColor: '#101323' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }}>
            Core Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
                Employee Management
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: '#B38BFF' }}></div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#E5E5E5' }}>Employee Records</h4>
                    <p style={{ color: '#E5E5E5' }}>Centralized employee information management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: '#B38BFF' }}></div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#E5E5E5' }}>Performance Management</h4>
                    <p style={{ color: '#E5E5E5' }}>Track and evaluate employee performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: '#B38BFF' }}></div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#E5E5E5' }}>Time & Attendance</h4>
                    <p style={{ color: '#E5E5E5' }}>Monitor work hours and attendance</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
                Recruitment & Onboarding
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: '#B38BFF' }}></div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#E5E5E5' }}>Applicant Tracking</h4>
                    <p style={{ color: '#E5E5E5' }}>Streamline the hiring process</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: '#B38BFF' }}></div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#E5E5E5' }}>Onboarding Workflows</h4>
                    <p style={{ color: '#E5E5E5' }}>Automated new hire processes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: '#B38BFF' }}></div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#E5E5E5' }}>Document Management</h4>
                    <p style={{ color: '#E5E5E5' }}>Secure storage of employee documents</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1d2e' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }}>
            Seamless Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#101323' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Payroll Integration
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Seamlessly connect with NetSuite Payroll for automated processing and reporting
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#101323' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Time & Attendance
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Integrate with time tracking systems for accurate attendance and leave management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#101323' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: '#E5E5E5' }}>
            Join hundreds of organizations that have streamlined their HR processes with NetSuite
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className="font-medium py-3 px-8 rounded-md transition"
              style={{ 
                backgroundColor: '#B38BFF',
                color: '#0E1121'
              }}
            >
              Schedule a Demo
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
      </section>
    </div>
  );
};

export default HRSystemPage;