import React from 'react';
import { Sparkles, Shield, HeartPulse, Leaf, CheckCircle2 } from 'lucide-react';

export const WhyCocova: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: 'Monk Fruit Sweetness',
      subtitle: 'Zero Cane Sugar · Zero Glycemic Spike',
      description:
        'We replace refined sugars and cheap sugar alcohols (maltitol) with pure monk fruit extract (Mogroside V). Enjoy natural sweetness with zero calories, zero glucose spikes, and no bitter aftertaste.',
    },
    {
      icon: HeartPulse,
      title: 'Essential Multivitamins',
      subtitle: 'Bioavailable Daily Micronutrients',
      description:
        'Each serving provides up to 50% RDA of essential vitamins including Vitamin A, C, D3, E, B-Complex, plus zinc and iron chelate, seamlessly micro-encapsulated inside smooth cocoa butter.',
    },
    {
      icon: Sparkles,
      title: 'Artisanal Couverture',
      subtitle: 'Single-Origin Swiss Conch Technique',
      description:
        'Crafted from ethically sourced sustainable cacao beans, stone-ground and conched for 72 hours for an unctuous, velvety melt and crisp acoustic snap that chocolate purists revere.',
    },
    {
      icon: Shield,
      title: 'Rigorous Quality Standards',
      subtitle: 'Montevia Foods Formulation',
      description:
        'Formulated and batch-tested under strict food science parameters in Hyderabad, India. Formulated according to FSSAI guidelines for functional wellness and maximum nutrient stability.',
    },
  ];

  return (
    <section id="story" className="py-16 md:py-24 bg-[#F5EFE6] border-b border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
            Why COCOVA?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F1714] font-normal leading-tight text-balance">
            Nutrition should taste delicious.
          </h2>
          <p className="text-base sm:text-lg text-[#55453D] leading-relaxed">
            We believe everyday wellness shouldn’t feel like swallowing chalky pills or chewing gummy
            candies loaded with corn syrup. Cocova transforms essential daily nutritional intake into a
            moment of pure sensory pleasure.
          </p>
        </div>

        {/* 4 Pillars Grid (No pills, clean unboxed typography and hairline dividers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#FAF7F2] p-6 sm:p-7 rounded-xl border border-[#EADBCE] hover:border-[#C5A059] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#EFE8DD] flex items-center justify-center text-[#8A6736] mb-5 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A6736] mb-1">
                    {pillar.subtitle}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-[#1F1714] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#55453D] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#EADBCE]/80 flex items-center gap-2 text-xs font-medium text-[#6B5A51]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A6736]" />
                  <span>Formulated for daily ritual</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Quote */}
        <div className="mt-14 bg-[#1F1714] text-white rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-[#DFC088] font-semibold">
              The Cocova Promise
            </p>
            <h4 className="font-serif text-2xl sm:text-3xl text-white">
              Taste + Nutrition + Convenience + Quality
            </h4>
            <p className="text-sm text-[#D1C3B7] max-w-xl">
              Every batch is powered by Montevia Foods Pvt Ltd with a commitment to pure luxury ingredients,
              zero shortcuts, and honest functional nutrition.
            </p>
          </div>

          <a
            href="#collection"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1F1714] bg-[#DFC088] hover:bg-[#E8CFA0] rounded transition-colors whitespace-nowrap"
          >
            Explore The Range
          </a>
        </div>
      </div>
    </section>
  );
};
