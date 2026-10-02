export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  priceNum: number;
  description: string;
  material: string;
  image: string;
  secondaryImage: string;
  tag?: string;
  specifications: {
    metal: string;
    gemstone: string;
    cut: string;
    setting: string;
    origin: string;
  };
}

export const SIGNATURE_PRODUCTS: Product[] = [
  {
    id: "01",
    name: "Celeste Necklace",
    category: "Diamond High Jewellery",
    price: "₹1,85,000",
    priceNum: 185000,
    description:
      "A cascading silhouette of brilliant-cut VVS diamonds set in 18K white and yellow gold, evoking the celestial dance of morning light.",
    material: "18K White & Yellow Gold, 2.45ct Diamonds",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=85",
    tag: "Signature Masterpiece",
    specifications: {
      metal: "18K White & Warm Yellow Gold",
      gemstone: "Natural Diamonds (VVS1, E-F Color)",
      cut: "Round Brilliant & Marquise",
      setting: "Hand-set Micro-Pavé & Prong",
      origin: "Handcrafted in Mumbai Atelier",
    },
  },
  {
    id: "02",
    name: "Solenne Ring",
    category: "Solitaire Statement",
    price: "₹92,000",
    priceNum: 92000,
    description:
      "An architectural solitare cradled in satin-finished 18K yellow gold, echoing ancient proportions with a contemporary knife-edge band.",
    material: "18K Yellow Gold, 1.20ct Cushion Diamond",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1600&q=85",
    tag: "Atelier Edition",
    specifications: {
      metal: "18K Brushed Royal Gold",
      gemstone: "Conflict-Free Natural Diamond",
      cut: "Cushion Modified Brilliant",
      setting: "Compass Bezel Setting",
      origin: "Jaipur Gem Cutting Guild",
    },
  },
  {
    id: "03",
    name: "Élan Earrings",
    category: "Cascade Diamond Earrings",
    price: "₹1,20,000",
    priceNum: 120000,
    description:
      "Sculptural drop earrings with articulated kinetic links that capture ambient light with every subtle head movement.",
    material: "18K Gold, 1.85ct Baguette & Pear Diamonds",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1600&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=85",
    tag: "High Fashion",
    specifications: {
      metal: "18K Solid Warm Gold",
      gemstone: "Natural Pear & Baguette Diamonds",
      cut: "Baguette & Pear Mixed Cut",
      setting: "Invisible Tension & Flush",
      origin: "Surat Diamond Atelier",
    },
  },
  {
    id: "04",
    name: "Aurelia Bracelet",
    category: "Sculpted Gold Cuff",
    price: "₹1,45,000",
    priceNum: 145000,
    description:
      "A seamless organic cuff beaten by master metalsmiths, finished with a subtle pavé diamond hinge mechanism.",
    material: "18K Solid Gold, 0.95ct Brilliant Diamonds",
    image:
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1600&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1600&q=85",
    tag: "Timeless Icon",
    specifications: {
      metal: "18K Solid Heavy Gold (38g)",
      gemstone: "Def Brilliant Diamonds",
      cut: "Full Cut Round",
      setting: "Flush Channel Inlay",
      origin: "Bengal Master Craftsmen",
    },
  },
];

export const FEATURED_GRID_PRODUCTS: Product[] = [
  {
    id: "feat-01",
    name: "Celeste Necklace",
    category: "Diamond High Jewellery",
    price: "₹1,85,000",
    priceNum: 185000,
    description:
      "Our iconic centerpiece necklace. Interlocking links of hand-polished 18k gold set with selected brilliant-cut diamonds.",
    material: "18K White & Yellow Gold, 2.45ct Diamonds",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=85",
    tag: "Permanent Collection",
    specifications: {
      metal: "18K Dual-Tone Gold",
      gemstone: "Natural Diamonds (VVS1)",
      cut: "Brilliant Cut",
      setting: "Pavé & Claw",
      origin: "Mumbai Atelier",
    },
  },
  {
    id: "feat-02",
    name: "Solenne Ring",
    category: "Solitaire Statement",
    price: "₹92,000",
    priceNum: 92000,
    description:
      "Subtle architectural lines designed to be worn effortlessly. A single radiant stone set in a heavy contoured bezel.",
    material: "18K Yellow Gold, 1.20ct Cushion Diamond",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1400&q=85",
    tag: "New Release",
    specifications: {
      metal: "18K Royal Gold",
      gemstone: "Natural Diamond",
      cut: "Cushion Cut",
      setting: "Bezel Setting",
      origin: "Jaipur Atelier",
    },
  },
  {
    id: "feat-03",
    name: "Élan Earrings",
    category: "Cascade Diamond Earrings",
    price: "₹1,20,000",
    priceNum: 120000,
    description:
      "Dynamic movement engineered with lightweight hollow gold joints and pavé articulated pendants.",
    material: "18K Gold, 1.85ct Diamonds",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1400&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1400&q=85",
    tag: "Editorial Pick",
    specifications: {
      metal: "18K Warm Gold",
      gemstone: "Baguette Diamonds",
      cut: "Mixed Brilliant",
      setting: "Hand-set Prongs",
      origin: "Surat Atelier",
    },
  },
  {
    id: "feat-04",
    name: "Mira Bracelet",
    category: "Articulated Tennis Bracelet",
    price: "₹1,15,000",
    priceNum: 115000,
    description:
      "A fluid river of graduated round diamonds nestled in individual hand-sculpted gold cups.",
    material: "18K Rose & Yellow Gold, 1.60ct Diamonds",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1600&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1600&q=85",
    tag: "Limited Batch",
    specifications: {
      metal: "18K Rose Gold",
      gemstone: "Full Cut Diamonds",
      cut: "Round Brilliant",
      setting: "Four-Prong Box Link",
      origin: "Bengal Atelier",
    },
  },
  {
    id: "feat-05",
    name: "Noor Pendant",
    category: "Heritage Solitaire Pendant",
    price: "₹78,000",
    priceNum: 78000,
    description:
      "Inspired by Mughal court miniatures, a solitary pear-cut diamond suspended from a silk-spun gold rope chain.",
    material: "18K Gold, 0.95ct Pear Diamond",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=85",
    tag: "Heritage",
    specifications: {
      metal: "18K Solid Gold",
      gemstone: "Natural Pear Diamond",
      cut: "Rose & Pear Cut",
      setting: "Kundan Collet Setting",
      origin: "Rajasthan Atelier",
    },
  },
  {
    id: "feat-06",
    name: "Aster Ring",
    category: "Sculptural Eternity Band",
    price: "₹1,05,000",
    priceNum: 105000,
    description:
      "An unbroken rhythm of emerald-cut diamonds cast into an undulating wave of brushed 18k white gold.",
    material: "18K White Gold, 1.40ct Emerald Cut Diamonds",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1400&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=85",
    tag: "Atelier Bespoke",
    specifications: {
      metal: "18K White Gold",
      gemstone: "Emerald-Cut Diamonds",
      cut: "Step Cut",
      setting: "Shared Prong Eternity",
      origin: "Mumbai Atelier",
    },
  },
];

export const CAMPAIGN_GALLERY = [
  {
    id: "camp-1",
    title: "Light & Proportion",
    caption: "Campaign 2026 / Chapter I",
    image:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "camp-2",
    title: "The Solitaire Study",
    caption: "Atelier Moments",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "camp-3",
    title: "Hand Finished Gold",
    caption: "Craftsmanship & Fire",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "camp-4",
    title: "Royal Polki Heritage",
    caption: "The Bridal Monograph",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "camp-5",
    title: "Diamond Caustics",
    caption: "Light Studies No. 04",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "camp-6",
    title: "Bespoke Geometry",
    caption: "Private Commission",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
  },
];
