import React from 'react';
import { CocovaLogo } from '../components/CocovaLogo';
import { ShieldCheck, Heart, Sparkles, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageType } from './types';

interface StoryPageProps {
  onNavigate: (page: PageType) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  const values = [
    {
      number: '01',
      title: 'Delicious chocolate',
      description: 'A rich chocolate experience created for people who love great taste, using artisanal single-origin couverture.',
    },
    {
      number: '02',
      title: 'Multivitamin nutrition',
      description: 'A thoughtfully developed combination of selected vitamins and bioavailable minerals embedded into healthy cocoa butter.',
    },
    {
      number: '03',
      title: 'Sugar-free with Monk Fruit',
      description: 'Developed with a sugar-free formulation using natural monk fruit extract, completely free of cane sugar and maltitol.',
    },
    {
      number: '04',
      title: 'Made with care',
      description: 'Created with precision attention to formulation, taste, stability, quality standards and everyday convenience.',
    },
  ];

  const milestones = [
    {
      step: '01',
      title: 'Concept & Consumer Need',
      desc: 'Understanding the consumer need for guilt-free nutrition that doesn’t feel like taking a pill or chewing a gummy.',
    },
    {
      step: '02',
      title: 'Formulation & Science',
      desc: 'Developing the ideal lipid chocolate matrix and micro-encapsulating bioavailable vitamins and chelated minerals.',
    },
    {
      step: '03',
      title: 'Taste & Monk Fruit Calibration',
      desc: 'Balancing nutrition with an enjoyable chocolate experience sweetened exclusively with natural Asian Luo Han Guo.',
    },
    {
      step: '04',
      title: 'Testing & Stability',
      desc: 'Quality, nutritional, stability and heat-resistance testing conducted under strict food science parameters in Hyderabad.',
    },
    {
      step: '05',
      title: 'Market Launch & Compliance',
      desc: 'Connoisseur packaging, FSSAI regulatory compliance, manufacturing standards, and retail distribution.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1F1714]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#170E0A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#362118] via-[#1A100B] to-[#0E0705] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              <span>Our Story</span>
              <span>•</span>
              <span>Montevia Foods Pvt Ltd</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Chocolate That Cares.
            </h1>
            <p className="text-base sm:text-xl text-[#D1C3B7] leading-relaxed">
              We believe nutrition shouldn’t feel like a chore or a medicine. Cocova was born from a
              simple, radical question: What if your daily vitamins came in the form of world-class,
              sugar-free artisanal chocolate?
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="py-16 md:py-24 border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
                Why COCOVA?
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1714] font-normal leading-tight">
                Nutrition should taste delicious.
              </h2>
              <p className="text-base text-[#55453D] leading-relaxed">
                For decades, the health and wellness industry treated nutrition as an obligation:
                chalky pills, synthetic tablets, or gummy supplements packed with refined glucose syrup.
              </p>
              <p className="text-base text-[#55453D] leading-relaxed">
                Cocova turns that idea upside down. By pairing ethical single-origin cacao with the
                natural zero-calorie sweetness of monk fruit and 7+ essential daily micronutrients, we
                create a daily ritual you genuinely anticipate.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('range')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1714] hover:bg-[#34241E] rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore The Range</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </button>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.number}
                  className="p-6 bg-white rounded-xl border border-[#EADBCE] shadow-xs space-y-2"
                >
                  <span className="font-serif text-2xl font-bold text-[#8A6736] block">
                    {v.number}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#1F1714]">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Showcase */}
      <section className="py-16 md:py-24 bg-[#F5EFE6] border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#DDD3C4] shadow-md bg-white">
              <img
                src="/assets/cocova-hero.jpg"
                alt="Cocova Couverture Chocolate"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8A6736]">
                  Flagship Formula
                </p>
                <h4 className="font-serif text-xl font-semibold text-[#1F1714]">
                  Pure Couverture Multivitamin
                </h4>
                <p className="text-xs text-[#66544B] leading-relaxed">
                  Stone-ground for 72 hours for an unctuous melt, zero sugar alcohols, and smooth bioavailable nutrient delivery.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
                Powered by Montevia Foods Pvt Ltd
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1714] font-normal leading-tight">
                Building the next generation of functional foods.
              </h2>
              <p className="text-sm sm:text-base text-[#55453D] leading-relaxed">
                Cocova is engineered and backed by <strong>Montevia Foods Pvt Ltd</strong>, based in Hyderabad,
                India. Our mission is to bridge food technology, sensory culinary excellence, and modern preventive wellness.
              </p>
              <div className="space-y-3 pt-2 text-sm text-[#3D312A]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#8A6736] shrink-0 mt-0.5" />
                  <span><strong>Zero shortcuts:</strong> No cheap maltitol, palm oil, or artificial sweeteners.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#8A6736] shrink-0 mt-0.5" />
                  <span><strong>FSSAI compliant:</strong> Formulated according to strict functional food stability protocols.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#8A6736] shrink-0 mt-0.5" />
                  <span><strong>Monk Fruit pure:</strong> Naturally sweetened with Asian Luo Han Guo (0 Calories, 0 GI).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Product Development Pipeline */}
      <section className="py-16 md:py-24 border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
              Product Development
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1714] font-normal leading-tight">
              From idea to chocolate.
            </h2>
            <p className="text-base text-[#55453D] leading-relaxed">
              Every Cocova product progresses through a rigorous 5-stage research and refinement pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((m) => (
              <div
                key={m.step}
                className="p-6 bg-white rounded-xl border border-[#EADBCE] shadow-xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-[#8A6736] tabular-nums block">
                    {m.step}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#1F1714] mt-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#66544B] leading-relaxed mt-2">
                    {m.desc}
                  </p>
                </div>
                <span className="text-[10px] text-[#8A6736] uppercase tracking-wider font-semibold pt-4 block border-t border-[#F0EBE1]">
                  Stage {m.step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-16 bg-[#170E0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Ready to taste the future of functional food?
          </h2>
          <p className="text-sm sm:text-base text-[#D1C3B7] max-w-xl mx-auto">
            Experience our 5-bar Connoisseur Gift Box, featuring whole roasted hazelnuts, almonds,
            pistachios, espresso and flaky sea salt.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('range')}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1F1714] bg-[#DFC088] hover:bg-[#E8CFA0] rounded transition-colors cursor-pointer"
            >
              Browse The Range
            </button>
            <button
              onClick={() => onNavigate('partners')}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-transparent border border-[#DFC088] hover:bg-[#2B1B15] rounded transition-colors cursor-pointer"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
