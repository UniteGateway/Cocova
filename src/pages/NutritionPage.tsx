import React, { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Activity, Info, ArrowRight } from 'lucide-react';
import { PageType } from './types';
import { NutritionComparison } from '../components/NutritionComparison';

interface NutritionPageProps {
  onNavigate: (page: PageType) => void;
}

export const NutritionPage: React.FC<NutritionPageProps> = ({ onNavigate }) => {
  const [selectedNutrient, setSelectedNutrient] = useState<number>(0);

  // Exact 7 micronutrients from the Lovable application
  const lovableNutrients = [
    {
      code: 'A',
      name: 'Vitamin A',
      claim: 'Normal vision and immune function',
      bioavailability: '92% in Cacao Lipid Matrix',
      details: 'A critical fat-soluble micronutrient essential for photoreceptor integrity, cellular differentiation, and systemic mucosal immune defense.',
      fatSoluble: true,
      dailyValue: '40% RDA',
    },
    {
      code: 'B',
      name: 'B-Complex',
      claim: 'Energy-yielding metabolism',
      bioavailability: '88% Sustained Release',
      details: 'Includes thiamine (B1), riboflavin (B2), pyridoxine (B6), and cobalamin (B12). Essential co-factors in mitochondrial ATP synthesis without sugar crashes.',
      fatSoluble: false,
      dailyValue: '50% RDA',
    },
    {
      code: 'C',
      name: 'Vitamin C',
      claim: 'Immune function and antioxidant protection',
      bioavailability: '90% Encapsulated',
      details: 'Micro-encapsulated ascorbic acid that acts synergistically with cacao polyphenols to neutralize free radicals and promote dermal collagen synthesis.',
      fatSoluble: false,
      dailyValue: '50% RDA',
    },
    {
      code: 'D3',
      name: 'Vitamin D3',
      claim: 'Calcium absorption, bones and muscles',
      bioavailability: '95% (Dissolved in Cocoa Butter)',
      details: 'Cholecalciferol naturally integrates with cocoa butter fatty acids, dramatically improving intestinal uptake compared to dry compressed tablets.',
      fatSoluble: true,
      dailyValue: '50% RDA',
    },
    {
      code: 'E',
      name: 'Vitamin E',
      claim: 'Protection from oxidative stress',
      bioavailability: '94% Tocopherol Blend',
      details: 'Lipophilic antioxidant that protects cellular membranes and works harmoniously with the high flavonol content of raw cacao.',
      fatSoluble: true,
      dailyValue: '45% RDA',
    },
    {
      code: 'Zn',
      name: 'Zinc',
      claim: 'Immune function and cell protection',
      bioavailability: '85% Chelated Form',
      details: 'Chelated zinc bisglycinate that supports enzymatic reactions, DNA synthesis, protein metabolism, and robust immunological response.',
      fatSoluble: false,
      dailyValue: '35% RDA',
    },
    {
      code: 'Mg',
      name: 'Magnesium',
      claim: 'Muscle, nervous-system and energy function',
      bioavailability: 'Naturally occurring + Fortified',
      details: 'Single-origin dark cacao is naturally one of the richest plant sources of magnesium, aiding muscle relaxation, neurotransmitter regulation, and restful sleep.',
      fatSoluble: false,
      dailyValue: '30% RDA',
    },
  ];

  const current = lovableNutrients[selectedNutrient];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1F1714]">
      {/* Hero Header */}
      <section className="relative py-20 md:py-28 bg-[#170E0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              Nutrition · What's Inside
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Delicious chocolate. Thoughtful nutrition.
            </h1>
            <p className="text-base sm:text-xl text-[#D1C3B7] leading-relaxed">
              A carefully balanced combination of essential vitamins and minerals, designed with modern
              nutritional needs in mind and carried naturally in rich, single-origin cacao.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Nutrient Matrix */}
      <section className="py-16 md:py-24 border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
              Active Micronutrient Matrix
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1714] font-normal leading-tight">
              Formulated for everyday vitality.
            </h2>
            <p className="text-base text-[#55453D] leading-relaxed">
              Click any nutrient to inspect its physiological function, absorption mechanism, and recommended daily intake.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Nutrients List */}
            <div className="lg:col-span-5 space-y-2.5">
              {lovableNutrients.map((item, idx) => (
                <button
                  key={item.code}
                  onClick={() => setSelectedNutrient(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    selectedNutrient === idx
                      ? 'bg-white border-[#C5A059] shadow-sm'
                      : 'bg-[#FAF7F2] border-[#EADBCE] hover:border-[#D1C3B7]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-sm ${
                        selectedNutrient === idx
                          ? 'bg-[#1F1714] text-[#C5A059]'
                          : 'bg-[#EFE8DD] text-[#55453D]'
                      }`}
                    >
                      {item.code}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#1F1714]">{item.name}</h4>
                      <p className="text-xs text-[#7A6960] truncate max-w-[200px]">{item.claim}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#8A6736]">{item.dailyValue}</span>
                </button>
              ))}
            </div>

            {/* Right Detailed Scientific Panel */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-2xl border border-[#EADBCE] p-8 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-5">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8A6736]">
                      {current.fatSoluble ? 'Fat-Soluble Nutrient' : 'Water-Soluble Nutrient'}
                    </span>
                    <h3 className="font-serif text-3xl font-medium text-[#1F1714] mt-1">
                      {current.name}
                    </h3>
                    <p className="text-sm text-[#8A6736] font-medium mt-1">{current.claim}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-serif font-bold text-[#8A6736] tabular-nums block">
                      {current.dailyValue}
                    </span>
                    <span className="text-xs text-[#7A6960]">Per 50g Serving</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B5A51]">
                    Clinical & Functional Purpose
                  </h4>
                  <p className="text-sm text-[#4D3F37] leading-relaxed">
                    {current.details}
                  </p>
                </div>

                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EADBCE] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8A6736] uppercase tracking-wide">
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <span>Bioavailability Metric: {current.bioavailability}</span>
                  </div>
                  <p className="text-xs text-[#55453D] leading-relaxed">
                    Unlike dry supplement pills that pass through before complete breakdown, Cocova’s
                    chocolate lipid emulsion promotes micellar encapsulation for high cellular bioavailability.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-[#55453D] pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8A6736]" />
                    <span>0g Added Cane Sugar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8A6736]" />
                    <span>Zero metallic taste</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8A6736]" />
                    <span>Micro-encapsulated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8A6736]" />
                    <span>FSSAI Compliant</span>
                  </div>
                </div>
              </div>

              {/* Regulatory Notice (As in original app) */}
              <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#EADBCE] flex items-start gap-3.5 text-xs text-[#7A6960] leading-relaxed">
                <Info className="w-4 h-4 text-[#8A6736] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#4D3F37]">Regulatory & Formulation Compliance</p>
                  <p className="mt-1">
                    Final nutrient composition and permitted nutrition or health claims will depend on the
                    approved formulation and applicable FSSAI requirements. Cocova is a functional food
                    formulated to complement a balanced diet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Nutrition Comparison: COCOVA vs. Traditional Chocolate */}
      <NutritionComparison onExploreRange={() => onNavigate('range')} />

      {/* Everyday Rituals */}
      <section className="py-16 md:py-24 bg-[#F5EFE6] border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
              For Everyday Life
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1714] font-normal leading-tight">
              Made for the rhythm of your day.
            </h2>
            <p className="text-base text-[#55453D] leading-relaxed">
              Enjoyed at work, while travelling, in the morning and with family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#EADBCE] space-y-2">
              <span className="text-xs font-semibold text-[#8A6736] uppercase tracking-wider block">
                01 · Morning Awakening
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#1F1714]">Start your day</h3>
              <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
                A delicious addition to your everyday morning routine, pairing effortlessly with black coffee or tea.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADBCE] space-y-2">
              <span className="text-xs font-semibold text-[#8A6736] uppercase tracking-wider block">
                02 · Focus at the Desk
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#1F1714]">At work</h3>
              <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
                A convenient chocolate option for busy professionals seeking clean energy without sugar highs and afternoon crashes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADBCE] space-y-2">
              <span className="text-xs font-semibold text-[#8A6736] uppercase tracking-wider block">
                03 · Active Recovery
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#1F1714]">After activity</h3>
              <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
                A tasty functional-food option as part of a balanced lifestyle, rich in natural cacao magnesium and zinc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADBCE] space-y-2">
              <span className="text-xs font-semibold text-[#8A6736] uppercase tracking-wider block">
                04 · Mindful Indulgence
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#1F1714]">With family</h3>
              <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
                A chocolate experience designed with modern nutritional needs in mind, safe and loved by all generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-[#170E0A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Discover our Monk Fruit Sweetened Creations
          </h2>
          <p className="text-sm sm:text-base text-[#D1C3B7] max-w-xl mx-auto">
            Taste the entire collection with our Grand Connoisseur 5-Bar Luxury Box.
          </p>
          <button
            onClick={() => onNavigate('range')}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1F1714] bg-[#DFC088] hover:bg-[#E8CFA0] rounded transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>View The Product Range</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
