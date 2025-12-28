import goldenRose from "@/assets/products/golden-rose.jpg";
import rainbowPhoenix from "@/assets/products/rainbow-phoenix.jpg";
import goldenPhoenix from "@/assets/products/golden-phoenix.jpg";
import rainbowRose from "@/assets/products/rainbow-rose.jpg";
import goldenChrysanthemum from "@/assets/products/golden-chrysanthemum.jpg";
import rainbowChrysanthemum from "@/assets/products/rainbow-chrysanthemum.jpg";
import plumBlossom from "@/assets/products/plum-blossom.jpg";
import gesangFlower from "@/assets/products/gesang-flower.jpg";
import peonyBouquet from "@/assets/products/peony-bouquet.jpg";
import orchidRainbow from "@/assets/products/orchid-rainbow.jpg";

export interface LocalProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  features: string[];
}

export const products: LocalProduct[] = [
  {
    id: "1",
    handle: "golden-rose-foil-art",
    title: "Golden Rose Foil Art Kit",
    description: "Create a stunning golden rose artwork using traditional gold leaf foil techniques. This elegant design features blooming roses with intricate petal details that shimmer beautifully when complete. Perfect for home decor or as a heartfelt gift.",
    price: 2000,
    currency: "PKR",
    images: [goldenRose, goldenPhoenix, plumBlossom],
    category: "Gold Foil",
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    features: ["Gold Foil Sheets x5", "Precision Tweezers", "Adhesive Black Card Paper", "A4 Wooden Frame", "Video Tutorial Access"],
  },
  {
    id: "2",
    handle: "rainbow-phoenix-foil-art",
    title: "Rainbow Phoenix Foil Art Kit",
    description: "Bring the mythical phoenix to life with stunning iridescent rainbow foil. This kit creates a mesmerizing piece that changes color as light hits it from different angles. A symbol of rebirth and new beginnings.",
    price: 2000,
    currency: "PKR",
    images: [rainbowPhoenix, rainbowRose, orchidRainbow],
    category: "Rainbow Foil",
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    features: ["Rainbow Foil Sheets x5", "Precision Tweezers", "Adhesive Black Card Paper", "A4 Wooden Frame", "Video Tutorial Access"],
  },
  {
    id: "3",
    handle: "golden-phoenix-foil-art",
    title: "Golden Phoenix Foil Art Kit",
    description: "Craft a majestic golden phoenix rising in flames. This intricate design showcases the legendary bird in all its glory, with detailed feathers and flowing tail that capture the essence of this immortal creature.",
    price: 2000,
    currency: "PKR",
    images: [goldenPhoenix, goldenRose, goldenChrysanthemum],
    category: "Gold Foil",
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    features: ["Gold Foil Sheets x5", "Precision Tweezers", "Adhesive Black Card Paper", "A4 Wooden Frame", "Video Tutorial Access"],
  },
  {
    id: "4",
    handle: "rainbow-rose-foil-art",
    title: "Rainbow Rose Foil Art Kit",
    description: "Create enchanting roses that shimmer with all the colors of the rainbow. This unique kit produces an eye-catching piece with iridescent petals that dance with color. A modern twist on a classic design.",
    price: 2000,
    currency: "PKR",
    images: [rainbowRose, rainbowPhoenix, rainbowChrysanthemum],
    category: "Rainbow Foil",
    inStock: true,
    rating: 4.8,
    reviewCount: 203,
    features: ["Rainbow Foil Sheets x5", "Precision Tweezers", "Adhesive Black Card Paper", "A4 Wooden Frame", "Video Tutorial Access"],
  },
  {
    id: "5",
    handle: "golden-chrysanthemum-foil-art",
    title: "Golden Chrysanthemum Foil Art Kit",
    description: "Celebrate the beauty of chrysanthemums with this elegant gold foil art kit. The intricate petals and flowing stems create a peaceful, meditative piece that brings warmth to any room.",
    price: 2000,
    currency: "PKR",
    images: [goldenChrysanthemum, goldenRose, plumBlossom],
    category: "Gold Foil",
    inStock: true,
    rating: 4.6,
    reviewCount: 78,
    features: ["Gold Foil Sheets x5", "Precision Tweezers & Brush", "Adhesive Black Card Paper", "A4 Wooden Frame", "Video Tutorial Access"],
  },
  {
    id: "6",
    handle: "rainbow-chrysanthemum-foil-art",
    title: "Rainbow Chrysanthemum Foil Art Kit",
    description: "Experience the magic of color-shifting chrysanthemums. This kit features dual flowers that seem to glow with inner light, creating a captivating display that changes throughout the day.",
    price: 2000,
    currency: "PKR",
    images: [rainbowChrysanthemum, orchidRainbow, rainbowPhoenix],
    category: "Rainbow Foil",
    inStock: true,
    rating: 4.9,
    reviewCount: 67,
    features: ["Rainbow Foil Sheets x5", "Precision Tweezers & Brush", "Adhesive Black Card Paper", "A4 Wooden Frame", "Video Tutorial Access"],
  },
  {
    id: "7",
    handle: "plum-blossom-foil-art",
    title: "Plum Blossom Foil Art Kit",
    description: "A delicate masterpiece featuring plum blossoms and a hummingbird. This premium kit includes multiple foil colors to create depth and dimension in your artwork. Frame size: 23.1cm x 31.5cm.",
    price: 2000,
    currency: "PKR",
    images: [plumBlossom, gesangFlower, peonyBouquet],
    category: "Multi-Color Foil",
    inStock: true,
    rating: 4.8,
    reviewCount: 145,
    features: ["3 Color Foil Options x5", "Complete Tool Kit", "Black Card + Template", "Premium Wooden Frame", "Video Tutorial Access"],
  },
  {
    id: "8",
    handle: "gesang-flower-foil-art",
    title: "Gesang Flower Foil Art Kit",
    description: "Celebrate the beauty of Gesang flowers with this colorful foil art kit. The design features delicate blooms in multiple colors, creating a garden of shimmering beauty. Frame size: 23.1cm x 31.5cm.",
    price: 2000,
    currency: "PKR",
    images: [gesangFlower, plumBlossom, peonyBouquet],
    category: "Multi-Color Foil",
    inStock: true,
    rating: 4.7,
    reviewCount: 92,
    features: ["3 Color Foil Options x5", "Complete Tool Kit", "Black Card + Template", "Premium Wooden Frame", "Video Tutorial Access"],
  },
  {
    id: "9",
    handle: "peony-bouquet-foil-art",
    title: "Peony Bouquet Foil Art Kit",
    description: "Create a stunning bouquet of peonies and roses in shimmering foil. This romantic design features layered blooms that create depth and movement. Perfect for weddings or special occasions.",
    price: 2000,
    currency: "PKR",
    images: [peonyBouquet, plumBlossom, gesangFlower],
    category: "Multi-Color Foil",
    inStock: true,
    rating: 4.9,
    reviewCount: 178,
    features: ["3 Color Foil Options x5", "Complete Tool Kit", "Black Card + Template", "Premium Wooden Frame", "Video Tutorial Access"],
  },
  {
    id: "10",
    handle: "orchid-rainbow-foil-art",
    title: "Orchid Rainbow Foil Art Kit",
    description: "Elegant orchids come alive with stunning rainbow iridescent foil. This sophisticated design captures the graceful curves and delicate beauty of orchid flowers in a mesmerizing color display.",
    price: 2000,
    currency: "PKR",
    images: [orchidRainbow, rainbowRose, rainbowChrysanthemum],
    category: "Rainbow Foil",
    inStock: true,
    rating: 4.8,
    reviewCount: 134,
    features: ["Rainbow Foil Sheets x5", "Precision Tweezers", "Adhesive Black Card Paper", "A4 Wooden Frame", "Video Tutorial Access"],
  },
];

export const reviews = [
  {
    id: "1",
    name: "Ayesha Khan",
    avatar: "AK",
    rating: 5,
    date: "2 weeks ago",
    comment: "Absolutely loved making this! The instructions were so clear and the final result is stunning. My friends can't believe I made it myself!",
    verified: true,
  },
  {
    id: "2",
    name: "Sara Ahmed",
    avatar: "SA",
    rating: 5,
    date: "1 month ago",
    comment: "This was my first DIY art project and I'm hooked! The quality of materials is excellent and the video tutorial made it so easy to follow.",
    verified: true,
  },
  {
    id: "3",
    name: "Fatima Malik",
    avatar: "FM",
    rating: 4,
    date: "3 weeks ago",
    comment: "Beautiful kit with everything included. Took me about 3 hours to complete but the result was worth every minute. Would definitely recommend!",
    verified: true,
  },
  {
    id: "4",
    name: "Zara Hassan",
    avatar: "ZH",
    rating: 5,
    date: "1 week ago",
    comment: "Gifted this to my sister and she absolutely loved it! The finished piece looks so professional. Already ordered another one for myself.",
    verified: true,
  },
  {
    id: "5",
    name: "Hira Butt",
    avatar: "HB",
    rating: 5,
    date: "2 months ago",
    comment: "Such a therapeutic experience! I made this during a stressful week and it really helped me relax. The gold foil is so satisfying to work with.",
    verified: true,
  },
];

export function getProductByHandle(handle: string): LocalProduct | undefined {
  return products.find((p) => p.handle === handle);
}

export function getRelatedProducts(currentHandle: string, limit: number = 4): LocalProduct[] {
  const current = getProductByHandle(currentHandle);
  if (!current) return products.slice(0, limit);
  
  return products
    .filter((p) => p.handle !== currentHandle)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return 0;
    })
    .slice(0, limit);
}
