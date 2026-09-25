import React from 'react';
import { CocovaLogo } from './CocovaLogo';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

export const CraftsmanshipStory: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Ethical Cacao Sourcing',
      desc: 'Selected from certified sustainable cacao growers known for high-flavonoid pod genetics, carefully fermented and sun-dried.',
    },
    {
      step: '02',
      title: 'Monk Fruit Extraction',
      desc: 'Water-extracted Mogroside V isolates from mature Asian Luo Han Guo, guaranteeing clean botanical sweetness with 0 sugar and 0 calories.',
    },
    {
      step: '03',
      title: 'Micronutrient Infusion',
      desc: 'Precision micro-encapsulation of vitamins and chelated minerals into the fat-soluble cacao butter matrix for optimal bioavailability.',
    },
    {
      step: '04',
      title: '72-Hour Swiss Conching',
      desc: 'Traditional stone rollers refine the emulsion particles below 18 microns, unlocking an exquisite melt without chemical emulsifiers.',
    },
    {
      step: '05',
      title: 'Stability & FSSAI Testing',
      desc: 'Each batch is monitored for shelf-life nutrient retention, heat stability, and taste profiles by food scientists in Hyderabad.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1F1714] text-white border-b border-[#36241B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              Product Development
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              From idea to chocolate.
            </h2>
            <p className="text-base text-[#D1C3B7] leading-relaxed">
              Cocova is powered by <strong className="text-white font-semibold">Montevia Foods Pvt Ltd</strong>,
              an innovative food technology and product development company based in Hyderabad, India.
              Our mission is to engineer foods where sensory delight and functional nutrition exist in perfect balance.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#2B1B15] p-6 sm:p-8 rounded-xl border border-[#433127] space-y-4">
            <div className="flex items-center justify-between border-b border-[#3D291F] pb-4">
              <span className="text-xs font-semibold text-[#DFC088] uppercase tracking-wider">
                Montevia Foods Platform
              </span>
              <span className="text-xs font-mono text-[#A39287]">Hyderabad, Telangana</span>
            </div>
            <p className="text-sm text-[#D1C3B7] leading-relaxed">
              Our core focus spans functional foods, active lifestyle nutrition, innovative chocolate
              formats, and bio-available micronutrient delivery platforms.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs text-[#DFC088] pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Zero Cane Sugar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Couverture Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Micro-Encapsulated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>FSSAI Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-4 border-t border-[#36241B]">
          {steps.map((st) => (
            <div key={st.step} className="space-y-2 relative">
              <span className="font-serif text-3xl text-[#C5A059] opacity-90 tabular-nums block">
                {st.step}
              </span>
              <h4 className="font-serif text-lg font-medium text-white">{st.title}</h4>
              <p className="text-xs text-[#B8A79B] leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
