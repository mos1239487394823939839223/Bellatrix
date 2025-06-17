import React from 'react';
import { Users, Shield, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const KeyBenefitsSection = () => {
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
      style={{ backgroundColor: '#1a1d2e' }}
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
            Key Benefits
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#E5E5E5' }}>
            Discover how our solutions can transform your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Employee Experience */}
          <motion.div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: '#101323' }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#B38BFF' }}>
                <Users className="w-6 h-6" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E5E5E5' }}>
                Employee Experience
              </h3>
            </div>
            <p style={{ color: '#E5E5E5' }}>
              Empower your workforce with intuitive tools and seamless processes
              that enhance productivity and satisfaction.
            </p>
          </motion.div>

          {/* Compliance & Security */}
          <motion.div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: '#101323' }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#B38BFF' }}>
                <Shield className="w-6 h-6" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E5E5E5' }}>
                Compliance & Security
              </h3>
            </div>
            <p style={{ color: '#E5E5E5' }}>
              Ensure your business meets regulatory requirements with robust
              security measures and compliance controls.
            </p>
          </motion.div>

          {/* Analytics & Insights */}
          <motion.div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: '#101323' }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#B38BFF' }}>
                <BarChart className="w-6 h-6" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E5E5E5' }}>
                Analytics & Insights
              </h3>
            </div>
            <p style={{ color: '#E5E5E5' }}>
              Make data-driven decisions with comprehensive analytics and
              real-time insights into your business performance.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default KeyBenefitsSection; 