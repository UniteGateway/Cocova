import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ShoppingBag, Eye, Sparkles } from 'lucide-react';

interface ProductCollectionProps {
  onAddToCart: (product: Product) => void;
  onOpenTasting: (product: Product) => void;
  currency: 'INR' | 'USD';
}

export const ProductCollection: React.FC<ProductCollectionProps> = ({
  onAddToCart,
  onOpenTasting,
  currency,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bar' | 'box' | 'bundle'>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collection" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
              The Range
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1714] font-normal leading-tight">
              Single-origin chocolate. Fortified with purpose.
            </h2>
            <p className="text-sm sm:text-base text-[#55453D] leading-relaxed">
              Explore our collection of single-origin couverture bars and gift sets, each sweetened
              exclusively with organic monk fruit extract and infused with bioavailable micronutrients.
            </p>
          </div>

          {/* Interactive Category Segmented Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFE8DD] rounded-lg self-start md:self-end border border-[#DDD3C4]">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-[#1F1714] font-semibold shadow-xs'
                  : 'text-[#55453D] hover:text-[#1F1714]'
              }`}
            >
              All Creations
            </button>
            <button
              onClick={() => setActiveCategory('bar')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === 'bar'
                  ? 'bg-white text-[#1F1714] font-semibold shadow-xs'
                  : 'text-[#55453D] hover:text-[#1F1714]'
              }`}
            >
              Artisan Bars
            </button>
            <button
              onClick={() => setActiveCategory('box')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === 'box'
                  ? 'bg-white text-[#1F1714] font-semibold shadow-xs'
                  : 'text-[#55453D] hover:text-[#1F1714]'
              }`}
            >
              Gift Boxes
            </button>
            <button
              onClick={() => setActiveCategory('bundle')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === 'bundle'
                  ? 'bg-white text-[#1F1714] font-semibold shadow-xs'
                  : 'text-[#55453D] hover:text-[#1F1714]'
              }`}
            >
              Bundles
            </button>
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const displayPrice =
              currency === 'INR'
                ? `₹${product.priceINR.toLocaleString()}`
                : `$${product.priceUSD.toFixed(2)}`;

            return (
              <div
                key={product.id}
                className="bg-[#FFFFFF] rounded-xl border border-[#EADBCE] overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Lead Image Slot */}
                  <div className="relative aspect-[4/3] w-full bg-[#F4EFE6] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    />

                    {/* Subtle single text badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#1F1714]/85 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded">
                        {product.badge}
                      </div>
                    )}

                    {/* Quick view button overlay */}
                    <button
                      onClick={() => onOpenTasting(product)}
                      className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-[#1F1714] rounded-md shadow-sm transition-transform active:scale-95"
                      title="Inspect Tasting Profile & Nutritional Facts"
                      aria-label="View tasting profile"
                    >
                      <Eye className="w-4 h-4 text-[#8A6736]" />
                    </button>
                  </div>

                  {/* Card Content & Clean Typography */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#8A6736] font-medium">
                      <span>{product.weight}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.cacaoPercentage}</span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#1F1714] leading-snug group-hover:text-[#8A6736] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#66544B] line-clamp-2 leading-relaxed">
                      {product.subtitle}
                    </p>

                    {/* Tasting bar preview */}
                    <div className="pt-2 text-[11px] text-[#7A6960] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span className="truncate">Notes: {product.flavorProfile}</span>
                    </div>
                  </div>
                </div>

                {/* Price and Add Action Baseline */}
                <div className="p-6 pt-0 border-t border-[#F0EBE1] flex items-center justify-between mt-4">
                  <div>
                    <span className="text-[11px] text-[#8F7D74] block uppercase tracking-wider">
                      Price
                    </span>
                    <span className="text-xl font-serif font-bold text-[#1F1714] tabular-nums">
                      {displayPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenTasting(product)}
                      className="px-3 py-2 text-xs font-medium text-[#4D3F37] hover:text-[#1F1714] hover:bg-[#F4EFE6] rounded transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#1F1714] hover:bg-[#34241E] rounded shadow-xs transition-colors inline-flex items-center gap-1.5"
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
  );
};
