import React from 'react';
import HeroSection from '../home/HeroSection';
import ServicesSection from '../home/ServicesSection';
import TestimonialsSection from '../home/TestimonialsSection';
import IndustriesSection from '../home/IndustriesSection';

const HomePage = () => {
  return (
    <div 
      className="w-full min-h-screen" 
      style={{ 
        backgroundColor: '#0E1121',
        backgroundImage: `radial-gradient(circle at 1px 1px, #1A1D2E 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}
    >
      <div className="relative">
        {/* Hero Section with full viewport height */}
        <section className="min-h-screen" style={{ backgroundColor: '#101323' }}>
          <HeroSection />
        </section>

        {/* Main content sections with smooth transitions */}
        <div className="space-y-24">
          <section className="relative" style={{ backgroundColor: '#1a1d2e' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1d2e] h-24 -top-24"></div>
            <ServicesSection />
          </section>

          <section className="relative" style={{ backgroundColor: '#101323' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#101323] h-24 -top-24"></div>
            <TestimonialsSection />
          </section>

          <section className="relative" style={{ backgroundColor: '#1a1d2e' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1d2e] h-24 -top-24"></div>
            <IndustriesSection />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;