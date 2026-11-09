import type { CharacterDetails } from "../types";

export const split_twigs_priest: CharacterDetails = {
  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority:\n1. Magic Attack\n2. Max HP\n3. Starting AP",
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Magic Attack\n2. Max HP\n3. Starting AP",
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "guardians-strike",
      name: "Guardian's Strike",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/bella/ba.webp",
      description: `Swings a mace to attack the enemy.
      Deals Crush DMG equal to {damage}% of Melee ATK and reduces the target's AP by 5.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Crush",
      },
    },
    {
      id: "grace-of-healing",
      name: "Grace of Healing",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/bella/s1.webp",
      description: `Prays to the Goddess of the Split Twigs with a devout heart for the healing of an ally.
      Recovers the HP of a designated ally by {heal}% of Magic ATK.`,
      values: {
        heal: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "life-regeneration",
      name: "Life Regeneration",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/bella/s2.webp",
      description: `Offers a solemn prayer for the mercy of the Goddess of Split Twigs.
      Recovers the HP of allies within a 2.5m circular range by {heal}% of Magic ATK.`,
      values: {
        heal: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
      },
    },
    {
      id: "reviving-bough",
      name: "Reviving Bough",
      type: "Active",
      ap: 90,
      cooldown: 0,
      icon: "/skills/bella/s3.webp",
      description: `Opens the path of the branches to invoke the goddess's miracle.
      Restores consciousness to one incapacitated ally and recovers HP by {heal}% of Magic ATK.
      The target resumes battle with AP set to {ap}.`,
      values: {
        heal: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
        ap: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
  ],

  weaponType: "Club & Shield",

  basic: { str: 8, tec: 6, int: 8, vit: 11, agi: 10 },

  gradeGains: {
    A: { int: 1 },
    S: { str: 1 },
    SS: { int: 1 },
    EX: { str: 1 },
    EX1: { vit: 1 },
    EX2: { int: 1 },
    EX3: { str: 1 },
    EX4: { int: 1 },
    EX5: { str: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "marlon",
  ],

  manual: {
    spd: 87,
    startApSeen: { value: 121, grade: "B" },
  },
};
