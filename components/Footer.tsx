import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-xl font-bold mb-4">{APP_NAME}</h3>
            <p className="text-brand-100 text-sm leading-relaxed mb-6">
              Empowering the next generation of digital leaders through outcome-driven education and practical mastery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-100 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-brand-100 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-brand-100 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-brand-100 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent-500">Programs</h4>
            <ul className="space-y-2 text-sm text-brand-100">
              <li><a href="#" className="hover:text-white">PG Diploma in Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white">Data Analytics for Marketers</a></li>
              <li><a href="#" className="hover:text-white">SEO Mastery Certification</a></li>
              <li><a href="#" className="hover:text-white">Corporate Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent-500">Quick Links</h4>
            <ul className="space-y-2 text-sm text-brand-100">
              <li><a href="#" className="hover:text-white">About the Institute</a></li>
              <li><a href="#" className="hover:text-white">Admissions Policy</a></li>
              <li><a href="#" className="hover:text-white">Student Success Stories</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent-500">Contact Us</h4>
            <ul className="space-y-4 text-sm text-brand-100">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>
                  11133, 11TH FLOOR, SECTOR-4<br />
                  GAUR CITY MALL, GREATER NOIDA<br />
                  GAUTAM BUDH NAGAR, NOIDA<br />
                  UP 201306
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>+91-8595631487</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>admissions@rajeshdigitaliq.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-400">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;