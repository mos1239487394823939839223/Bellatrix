import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section 
      className="w-full py-24 relative overflow-hidden"
      style={{ backgroundColor: '#101323' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
            What Our Clients Say
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Hear from businesses that have transformed their operations with our solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-[#B38BFF]/10 hover:border-[#B38BFF]/20 transition-all duration-300 group"
            style={{ backgroundColor: '#1a1d2e' }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
          >
            <div className="mb-4">
              <Quote className="w-10 h-10 text-[#B38BFF] group-hover:text-[#9B6BFF] transition-colors duration-300" />
            </div>
            <p className="mb-6 text-lg text-[#E5E5E5] group-hover:text-[#E5E5E5] transition-colors duration-300">
              "Bellatrix has transformed our business operations with their
              expertise in NetSuite implementation. Their team's dedication and
              knowledge have been invaluable."
            </p>
            <div>
              <h4 className="font-semibold text-xl text-[#E5E5E5] group-hover:text-[#B38BFF] transition-colors duration-300">
                John Smith
              </h4>
              <p className="text-sm text-[#B38BFF] group-hover:text-[#9B6BFF] transition-colors duration-300">
                CEO, Tech Solutions Inc.
              </p>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-[#B38BFF]/10 hover:border-[#B38BFF]/20 transition-all duration-300 group"
            style={{ backgroundColor: '#1a1d2e' }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
          >
            <div className="mb-4">
              <Quote className="w-10 h-10 text-[#B38BFF] group-hover:text-[#9B6BFF] transition-colors duration-300" />
            </div>
            <p className="mb-6 text-lg text-[#E5E5E5] group-hover:text-[#E5E5E5] transition-colors duration-300">
              "The customization services provided by Bellatrix have helped us
              streamline our processes and improve efficiency across all
              departments."
            </p>
            <div>
              <h4 className="font-semibold text-xl text-[#E5E5E5] group-hover:text-[#B38BFF] transition-colors duration-300">
                Sarah Johnson
              </h4>
              <p className="text-sm text-[#B38BFF] group-hover:text-[#9B6BFF] transition-colors duration-300">
                Operations Director, Global Manufacturing
              </p>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-[#B38BFF]/10 hover:border-[#B38BFF]/20 transition-all duration-300 group"
            style={{ backgroundColor: '#1a1d2e' }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
          >
            <div className="mb-4">
              <Quote className="w-10 h-10 text-[#B38BFF] group-hover:text-[#9B6BFF] transition-colors duration-300" />
            </div>
            <p className="mb-6 text-lg text-[#E5E5E5] group-hover:text-[#E5E5E5] transition-colors duration-300">
              "Their ongoing support and maintenance services have ensured our
              systems run smoothly, allowing us to focus on growing our business."
            </p>
            <div>
              <h4 className="font-semibold text-xl text-[#E5E5E5] group-hover:text-[#B38BFF] transition-colors duration-300">
                Michael Brown
              </h4>
              <p className="text-sm text-[#B38BFF] group-hover:text-[#9B6BFF] transition-colors duration-300">
                IT Manager, Retail Solutions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;