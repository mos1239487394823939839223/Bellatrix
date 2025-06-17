import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const TrainingPage = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const modules = [
    {
      title: "Interactive Learning",
      description: "Engage with hands-on exercises and real-world case studies to deepen understanding.",
      features: [
        "Practical exercises",
        "Real-world scenarios",
        "Interactive sessions",
        "Group activities"
      ],
      duration: "2 weeks"
    },
    {
      title: "Modular Structure",
      description: "Break down complex topics into digestible modules for flexible learning paths.",
      features: [
        "Step-by-step learning",
        "Flexible scheduling",
        "Progress tracking",
        "Customizable pace"
      ],
      duration: "3 weeks"
    },
    {
      title: "Continuous Improvement",
      description: "Foster ongoing skill development with regular updates and advanced topics.",
      features: [
        "Regular updates",
        "Advanced topics",
        "Skill assessments",
        "Performance tracking"
      ],
      duration: "4 weeks"
    },
    {
      title: "Blended Approach",
      description: "Combine self-paced study with expert-led sessions for a comprehensive experience.",
      features: [
        "Self-paced learning",
        "Expert guidance",
        "Virtual sessions",
        "Resource library"
      ],
      duration: "2 weeks"
    },
    {
      title: "Practical Application",
      description: "Focus on immediate usability of learned skills in your daily operations.",
      features: [
        "Real-time practice",
        "Work simulations",
        "Problem-solving",
        "Best practices"
      ],
      duration: "3 weeks"
    },
    {
      title: "Customizable Tracks",
      description: "Tailor training content to specific departmental or role-based requirements.",
      features: [
        "Role-specific content",
        "Department focus",
        "Custom modules",
        "Flexible curriculum"
      ],
      duration: "2 weeks"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0E1121] via-[#1A1D2E] to-[#0E1121]">
      {/* Main Section */}
      <section 
        className="relative py-32 bg-cover bg-center text-white overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `url(/images/7.jpg)`,
          backgroundColor: '#101323' // Fallback background color
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E1121]/80 z-10"></div> {/* Gradient overlay */}
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center my-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5] drop-shadow-lg">
              NetSuite Training
            </h1>
            <p className="text-2xl max-w-3xl mx-auto leading-relaxed text-white drop-shadow-lg">
              Comprehensive training programs designed to help your team
              maximize the value of your NetSuite investment
            </p>

          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left: Training Programs Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-xl p-6 h-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 bg-[#101323]"
            >
              <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                Our Training Programs
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "End-User Training",
                    description: "Comprehensive training for daily users covering navigation, transactions, reporting, and best practices. Perfect for new team members or those transitioning to NetSuite."
                  },
                  {
                    title: "Administrator Training",
                    description: "Advanced training for system administrators covering user management, security settings, customizations, and system maintenance."
                  },
                  {
                    title: "Custom Development Training",
                    description: "Specialized training for developers covering SuiteScript, workflows, custom records, and integration development."
                  },
                  {
                    title: "Executive Overview",
                    description: "High-level training for executives and managers focusing on reporting, analytics, and strategic use of NetSuite features."
                  }
                ].map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <h4 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                      {program.title}
                    </h4>
                    <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                      {program.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-xl p-6 h-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 bg-[#101323]"
            >
              <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                Request More Info From an Expert
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                      Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border border-white/10 focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border border-white/10 focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white" 
                      placeholder="your.email@company.com" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                      Company
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border border-white/10 focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white" 
                      placeholder="Company name" 
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border border-white/10 focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white" 
                      placeholder="(123) 456-7890" 
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                    Message
                  </label>
                  <textarea 
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border border-white/10 focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none h-24 resize-none text-white" 
                    placeholder="Tell us about your training needs"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full px-6 py-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] hover:from-[#9B6BFF] hover:to-[#B38BFF] text-[#0E1121] shadow-lg hover:shadow-xl"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our training programs are designed to help your team maximize your NetSuite investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Training Benefits Timeline */}
            <div className="relative pl-8 border-l-2 border-[#B38BFF]">
            {[
              {
                title: "Expert Instructors",
                  description: "Certified NetSuite professionals with years of real-world experience."
              },
              {
                title: "Customized Content",
                  description: "Training tailored to your specific business needs."
              },
              {
                title: "Hands-on Practice",
                  description: "Practical exercises and real-world scenarios."
              },
              {
                title: "Comprehensive Materials",
                  description: "Detailed documentation and resources."
              },
              {
                title: "Ongoing Support",
                  description: "Post-training support and additional resources."
              },
              {
                title: "Flexible Delivery",
                  description: "On-site, virtual, or hybrid options."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                  className="mb-10 last:mb-0 relative"
              >
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                    <CheckIcon className="w-5 h-5 text-[#0E1121]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                    {benefit.title}
              </h3>
                  <p className="text-white/90">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
            </div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="hidden lg:flex items-center justify-center"
            >
              <img
                src="/images/3.jpg" // Using 3.jpg for a relevant abstract image
                alt="Training illustration"
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[600px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Concepts Section */}
      <section className="w-full py-16 relative overflow-hidden bg-[#0E1121]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
              Key Training Modules
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our structured modules cover every aspect of NetSuite, ensuring comprehensive learning and practical skills for all users.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <ul className="space-y-4">
                {modules.map((module, index) => (
                  <li key={index}>
                    <button
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${activeModuleIndex === index ? 'bg-[#B38BFF]/20 border-[#B38BFF] text-white' : 'bg-[#1A1D2E] border-white/10 hover:border-[#B38BFF]/30 text-white/80'}`}
                      onClick={() => setActiveModuleIndex(index)}
                    >
                      <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                        {module.title}
                      </h3>
                      <span className="text-sm text-white/70">{module.duration}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-3/4 bg-[#1A1D2E] rounded-xl p-8 border border-white/10">
              <motion.div
                key={activeModuleIndex} // Key for re-animating content on tab change
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
                  {modules[activeModuleIndex].title}
                </h3>
                <span className="px-3 py-1 rounded-full text-sm bg-[#B38BFF]/20 text-[#B38BFF] mb-4 inline-block">
                  {modules[activeModuleIndex].duration}
                </span>
                <p className="text-white/90 mb-6">
                  {modules[activeModuleIndex].description}
                </p>
                <ul className="space-y-2 mb-6">
                  {modules[activeModuleIndex].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B38BFF]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] text-[#0E1121] font-medium hover:from-[#9B6BFF] hover:to-[#B38BFF] transition-all duration-300">
                  Start Module
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TrainingPage;