import type { CharacterDetails } from "../types";

export const mira: CharacterDetails = {
  skins: [
    {
      id: "mira-s1",
      name: "Oath of the Tree Peony",
      portrait: "/characters/mira/mira-s1p.webp",
      fullBody: "/characters/mira/mira-s1.webp",
      fullBodyCensored: "/characters/mira/mira-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 700,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://www.youtube.com/shorts/qh-j74HSX8Q",
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
      note: "Substats Priority:\n1. Max HP\n2. SPD",
      weapon: { id: "eleuthia", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound",
          slot: "top",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "right",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Max HP\n2. SPD",
      weapon: { id: "eleuthia", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Max HP\n2. SPD",
      weapon: { id: "eleuthia", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
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
      icon: "/skills/mira/ba.webp",
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
      icon: "/skills/mira/p1.webp",
      description: `When a holder of [Bound Master] attacks for the first time each round, gains stacks of [Dawnlight] equal to the AP spent on that attack.

      - [Dawnlight]: At the start of each round, converts into [Radiance of Oath] for 1R.`,
    },
    {
      id: "afterimage-of-stars",
      name: "Afterimage of Stars",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/mira/s1.webp",
      description: `Smoothly cuts through nearby enemies.
      Deals Slash DMG equal to {damage}% of Melee ATK.
      For each enemy hit, grants the holder of [Bound Master] 1 stack of [Starlit Veil].

      - [Starlit Veil]: Grants a Shield equal to 100% of Base Max HP + {shield}% of [Radiance of Oath] stacks for 1R.

      [SIGNATURE WEAPON EFFECT]:
      When using [Afterimage of Stars], the effect is also applied to yourself.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
      values: {
        shield: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
      },
    },
    {
      id: "veil-of-stars",
      name: "Veil of Stars",
      type: "Passive",
      maxLevel: 1,
      icon: "/skills/mira/p2.webp",
      description: `At the start of each turn, pulls nearby enemies within a 9m radius toward yourself.`,
    },
    {
      id: "inscribed-trail-of-stars",
      name: "Inscribed Trail of Stars",
      type: "Active",
      ap: 80,
      cooldown: 1,
      icon: "/skills/mira/s2.webp",
      description: `Gathers the power of light and hurls it at the enemy.
      Deals Immaterial DMG equal to {damage}% of Magic ATK.
      For each stack of [Radiance of Oath] you possess, deals Additional Immaterial DMG equal to {damage2}% of Magic ATK.
      Afterward, grants the holder of [Bound Master] 1 stack of [Arcane Bond] for each stack of [Radiance of Oath] you possess.

      - [Radiance of Oath]: A stacking effect gained through [Master-Servant Bond].
      - [Bound Master]: An effect gained through [A Knight's Oath]. Mira and Mirana's skills are empowered based on the AP Cost of skills used by the holder of this effect.
      - [Arcane Bond]: At the start of the [Bound Master] holder's turn, consumes all [Arcane Bond] stacks and grants AP equal to 40% of the number of stacks consumed.`,
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

  basic: { str: 4, tec: 4, int: 10, vit: 16, agi: 2 },

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
    "interested-hp",
    "competent",
    "noticeable",
    "heavy",
  ],

  manual: {
    spd: 85,
    startApSeen: { value: 106, grade: "EX" },
  },

  profile: {
    age: "146",
    race: "Half-Elf",
    homeland: "Kingdom of Platinum Bough, Silverstream Gate",
    height: "168cm",
    birthday: "August 27th",
    bwh: "94(J)-51-106",
    story: `Mira and Mirana were twin half-blood sisters born of a human parent, a lineage looked down upon among the Highland Elves. With no companions in their childhood, the two sisters grew up relying upon no one but each other. Thus, when they were granted the honor of becoming Knights of the Golden Ratio, royal knights entrusted with guarding their Queen, the sisters rejoiced beyond measure.

    Yet before long, the Rift Crisis descended upon the world. Though the twins sought to fulfill their duties as knights, the Queen ultimately left them behind in order to shield them from the vengeance of the spirits. To the sisters, it felt as though they had once again been abandoned.

    Afterward, the twins volunteered to guard the rear of the refugee procession, eventually becoming separated from the Queen as they journeyed across Siberia and into Earth's lands. Following the path laid before them by duty alone, the sisters endured countless hardships before finally reaching the Federation.

    Now reunited with their Queen at last, Mira and Mirana have pledged themselves to the Eternal God, wishing only to serve at his side and guard him for all the years yet to come.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/_lyOGiknabs",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2059900509474205982",
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
    { gift: "queens-tiara", value: 120 },
    { gift: "finest-black-tea", value: 40 },
    { gift: "a-single-rose", value: 20 },
  ],
};
