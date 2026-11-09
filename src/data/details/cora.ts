import type { CharacterDetails } from "../types";

export const cora: CharacterDetails = {
  skins: [
    {
      id: "cora-s1",
      name: "Apple Mint Bunny Girl",
      portrait: "/characters/cora/cora-s1p.webp",
      fullBody: "/characters/cora/cora-s1.webp",
      fullBodyCensored: "/characters/cora/cora-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 650,
          available: true,
        },
      ],
      pv: [
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2105561164415742075",
          title: "Dance PV",
        },
      ],
    },
    {
      id: "cora-s2",
      name: "Cozy Love Knit",
      portrait: "/characters/cora/cora-s2p.webp",
      fullBody: "/characters/cora/cora-s2.webp",
      fullBodyCensored: "/characters/cora/cora-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 850,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/frAxsk697eI",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1969971952527057112",
          title: "X PV",
        },
        {
          source: "youtube",
          url: "https://youtu.be/NbShAIxhnzM",
          title: "Slider Preview 1",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1969974301324714192",
          title: "Slider Preview 2",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority: \n1. Magic ATK",
      weapon: { id: "orbina", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "scorching-sun",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Magic ATK",
      weapon: { id: "orbina", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-eternal-battle",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-eternal-battle",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-eternal-battle",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-eternal-battle",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Magic ATK",
      weapon: { id: "orbina", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
  ],

  skills: [
    {
      id: "summon-energy",
      name: "Summon Energy",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/cora/ba.webp",
      description: `Releases pure energy in the form of a heat ray to attack.
      Deals Heat DMG equal to {damage}% of Magic ATK to enemies within a 1m by 7m rectangular area.
      This skill cannot be used for a Weakness Attack.

      [SIGNATURE WEAPON EFFECT]:
      If HP is at 100%, the AP cost of [Summon Energy] decreases by 40%.`,
      damage: {
        stat: "magicAtk",
        percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152],
        damageType: "Heat",
      },
    },
    {
      id: "spatial-shift",
      name: "Spatial Shift",
      type: "Active",
      ap: 30,
      cooldown: 1,
      icon: "/skills/cora/s1.webp",
      description: `Crosses through space-time to reach the desired location.
      Teleports to a specified location within a radius of {distance}m.`,
      values: {
        distance: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      },
    },
    {
      id: "summon-lava",
      name: "Summon Lava",
      type: "Active",
      ap: 60,
      cooldown: 1,
      icon: "/skills/cora/s2.webp",
      description: `Deals Heat DMG equal to {damage}% of Magic ATK to enemies within a 3m circular range and creates a [Lava] zone for 5 rounds.
      Up to 3 [Lava] zones can be summoned; if more than 3 are summoned, the oldest zone disappears.

      - [Lava]: Inflicts the [Heatflow] effect on enemies within the zone.
      - [Heatflow]: Reduces Heat DEF by {heatDef}.

      [SIGNATURE WEAPON EFFECT]:
      At the start of combat, for 3 uses only, the AP cost of [Summon Lava] becomes 0 and its cooldown is reduced by 1R.
      The attack radius of [Summon Lava] and the radius of the [Lava] zone each increase by 1m.`,
      damage: {
        stat: "magicAtk",
        percent: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
        damageType: "Heat",
      },
      values: {
        heatDef: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
      },
    },
    {
      id: "forbidden-land",
      name: "Forbidden Land",
      type: "Passive",
      icon: "/skills/cora/p.webp",
      description: `When an enemy located on a [Lava] Area is hit, all [Lava] Areas on the battlefield explode at the end of the Turn.
      This explosion deals Additional Heat DMG equal to {heatBoost}% of the caster's Magic ATK to all enemies within the Area.
      This Additional Heat DMG reflects the Effect of Heat Boost at 2× potency.
      If triggered during Self's Turn, the DMG is doubled.`,
      values: {
        heatBoost: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
      },
    },
    {
      id: "volcanic-eruption",
      name: "Volcanic Eruption",
      type: "Active",
      ap: 150,
      cooldown: 2,
      icon: "/skills/cora/s3.webp",
      description: `Explodes the lava, setting the entire battlefield ablaze and unleashing the force of the subterranean depths.
      Deals Heat DMG equal to {damage}% of Magic ATK to all enemies.
      This attack increases the damage of the [Forbidden Land] skill by {dmgIncrease} times. This skill cannot trigger Weakness Attack.

      [SIGNATURE WEAPON EFFECT]:
      During combat, the AP cost of [Volcanic Eruption] decreases by 30, and the damage of [Forbidden Land] increases by 100%.`,
      damage: {
        stat: "magicAtk",
        percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
        damageType: "Heat",
      },
      values: {
        dmgIncrease: [5, 5.3, 5.6, 5.9, 6.2, 6.5, 6.8, 7.2, 7.6, 8],
      },
    },
  ],

  weaponType: "Staff",

  basic: { str: 5, tec: 7, int: 21, vit: 9, agi: 11 },

  gradeGains: {
    B: { int: -1 },
    A: { agi: -2 },
    SS: { vit: 2 },
    EX: { int: 2 },
    EX1: { int: 2 },
    EX2: { int: 1 },
    EX3: { agi: 2 },
    EX4: { vit: 2 },
    EX5: { int: 2 },
    EX6: { int: 2 },
  },

  traits: [
    "prisoner",
    "primal-core",
    "marlon",
    "interested-magic",
    "mysterious",
    "strong-willed",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 112, grade: "S" },
  },

  profile: {
    age: "Unknown",
    race: "Marlon",
    homeland: "Unknown",
    height: "163cm",
    birthday: "October 22nd",
    bwh: "73(D)-46-87",
    story: `???`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/ix6oCqjscfo",
        title: "Affection PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1970773900377399567",
        title: "X PV",
      },
    ],
  },

  gifts: [
    { gift: "finest-black-tea", value: 50 },
    { gift: "antique-music-box", value: 50 },
    { gift: "strawberry-chubby-macaron", value: 20 },
    { gift: "glazed-fruit-stick", value: 20 },
  ],
};
