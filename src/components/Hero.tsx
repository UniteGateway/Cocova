import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Droplets, Volume2, ShieldCheck, Flame, RefreshCw } from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  onExploreClick: () => void;
  onAddToCart: (product: Product) => void;
  featuredProduct: Product;
  currency: 'INR' | 'USD';
  onNavigatePartner?: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface SplashRipple {
  id: number;
  x: number;
  y: number;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onAddToCart,
  featuredProduct,
  currency,
  onNavigatePartner,
}) => {
  // Available royalty-free cinematic banners
  const banners = [
    {
      id: 'splash',
      label: 'Liquid Splash Explosion',
      image: '/src/assets/images/hero_chocolate_splash_1790322505223.jpg',
      alt: 'Dramatic liquid chocolate splash explosion with hazelnuts and cacao beans',
      mood: 'Dynamic & Kinetic',
    },
    {
      id: 'couverture',
      label: 'Artisanal Couverture Bar',
      image: '/assets/cocova-hero.jpg',
      alt: 'Artisanal chocolate bar with whole cacao pods on slate',
      mood: 'Luxury & Refined',
    },
    {
      id: 'cacao',
      label: 'Single-Origin Cacao Pods',
      image: '/assets/cocova-cacao.jpg',
      alt: 'Freshly harvested cacao pods and raw cacao beans',
      mood: 'Organic & Botanical',
    },
  ];

  const [activeBannerIdx, setActiveBannerIdx] = useState(0);
  const [isCrazySplashActive, setIsCrazySplashActive] = useState(false);
  const [ripples, setRipples] = useState<SplashRipple[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isMuted, setIsMuted] = useState(true);

  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeBanner = banners[activeBannerIdx];

  // Mouse move parallax and spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  // Interactive Click Ripple / Splash Burst
  const triggerSplashAt = (clientX?: number, clientY?: number) => {
    let x = 50;
    let y = 50;

    if (clientX !== undefined && clientY !== undefined && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      x = ((clientX - rect.left) / rect.width) * 100;
      y = ((clientY - rect.top) / rect.height) * 100;
    }

    const newRipple = { id: Date.now() + Math.random(), x, y };
    setRipples((prev) => [...prev.slice(-4), newRipple]);

    setIsCrazySplashActive(true);
    setTimeout(() => {
      setIsCrazySplashActive(false);
    }, 1200);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1500);
  };

  // Live Canvas Particle System (Golden flakes & dark chocolate liquid droplets)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = [
      '#DFC088', // Gold
      '#C5A059', // Rich gold
      '#6E412A', // Warm chocolate
      '#422416', // Deep dark cacao
      '#FFD700', // Sparkling gold dust
    ];

    const particleCount = 45;
    const particles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3.5 + 1.2,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: -Math.random() * 1.2 - 0.3,
      opacity: Math.random() * 0.7 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX + (mousePos.x - 0.5) * 0.5;
        p.y += p.speedY;

        // Wrap around screen
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos]);

  return (
    <section
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={(e) => {
        // Only trigger ripple if clicking the background, not buttons
        if ((e.target as HTMLElement).tagName !== 'BUTTON') {
          triggerSplashAt(e.clientX, e.clientY);
        }
      }}
      className="relative min-h-[92svh] lg:min-h-[96svh] flex items-center overflow-hidden bg-[#0F0805] select-none"
    >
      {/* 1. Cinematic Background Image Layer with smooth fade */}
      {banners.map((b, idx) => (
        <div
          key={b.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            activeBannerIdx === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{
            transform: `scale(${1 + (activeBannerIdx === idx ? 0.02 : 0.06)}) translate(${
              (mousePos.x - 0.5) * -12
            }px, ${(mousePos.y - 0.5) * -10}px)`,
            transition: 'transform 0.25s ease-out, opacity 1s ease-out',
          }}
        >
          <img
            src={b.image}
            alt={b.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[60%_center] filter brightness-[0.88] contrast-[1.12]"
          />
        </div>
      ))}

      {/* 2. Interactive Gold / Amber Cursor Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x * 100}% ${
            mousePos.y * 100
          }%, rgba(197, 160, 89, 0.16) 0%, rgba(110, 65, 42, 0.08) 45%, transparent 75%)`,
        }}
      />

      {/* 3. Deep Cinematic Gradients for Flawless Text Legibility */}
      {/* Desktop Horizontal Deep Chocolate Wash */}
      <div
        className="absolute inset-0 hidden sm:block pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(15, 8, 5, 0.96) 0%, rgba(18, 10, 7, 0.88) 35%, rgba(20, 11, 8, 0.58) 62%, rgba(0, 0, 0, 0.2) 85%, transparent 100%)',
        }}
      />
      {/* Mobile Vertical Gradient */}
      <div
        className="absolute inset-0 sm:hidden pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(15, 8, 5, 0.45) 0%, rgba(18, 10, 7, 0.82) 42%, rgba(15, 8, 5, 0.98) 100%)',
        }}
      />

      {/* 4. Canvas Floating Particles Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
      />

      {/* 5. Dynamic Splash Waves & Click Ripples */}
      {ripples.map((rip) => (
        <span
          key={rip.id}
          className="absolute z-20 pointer-events-none rounded-full border border-[#DFC088]/80 animate-ping"
          style={{
            left: `${rip.x}%`,
            top: `${rip.y}%`,
            width: '120px',
            height: '120px',
            marginLeft: '-60px',
            marginTop: '-60px',
            animationDuration: '1.2s',
            boxShadow: '0 0 35px rgba(223, 192, 136, 0.6)',
          }}
        />
      ))}

      {/* 6. Main Interactive Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full pt-16 pb-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Interactive Kicker Bar with Splash Trigger */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#DFC088]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-spin" style={{ animationDuration: '6s' }} />
                <span className="font-semibold uppercase tracking-[0.18em]">
                  Sugar-Free Multivitamin Chocolate
                </span>
              </div>

              {/* Crazy Interactive Splash Burst Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  triggerSplashAt();
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                  isCrazySplashActive
                    ? 'bg-[#C5A059] text-[#1F1714] scale-105'
                    : 'bg-[#291710]/80 hover:bg-[#3D2319] text-[#E0D7CD] border border-[#5A3828]'
                }`}
                title="Trigger a liquid chocolate splash ripple"
              >
                <Droplets className="w-3.5 h-3.5 text-[#DFC088] animate-bounce" />
                <span>{isCrazySplashActive ? 'Chocolate Splash! 💥' : 'Trigger Splash'}</span>
              </button>
            </div>

            {/* Main Headline with Animated Shimmer Accent */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-normal tracking-tight text-white leading-[0.92] text-balance">
              Chocolate
              <br />
              <span className="relative inline-block">
                That Cares
                <span className="text-[#C5A059] animate-pulse">.</span>
                {/* Subtle golden shimmer sweep line */}
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFC088] to-transparent opacity-80" />
              </span>
            </h1>

            {/* Editorial Lead Prose */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#FAF7F2]/95 font-serif font-light leading-snug max-w-xl">
              Delicious chocolate. Thoughtful nutrition. Everyday care.
            </p>

            <p className="text-sm sm:text-base text-[#D1C3B7] leading-relaxed max-w-lg font-sans">
              The rich decadence of single-origin couverture chocolate, infused with pure
              zero-glycemic Monk Fruit extract and fortified with 7+ essential daily micronutrients.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(featuredProduct);
                  triggerSplashAt();
                }}
                className="group relative overflow-hidden px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1F1714] bg-[#C5A059] hover:bg-[#D4AF67] active:scale-98 rounded-lg shadow-xl shadow-black/40 transition-all inline-flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                {/* Shimmer sweep animation over primary button */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                <span>Discover Cocova</span>
                <span className="text-[#1F1714]/85 font-normal">
                  ({currency === 'INR' ? '₹1,950' : '$24.00'})
                </span>
                <ArrowRight className="w-4 h-4 text-[#1F1714] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onNavigatePartner) onNavigatePartner();
                  else onExploreClick();
                }}
                className="px-6 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-white/5 hover:bg-white/10 active:scale-98 border border-white/30 hover:border-white rounded-lg transition-all inline-flex items-center gap-2 cursor-pointer backdrop-blur-sm whitespace-nowrap"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4 text-[#DFC088]" />
              </button>
            </div>

            {/* Banner Atmosphere Switcher */}
            <div className="pt-4 flex items-center gap-2 text-xs text-[#A39287]">
              <span className="text-[11px] uppercase tracking-wider text-[#DFC088]/80 font-medium">
                Visual Scene:
              </span>
              <div className="flex items-center gap-1.5 bg-[#1B100B]/80 p-1 rounded-lg border border-[#3E2419]">
                {banners.map((b, idx) => (
                  <button
                    key={b.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBannerIdx(idx);
                      triggerSplashAt();
                    }}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all cursor-pointer ${
                      activeBannerIdx === idx
                        ? 'bg-[#C5A059] text-[#1F1714] font-bold shadow-xs'
                        : 'text-[#C4B3A3] hover:text-white'
                    }`}
                  >
                    {idx === 0 ? 'Splash Burst 💥' : idx === 1 ? 'Couverture Bar' : 'Cacao Pods'}
                  </button>
                ))}
              </div>
            </div>

            {/* 4 Unboxed Key Health Pillars */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">0g</p>
                <p className="text-xs text-[#D1C3B7] font-medium mt-0.5">Added Cane Sugar</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#DFC088] tabular-nums">100%</p>
                <p className="text-xs text-[#D1C3B7] font-medium mt-0.5">Monk Fruit Pure</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">7+</p>
                <p className="text-xs text-[#D1C3B7] font-medium mt-0.5">Vitamins & Minerals</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#DFC088] tabular-nums">0 GI</p>
                <p className="text-xs text-[#D1C3B7] font-medium mt-0.5">Glycemic Spike</p>
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D Splash Showcase & Sensory Cards */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px]">
            {/* Ambient Backlight Glow Ring */}
            <div className="absolute w-72 h-72 rounded-full bg-[#C5A059]/20 blur-3xl animate-pulse-glow pointer-events-none" />

            {/* Primary Floating Snapped Chocolate Bar Card with Splash Burst Effect */}
            <div
              className="relative w-full max-w-sm bg-[#1A100B]/85 backdrop-blur-xl border border-[#4D3123] rounded-2xl p-5 shadow-2xl animate-float-slow transition-transform hover:scale-104 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(featuredProduct);
                triggerSplashAt();
              }}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#24150E] border border-[#3E2519]">
                <img
                  src="/src/assets/images/splash_bar_burst_1790322520720.jpg"
                  alt="Luxury chocolate snap with liquid chocolate burst"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#120B08]/90 backdrop-blur-md text-[#DFC088] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-[#DFC088]/30">
                  Couverture Snap
                </div>
                <div className="absolute bottom-3 right-3 bg-[#C5A059] text-[#1F1714] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-md">
                  72h Conched
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white">
                    Grand Connoisseur Box
                  </h3>
                  <p className="text-xs text-[#DFC088]">
                    5 Flavors · Single-Origin Cacao
                  </p>
                </div>
                <span className="text-base font-serif font-bold text-[#DFC088]">
                  {currency === 'INR' ? '₹1,950' : '$24'}
                </span>
              </div>
            </div>

            {/* Floating Satellite Card 1: Monk Fruit Sweetness Badge */}
            <div
              className="absolute -top-4 -left-4 sm:-left-8 bg-[#1F130E]/90 backdrop-blur-md border border-[#523424] rounded-xl px-4 py-2.5 shadow-xl animate-float-reverse hidden sm:flex items-center gap-2.5"
              style={{ animationDelay: '1s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#2E1A11] flex items-center justify-center text-[#2E7D32]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-none">0g Added Sugar</p>
                <p className="text-[10px] text-[#A39287] mt-0.5">Monk Fruit Mogroside V</p>
              </div>
            </div>

            {/* Floating Satellite Card 2: 7+ Micronutrient Matrix */}
            <div
              className="absolute -bottom-4 -right-2 sm:-right-6 bg-[#1F130E]/90 backdrop-blur-md border border-[#523424] rounded-xl px-4 py-2.5 shadow-xl animate-float-slow hidden sm:flex items-center gap-2.5"
              style={{ animationDelay: '2.5s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#2E1A11] flex items-center justify-center text-[#DFC088]">
                <Sparkles className="w-4 h-4 text-[#DFC088]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-none">7+ Daily Vitamins</p>
                <p className="text-[10px] text-[#A39287] mt-0.5">Vitamins A, C, D3, E & Zinc</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Bottom Liquid Chocolate SVG Wave Transition */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-30">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 text-[#FAF7F2] preserve-3d"
        >
          <path
            d="M0,32 C240,64 480,12 720,38 C960,64 1200,16 1440,32 L1440,64 L0,64 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
