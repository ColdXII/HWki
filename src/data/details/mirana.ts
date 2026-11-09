import type { CharacterDetails } from "../types";

export const mirana: CharacterDetails = {
  skins: [
    {
      id: "mirana-s1",
      name: "Vow of the Tree Peony",
      portrait: "/characters/mirana/mirana-s1p.webp",
      fullBody: "/characters/mirana/mirana-s1.webp",
      fullBodyCensored: "/characters/mirana/mirana-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 700,
          available: true,
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. Magic ATK\n2. SPD",
      weapon: { id: "chrysaor", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Magic ATK\n2. SPD",
      weapon: { id: "chrysaor", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Magic ATK\n2. SPD",
      weapon: { id: "chrysaor", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "strike-of-oath",
      name: "Strike of Oath",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/mirana/ba.webp",
      description: `Cuts through enemies like flowing water.
      Deals Slash DMG equal to {damage}% of Melee ATK.
      For each stack of [Radiance of Oath] possessed, deals Additional Immaterial DMG equal to {damage2}% of Magic ATK.`,
      damage: [
        {
          stat: "magicAtk",
          percent: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
          damageType: "Slash",
        },
        {
          stat: "magicAtk",
          percent: [3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4],
          damageType: "Immaterial",
        },
      ],
    },
    {
      id: "master-servant-bond",
      name: "Master-Servant Bond",
      type: "Passive",
      maxLevel: 1,
      icon: "/skills/mirana/p.webp",
      description: `When a holder of [Bound Master] attacks for the first time each round, gains stacks of [Dawnlight] equal to the AP spent on that attack.

      - [Dawnlight]: At the start of each round, converts into [Radiance of Oath] for 1R.`,
    },
    {
      id: "radiant-distortion",
      name: "Radiant Distortion",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/mirana/s1.webp",
      description: `Traces a path of light to cut down the enemy's legs.
      Deals Immaterial DMG equal to {damage}% of Magic ATK and inflicts [Fading Starlight] and [Slow] for 1R.

      - [Fading Starlight]: Reduces Immaterial DEF by 120 + {immaterialDef}% of [Radiance of Oath] stacks. Stacks up to 10 times.
      - [Slow]: SPD is reduced by 40%.`,
      damage: {
        stat: "magicAtk",
        percent: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
        damageType: "Immaterial",
      },
      values: {
        immaterialDef: [320, 340, 360, 380, 400, 420, 440, 460, 480, 500],
      },
    },
    {
      id: "shattered-trail-of-light",
      name: "Shattered Trail of Light",
      type: "Active",
      ap: 80,
      cooldown: 1,
      icon: "/skills/mirana/s2.webp",
      description: `Throws a spear of light at the enemy.
      Deals Immaterial DMG equal to {damage}% of Magic ATK.
      For each stack of [Radiance of Oath] you possess, deals additional Immaterial DMG equal to {damage2}% of Magic ATK.
      Afterward, grants the holder of [Bound Master] 1 stack of [Arcane Bond] for each stack of [Radiance of Oath] you possess.

      - [Radiance of Oath]: A stacking effect gained through [Master-Servant Bond].
      - [Bound Master]: An effect gained through [A Knight's Oath]. Mira and Mirana's skills are empowered based on the AP Cost of skills used by the holder of this effect.
      - [Arcane Bond]: At the start of the [Bound Master] holder's turn, consumes all [Arcane Bond] stacks and grants AP equal to 40% of the stacks consumed.`,
      damage: [
        {
          stat: "magicAtk",
          percent: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
          damageType: "Immaterial",
        },
        {
          stat: "magicAtk",
          percent: [10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15],
          damageType: "Immaterial",
        },
      ],
    },
  ],

  weaponType: "Torturas",

  basic: { str: 4, tec: 4, int: 16, vit: 10, agi: 10 },

  gradeGains: {
    B: { int: -1 },
    A: { vit: -1 },
    S: { int: -1 },
    SS: { vit: -1 },
    EX1: { vit: 1 },
    EX2: { vit: 2 },
    EX3: { int: 1 },
    EX4: { int: 1 },
    EX5: { int: 2 },
    EX6: { vit: 3, agi: 2 },
  },

  traits: [
    "a-heart-that-follows",
    "a-knight-s-oath",
    "half-elf",
    "interested-magic",
    "improvising",
    "sharp",
    "barraging",
  ],

  manual: {
    spd: 96,
    startApSeen: { value: 112, grade: "EX" },
  },

  profile: {
    age: "146",
    race: "Half-Elf",
    homeland: "Kingdom of Platinum Bough, Silverstream Gate",
    height: "168cm",
    birthday: "August 27th",
    bwh: "84(F)-49-92",
    story: `Mira and Mirana were twin half-blood sisters born of a human parent, a lineage looked down upon among the Highland Elves. With no companions in their childhood, the two sisters grew up relying upon no one but each other. Thus, when they were granted the honor of becoming Knights of the Golden Ratio, royal knights entrusted with guarding their Queen, the sisters rejoiced beyond measure.

    Yet before long, the Rift Crisis descended upon the world. Though the twins sought to fulfill their duties as knights, the Queen ultimately left them behind in order to shield them from the vengeance of the spirits. To the sisters, it felt as though they had once again been abandoned.

    Afterward, the twins volunteered to guard the rear of the refugee procession, eventually becoming separated from the Queen as they journeyed across Siberia and into Earth's lands. Following the path laid before them by duty alone, the sisters endured countless hardships before finally reaching the Federation.

    Now reunited with their Queen at last, Mira and Mirana have pledged themselves to the Eternal God, wishing only to serve at his side and guard him for all the years yet to come.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/h2uKr-0g8ZQ",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2059545076087546353",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2061742725574336807",
        title: "X PV 2",
      },
    ],
  },

  gifts: [
    { gift: "snow-globe", value: 40 },
    { gift: "forbidden-romance", value: 20 },
    { gift: "glazed-fruit-stick", value: 20 },
    { gift: "human-gods-hair", value: 70 },
  ],
};
