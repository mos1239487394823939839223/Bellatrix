import React, { useState } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const SupportPage = () => {
  const [showPopup, setShowPopup] = useState(false);

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
        className="w-full py-16"
        style={{ backgroundColor: '#101323', color: '#E5E5E5' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6" variants={sectionVariants}>
            Oracle NetSuite Support Services
          </motion.h1>
          <motion.p className="text-xl max-w-2xl mx-auto mb-8" variants={sectionVariants}>
            Maximize your NetSuite investment with our comprehensive support
            services
          </motion.p>
          <motion.button 
            className="px-8 py-3 rounded-md font-medium transition hover:opacity-80"
            style={{ backgroundColor: '#B38BFF', color: '#0E1121' }}
            onClick={() => setShowPopup(true)}
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Support
          </motion.button>
        </div>
      </motion.section>
      {/* Two-column Section */}
      <motion.section 
        className="py-16"
        style={{ backgroundColor: '#1a1d2e' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={sectionVariants}>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="NetSuite Support Services" className="rounded-lg shadow-md w-full h-auto" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
                Bellatrix Support Services
              </h2>
              <p className="mb-6" style={{ color: '#E5E5E5' }}>
                Our NetSuite support services are designed to help you get the
                most out of your NetSuite investment. From day-to-day assistance
                to strategic guidance, our team of certified NetSuite experts is
                here to help.
              </p>
              <p className="mb-6" style={{ color: '#E5E5E5' }}>
                With Bellatrix as your support partner, you'll have access to a
                dedicated team that understands your business and your NetSuite
                implementation, ensuring faster issue resolution and continuous
                improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="px-6 py-2 rounded-md font-medium transition hover:opacity-80"
                  style={{ backgroundColor: '#B38BFF', color: '#0E1121' }}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
                <motion.button 
                  className="border px-6 py-2 rounded-md font-medium transition hover:bg-[#B38BFF] hover:text-[#0E1121]"
                  style={{ borderColor: '#B38BFF', color: '#B38BFF' }}
                  onClick={() => setShowPopup(true)}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Quote Section */}
      <motion.section 
        className="py-12"
        style={{ backgroundColor: '#101323' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div className="max-w-3xl mx-auto" variants={sectionVariants}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
              Need NetSuite support? We can help!
            </h3>
            <p className="mb-6" style={{ color: '#E5E5E5' }}>
              Answer the question to get started with our dedicated support
              team.
            </p>
            <motion.button 
              className="px-8 py-3 rounded-md font-medium transition hover:opacity-80"
              style={{ backgroundColor: '#B38BFF', color: '#0E1121' }}
              onClick={() => setShowPopup(true)}
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      {/* 3-column list Section */}
      <motion.section 
        className="py-16"
        style={{ backgroundColor: '#1a1d2e' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="rounded-lg p-8"
            style={{ backgroundColor: '#101323' }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-8 text-center max-w-3xl mx-auto" style={{ color: '#E5E5E5' }}>
              Our NetSuite support services are designed to provide you with the
              assistance you need, when you need it. From troubleshooting to
              optimization, we've got you covered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={cardVariants}>
                <h4 className="font-semibold mb-4" style={{ color: '#E5E5E5' }}>
                  Technical Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>Issue troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>Error resolution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>
                      Performance optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>System monitoring</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={cardVariants}>
                <h4 className="font-semibold mb-4" style={{ color: '#E5E5E5' }}>
                  Functional Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>User assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>Process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>Configuration changes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>Report creation</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={cardVariants}>
                <h4 className="font-semibold mb-4" style={{ color: '#E5E5E5' }}>
                  Strategic Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>Roadmap planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>Release management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>System optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#B38BFF' }} />
                    <span style={{ color: '#E5E5E5' }}>
                      Best practices guidance
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Team Showcase */}
      <motion.section 
        className="py-16"
        style={{ backgroundColor: '#101323' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#E5E5E5' }} variants={sectionVariants}>
            Meet Our Support Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" alt="Jennifer Smith" className="rounded-full w-32 h-32 object-cover mx-auto mb-4" />
              <h3 className="text-xl font-bold" style={{ color: '#E5E5E5' }}>
                Jennifer Smith
              </h3>
              <p className="mb-4" style={{ color: '#B38BFF' }}>Support Team Lead</p>
              <p style={{ color: '#E5E5E5' }}>
                NetSuite certified administrator with 10+ years of experience in
                ERP implementations and support.
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" alt="David Johnson" className="rounded-full w-32 h-32 object-cover mx-auto mb-4" />
              <h3 className="text-xl font-bold" style={{ color: '#E5E5E5' }}>David Johnson</h3>
              <p className="mb-4" style={{ color: '#B38BFF' }}>Technical Support Specialist</p>
              <p style={{ color: '#E5E5E5' }}>
                SuiteScript expert with extensive experience in custom
                development and integrations.
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" alt="Michelle Chen" className="rounded-full w-32 h-32 object-cover mx-auto mb-4" />
              <h3 className="text-xl font-bold" style={{ color: '#E5E5E5' }}>Michelle Chen</h3>
              <p className="mb-4" style={{ color: '#B38BFF' }}>Functional Consultant</p>
              <p style={{ color: '#E5E5E5' }}>
                Specialized in finance and accounting modules with deep industry
                knowledge.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Dedicated Team Section */}
      <motion.section 
        className="py-16"
        style={{ backgroundColor: '#1a1d2e' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold mb-8" style={{ color: '#E5E5E5' }} variants={sectionVariants}>
            Your Own Dedicated Team of Bellatrix
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={sectionVariants}>
              <p className="mb-6" style={{ color: '#E5E5E5' }}>
                When you choose Bellatrix for NetSuite support, you get more
                than just technical assistance. You get a dedicated team that
                understands your business and your NetSuite implementation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>
                    A committed team that knows your NetSuite instance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>
                    One Project Manager and two NetSuite Consultants
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>
                    Regular rotation to ensure no tribal knowledge
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#B38BFF' }} />
                  <span style={{ color: '#E5E5E5' }}>
                    Access to 80+ consultants with specialized expertise
                  </span>
                </li>
              </ul>
              <motion.button 
                className="px-6 py-2 rounded-md font-medium transition hover:opacity-80"
                style={{ backgroundColor: '#B38BFF', color: '#0E1121' }}
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Our Team
              </motion.button>
            </motion.div>
            <motion.div 
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#101323' }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E5E5E5' }}>
                Your Support Team Includes:
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="rounded-full p-3 mr-4" style={{ backgroundColor: '#B38BFF' }}>
                    <span className="text-xl font-bold" style={{ color: '#0E1121' }}>PM</span>
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#E5E5E5' }}>Project Manager</h4>
                    <p className="text-sm" style={{ color: '#E5E5E5' }}>Oversees your support engagement and ensures alignment with your business goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full p-3 mr-4" style={{ backgroundColor: '#B38BFF' }}>
                    <span className="text-xl font-bold" style={{ color: '#0E1121' }}>SC1</span>
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#E5E5E5' }}>Senior Consultant 1</h4>
                    <p className="text-sm" style={{ color: '#E5E5E5' }}>Provides primary functional and technical support, deep understanding of your NetSuite instance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full p-3 mr-4" style={{ backgroundColor: '#B38BFF' }}>
                    <span className="text-xl font-bold" style={{ color: '#0E1121' }}>SC2</span>
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#E5E5E5' }}>Senior Consultant 2</h4>
                    <p className="text-sm" style={{ color: '#E5E5E5' }}>Offers additional expertise and backup, ensuring continuous support and knowledge sharing.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <div className="fixed bottom-4 right-4 z-50">
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative p-6 rounded-lg shadow-xl backdrop-blur-sm bg-gray-800/90 border border-purple-500/20 text-white w-80"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-4">Support Request</h3>
            <p className="mb-4">Are you an existing client or a new inquiry?</p>
            <div className="flex gap-3">
              <button
                className="w-full px-4 py-2 rounded-md font-medium bg-purple-600 hover:bg-purple-700 transition"
                onClick={() => alert('Redirect to existing client support form')}
              >
                Existing Client
              </button>
              <button
                className="w-full px-4 py-2 rounded-md font-medium border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition"
                onClick={() => alert('Redirect to new inquiry form')}
              >
                New Inquiry
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default SupportPage;