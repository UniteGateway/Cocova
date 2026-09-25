import React, { useState } from 'react';
import { PartnershipInquiry } from '../types';
import { Building2, Send, CheckCircle2, ShieldCheck, Mail, MapPin } from 'lucide-react';

interface PartnerSectionProps {
  onOpenInquiryModal?: () => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = () => {
  const [formData, setFormData] = useState<PartnershipInquiry>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    inquiryType: 'distributor',
    countryCity: '',
    estimatedVolume: '100-500 Units / Month',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="partners" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Partnership Opportunity Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8A6736]">
                Partner With COCOVA
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1714] font-normal leading-tight">
                Let’s build the future of functional foods.
              </h2>
              <p className="text-sm sm:text-base text-[#55453D] leading-relaxed">
                As consumer demand rapidly shifts towards sugar-free, low-glycemic, and wellness-focused
                nutrition, Cocova offers a differentiated, luxury confectionery solution ready for modern retail
                and premium corporate gifting.
              </p>
            </div>

            {/* Target Partner Sectors */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B5A51]">
                We welcome enquiries from:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3D312A]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Modern Trade & Gourmet Grocery Chains</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Regional & National FMCG Distributors</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Luxury Hospitality & Airline Food Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Corporate Gifting & Institutional Programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Wellness Clinics, High-End Gyms & Nutritionists</span>
                </li>
              </ul>
            </div>

            {/* Corporate Address & Contact */}
            <div className="p-5 bg-[#EFE8DD] rounded-xl border border-[#DDD3C4] space-y-2 text-xs text-[#55453D]">
              <div className="font-semibold text-[#1F1714] flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#8A6736]" />
                <span>Montevia Foods Pvt Ltd</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#6B5A51]">
                <MapPin className="w-4 h-4 text-[#8A6736]" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#6B5A51]">
                <Mail className="w-4 h-4 text-[#8A6736]" />
                <span>hello@monteviafoods.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Working Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-[#EADBCE] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#1F1714] font-semibold">
                  Thank you for your interest!
                </h3>
                <p className="text-sm text-[#55453D] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been received by our commercial team at Montevia Foods Pvt Ltd.
                  A representative will connect with you within 24 business hours with our product catalogue,
                  distributor margin sheets, and sample availability.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-[#1F1714] bg-[#EFE8DD] rounded hover:bg-[#E5DCCF]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#F0EBE1] pb-3 mb-4">
                  <h3 className="font-serif text-xl text-[#1F1714] font-semibold">
                    Commercial & Partnership Inquiry
                  </h3>
                  <p className="text-xs text-[#7A6960]">
                    Direct connection to Montevia Foods commercial team.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Varma"
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-[#FAF7F2] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@company.com"
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-[#FAF7F2] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Retailer or Entity Name"
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-[#FAF7F2] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-[#FAF7F2] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inquiryType: e.target.value as any,
                        })
                      }
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-[#FAF7F2] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="distributor">Regional / State Distributor</option>
                      <option value="retailer">Modern Trade / Supermarket</option>
                      <option value="corporate_gifting">Luxury Corporate Gifting</option>
                      <option value="institutional">Healthcare / Hospitality</option>
                      <option value="export">International Export / Import</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                      City & State / Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.countryCity}
                      onChange={(e) => setFormData({ ...formData, countryCity: e.target.value })}
                      placeholder="Hyderabad, Telangana"
                      className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-[#FAF7F2] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4D3F37] mb-1">
                    Projected Requirement / Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your distribution footprint or corporate gifting timeline..."
                    className="w-full px-3 py-2 text-sm border border-[#D9CFC4] rounded bg-[#FAF7F2] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#1F1714] hover:bg-[#34241E] rounded transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#C5A059]" />
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Partnership Proposal'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
