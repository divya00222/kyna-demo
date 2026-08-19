/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function WishlistDrawer() {
  const { wishlistItems, isWishlistOpen, setWishlistOpen, toggleWishlist, addToCart } = useStore();

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setWishlistOpen(false)}
            className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
          />

          {/* Wishlist Sidebar Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-51 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-rose-50 rounded-lg text-rose-500">
                  <Heart size={20} className="fill-rose-500" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-neutral-900 uppercase">My Wishlist</h3>
                  <p className="text-xs text-neutral-400 font-bold tracking-wider uppercase">
                    {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setWishlistOpen(false)} 
                className="p-2 hover:bg-neutral-50 rounded-full text-neutral-400 hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {wishlistItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-300 mb-4">
                    <Heart size={28} />
                  </div>
                  <h4 className="font-display font-black text-base text-neutral-900 uppercase mb-1">Wishlist is empty</h4>
                  <p className="text-xs text-neutral-400 mb-6 font-medium max-w-[200px]">
                    Tap the heart icon on any product to save it here for later.
                  </p>
                  <button
                    onClick={() => setWishlistOpen(false)}
                    className="border-2 border-neutral-900 text-neutral-900 px-6 py-2.5 text-[10px] font-black tracking-widest hover:bg-neutral-50 rounded-lg transition-colors uppercase"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                wishlistItems.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-4 p-3 border border-neutral-100 rounded-xl hover:border-neutral-200 transition-colors bg-neutral-50/50"
                  >
                    <div className="w-20 h-24 bg-neutral-100 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-black tracking-widest text-neutral-400 uppercase">
                          {product.brand}
                        </span>
                        <h4 className="text-xs font-bold text-neutral-800 line-clamp-1 mb-1">
                          {product.name}
                        </h4>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="text-sm font-black text-neutral-900">₹{product.price}</span>
                          <span className="text-[10px] text-neutral-400 line-through">₹{product.originalPrice}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100/60">
                        {/* Add to Bag Button */}
                        <button
                          onClick={() => {
                            addToCart(product);
                            toggleWishlist(product); // Remove from wishlist on add to bag
                          }}
                          className="flex items-center gap-1.5 text-[10px] font-black text-fuchsia-600 hover:text-fuchsia-700 transition-colors uppercase tracking-wider"
                        >
                          <ShoppingBag size={12} />
                          Move to Bag
                        </button>

                        {/* Remove from Wishlist */}
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="p-1.5 text-neutral-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
