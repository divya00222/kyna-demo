/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../types';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../types';

// Import images to ensure they are bundled by Vite
import img1 from '../assets/images/hero_elevated_style_1787058813264.jpg';
import img2 from '../assets/images/hero_summer_vibes_1787058831756.jpg';
import img3 from '../assets/images/hero_urban_chic_1787058851493.jpg';

const imageMap: Record<string, string> = {
  '/src/assets/images/hero_elevated_style_1787058813264.jpg': img1,
  '/src/assets/images/hero_summer_vibes_1787058831756.jpg': img2,
  '/src/assets/images/hero_urban_chic_1787058851493.jpg': img3,
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 0.95
    }),
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.3 }
    }),
  };

  const slide = HERO_SLIDES[currentSlide];
  const imageUrl = imageMap[slide.image] || slide.image;

  return (
    <section className="w-full py-6 flex justify-center">
      <div className="w-[95%] max-w-[1400px] h-[350px] bg-purple-50 rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full flex">
          {/* Left Content Area (43%) */}
          <div className="w-full md:w-[43%] h-full flex flex-col justify-center px-8 md:px-12 z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-black tracking-[0.2em] text-fuchsia-600 mb-2 uppercase"
            >
              {slide.label}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-2xl md:text-4xl font-black text-neutral-900 leading-[1.1] mb-2 whitespace-pre-line"
            >
              {slide.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-neutral-600 text-[10px] md:text-sm max-w-sm mb-4 leading-relaxed font-medium line-clamp-2"
            >
              {slide.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-fuchsia-700 font-black text-xs mb-4"
            >
              {slide.offer}
            </motion.div>

            <div className="flex gap-3">
              <button className="bg-neutral-900 text-white px-4 py-2 text-[9px] md:text-[10px] font-bold tracking-widest hover:bg-black transition-all rounded-md uppercase">
                {slide.ctaText}
              </button>
              <button className="bg-transparent border border-neutral-900 text-neutral-900 px-4 py-2 text-[9px] md:text-[10px] font-bold tracking-widest hover:bg-neutral-100 transition-all rounded-md uppercase">
                {slide.secondaryCtaText}
              </button>
            </div>
          </div>

          {/* Right Image Area (57%) */}
          <div className="hidden md:block w-[57%] h-full relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentSlide}
                src={imageUrl}
                alt={slide.title}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%' }),
                  center: { x: 0 },
                  exit: (direction: number) => ({ x: direction < 0 ? '100%' : '-100%' })
                }}
                transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1.0] }}
                className="w-full h-full object-cover absolute inset-0"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-neutral-900 shadow-md hover:bg-white transition-all z-20"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-neutral-900 shadow-md hover:bg-white transition-all z-20"
        >
          <ChevronRight size={16} />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-300 rounded-full ${
                idx === currentSlide ? 'w-6 bg-fuchsia-600' : 'w-2 bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
