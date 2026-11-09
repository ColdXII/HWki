import type { MightSkill } from "./types";

// {name} in the text is replaced by that name's number for the chosen level (Lv 1 to 5)
export const mightSkills: MightSkill[] = [
  {
    id: "west-wind",
    name: "Might of the West Wind",
    icon: "/icons/might/westwind.webp",
    description: "At the start of battle, increases SPD by {spd} for 1R.",
    values: { spd: [100, 125, 150, 175, 200] },
  },
  {
    id: "plunder",
    name: "Might of Plunder",
    icon: "/icons/might/plunder.webp",
    description: "Gain {lifesteal}% Lifesteal when HP is 70% or lower.",
    values: { lifesteal: [4, 5, 6, 7, 8] },
  },
  {
    id: "pursuit",
    name: "Might of Pursuit",
    icon: "/icons/might/pursuit.webp",
    description: "On your turn, defeating an enemy with an attack grants {ap} AP. Can trigger up to 3 times per round.",
    values: { ap: [10, 12.5, 15, 17.5, 20] },
  },
  {
    id: "distortion",
    name: "Might of Distortion",
    icon: "/icons/might/distortion.webp",
    description: "On attack, has a {chance}% chance to inflict [Slow] on the target for 2 Rounds. [Slow]: Reduces SPD by 40%.",
    values: { chance: [40, 50, 60, 70, 80] },
  },
  {
    id: "fighting-spirit",
    name: "Might of Fighting Spirit",
    icon: "/icons/might/fightingspirit.webp",
    description: "At the start of your turn, gains 1 Melee ATK for every {scale} HP lost.",
    values: { scale: [10, 8.75, 7.5, 6.25, 5] },
  },
  {
    id: "protection",
    name: "Might of Protection",
    icon: "/icons/might/protection.webp",
    description: "At the end of your turn, grants a shield equal to {shield}% of your Max HP to an ally with a lower HP ratio than yourself.",
    values: { shield: [20, 24, 28, 32, 36] },
  },
  {
    id: "frost",
    name: "Might of Frost",
    icon: "/icons/might/frost.webp",
    description: "On attack, reduces the target's All ATK by {allAtk}% and decreases Cold DEF by {coldDef}.",
    values: { 
      allAtk: [10, 12.5, 15, 17.5, 20],
      coldDef: [200, 250, 300, 350, 400],
    },
  },
  {
    id: "insight",
    name: "Might of Insight",
    icon: "/icons/might/insight.webp",
    description: "When it is not your turn, Crit DMG increases by {critDmg}%.",
    values: { critDmg: [20, 25, 30, 35, 40] },
  },
  {
    id: "shattering",
    name: "Might of Shattering",
    icon: "/icons/might/shattering.webp",
    description: "Reduces Crit Rate by {critRate}% and increases Crit DMG by {critDmg}%.",
    values: { 
      critRate: [20, 25, 30, 35, 40],
      critDmg: [40, 50, 60, 70, 80],
    },
  },
  {
    id: "flame",
    name: "Might of Flame",
    icon: "/icons/might/flame.webp",
    description: "At the start of battle, increases Heat Boost by {heatBoost}.",
    values: { heatBoost: [20, 25, 30, 35, 40] },
  },
];

export const getMight = (id: string) => mightSkills.find((m) => m.id === id);