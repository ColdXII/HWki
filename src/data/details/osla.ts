import type { CharacterDetails } from "../types";

export const osla: CharacterDetails = {
  skins: [
    {
      id: "osla-s1",
      name: "Torta Traditional Costume",
      portrait: "/characters/osla/osla-s1p.webp",
      fullBody: "/characters/osla/osla-s1.webp",
      fullBodyCensored: "/characters/osla/osla-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 650,
          available: true,
        },
      ],
    },
    {
      id: "osla-s2",
      name: "Work Memo",
      portrait: "/characters/osla/osla-s2p.webp",
      fullBody: "/characters/osla/osla-s2.webp",
      fullBodyCensored: "/characters/osla/osla-s2c.webp",
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
          url: "https://youtu.be/sbH5wpony8s",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1881644338788417683",
          title: "X PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1: Crit",
      recommended: true,
      note: "Substats Priority:\n1. Crit Rate (100%)\n2. Max HP\n\nREAD HER WEAPON",
      weapon: { id: "the-grand-ancestors-spirit", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "blessing-of-dawn",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "blessing-of-dawn",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Magic ATK\n2. Max HP",
      weapon: { id: "the-grand-ancestors-spirit", level: 60, dupe: 5 },
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
          slot: "bottom",
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
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Magic ATK\n2. Max HP",
      weapon: { id: "the-grand-ancestors-spirit", level: 60, dupe: 5 },
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
          slot: "bottom",
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
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "hide-splitter",
      name: "Hide Splitter",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/osla/ba.webp",
      description: `Swings a deadly Torturas to deal Slash DMG equal to {damage}% of Melee ATK to the enemy.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
    },
    {
      id: "predatory-range",
      name: "Predatory Range",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/osla/s1.webp",
      description: `Throws a chained Torturas to pull the enemy closer.
      Deals Slash DMG equal to {damage}% of Melee ATK and removes Counterattack.
      If the target is a large enemy, instead of pulling them closer, moves self to the front of the enemy.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "afflict-pain",
      name: "Afflict Pain",
      type: "Passive",
      icon: "/skills/osla/p1.webp",
      description: `Each time an attack is successfully made, has a {chance}% chance to Taunt the target.

      [SIGNATURE WEAPON EFFECT]:
      During battle, the probability of applying the [Taunt] effect from the [Afflict Pain] skill increases by an additional 43%`,
      values: {
        chance: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "cry-of-the-ancients",
      name: "Cry of the Ancients",
      type: "Active",
      ap: 45,
      cooldown: 2,
      icon: "/skills/osla/s2.webp",
      description: `With a shout filled with intense determination, demoralizes enemies and boosts own resolve.
      Deals Immaterial DMG equal to {damage}% of Magic ATK.
      Hit enemies lose 10 AP, while self gains the [Primal Regeneration] effect for 2R and Aggro Adjustment increases.

      - [Primal Regeneration]: Whenever damaged, recovers HP by {recoverHp}% of Magic ATK.
      This recovery amount increases as the current HP ratio decreases, up to 4 times at 40% HP ratio.

      [SIGNATURE WEAPON EFFECT]:
      In addition, if the current HP of the unit falls below 30% upon receiving an attack, restore 10% of Max HP.`,
      damage: {
        stat: "magicAtk",
        percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
        damageType: "Immaterial",
      },
      values: {
        recoverHp: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "endless-malice",
      name: "Endless Malice",
      type: "Passive",
      icon: "/skills/osla/p2.webp",
      description: `When attacked by an enemy, reflects the damage received back to the attacker, dealing Fixed DMG equal to {fixedDmg}% of the damage taken.
      This reflected damage increases as own current HP ratio decreases, up to 4 times at 40% HP.`,
      values: {
        fixedDmg: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
  ],

  weaponType: "Torturas",

  basic: { str: 14, tec: 8, int: 6, vit: 11, agi: 9 },

  gradeGains: {
    B: { str: 1 },
    A: { vit: 1 },
    S: { str: 1 },
    EX: { vit: 1 },
    EX1: { str: 2 },
    EX2: { str: 1 },
    EX3: { vit: 1 },
    EX4: { str: 1 },
    EX5: { vit: 1 },
    EX6: { str: 2 },
  },

  traits: [
    "oath-of-magnatira",
    "savage-regeneration",
    "torta",
    "interested-hp",
    "muscular",
    "radical",
  ],

  manual: {
    spd: 92,
    startApSeen: { value: 118, grade: "SS" },
  },

  profile: {
    age: "26",
    race: "Torta",
    homeland: "Tortaria, Fjord of Blades",
    height: "181cm",
    birthday: "Secret",
    bwh: "111(I)-68-123",
    story: `Champion of Torta, and daughter of the Grand Warrior Magna. Osla Magnatira was strong from birth. She vowed to the god of Torta that she would never be with a man unless he was stronger than herself. In her 26 years of life, she had yet to meet a single man stronger than her, other than her father.

    Though she held no belief in the god of Torta, she felt that breaking her vow as a Magnatira would be a stain upon the name of her father. So, even in her moments of regret, she waited for a groom stronger than her to appear.

    After escaping the Rift under Maximilia's command, she began a new life on Earth. She hoped that here she would find her match, and upon hearing her story, the Bureau of Rift Management told her about the power of the Human Gods. Hearing this, she decided to wait within the bureau as a reserve Vanguard, hoping for a Human God worthy of taking her hand.`,
    pv: [
      {
        source: "youtube",
        url: "https://www.youtube.com/shorts/noG4OAgPeXU",
        title: "Ads PV 1",
      },
      {
        source: "youtube",
        url: "https://www.youtube.com/shorts/arfTAeXwuxs",
        title: "Ads PV 2",
      },
    ],
  },

  gifts: [
    { gift: "300kg-dumbbell", value: 40 },
    { gift: "hotel-restaurant-meal-voucher", value: 30 },
    { gift: "hamburg-steak", value: 20 },
    { gift: "soju", value: 20 },
  ],
};
