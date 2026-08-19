/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  ChevronDown,
  MapPin
} from 'lucide-react';

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100 md:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 md:py-0 md:mb-6 text-left focus:outline-hidden"
      >
        <h4 className="text-[13px] font-black tracking-widest text-neutral-900 uppercase">
          {title}
        </h4>
        <ChevronDown 
          size={16} 
          className={`text-neutral-400 transition-transform md:hidden ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <AnimatePresence>
        {(isOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
          <motion.ul
            initial={false}
            animate={{ height: 'auto', opacity: 1, marginBottom: 24 }}
            className="space-y-3 overflow-hidden md:!h-auto md:!opacity-100 md:!mb-0 pb-4 md:pb-0"
          >
            {links.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-sm text-neutral-500 hover:text-fuchsia-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Footer() {
  const shopLinks = [
    { label: 'Women', href: '#' },
    { label: 'Men', href: '#' },
    { label: 'Kids', href: '#' },
    { label: 'Beauty', href: '#' },
    { label: 'Home & Living', href: '#' },
    { label: 'Sale', href: '#' },
  ];

  const customerCareLinks = [
    { label: 'Contact Us', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Shipping Policy', href: '#' },
    { label: 'Return Policy', href: '#' },
    { label: 'Track Order', href: '#' },
    { label: 'Size Guide', href: '#' },
  ];

  const aboutLinks = [
    { label: 'About Kyna Fashion', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Store Locator', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="bg-white pt-16 border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* Logo & Location Column */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-display text-2xl font-black tracking-tighter text-neutral-900">
                KYNA<span className="text-fuchsia-600">.</span>
              </span>
              <p className="mt-4 text-neutral-500 text-sm leading-relaxed max-w-[240px]">
                Elevating your daily style with premium pieces that combine comfort, quality, and contemporary design.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[13px] font-black tracking-widest text-neutral-900 uppercase">
                OUR FLAGSHIP STORE
              </h4>
              <div className="flex gap-3">
                <MapPin size={18} className="text-fuchsia-600 shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                  124, Fashion Street, Near Hauz Khas,<br />
                  New Delhi, Delhi 110016
                </p>
              </div>
            </div>
          </div>

          <FooterColumn title="SHOP" links={shopLinks} />
          <FooterColumn title="CUSTOMER CARE" links={customerCareLinks} />
          <FooterColumn title="ABOUT US" links={aboutLinks} />
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-100 w-full" />

        {/* Footer Bottom */}
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-neutral-400 hover:text-fuchsia-600 transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-fuchsia-600 transition-colors">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-fuchsia-600 transition-colors">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-fuchsia-600 transition-colors">
              <Youtube size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-neutral-400 font-medium tracking-wide">
            © 2026 KYNA FASHION. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
