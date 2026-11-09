import type { CharacterDetails } from "../types";

export const headless_knight: CharacterDetails = {
  skins: [],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. Crit Chance (30%)\n2. Crit DMG\n3. Melee Attack",
      weapon: { id: "the-cranium-of-the-defeated", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound", slot: "bottom", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound", slot: "right", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Chance (30%)\n2. Crit DMG\n3. Melee Attack",
      weapon: { id: "the-cranium-of-the-defeated", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-thousand-mile-weaver", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "bottom", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "right", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "the-cranium-of-the-defeated", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "thorny-heart", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "thorny-heart", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "thorny-heart", slot: "bottom", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "thorny-heart", slot: "right", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "sicle",
      name: "Sicle",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/headlessknight/ba.webp",
      description: `Deals a powerful sword strike to the enemy. Deals Slash DMG equal to {damage}% of Melee ATK to attacked enemies.`,
      damage: { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Slash" },
    },
    {   
      id: "no-defiance",
      name: "No Defiance",
      type: "Passive",
      icon: "/skills/headlessknight/p1.webp",
      description: `Increases Melee ATK by {meleeAtk}% and guards the front during own turn.`,
      values: {
        meleeAtk: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "harvest",
      name: "Harvest",
      type: "Active",
      ap: 45,
      cooldown: 2,
      icon: "/skills/headlessknight/s1.webp",
      description: `Performs a wide sweeping slash. Deals Slash DMG equal to {damage}% of Melee ATK to enemies within a 6m 150º fan range.`,
      damage: { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Slash", label: "AoE Damage" },
    },
    {   
      id: "shield-splitting",
      name: "Shield Splitting",
      type: "Passive",
      icon: "/skills/headlessknight/p2.webp",
      description: `Deals Additional Slash DMG equal to {additionalDmg}% of the target's current HP on attack. This damage does not exceed 180% of Melee ATK.`,
      values: {
        additionalDmg: [12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5],
      },
    },
    {
      id: "decapitation",
      name: "Decapitation",
      type: "Active",
      ap: 45,
      cooldown: 4,
      icon: "/skills/headlessknight/s2.webp",
      description: `Combines all auxiliary blades into a greatsword and strikes down powerfully.
      Deals Slash DMG equal to {damage}% of Melee ATK to enemies within an 8m 20º fan range.`,
      damage: { stat: "meleeAtk", percent: [240, 264, 288, 312, 336, 360, 384, 408, 432, 456], damageType: "Slash", label: "AoE Damage" },
    },
    {   
      id: "the-reaper",
      name: "The Reaper",
      type: "Passive",
      icon: "/skills/headlessknight/p3.webp",
      description: `Each time an enemy is defeated, the following effects activate:

      Has a {chance}% chance to reduce the cooldown of [Harvest] and [Decapitate] skills by 1 Round.
      [Reaper]: Increases SPD by {spd}%.`,
      values: {
        chance: [55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        spd: [45, 47.5, 50, 52.5, 55, 57.5, 60, 62.5, 65, 67.5],
      },
    },
  ],

  weaponType: "Ancient Core",

  basic: { str: 15, tec: 11, int: 9, vit: 17, agi: 7 },

  gradeGains: {
    B: { vit: -1 },
    A: { str: -1 },
    S: { agi: -1 },
    SS: { vit: -2 },
    EX1: { str: 2 },
    EX2: { vit: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 2 },
    EX6: { str: 2 },
  },

  traits: [
    "rake",
    "headless-knight",
    "machine",
    "powerful",
    "durable",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 110, grade: "EX" },
  },

  profile: {
    age: "???",
    race: "???",
    homeland: "???",
    height: "300cm",
    birthday: "???",
    story: `Unknown`,
  },
};
