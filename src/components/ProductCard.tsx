/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Star, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { wishlistItems, toggleWishlist, addToCart } = useStore();
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        
        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors z-10"
        >
          <Heart 
            size={18} 
            className={`${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-neutral-400'} transition-colors`} 
          />
        </button>

        {/* Quick Add Button (Desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/60 backdrop-blur-md hidden md:flex items-center justify-center">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-neutral-900 text-white py-2.5 text-xs font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-colors rounded-md"
          >
            <ShoppingCart size={14} />
            ADD TO BAG
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase truncate">
            {product.brand}
          </span>
          {product.rating && (
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 rounded text-emerald-700 text-[10px] font-bold">
              {product.rating} <Star size={10} className="fill-emerald-700" />
            </div>
          )}
        </div>
        
        <h3 className="text-[13px] font-bold text-neutral-800 line-clamp-1 mb-1 group-hover:text-fuchsia-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-[11px] text-neutral-500 mb-2">
          {product.category}
        </p>

        <div className="mt-auto flex items-center gap-2">
          <span className="text-sm font-black text-neutral-900">
            ₹{product.price}
          </span>
          <span className="text-[11px] text-neutral-400 line-through">
            ₹{product.originalPrice}
          </span>
          <span className="text-[11px] font-bold text-rose-500">
            ({product.discount}% OFF)
          </span>
        </div>
      </div>
    </motion.div>
  );
}
