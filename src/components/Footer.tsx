
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-8">
          <Facebook className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
          <Instagram className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
          <Twitter className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
          <Youtube className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <a href="#" className="block hover:text-white transition-colors text-sm">Audio Description</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Help Center</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Gift Cards</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Media Center</a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block hover:text-white transition-colors text-sm">Investor Relations</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Jobs</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Terms of Use</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Privacy</a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block hover:text-white transition-colors text-sm">Legal Notices</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Cookie Preferences</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Corporate Information</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Contact Us</a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block hover:text-white transition-colors text-sm">Account</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Redeem Gift Cards</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Buy Gift Cards</a>
            <a href="#" className="block hover:text-white transition-colors text-sm">Ways to Watch</a>
          </div>
        </div>

        {/* Service Code */}
        <button className="border border-gray-600 px-4 py-2 text-sm hover:border-white transition-colors mb-6">
          Service Code
        </button>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 1997-2023 Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
