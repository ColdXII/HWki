import type { CharacterDetails } from "../types";

export const maximilia: CharacterDetails = {
  skins: [
    {
      id: "maximilia-s1",
      name: "???",
      portrait: "/characters/maximilia/maximilia-s1p.webp",
      fullBody: "/characters/maximilia/maximilia-s1.webp",
      fullBodyCensored: "/characters/maximilia/maximilia-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "maximilia-s2",
      name: "Lady Violet",
      portrait: "/characters/maximilia/maximilia-s2p.webp",
      fullBody: "/characters/maximilia/maximilia-s2.webp",
      fullBodyCensored: "/characters/maximilia/maximilia-s2c.webp",
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
          url: "https://youtu.be/pRqRKHt10Qk",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2036352504418672817",
          title: "X PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority:\n1. Crit Rate\n2. Melee Attack",
      weapon: { id: "kaiserstolz", level: 60, dupe: 5 },
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
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "protection", level: 5 },
        { id: "frost", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Rate\n2. Melee Attack",
      weapon: { id: "kaiserstolz", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "gap-stab",
      name: "Gap Stab",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/maximilia/ba.webp",
      description: `Stabs with a sword to attack.
      Deals Pierce DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "guardian-barrier",
      name: "Guardian Barrier",
      type: "Active",
      ap: 70,
      cooldown: 0,
      icon: "/skills/maximilia/s1.webp",
      description: `Raises a massive [Guardian Barrier] to protect allies from enemies.
      Deals Crush DMG equal to {damage}% of Melee ATK to enemies within a wide rectangular area, knocks them back 3m, and summons [Guardian Barrier] in front.
      While [Guardian Barrier] is active, All DEF increases by {allDef}, the unit cannot be pushed or pulled, and cannot perform Responses.
      
      - [Guardian Barrier] disappears at the start of the caster's next turn.
      - [Guardian Barrier] inherits 100% of the caster's Max HP and 100% of DEF.`,
      damage: {
        stat: "meleeAtk",
        percent: [120, 132, 144, 156, 168, 180, 192, 204, 216, 228],
        damageType: "Pierce",
      },
      values: {
        allDef: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650],
      },
    },
    {
      id: "sunder-strike",
      name: "Sunder Strike",
      type: "Passive",
      icon: "/skills/maximilia/p1.webp",
      description: `When attacking, reduces the target's AP by {ap} with a chance equal to Crit Rate.
      For each point of Vitality above 16, the reduction increases by 1.

      [SIGNATURE WEAPON EFFECT]:
      If Crit Rate exceeds 100%, every 5% excess Crit Rate increases the AP reduction of [Sunder Strike] by 1, up to 5.`,
      values: {
        ap: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
      },
    },
    {
      id: "sovereigns-protection",
      name: "Sovereign's Protection",
      type: "Passive",
      icon: "/skills/maximilia/p2.webp",
      description: `Emits an aura with a 8m radius.
      Allies within the aura gain [Guard], and enemies gain [Pressure].

      - [Guard]: Increases All DEF by {allDef} and Crit Rate by {critRate}%.
      - [Pressure]: Decreases All DEF decreases by {allDef2} and SPD by {spd}%.

      [SIGNATURE WEAPON EFFECT]:
      The DEF reduction effect of [Pressure] increases proportional to your Crit Rate, up to 40% at 100% Crit Rate.`,
      values: {
        allDef: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        critRate: [22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
        allDef2: [150, 180, 210, 240, 270, 300, 330, 360, 390, 420],
        spd: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Spearhead's Gleam",
      icon: "/skills/maximilia/spearheads-gleam.webp",
      description: `When [Sunder Strike] successfully reduces an enemy's AP, restores AP to all allies equal to the amount reduced by [Sunder Strike]. (This AP restoration effect can trigger up to 10 times per round.)

      Upon successfully Blocking, immediately gains 1 Counterattack opportunity. Block Chance increases by {blockChance}% of Crit Rate. Crit DMG increases by {critDmg}% of Crit Rate.

      The [Guard] effect from Sovereign's Protection also applies to yourself.
      Enables the use of [Resolve].
      Block Chance is capped at 75%.`,
      values: {
        blockChance: [40, 50, 60, 70, 80, 90, 100],
        critDmg: [50, 60, 70, 80, 90, 100, 110],
      },
    },
    skills: [
      {
        id: "resolve",
        name: "Resolve",
        type: "Active",
        ap: 10,
        cooldown: 2,
        maxLevel: 1,
        icon: "/skills/maximilia/d1.webp",
        description: `For 2R, SPD increases by {buff}% and Melee ATK increases by {buff}%. While this effect is active, [Guardian Barrier] cannot be used.
        [Gap Stab] is replaced with [Spatial Rend].`,
        values: {
          buff: [300],
        },
      },
      {
        id: "spatial-rend",
        name: "Spatial Rend",
        type: "Active",
        ap: 60,
        cooldown: 0,
        maxLevel: 1,
        icon: "/skills/maximilia/d2.webp",
        description: `Attack enemies within a 5m, 160° fan-shaped area, dealing Slash DMG equal to {damage}% of Melee ATK.`,
        damage: { stat: "meleeAtk", percent: [110], damageType: "Slash" },
      },
    ],
  },

  weaponType: "One-handed Sword & Shield",

  basic: { str: 5, tec: 5, int: 5, vit: 14, agi: 8 },

  gradeGains: {
    B: { vit: -1 },
    A: { vit: -1 },
    S: { str: -1 },
    SS: { agi: -1 },
    EX1: { vit: 1 },
    EX2: { vit: 1 },
    EX3: { vit: 1 },
    EX4: { str: 1 },
    EX5: { agi: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "imperial-bond",
    "the-last-heir",
    "marlon",
    "interested-hp",
    "righteous",
    "durable",
    "strong-willed",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 112, grade: "EX" },
  },

  profile: {
    age: "26",
    race: "Marlon",
    homeland: "The Empire, Kaisersberg",
    height: "184cm",
    birthday: "November 12nd",
    bwh: "102(I)-61-113",
    story: `Maximilia, the First Princess of the Empire, was born as the rightful heir to the imperial throne. From a young age, she studied martial arts, politics, and military science, delving deeply into her duties and role.

    Though the Empire she sought to protect fell to ruin due to the Rifts, she understood her responsibility all too well. She was no longer a princess, but she rallied the survivors and successfully led the Great Escape.

    Thanks to her leadership, many of those she led arrived safely on Earth, and under her efforts, they were integrated into Earth's society in exchange for their pledge to fight on behalf of their new home.

    Since then, she has continued to support her people in their difficult settlement, contemplating whom she must now protect.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/gGbvVoARUUg",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2036006032112279747",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2036352377863966901",
        title: "X PV 2",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2057071478240371128",
        title: "X PV 3",
      },
    ],
  },

  gifts: [
    { gift: "strategy-simulation-board-game", value: 50 },
    { gift: "magical-fairy-tale-book", value: 30 },
    { gift: "americano-voucher", value: 20 },
  ],
};
