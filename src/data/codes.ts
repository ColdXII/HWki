export type CodeReward = {
  name: string;
  amount: number;
  icon?: string; // image path, for example "/rewards/gems.webp". Leave out to show text only
};

export type RedeemCode = {
  code: string;
  expires?: string; // "YYYY-MM-DD", the last day it works. Leave out if it never expires
  expired?: boolean; // true = mark it expired by hand (for example if it stopped early)
  rewards: CodeReward[];
};

// Newest first is nice, but the page sorts them anyway
export const codes: RedeemCode[] = [
  {
    code: "26HAPPYHW",
    expires: "2026-11-30",
    rewards: [
      { name: "Soul Shear", amount: 1 },
      { name: "Soul Stone", amount: 3 },
      { name: "FairyNet Multi-Search Ticket", amount: 3 },
      { name: "Large Rift Stone Box", amount: 5 },
      { name: "Legendary Memory-Forged Equipment", amount: 300 },
      { name: "Queen's Tiara", amount: 3 },
    ],
  },
  {
    code: "26HAPPYHWE",
    expires: "2026-11-30",
    rewards: [
      { name: "Soul Shear", amount: 1 },
      { name: "Soul Stone", amount: 3 },
      { name: "FairyNet Multi-Search Ticket", amount: 3 },
      { name: "Large Rift Stone Box", amount: 5 },
      { name: "Legendary Memory-Forged Equipment", amount: 300 },
      { name: "Queen's Tiara", amount: 3 },
    ],
  },
];
