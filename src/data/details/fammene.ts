import type { CharacterDetails } from "../types";

export const fammene: CharacterDetails = {
  skins: [
    {
      id: "fammene-s1",
      name: "Viva Magenta Bunny Girl",
      portrait: "/characters/fammene/fammene-s1p.webp",
      fullBody: "/characters/fammene/fammene-s1.webp",
      fullBodyCensored: "/characters/fammene/fammene-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 650,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/Xn9Z3SUtMF4",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2105561067346870457",
          title: "Dance PV",
        },
      ],
    },
    {
      id: "fammene-s2",
      name: "Glowing Somewhat Red",
      portrait: "/characters/fammene/fammene-s2p.webp",
      fullBody: "/characters/fammene/fammene-s2.webp",
      fullBodyCensored: "/characters/fammene/fammene-s2c.webp",
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
          url: "https://youtu.be/cSpvr9ZaLDE",
          title: "Official PV",
        },
      ],
    },
    {
      id: "fammene-s3",
      name: "Hidden Heart Lingerie",
      portrait: "/characters/fammene/fammene-s3p.webp",
      fullBody: "/characters/fammene/fammene-s3.webp",
      fullBodyCensored: "/characters/fammene/fammene-s3c.webp",
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
          url: "https://youtu.be/rQe5bXiMxQ0",
          title: "Official PV",
        },
      ],
    },
    {
      id: "fammene-s4",
      name: "???",
      portrait: "/characters/fammene/fammene-s4p.webp",
      fullBody: "/characters/fammene/fammene-s4.webp",
      fullBodyCensored: "/characters/fammene/fammene-s4c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "fammene-s6",
      name: "A Widow's Secret Weapon",
      portrait: "/characters/fammene/fammene-s6p.webp",
      fullBody: "/characters/fammene/fammene-s6.webp",
      fullBodyCensored: "/characters/fammene/fammene-s6c.webp",
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
          url: "https://youtu.be/wCWzztjYjms",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2036353138282967115",
          title: "X PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "the-anguished-rose", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-wind-that-wanders-the-world",
          slot: "top",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world",
          slot: "left",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world",
          slot: "right",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [
        "overworked",
        "persistent",
        "efficient",
        "improvising",
        "mysterious",
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "the-anguished-rose", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [
        "overworked",
        "persistent",
        "efficient",
        "improvising",
        "mysterious",
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "the-anguished-rose", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [
        "overworked",
        "persistent",
        "efficient",
        "improvising",
        "mysterious",
      ],
    },
  ],

  skills: [
    {
      id: "bladewind",
      name: "Bladewind",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/fammene/ba.webp",
      description: `Conjures blades of wind to attack.
      Deals Slash DMG equal to {damage}% of Magic ATK and knocks the target back by 1.5m.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "winds-gathering",
      name: "Wind's Gathering",
      type: "Passive",
      icon: "/skills/fammene/p.webp",
      description: `Gains the [Whirling Wind] effect whenever performing an action other than Standby.
      At the end of own turn, grants the [Wind's Gathering] effect to all allies.

      - [Whirling Wind]: Increases SPD by 3%. Stacks up to 6 times.
      - [Wind's Gathering]: Increases SPD by {spd}% per stack of [Whirling Wind] the caster possesses. This effect disappears at the end of own turn.

      [SIGNATURE WEAPON EFFECT]:
      Gains the [Whirling Wind] effect at the start of battle. (Same as the [Whirling Wind] effect caused by the level 1 [Wind's Gathering] skill).`,
      values: {
        spd: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
      },
    },
    {
      id: "wind-shield",
      name: "Wind Shield",
      type: "Active",
      ap: 45,
      cooldown: 1,
      icon: "/skills/fammene/s1.webp",
      description: `Proportionally grants the [Wind Shield] effect to one ally and self for 2R, based on own Magic ATK.

      - [Wind Shield]: Provides a shield that blocks damage equal to {shield}% of the caster's Magic ATK.`,
      values: {
        shield: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "monsoon",
      name: "Monsoon",
      type: "Active",
      ap: 90,
      cooldown: 1,
      icon: "/skills/fammene/s2.webp",
      description: `Bestows the blessing of the Great Wind.
      Can only be activated when possessing 3 or more stacks of the [Whirling Wind] effect.
      Consumes 3 stacks of [Whirling Wind] to grant all allies AP equal to {ap}% of own AP Recovery, and increases AP Recovery by the same amount granted until the start of the next round.`,
      values: {
        ap: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
      },
    },
  ],

  weaponType: "Mana Shard",

  basic: { str: 4, tec: 5, int: 11, vit: 10, agi: 14 },

  gradeGains: {
    B: { int: -1 },
    A: { agi: -1 },
    S: { vit: -1 },
    SS: { int: -1 },
    EX1: { int: 1 },
    EX2: { int: 1 },
    EX3: { agi: 1 },
    EX4: { vit: 1 },
    EX5: { int: 1 },
    EX6: { int: 1 },
  },

  traits: [
    "the-talk-of-the-town",
    "lady-of-the-breeze",
    "marlon",
    "interested-magic",
    "mysterious",
    "urgent",
    "pitiful",
  ],

  manual: {
    spd: 88,
    startApSeen: { value: 116, grade: "EX" },
  },

  profile: {
    age: "24",
    race: "Marlon",
    homeland: "Tranel Republic, Rhadam",
    height: "171cm",
    birthday: "May 16th",
    bwh: "88(G)-54-98",
    story: `Fammene, one of the Windweavers of the Windpetal Tower, was known from childhood for her beauty and her colorful romances. At the young age of nineteen, she married one of the scions of the Grand Duke of Tranel's family.

    Unfortunately for Fammene, her husband mysteriously died one night, and she was accused of causing his death during their conjugal relations, leading to her confinement in a convent. To make matters worse, the rumors from her single days painted her as a debauched woman, resulting in significant persecution. In an unfortunate turn of events that worked to her advantage, the Rift Crisis allowed her to escape from the convent.

    She later joined Crown Princess Maximilia, distinguishing herself as an outstanding Wind Guide and playing a key role in ensuring their safe arrival on Earth. She hoped to continue her work on Earth, but soon after, the arrival of people from Tranel once again complicated her situation.

    Those from Tranel who despised her spread malicious rumors, and with the princess, her primary protector, absent due to diplomatic duties in Seoul, she found herself isolated once again, caught between those who scorned her and those who leered at her. Seeking to escape the harsh refugee community, she has applied to become a Vanguard.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/G7Jafwd5JP4",
        title: "Official PV 1",
      },
      {
        source: "youtube",
        url: "https://youtu.be/zZ11JIjQJQg",
        title: "Official PV 2",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1886716741696544881",
        title: "X PV",
      },
    ],
  },

  gifts: [
    { gift: "a-single-rose", value: 30 },
    { gift: "anti-aging-skincare-product", value: 30 },
    { gift: "grey-goose-vodka", value: 70 },
  ],
};
