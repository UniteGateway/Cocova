import React, { useState } from 'react';
import { CocovaLogo } from './CocovaLogo';
import { MapPin, Mail, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#140C08] text-[#D1C3B7] border-t border-[#291B14] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#291B14]">
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-4">
            <CocovaLogo variant="gold" size="md" showSubtitle={true} />
            <p className="text-xs sm:text-sm text-[#A39287] leading-relaxed pt-2">
              COCOVA is an innovative functional confectionery platform powered by{' '}
              <strong className="text-white font-medium">Montevia Foods Pvt Ltd</strong>. We engineer
              sugar-free, monk fruit sweetened multivitamin chocolate for modern, health-conscious consumers.
            </p>
            <div className="text-xs text-[#8F7D74] space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>enquiries@monteviafoods.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              The Brand
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Artisanal Collection
                </a>
              </li>
              <li>
                <a href="#monk-fruit" className="hover:text-white transition-colors">
                  Monk Fruit Science
                </a>
              </li>
              <li>
                <a href="#nutrition" className="hover:text-white transition-colors">
                  Nutritional Matrix
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  Commercial Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Flavors & Range */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              Signature Creations
            </h4>
            <ul className="space-y-2 text-xs text-[#A39287]">
              <li>Grand Connoisseur 5-Bar Box</li>
              <li>Hazelnut Crisp (Dark & Milk)</li>
              <li>California Roasted Almond</li>
              <li>Mediterranean Royal Pistachio</li>
              <li>Cold-Brew Espresso & Dark Cacao</li>
              <li>Hand-Harvested Flaky Sea Salt</li>
            </ul>
          </div>

          {/* Newsletter / Connoisseur Club */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              Connoisseur Circle
            </h4>
            <p className="text-xs text-[#A39287]">
              Join for private tasting invitations, new flavor launches, and exclusive functional food research.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#241712] rounded border border-[#3E2B21] text-xs text-[#DFC088] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>Welcome! Use code <strong>COCOVA10</strong> for 10% off your first order.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full text-xs px-3 py-2 bg-[#20140F] border border-[#3D291F] rounded-l text-white focus:outline-none focus:border-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#C5A059] text-[#1F1714] font-semibold text-xs rounded-r hover:bg-[#D4B36E] transition-colors"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-[#736056] block">
                  Zero spam. Strictly fine chocolate & nutrition updates.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Legal & Regulatory Disclaimer from original Lovable site */}
        <div className="pt-8 text-xs text-[#7A6960] space-y-3">
          <p className="leading-relaxed">
            <strong>Regulatory & Formulation Disclosure:</strong> Product formulation, nutritional
            values, ingredients, permitted health claims and regulatory labeling are developed in
            accordance with applicable FSSAI (Food Safety and Standards Authority of India) standards.
            Statements made regarding monk fruit and micronutrients are for educational purposes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#241712] text-[11px]">
            <p>© 2026 Montevia Foods Pvt Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>FSSAI Compliant R&D</span>
              <span>•</span>
              <span>Made in India</span>
              <span>•</span>
              <span>Zero Cane Sugar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
