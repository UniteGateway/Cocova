import React, { useState, useEffect } from 'react';
import { CocovaLogo } from './CocovaLogo';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  currency,
  onToggleCurrency,
  onOpenInquiry,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'The Range', href: '#collection' },
    { name: 'Monk Fruit', href: '#monk-fruit' },
    { name: 'Nutrition', href: '#nutrition' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <>
      {/* Subtle announcement strip */}
      <div className="bg-[#1F1714] text-[#E0D7CD] px-4 py-2 text-center text-xs tracking-wider font-medium flex items-center justify-center gap-3">
        <span className="hidden sm:inline">Crafted with Zero Cane Sugar & Monk Fruit Extract</span>
        <span className="hidden sm:inline text-[#C5A059]">•</span>
        <span>Multivitamin Infused Couverture Chocolate</span>
        <span className="text-[#C5A059]">•</span>
        <span className="text-[#C5A059]">Montevia Foods Pvt Ltd</span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-[#EADBCE] shadow-xs'
            : 'bg-[#FAF7F2] border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Zone 1: Single Brand Wordmark element */}
          <a href="#" className="flex items-center group py-1" aria-label="Cocova Chocolate Home">
            <CocovaLogo variant="dark" size="md" showSubtitle={false} />
          </a>

          {/* Zone 2: Clean 4–6 text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4D3F37]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1F1714] transition-colors relative py-1 hover:border-b-2 hover:border-[#C5A059]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Currency selector */}
            <button
              onClick={onToggleCurrency}
              className="text-xs font-semibold px-2.5 py-1.5 rounded border border-[#D9CFC4] hover:bg-[#F0EBE1] text-[#3D312A] transition-colors whitespace-nowrap"
              title="Toggle currency"
            >
              {currency === 'INR' ? '₹ INR' : '$ USD'}
            </button>

            {/* Shopping Bag CTA */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#2B211C] hover:text-[#C5A059] transition-colors rounded-md"
              aria-label={`View Shopping Bag (${cartCount} items)`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C5A059] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Order / Partner CTA */}
            <button
              onClick={onOpenInquiry}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#1F1714] hover:bg-[#34241E] rounded transition-colors whitespace-nowrap"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2B211C] hover:text-[#C5A059]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#EADBCE] bg-[#FAF7F2] px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#2B211C] hover:text-[#C5A059] py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-[#EADBCE] flex items-center justify-between">
              <button
                onClick={() => {
                  onToggleCurrency();
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-semibold px-3 py-1.5 rounded border border-[#D9CFC4] text-[#3D312A]"
              >
                Switch to {currency === 'INR' ? '$ USD' : '₹ INR'}
              </button>
              <button
                onClick={() => {
                  onOpenInquiry();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#1F1714] rounded"
              >
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
