import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, Gift, ShieldCheck, Tag } from 'lucide-react';
import { CocovaLogo } from './CocovaLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  currency: 'INR' | 'USD';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  currency,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [giftBoxOption, setGiftBoxOption] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => {
    const price = currency === 'INR' ? item.product.priceINR : item.product.priceUSD;
    return sum + price * item.quantity;
  }, 0);

  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const giftPackagingFee = giftBoxOption ? (currency === 'INR' ? 150 : 2) : 0;
  const finalTotal = Math.max(0, rawSubtotal - discountAmount + giftPackagingFee);

  const freeShippingThreshold = currency === 'INR' ? 1200 : 20;
  const shippingRemaining = Math.max(0, freeShippingThreshold - rawSubtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'COCOVA10') {
      setDiscountPercent(10);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "COCOVA10" for 10% off');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Dimmed backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#EADBCE] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#EADBCE] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <CocovaLogo variant="dark" size="sm" showSubtitle={false} />
              <span className="text-xs text-[#8A6736] font-semibold uppercase tracking-wider ml-1">
                Shopping Bag
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#6B5A51] hover:text-[#1F1714] rounded-md transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-[#EFE8DD] border-b border-[#DDD3C4] text-xs">
            {shippingRemaining === 0 ? (
              <span className="text-[#2E7D32] font-semibold flex items-center gap-1.5">
                <span>✓</span> You qualify for Complimentary Temperature-Controlled Shipping!
              </span>
            ) : (
              <div className="space-y-1">
                <div className="flex justify-between text-[#55453D]">
                  <span>Free shipping threshold</span>
                  <span className="font-semibold tabular-nums">
                    Add {currency === 'INR' ? `₹${shippingRemaining.toFixed(0)}` : `$${shippingRemaining.toFixed(2)}`} more
                  </span>
                </div>
                <div className="w-full bg-[#DDD3C4] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-[#C5A059] h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#EADBCE]">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="font-serif text-xl text-[#6B5A51]">Your shopping bag is empty</p>
                <p className="text-xs text-[#8A6736]">
                  Discover the exquisite world of sugar-free monk fruit chocolate.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1714] rounded hover:bg-[#34241E]"
                >
                  Explore The Collection
                </button>
              </div>
            ) : (
              items.map((item) => {
                const itemPrice = currency === 'INR' ? item.product.priceINR : item.product.priceUSD;
                return (
                  <div key={item.product.id} className="py-4 flex gap-4 items-start">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-18 h-18 object-cover rounded-lg bg-[#F0EBE1] border border-[#DDD3C4] shrink-0"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-semibold text-[#1F1714] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#99877E] hover:text-[#C62828] transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#7A6960] truncate">{item.product.subtitle}</p>

                      <div className="flex items-center justify-between pt-2">
                        {/* Stepper */}
                        <div className="flex items-center border border-[#DDD3C4] rounded bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-[#6B5A51] hover:text-[#1F1714] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-mono font-semibold tabular-nums text-[#1F1714]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-[#6B5A51] hover:text-[#1F1714] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-sm font-serif font-bold text-[#1F1714] tabular-nums">
                          {currency === 'INR'
                            ? `₹${(itemPrice * item.quantity).toLocaleString()}`
                            : `$${(itemPrice * item.quantity).toFixed(2)}`}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EADBCE] space-y-4">
              {/* Optional Gift Wrap Checkbox */}
              <label className="flex items-center gap-2.5 text-xs text-[#4D3F37] cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftBoxOption}
                  onChange={(e) => setGiftBoxOption(e.target.checked)}
                  className="rounded border-[#C5A059] text-[#1F1714] focus:ring-0"
                />
                <Gift className="w-4 h-4 text-[#8A6736]" />
                <span>
                  Add Handcrafted Gift Packaging & Custom Card (+
                  {currency === 'INR' ? '₹150' : '$2.00'})
                </span>
              </label>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Coupon (e.g. COCOVA10)"
                    className="w-full text-xs px-3 py-2 border border-[#D9CFC4] rounded uppercase tracking-wider bg-[#FAF7F2] focus:outline-none focus:border-[#C5A059]"
                  />
                  {discountPercent > 0 && (
                    <span className="absolute right-2 top-2 text-[10px] text-[#2E7D32] font-bold">
                      10% Applied
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 text-xs font-semibold bg-[#EFE8DD] text-[#1F1714] rounded hover:bg-[#E5DCCF] transition-colors whitespace-nowrap"
                >
                  Apply
                </button>
              </form>
              {promoError && <p className="text-[11px] text-[#C62828]">{promoError}</p>}

              {/* Price Breakdown */}
              <div className="space-y-1.5 pt-2 text-xs text-[#6B5A51]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-mono">
                    {currency === 'INR' ? `₹${rawSubtotal.toLocaleString()}` : `$${rawSubtotal.toFixed(2)}`}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#2E7D32]">
                    <span>Promotional Discount (10%)</span>
                    <span className="tabular-nums font-mono">
                      -{currency === 'INR' ? `₹${discountAmount.toLocaleString()}` : `$${discountAmount.toFixed(2)}`}
                    </span>
                  </div>
                )}
                {giftBoxOption && (
                  <div className="flex justify-between">
                    <span>Gift Packaging</span>
                    <span className="tabular-nums font-mono">
                      +{currency === 'INR' ? '₹150' : '$2.00'}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-base font-serif font-bold text-[#1F1714] pt-2 border-t border-[#EADBCE]">
                  <span>Total Due</span>
                  <span className="tabular-nums text-lg text-[#8A6736]">
                    {currency === 'INR' ? `₹${finalTotal.toLocaleString()}` : `$${finalTotal.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={onCheckout}
                className="w-full py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#1F1714] hover:bg-[#34241E] rounded shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Proceed to Safe Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>

              <div className="text-center">
                <p className="text-[10px] text-[#8F7D74] flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Insulated cold-pack shipping · 100% Satisfaction Guarantee</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
