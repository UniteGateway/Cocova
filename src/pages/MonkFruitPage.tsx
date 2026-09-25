import React from 'react';
import { Leaf, Activity, Sparkles, Check, X, Shield, ArrowRight } from 'lucide-react';
import { PageType } from './types';

interface MonkFruitPageProps {
  onNavigate: (page: PageType) => void;
}

export const MonkFruitPage: React.FC<MonkFruitPageProps> = ({ onNavigate }) => {
  const comparisonData = [
    {
      sweetener: 'Cocova Pure Monk Fruit (Mogroside V)',
      calories: '0 kcal / gram',
      gi: '0 (Zero Glycemic Spike)',
      source: 'Luo Han Guo (Natural Asian Melon)',
      digestiveTolerance: 'Excellent · Zero bloating or discomfort',
      aftertaste: 'Clean, warm, rounded sweetness',
      diabeticFriendly: true,
      highlight: true,
    },
    {
      sweetener: 'Refined Cane Sugar',
      calories: '4 kcal / gram (400 kcal/100g)',
      gi: '65–70 (High Spike)',
      source: 'Sugarcane & Sugarbeets',
      digestiveTolerance: 'High Caloric Load · Dental plaque',
      aftertaste: 'Cloying sugar film on teeth',
      diabeticFriendly: false,
      highlight: false,
    },
    {
      sweetener: 'Maltitol (Common in "Diet" Chocolate)',
      calories: '2.1 kcal / gram',
      gi: '35–52 (Moderate Spike)',
      source: 'Hydrogenated Glucose Syrup',
      digestiveTolerance: 'Known for severe gastric cramps & laxative effect',
      aftertaste: 'Waxen, artificial lingering sweetness',
      diabeticFriendly: false,
      highlight: false,
    },
    {
      sweetener: 'Stevia Rebaudiana',
      calories: '0 kcal / gram',
      gi: '0 (Zero)',
      source: 'Stevia Leaf Extract',
      digestiveTolerance: 'Good',
      aftertaste: 'Notable bitter licorice / metallic finish',
      diabeticFriendly: true,
      highlight: false,
    },
    {
      sweetener: 'Sucralose & Aspartame',
      calories: '0 kcal / gram',
      gi: '0 (Zero)',
      source: 'Synthetically Chlorinated Sucrose',
      digestiveTolerance: 'May negatively impact gut microbiome',
      aftertaste: 'Sharp chemical aftertaste',
      diabeticFriendly: true,
      highlight: false,
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1F1714]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[#170E0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              The Sweetener Revolution
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Why We Sweeten Exclusively With Monk Fruit.
            </h1>
            <p className="text-base sm:text-xl text-[#D1C3B7] leading-relaxed">
              Real chocolate deserves honest, botanical sweetness. Discover how pure Mogroside V provides
              unrivaled sweetness with zero sugar, zero calories, and zero insulin spikes.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story & Agronomy */}
      <section className="py-16 md:py-24 border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#DDD3C4] shadow-md bg-white">
              <img
                src="/src/assets/images/cocova_monk_fruit_1790316235831.jpg"
                alt="Monk Fruit and Cacao Pods"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-5 bg-white space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A6736]">
                  Siraitia grosvenorii · Luo Han Guo
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#1F1714]">
                  Guilin Mountain Harvest
                </h4>
                <p className="text-xs text-[#66544B]">
                  Hand-harvested for its rich mogroside content, water-extracted and crystal-purified.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
                Botanical Heritage
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1714] font-normal leading-tight">
                Harvested by monks since the 13th century.
              </h2>
              <p className="text-base text-[#55453D] leading-relaxed">
                Nestled in the misty subtropical highlands of southern Asia, Buddhist practitioners
                first cultivated this green melon for longevity elixirs and soothing herbal infusions.
              </p>
              <p className="text-base text-[#55453D] leading-relaxed">
                Unlike grapes, apples, or sugarcane, monk fruit does not derive its sweetness from
                fructose or sucrose. Its sweetness originates from unique antioxidants called <strong>Mogrosides</strong>,
                which are completely non-metabolized by human digestion.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EADBCE]">
                <div>
                  <span className="font-serif text-3xl font-bold text-[#1F1714] block">250×</span>
                  <span className="text-xs text-[#7A6960]">Sweeter than sugar</span>
                </div>
                <div>
                  <span className="font-serif text-3xl font-bold text-[#1F1714] block">0 GI</span>
                  <span className="text-xs text-[#7A6960]">Glycemic index</span>
                </div>
                <div>
                  <span className="font-serif text-3xl font-bold text-[#1F1714] block">0 kcal</span>
                  <span className="text-xs text-[#7A6960]">Per serving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-16 md:py-24 bg-white border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
              Head-to-Head Comparison
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1714] font-normal leading-tight">
              Why We Rejected Sugar and Maltitol
            </h2>
            <p className="text-base text-[#55453D] leading-relaxed">
              Most "sugar-free" chocolates on grocery shelves use cheap maltitol syrup, which triggers
              insulin spikes and notorious digestive distress. Here is how Cocova compares:
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#EADBCE]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#FAF7F2] border-b border-[#EADBCE] text-[11px] uppercase tracking-wider text-[#736056]">
                  <th className="py-4 px-4 font-semibold">Sweetener</th>
                  <th className="py-4 px-4 font-semibold">Glycemic Index</th>
                  <th className="py-4 px-4 font-semibold">Calories</th>
                  <th className="py-4 px-4 font-semibold">Origin</th>
                  <th className="py-4 px-4 font-semibold">Digestive Comfort</th>
                  <th className="py-4 px-4 font-semibold">Diabetic Safe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADBCE]">
                {comparisonData.map((row) => (
                  <tr
                    key={row.sweetener}
                    className={row.highlight ? 'bg-[#FAF4EA] font-medium' : 'hover:bg-slate-50'}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {row.highlight && <span className="w-2 h-2 rounded-full bg-[#C5A059]" />}
                        <span className={row.highlight ? 'text-[#8A6736] font-bold' : 'text-[#1F1714]'}>
                          {row.sweetener}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">{row.gi}</td>
                    <td className="py-4 px-4 font-mono">{row.calories}</td>
                    <td className="py-4 px-4 text-[#66544B]">{row.source}</td>
                    <td className="py-4 px-4 text-[#55453D]">{row.digestiveTolerance}</td>
                    <td className="py-4 px-4">
                      {row.diabeticFriendly ? (
                        <span className="inline-flex items-center gap-1 text-[#2E7D32] font-semibold">
                          <Check className="w-4 h-4" /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[#C62828] font-semibold">
                          <X className="w-4 h-4" /> No
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#170E0A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Taste the Pure Sweetness Difference
          </h2>
          <p className="text-sm sm:text-base text-[#D1C3B7] max-w-xl mx-auto">
            Order your first bar or luxury gift chest. 100% money-back satisfaction guarantee on all orders.
          </p>
          <button
            onClick={() => onNavigate('range')}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1F1714] bg-[#DFC088] hover:bg-[#E8CFA0] rounded transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Explore The Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
