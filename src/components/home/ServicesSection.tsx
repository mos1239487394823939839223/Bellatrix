import React from 'react';
import { MessageSquare, LifeBuoy, Briefcase, Puzzle, ArrowRight, BookOpen, Settings, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-[#0E1121] via-[#1A1D2E] to-[#0E1121]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
            Our Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Comprehensive NetSuite solutions designed to transform your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Consultation Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: '#101323' }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#B38BFF' }}>
                <MessageSquare className="w-6 h-6" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-2xl font-semibold" style={{ color: 'white' }}>
                Consultation
              </h3>
            </div>
            <p className="mb-6 text-white">
              Expert guidance to help you make informed decisions about your NetSuite implementation and optimization.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>Implementation</h4>
                  <p className="text-sm text-white/80">Seamless NetSuite implementation tailored to your business needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>Training</h4>
                  <p className="text-sm text-white/80">Comprehensive training programs for your team</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>Customization</h4>
                  <p className="text-sm text-white/80">Tailored solutions to meet your specific requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>Integration</h4>
                  <p className="text-sm text-white/80">Seamless integration with your existing systems</p>
                </div>
              </div>
            </div>
            <Link 
              to="/implementation" 
              className="inline-flex items-center text-[#B38BFF] hover:text-[#9B6BFF] transition-colors duration-300"
            >
              Learn more about our consultation services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Support Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: '#101323' }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#B38BFF' }}>
                <LifeBuoy className="w-6 h-6" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-2xl font-semibold" style={{ color: 'white' }}>
                Support
              </h3>
            </div>
            <p className="mb-6 text-white">
              Comprehensive support services to ensure your NetSuite system runs smoothly and efficiently.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>Oracle NetSuite Support</h4>
                  <p className="text-sm text-white/80">24/7 expert assistance for all NetSuite-related issues</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>System Maintenance</h4>
                  <p className="text-sm text-white/80">Regular updates and performance optimization</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>User Training</h4>
                  <p className="text-sm text-white/80">Ongoing training and knowledge transfer</p>
                </div>
              </div>
            </div>
            <Link 
              to="/support" 
              className="inline-flex items-center text-[#B38BFF] hover:text-[#9B6BFF] transition-colors duration-300"
            >
              Learn more about our support services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Professional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: '#101323' }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#B38BFF' }}>
                <Briefcase className="w-6 h-6" style={{ color: '#0E1121' }} />
              </div>
              <h3 className="text-2xl font-semibold" style={{ color: 'white' }}>
                Professional Services
              </h3>
            </div>
            <p className="mb-6 text-white">
              Specialized services to help professional services firms optimize their operations and client delivery.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>Service Delivery</h4>
                  <p className="text-sm text-white/80">Streamlined service delivery and client management</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>Resource Planning</h4>
                  <p className="text-sm text-white/80">Efficient resource allocation and utilization</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B38BFF' }}></div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'white' }}>Client Management</h4>
                  <p className="text-sm text-white/80">Enhanced client relationship and project delivery</p>
                </div>
              </div>
            </div>
            <Link 
              to="/professional-services" 
              className="inline-flex items-center text-[#B38BFF] hover:text-[#9B6BFF] transition-colors duration-300"
            >
              Learn more about our professional services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;