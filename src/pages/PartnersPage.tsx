import React from 'react';
import { PartnerSection } from '../components/PartnerSection';
import { Building2, Mail, MapPin, Phone, ShieldCheck, Award, TrendingUp, Users } from 'lucide-react';
import { PageType } from './types';

interface PartnersPageProps {
  onNavigate: (page: PageType) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1F1714]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[#170E0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#DFC088]">
              Commercial & Distribution Partnerships
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Let’s build the future of functional foods.
            </h1>
            <p className="text-base sm:text-xl text-[#D1C3B7] leading-relaxed">
              We welcome enquiries from distributors, retailers, modern trade, institutional buyers,
              corporate partners, food service companies, private-label partners and strategic investors.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Highlights */}
      <section className="py-14 bg-white border-b border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#EADBCE] space-y-2">
              <TrendingUp className="w-6 h-6 text-[#8A6736]" />
              <h3 className="font-serif text-lg font-semibold text-[#1F1714]">High-Growth Category</h3>
              <p className="text-xs text-[#66544B] leading-relaxed">
                Functional foods and sugar-free chocolate are experiencing 28%+ CAGR globally as health consciousness surges.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#EADBCE] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#8A6736]" />
              <h3 className="font-serif text-lg font-semibold text-[#1F1714]">Full Compliance</h3>
              <p className="text-xs text-[#66544B] leading-relaxed">
                Formulations adhere strictly to FSSAI dietary and nutrient fortification guidelines with validated stability testing.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#EADBCE] space-y-2">
              <Award className="w-6 h-6 text-[#8A6736]" />
              <h3 className="font-serif text-lg font-semibold text-[#1F1714]">Premium Margins</h3>
              <p className="text-xs text-[#66544B] leading-relaxed">
                High average order values (AOV) and attractive commercial margins for regional distributors and boutique grocers.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#EADBCE] space-y-2">
              <Users className="w-6 h-6 text-[#8A6736]" />
              <h3 className="font-serif text-lg font-semibold text-[#1F1714]">Corporate Gifting</h3>
              <p className="text-xs text-[#66544B] leading-relaxed">
                Custom branded keepsake gift chests with personalized luxury gift cards for executive gifting and festivals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Partner Section */}
      <PartnerSection />

      {/* Corporate Footprint Info */}
      <section className="py-16 bg-[#170E0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#DFC088]">Corporate Headquarters</p>
              <h4 className="font-serif text-xl text-white">Montevia Foods Pvt Ltd</h4>
              <p className="text-xs text-[#D1C3B7] leading-relaxed">
                Hyderabad, Telangana, India. Innovation hub for food science and functional confectionery.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#DFC088]">Direct Commercial Desk</p>
              <h4 className="font-serif text-xl text-white">partnerships@monteviafoods.com</h4>
              <p className="text-xs text-[#D1C3B7] leading-relaxed">
                For distribution agreements, institutional purchase orders, and export inquiries.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#DFC088]">Sample Requests</p>
              <h4 className="font-serif text-xl text-white">Commercial Tasting Kits</h4>
              <p className="text-xs text-[#D1C3B7] leading-relaxed">
                Distributors and corporate buyers may request verified sample boxes for taste evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
