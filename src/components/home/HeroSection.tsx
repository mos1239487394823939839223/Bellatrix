import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0E1121] via-[#1A1D2E] to-[#0E1121]">
      {/* Background image */}
      <img 
        src="/images/3.jpg" 
        alt="World map with lights" 
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-85"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5] drop-shadow-lg"
          >
            <span>Bellatrix</span>
          </h1>
          
          <h2 
            className="text-2xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5] drop-shadow-lg"
          >
            Oracle NetSuite Consultancy
          </h2>
          
          <p 
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#ffffff]"
          >
            Streamline operations, enhance productivity, and drive growth with our comprehensive NetSuite implementation and consulting services.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E1121] to-transparent z-20"></div>
    </div>
  );
};

export default HeroSection;