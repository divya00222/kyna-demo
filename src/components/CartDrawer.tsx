/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { useState } from 'react';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setCartOpen, updateCartQuantity, removeFromCart } = useStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalOriginal = cartItems.reduce((acc, item) => acc + item.product.originalPrice * item.quantity, 0);
  const discountAmount = totalOriginal - subtotal;
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      // We don't empty the cart immediately, let them enjoy the success screen, then they close or we handle it
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
          />

          {/* Cart Sidebar Panel */}
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
                <div className="p-2 bg-fuchsia-50 rounded-lg text-fuchsia-600">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-neutral-900 uppercase">Shopping Bag</h3>
                  <p className="text-xs text-neutral-400 font-bold tracking-wider uppercase">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
                </div>
              </div>
              <button 
                onClick={() => setCartOpen(false)} 
                className="p-2 hover:bg-neutral-50 rounded-full text-neutral-400 hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {checkoutSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-4 animate-bounce">
                    <Sparkles size={32} />
                  </div>
                  <h4 className="font-display font-black text-xl text-neutral-900 uppercase mb-2">Order Confirmed!</h4>
                  <p className="text-sm text-neutral-500 max-w-xs mb-6">
                    Thank you for shopping with KYNA. Your order has been placed successfully and is being processed.
                  </p>
                  <button
                    onClick={() => {
                      setCheckoutSuccess(false);
                      setCartOpen(false);
                    }}
                    className="bg-neutral-900 text-white px-8 py-3 text-xs font-black tracking-widest hover:bg-black rounded-lg transition-colors uppercase"
                  >
                    Keep Exploring
                  </button>
                </motion.div>
              ) : cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-300 mb-4">
                    <ShoppingBag size={28} />
                  </div>
                  <h4 className="font-display font-black text-base text-neutral-900 uppercase mb-1">Your bag is empty</h4>
                  <p className="text-xs text-neutral-400 mb-6 font-medium max-w-[200px]">
                    Looks like you haven't added anything to your bag yet.
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="border-2 border-neutral-900 text-neutral-900 px-6 py-2.5 text-[10px] font-black tracking-widest hover:bg-neutral-50 rounded-lg transition-colors uppercase"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-4 p-3 border border-neutral-100 rounded-xl hover:border-neutral-200 transition-colors bg-neutral-50/50"
                  >
                    <div className="w-20 h-24 bg-neutral-100 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-black tracking-widest text-neutral-400 uppercase">
                          {item.product.brand}
                        </span>
                        <h4 className="text-xs font-bold text-neutral-800 line-clamp-1 mb-1">
                          {item.product.name}
                        </h4>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="text-sm font-black text-neutral-900">₹{item.product.price}</span>
                          <span className="text-[10px] text-neutral-400 line-through">₹{item.product.originalPrice}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-neutral-200 rounded-md bg-white">
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 px-2 text-neutral-500 hover:text-neutral-900 transition-colors"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-xs font-bold text-neutral-800 px-2 min-w-6 text-center select-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 px-2 text-neutral-500 hover:text-neutral-900 transition-colors"
                          >
                            <Plus size={10} />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
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

            {/* Footer Summary (if items in cart) */}
            {cartItems.length > 0 && !checkoutSuccess && (
              <div className="p-5 border-t border-neutral-100 bg-neutral-50 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-500 font-semibold">
                    <span>Bag Total</span>
                    <span>₹{totalOriginal}</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-600 font-semibold">
                    <span>Product Discount</span>
                    <span>- ₹{discountAmount}</span>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500 font-semibold">
                    <span>Delivery</span>
                    <span className="text-emerald-600 font-bold">FREE</span>
                  </div>
                  <div className="border-t border-neutral-200/60 my-2 pt-2 flex justify-between text-sm font-black text-neutral-900">
                    <span className="uppercase tracking-wider">Order Total</span>
                    <span>₹{subtotal}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-neutral-900 hover:bg-black text-white py-3.5 px-4 rounded-lg font-black tracking-widest text-xs flex items-center justify-center gap-2 transition-all disabled:bg-neutral-400 select-none uppercase shadow-lg shadow-neutral-900/10"
                >
                  {isCheckingOut ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      PROCEED TO CHECKOUT
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
