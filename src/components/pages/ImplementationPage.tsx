import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import ContactFormModal from '../common/ContactFormModal';

const ImplementationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div> {/* Dark overlay for better text readability */}
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5] drop-shadow-lg">
              NetSuite Implementation
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white drop-shadow-lg">
              Seamlessly integrate NetSuite into your business with our expert implementation services, ensuring a smooth transition and optimal performance.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button 
                className="font-medium py-3 px-8 rounded-md transition-all duration-300 bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] hover:from-[#9B6BFF] hover:to-[#B38BFF] text-[#0E1121] shadow-lg hover:shadow-xl"
                onClick={() => setIsModalOpen(true)}
              >
                Request Consultation
              </button>
              <button 
                className="font-medium py-3 px-8 rounded-md transition-all duration-300 border-2 border-[#B38BFF] text-[#B38BFF] hover:bg-[#B38BFF]/10 hover:text-white shadow-lg hover:shadow-xl"
              >
                Our Approach
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#1A1D2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
            Our Implementation Process
          </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              We follow a structured and collaborative approach to ensure a successful NetSuite implementation that aligns with your business objectives.
            </p>
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* Desktop timeline line */}
            <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#B38BFF] to-[#9B6BFF] z-0"></div>

            {[{
              title: 'Discovery & Planning',
              description: 'We begin by thoroughly understanding your current business processes, requirements, and future goals to create a detailed project plan.',
              icon: <CheckIcon className="w-6 h-6 text-[#0E1121]" />,
            },
            {
              title: 'Configuration & Development',
              description: 'Our experts configure NetSuite to your specific needs, developing custom solutions and integrations as required.',
              icon: <CheckIcon className="w-6 h-6 text-[#0E1121]" />,
            },
            {
              title: 'Data Migration',
              description: 'We ensure a smooth and accurate transfer of your existing data into NetSuite, minimizing disruption and maintaining data integrity.',
              icon: <CheckIcon className="w-6 h-6 text-[#0E1121]" />,
            },
            {
              title: 'Testing & Quality Assurance',
              description: 'Rigorous testing is performed to ensure all functionalities work as expected, addressing any issues before going live.',
              icon: <CheckIcon className="w-6 h-6 text-[#0E1121]" />,
            },
            {
              title: 'Training & Go-Live',
              description: 'Comprehensive training is provided to your team, followed by a seamless transition to the live NetSuite environment.',
              icon: <CheckIcon className="w-6 h-6 text-[#0E1121]" />,
            },
            {
              title: 'Post-Implementation Support',
              description: 'We offer ongoing support and optimization services to ensure your NetSuite system continues to meet your evolving business needs.',
              icon: <CheckIcon className="w-6 h-6 text-[#0E1121]" />,
            }].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className={`flex flex-col md:relative md:w-1/2 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:self-start md:pr-16 md:text-right' : 'md:self-end md:pl-16 md:text-left'
                }`}
              >
                {/* Desktop dot */}
                <div className="hidden md:flex absolute top-0 w-8 h-8 rounded-full bg-[#B38BFF] items-center justify-center z-10"
                  style={{
                    left: index % 2 === 0 ? 'calc(100% + 1.25rem)' : '-2rem'
                  }}
                >
                  {step.icon}
            </div>
                {/* Mobile dot and line */}
                <div className="flex md:hidden items-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#B38BFF] flex items-center justify-center flex-shrink-0 mr-4">
                    {step.icon}
              </div>
                  <div className="flex-grow h-1 bg-[#B38BFF]"></div>
            </div>
                <div className="bg-[#101323] p-6 rounded-lg shadow-lg border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                    {step.title}
              </h3>
                  <p className="text-white/80">
                    {step.description}
              </p>
            </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#0E1121]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
              Why Choose Bellatrix for Implementation?
          </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our commitment to excellence and deep NetSuite expertise make us the ideal partner for your implementation needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: 'Experienced Team',
              description: 'Our certified consultants have extensive experience in diverse industries.',
            },
            {
              title: 'Tailored Solutions',
              description: 'Customized implementation strategies to fit your unique business processes.',
            },
            {
              title: 'Post-Go-Live Support',
              description: 'Dedicated support to ensure a smooth transition and ongoing optimization.',
            },
            {
              title: 'Proven Methodology',
              description: 'A structured approach that minimizes risks and maximizes efficiency.',
            },
            {
              title: 'Client-Centric Focus',
              description: 'Your success is our priority, and we work closely with you every step of the way.',
            },
            {
              title: 'Cost-Effective',
              description: 'Delivering maximum value and ROI for your NetSuite investment.',
            }].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-[#1A1D2E] border border-white/10 hover:border-[#B38BFF]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                  {feature.title}
              </h3>
                <p className="text-white/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#1A1D2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
              Ready for a Seamless NetSuite Implementation?
          </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project and discover how we can help you achieve your business goals with NetSuite.
          </p>
          <button 
              className="font-medium py-3 px-8 rounded-md transition-all duration-300 bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] hover:from-[#9B6BFF] hover:to-[#B38BFF] text-[#0E1121] shadow-lg hover:shadow-xl"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
          </button>
          </motion.div>
        </div>
      </section>

      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ImplementationPage;