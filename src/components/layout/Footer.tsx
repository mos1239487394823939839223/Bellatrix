import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, ArrowRightIcon } from 'lucide-react';
import ContactFormModal from '../common/ContactFormModal';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <footer className="w-full py-8 relative overflow-hidden bg-gradient-to-b from-[#0E1121] via-[#1A1D2E] to-[#0E1121] text-[#E5E5E5]">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E5E5E5] to-[#B38BFF]">Bellatrix</h3>
              <p className="mb-4 text-[#E5E5E5]/90">
                Enterprise software consultancy specializing in NetSuite and
                cloud solutions with over 20 years of experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#B38BFF] hover:text-[#9B6BFF] transition-colors duration-300">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#B38BFF] hover:text-[#9B6BFF] transition-colors duration-300">
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/bellatrixinc" className="text-[#B38BFF] hover:text-[#9B6BFF] transition-colors duration-300">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#B38BFF] hover:text-[#9B6BFF] transition-colors duration-300">
                  <YoutubeIcon className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E5E5E5] to-[#B38BFF]">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/implementation" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    NetSuite Implementation
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    NetSuite Support
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    NetSuite Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E5E5E5] to-[#B38BFF]">Our Services</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/implementation" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    NetSuite Implementation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    NetSuite Customization
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    NetSuite Support
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    NetSuite Integration
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300">
                    NetSuite Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E5E5E5] to-[#B38BFF]">Contact Us</h4>
              <ul className="space-y-1">
                <li className="flex items-start text-[#E5E5E5]/90">
                  <MapPinIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-[#B38BFF]" />
                  <span>
                    123 Business Avenue, Suite 500
                    <br />
                    San Francisco, CA 94107
                  </span>
                </li>
                <li className="flex items-center text-[#E5E5E5]/90">
                  <PhoneIcon className="w-6 h-6 mr-3 flex-shrink-0 text-[#B38BFF]" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center text-[#E5E5E5]/90">
                  <MailIcon className="w-6 h-6 mr-3 flex-shrink-0 text-[#B38BFF]" />
                  <span>info@bellatrix.com</span>
                </li>
                <li>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowContactModal(true)} 
                    className="inline-flex items-center font-medium transition-all duration-300 mt-4 text-[#B38BFF] hover:text-[#9B6BFF]"
                  >
                    Send us a message
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </motion.button>
                </li>
              </ul>
            </div>
          </div>

          <div 
            className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center border-t border-[#1A1D2E]"
          >
            <p className="text-sm mb-4 md:mb-0 text-[#E5E5E5]/70">
              &copy; {new Date().getFullYear()} Bellatrix. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-sm text-[#E5E5E5]/70 hover:text-[#B38BFF] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/" className="text-sm text-[#E5E5E5]/70 hover:text-[#B38BFF] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/" className="text-sm text-[#E5E5E5]/70 hover:text-[#B38BFF] transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ContactFormModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  );
};

export default Footer;