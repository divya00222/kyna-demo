/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function LoginModal() {
  const { isLoginOpen, setLoginOpen, login } = useStore();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Log in with mock credentials
      const displayName = activeTab === 'login' ? email.split('@')[0] : name || 'Fashionista';
      login(email, displayName);
    }, 1000);
  };

  const handleSocialLogin = (platform: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      login(`${platform.toLowerCase()}user@gmail.com`, `Style Lover via ${platform}`);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isLoginOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setLoginOpen(false)}
            className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-51 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setLoginOpen(false)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black hover:bg-neutral-50 rounded-full transition-colors z-10"
              >
                <X size={18} />
              </button>

              {/* Login/Register Panel */}
              <div className="p-6 md:p-8">
                {/* Header Title */}
                <div className="text-center mb-6">
                  <span className="font-display text-2xl font-black tracking-tighter text-neutral-900">
                    KYNA<span className="text-fuchsia-600">.</span>
                  </span>
                  <p className="text-xs text-neutral-400 font-bold tracking-wider uppercase mt-1">
                    Welcome to premium style
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-neutral-100 mb-6">
                  <button
                    onClick={() => setActiveTab('login')}
                    className={`flex-1 pb-3 text-xs font-black tracking-widest uppercase transition-colors relative ${
                      activeTab === 'login' ? 'text-fuchsia-600' : 'text-neutral-400 hover:text-neutral-600'
                    }`}
                  >
                    LOGIN
                    {activeTab === 'login' && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-fuchsia-600"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('register')}
                    className={`flex-1 pb-3 text-xs font-black tracking-widest uppercase transition-colors relative ${
                      activeTab === 'register' ? 'text-fuchsia-600' : 'text-neutral-400 hover:text-neutral-600'
                    }`}
                  >
                    REGISTER
                    {activeTab === 'register' && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-fuchsia-600"
                      />
                    )}
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {activeTab === 'register' && (
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-neutral-50 border border-neutral-150 rounded-lg py-2.5 pl-10 pr-4 text-xs font-medium focus:outline-none focus:border-fuchsia-300 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-neutral-50 border border-neutral-150 rounded-lg py-2.5 pl-10 pr-4 text-xs font-medium focus:outline-none focus:border-fuchsia-300 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                        Password
                      </label>
                      {activeTab === 'login' && (
                        <a href="#" className="text-[10px] font-black text-fuchsia-600 hover:text-fuchsia-700 uppercase tracking-wider">
                          Forgot?
                        </a>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-neutral-50 border border-neutral-150 rounded-lg py-2.5 pl-10 pr-10 text-xs font-medium focus:outline-none focus:border-fuchsia-300 focus:bg-white transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-neutral-900 hover:bg-black text-white py-3 rounded-lg font-black tracking-widest text-xs flex items-center justify-center gap-2 transition-colors disabled:bg-neutral-400 mt-6 uppercase"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : activeTab === 'login' ? (
                      'SIGN IN'
                    ) : (
                      'CREATE ACCOUNT'
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="relative my-6 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-100" />
                  </div>
                  <span className="relative bg-white px-3 text-[10px] font-black tracking-widest text-neutral-300 uppercase">
                    OR CONTINUE WITH
                  </span>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSocialLogin('Google')}
                    className="flex items-center justify-center gap-2 border border-neutral-150 hover:bg-neutral-50 rounded-lg py-2.5 text-xs font-bold transition-all text-neutral-700"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#EA4335"
                        d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.72 5.72 0 0 1 8.27 12.8a5.72 5.72 0 0 1 5.72-5.714c2.19 0 4.184 1.155 5.3 2.914l3.14-3.142A9.97 9.97 0 0 0 13.99 2 9.99 9.99 0 0 0 4 11.99a9.99 9.99 0 0 0 9.99 10 9.87 9.87 0 0 0 9.8-8.99c.07-.63.03-1.85-.02-2.715H12.24z"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    onClick={() => handleSocialLogin('Facebook')}
                    className="flex items-center justify-center gap-2 border border-neutral-150 hover:bg-neutral-50 rounded-lg py-2.5 text-xs font-bold transition-all text-neutral-700"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
