/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CATEGORIES } from '../types';

export default function CategoryNav() {
  return (
    <section className="py-12 bg-white border-b border-neutral-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Mobile Horizontal Scroll Container / Desktop Flex Container */}
        <div className="flex items-center gap-6 md:gap-10 overflow-x-auto pb-4 md:pb-0 scrollbar-none md:justify-center scroll-smooth touch-pan-x">
          {CATEGORIES.map((category) => (
            <motion.a
              key={category.id}
              href={category.href}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 shrink-0 group focus:outline-hidden"
            >
              {/* Circular Image Container */}
              <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full p-1 border-2 border-transparent group-hover:border-fuchsia-500 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-full bg-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              </div>

              {/* Category Label */}
              <span className="text-[11px] md:text-xs font-bold tracking-widest text-neutral-600 group-hover:text-neutral-900 group-hover:scale-105 transition-all uppercase text-center whitespace-nowrap">
                {category.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
