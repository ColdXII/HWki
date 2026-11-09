import type { Gift } from "./types";

export const gifts: Gift[] = [
  {
    id: "gun-maintenance-kit",
    name: "Gun Maintenance Kit",
    grade: "gray",
    icon: "/icons/gifts/gun-maintenance-kit.webp",
  },
  {
    id: "orca-documentary",
    name: "Orca Documentary",
    grade: "gray",
    icon: "/icons/gifts/orca-documentary.webp",
  },
  {
    id: "strawberry-chubby-macaron",
    name: "Strawberry Chubby Macaron",
    grade: "gray",
    icon: "/icons/gifts/strawberry-chubby-macaron.webp",
  },
  {
    id: "setflix-membership-voucher",
    name: "Setflix Membership Voucher",
    grade: "gray",
    icon: "/icons/gifts/setflix-membership-voucher.webp",
  },
  {
    id: "frog-plush",
    name: "Frog Plush",
    grade: "gray",
    icon: "/icons/gifts/frog-plush.webp",
  },
  {
    id: "gloomy-chromi-keyring",
    name: "Gloomy Chromi Keyring",
    grade: "gray",
    icon: "/icons/gifts/gloomy-chromi-keyring.webp",
  },
  {
    id: "americano-voucher",
    name: "Americano Voucher",
    grade: "gray",
    icon: "/icons/gifts/americano-voucher.webp",
  },
  {
    id: "fire-octopus-noodles",
    name: "Fire Octopus Noodles",
    grade: "gray",
    icon: "/icons/gifts/fire-octopus-noodles.webp",
  },
  {
    id: "glazed-fruit-stick",
    name: "Glazed Fruit Stick",
    grade: "gray",
    icon: "/icons/gifts/glazed-fruit-stick.webp",
  },
  {
    id: "charcoal",
    name: "Charcoal",
    grade: "gray",
    icon: "/icons/gifts/charcoal.webp",
  },
  {
    id: "training-equipment-set",
    name: "Training Equipment Set",
    grade: "gray",
    icon: "/icons/gifts/training-equipment-set.webp",
  },
  { id: "soju", name: "Soju", grade: "gray", icon: "/icons/gifts/soju.webp" },
  {
    id: "a-single-rose",
    name: "A Single Rose",
    grade: "gray",
    icon: "/icons/gifts/a-single-rose.webp",
  },
  {
    id: "dartagnan-romance",
    name: "D'Artagnan Romance [The Tale of the Three Musketeers]",
    grade: "gray",
    icon: "/icons/gifts/dartagnan-romance.webp",
  },
  {
    id: "forbidden-romance",
    name: "Forbidden Romance [A Secret Affair Barred by Class]",
    grade: "gray",
    icon: "/icons/gifts/forbidden-romance.webp",
  },
  {
    id: "mangrove-leaf",
    name: "Mangrove Leaf",
    grade: "gray",
    icon: "/icons/gifts/mangrove-leaf.webp",
  },
  {
    id: "kalma-election",
    name: "Kalma Election Campaign Brochure",
    grade: "gray",
    icon: "/icons/gifts/kalma-election.webp",
  },
  {
    id: "catnip-pouch",
    name: "Catnip Pouch",
    grade: "gray",
    icon: "/icons/gifts/catnip-pouch.webp",
  },
  {
    id: "hamburg-steak",
    name: "Hamburg Steak",
    grade: "gray",
    icon: "/icons/gifts/hamburg-steak.webp",
  },
  {
    id: "sports-sneakers",
    name: "Sports Sneakers",
    grade: "gray",
    icon: "/icons/gifts/sports-sneakers.webp",
  },

  {
    id: "snow-globe",
    name: "Snow Globe",
    grade: "green",
    icon: "/icons/gifts/snow-globe.webp",
  },
  {
    id: "300kg-dumbbell",
    name: "300kg Dumbbell",
    grade: "green",
    icon: "/icons/gifts/300kg-dumbbell.webp",
  },
  {
    id: "anti-aging-skincare-product",
    name: "Anti-Aging Skincare Product",
    grade: "green",
    icon: "/icons/gifts/anti-aging-skincare-product.webp",
  },
  {
    id: "scripture-of-the-goddess-of-the-split-twigs",
    name: "Scripture of the Goddess of the Split Twigs",
    grade: "green",
    icon: "/icons/gifts/scripture-of-the-goddess-of-the-split-twigs.webp",
  },
  {
    id: "lamora-military-ration",
    name: "Lamora Military Ration",
    grade: "green",
    icon: "/icons/gifts/lamora-military-ration.webp",
  },
  {
    id: "hotel-restaurant-meal-voucher",
    name: "Hotel Restaurant Meal Voucher",
    grade: "green",
    icon: "/icons/gifts/hotel-restaurant-meal-voucher.webp",
  },
  {
    id: "magical-fairy-tale-book",
    name: "Magical Fairy Tale Book",
    grade: "green",
    icon: "/icons/gifts/magical-fairy-tale-book.webp",
  },

  {
    id: "finest-black-tea",
    name: "Finest Black Tea",
    grade: "blue",
    icon: "/icons/gifts/finest-black-tea.webp",
  },
  {
    id: "strategy-simulation-board-game",
    name: "Strategy Simulation Board Game",
    grade: "blue",
    icon: "/icons/gifts/strategy-simulation-board-game.webp",
  },
  {
    id: "antique-music-box",
    name: "Antique Music Box",
    grade: "blue",
    icon: "/icons/gifts/antique-music-box.webp",
  },
  {
    id: "terrarium",
    name: "Terrarium",
    grade: "blue",
    icon: "/icons/gifts/terrarium.webp",
  },
  {
    id: "worn-banner-of-the-magnal-duchy",
    name: "Worn Banner of the Magnal Duchy",
    grade: "blue",
    icon: "/icons/gifts/worn-banner-of-the-magnal-duchy.webp",
  },


  {
    id: "human-gods-hair",
    name: "Human God's Hair",
    grade: "purple",
    icon: "/icons/gifts/human-gods-hair.webp",
  },
  {
    id: "grey-goose-vodka",
    name: "Grey Goose Vodka",
    grade: "purple",
    icon: "/icons/gifts/grey-goose-vodka.webp",
  },
  {
    id: "luxury-bag",
    name: "Luxury Bag",
    grade: "purple",
    icon: "/icons/gifts/luxury-bag.webp",
  },

  {
    id: "queens-tiara",
    name: "Queen's Tiara",
    grade: "yellow",
    icon: "/icons/gifts/queens-tiara.webp",
  },
];

export const getGift = (id: string) => gifts.find((g) => g.id === id);
