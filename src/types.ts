/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import all local images for proper Vite asset bundling
import heroElevated from './assets/images/hero_elevated_style_1787058813264.jpg';
import heroSummer from './assets/images/hero_summer_vibes_1787058831756.jpg';
import heroUrban from './assets/images/hero_urban_chic_1787058851493.jpg';

import catKurtis from './assets/images/cat_kurtis_1787059127976.jpg';
import catDresses from './assets/images/cat_dresses_1787059144662.jpg';
import catTops from './assets/images/cat_tops_1787059161920.jpg';
import catCoordSets from './assets/images/cat_coord_sets_1787059173514.jpg';
import catSarees from './assets/images/cat_sarees_1787059189998.jpg';
import catAccessories from './assets/images/cat_accessories_1787059202579.jpg';
import catFootwear from './assets/images/cat_footwear_1787059217410.jpg';

import promoSummer from './assets/images/promo_summer_collection_1787059577463.jpg';
import promoEthnic from './assets/images/promo_ethnic_elegance_1787059598021.jpg';
import promoGlobal from './assets/images/promo_global_styles_1787059617606.jpg';

import prodFloralDress from './assets/images/prod_floral_dress_1_1787059846998.jpg';
import prodCoordSet from './assets/images/prod_coord_set_1_1787059861113.jpg';
import prodBlackTop from './assets/images/prod_black_top_1_1787059872777.jpg';
import prodBlueKurta from './assets/images/prod_blue_kurta_1_1787059884872.jpg';
import prodFloralSaree from './assets/images/prod_floral_saree_1_1787059896773.jpg';
import prodLavenderTop from './assets/images/prod_lavender_top_1_1787059913116.jpg';
import prodYellowDress from './assets/images/prod_yellow_dress_1_1787059926562.jpg';

import bestPrintedKurta from './assets/images/best_printed_kurta_1787060133500.jpg';
import bestEmbroideredKurta from './assets/images/best_embroidered_kurta_1787060153540.jpg';
import bestSolidShirt from './assets/images/best_solid_shirt_1787060168053.jpg';
import bestFloralKurta from './assets/images/best_floral_kurta_1787060180829.jpg';
import bestCoordSet from './assets/images/best_coord_set_1787060199406.jpg';

export interface NavLink {
  label: string;
  href: string;
  isSale?: boolean;
}

export interface HeroSlide {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  offer: string;
  image: string;
  ctaText: string;
  secondaryCtaText: string;
  theme: 'light' | 'dark' | 'vibrant';
}

export interface Category {
  id: number;
  name: string;
  image: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'WOMEN', href: '#' },
  { label: 'MEN', href: '#' },
  { label: 'KIDS', href: '#' },
  { label: 'BEAUTY', href: '#' },
  { label: 'HOME & LIVING', href: '#' },
  { label: 'NEW IN', href: '#' },
  { label: 'SALE', href: '#', isSale: true },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    label: 'NEW COLLECTION',
    title: 'Elevated\nStyles\nFor Every You',
    subtitle: 'Fresh fits, trending styles and effortless fashion for every occasion.',
    offer: 'Up to 50% OFF',
    image: heroElevated,
    ctaText: 'SHOP COLLECTION',
    secondaryCtaText: 'EXPLORE',
    theme: 'light',
  },
  {
    id: 2,
    label: 'NEW ARRIVALS',
    title: 'Redefine\nYour Everyday\nStyle',
    subtitle: 'Discover timeless pieces designed for your modern wardrobe.',
    offer: 'NEW ARRIVALS',
    image: heroSummer,
    ctaText: 'SHOP COLLECTION',
    secondaryCtaText: 'VIEW LOOKBOOK',
    theme: 'vibrant',
  },
  {
    id: 3,
    label: 'SIGNATURE EDIT',
    title: 'Style\nThat\nSpeaks',
    subtitle: 'Premium fashion made to make every moment feel effortless.',
    offer: 'Bestsellers Only',
    image: heroUrban,
    ctaText: 'SHOP COLLECTION',
    secondaryCtaText: 'EXPLORE',
    theme: 'vibrant',
  },
];

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Kurtis', image: catKurtis, href: '#' },
  { id: 2, name: 'Dresses', image: catDresses, href: '#' },
  { id: 3, name: 'Tops', image: catTops, href: '#' },
  { id: 4, name: 'Co-ord Sets', image: catCoordSets, href: '#' },
  { id: 5, name: 'Sarees', image: catSarees, href: '#' },
  { id: 6, name: 'Ethnic Wear', image: catKurtis, href: '#' }, // Reusing Kurti for Ethnic
  { id: 7, name: 'Western Wear', image: catDresses, href: '#' }, // Reusing Dress for Western
  { id: 8, name: 'Accessories', image: catAccessories, href: '#' },
  { id: 9, name: 'Footwear', image: catFootwear, href: '#' },
];

export interface PromoBanner {
  id: number;
  label: string;
  title: string;
  offer?: string;
  cta: string;
  image: string;
  bgColor: string;
  href: string;
}

export const PROMO_BANNERS: PromoBanner[] = [
  {
    id: 1,
    label: 'NEW ARRIVALS',
    title: 'Summer Collection',
    offer: '40–60% OFF',
    cta: 'SHOP NOW →',
    image: promoSummer,
    bgColor: 'bg-rose-50',
    href: '#',
  },
  {
    id: 2,
    label: 'BEST OF ETHNIC',
    title: 'Timeless Elegance',
    offer: 'MIN. 40% OFF',
    cta: 'SHOP NOW →',
    image: promoEthnic,
    bgColor: 'bg-purple-50',
    href: '#',
  },
  {
    id: 3,
    label: 'TOP BRANDS',
    title: 'Global Styles Now Live',
    cta: 'SHOP NOW →',
    image: promoGlobal,
    bgColor: 'bg-orange-50',
    href: '#',
  },
];

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  category: string;
  rating: number;
  reviewsCount: number;
}

export const TRENDING_PRODUCTS: Product[] = [
  {
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
  {
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
  {
    id: 3,
    name: 'Black Regular Top',
    brand: 'Roadster',
    price: 499,
    originalPrice: 999,
    discount: 50,
    image: prodBlackTop,
    category: 'Tops',
    rating: 4.0,
    reviewsCount: 210,
  },
  {
    id: 4,
    name: 'Blue A-Line Kurta',
    brand: 'Anouk',
    price: 799,
    originalPrice: 1599,
    discount: 50,
    image: prodBlueKurta,
    category: 'Ethnic Wear',
    rating: 4.4,
    reviewsCount: 150,
  },
  {
    id: 5,
    name: 'Floral Printed Saree',
    brand: 'KALINI',
    price: 1599,
    originalPrice: 3199,
    discount: 50,
    image: prodFloralSaree,
    category: 'Sarees',
    rating: 4.6,
    reviewsCount: 95,
  },
  {
    id: 6,
    name: 'Lavender Shirt Style Top',
    brand: 'SASSAFRAS',
    price: 699,
    originalPrice: 1399,
    discount: 50,
    image: prodLavenderTop,
    category: 'Tops',
    rating: 4.3,
    reviewsCount: 180,
  },
  {
    id: 7,
    name: 'Yellow Printed Dress',
    brand: 'Berryblush',
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    image: prodYellowDress,
    category: 'Dresses',
    rating: 4.1,
    reviewsCount: 110,
  },
];

export const BEST_SELLER_PRODUCTS: Product[] = [
  {
    id: 101,
    name: 'Printed Straight Kurta',
    brand: 'Anouk',
    price: 699,
    originalPrice: 1399,
    discount: 50,
    image: bestPrintedKurta,
    category: 'Ethnic Wear',
    rating: 4.8,
    reviewsCount: 450,
  },
  {
    id: 102,
    name: 'Embroidered A-Line Kurta',
    brand: 'Sangria',
    price: 1249,
    originalPrice: 2499,
    discount: 50,
    image: bestEmbroideredKurta,
    category: 'Ethnic Wear',
    rating: 4.7,
    reviewsCount: 320,
  },
  {
    id: 103,
    name: 'Solid Cotton Shirt',
    brand: 'Roadster',
    price: 599,
    originalPrice: 1199,
    discount: 50,
    image: bestSolidShirt,
    category: 'Tops',
    rating: 4.6,
    reviewsCount: 510,
  },
  {
    id: 104,
    name: 'Floral Print A-Line Kurta',
    brand: 'Libas',
    price: 899,
    originalPrice: 1799,
    discount: 50,
    image: bestFloralKurta,
    category: 'Ethnic Wear',
    rating: 4.9,
    reviewsCount: 280,
  },
  {
    id: 105,
    name: 'Printed Co-ord Set',
    brand: 'SASSAFRAS',
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    image: bestCoordSet,
    category: 'Co-ords',
    rating: 4.5,
    reviewsCount: 190,
  },
  {
    id: 106,
    name: 'Embroidered Kurta Set',
    brand: 'Biba',
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    image: 'https://picsum.photos/seed/kurta_set/600/800',
    category: 'Ethnic Wear',
    rating: 4.8,
    reviewsCount: 150,
  },
  {
    id: 107,
    name: 'Gold-Plated Drop Earrings',
    brand: 'Zaveri Pearls',
    price: 399,
    originalPrice: 999,
    discount: 60,
    image: 'https://picsum.photos/seed/earrings/600/800',
    category: 'Accessories',
    rating: 4.7,
    reviewsCount: 620,
  },
];
