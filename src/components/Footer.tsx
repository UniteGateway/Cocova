import React, { useState } from 'react';
import { CocovaLogo } from './CocovaLogo';
import { MapPin, Mail, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { PageType } from '../pages/types';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const nav = (p: PageType) => {
    if (onNavigate) {
      onNavigate(p);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#140C08] text-[#D1C3B7] border-t border-[#291B14] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#291B14]">
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => nav('home')} className="text-left cursor-pointer">
              <CocovaLogo variant="gold" size="md" showSubtitle={true} />
            </button>
            <p className="text-xs sm:text-sm text-[#A39287] leading-relaxed pt-2">
              COCOVA is an innovative functional confectionery platform powered by{' '}
              <strong className="text-white font-medium">Montevia Foods Pvt Ltd</strong>. We engineer
              sugar-free, monk fruit sweetened multivitamin chocolate for modern, health-conscious consumers.
            </p>
            <div className="text-xs text-[#8F7D74] space-y-1.5 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>hello@monteviafoods.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              All Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => nav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => nav('story')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Story & Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => nav('nutrition')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Nutritional Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => nav('range')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Product Range
                </button>
              </li>
              <li>
                <button
                  onClick={() => nav('monk-fruit')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Monk Fruit Sweetener
                </button>
              </li>
              <li>
                <button
                  onClick={() => nav('partners')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Partner With Us
                </button>
              </li>
            </ul>
          </div>

          {/* Flavors & Range */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              Artisan Creations
            </h4>
            <ul className="space-y-2 text-xs text-[#A39287]">
              <li>Grand Connoisseur 5-Bar Gift Box</li>
              <li>Hazelnut Crisp (Dark & Milk Blend)</li>
              <li>California Roasted Almond Velvet</li>
              <li>Mediterranean Royal Pistachio</li>
              <li>Cold-Brew Espresso & 70% Dark Cacao</li>
              <li>Hand-Harvested Flaky Sea Salt Bar</li>
              <li>Daily Vitality 3-Bar Curated Trio</li>
            </ul>
          </div>

          {/* Newsletter / Connoisseur Club */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              Connoisseur Circle
            </h4>
            <p className="text-xs text-[#A39287]">
              Join for private tasting invitations, new product launches, and exclusive functional food research.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#241712] rounded border border-[#3E2B21] text-xs text-[#DFC088] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>Welcome! Use coupon code <strong>COCOVA10</strong> for 10% off.</span>
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
                    className="px-3.5 py-2 bg-[#C5A059] text-[#1F1714] font-semibold text-xs rounded-r hover:bg-[#D4B36E] transition-colors cursor-pointer"
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
            values, ingredients, permitted health claims and regulatory labeling will be updated based on
            the final approved product in accordance with applicable FSSAI (Food Safety and Standards Authority of India)
            standards. Powered by Montevia Foods Pvt Ltd.
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
