/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, Mail, ArrowRight } from 'lucide-react';
import instaFashion1 from '../assets/images/insta_fashion_1_1787060345645.jpg';

const INSTA_POSTS = [
  { id: 1, image: instaFashion1 },
  { id: 2, image: 'https://picsum.photos/seed/fashion2/800/800' },
  { id: 3, image: 'https://picsum.photos/seed/fashion3/800/800' },
  { id: 4, image: 'https://picsum.photos/seed/fashion4/800/800' },
  { id: 5, image: 'https://picsum.photos/seed/fashion5/800/800' },
  { id: 6, image: 'https://picsum.photos/seed/fashion6/800/800' },
];

export default function SocialAndNewsletter() {
  return (
    <section className="bg-white">
      {/* Instagram Section */}
      <div className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-black text-neutral-900 tracking-tight mb-2">
              FOLLOW US ON INSTAGRAM
            </h2>
            <a 
              href="#" 
              className="text-fuchsia-600 font-bold text-sm tracking-widest hover:text-fuchsia-700 transition-colors"
            >
              @kyna.fashion
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {INSTA_POSTS.map((post) => (
              <motion.a
                key={post.id}
                href="#"
                whileHover="hover"
                className="relative aspect-square overflow-hidden group bg-neutral-100"
              >
                <motion.img
                  src={post.image}
                  alt="Instagram post"
                  loading="lazy"
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <motion.div
                  variants={{
                    hover: { opacity: 1 }
                  }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity"
                >
                  <Instagram className="text-white" size={24} />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 border-t border-neutral-50 bg-neutral-50/50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm mb-6">
              <Mail className="text-fuchsia-600" size={24} />
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl font-black text-neutral-900 mb-4">
              STAY IN THE LOOP
            </h3>
            <p className="text-neutral-500 font-medium mb-10">
              Sign up and get <span className="text-neutral-900 font-black">10% OFF</span> on your first order.
            </p>

            <form 
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <div className="relative flex-1 group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-neutral-200 rounded-xl py-4 px-6 text-sm font-medium focus:outline-hidden focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-50 transition-all"
                />
              </div>
              <button 
                type="submit"
                className="bg-neutral-900 text-white px-10 py-4 text-xs font-black tracking-[0.2em] hover:bg-black transition-all hover:scale-105 active:scale-95 rounded-xl flex items-center justify-center gap-2"
              >
                SUBSCRIBE
                <ArrowRight size={14} />
              </button>
            </form>
            
            <p className="mt-6 text-[10px] text-neutral-400 font-medium">
              By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
