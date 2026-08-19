/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';
import { TRENDING_PRODUCTS } from '../types';
import ProductCard from './ProductCard';

export default function TrendingNow() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-2">
            <h2 className="font-display text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
              TRENDING <span className="text-fuchsia-600">NOW</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-base font-medium">
              Discover what's trending this season.
            </p>
          </div>
          
          <a 
            href="#" 
            className="flex items-center gap-2 text-xs font-black tracking-widest text-neutral-900 group border-b-2 border-neutral-900 pb-1 hover:text-fuchsia-600 hover:border-fuchsia-600 transition-all"
          >
            VIEW ALL 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Product Grid / Responsive Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
          {TRENDING_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
