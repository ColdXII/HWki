import type { CharacterDetails } from "../types";

export const mu_yingying: CharacterDetails = {
  skins: [
    {
      id: "muyingying-s1",
      name: "???",
      portrait: "/characters/muyingying/muyingying-s1p.webp",
      fullBody: "/characters/muyingying/muyingying-s1.webp",
      fullBodyCensored: "/characters/muyingying/muyingying-s1c.webp",
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
          url: "https://www.youtube.com/shorts/acnW8DfmOLI",
          title: "Official PV 1",
        },
        {
          source: "youtube",
          url: "https://youtu.be/o7D3So5Kztc",
          title: "Official PV 2",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2111021870619439360",
          title: "X PV 1",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2111021985681887653",
          title: "X PV 2",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. Crit Damage\n2. Melee ATK",
      weapon: { id: "tactical-suppression-gear-es01", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
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
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Damage\n2. Melee ATK",
      weapon: { id: "tactical-suppression-gear-es01", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jupiter-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-four-horseman",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-four-horseman",
          slot: "right",
          level: 25,
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
      note: "Substats Priority:\n1. Crit Damage\n2. Melee ATK",
      weapon: { id: "tactical-suppression-gear-es01", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
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
      id: "suppression-strike",
      name: "Suppression Strike",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/muyingying/ba.webp",
      description: `Swings a stun baton to strike enemies.
      Deals Crush DMG equal to {damage}% of Melee ATK to enemies within a 120° fan-shaped area with a 2m radius.

      [SIGNATURE WEAPON EFFECT]:
      Converts the Crush DMG of [Suppression Strike] into Electric DMG and increases its range to 5m.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Crush",
      },
    },
    {
      id: "surprise-cover",
      name: "Surprise Cover",
      type: "Passive",
      icon: "/skills/muyingying/p1.webp",
      description: `If any ally is in Stealth at the start of any turn, the Crit Rate of allies in Stealth increases by {critRate}% until the end of the turn.
      From the start to the end of any turn, All DEF increases by {allDef}% of Electric DEF.`,
      values: {
        critRate: [55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        allDef: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
      },
    },
    {
      id: "plasma-burst",
      name: "Plasma Burst",
      type: "Active",
      ap: 60,
      cooldown: 1,
      icon: "/skills/muyingying/s1.webp",
      description: `Unleashes a powerful electric discharge, creating an electrified field for a short duration.
      Deals Electric DMG equal to {damage}% of Melee ATK to enemies within a 5m radius.
      On a successful hit, inflicts [Electrocution] for 2R.

      - [Electrocution]: When hit, deals Additional Electric DMG equal to {damage2}% of the caster's Electric DEF to enemies within a 5m radius.
      When hit by Electric DMG, this effect triggers one additional time. DMG from [Electrocution] only occurs after [Plasma Burst] has been used at least once.

      At EX1, also inflicts Taunt for 2R on a successful hit.
      At EX2, adds Additional Electric DMG equal to 20% of Electric DEF.`,
      damage: [
        {
          stat: "meleeAtk",
          percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152],
          damageType: "Electric",
        },
        {
          stat: "meleeAtk",
          percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
          damageType: "Electric",
        },
      ],
      values: {
        shield: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "haste",
      name: "Haste",
      type: "Passive",
      maxLevel: 1,
      icon: "/skills/muyingying/p2.webp",
      description: `If you are within the damage area generated by [Electrocution], recover 5% of Max HP and gain 1 stack of [Power Charge].

      - [Power Charge]: Melee ATK +20%, Electric Boost +15%, and Crit Rate +4%. Stacks up to 10 times.
      At the start of any turn, if [Power Charge] has reached 10 stacks, removes all stacks of [Power Charge] and gains [Overcharge].
      
      - [Overcharge]: Melee ATK +400%, Electric Boost +300%, and Crit Rate +80%.
      Cannot gain [Power Charge] while [Overcharge] is active.

      At EX4, [Power Charge] grants an additional 5% Electric Boost & [Overcharge] grants an additional 100% Electric Boost.
      At EX6, [Power Charge] grants an additional 1% Crit Rate & [Overcharge] grants an additional 20% Crit Rate.`,
    },
    {
      id: "power-discharge",
      name: "Power Discharge",
      type: "Active",
      ap: 120,
      cooldown: 0,
      icon: "/skills/muyingying/s2.webp",
      description: `Releases all the electricity stored within the body at once.
      Can only be activated while [Overcharge] is active.

      Leaps to the designated location, dealing Electric DMG equal to {damage}% of Melee ATK to enemies within a 7m radius.
      Afterward, [Overcharge] is removed.`,
      damage: {
        stat: "meleeAtk",
        percent: [600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140],
        damageType: "Electric",
      },
    },
    {
      id: "power-charge",
      name: "Power Charge",
      type: "Passive",
      icon: "/skills/muyingying/p1.webp",
      description: `After attacking while [Overcharge] is active, performs an Additional Response using [Thunderstrike].

      [Thunderstrike]:
      Unleashes a shower of lightning bolts. Deals Electric DMG equal to {damage}% of Melee ATK to enemies within a 120º fan-shaped area with a 7m radius.`,
      damage: {
        stat: "meleeAtk",
        percent: [120, 132, 144, 156, 168, 180, 192, 204, 216, 228],
        damageType: "Electric",
      },
    },
  ],

  weaponType: "Club & Shield",

  basic: { str: 9, tec: 10, int: 6, vit: 15, agi: 3 },

  gradeGains: {
    EX1: { str: 1, tec: 1, vit: 3 },
    EX2: { tec: 1 },
    EX3: { str: 2, tec: 1, vit: 4 },
    EX4: { tec: 1 },
    EX5: { str: 3, tec: 1, vit: 5 },
    EX6: { tec: 1 },
  },

  traits: [
    "static-electricity",
    "sense-of-belonging",
    "human",
    "interested-eletric",
    "strong-willed",
    "heavy",
    "precarious",
  ],

  manual: {
    spd: 81,
    startApSeen: { value: 163, grade: "EX" },
  },

  profile: {
    age: "34",
    race: "Human",
    homeland: "East Asia Federation",
    height: "155cm",
    birthday: "November 11th",
    bwh: "94(L)-52-96",
    story: `Secretary of the Classified Security Division at the Bureau of Rift Management. Despite her youthful appearance, Mu Yingying is a seasoned veteran with over a decade of field experience. Her colleagues don't turn to her because she has all the answers. They rely on her because she knows how to distinguish what is certain from what remains unknown, and because even when faced with the unexplained, she always finds a way to bring everyone home safely.

    The Classified Security Division's office, once bustling with colleagues, is now occupied by Yingying alone. Although new cases have become increasingly rare, her work continues, from inspecting sealed entities to cross-referencing old records. Yet years spent quietly preventing disasters are difficult to quantify as tangible achievements.

    When the Bureau begins reviewing its divisions for possible consolidation, Yingying takes it upon herself to assist other departments in their field operations, determined to prove that the Classified Security Division still matters, and thus has an important role to play.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/qgb5-aeZ9ps",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2110324277652414742",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2110324809620164986",
        title: "X PV 2",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2112438736210563539",
        title: "X PV 3",
      },
    ],
  },

  gifts: [
    { gift: "anti-aging-skincare-product", value: 30 },
    { gift: "hotel-restaurant-meal-voucher", value: 30 },
    { gift: "grey-goose-vodka", value: 70 },
  ],
};
