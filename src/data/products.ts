import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'grand-connoisseur-box',
    name: 'Cocova Grand Connoisseur Luxury Box',
    subtitle: '5 Artisanal Bars Collection with Monk Fruit Sweetness',
    weight: '5 × 100g (500g)',
    priceINR: 1950,
    priceUSD: 24,
    category: 'box',
    flavorProfile: 'Hazelnut Crisp, Roasted Almond, Royal Pistachio, Cold-Brew Coffee, Flaky Sea Salt',
    cacaoPercentage: '60%–72% Single Origin Couverture',
    image: '/src/assets/images/cocova_box_luxury_1790316257431.jpg',
    badge: 'Signature Luxury Edition',
    description: 'The pinnacle of guilt-free indulgence. Encased in an embossed gold foil presentation gift box, each bar marries single-origin cacao with the zero-calorie natural sweetness of pure monk fruit and 7 essential daily vitamins.',
    highlights: [
      'Contains 5 signature full-size 100g artisanal chocolate bars',
      'Zero added cane sugar, sweetened exclusively with pure Monk Fruit extract (Mogroside V)',
      'Fortified with Vitamin A, C, D3, E, B-Complex, Zinc & Iron',
      'Embossed keepsake luxury box with gold pull-ribbon and flavor guides'
    ],
    tastingNotes: {
      sweetness: 65,
      richness: 95,
      crunch: 85,
      intensity: 88,
    },
    monkFruitDetails: 'Hand-picked monk fruit (Luo Han Guo) extract provides pure natural sweetness with zero glycemic load and zero lingering bitter aftertaste.',
    nutritionalBenefits: [
      'Zero sugar spike — safe for ketogenic and diabetic conscious lifestyles',
      'Meets 40% Daily Recommended Intake (RDA) of essential vitamins per serving',
      'Rich in natural cacao flavonoids & bioavailable zinc'
    ],
    barsIncluded: [
      'Hazelnut Crisp (Dark & Milk Chocolate)',
      'Roasted Almond (Smooth Velvety Cacao)',
      'Royal Pistachio (Rich Emerald Pistachio Crunch)',
      'Cold-Brew Espresso (Single-Origin Arabica Infusion)',
      'Hand-Harvested Flaky Sea Salt (Intense 70% Dark)'
    ],
    ingredients: 'Single-origin cacao mass, cacao butter, organic monk fruit extract, whole roasted hazelnuts, roasted almonds, pistachios, arabica coffee extract, hand-harvested sea salt flakes, vitamin-mineral premix (A, C, D3, E, B1, B2, B6, B12, Zinc, Iron).'
  },
  {
    id: 'hazelnut-crisp-bar',
    name: 'Cocova Hazelnut Crisp',
    subtitle: 'Dark & Milk Chocolate with Whole Roasted Hazelnuts',
    weight: '100g',
    priceINR: 395,
    priceUSD: 4.95,
    category: 'bar',
    flavorProfile: 'Toasted Hazelnut, Buttery Praline, Velvety Cacao',
    cacaoPercentage: '62% Couverture Blend',
    image: '/src/assets/images/cocova_hazelnut_bar_1790316270426.jpg',
    badge: 'Bestseller',
    description: 'A sensory triumph of roasted whole hazelnuts nestled inside a silky blend of milk and dark couverture chocolate. Sweetened naturally with pure monk fruit with zero added sugar and fortified with multivitamin wellness.',
    highlights: [
      'Whole roasted Piedmont-style hazelnuts with audible snap and crunch',
      '0g added sugar · 100% Monk fruit sweetened',
      'Active daily multivitamin blend',
      'No artificial emulsifiers, hydrogenated oils, or palm fat'
    ],
    tastingNotes: {
      sweetness: 68,
      richness: 92,
      crunch: 94,
      intensity: 78,
    },
    monkFruitDetails: 'Calibrated to highlight the nutty sweetness of slow-roasted hazelnuts without overpowering the delicate cacao butter notes.',
    nutritionalBenefits: [
      'Rich in monounsaturated healthy fats from whole hazelnuts',
      'Contains 6 essential micronutrients for everyday vitality',
      'High dietary fiber'
    ],
    ingredients: 'Cacao mass, whole roasted hazelnuts (22%), cacao butter, whole milk powder (lactose-free), monk fruit extract (Mogroside V), sunflower lecithin, micronutrient premix.'
  },
  {
    id: 'signature-classic-multivitamin',
    name: 'Cocova Pure Couverture Multivitamin Bar',
    subtitle: 'The Original Functional Chocolate Bar',
    weight: '100g',
    priceINR: 375,
    priceUSD: 4.75,
    category: 'bar',
    flavorProfile: 'Smooth Deep Cacao, Hints of Bourbon Vanilla & Red Berries',
    cacaoPercentage: '70% Single Origin Dark',
    image: '/assets/cocova-hero.jpg',
    badge: 'Original Formula',
    description: 'The iconic Cocova flagship bar featured in our founding collection. A silken, slow-conched 70% dark chocolate created to turn everyday daily vitamin intake into a cherished moment of luxury.',
    highlights: [
      'Smooth, melt-in-mouth 72-hour conched single-origin cacao',
      'Complete multivitamin blend for immune, cellular, and skin health',
      'Zero sugar, 100% plant-based monk fruit sweetness',
      'FSSAI compliant functional food formulation'
    ],
    tastingNotes: {
      sweetness: 55,
      richness: 90,
      crunch: 20,
      intensity: 85,
    },
    monkFruitDetails: 'Zero glycemic impact sweetening that lets the deep fruity notes of ethically sourced cacao beans shine unimpeded.',
    nutritionalBenefits: [
      'Vitamins A, C, D3, E and B-Complex for cellular vitality',
      'Natural source of magnesium, copper, and iron',
      'Zero cane sugar, zero maltitol, zero artificial sweeteners'
    ],
    ingredients: 'Single-origin cacao solids (70%), pure cacao butter, natural monk fruit extract, Madagascar vanilla extract, essential vitamin and mineral premix.'
  },
  {
    id: 'roasted-almond-velvet',
    name: 'Cocova Roasted Almond Velvet',
    subtitle: 'Crushed California Almonds in 65% Dark Cacao',
    weight: '100g',
    priceINR: 395,
    priceUSD: 4.95,
    category: 'bar',
    flavorProfile: 'Nutty, Toasted Oak, Warm Honeyed Cacao',
    cacaoPercentage: '65% Dark Chocolate',
    image: '/src/assets/images/cocova_artisan_bars_1790316286071.jpg',
    badge: 'Nutrient Rich',
    description: 'Crisp roasted golden California almonds enveloped in our velvety 65% dark chocolate matrix. Crafted with monk fruit sweetness and fortifying minerals for high-energy afternoons.',
    highlights: [
      'Toasted sliced almonds distributed evenly through every square',
      '0g added sugar · Keto friendly',
      'Rich in vitamin E and plant-based magnesium'
    ],
    tastingNotes: {
      sweetness: 60,
      richness: 88,
      crunch: 88,
      intensity: 80,
    },
    monkFruitDetails: 'Zero aftertaste, smooth lingering finish harmonizing with toasted almond skins.',
    nutritionalBenefits: [
      'Dual source of Vitamin E from almonds and fortifying blend',
      'Supports steady sustained energy without insulin spikes'
    ],
    ingredients: 'Cacao mass, roasted almonds (18%), cacao butter, monk fruit extract, natural vanilla, multivitamin premix.'
  },
  {
    id: 'royal-pistachio-crunch',
    name: 'Cocova Royal Pistachio Crunch',
    subtitle: 'Emerald Pistachio Nibs in Silky Dark Cacao',
    weight: '100g',
    priceINR: 425,
    priceUSD: 5.25,
    category: 'bar',
    flavorProfile: 'Earthy Pistachio, Creamy Nut Butter, Fine Dark Cacao',
    cacaoPercentage: '68% Couverture',
    image: '/src/assets/images/cocova_artisan_bars_1790316286071.jpg',
    badge: 'Artisan Reserve',
    description: 'Hand-selected emerald green pistachios, lightly roasted and crushed into fine nibs, folded into our rich single-origin dark chocolate. Sweetened naturally with monk fruit.',
    highlights: [
      'Premium roasted pistachio pieces offering distinct savory-sweet depth',
      'Zero sugar, diabetic friendly, 100% natural',
      'Antioxidant dense formulation'
    ],
    tastingNotes: {
      sweetness: 58,
      richness: 94,
      crunch: 82,
      intensity: 84,
    },
    monkFruitDetails: 'Clean, botanical sweetness that allows the delicate natural oils of pistachio to linger.',
    nutritionalBenefits: [
      'Antioxidant synergism between pistachio lutein and dark cacao polyphenols',
      'Supports cardiovascular wellness'
    ],
    ingredients: 'Cacao solids, roasted pistachios (16%), cacao butter, monk fruit extract, vitamin premix.'
  },
  {
    id: 'cold-brew-coffee-bar',
    name: 'Cocova Cold-Brew Espresso Bar',
    subtitle: 'Arabica Micro-Granules & 70% Dark Cacao',
    weight: '100g',
    priceINR: 395,
    priceUSD: 4.95,
    category: 'bar',
    flavorProfile: 'Espresso Crema, Dark Molasses, Smokey Cacao',
    cacaoPercentage: '70% Dark Chocolate',
    image: '/src/assets/images/cocova_artisan_bars_1790316286071.jpg',
    badge: 'Morning Focus',
    description: 'Slow-extracted single-origin Arabica coffee micro-crystals infused into intense 70% dark chocolate. Fortified with Vitamin B-Complex for active cognitive focus without sugar jitters.',
    highlights: [
      'Infused with real shade-grown Arabica coffee beans',
      'Zero sugar spike · Clean clean morning energy',
      'Fortified with B1, B2, B6, B12 and Zinc'
    ],
    tastingNotes: {
      sweetness: 48,
      richness: 92,
      crunch: 40,
      intensity: 95,
    },
    monkFruitDetails: 'Naturally counterbalances the deep roast bitterness of espresso without relying on glycemic sweeteners.',
    nutritionalBenefits: [
      'Synergistic B-Vitamins and natural caffeine for alertness',
      'Protective polyphenols'
    ],
    ingredients: 'Cacao mass, cacao butter, shade-grown Arabica coffee extract, monk fruit extract, B-complex vitamin premix.'
  },
  {
    id: 'sea-salt-connoisseur',
    name: 'Cocova Hand-Harvested Sea Salt',
    subtitle: 'Flaky Mineral Salt Crystals on 72% Dark Cacao',
    weight: '100g',
    priceINR: 395,
    priceUSD: 4.95,
    category: 'bar',
    flavorProfile: 'Savory Flake, Floral Cacao, Clean Mineral Finish',
    cacaoPercentage: '72% Dark Chocolate',
    image: '/src/assets/images/cocova_artisan_bars_1790316286071.jpg',
    badge: 'Chef Favorite',
    description: 'Hand-raked mineral sea salt flakes delicately scattered over deep, velvety 72% cacao. The salt crystals heighten the complex flavor notes of the chocolate while monk fruit provides pristine zero-calorie sweetness.',
    highlights: [
      'Flaky mineral salt crystals create delightful textural contrast',
      'Single-origin 72% dark couverture',
      '0g sugar, ketogenic friendly'
    ],
    tastingNotes: {
      sweetness: 52,
      richness: 94,
      crunch: 60,
      intensity: 92,
    },
    monkFruitDetails: 'Salt enhances the tongue perception of monk fruit sweetness, creating an ultra-satisfying gourmet experience.',
    nutritionalBenefits: [
      'Trace natural electrolytes and minerals',
      'Highest concentration of cacao flavonols'
    ],
    ingredients: 'Single origin cacao solids, cacao butter, hand-harvested flaky sea salt (1.5%), monk fruit extract, micronutrient premix.'
  },
  {
    id: 'daily-vitality-trio',
    name: 'Cocova Daily Vitality Trio',
    subtitle: '3-Bar Curated Bundle for Morning, Noon & Night',
    weight: '3 × 100g (300g)',
    priceINR: 1100,
    priceUSD: 13.5,
    category: 'bundle',
    flavorProfile: 'Hazelnut Crisp + Cold-Brew Coffee + Pure Couverture',
    cacaoPercentage: '62%–70% Couverture',
    image: '/src/assets/images/cocova_lifestyle_moment_1790316297390.jpg',
    badge: 'Value Bundle',
    description: 'Designed around the rhythm of your day: Cold-Brew Espresso for morning focus, Hazelnut Crisp for afternoon energy, and Pure Couverture for relaxing evening multivitamin replenishment.',
    highlights: [
      'Save 10% compared to purchasing individual bars',
      'Full spectrum multivitamin & mineral support',
      'Zero added cane sugar across all bars'
    ],
    tastingNotes: {
      sweetness: 62,
      richness: 92,
      crunch: 75,
      intensity: 85,
    },
    monkFruitDetails: 'Experience the clean, uplifting taste profile across dark, milk, and coffee chocolate variations.',
    nutritionalBenefits: [
      'Complete daily coverage of essential vitamins',
      '100% guilt-free snacking ritual'
    ],
    barsIncluded: [
      'Cocova Cold-Brew Espresso (Morning Kickstart)',
      'Cocova Hazelnut Crisp (Afternoon Desk Boost)',
      'Cocova Pure Couverture Multivitamin (Evening Wellness)'
    ],
    ingredients: 'Varied single-origin cacao, monk fruit extract, roasted hazelnuts, arabica coffee, micronutrient premix.'
  }
];

export const VITAMINS_DATA = [
  {
    symbol: 'Vit A',
    name: 'Vitamin A (Retinol & Beta-Carotene)',
    role: 'Vision & Cellular Renewal',
    benefit: 'Supports healthy eyesight, epithelial barrier integrity, and natural cellular regeneration.',
    dailyCoverage: '40% RDA',
  },
  {
    symbol: 'Vit C',
    name: 'Vitamin C (Ascorbic Acid)',
    role: 'Immunity & Collagen Synthesis',
    benefit: 'Potent antioxidant defending cells against oxidative stress while boosting natural skin radiance.',
    dailyCoverage: '50% RDA',
  },
  {
    symbol: 'Vit D3',
    name: 'Vitamin D3 (Cholecalciferol)',
    role: 'Bone Density & Immune Defense',
    benefit: 'The sunshine vitamin, crucial for calcium absorption, neuromuscular function, and seasonal resilience.',
    dailyCoverage: '50% RDA',
  },
  {
    symbol: 'Vit E',
    name: 'Vitamin E (Tocopherols)',
    role: 'Cellular Membrane Protection',
    benefit: 'Lipid-soluble antioxidant acting in synergy with cacao polyphenols to protect against lipid peroxidation.',
    dailyCoverage: '45% RDA',
  },
  {
    symbol: 'B-Complex',
    name: 'B-Complex (B1, B2, B6, B12)',
    role: 'Metabolic Energy & Cognitive Focus',
    benefit: 'Crucial co-factors in converting nutrition into cellular ATP without energy crashes or jitters.',
    dailyCoverage: '50% RDA',
  },
  {
    symbol: 'Zn + Fe',
    name: 'Zinc & Iron Chelate',
    role: 'Oxygen Transport & Immunity',
    benefit: 'Highly bioavailable micro-encapsulated minerals supporting hemoglobin synthesis and restorative recovery.',
    dailyCoverage: '35% RDA',
  }
];

export const MOMENTS_DATA = [
  {
    id: 'morning',
    title: 'Morning Awakening',
    subtitle: 'Pair with your morning espresso',
    description: 'Replace sugary breakfast spreads with a crisp square of Cocova Cold-Brew or Hazelnut. Smooth sustained energy with zero blood sugar crashes.',
    image: '/src/assets/images/cocova_lifestyle_moment_1790316297390.jpg',
  },
  {
    id: 'work',
    title: 'Executive Focus at Work',
    subtitle: 'Your 3:30 PM desk ritual',
    description: 'Overcome afternoon brain fog with bioavailable B-vitamins and rich cacao flavonoids. Satisfies cravings without post-lunch lethargy.',
    image: '/assets/cocova-moments.jpg',
  },
  {
    id: 'active',
    title: 'Travel & Active Lifestyle',
    subtitle: 'Convenient nutrition on the go',
    description: 'Slips seamlessly into your carry-on, gym bag, or glove box. A clean, delicious multivitamin format you will genuinely look forward to taking.',
    image: '/src/assets/images/cocova_artisan_bars_1790316286071.jpg',
  },
  {
    id: 'family',
    title: 'Family & Mindful Gifting',
    subtitle: 'Guilt-free joy for all generations',
    description: 'Crafted without cane sugar, making it a mindful treat for parents, elders, diabetic friends, and health-conscious loved ones.',
    image: '/src/assets/images/cocova_box_luxury_1790316257431.jpg',
  }
];
