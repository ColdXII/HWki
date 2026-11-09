import type { CharacterDetails } from "../types";

export const ines: CharacterDetails = {
  skins: [
    {
      id: "ines-s1",
      name: "Cool Beach Vacation",
      portrait: "/characters/ines/ines-s1p.webp",
      fullBody: "/characters/ines/ines-s1.webp",
      fullBodyCensored: "/characters/ines/ines-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/P5y0DVRnwlk",
          title: "Official PV",
        },
      ],
    },
    {
      id: "ines-s2",
      name: "The Honeymoon Ghost",
      portrait: "/characters/ines/ines-s2p.webp",
      fullBody: "/characters/ines/ines-s2.webp",
      fullBodyCensored: "/characters/ines/ines-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/9T8ZGzO_Jao",
          title: "Official PV",
        },
      ],
    },
    {
      id: "ines-s3",
      name: "Recess Runaway",
      portrait: "/characters/ines/ines-s3p.webp",
      fullBody: "/characters/ines/ines-s3.webp",
      fullBodyCensored: "/characters/ines/ines-s3c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/JVYPdBArt6M",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1980144130077724675",
          title: "Official PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. Crit Rate (40%)\n2. Crit DMG\n3. Melee Attack",
      weapon: { id: "the-severer-of-fate", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-thousand-mile-weaver", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
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
            { stat: "critRate", type: "percent", value: 5 },
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
      might: [
        { id: "pursuit", level: 5 },
        { id: "shattering", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Rate (40%)\n2. Crit DMG\n3. Melee Attack",
      weapon: { id: "the-severer-of-fate", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-thousand-mile-weaver", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "bottom", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world", slot: "right", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "pursuit", level: 5 },
        { id: "shattering", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Rate (40%)\n2. Crit DMG\n3. Melee Attack",
      weapon: { id: "the-severer-of-fate", level: 60, dupe: 5 },
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
          set: "record-of-orphan", slot: "left", level: 25,
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
          set: "record-of-orphan", slot: "right", level: 25,
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
      id: "sky-cleaver",
      name: "Sky Cleaver",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/ines/ba.webp",
      description: `Delivers a powerful slash to enemies in front.
      Deals {damage}% Melee ATK as Slash DMG in a 3m × 5m rectangular area.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
        label: "AoE Damage",
      },
    },
    {
      id: "world-cleaver",
      name: "World Cleaver",
      type: "Active",
      ap: 90,
      cooldown: 3,
      icon: "/skills/ines/s1.webp",
      description: `Unleashes a powerful slash across a wide area in front.
      Deals Slash DMG equal to {damage}% of Melee ATK to enemies within a 7m, 150º cone.

      [SIGNATURE WEAPON EFFECT]:
      Reduces AP consumption for the [World Cleaver] skill by 50% during combat.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
        label: "AoE Damage",
      },
    },
    {
      id: "natural-form",
      name: "Natural Form",
      type: "Passive",
      icon: "/skills/ines/p.webp",
      description: `Increases Crit Rate by {critRate}% and Crit DMG by {critDmg}%.
      If there are enemies that were not defeated by an attack, performs a support attack with the [Dividing the Earth] skill.
      If there are enemies that were not defeated by a counterattack, performs a support counterattack with the [Dividing the Earth] skill.

      [Dividing the Earth]:
      Deals Slash DMG equal to {damage}% of Melee ATK to enemies within an 8m straight line in front.`,
      damage: {
        stat: "meleeAtk",
        percent: [120, 132, 144, 156, 168, 180, 192, 204, 216, 228],
        damageType: "Slash",
        label: "AoE Damage",
      },
      values: {
        critRate: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        critDmg: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Blade of Genesis",
      icon: "/skills/ines/blade-of-genesis.webp",
      description: `During battle, ATK increases by {atk}%, and Crit DMG increases by {critDmg}%.
      When performing a Weakness Attack, restores 1 Counterattack.
      
      After using [Dividing the Earth], if the target survives, performs an additional Reactions with [World Cleaver].`,
      values: {
        atk: [40, 45, 50, 55, 60, 65, 70],
        critDmg: [20, 24, 28, 32, 36, 40, 44],
      },
    },
  },

  weaponType: "Two-handed Sword",

  basic: { str: 12, tec: 11, int: 10, vit: 12, agi: 12 },

  gradeGains: {
    B: { vit: -1 },
    S: { str: 1 },
    SS: { agi: 1 },
    EX: { vit: 2 },
    EX1: { str: 2 },
    EX2: { vit: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 2 },
    EX6: { str: 2 },
  },

  traits: [
    "rising-star",
    "ocean-steps",
    "marlon",
    "interested-melee",
    "aggressive",
    "prominent",
  ],

  manual: {
    spd: 96,
    startApSeen: { value: 115, grade: "A" },
  },

  profile: {
    age: "25",
    race: "Marlon",
    homeland: "Grand Duchy of Magnal, Lissi",
    height: "173cm",
    birthday: "October 12th",
    bwh: "82(F)-51-93",
    story: `Ines grew up constantly being compared to the great Brave Duchess, who is her great aunt. Because she resembled Olivia, she was burdened with excessive expectations, which led to an obsession with not losing to anyone, just like her aunt. This pressure significantly shaped her personality.

    During the Rift Crisis, Ines, who had been training in swordsmanship within the Empire, fled to Earth following Maximilia and continued her training even on Earth.

    Wanting to become even stronger, Ines has applied to join the Vanguards.`,
    pv: [
        {
          source: "youtube",
          url: "https://youtu.be/HUJcGP3ORe0",
          title: "Affection PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1980538196300820493",
          title: "X PV",
        },
      ],
  },

  gifts: [
    { gift: "worn-banner-of-the-magnal-duchy", value: 50 },
    { gift: "300kg-dumbbell", value: 30 },
    { gift: "glazed-fruit-stick", value: 20 },
    { gift: "dartagnan-romance", value: 20 },
  ],
};
