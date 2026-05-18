export interface Product {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  img: string;
  images: string[];
  features: string[];
  soldOut?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Lavender Bliss Organic Soap Bar",
    price: 799,
    oldPrice: 1599,
    discount: "50% OFF",
    rating: 4.8,
    reviews: 124,
    category: "Bar Soaps",
    description: "Handcrafted with pure essential lavender oil and organic shea butter, our Lavender Bliss bar provides a calming aromatic experience while deeply moisturizing your skin. Perfect for your nightly ritual to unwind and relax.",
    img: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1572635148818-26623ef394b9?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1612547087280-3bb90772e276?auto=format&fit=crop&q=80&w=600"
    ],
    features: ["100% Vegan", "Cold Processed", "No Synthetic Fragrance", "Cruelty Free"],
  },
  {
    id: "p2",
    title: "Citrus Zest Invigorating Bar",
    price: 945,
    oldPrice: 1350,
    discount: "30% OFF",
    rating: 4.7,
    reviews: 89,
    category: "Bar Soaps",
    description: "Wake up your senses with the vibrant energy of lemon and orange peels. This exfoliating bar removes dead skin cells and leaves you feeling refreshed and glowing throughout the day.",
    img: "https://images.unsplash.com/photo-1605291410113-f667110777e5d?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1605291410113-f667110777e5d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1549402505-dfcc7766099b?auto=format&fit=crop&q=80&w=600"
    ],
    features: ["Vitamin C Enriched", "Exfoliating Texture", "Zero Waste Packaging"],
  },
  {
    id: "p3",
    title: "Deep Detox Activated Charcoal",
    price: 850,
    oldPrice: 1200,
    discount: "30% OFF",
    rating: 4.9,
    reviews: 215,
    category: "Bar Soaps",
    description: "Draw out impurities and excess oils with our Deep Detox bar. Formulated with medical-grade activated charcoal and tea tree oil, it's the ultimate solution for acne-prone or oily skin.",
    img: "https://images.unsplash.com/photo-1584305600310-1202c339791d?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1584305600310-1202c339791d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1602910352538-472bc5006c9b?auto=format&fit=crop&q=80&w=600"
    ],
    features: ["Pore Minimizing", "Anti-Bacterial", "Unscented Option Available"],
  },
  {
    id: "p4",
    title: "Oatmeal Honey Soothing Soap",
    price: 495,
    oldPrice: 1650,
    discount: "70% OFF",
    rating: 4.6,
    reviews: 56,
    category: "Bar Soaps",
    description: "A gentle hug for sensitive skin. Real colloidal oatmeal and local organic honey work together to soothe inflammation and calm redness. Perfect for eczema or psoriasis sufferers.",
    img: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600"
    ],
    features: ["Hypoallergenic", "pH Balanced", "Safe for Babies"],
  },
  {
    id: "p5",
    title: "Eucalyptus Refreshing Liquid Soap",
    price: 1828,
    oldPrice: 2150,
    discount: "15% OFF",
    rating: 4.5,
    reviews: 42,
    category: "Liquid Soaps",
    description: "Transform your shower into a spa steam room. Our cooling eucalyptus liquid soap clears the sinuses and revitalizes the mind with every pump. High-concentration formula lasts longer.",
    img: "https://images.unsplash.com/photo-1556228578-0d8566270cd1?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d8566270cd1?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&q=80&w=600"
    ],
    features: ["Refillable Glass Bottle", "Sulfate Free", "Biodegradable"],
  },
  {
    id: "p6",
    title: "Midnight Rose Petal Extract",
    price: 1250,
    rating: 4.8,
    reviews: 67,
    category: "Bar Soaps",
    description: "Premium damask rose extract combined with cold-pressed olive oil. This bar luxury in your hands, leaving a lingering floral scent that lasts for hours.",
    img: "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?auto=format&fit=crop&q=80&w=600"
    ],
    features: ["Anti-Aging Properties", "Rich Lather", "Ethically Sourced"],
  },
  {
    id: "p7",
    title: "Ocean Breeze Bath Bomb Set",
    price: 599,
    rating: 4.9,
    reviews: 134,
    category: "Bath Bombs",
    description: "Experience the sea from your bathtub. Our Ocean Breeze bombs are infused with sea kelp and magnesium salts to relax sore muscles and leave your skin silky smooth.",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"
    ],
    features: ["Stain-Free Formula", "Epsom Salt Enriched", "Aromatherapy Grade"],
  },
  {
    id: "p8",
    title: "Artisanal Starter Gift Kit",
    price: 2550,
    rating: 5.0,
    reviews: 18,
    category: "Gift Sets",
    description: "A handpicked selection of our top 4 soap bars and a bamboo drainage dish. The perfect introduction to the world of PureBar or a thoughtful gift for a loved one.",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600"
    ],
    features: ["Gift Wrapped", "Includes Bamboo Dish", "Save 20% on Bundle"],
    soldOut: false
  }
];
