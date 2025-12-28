export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  productHandle?: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Ayesha K. 💖",
    avatar: "👩‍🎨",
    rating: 5,
    date: "2 weeks ago",
    comment: "Absolutely loved this kit! The instructions were so easy to follow and my rose turned out beautiful. Perfect gift for my mom! 🌹✨",
    verified: true,
  },
  {
    id: "2",
    name: "Sara M. 🎨",
    avatar: "👩‍💼",
    rating: 5,
    date: "1 month ago",
    comment: "This was my first time doing gold foil art and I'm amazed at how professional it looks! The video tutorial was super helpful 💝",
    verified: true,
  },
  {
    id: "3",
    name: "Fatima R. ✨",
    avatar: "👩‍🏫",
    rating: 5,
    date: "3 weeks ago",
    comment: "Bought this for a girls' night activity and we had SO much fun! Everyone's art turned out uniquely beautiful. Will definitely order more! 🥰",
    verified: true,
  },
  {
    id: "4",
    name: "Zara A. 🌸",
    avatar: "👩‍🔬",
    rating: 4,
    date: "1 month ago",
    comment: "Beautiful kit with high quality materials. The phoenix design is stunning! Only wish it came with more foil sheets. Still highly recommend! 🦅",
    verified: true,
  },
  {
    id: "5",
    name: "Hina S. 💫",
    avatar: "👩‍⚕️",
    rating: 5,
    date: "2 months ago",
    comment: "As a working professional, this was the perfect stress reliever! The finished piece now hangs in my office and everyone compliments it 🖼️",
    verified: true,
  },
  {
    id: "6",
    name: "Nadia P. 🎀",
    avatar: "👸",
    rating: 5,
    date: "1 week ago",
    comment: "The rainbow foil is MAGICAL! It changes colors in the light and looks like real art. Can't believe I made this myself! 🌈",
    verified: true,
  },
];
