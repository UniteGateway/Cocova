import React, { useState } from 'react';
import { CocovaLogo } from './CocovaLogo';
import { Check, X, Sparkles, AlertCircle, ShieldCheck, HeartPulse, Scale } from 'lucide-react';

interface NutritionComparisonProps {
  className?: string;
  onExploreRange?: () => void;
}

export const NutritionComparison: React.FC<NutritionComparisonProps> = ({
  className = '',
  onExploreRange,
}) => {
  const [servingMode, setServingMode] = useState<'serving' | 'bar'>('serving');

  const factor = servingMode === 'serving' ? 0.5 : 1.0; // 50g vs 100g

  const metrics = [
    {
      label: 'Added Cane Sugar',
      subtitle: 'Refined sucrose & high glycemic syrups',
      cocova: '0.0 g',
      cocovaHighlight: 'Zero Added Sugar',
      traditional: `${(48 * factor).toFixed(0)}–${(54 * factor).toFixed(0)} g`,
      traditionalNote: `${servingMode === 'serving' ? '6+' : '12+'} teaspoons of sugar`,
      benefit: 'Prevents glucose spikes and insulin crashes',
    },
    {
      label: 'Sweetener Source',
      subtitle: 'Taste profile & biological response',
      cocova: '100% Monk Fruit (Mogroside V)',
      cocovaHighlight: 'Natural Asian Melon',
      traditional: 'Refined White Sugar / High-Fructose Corn Syrup',
      traditionalNote: 'Often bulked with cheap maltitol',
      benefit: 'Clean, warm sweetness without artificial aftertaste',
    },
    {
      label: 'Glycemic Index (GI)',
      subtitle: 'Speed of blood sugar elevation',
      cocova: '0 (Zero Spike)',
      cocovaHighlight: 'Keto & Diabetic Safe',
      traditional: '65 – 70 (High Spike)',
      traditionalNote: 'Causes severe 3 PM afternoon fatigue',
      benefit: 'Steady, prolonged physical and mental energy',
    },
    {
      label: 'Multivitamin Fortification',
      subtitle: 'Vitamins A, C, D3, E, B1, B2, B6, B12',
      cocova: servingMode === 'serving' ? '35% – 50% RDA' : '70% – 100% RDA',
      cocovaHighlight: '7+ Essential Vitamins',
      traditional: '0% (Virtually Absent)',
      traditionalNote: 'Stripped during high-heat Dutching',
      benefit: 'Supports daily immunity, eyesight & cellular vitality',
    },
    {
      label: 'Essential Minerals',
      subtitle: 'Bioavailable Zinc & Magnesium',
      cocova: servingMode === 'serving' ? '35% RDA Zinc + 30% Mg' : '70% RDA Zinc + 60% Mg',
      cocovaHighlight: 'Chelated Absorption',
      traditional: 'Negligible trace minerals',
      traditionalNote: 'Diluted by sugar & milk powder',
      benefit: 'Aids muscular relaxation, recovery & deeper sleep',
    },
    {
      label: 'Nutrient Absorption Carrier',
      subtitle: 'Lipid vehicle for fat-soluble vitamins',
      cocova: '100% Pure Cocoa Butter',
      cocovaHighlight: 'Micellar Bioavailability',
      traditional: 'Palm Kernel Oil & PGPR (E476)',
      traditionalNote: 'Cheap emulsifiers to cut cocoa butter',
      benefit: 'Fat-soluble vitamins A, D3 & E readily absorbed',
    },
    {
      label: 'Digestive Comfort',
      subtitle: 'Gut microbiome impact',
      cocova: 'Gentle & Non-Fermentable',
      cocovaHighlight: 'Zero Gastric Bloating',
      traditional: 'Gastric Fermentation & Bloat',
      traditionalNote: 'Maltitol triggers notorious laxative effect',
      benefit: 'No bloating, stomach cramps, or nausea',
    },
    {
      label: 'Lifestyle Compatibility',
      subtitle: 'Dietary protocols',
      cocova: 'Diabetic, Keto, Low-Carb, Vegan Options',
      cocovaHighlight: '100% Guilt-Free',
      traditional: 'High Glycemic, High Calorie',
      traditionalNote: 'Excluded from metabolic health diets',
      benefit: 'Can be enjoyed every day as a functional habit',
    },
  ];

  return (
    <section className={`py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EADBCE] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
            <Scale className="w-4 h-4 text-[#8A6736]" />
            <span>Nutritional Comparison</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F1714] font-normal leading-tight text-balance">
            COCOVA vs. Traditional Chocolate
          </h2>
          <p className="text-base sm:text-lg text-[#55453D] leading-relaxed">
            See the side-by-side scientific difference between everyday commercial confectionery loaded with
            refined sugars and Cocova’s monk fruit-sweetened multivitamin formulation.
          </p>

          {/* Segmented Serving Switcher */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#EFE8DD] rounded-lg border border-[#DDD3C4] mt-3">
            <button
              onClick={() => setServingMode('serving')}
              className={`px-4 py-2 text-xs font-medium rounded transition-colors uppercase tracking-wider cursor-pointer ${
                servingMode === 'serving'
                  ? 'bg-white text-[#1F1714] font-bold shadow-xs'
                  : 'text-[#66544B] hover:text-[#1F1714]'
              }`}
            >
              Per 50g Daily Serving
            </button>
            <button
              onClick={() => setServingMode('bar')}
              className={`px-4 py-2 text-xs font-medium rounded transition-colors uppercase tracking-wider cursor-pointer ${
                servingMode === 'bar'
                  ? 'bg-white text-[#1F1714] font-bold shadow-xs'
                  : 'text-[#66544B] hover:text-[#1F1714]'
              }`}
            >
              Per 100g Full Bar
            </button>
          </div>
        </div>

        {/* 3 Key Metric Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-[#EADBCE] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#FAF4EA] text-[#8A6736] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#8A6736] font-semibold">Sugar Saved</p>
              <h3 className="font-serif text-2xl font-bold text-[#1F1714] mt-0.5">
                {servingMode === 'serving' ? '24g – 27g Sugar' : '48g – 54g Sugar'}
              </h3>
              <p className="text-xs text-[#66544B] mt-1">
                Zero added sucrose. Enjoy authentic single-origin chocolate without any glycemic penalty.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#EADBCE] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#FAF4EA] text-[#8A6736] flex items-center justify-center shrink-0">
              <HeartPulse className="w-6 h-6 text-[#8A6736]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#8A6736] font-semibold">Daily Micronutrients</p>
              <h3 className="font-serif text-2xl font-bold text-[#1F1714] mt-0.5">
                7+ Daily Vitamins & Minerals
              </h3>
              <p className="text-xs text-[#66544B] mt-1">
                Delivers up to 50% RDA of Vitamins A, C, D3, E, B-Complex, Zinc & Iron in every serving.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#EADBCE] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#FAF4EA] text-[#8A6736] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#8A6736]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#8A6736] font-semibold">Glycemic Impact</p>
              <h3 className="font-serif text-2xl font-bold text-[#1F1714] mt-0.5">
                0 GI · Zero Sugar Spike
              </h3>
              <p className="text-xs text-[#66544B] mt-1">
                Safe for diabetic, ketogenic, and PCOS conscious lifestyles with clean, steady cognitive energy.
              </p>
            </div>
          </div>
        </div>

        {/* Side-by-Side Detailed Table */}
        <div className="bg-white rounded-2xl border border-[#EADBCE] overflow-hidden shadow-sm">
          {/* Table Header Columns */}
          <div className="grid grid-cols-12 border-b border-[#EADBCE] bg-[#F7F3EC] text-xs font-semibold uppercase tracking-wider text-[#736056]">
            <div className="col-span-4 p-4 sm:p-5 flex items-center">
              <span>Nutritional Attribute</span>
            </div>
            <div className="col-span-4 p-4 sm:p-5 bg-[#FAF4EA] border-x border-[#EADBCE] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CocovaLogo variant="dark" size="sm" showSubtitle={false} />
                <span className="text-[#8A6736] font-bold hidden sm:inline">COCOVA</span>
              </div>
              <span className="text-[10px] bg-[#C5A059] text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                Functional
              </span>
            </div>
            <div className="col-span-4 p-4 sm:p-5 flex items-center justify-between">
              <span className="text-[#6B5A51]">Standard Chocolate</span>
              <span className="text-[10px] bg-[#E0D7CD] text-[#55453D] px-2 py-0.5 rounded font-medium uppercase tracking-wider hidden sm:inline">
                Sugar-Laden
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#EADBCE]">
            {metrics.map((m, idx) => (
              <div
                key={m.label}
                className={`grid grid-cols-12 text-xs sm:text-sm transition-colors ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F2]/50'
                }`}
              >
                {/* Column 1: Feature Label */}
                <div className="col-span-4 p-4 sm:p-5 flex flex-col justify-center">
                  <span className="font-semibold text-[#1F1714]">{m.label}</span>
                  <span className="text-[11px] text-[#7A6960] mt-0.5 hidden sm:block">
                    {m.subtitle}
                  </span>
                  <span className="text-[10px] text-[#8A6736] font-medium mt-1">
                    {m.benefit}
                  </span>
                </div>

                {/* Column 2: COCOVA (Highlighted Winner) */}
                <div className="col-span-4 p-4 sm:p-5 bg-[#FAF4EA]/80 border-x border-[#EADBCE] flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 font-bold text-[#8A6736]">
                    <Check className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span className="text-sm sm:text-base font-serif">{m.cocova}</span>
                  </div>
                  <span className="text-[11px] text-[#2E7D32] font-semibold mt-1">
                    {m.cocovaHighlight}
                  </span>
                </div>

                {/* Column 3: Traditional Chocolate (Drawbacks) */}
                <div className="col-span-4 p-4 sm:p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-[#55453D]">
                    <X className="w-4 h-4 text-[#C62828] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{m.traditional}</span>
                  </div>
                  <span className="text-[11px] text-[#C62828] mt-1">
                    {m.traditionalNote}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Table Summary Banner */}
          <div className="p-6 bg-[#170E0A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-lg text-white font-medium">
                Indulge with complete confidence.
              </h4>
              <p className="text-xs text-[#D1C3B7] max-w-xl">
                COCOVA proves you don't have to compromise between world-class confectionery pleasure
                and the biological benefits of clean micronutrient fuel.
              </p>
            </div>

            {onExploreRange && (
              <button
                onClick={onExploreRange}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1F1714] bg-[#DFC088] hover:bg-[#E8CFA0] rounded transition-colors shrink-0 cursor-pointer"
              >
                Experience The Range
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
