import type { CharacterDetails } from "../types";

export const nonoha: CharacterDetails = {
  skins: [
    {
      id: "nonoha-s1",
      name: "Palm Beach Vacation",
      portrait: "/characters/nonoha/nonoha-s1p.webp",
      fullBody: "/characters/nonoha/nonoha-s1.webp",
      fullBodyCensored: "/characters/nonoha/nonoha-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "nonoha-s2",
      name: "Sky-High Uniform",
      portrait: "/characters/nonoha/nonoha-s2p.webp",
      fullBody: "/characters/nonoha/nonoha-s2.webp",
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
          url: "https://youtu.be/lDcmt7XLfrQ",
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
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "whispering-breeze", level: 60, dupe: 5 },
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
      weapon: { id: "whispering-breeze", level: 60, dupe: 5 },
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
      weapon: { id: "whispering-breeze", level: 60, dupe: 5 },
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
      - [Wind's Gathering]: Increases SPD by {spd}% per stack of [Whirling Wind] the caster possesses. This effect disappears at the end of own turn.`,
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

  basic: { str: 4, tec: 5, int: 10, vit: 9, agi: 13 },

  gradeGains: {
    B: { int: -1 },
    S: { agi: 1 },
    SS: { vit: 1 },
    EX: { int: 1 },
    EX1: { int: 1 },
    EX2: { int: 1 },
    EX3: { agi: 1 },
    EX4: { vit: 1 },
    EX5: { int: 1 },
    EX6: { int: 1 },
  },

  traits: [
    "ill-do-my-best",
    "tailwind",
    "human",
    "interested-magic",
    "urgent",
    "intelligent",
  ],

  manual: {
    spd: 79,
    startApSeen: { value: 131, grade: "A" },
  },

  profile: {
    age: "19",
    race: "Human",
    homeland: "East Asia Federation, Kyoto",
    height: "162cm",
    birthday: "April 12th",
    bwh: "80(G)-48-86",
    story: `The Tranel people, known for their pragmatic mindset among the Noctis Nebula, were willing to teach their magic to Earthlings, allowing them to learn the ways of magic from various Tranel groups.

    Nonoha, a girl from Kyoto, was drawn to the power of the Aeromancers and entered Seoul's Talent Development Institute. Naturally kind-hearted, she learned simple wind magic from an Aeromancer who had taken refuge in Kyoto, using that power to fight monsters.

    Recognizing her extraordinary talent, the Aeromancer promised to protect her hometown and encouraged Nonoha to go to Neo Seoul to study magic under skilled Aeromancers.

    Now studying in Seoul, Nonoha works part-time to cover her living expenses, eager to gain practical experience as a Vanguard. She dreams of one day becoming a powerful Aeromancer capable of protecting her hometown.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/riMYD0G6fyY",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "magical-fairy-tale-book", value: 40 },
    { gift: "finest-black-tea", value: 40 },
    { gift: "americano-voucher", value: 20 },
    { gift: "sports-sneakers", value: 20 },
    { gift: "orca-documentary", value: 20 },
    { gift: "a-single-rose", value: 20 },
  ],
};
