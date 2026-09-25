import React, { useState } from 'react';
import { CocovaLogo } from './CocovaLogo';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Award } from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  onExploreClick: () => void;
  onAddToCart: (product: Product) => void;
  featuredProduct: Product;
  currency: 'INR' | 'USD';
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onAddToCart,
  featuredProduct,
  currency,
}) => {
  const [activeTab, setActiveTab] = useState<'box' | 'hazelnut' | 'classic'>('box');

  const heroItems = {
    box: {
      title: 'Grand Connoisseur 5-Bar Luxury Box',
      tag: 'Made with Monk Fruit Sweetness',
      desc: 'Encased in an embossed gold foil presentation chest, featuring all five artisanal bars: Hazelnut Crisp, Roasted Almond, Royal Pistachio, Cold-Brew Espresso, and Flaky Sea Salt.',
      image: '/src/assets/images/cocova_box_luxury_1790316257431.jpg',
      price: currency === 'INR' ? '₹1,950' : '$24.00',
      badge: 'Signature Keepsake Edition',
    },
    hazelnut: {
      title: 'Cocova Hazelnut Crisp Bar',
      tag: 'Dark & Milk Couverture Blend',
      desc: 'Whole roasted hazelnuts crushed into velvety chocolate with an acoustic snap and deep toasted praline notes. 0g sugar, 100% guilt-free.',
      image: '/src/assets/images/cocova_hazelnut_bar_1790316270426.jpg',
      price: currency === 'INR' ? '₹395' : '$4.95',
      badge: 'Nutrient-Dense Crunch',
    },
    classic: {
      title: 'Signature Pure Couverture Bar',
      tag: 'Multivitamin Infused Formula',
      desc: 'Slow-conched 70% single-origin dark chocolate blended with essential daily micronutrients for cellular defense and sustained energy.',
      image: '/assets/cocova-hero.jpg',
      price: currency === 'INR' ? '₹375' : '$4.75',
      badge: 'Original Flagship',
    },
  };

  const current = heroItems[activeTab];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#EADBCE]">
      {/* Background warm glow */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#EFE4D3] blur-3xl opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quiet text kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A6736]">
              <span>Sugar-Free Multivitamin Chocolate</span>
              <span aria-hidden="true">·</span>
              <span>Monk Fruit Sweetened</span>
              <span aria-hidden="true">·</span>
              <span>Montevia Foods</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1F1714] leading-[1.12] text-balance">
              Delicious chocolate. Thoughtful nutrition.{' '}
              <span className="italic font-luxury text-[#8A6736] font-semibold block sm:inline">
                Everyday care.
              </span>
            </h1>

            {/* Refined Body description */}
            <p className="text-base sm:text-lg text-[#55453D] leading-relaxed max-w-xl">
              The rich pleasure of single-origin luxury chocolate, harmoniously married with the pure,
              zero-glycemic sweetness of natural monk fruit and essential daily vitamins. Designed to
              make nutrition effortless, exquisite, and enjoyable.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onAddToCart(featuredProduct)}
                className="px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#1F1714] hover:bg-[#34241E] rounded shadow-xs transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Order Connoisseur Box</span>
                <span className="text-[#C5A059] font-normal">({currency === 'INR' ? '₹1,950' : '$24.00'})</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>

              <button
                onClick={onExploreClick}
                className="px-5 py-3.5 text-sm font-semibold text-[#2E2019] bg-[#EFE8DD] hover:bg-[#E5DCCF] border border-[#DDD3C4] rounded transition-colors whitespace-nowrap"
              >
                Explore Collection
              </button>
            </div>

            {/* Key Quality Pillars (No pills, clean unboxed metadata) */}
            <div className="pt-6 border-t border-[#EADBCE] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1714] tabular-nums">0g</p>
                <p className="text-xs text-[#6B5A51] font-medium mt-0.5">Added Cane Sugar</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1714] tabular-nums">100%</p>
                <p className="text-xs text-[#6B5A51] font-medium mt-0.5">Monk Fruit Sweetness</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1714] tabular-nums">7+</p>
                <p className="text-xs text-[#6B5A51] font-medium mt-0.5">Vitamins & Minerals</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1714] tabular-nums">0 GI</p>
                <p className="text-xs text-[#6B5A51] font-medium mt-0.5">Glycemic Index Spike</p>
              </div>
            </div>
          </div>

          {/* Right Product Showcase Hero Frame */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#251914] text-white rounded-xl p-6 sm:p-8 shadow-xl border border-[#3E2C23] overflow-hidden">
              {/* Subtle gold accent frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1B110D] via-[#2A1B14] to-[#3B281F] -z-10" />

              {/* Header inside frame */}
              <div className="flex items-center justify-between border-b border-[#433127] pb-4 mb-5">
                <CocovaLogo variant="gold" size="sm" showSubtitle={true} />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#DFC088]">
                  {current.badge}
                </span>
              </div>

              {/* Hero Image Showcase */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#170E0A] border border-[#433127] group">
                <img
                  src={current.image}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#DFC088] uppercase tracking-wider">{current.tag}</p>
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-white drop-shadow-sm">{current.title}</h3>
                  </div>
                  <span className="text-base sm:text-lg font-serif font-bold text-[#DFC088] tabular-nums">
                    {current.price}
                  </span>
                </div>
              </div>

              {/* Short description */}
              <p className="text-xs sm:text-sm text-[#D1C3B7] mt-4 line-clamp-2 leading-relaxed">
                {current.desc}
              </p>

              {/* Interactive Segmented Switcher Controls */}
              <div className="mt-5 pt-4 border-t border-[#433127] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 p-1 bg-[#170E0A] rounded-lg border border-[#433127]">
                  <button
                    onClick={() => setActiveTab('box')}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                      activeTab === 'box'
                        ? 'bg-[#C5A059] text-[#1F1714] font-semibold shadow-xs'
                        : 'text-[#D1C3B7] hover:text-white'
                    }`}
                  >
                    Connoisseur Box
                  </button>
                  <button
                    onClick={() => setActiveTab('hazelnut')}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                      activeTab === 'hazelnut'
                        ? 'bg-[#C5A059] text-[#1F1714] font-semibold shadow-xs'
                        : 'text-[#D1C3B7] hover:text-white'
                    }`}
                  >
                    Hazelnut Crisp
                  </button>
                  <button
                    onClick={() => setActiveTab('classic')}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                      activeTab === 'classic'
                        ? 'bg-[#C5A059] text-[#1F1714] font-semibold shadow-xs'
                        : 'text-[#D1C3B7] hover:text-white'
                    }`}
                  >
                    Flagship Bar
                  </button>
                </div>

                <button
                  onClick={() => onAddToCart(featuredProduct)}
                  className="px-4 py-2 text-xs font-semibold text-[#1F1714] bg-[#DFC088] hover:bg-[#E8CFA0] rounded transition-colors whitespace-nowrap"
                >
                  Quick Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
