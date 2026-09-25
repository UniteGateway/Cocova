export interface Product {
  id: string;
  name: string;
  subtitle: string;
  weight: string;
  priceINR: number;
  priceUSD: number;
  category: 'box' | 'bar' | 'bundle';
  flavorProfile: string;
  cacaoPercentage: string;
  image: string;
  badge?: string;
  description: string;
  highlights: string[];
  tastingNotes: {
    sweetness: number;
    richness: number;
    crunch: number;
    intensity: number;
  };
  monkFruitDetails: string;
  nutritionalBenefits: string[];
  barsIncluded?: string[];
  ingredients: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  giftBoxPacking?: boolean;
}

export interface PartnershipInquiry {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  inquiryType: 'distributor' | 'retailer' | 'institutional' | 'corporate_gifting' | 'export';
  countryCity: string;
  estimatedVolume: string;
  message: string;
}
