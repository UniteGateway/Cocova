import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ShoppingBag, Eye, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PageType } from './types';

interface RangePageProps {
  onAddToCart: (product: Product) => void;
  onOpenTasting: (product: Product) => void;
  currency: 'INR' | 'USD';
  onNavigate: (page: PageType) => void;
}

export const RangePage: React.FC<RangePageProps> = ({
  onAddToCart,
  onOpenTasting,
  currency,
  onNavigate,
}) => {
  const [filter, setFilter] = useState<'all' | 'box' | 'bar' | 'bundle'>('all');

  // Exact Future Platform Roadmap from Lovable website:
  const roadmapProducts = [
    {
      name: 'Daily',
      subtitle: 'Everyday multivitamin chocolate.',
      badge: 'Available Now',
      color: 'bg-[#C5A059]',
    },
    {
      name: 'Kids',
      subtitle: 'A child-focused nutritional chocolate formulation.',
      badge: 'In R&D Development',
      color: 'bg-[#523A2D]',
    },
    {
      name: 'Active',
      subtitle: 'Nutrition-focused chocolate for active lifestyles.',
      badge: 'In R&D Development',
      color: 'bg-[#523A2D]',
    },
    {
      name: 'Women',
      subtitle: 'A formulation designed around women’s nutritional needs.',
      badge: 'In Formulation',
      color: 'bg-[#523A2D]',
    },
    {
      name: 'Senior',
      subtitle: 'A nutrition-focused product for mature consumers.',
      badge: 'In Formulation',
      color: 'bg-[#523A2D]',
    },
    {
      name: 'Pro',
      subtitle: 'Premium functional chocolate for fitness and wellness consumers.',
      badge: 'Future Release',
      color: 'bg-[#523A2D]',
    },
  ];

  const filtered =
    filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1F1714]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#170E0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              The Range · Artisanal Confections
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Single-origin chocolate. Fortified with purpose.
            </h1>
            <p className="text-base sm:text-xl text-[#D1C3B7] leading-relaxed">
              Every bar is hand-crafted with zero cane sugar, sweetened purely by monk fruit extract, and
              fortified with active daily micronutrients for clean sustained vitality.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-16 md:py-24 border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="font-serif text-3xl text-[#1F1714] font-semibold">Available Creations</h2>
              <p className="text-xs text-[#7A6960] mt-1">Showing {filtered.length} products</p>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-[#EFE8DD] rounded-lg border border-[#DDD3C4]">
              {(['all', 'bar', 'box', 'bundle'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors uppercase tracking-wider cursor-pointer ${
                    filter === cat
                      ? 'bg-white text-[#1F1714] font-bold shadow-xs'
                      : 'text-[#66544B] hover:text-[#1F1714]'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat === 'bar' ? 'Bars' : cat === 'box' ? 'Boxes' : 'Bundles'}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => {
              const displayPrice =
                currency === 'INR'
                  ? `₹${product.priceINR.toLocaleString()}`
                  : `$${product.priceUSD.toFixed(2)}`;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-[#EADBCE] overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="relative aspect-[4/3] bg-[#F4EFE6] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                      />
                      {product.badge && (
                        <div className="absolute top-3 left-3 bg-[#1F1714]/90 text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                          {product.badge}
                        </div>
                      )}
                      <button
                        onClick={() => onOpenTasting(product)}
                        className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-[#1F1714] rounded-md shadow-sm transition-transform active:scale-95 cursor-pointer"
                        title="Inspect Tasting Profile & Nutritional Facts"
                      >
                        <Eye className="w-4 h-4 text-[#8A6736]" />
                      </button>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#8A6736] font-medium">
                        <span>{product.weight}</span>
                        <span>•</span>
                        <span>{product.cacaoPercentage}</span>
                      </div>

                      <h3 className="font-serif text-xl font-semibold text-[#1F1714] group-hover:text-[#8A6736] transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#66544B] line-clamp-2 leading-relaxed">
                        {product.subtitle}
                      </p>

                      <div className="pt-2 text-[11px] text-[#7A6960] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span className="truncate">Notes: {product.flavorProfile}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#F0EBE1] flex items-center justify-between mt-4">
                    <div>
                      <span className="text-[10px] text-[#8F7D74] uppercase tracking-wider block">Price</span>
                      <span className="text-xl font-serif font-bold text-[#1F1714] tabular-nums">
                        {displayPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenTasting(product)}
                        className="px-3 py-2 text-xs font-medium text-[#4D3F37] hover:text-[#1F1714] hover:bg-[#F4EFE6] rounded transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onAddToCart(product)}
                        className="px-4 py-2 text-xs font-semibold text-white bg-[#1F1714] hover:bg-[#34241E] rounded shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lovable Functional-Food Platform Pipeline */}
      <section className="py-16 md:py-24 bg-[#170E0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              Coming Next
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              A complete functional-food platform.
            </h2>
            <p className="text-sm sm:text-base text-[#D1C3B7] leading-relaxed">
              One idea, developed for the different moments and nutritional needs of modern life.
              Each product will be developed and marketed according to its final formulation and applicable regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapProducts.map((item, idx) => (
              <div
                key={item.name}
                className="bg-[#241712] border border-[#3E2B21] rounded-xl p-6 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#36241B] pb-3">
                    <span className="font-mono text-xs text-[#DFC088]">0{idx + 1}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A39287]">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-white mt-4">
                    COCOVA <em className="text-[#DFC088] italic">{item.name}</em>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D1C3B7] mt-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#36241B] flex items-center justify-between text-xs text-[#8F7D74]">
                  <span>Montevia R&D Pipeline</span>
                  <span className="text-[#C5A059]">FSSAI Formulation</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[#A39287]">
            Each product will be developed and marketed according to its final formulation and applicable regulatory requirements.
          </p>
        </div>
      </section>

      {/* Partner Link */}
      <section className="py-14 bg-[#FAF7F2] border-t border-[#EADBCE] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h3 className="font-serif text-2xl text-[#1F1714]">Interested in Distribution or Retail?</h3>
          <p className="text-xs sm:text-sm text-[#55453D]">
            We welcome wholesale inquiries from modern trade, corporate gifting, and specialty health distributors.
          </p>
          <button
            onClick={() => onNavigate('partners')}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1714] hover:bg-[#34241E] rounded transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Partner With COCOVA</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>
      </section>
    </div>
  );
};
