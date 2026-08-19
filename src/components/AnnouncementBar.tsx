/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-linear-to-r from-fuchsia-600 via-pink-500 to-rose-400 text-white py-2 px-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto flex items-center justify-center text-xs md:text-sm font-medium tracking-wide"
      >
        <span className="mr-2">★ SUMMER SALE IS LIVE — UP TO 60% OFF ON SELECTED STYLES</span>
        <a href="#" className="underline font-bold hover:text-white/80 transition-colors">
          Shop Now →
        </a>
      </motion.div>
    </div>
  );
}
