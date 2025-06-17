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
    <div className="min-h-screen bg-[#0E1121] text-white overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center text-white overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `url(/images/6.jpg)`,
          backgroundColor: '#101323' // Fallback background color
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Dark overlay for better text readability */}
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5] drop-shadow-lg">
              Bellatrix your partner in NetSuite Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white drop-shadow-lg">
              Empowering businesses with tailored NetSuite solutions, expert implementation, and unwavering support to drive growth and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#1A1D2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                Our Story
              </h2>
              <p className="mb-6 text-lg text-white/90">
                Bellatrix is a team of experienced NetSuite consultants dedicated to helping businesses optimize their operations through effective implementation and utilization of NetSuite solutions.
              </p>
              <p className="text-lg text-white/90">
                With years of experience in the industry, we have successfully guided numerous organizations through their digital transformation journey, ensuring they achieve their business goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-lg text-center bg-[#101323] border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B38BFF]">50+</h3>
                <p className="text-white/80">Projects Completed</p>
              </div>
              <div className="p-6 rounded-lg text-center bg-[#101323] border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B38BFF]">30+</h3>
                <p className="text-white/80">Expert Consultants</p>
              </div>
              <div className="p-6 rounded-lg text-center bg-[#101323] border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B38BFF]">95%</h3>
                <p className="text-white/80">Client Satisfaction</p>
              </div>
              <div className="p-6 rounded-lg text-center bg-[#101323] border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B58BFF]">10+</h3>
                <p className="text-white/80">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#0E1121]">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg text-center bg-[#1A1D2E] border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF]">
                <Users className="w-8 h-8 text-[#0E1121]" />
              </div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                Implementation
              </h3>
              <p className="text-white/90">
                Expert guidance through the entire NetSuite implementation process
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg text-center bg-[#1A1D2E] border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF]">
                <Award className="w-8 h-8 text-[#0E1121]" />
              </div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                Training
              </h3>
              <p className="text-white/90">
                Comprehensive training programs to maximize your NetSuite investment
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg text-center bg-[#1A1D2E] border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF]">
                <Shield className="w-8 h-8 text-[#0E1121]" />
              </div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                Support
              </h3>
              <p className="text-white/90">
                Ongoing support and maintenance to ensure smooth operations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#101323]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-[#1A1D2E] p-6 rounded-lg border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#B38BFF]">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                John Smith
              </h3>
              <p className="text-sm text-white/80">
                CEO & Founder
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-[#1A1D2E] p-6 rounded-lg border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#B38BFF]">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                Sarah Johnson
              </h3>
              <p className="text-sm text-white/80">
                CTO
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-[#1A1D2E] p-6 rounded-lg border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#B38BFF]">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                Michael Brown
              </h3>
              <p className="text-sm text-white/80">
                Head of Implementation
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default AboutPage;