import React from 'react';
import { Product } from '../types';
import { X, Sparkles, Check, ShoppingBag, ShieldCheck, Heart } from 'lucide-react';
import { CocovaLogo } from './CocovaLogo';

interface TastingModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  currency: 'INR' | 'USD';
}

export const TastingModal: React.FC<TastingModalProps> = ({
  product,
  onClose,
  onAddToCart,
  currency,
}) => {
  if (!product) return null;

  const displayPrice =
    currency === 'INR' ? `₹${product.priceINR.toLocaleString()}` : `$${product.priceUSD.toFixed(2)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        {/* Modal Content */}
        <div className="inline-block w-full max-w-2xl my-8 p-6 sm:p-8 overflow-hidden text-left align-middle transition-all transform bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] shadow-2xl relative z-10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#6B5A51] hover:text-[#1F1714] p-1 rounded-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Product Image Column */}
            <div className="md:col-span-5 space-y-3">
              <div className="rounded-xl overflow-hidden bg-[#F0EBE1] border border-[#DDD3C4] aspect-[4/3] relative">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="bg-[#EFE8DD] p-3.5 rounded-lg border border-[#DDD3C4] space-y-1.5 text-xs text-[#55453D]">
                <div className="flex justify-between font-semibold text-[#1F1714]">
                  <span>Cacao Origin:</span>
                  <span>Single-Origin Couverture</span>
                </div>
                <div className="flex justify-between">
                  <span>Sweetening:</span>
                  <span className="text-[#8A6736] font-medium">100% Monk Fruit</span>
                </div>
                <div className="flex justify-between">
                  <span>Added Sugar:</span>
                  <span className="font-mono text-[#2E7D32] font-bold">0.0 Grams</span>
                </div>
              </div>
            </div>

            {/* Product Details Column */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8A6736]">
                  {product.category === 'box' ? 'Luxury Gift Box' : 'Artisanal Couverture'} · {product.weight}
                </span>
                <h3 className="font-serif text-2xl text-[#1F1714] font-semibold mt-1">
                  {product.name}
                </h3>
                <p className="text-xs text-[#6B5A51]">{product.subtitle}</p>
              </div>

              <p className="text-xs sm:text-sm text-[#4D3F37] leading-relaxed">
                {product.description}
              </p>

              {/* Sensory Radar / Tasting Sliders */}
              <div className="p-3.5 bg-white rounded-xl border border-[#EADBCE] space-y-2.5">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#8A6736]">
                  Sensory & Flavor Balance
                </h4>

                <div className="space-y-1.5 text-xs">
                  <div>
                    <div className="flex justify-between text-[#55453D] text-[11px] mb-0.5">
                      <span>Aroma & Intensity</span>
                      <span className="font-mono">{product.tastingNotes.intensity}%</span>
                    </div>
                    <div className="w-full bg-[#EFE8DD] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#8A6736] h-full rounded-full"
                        style={{ width: `${product.tastingNotes.intensity}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#55453D] text-[11px] mb-0.5">
                      <span>Velvety Richness</span>
                      <span className="font-mono">{product.tastingNotes.richness}%</span>
                    </div>
                    <div className="w-full bg-[#EFE8DD] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#8A6736] h-full rounded-full"
                        style={{ width: `${product.tastingNotes.richness}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#55453D] text-[11px] mb-0.5">
                      <span>Nutty Crunch & Texture</span>
                      <span className="font-mono">{product.tastingNotes.crunch}%</span>
                    </div>
                    <div className="w-full bg-[#EFE8DD] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#8A6736] h-full rounded-full"
                        style={{ width: `${product.tastingNotes.crunch}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredients & Functional Blend */}
              <div className="space-y-1 text-xs text-[#55453D]">
                <span className="font-semibold text-[#1F1714] block">Full Ingredients:</span>
                <p className="text-[11px] leading-relaxed text-[#6B5A51] bg-[#F7F3EC] p-2.5 rounded border border-[#EADBCE]">
                  {product.ingredients}
                </p>
              </div>

              {/* Action row */}
              <div className="pt-2 flex items-center justify-between border-t border-[#EADBCE]">
                <div>
                  <span className="text-[10px] text-[#8F7D74] uppercase tracking-wider block">Price</span>
                  <span className="font-serif text-2xl font-bold text-[#1F1714] tabular-nums">
                    {displayPrice}
                  </span>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1F1714] hover:bg-[#34241E] rounded shadow-xs transition-colors inline-flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
