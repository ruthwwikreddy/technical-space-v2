import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Mail, MessageSquare, Clock, Phone, MapPin, ExternalLink } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          Have questions about our courses or community? We'd love to hear from you. Reach out and let's start your learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:support@technicalspace.io" 
                      className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                    >
                      support@technicalspace.io
                    </a>
                    <p className="text-[#CCCCCC] text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+91-XXXX-XXX-XXX" 
                      className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                    >
                      +91-XXXX-XXX-XXX
                    </a>
                    <p className="text-[#CCCCCC] text-sm mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">WhatsApp Community</h3>
                    <a 
                      href="#" 
                      className="text-blue-500 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      Join Our Group
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-[#CCCCCC] text-sm mt-1">5,000+ active members</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Office Hours</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-white font-semibold">Monday - Friday</p>
                    <p className="text-[#CCCCCC]">9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-white font-semibold">Saturday</p>
                    <p className="text-[#CCCCCC]">10:00 AM - 4:00 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-white font-semibold">Sunday</p>
                    <p className="text-[#CCCCCC]">Closed (Emergency support available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
              
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">LI</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">TW</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">IG</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">YT</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
          <ContactForm />
        </div>
      </div>
    </PageContainer>
  );
}