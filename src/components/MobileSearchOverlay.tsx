/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Search } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { useState } from 'react';

export default function MobileSearchOverlay() {
  const { isSearchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState('');

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-0 bg-white z-50 shadow-md py-4 px-4 border-b border-neutral-150 md:hidden mt-[36px]"
        >
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="text"
                autoFocus
                placeholder="Search products, categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2.5 pl-10 pr-4 text-xs font-medium focus:outline-none focus:border-fuchsia-300 focus:bg-white transition-all placeholder:text-neutral-400"
              />
            </div>
            <button
              onClick={() => {
                setSearchOpen(false);
                setQuery('');
              }}
              className="p-2 text-neutral-500 hover:text-black hover:bg-neutral-50 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
