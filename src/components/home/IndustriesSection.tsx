import React, { useState } from 'react';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, Briefcase, Building2, Factory, Store, Package, CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState('manufacturing');
  const industries = [{
    id: 'manufacturing',
    label: 'Manufacturing',
    icon: <Factory className="w-5 h-5" />,
    content: {
      title: 'Manufacturing Solutions',
      description: 'Streamline your manufacturing operations with our comprehensive NetSuite solutions. From production planning to inventory management, we help you optimize every aspect of your manufacturing process.',
      features: ['Production planning and scheduling', 'Inventory and supply chain management', 'Quality control and compliance', 'Cost accounting and analysis', 'Shop floor control'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  }, {
    id: 'retail',
    label: 'Retail',
    icon: <Store className="w-5 h-5" />,
    content: {
      title: 'Retail Solutions',
      description: 'Transform your retail operations with our integrated NetSuite solutions. Manage inventory, sales, and customer relationships across multiple channels seamlessly.',
      features: ['Multi-channel retail management', 'Inventory optimization', 'Customer relationship management', 'Point of sale integration', 'E-commerce integration'],
      image: 'https://images.unsplash.com/photo-1441986300917-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  }, {
    id: 'professional-services',
    label: 'Professional Services',
    icon: <Briefcase className="w-5 h-5" />,
    content: {
      title: 'Professional Services Solutions',
      description: 'Optimize your service delivery with our NetSuite solutions for professional services firms. From project management to resource allocation, we help you deliver exceptional service.',
      features: ['Project management and tracking', 'Resource allocation and planning', 'Time and expense management', 'Client billing and invoicing', 'Service delivery automation'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  }, {
    id: 'wholesale-distribution',
    label: 'Wholesale Distribution',
    icon: <Package className="w-5 h-5" />,
    content: {
      title: 'Wholesale Distribution Solutions',
      description: 'Optimize your wholesale distribution operations with our NetSuite solutions. From order management to inventory control, we help you streamline your distribution processes.',
      features: ['Order management and fulfillment', 'Inventory and warehouse management', 'Supplier relationship management', 'Pricing and discount management', 'Multi-channel distribution'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  }];
  const activeIndustry = industries.find(industry => industry.id === activeTab);

  return (
    <section 
      className="w-full py-24 relative overflow-hidden"
      style={{ backgroundColor: '#1a1d2e' }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">
            Industries We Serve
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Tailored solutions for various industries to meet their unique needs
          </p>
        </motion.div>

        {/* Tab Navigation with Progress Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-12 max-w-3xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map(industry => (
              <button
                key={industry.id}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 font-medium ${activeTab === industry.id 
                    ? 'bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] text-[#0E1121] shadow-lg' 
                    : 'bg-[#101323] text-[#E5E5E5]/90 hover:bg-[#B38BFF]/10 hover:text-[#B38BFF] border border-[#101323]'
                }`}
                onClick={() => setActiveTab(industry.id)}
              >
                <span className="mr-2 text-[#E5E5E5] group-hover:text-[#B38BFF]">{industry.icon}</span>
                {industry.label}
              </button>
            ))}
          </div>
          {/* Progress Bar */}
          <div className="mt-6 h-2 bg-[#101323] rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] transition-all duration-300"
              style={{ 
                width: `${(industries.findIndex(i => i.id === activeTab) + 1) * (100 / industries.length)}%` 
              }}
            />
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeIndustry && (
          <motion.div
            key={activeIndustry.id} // Key change for re-animation on tab change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-[#B38BFF]/10" style={{ backgroundColor: '#101323' }}
          >
            <div className="order-1 lg:order-1">
              <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E5E5E5] to-[#B38BFF]">
                {activeIndustry.content.title}
              </h3>
              <p className="text-lg mb-6 text-[#E5E5E5]/90">
                {activeIndustry.content.description}
              </p>
              <ul className="space-y-3 mb-6">
                {activeIndustry.content.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-[#B38BFF] mr-3 flex-shrink-0" />
                    <span className="text-base text-[#E5E5E5]/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] hover:from-[#9B6BFF] hover:to-[#B38BFF] text-[#0E1121] shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Learn more about {activeIndustry.content.title}
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </motion.button>
            </div>
            <div className="order-2 lg:order-2">
              <img
                src={activeIndustry.content.image}
                alt={activeIndustry.content.title}
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover border border-[#B38BFF]/10"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IndustriesSection;