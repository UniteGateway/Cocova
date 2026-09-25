import React from 'react';
import { CocovaLogo } from '../components/CocovaLogo';
import { ShoppingBag, ArrowUpRight, Menu, X } from 'lucide-react';
import { PageType } from './types';

interface HeaderNavProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  cartCount: number;
  onOpenCart: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  currency,
  onToggleCurrency,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Our Story', page: 'story' },
    { label: 'Nutrition', page: 'nutrition' },
    { label: 'The Range', page: 'range' },
    { label: 'Monk Fruit', page: 'monk-fruit' },
    { label: 'Partner With Us', page: 'partners' },
  ];

  const handleNav = (p: PageType) => {
    onNavigate(p);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#170E0A] text-[#E0D7CD] px-4 py-2 text-center text-xs tracking-wider font-medium flex items-center justify-center gap-3">
        <span className="hidden sm:inline">Crafted with Zero Cane Sugar & Monk Fruit Extract</span>
        <span className="hidden sm:inline text-[#C5A059]">•</span>
        <span>Sugar-Free Multivitamin Chocolate</span>
        <span className="text-[#C5A059]">•</span>
        <span className="text-[#C5A059]">Montevia Foods Pvt Ltd</span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center text-left group py-1 cursor-pointer"
            aria-label="COCOVA home"
          >
            <CocovaLogo variant="dark" size="md" showSubtitle={false} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4D3F37]">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`py-1 cursor-pointer transition-colors relative ${
                    isActive
                      ? 'text-[#1F1714] font-semibold border-b-2 border-[#C5A059]'
                      : 'hover:text-[#1F1714]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Currency toggle */}
            <button
              onClick={onToggleCurrency}
              className="text-xs font-semibold px-2.5 py-1.5 rounded border border-[#D9CFC4] hover:bg-[#F0EBE1] text-[#3D312A] transition-colors cursor-pointer"
              title="Toggle currency"
            >
              {currency === 'INR' ? '₹ INR' : '$ USD'}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#2B211C] hover:text-[#C5A059] transition-colors rounded-md cursor-pointer"
              aria-label={`Shopping bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C5A059] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Partner Action */}
            <button
              onClick={() => handleNav('partners')}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#1F1714] hover:bg-[#34241E] rounded transition-colors cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#2B211C] hover:text-[#C5A059]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#EADBCE] bg-[#FAF7F2] px-6 py-5 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`block w-full text-left py-2 text-sm font-medium ${
                  currentPage === item.page ? 'text-[#C5A059] font-bold' : 'text-[#2B211C]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
