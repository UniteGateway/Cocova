import React, { useState } from 'react';
import { VITAMINS_DATA } from '../data/products';
import { ShieldCheck, Sparkles, CheckCircle, Info } from 'lucide-react';

export const NutritionalScience: React.FC = () => {
  const [selectedVitamin, setSelectedVitamin] = useState(0);

  const current = VITAMINS_DATA[selectedVitamin];

  return (
    <section id="nutrition" className="py-16 md:py-24 bg-[#F5EFE6] border-b border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
            <span>What's Inside?</span>
            <span aria-hidden="true">·</span>
            <span>Functional Food Science</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F1714] font-normal leading-tight text-balance">
            The Science of Thoughtful Nutrition
          </h2>
          <p className="text-base sm:text-lg text-[#55453D] leading-relaxed">
            Chocolate is naturally rich in flavanols and healthy fats. Cocova leverages this biological
            vehicle to optimize the delivery and absorption of essential fat-soluble and water-soluble vitamins.
          </p>
        </div>

        {/* 2-Column Science Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Vitamin Selector List */}
          <div className="lg:col-span-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8A6736] mb-3">
              Essential Micronutrient Matrix
            </p>
            {VITAMINS_DATA.map((item, idx) => (
              <button
                key={item.symbol}
                onClick={() => setSelectedVitamin(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between ${
                  selectedVitamin === idx
                    ? 'bg-white border-[#C5A059] shadow-sm'
                    : 'bg-[#FAF7F2] border-[#EADBCE] hover:border-[#D1C3B7]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-sm ${
                      selectedVitamin === idx
                        ? 'bg-[#1F1714] text-[#C5A059]'
                        : 'bg-[#EFE8DD] text-[#55453D]'
                    }`}
                  >
                    {item.symbol.split(' ')[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1F1714]">{item.name}</h4>
                    <p className="text-xs text-[#7A6960]">{item.role}</p>
                  </div>
                </div>

                <span className="text-xs font-bold font-mono text-[#8A6736] tabular-nums">
                  {item.dailyCoverage}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Deep Dive Science Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-xl border border-[#EADBCE] p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8A6736]">
                    Active Micronutrient Spotlight
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1F1714] mt-1">
                    {current.name}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-serif font-bold text-[#8A6736] tabular-nums block">
                    {current.dailyCoverage}
                  </span>
                  <span className="text-[11px] text-[#7A6960]">Per 50g Serving</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B5A51] mb-2">
                  Physiological Mechanism
                </h4>
                <p className="text-sm sm:text-base text-[#3D312A] leading-relaxed">
                  {current.benefit}
                </p>
              </div>

              {/* Lipid Matrix Bioavailability Highlight */}
              <div className="bg-[#FAF7F2] rounded-lg p-5 border border-[#EADBCE] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8A6736] uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>The Cocoa Butter Advantage: Superior Bioavailability</span>
                </div>
                <p className="text-xs sm:text-sm text-[#55453D] leading-relaxed">
                  Vitamins like A, D3, and E are lipid-soluble. When swallowed as dry tablets or pressed pills,
                  absorption is often inefficient without dietary fat. Cocova embeds these nutrients directly
                  into raw cacao butter, creating an ideal micellar environment that enhances natural intestinal uptake.
                </p>
              </div>

              {/* Quality testing bullet points */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#55453D]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8A6736]" />
                  <span>Micro-encapsulated against oxidation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8A6736]" />
                  <span>Zero metallic or vitamin aftertaste</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8A6736]" />
                  <span>HPLC Lab-Tested batch stability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8A6736]" />
                  <span>FSSAI functional food parameters</span>
                </div>
              </div>
            </div>

            {/* Regulatory & Formulation Disclaimer (As in original site) */}
            <div className="bg-[#FAF7F2] rounded-lg p-4 border border-[#EADBCE] flex items-start gap-3 text-xs text-[#7A6960] leading-relaxed">
              <Info className="w-4 h-4 text-[#8A6736] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#4D3F37]">Formulation & Regulatory Notice</p>
                <p>
                  Final nutrient composition, permitted health claims, and ingredient disclosures are
                  developed by Montevia Foods Pvt Ltd according to applicable FSSAI (Food Safety and Standards
                  Authority of India) requirements. Cocova is a functional food intended to supplement a balanced diet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
