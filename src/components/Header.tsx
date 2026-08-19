/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../types';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
      } mt-[36px] md:mt-[40px]`} // Compensating for AnnouncementBar
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Left: Mobile Menu Trigger & Logo */}
          <div className="flex items-center gap-4 lg:gap-0">
            <button 
              className="lg:hidden p-2 -ml-2 text-neutral-700 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <a href="/" className="flex items-center">
              <span className="font-display text-2xl md:text-3xl font-black tracking-tighter text-neutral-900 group">
                KYNA
                <span className="text-fuchsia-600 transition-transform group-hover:scale-110 inline-block ml-0.5">.</span>
              </span>
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] ${
                  index >= 4 ? 'md:text-[14px]' : ''
                } font-bold tracking-widest transition-colors relative group py-2 ${
                  link.isSale ? 'text-rose-500 hover:text-rose-600' : 'text-neutral-700 hover:text-black'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 transition-all duration-300 group-hover:w-full ${link.isSale ? 'bg-rose-500' : 'bg-fuchsia-600'}`} />
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-6 flex-1 lg:flex-none justify-end">
            {/* Desktop Search */}
            <div className="hidden xl:block w-80 relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-fuchsia-500 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search for products, brands & more"
                className="w-full bg-neutral-50 border border-neutral-100 rounded-lg py-2.5 pl-10 pr-4 text-xs font-medium focus:outline-hidden focus:border-fuchsia-200 focus:bg-white focus:ring-4 focus:ring-fuchsia-50/50 transition-all placeholder:text-neutral-400"
              />
            </div>

            {/* Mobile Search Icon */}
            <button className="xl:hidden p-2 text-neutral-700 hover:bg-neutral-50 rounded-full transition-colors">
              <Search size={20} />
            </button>

            <div className="flex items-center gap-1 md:gap-3">
              <button className="hidden sm:flex p-2 text-neutral-700 hover:bg-neutral-50 rounded-full transition-colors items-center gap-2 group">
                <User size={20} />
                <span className="hidden lg:inline text-xs font-bold tracking-wide">LOGIN</span>
              </button>
              
              <button className="p-2 text-neutral-700 hover:bg-neutral-50 rounded-full transition-colors relative group">
                <Heart size={20} />
                <span className="absolute top-1 right-1 w-4 h-4 bg-fuchsia-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">0</span>
              </button>
              
              <button className="p-2 text-neutral-700 hover:bg-neutral-50 rounded-full transition-colors relative group">
                <ShoppingBag size={20} />
                <span className="absolute top-1 right-1 w-4 h-4 bg-neutral-900 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">3</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
