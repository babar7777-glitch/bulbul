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

export interface StaticProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  badge?: string;
  emoji: string;
  category: "gold" | "rainbow" | "premium";
}

export const staticProducts: StaticProduct[] = [
  {
    id: "1",
    handle: "golden-rose",
    title: "Golden Rose ✨",
    description: "Elegant gold foil rose design - perfect for beginners! A timeless classic that brings warmth to any space 🌹",
    price: 2000,
    currency: "PKR",
    image: goldenRose,
    badge: "Bestseller 🔥",
    emoji: "🌹",
    category: "gold",
  },
  {
    id: "2",
    handle: "rainbow-phoenix",
    title: "Rainbow Phoenix 🌈",
    description: "Majestic iridescent phoenix rising in stunning holographic colors - truly magical! ✨",
    price: 2000,
    currency: "PKR",
    image: rainbowPhoenix,
    badge: "New Arrival 🆕",
    emoji: "🦅",
    category: "rainbow",
  },
  {
    id: "3",
    handle: "golden-phoenix",
    title: "Golden Phoenix 🔥",
    description: "Stunning gold foil phoenix symbolizing rebirth and elegance - a powerful statement piece! 💫",
    price: 2000,
    currency: "PKR",
    image: goldenPhoenix,
    badge: "Popular 💖",
    emoji: "🔥",
    category: "gold",
  },
  {
    id: "4",
    handle: "rainbow-rose",
    title: "Rainbow Rose 🌈",
    description: "Beautiful holographic rose with mesmerizing color shifts - a true showstopper! 💎",
    price: 2000,
    currency: "PKR",
    image: rainbowRose,
    emoji: "🌸",
    category: "rainbow",
  },
  {
    id: "5",
    handle: "golden-chrysanthemum",
    title: "Golden Chrysanthemum 🌼",
    description: "Traditional golden chrysanthemum design representing longevity and happiness 🎋",
    price: 2000,
    currency: "PKR",
    image: goldenChrysanthemum,
    emoji: "🌼",
    category: "gold",
  },
  {
    id: "6",
    handle: "rainbow-chrysanthemum",
    title: "Rainbow Chrysanthemum ✨",
    description: "Stunning iridescent chrysanthemum with dreamy color transitions 🦋",
    price: 2000,
    currency: "PKR",
    image: rainbowChrysanthemum,
    badge: "Limited ⭐",
    emoji: "💜",
    category: "rainbow",
  },
  {
    id: "7",
    handle: "plum-blossom",
    title: "Plum Blossom 🌸",
    description: "Delicate plum blossom with mixed foil colors - symbolizing perseverance and hope 🕊️",
    price: 2000,
    currency: "PKR",
    image: plumBlossom,
    emoji: "🌸",
    category: "premium",
  },
  {
    id: "8",
    handle: "gesang-flower",
    title: "Gesang Flower 🌻",
    description: "Beautiful wild flower design with gorgeous gold and copper tones 🧡",
    price: 2000,
    currency: "PKR",
    image: gesangFlower,
    emoji: "🌻",
    category: "premium",
  },
  {
    id: "9",
    handle: "peony-bouquet",
    title: "Peony Bouquet 💐",
    description: "Lush peony arrangement in mixed metallic foils - the queen of flowers! 👑",
    price: 2000,
    currency: "PKR",
    image: peonyBouquet,
    badge: "Gorgeous 💕",
    emoji: "🌺",
    category: "premium",
  },
  {
    id: "10",
    handle: "orchid-rainbow",
    title: "Orchid Dreams 🦋",
    description: "Ethereal orchid in stunning rainbow holographic colors - simply enchanting! 💫",
    price: 2000,
    currency: "PKR",
    image: orchidRainbow,
    badge: "Fan Favorite 💝",
    emoji: "🪻",
    category: "rainbow",
  },
];
