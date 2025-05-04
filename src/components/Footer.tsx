import React from 'react';
import { Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2A24] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-[#D4AF37]">Ruth's Café</h3>
            <div className="flex items-start space-x-3 mb-3">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-[#D4AF37]" />
              <p>123 Culinary Avenue, Gourmet District, Foodie City, FC 12345</p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Phone size={18} className="flex-shrink-0 text-[#D4AF37]" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="flex-shrink-0 text-[#D4AF37]" />
              <p>info@ruthscafe.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-[#D4AF37]">Hours</h3>
            <div className="flex items-start space-x-3 mb-3">
              <Clock size={18} className="mt-1 flex-shrink-0 text-[#D4AF37]" />
              <div>
                <p className="font-medium">Monday - Thursday</p>
                <p>11:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 mb-3">
              <Clock size={18} className="mt-1 flex-shrink-0 text-[#D4AF37]" />
              <div>
                <p className="font-medium">Friday - Saturday</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock size={18} className="mt-1 flex-shrink-0 text-[#D4AF37]" />
              <div>
                <p className="font-medium">Sunday</p>
                <p>10:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-[#D4AF37]">Connect With Us</h3>
            <p className="mb-4">Join us on social media for special offers, events and behind-the-scenes content.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors">
                <Instagram size={20} className="text-[#D4AF37]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors">
                <Facebook size={20} className="text-[#D4AF37]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors">
                <Twitter size={20} className="text-[#D4AF37]" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Ruth's Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;