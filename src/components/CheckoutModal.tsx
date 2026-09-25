import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Banknote } from 'lucide-react';
import { CocovaLogo } from './CocovaLogo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
  currency: 'INR' | 'USD';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
  currency,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'upi_card', // or 'cod'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => {
    const price = currency === 'INR' ? item.product.priceINR : item.product.priceUSD;
    return sum + price * item.quantity;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const generatedOrder = `CCV-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setOrderPlaced(true);
      setLoading(false);
      onOrderCompleted();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        {/* Modal Window */}
        <div className="inline-block w-full max-w-xl my-8 p-6 sm:p-8 overflow-hidden text-left align-middle transition-all transform bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] shadow-2xl relative z-10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#6B5A51] hover:text-[#1F1714] p-1"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>

          {orderPlaced ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A6736]">
                Montevia Foods Pvt Ltd
              </p>
              <h3 className="font-serif text-3xl text-[#1F1714] font-medium">
                Order Confirmed!
              </h3>
              <p className="font-mono text-sm text-[#1F1714] bg-[#EFE8DD] py-1.5 px-4 rounded inline-block">
                Order #{orderNumber}
              </p>
              <p className="text-sm text-[#55453D] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1F1714]">{formData.fullName}</strong>. Your
                insulated cold-pack parcel is being hand-packed at our Hyderabad facility. Confirmation
                sent to <span className="underline">{formData.email}</span>.
              </p>

              <div className="p-4 bg-white rounded-lg border border-[#EADBCE] text-xs text-left space-y-1.5 text-[#55453D]">
                <div className="flex justify-between font-semibold text-[#1F1714]">
                  <span>Delivery To:</span>
                  <span>{formData.city}, {formData.postalCode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Mode:</span>
                  <span>{formData.paymentMethod === 'cod' ? 'Cash on Delivery (Verified)' : 'UPI / Card'}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#F0EBE1] font-bold text-[#1F1714]">
                  <span>Amount Paid / Due:</span>
                  <span className="text-[#8A6736] font-serif text-sm">
                    {currency === 'INR' ? `₹${totalAmount.toLocaleString()}` : `$${totalAmount.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1714] rounded hover:bg-[#34241E]"
              >
                Back to Storefront
              </button>
            </div>
          ) : (
            <div>
              <div className="border-b border-[#EADBCE] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <CocovaLogo variant="dark" size="sm" showSubtitle={false} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8A6736]">
                    Direct Checkout
                  </span>
                </div>
                <p className="text-xs text-[#6B5A51] mt-1">
                  Temperature-controlled luxury delivery within 2–4 business days across India.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                      Recipient Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                      Mobile Number (for delivery SMS) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                    Shipping Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House/Apartment #, Street, Landmark"
                    className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Hyderabad"
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                      Postal Code / PIN *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="500001"
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#4D3F37] mb-2">
                    Payment Option
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label
                      className={`p-3 rounded-lg border text-xs font-medium cursor-pointer flex items-center gap-2 transition-all ${
                        formData.paymentMethod === 'upi_card'
                          ? 'bg-white border-[#C5A059] shadow-xs'
                          : 'bg-[#EFE8DD] border-[#DDD3C4]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi_card"
                        checked={formData.paymentMethod === 'upi_card'}
                        onChange={(e) =>
                          setFormData({ ...formData, paymentMethod: e.target.value })
                        }
                        className="text-[#1F1714]"
                      />
                      <CreditCard className="w-4 h-4 text-[#8A6736]" />
                      <span>Instant UPI / Cards</span>
                    </label>

                    <label
                      className={`p-3 rounded-lg border text-xs font-medium cursor-pointer flex items-center gap-2 transition-all ${
                        formData.paymentMethod === 'cod'
                          ? 'bg-white border-[#C5A059] shadow-xs'
                          : 'bg-[#EFE8DD] border-[#DDD3C4]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="text-[#1F1714]"
                      />
                      <Banknote className="w-4 h-4 text-[#8A6736]" />
                      <span>Cash on Delivery (COD)</span>
                    </label>
                  </div>
                </div>

                {/* Total and Submit */}
                <div className="pt-4 border-t border-[#EADBCE] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#7A6960] block">Order Total:</span>
                    <span className="font-serif text-xl font-bold text-[#1F1714] tabular-nums">
                      {currency === 'INR' ? `₹${totalAmount.toLocaleString()}` : `$${totalAmount.toFixed(2)}`}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#1F1714] hover:bg-[#34241E] rounded shadow-md transition-colors"
                  >
                    {loading ? 'Confirming...' : 'Place My Order'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
