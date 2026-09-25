import React, { useState } from 'react';
import { Leaf, Activity, Sparkles, Check, X } from 'lucide-react';

export const MonkFruitScience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'glycemic' | 'mogrosides' | 'comparison'>('comparison');

  const comparisonData = [
    {
      sweetener: 'Cocova Monk Fruit',
      calories: '0 kcal',
      gi: '0 (Zero)',
      source: 'Natural Asian Melon',
      digestiveTolerance: 'Excellent (No Bloating)',
      aftertaste: 'Clean, Luscious & Pure',
      diabeticFriendly: true,
      cocovaChoice: true,
    },
    {
      sweetener: 'Refined Cane Sugar',
      calories: '400 kcal/100g',
      gi: '65 (High Spike)',
      source: 'Sugarcane / Beets',
      digestiveTolerance: 'High Caloric Load',
      aftertaste: 'Sugary film on teeth',
      diabeticFriendly: false,
      cocovaChoice: false,
    },
    {
      sweetener: 'Maltitol (Cheap Choc)',
      calories: '210 kcal/100g',
      gi: '35–52 (Moderate Spike)',
      source: 'Hydrogenated Glucose',
      digestiveTolerance: 'Known Gastric Distress',
      aftertaste: 'Waxen, artificial lingering',
      diabeticFriendly: false,
      cocovaChoice: false,
    },
    {
      sweetener: 'Stevia Extract',
      calories: '0 kcal',
      gi: '0 (Zero)',
      source: 'Stevia Leaf',
      digestiveTolerance: 'Good',
      aftertaste: 'Noticeable Licorice Bitterness',
      diabeticFriendly: true,
      cocovaChoice: false,
    },
  ];

  return (
    <section id="monk-fruit" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
            <Leaf className="w-4 h-4 text-[#8A6736]" />
            <span>The Science of Pure Sweetness</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F1714] font-normal leading-tight text-balance">
            Sweetened with nature’s golden fruit.
          </h2>
          <p className="text-base sm:text-lg text-[#55453D] leading-relaxed">
            For centuries, monks in remote mountain valleys harvested the rare Luo Han Guo melon. Today,
            Cocova harnesses its pure sweetening compound—Mogroside V—to deliver real chocolate richness
            without a single grain of cane sugar.
          </p>
        </div>

        {/* 3 Scientific Breakthrough Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#FFFFFF] p-8 rounded-xl border border-[#EADBCE] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#EFE8DD] flex items-center justify-center text-[#8A6736] mb-5">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1F1714] mb-2">
                Zero Glycemic Spike (0 GI)
              </h3>
              <p className="text-sm text-[#55453D] leading-relaxed">
                Mogrosides pass through the upper digestive tract without being absorbed as carbohydrates.
                This means blood glucose and insulin levels remain completely steady—ideal for diabetics,
                PCOS management, and low-carb keto lifestyles.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0EBE1] text-xs font-semibold text-[#8A6736]">
              Safe for continuous daily wellness
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-xl border border-[#EADBCE] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#EFE8DD] flex items-center justify-center text-[#8A6736] mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1F1714] mb-2">
                250× Sweeter than Sugar
              </h3>
              <p className="text-sm text-[#55453D] leading-relaxed">
                Because Mogroside V is naturally intensely sweet, only a microscopic fraction is required.
                This leaves ample volume in each bar for pure single-origin cacao solids and cacao butter,
                never cheap bulking starches or hydrogenated fats.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0EBE1] text-xs font-semibold text-[#8A6736]">
              100% Plant-Derived Antioxidant
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-xl border border-[#EADBCE] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#EFE8DD] flex items-center justify-center text-[#8A6736] mb-5">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1F1714] mb-2">
                No Cooling or Bitter Notes
              </h3>
              <p className="text-sm text-[#55453D] leading-relaxed">
                Unlike sugar alcohols (erythritol, xylitol) which produce an odd cold sensation, and stevia
                which often leaves a bitter metallic finish, monk fruit tastes authentically round, warm,
                and rounded—allowing the nuanced floral notes of cacao to unfold.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F0EBE1] text-xs font-semibold text-[#8A6736]">
              Pure Confectioner-Grade Mouthfeel
            </div>
          </div>
        </div>

        {/* Sweetener Comparison Table */}
        <div className="bg-white rounded-xl border border-[#EADBCE] overflow-hidden shadow-xs">
          <div className="p-6 bg-[#FAF7F2] border-b border-[#EADBCE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl text-[#1F1714] font-semibold">
                How Cocova Compares
              </h3>
              <p className="text-xs sm:text-sm text-[#66544B] mt-0.5">
                A transparent breakdown of why we rejected cane sugar and common sugar alcohols.
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8A6736] px-3 py-1 bg-[#EFE8DD] rounded border border-[#DDD3C4] self-start sm:self-auto">
              Ingredient Transparency
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#EADBCE] text-[11px] uppercase tracking-wider text-[#736056] bg-[#F7F3EC]">
                  <th className="py-3.5 px-4 font-semibold">Sweetener Source</th>
                  <th className="py-3.5 px-4 font-semibold">Glycemic Index</th>
                  <th className="py-3.5 px-4 font-semibold">Calories</th>
                  <th className="py-3.5 px-4 font-semibold">Digestive Comfort</th>
                  <th className="py-3.5 px-4 font-semibold">Diabetic Friendly</th>
                  <th className="py-3.5 px-4 font-semibold">Taste Fidelity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADBCE]">
                {comparisonData.map((row) => (
                  <tr
                    key={row.sweetener}
                    className={row.cocovaChoice ? 'bg-[#FAF4EA]/80 font-medium' : 'hover:bg-slate-50'}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {row.cocovaChoice && (
                          <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                        )}
                        <span className={row.cocovaChoice ? 'text-[#8A6736] font-bold' : 'text-[#2B211C]'}>
                          {row.sweetener}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono tabular-nums text-[#33251F]">{row.gi}</td>
                    <td className="py-4 px-4 font-mono tabular-nums text-[#33251F]">{row.calories}</td>
                    <td className="py-4 px-4 text-[#55453D]">{row.digestiveTolerance}</td>
                    <td className="py-4 px-4">
                      {row.diabeticFriendly ? (
                        <span className="inline-flex items-center gap-1 text-[#2E7D32] font-semibold">
                          <Check className="w-4 h-4" /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[#C62828]">
                          <X className="w-4 h-4" /> No
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#55453D]">{row.aftertaste}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
