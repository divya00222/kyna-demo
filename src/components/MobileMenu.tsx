/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Search, User, Heart, ShoppingBag, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-xs"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white z-51 shadow-2xl flex flex-col"
          >
            <div className="p-4 flex items-center justify-between border-b border-neutral-100">
              <span className="font-display text-xl font-black tracking-tighter text-fuchsia-600">
                KYNA
              </span>
              <button onClick={onClose} className="p-2 -mr-2 text-neutral-500 hover:text-black">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              <nav className="px-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`flex items-center justify-between p-4 text-sm font-semibold tracking-wide border-b border-neutral-50 last:border-0 ${
                      link.isSale ? 'text-rose-500' : 'text-neutral-900'
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-neutral-300" />
                  </a>
                ))}
              </nav>

              <div className="mt-8 px-6 space-y-6">
                <div className="flex items-center gap-4 text-neutral-600 font-medium text-sm">
                  <User size={20} />
                  <span>Login / Register</span>
                </div>
                <div className="flex items-center gap-4 text-neutral-600 font-medium text-sm">
                  <Heart size={20} />
                  <span>My Wishlist</span>
                </div>
                <div className="flex items-center gap-4 text-neutral-600 font-medium text-sm">
                  <ShoppingBag size={20} />
                  <span>Shopping Bag</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-neutral-50 border-t border-neutral-100">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-fuchsia-500 transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-white border border-neutral-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-hidden focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
