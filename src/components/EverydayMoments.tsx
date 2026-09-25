import React from 'react';
import { MOMENTS_DATA } from '../data/products';
import { Clock, Sun, Briefcase, Plane, Users } from 'lucide-react';

export const EverydayMoments: React.FC = () => {
  const icons = [Sun, Briefcase, Plane, Users];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
            For Everyday Life
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F1714] font-normal leading-tight text-balance">
            Made for the rhythm of your day.
          </h2>
          <p className="text-base sm:text-lg text-[#55453D] leading-relaxed">
            From sunrise coffee to quiet evening unwinding, Cocova fits seamlessly into modern life as an
            uplifting functional habit rather than a guilty pleasure.
          </p>
        </div>

        {/* 4 Moments Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOMENTS_DATA.map((moment, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={moment.id}
                className="bg-white rounded-xl border border-[#EADBCE] overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/11] relative overflow-hidden bg-[#F0EBE1]">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium">
                    <Icon className="w-4 h-4 text-[#C5A059]" />
                    <span>0{idx + 1} Ritual</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-[#8A6736] uppercase tracking-wider block">
                      {moment.subtitle}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#1F1714] mt-1">
                      {moment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#55453D] mt-2 leading-relaxed">
                      {moment.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0EBE1] text-[11px] text-[#7A6960] font-medium flex items-center justify-between">
                    <span>100% Guilt-Free</span>
                    <span className="text-[#8A6736]">Monk Fruit Pure</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
