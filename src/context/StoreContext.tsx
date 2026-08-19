/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';
import prodFloralDress from '../assets/images/prod_floral_dress_1_1787059846998.jpg';
import prodCoordSet from '../assets/images/prod_coord_set_1_1787059861113.jpg';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreContextType {
  cartItems: CartItem[];
  wishlistItems: Product[];
  user: { name: string; email: string } | null;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isLoginOpen: boolean;
  isSearchOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  login: (email: string, name: string) => void;
  logout: () => void;
  setCartOpen: (open: boolean) => void;
  setWishlistOpen: (open: boolean) => void;
  setLoginOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  // Let's seed with some high-quality items for a great first experience, as current header shows "3" items in bag!
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: {
        id: 1,
        name: 'Floral Print A-Line Dress',
        brand: 'Tokyo Talkies',
        price: 899,
        originalPrice: 1799,
        discount: 50,
        image: prodFloralDress,
        category: 'Dresses',
        rating: 4.2,
        reviewsCount: 120,
      },
      quantity: 2,
    },
    {
      product: {
        id: 2,
        name: 'Green Co-ord Set',
        brand: 'Stylecast X Slyck',
        price: 1249,
        originalPrice: 2499,
        discount: 50,
        image: prodCoordSet,
        category: 'Co-ords',
        rating: 4.5,
        reviewsCount: 85,
      },
      quantity: 1,
    }
  ]);

  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Automatically open the cart drawer when adding an item to make it feel responsive and delightful!
    setCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const login = (email: string, name: string) => {
    setUser({ email, name });
    setLoginOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        wishlistItems,
        user,
        isCartOpen,
        isWishlistOpen,
        isLoginOpen,
        isSearchOpen,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleWishlist,
        login,
        logout,
        setCartOpen,
        setWishlistOpen,
        setLoginOpen,
        setSearchOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
