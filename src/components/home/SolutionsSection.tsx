import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionsSection = () => {
  const solutions = [{
    title: 'NetSuite ERP',
    description: "Streamline your financial operations, improve visibility, and accelerate growth with NetSuite's cloud-based ERP solution.",
    link: '/',
    icon: '📊'
  }, {
    title: 'NetSuite CRM',
    description: 'Unify sales, marketing, and customer service to deliver exceptional customer experiences across all touchpoints.',
    link: '/',
    icon: '🤝'
  }, {
    title: 'SuiteCommerce',
    description: "Create seamless, personalized shopping experiences across all channels with NetSuite's ecommerce platform.",
    link: '/',
    icon: '🛒'
  }, {
    title: 'SuiteAnalytics',
    description: 'Transform your data into actionable insights with powerful analytics, reporting, and business intelligence tools.',
    link: '/',
    icon: '📈'
  }];

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
    <motion.section 
      className="py-16 w-full"
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
            Our Solutions
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#E5E5E5' }}>
            Comprehensive NetSuite solutions tailored to meet your business
            needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              className="rounded-lg shadow-md p-6 flex flex-col"
              style={{ backgroundColor: '#1a1d2e' }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-4" style={{ color: '#B38BFF' }}>{solution.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#E5E5E5' }}>
                {solution.title}
              </h3>
              <p className="mb-6 flex-grow" style={{ color: '#E5E5E5' }}>
                {solution.description}
              </p>
              <a href={solution.link} className="inline-flex items-center font-medium transition mt-auto hover:text-[#9B6BFF]"
                style={{ color: '#B38BFF' }}
              >
                Learn more
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <motion.button 
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-medium py-3 px-6 rounded-md transition"
            style={{ 
              backgroundColor: '#B38BFF',
              color: '#0E1121'
            }}
          >
            Explore All Solutions
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;