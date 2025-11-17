'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Thanks for subscribing!');
    setEmail('');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">DesignDC</h3>
            <p className="text-sm mb-4">
              Creating exceptional digital experiences through innovative design and development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/ui-ux-design" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/branding" className="hover:text-white transition-colors">Branding</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get the latest updates and insights.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail size={20} />
                </button>
              </div>
              {status && <p className="text-sm text-green-400">{status}</p>}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} DesignDC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
