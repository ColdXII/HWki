import type { CharacterDetails } from "../types";

export const garud: CharacterDetails = {
  skins: [
    {
      id: "garud-s1",
      name: "???",
      portrait: "/characters/garud/garud-s1p.webp",
      fullBody: "/characters/garud/garud-s1.webp",
      fullBodyCensored: "/characters/garud/garud-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2101928180965933472",
          title: "Official PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1: EX6",
      recommended: true,
      note: "Substats Priority:\n1. Crit DMG\n2. Magic ATK",
      weapon: { id: "undying-flamefeather", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "scorching-sun",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [
        "blazing",
        "scorching",
        "doom",
        "dogmatic",
        "enlightened",
        "prophetic",
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2: EX6",
      note: "Substats Priority:\n1. Crit DMG\n2. Magic ATK",
      weapon: { id: "undying-flamefeather", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [
        "blazing",
        "scorching",
        "doom",
        "dogmatic",
        "enlightened",
        "prophetic",
      ],
    },
    {
      id: "late-game-3",
      name: "Late Game 3: EX0",
      note: "Substats Priority:\n1. Crit Rate (60%) [If not EX4 or without Eugenia]\n2. Crit DMG\n3. Magic ATK",
      weapon: { id: "undying-flamefeather", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [
        "blazing",
        "scorching",
        "doom",
        "dogmatic",
        "enlightened",
        "prophetic",
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Rate (60%) [If not EX4 or without Eugenia]\n2. Crit DMG\n3. Magic ATK",
      weapon: { id: "undying-flamefeather", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [
        "blazing",
        "scorching",
        "doom",
        "dogmatic",
        "enlightened",
        "prophetic",
      ],
    },
  ],

  skills: [
    {
      id: "incinerate",
      name: "Incinerate",
      type: "Active",
      ap: 55,
      cooldown: 0,
      icon: "/skills/garud/ba.webp",
      description: `Deals Heat DMG equal to {damage}% of Magic ATK to the target and all nearby enemies.`,
      damage: {
        stat: "magicAtk",
        percent: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
        damageType: "Heat",
        label: "AoE Damage",
      },
    },
    {
      id: "cinder",
      name: "Cinder",
      type: "Passive",
      icon: "/skills/garud/p1.webp",
      description: `On attack, permanently reduces the target's Heat DEF by {heatDef}.

      At EX6, further reduces Heat DEF by 300.`,
      values: {
        heatDef: [300, 330, 360, 390, 420, 450, 480, 510, 540, 570],
      },
    },
    {
      id: "ignite",
      name: "Ignite",
      type: "Active",
      ap: 70,
      cooldown: 1,
      icon: "/skills/garud/s1.webp",
      description: `Leaps into the air and drops onto the target, dealing Heat DMG equal to {damage}% of Magic ATK to the target and all nearby enemies.
      Ignores Counterattacks until the end of the turn in which this skill is used.

      At EX4, each successful attack with this skill permanently increases Crit Rate by 5% and Crit DMG by 10%. Stacks up to 10 times.`,
      damage: {
        stat: "magicAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Heat",
        label: "AoE Damage",
      },
    },
    {
      id: "solitude",
      name: "Solitude",
      type: "Passive",
      icon: "/skills/garud/p2.webp",
      description: `Increases DMG dealt by {dmgIncrease}% and reduces DMG taken by the same amount.

      At EX1, reduces the AP cost of all skills by 10 and increases Heat Boost by 15.`,
      values: {
        dmgIncrease: [32, 34, 36, 38, 40, 42, 44, 46, 48, 50],
      },
    },
    {
      id: "phoenix-feather",
      name: "Phoenix Feather",
      type: "Active",
      ap: 45,
      cooldown: 3,
      icon: "/skills/garud/s2.webp",
      description: `Spreads her wings around herself and soars into the air before plummeting down, dealing Heat DMG equal to {damage}% of Magic ATK and creating an [Blazing Feathers] area that follows her for 3R. Ignores Counterattacks until the end of the turn in which this skill is used.

      [Blazing Feathers]: When this skill is used and at the end of each turn, inflicts [Flame] on all enemies within the area.
      At the end of an enemy's turn, at the end of a turn in which Garud uses a skill other than Standby, or whenever Garud performs an Additional Response, deals Additional Heat DMG equal to {damage2}% of Magic ATK to all targets with [Flame].
      When the [Blazing Feathers] area disappears, all [Flame] effects on the battlefield are also removed.

      Additional DMG can only trigger once per turn. At EX2, the Additional Heat DMG can Crit.

      [SIGNATURE WEAPON EFFECT]:
      Increases the Additional Heat DMG dealt by [Flame] by 100%.`,
      damage: [
        {
          stat: "magicAtk",
          percent: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
          damageType: "Heat",
          label: "AoE Damage",
        },
        {
          stat: "magicAtk",
          percent: [63, 66, 69, 72, 75, 78, 81, 84, 87, 90],
          damageType: "Heat",
          label: "Response Damage",
        },
      ],
    },
    {
      id: "crimson-blaze",
      name: "Crimson Blaze",
      type: "Passive",
      icon: "/skills/garud/p3.webp",
      description: `Whenever an enemy acts for the first time, performs an additional Response against a random enemy with [Ignite].

      For each enemy successfully attacked by an additional Response, increases Heat Boost by {heatBoost} for the rest of the battle. Stacks up to 10 times.

      Additional Responses have a 1R cooldown for each target.`,
      values: {
        heatBoost: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
      },
    },
  ],

  weaponType: "Staff",

  basic: { str: 6, tec: 10, int: 23, vit: 14, agi: 11 },

  gradeGains: {
    B: { int: -1 },
    A: { int: -2 },
    S: { agi: -2 },
    SS: { vit: -3, agi: -1 },
    EX1: { tec: 1, int: 2 },
    EX2: { tec: 1, int: 1, vit: 1 },
    EX3: { tec: 1, int: 5, vit: 2, agi: 3 },
    EX4: { tec: 1, int: 1, agi: 2 },
    EX5: { tec: 1, int: 6, vit: 3, agi: 3 },
    EX6: { tec: 1, int: 1, vit: 2, agi: 1 },
  },

  traits: [
    "transcendent",
    "eternity",
    "phoenix",
    "interested-magic",
    "blazing",
    "prophetic",
    "enlightened",
  ],

  manual: {
    spd: 92,
    startApSeen: { value: 107, grade: "EX" },
  },

  profile: {
    age: "Unknown",
    race: "Phoenix",
    homeland: "Noctis Nebula, Jade Forest",
    height: "232cm",
    birthday: "August 8th",
    bwh: "126(P)-69-137",
    story: `Born from embers and returned from death, the phoenixes wield the destructive power of flame, yet are renowned as guardians of order and the natural cycle. Their lives follow a rhythm much like the laws of nature itself, passing through death and rebirth time and again.

    Even among their kind, Garud was known for her wisdom and dignity, as well as her grace and gentle nature. Her power was beyond compare, yet she held a deep affection for the small and fleeting lives around her. Across countless myths and histories, the name Garud endured as that of a mighty being who cherished even the briefest of lives.

    But then came the Rift Crisis, a calamity unlike anything she had witnessed in all her long existence. Garud lost the world she loved... She lost her fellow phoenixes... And yet she did not break. Neither her strength nor her spirit yielded to the Rift.

    After crossing over to Earth, Garud renewed the vow she had always lived by: to cherish the small and fleeting, and to preserve order and the natural cycle. Then, she encountered the Human God. Before this extraordinary being, Garud found herself wondering... Perhaps this single, fleeting encounter on Earth might prove longer and deeper than all the ages she had lived before.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/kl6_Io5jKSo",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2100875096844124444",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2101944425161314384",
        title: "X PV 2",
      },
    ],
  },

  gifts: [
    { gift: "antique-music-box", value: 50 },
    { gift: "snow-globe", value: 30 },
    { gift: "fire-octopus-noodles", value: 20 },
  ],
};
