/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import PromoBanners from './components/PromoBanners';
import TrendingNow from './components/TrendingNow';
import TrustStrip from './components/TrustStrip';
import BestSellers from './components/BestSellers';
import SocialAndNewsletter from './components/SocialAndNewsletter';
import Footer from './components/Footer';
import { StoreProvider } from './context/StoreContext';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import LoginModal from './components/LoginModal';
import MobileSearchOverlay from './components/MobileSearchOverlay';

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-white">
        {/* Top Banner */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <AnnouncementBar />
        </div>

        {/* Navigation */}
        <Header />

        {/* Main Content Area */}
        <main className="pt-[110px] md:pt-[130px]">
          <Hero />
          <CategoryNav />
          <PromoBanners />
          <TrendingNow />
          <TrustStrip />
          <BestSellers />
          <SocialAndNewsletter />
        </main>

        <Footer />

        {/* Global Overlays & Modals */}
        <CartDrawer />
        <WishlistDrawer />
        <LoginModal />
        <MobileSearchOverlay />
      </div>
    </StoreProvider>
  );
}

