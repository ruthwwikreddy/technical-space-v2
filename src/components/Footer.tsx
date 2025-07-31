import React from 'react';
import { ExternalLink, MessageSquare, Calendar, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#our-story" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300">Our Story</a></li>
              <li><a href="#courses" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300">Vision</a></li>
              <li><a href="#community" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300">Team</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">Blog <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">Showcase <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">GitHub <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#community" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">WhatsApp Group <MessageSquare className="w-3 h-3" /></a></li>
              <li><a href="#community" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">Events <Calendar className="w-3 h-3" /></a></li>
              <li><a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">Code of Conduct <FileText className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-[#CCCCCC]">
                © 2025 Technical Space. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}