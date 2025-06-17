import React from 'react';
import { CreditCard, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const IntegrationSection = () => {
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
      className="w-full py-16"
      style={{ backgroundColor: '#101323' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
            Seamless Integrations
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#E5E5E5' }}>
            Connect your systems and streamline your operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payroll Integration */}
          <motion.div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: '#1a1d2e' }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#B38BFF' }}>
                <CreditCard className="w-6 h-6" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E5E5E5' }}>
                Payroll Integration
              </h3>
            </div>
            <p style={{ color: '#E5E5E5' }}>
              Seamlessly connect your payroll system with our HR management
              solution for accurate and efficient processing.
            </p>
          </motion.div>

          {/* Time & Attendance */}
          <motion.div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: '#1a1d2e' }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#B38BFF' }}>
                <Clock className="w-6 h-6" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E5E5E5' }}>
                Time & Attendance
              </h3>
            </div>
            <p style={{ color: '#E5E5E5' }}>
              Track employee time and attendance with precision, ensuring accurate
              payroll processing and compliance.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default IntegrationSection; 