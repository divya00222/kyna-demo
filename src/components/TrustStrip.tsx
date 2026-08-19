/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, RotateCcw, Truck, Lock, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

const SERVICE_ITEMS = [
  {
    icon: ShieldCheck,
    title: '100% ORIGINAL',
    description: 'Authentic Products',
  },
  {
    icon: RotateCcw,
    title: 'EASY RETURNS',
    description: '15 Days Return Policy',
  },
  {
    icon: Truck,
    title: 'FREE DELIVERY',
    description: 'On Orders Above ₹5,000',
  },
  {
    icon: Lock,
    title: 'SECURE PAYMENTS',
    description: '100% Safe & Secure',
  },
  {
    icon: Headphones,
    title: '24×7 SUPPORT',
    description: 'Dedicated Support',
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-100 py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4">
          {SERVICE_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-3 bg-white rounded-full shadow-xs border border-neutral-100 group-hover:bg-fuchsia-50 group-hover:border-fuchsia-100 transition-colors">
                <item.icon size={24} className="text-neutral-700 group-hover:text-fuchsia-600 transition-colors" strokeWidth={1.5} />
              </div>
              <h4 className="text-[11px] font-black tracking-widest text-neutral-900 mb-1 uppercase">
                {item.title}
              </h4>
              <p className="text-[10px] text-neutral-500 font-medium tracking-wide">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
