import React, { useState } from 'react';
import { CocovaLogo } from './CocovaLogo';
import { Product } from '../types';
import { ArrowRight, Check, Eye } from 'lucide-react';

interface ProductSpotlightProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onOpenTasting: (product: Product) => void;
  currency: 'INR' | 'USD';
}

export const ProductSpotlight: React.FC<ProductSpotlightProps> = ({
  product,
  onAddToCart,
  onOpenTasting,
  currency,
}) => {
  const [selectedFlavorIndex, setSelectedFlavorIndex] = useState(0);

  const boxFlavors = [
    {
      name: 'Hazelnut Crisp',
      type: 'Dark & Milk Chocolate',
      description: 'Slow-roasted hazelnuts layered into silky chocolate with a golden praline crunch.',
      sweetness: 'Balanced',
      cacao: '62% Couverture',
      notes: 'Roasted hazelnut, buttery caramel, milk warmth',
    },
    {
      name: 'Roasted Almond',
      type: 'Dark Chocolate',
      description: 'Hand-picked California almonds toasted to golden perfection in 65% dark cacao.',
      sweetness: 'Subtle',
      cacao: '65% Dark',
      notes: 'Toasted oak, warm vanilla, rich nut butter',
    },
    {
      name: 'Royal Pistachio',
      type: 'Dark Chocolate',
      description: 'Emerald green Mediterranean pistachio nibs folded into rich, velvety dark chocolate.',
      sweetness: 'Delicate',
      cacao: '68% Couverture',
      notes: 'Pistachio cream, savory mineral undertone, floral cacao',
    },
    {
      name: 'Cold-Brew Coffee',
      type: 'Dark Chocolate',
      description: 'Single-origin Arabica cold-brew crystals micro-blended with 70% dark chocolate.',
      sweetness: 'Intense',
      cacao: '70% Dark',
      notes: 'Espresso crema, dark molasses, toasted cacao nibs',
    },
    {
      name: 'Flaky Sea Salt',
      type: 'Dark Chocolate',
      description: 'Mineral-rich hand-raked sea salt flakes elevating deep 72% single-origin cacao.',
      sweetness: 'Complex',
      cacao: '72% Dark',
      notes: 'Bright sea brine, dried cherries, deep chocolate velvet',
    },
  ];

  const activeFlavor = boxFlavors[selectedFlavorIndex];

  return (
    <section className="py-16 md:py-24 bg-[#1A110D] text-white border-b border-[#36241B] relative overflow-hidden">
      {/* Decorative luxury radial background */}
      <div
        className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#3B251A]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Product Box */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#3E2C23] bg-[#221611] shadow-2xl group">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Gold foil stamp banner inside image */}
              <div className="absolute top-4 left-4">
                <div className="bg-[#170E0A]/90 border border-[#C5A059]/40 backdrop-blur-md px-3 py-1 rounded text-[11px] font-semibold tracking-wider uppercase text-[#DFC088]">
                  Made with Monk Fruit Sweetness
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <CocovaLogo variant="gold" size="sm" showSubtitle={false} />
                  <p className="text-xs text-[#D6C7BC] mt-0.5">5 × 100g Bars · Indulge in Pure Luxury</p>
                </div>

                <button
                  onClick={() => onOpenTasting(product)}
                  className="px-3 py-1.5 bg-black/60 hover:bg-black/90 border border-[#4D392E] rounded text-xs font-medium text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Full Tasting Profile</span>
                </button>
              </div>
            </div>

            {/* Micro thumbnail strip showing the 5 bars inside the box */}
            <div className="grid grid-cols-5 gap-2">
              {boxFlavors.map((flavor, idx) => (
                <button
                  key={flavor.name}
                  onClick={() => setSelectedFlavorIndex(idx)}
                  className={`p-2 rounded text-left transition-all border ${
                    selectedFlavorIndex === idx
                      ? 'bg-[#2E1D16] border-[#C5A059] shadow-xs'
                      : 'bg-[#1C120E] border-[#36241B] hover:border-[#523A2D] opacity-75 hover:opacity-100'
                  }`}
                >
                  <p className="text-[10px] font-semibold text-[#C5A059] uppercase truncate">Bar 0{idx + 1}</p>
                  <p className="text-xs font-medium text-white truncate">{flavor.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Information, Flavor Breakdown & Buy Module */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DFC088]">
                <span>Signature Connoisseur Collection</span>
                <span aria-hidden="true">·</span>
                <span>5 Full-Size 100g Bars</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                {product.name}
              </h2>
              <p className="text-sm sm:text-base text-[#D1C3B7] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Interactive Selected Flavor Card */}
            <div className="bg-[#241712] border border-[#3E2B21] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-[#36241B] pb-3">
                <div>
                  <span className="text-[11px] font-medium text-[#C5A059] uppercase tracking-wider">
                    Spotlight Flavor {selectedFlavorIndex + 1} of 5
                  </span>
                  <h4 className="font-serif text-xl text-white font-medium">
                    {activeFlavor.name}
                  </h4>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#170E0A] rounded text-[#DFC088] border border-[#3E2B21]">
                  {activeFlavor.cacao}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#D1C3B7] leading-relaxed">
                {activeFlavor.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div>
                  <span className="text-[#8F7D74] block">Tasting Notes:</span>
                  <span className="text-white font-medium">{activeFlavor.notes}</span>
                </div>
                <div>
                  <span className="text-[#8F7D74] block">Natural Sweetener:</span>
                  <span className="text-[#DFC088] font-medium">100% Monk Fruit (Mogroside V)</span>
                </div>
              </div>
            </div>

            {/* Checkmark Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#E0D7CD]">
              {product.highlights.slice(0, 4).map((highlight) => (
                <div key={highlight} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Purchase Row */}
            <div className="pt-4 border-t border-[#36241B] flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#8F7D74] uppercase tracking-wider">Total Box Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-white tabular-nums">
                    {currency === 'INR' ? `₹${product.priceINR.toLocaleString()}` : `$${product.priceUSD.toFixed(2)}`}
                  </span>
                  <span className="text-xs text-[#8F7D74]">Incl. taxes & luxury box</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className="px-6 py-3.5 text-xs font-semibold tracking-wide uppercase text-[#1F1714] bg-[#DFC088] hover:bg-[#E8CFA0] rounded shadow-md transition-colors whitespace-nowrap inline-flex items-center gap-2"
                >
                  <span>Add Box to Bag</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
