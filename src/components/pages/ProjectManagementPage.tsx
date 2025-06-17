import React from 'react';
import { CheckIcon, Users, Briefcase, Award, BarChart2, Shield, Clock, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectManagementPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="w-full py-20 relative overflow-hidden"
        style={{ backgroundColor: '#101323' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
                Project Management Solutions
              </h1>
              <p className="text-xl mb-8" style={{ color: '#E5E5E5' }}>
                Streamline your project workflows, enhance team collaboration, and deliver projects on time with our comprehensive NetSuite project management solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-medium py-3 px-8 rounded-md transition"
                  style={{ 
                    backgroundColor: '#B38BFF',
                    color: '#0E1121'
                  }}
                >
                  Schedule a Demo
                </motion.button>
                <motion.button 
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-medium py-3 px-8 rounded-md transition border-2"
                  style={{ 
                    borderColor: '#B38BFF',
                    color: '#B38BFF'
                  }}
                >
                  View Features
                </motion.button>
              </div>
            </motion.div>
            <div className="lg:flex justify-end hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Project Management" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section 
        className="py-16"
        style={{ backgroundColor: '#1a1d2e' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }} variants={sectionVariants}>
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-8 rounded-lg" 
              style={{ backgroundColor: '#101323' }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <Users className="w-8 h-8" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#E5E5E5' }}>
                Team Collaboration
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Real-time team communication</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Task assignment and tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Document sharing and version control</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="p-8 rounded-lg" 
              style={{ backgroundColor: '#101323' }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <Briefcase className="w-8 h-8" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#E5E5E5' }}>
                Project Planning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Resource allocation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Timeline management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Budget tracking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="p-8 rounded-lg" 
              style={{ backgroundColor: '#101323' }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B38BFF' }}>
                <BarChart2 className="w-8 h-8" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#E5E5E5' }}>
                Analytics & Reporting
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Project performance metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Resource utilization reports</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>Custom dashboards</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-16"
        style={{ backgroundColor: '#101323' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionVariants}>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
                Why Choose Our Project Management Solution?
              </h2>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#B38BFF' }}>
                    <Award className="w-6 h-6" style={{ color: '#0E1121' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#E5E5E5' }}>Improved Efficiency</h3>
                    <p style={{ color: '#E5E5E5' }}>Streamline project workflows and reduce administrative overhead with automated processes and integrated tools.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#B38BFF' }}>
                    <Shield className="w-6 h-6" style={{ color: '#0E1121' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#E5E5E5' }}>Better Collaboration</h3>
                    <p style={{ color: '#E5E5E5' }}>Enhance team communication and coordination with real-time updates and shared resources.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#B38BFF' }}>
                    <Clock className="w-6 h-6" style={{ color: '#0E1121' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#E5E5E5' }}>On-Time Delivery</h3>
                    <p style={{ color: '#E5E5E5' }}>Meet project deadlines consistently with comprehensive planning and monitoring tools.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <div className="lg:flex justify-end hidden">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Project Management Benefits" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16"
        style={{ backgroundColor: '#1a1d2e' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="text-3xl font-bold mb-6" style={{ color: '#E5E5E5' }} variants={sectionVariants}>
            Ready to Transform Your Project Management?
          </motion.h2>
          <motion.p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: '#E5E5E5' }} variants={sectionVariants}>
            Join leading organizations that trust our solutions to deliver successful projects.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-medium py-3 px-8 rounded-md transition"
              style={{ 
                backgroundColor: '#B38BFF',
                color: '#0E1121'
              }}
            >
              Schedule a Demo
            </motion.button>
            <motion.button 
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-medium py-3 px-8 rounded-md transition border-2"
              style={{ 
                borderColor: '#B38BFF',
                color: '#B38BFF'
              }}
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectManagementPage; 