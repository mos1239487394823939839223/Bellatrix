import React, { useState } from 'react';
import { CheckIcon, Users, Award, Globe, Briefcase, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactFormModal from '../common/ContactFormModal';

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(/images/7.jpg)`,
          backgroundColor: '#101323' // Fallback background color
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div> {/* Dark overlay */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Bellatrix
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your trusted NetSuite consultants, helping businesses transform their operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="font-medium py-3 px-8 rounded-md transition"
                style={{ 
                  backgroundColor: '#B38BFF',
                  color: '#0E1121'
                }}
                onClick={handleOpenModal}
              >
                Contact Us
              </button>
              <button 
                className="font-medium py-3 px-8 rounded-md transition border-2"
                style={{ 
                  borderColor: '#B38BFF',
                  color: '#B38BFF'
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1d2e' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
                Our Story
              </h2>
              <p className="mb-6" style={{ color: '#E5E5E5' }}>
                Bellatrix is a team of experienced NetSuite consultants dedicated to helping businesses optimize their operations through effective implementation and utilization of NetSuite solutions.
              </p>
              <p style={{ color: '#E5E5E5' }}>
                With years of experience in the industry, we have successfully guided numerous organizations through their digital transformation journey, ensuring they achieve their business goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#B38BFF' }}>50+</h3>
                <p style={{ color: '#E5E5E5' }}>Projects Completed</p>
              </div>
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#B38BFF' }}>30+</h3>
                <p style={{ color: '#E5E5E5' }}>Expert Consultants</p>
              </div>
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#B38BFF' }}>95%</h3>
                <p style={{ color: '#E5E5E5' }}>Client Satisfaction</p>
              </div>
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#101323' }}>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#B38BFF' }}>10+</h3>
                <p style={{ color: '#E5E5E5' }}>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" style={{ backgroundColor: '#101323' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#1a1d2e' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <Users className="w-8 h-8" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Implementation
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Expert guidance through the entire NetSuite implementation process
              </p>
            </div>
            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#1a1d2e' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <Award className="w-8 h-8" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Training
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Comprehensive training programs to maximize your NetSuite investment
              </p>
            </div>
            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#1a1d2e' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <Shield className="w-8 h-8" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Support
              </h3>
              <p style={{ color: '#E5E5E5' }}>
                Ongoing support and maintenance to ensure smooth operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1d2e' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }}>
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E5E5E5' }}>
                John Smith
              </h3>
              <p className="text-sm" style={{ color: '#E5E5E5' }}>
                CEO & Founder
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E5E5E5' }}>
                Sarah Johnson
              </h3>
              <p className="text-sm" style={{ color: '#E5E5E5' }}>
                CTO
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E5E5E5' }}>
                Michael Brown
              </h3>
              <p className="text-sm" style={{ color: '#E5E5E5' }}>
                Head of Implementation
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default AboutPage;