import React, { useState, useRef, useEffect } from 'react';
import { XIcon, Building2, Phone, Mail, User, MessageSquare, Briefcase, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({
  isOpen,
  onClose
}: ContactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const industry = formData.get('industry') as string;

    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!company) {
      errors.company = 'Company name is required';
    }
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!industry) {
      errors.industry = 'Industry is required';
    }
    if (!message) {
      errors.message = 'Message is required';
    } else if (message.length < 20) {
      errors.message = 'Message must be at least 20 characters';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});
    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormSuccess(true);
      setTimeout(() => {
        onClose();
        setFormSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="rounded-2xl shadow-2xl w-full max-w-2xl backdrop-blur-sm bg-[#1A1D2E]/95 border border-[#B38BFF]/20"
      >
        <div className="flex justify-between items-center p-6 border-b border-[#B38BFF]/20 bg-[#1A1D2E]/95 backdrop-blur-sm">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E5E5E5]">Contact Us</h3>
          <button 
            onClick={onClose} 
            className="text-white hover:text-[#B38BFF] transition-colors duration-300"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group">
              <label className="flex items-center text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                <User className="w-4 h-4 mr-2" />
                Full Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input 
                type="text" 
                name="name" 
                className={`w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border ${formErrors.name ? 'border-red-500' : 'border-[#1A1D2E]'} focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white`}
                placeholder="John Doe" 
              />
              {formErrors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.name}
                </p>
              )}
            </div>

            <div className="group">
              <label className="flex items-center text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Email <span className="text-red-500 ml-1">*</span>
              </label>
              <input 
                type="email" 
                name="email" 
                className={`w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border ${formErrors.email ? 'border-red-500' : 'border-[#1A1D2E]'} focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white`}
                placeholder="john.doe@company.com" 
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.email}
                </p>
              )}
            </div>

            <div className="group">
              <label className="flex items-center text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                <Building2 className="w-4 h-4 mr-2" />
                Company <span className="text-red-500 ml-1">*</span>
              </label>
              <input 
                type="text" 
                name="company" 
                className={`w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border ${formErrors.company ? 'border-red-500' : 'border-[#1A1D2E]'} focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white`}
                placeholder="Your company name" 
              />
              {formErrors.company && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.company}
                </p>
              )}
            </div>

            <div className="group">
              <label className="flex items-center text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Phone <span className="text-red-500 ml-1">*</span>
              </label>
              <input 
                type="tel" 
                name="phone" 
                className={`w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border ${formErrors.phone ? 'border-red-500' : 'border-[#1A1D2E]'} focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white`}
                placeholder="+1 (555) 123-4567" 
              />
              {formErrors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.phone}
                </p>
              )}
            </div>

            <div className="group">
              <label className="flex items-center text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                <Briefcase className="w-4 h-4 mr-2" />
                Industry <span className="text-red-500 ml-1">*</span>
              </label>
              <select 
                name="industry" 
                className={`w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border ${formErrors.industry ? 'border-red-500' : 'border-[#1A1D2E]'} focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white`}
              >
                <option value="">Select your industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="other">Other</option>
              </select>
              {formErrors.industry && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.industry}
                </p>
              )}
            </div>

            <div className="group">
              <label className="flex items-center text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
                <Globe className="w-4 h-4 mr-2" />
                Country
              </label>
              <select 
                name="country" 
                className="w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border border-[#1A1D2E] focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none text-white"
              >
                <option value="">Select your country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="flex items-center text-sm font-medium mb-1.5 group-hover:text-[#B38BFF] transition-colors duration-300 text-white">
              <MessageSquare className="w-4 h-4 mr-2" />
              Message <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea 
              name="message" 
              className={`w-full px-3 py-2 rounded-lg bg-[#0E1121]/50 border ${formErrors.message ? 'border-red-500' : 'border-[#1A1D2E]'} focus:border-[#B38BFF] focus:ring-2 focus:ring-[#B38BFF]/20 transition-all duration-300 outline-none h-24 resize-none text-white`}
              placeholder="How can we help you?"
            ></textarea>
            {formErrors.message && (
              <p className="mt-1 text-sm text-red-500">
                {formErrors.message}
              </p>
            )}
          </div>

          {formErrors.submit && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
              {formErrors.submit}
            </div>
          )}

          {formSuccess && (
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            disabled={isSubmitting} 
            className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-[#B38BFF] to-[#9B6BFF] hover:from-[#9B6BFF] hover:to-[#B38BFF] text-[#0E1121] shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactFormModal;