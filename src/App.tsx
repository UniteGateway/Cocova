import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyCocova } from './components/WhyCocova';
import { ProductSpotlight } from './components/ProductSpotlight';
import { ProductCollection } from './components/ProductCollection';
import { MonkFruitScience } from './components/MonkFruitScience';
import { NutritionalScience } from './components/NutritionalScience';
import { EverydayMoments } from './components/EverydayMoments';
import { CraftsmanshipStory } from './components/CraftsmanshipStory';
import { PartnerSection } from './components/PartnerSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { TastingModal } from './components/TastingModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Start with the Grand Connoisseur Gift Box
      quantity: 1,
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [tastingProduct, setTastingProduct] = useState<Product | null>(null);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setToastMessage(`Added "${product.name}" to your bag`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleOrderCompleted = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F1714] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onToggleCurrency={() => setCurrency((c) => (c === 'INR' ? 'USD' : 'INR'))}
        onOpenInquiry={() => scrollToSection('partners')}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('collection')}
          onAddToCart={handleAddToCart}
          featuredProduct={PRODUCTS[0]}
          currency={currency}
        />

        {/* 2. Why Cocova Philosophy & 4 Pillars */}
        <WhyCocova />

        {/* 3. Product Spotlight: Grand Connoisseur Box with 5 Artisan Bars */}
        <ProductSpotlight
          product={PRODUCTS[0]}
          onAddToCart={handleAddToCart}
          onOpenTasting={(prod) => setTastingProduct(prod)}
          currency={currency}
        />

        {/* 4. Complete Product Collection Grid */}
        <ProductCollection
          onAddToCart={handleAddToCart}
          onOpenTasting={(prod) => setTastingProduct(prod)}
          currency={currency}
        />

        {/* 5. Monk Fruit Science & Sweetener Comparison */}
        <MonkFruitScience />

        {/* 6. What's Inside: Nutritional Science & Vitamins */}
        <NutritionalScience />

        {/* 7. Everyday Life Moments */}
        <EverydayMoments />

        {/* 8. Craftsmanship Story: From Idea to Chocolate */}
        <CraftsmanshipStory />

        {/* 9. Commercial & Distribution Partner Portal */}
        <PartnerSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        currency={currency}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderCompleted={handleOrderCompleted}
        currency={currency}
      />

      {/* Tasting & Nutritional Profile Modal */}
      <TastingModal
        product={tastingProduct}
        onClose={() => setTastingProduct(null)}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#1F1714] text-white px-4 py-3 rounded-lg shadow-xl border border-[#3E2B21] flex items-center gap-3 animate-fade-in text-xs font-medium"
        >
          <div className="w-5 h-5 rounded-full bg-[#C5A059] flex items-center justify-center text-[#1F1714]">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="truncate max-w-xs">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-[#DFC088] underline hover:text-white font-semibold"
          >
            View Bag
          </button>
        </div>
      )}
    </div>
  );
}
