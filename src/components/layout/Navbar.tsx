import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, MenuIcon, XIcon, HomeIcon, BriefcaseIcon, MessageSquareIcon, BuildingIcon, PuzzleIcon, InfoIcon, ArrowRightIcon, LifeBuoyIcon } from 'lucide-react';
import ContactFormModal from '../common/ContactFormModal';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isSupportHovered, setIsSupportHovered] = useState(false);
  const [isConsultationHovered, setIsConsultationHovered] = useState(false);
  const [isOracleNetSuiteHovered, setIsOracleNetSuiteHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileActiveMenu(null);
  };

  const handleMenuEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  const handleNavLinkClick = () => {
    setActiveMenu(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full shadow-lg backdrop-blur-md bg-[#0E1121]/50">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={handleNavLinkClick}>
              <img
                src="/images/logo.png"
                alt="Bellatrix Logo"
                className="h-24 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link 
                to="/"
                className="font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>

              {/* Services with Mega Menu */}
              <div className="relative" onMouseEnter={() => handleMenuEnter('services')} onMouseLeave={handleMenuLeave}>
                <button className="flex items-center font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]">
                  Services
                </button>

                <AnimatePresence>
                  {activeMenu === 'services' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 w-full shadow-2xl py-6 px-8 mt-6 z-50 flex justify-center backdrop-blur-sm bg-[#1A1D2E]/95 border-t border-b border-[#B38BFF]/20 overflow-hidden"
                      onMouseEnter={() => handleMenuEnter('services')} // Keep menu open if mouse re-enters
                      onMouseLeave={handleMenuLeave}
                      style={{ minHeight: '250px' }}
                    >
                      <div className="flex flex-col items-start space-y-2">
                        {/* Consultation Section */}
                        <div className="relative" onMouseEnter={() => setIsConsultationHovered(true)} onMouseLeave={() => setIsConsultationHovered(false)}>
                          <button className="flex items-center text-lg font-bold mb-4 text-[#E5E5E5]">
                            <MessageSquareIcon className="w-5 h-5 mr-2" />
                            Consultation
                          </button>
                          <AnimatePresence>
                            {isConsultationHovered && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-full top-0 ml-2 w-max shadow-lg py-2 px-4 z-50 backdrop-blur-sm bg-[#1A1D2E]/95 border border-[#B38BFF]/20 rounded-lg"
                              >
                                <div className="relative" onMouseEnter={() => setIsOracleNetSuiteHovered(true)} onMouseLeave={() => setIsOracleNetSuiteHovered(false)}>
                                  <button className="block px-2 py-1 font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]">
                                    Oracle NetSuite
                                  </button>
                                  <AnimatePresence>
                                    {isOracleNetSuiteHovered && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-full top-0 ml-2 w-max shadow-lg py-2 px-4 z-50 backdrop-blur-sm bg-[#1A1D2E]/95 border border-[#B38BFF]/20 rounded-lg"
                                      >
                                        <ul className="space-y-2">
                                          <li>
                                            <Link to="/implementation" className="block px-2 py-1 font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]" onClick={handleNavLinkClick}>
                                              Implementation
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/training" className="block px-2 py-1 font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]" onClick={handleNavLinkClick}>
                                              Training
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/" className="block px-2 py-1 font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]" onClick={handleNavLinkClick}>
                                              Customization
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="/" className="block px-2 py-1 font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]" onClick={handleNavLinkClick}>
                                              Integration
                                            </Link>
                                          </li>
                                        </ul>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Support Section */}
                        <div className="relative" onMouseEnter={() => setIsSupportHovered(true)} onMouseLeave={() => setIsSupportHovered(false)}>
                          <button className="flex items-center text-lg font-bold mb-4 text-[#E5E5E5]">
                            <LifeBuoyIcon className="w-5 h-5 mr-2" />
                            Support
                          </button>
                          <AnimatePresence>
                            {isSupportHovered && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-full top-0 ml-2 w-max shadow-lg py-2 px-4 z-50 backdrop-blur-sm bg-[#1A1D2E]/95 border border-[#B38BFF]/20 rounded-lg"
                              >
                                <ul className="space-y-2">
                                  <li>
                                    <Link to="/support" className="block px-2 py-1 font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]" onClick={handleNavLinkClick}>
                                      Oracle NetSuite Support
                                    </Link>
                                  </li>
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries with Dropdown */}
              <div className="relative" onMouseEnter={() => handleMenuEnter('industries')} onMouseLeave={handleMenuLeave}>
                <button className="flex items-center font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]">
                Industries
                </button>

                <AnimatePresence>
                  {activeMenu === 'industries' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 w-full shadow-2xl py-4 px-6 mt-6 z-50 backdrop-blur-sm bg-[#1A1D2E]/95 border-t border-b border-[#B38BFF]/20"
                      onMouseEnter={() => handleMenuEnter('industries')} // Keep menu open if mouse re-enters
                      onMouseLeave={handleMenuLeave}
                    >
                      <div className="container mx-auto flex justify-center">
                        <ul className="space-y-4 max-w-[300px]">
                          <li>
                            <Link 
                              to="/professional-services" 
                              className="flex items-start group p-2 rounded-lg hover:bg-[#B38BFF]/10 transition-colors duration-300"
                              onClick={handleNavLinkClick}
                            >
                              <div className="mr-3 p-2 rounded-md bg-[#B38BFF]/10 group-hover:bg-[#B38BFF]/20 transition-colors duration-300">
                                <BriefcaseIcon className="w-5 h-5 text-[#B38BFF]" />
                              </div>
                              <div>
                                <span className="block font-medium text-[#E5E5E5] group-hover:text-[#B38BFF] transition-colors duration-300">
                                  Professional Services
                                </span>
                                <span className="text-sm text-[#E5E5E5]/80 group-hover:text-[#E5E5E5] transition-colors duration-300">
                                  Optimize your service delivery
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/project-management" 
                              className="flex items-start group p-2 rounded-lg hover:bg-[#B38BFF]/10 transition-colors duration-300"
                              onClick={handleNavLinkClick}
                            >
                              <div className="mr-3 p-2 rounded-md bg-[#B38BFF]/10 group-hover:bg-[#B38BFF]/20 transition-colors duration-300">
                                <PuzzleIcon className="w-5 h-5 text-[#B38BFF]" />
                              </div>
                              <div>
                                <span className="block font-medium text-[#E5E5E5] group-hover:text-[#B38BFF] transition-colors duration-300">
                                  Project Management
                                </span>
                                <span className="text-sm text-[#E5E5E5]/80 group-hover:text-[#E5E5E5] transition-colors duration-300">
                                  Efficient project execution
                                </span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" className="font-medium transition-colors duration-300 text-[#E5E5E5] hover:text-[#B38BFF]" onClick={handleNavLinkClick}>
                About
              </Link>

              <button
                onClick={() => {
                  setShowContactModal(true);
                  setIsMenuOpen(false); // Close mobile menu when contact modal opens
                }}
                className="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] hover:from-[#9B6BFF] hover:to-[#B38BFF] text-[#0E1121] shadow-md hover:shadow-lg"
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-[#E5E5E5] hover:text-[#B38BFF]">
                <MenuIcon className="w-8 h-8" />
            </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0E1121] shadow-lg z-50 p-6 overflow-y-auto transform"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#E5E5E5]">Menu</h2>
              <button onClick={toggleMenu} className="text-[#E5E5E5] hover:text-[#B38BFF]">
                <XIcon className="w-7 h-7" />
              </button>
            </div>
            <nav className="space-y-6">
              <Link 
                to="/"
                className="flex items-center text-lg font-medium text-[#E5E5E5] hover:text-[#B38BFF] transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                <HomeIcon className="w-6 h-6 mr-3 text-[#B38BFF]" />
                Home
            </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-lg font-medium text-[#E5E5E5] hover:text-[#B38BFF] transition-colors duration-300"
                  onClick={() => toggleMobileSubmenu('services')}
                >
                  <span className="flex items-center">
                    <BuildingIcon className="w-6 h-6 mr-3 text-[#B38BFF]" />
                    Services
                  </span>
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileActiveMenu === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileActiveMenu === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="ml-8 mt-4 space-y-4 overflow-hidden"
                    >
                      <div>
                        <h4 className="text-md font-semibold mb-2 text-[#B38BFF]">Implementation</h4>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/implementation" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block" onClick={handleNavLinkClick}>NetSuite Implementation</Link>
                          </li>
                          <li>
                            <Link to="/implementation" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block" onClick={handleNavLinkClick}>ERP Implementation</Link>
                          </li>
                          <li>
                            <Link to="/implementation" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block" onClick={handleNavLinkClick}>System Migration</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-semibold mb-2 text-[#B38BFF]">Customization</h4>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block" onClick={handleNavLinkClick}>NetSuite Customization</Link>
                          </li>
                          <li>
                            <Link to="/" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block" onClick={handleNavLinkClick}>SuiteScript Development</Link>
                          </li>
                          <li>
                            <Link to="/" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block" onClick={handleNavLinkClick}>Workflow Automation</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-semibold mb-2 text-[#B38BFF]">Integration</h4>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block" onClick={handleNavLinkClick}>API Integration</Link>
                          </li>
                          <li>
                            <Link to="/" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block" onClick={handleNavLinkClick}>Third-party Connectors</Link>
                          </li>
                          <li>
                            <Link to="/" className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block" onClick={handleNavLinkClick}>Data Migration</Link>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries Dropdown */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-lg font-medium text-[#E5E5E5] hover:text-[#B38BFF] transition-colors duration-300"
                  onClick={() => toggleMobileSubmenu('industries')}
                >
                  <span className="flex items-center">
                    <BriefcaseIcon className="w-6 h-6 mr-3 text-[#B38BFF]" />
              Industries
                  </span>
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileActiveMenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>
                <AnimatePresence>
                  {mobileActiveMenu === 'industries' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="ml-8 mt-4 space-y-4 overflow-hidden"
                    >
                      <ul>
                        <li>
                          <Link 
                            to="/professional-services" 
                            className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block py-1"
                            onClick={handleNavLinkClick}
                          >
                            Professional Services
                  </Link>
                        </li>
                        <li>
                          <Link 
                            to="/project-management" 
                            className="text-[#E5E5E5]/90 hover:text-[#B38BFF] transition-colors duration-300 block py-1"
                            onClick={handleNavLinkClick}
                          >
                            Project Management
                  </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>

              <Link 
                to="/about"
                className="flex items-center text-lg font-medium text-[#E5E5E5] hover:text-[#B38BFF] transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                <InfoIcon className="w-6 h-6 mr-3 text-[#B38BFF]" />
              About
            </Link>

              <button
                onClick={() => {
          setShowContactModal(true);
                  setIsMenuOpen(false); // Close mobile menu when contact modal opens
                }}
                className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] hover:from-[#9B6BFF] hover:to-[#B38BFF] text-[#0E1121] shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <MessageSquareIcon className="w-6 h-6 mr-3" />
              Contact Us
            </button>
          </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactFormModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
};

export default Navbar;