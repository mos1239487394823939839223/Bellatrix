import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-4xl font-bold mb-6" 
            style={{ color: '#E5E5E5' }}
            variants={sectionVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto" 
            style={{ color: '#E5E5E5' }}
            variants={sectionVariants}
          >
            Join hundreds of businesses that have streamlined their operations
            with our comprehensive solutions.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] hover:from-[#9B6BFF] hover:to-[#B38BFF] text-[#0E1121] shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Schedule a Demo
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </motion.button>
            <motion.button 
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-medium transition-all duration-300 border border-[#B38BFF] text-[#B38BFF] hover:bg-[#B38BFF] hover:text-[#0E1121] shadow-lg hover:shadow-xl"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection; 