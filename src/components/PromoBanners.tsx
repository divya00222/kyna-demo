/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROMO_BANNERS } from '../types';

export default function PromoBanners() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMO_BANNERS.map((banner) => (
            <motion.a
              key={banner.id}
              href={banner.href}
              className={`relative overflow-hidden rounded-2xl group block aspect-[4/5] ${banner.bgColor}`}
              whileHover="hover"
            >
              {/* Image Layer */}
              <motion.div
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  loading="lazy"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Content Layer */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-10 z-10">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[10px] md:text-xs font-black tracking-[0.2em] text-neutral-900/60 mb-2 uppercase"
                >
                  {banner.label}
                </motion.span>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-2xl md:text-3xl font-black text-neutral-900 mb-2 leading-tight"
                >
                  {banner.title}
                </motion.h3>

                {banner.offer && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-fuchsia-600 font-bold text-lg md:text-xl mb-6"
                  >
                    {banner.offer}
                  </motion.p>
                )}

                <motion.div
                  variants={{
                    hover: { x: 5 }
                  }}
                  className="flex items-center gap-2 text-neutral-900 font-bold text-xs tracking-widest uppercase"
                >
                  <span className="border-b-2 border-neutral-900 pb-1">
                    {banner.cta}
                  </span>
                </motion.div>
              </div>

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-white/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
