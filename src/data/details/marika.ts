import type { CharacterDetails } from "../types";

export const marika: CharacterDetails = {
  skins: [
    {
      id: "marika-s1",
      name: "Love That Still Remains",
      portrait: "/characters/marika/marika-s1p.webp",
      fullBody: "/characters/marika/marika-s1.webp",
      fullBodyCensored: "/characters/marika/marika-s1c.webp",
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
          url: "https://www.youtube.com/shorts/zMfAbpvJrEQ",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2051538711024967815",
          title: "X PV",
        },
      ],
    },
    {
      id: "marika-s2",
      name: "Bare Essentials",
      portrait: "/characters/marika/marika-s2p.webp",
      fullBody: "/characters/marika/marika-s2.webp",
      fullBodyCensored: "/characters/marika/marika-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
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
      note: "Substats Priority: \n1. SPD\n2. Melee Attack\n3. Starting AP",
      weapon: { id: "lamoran-spiraldrive", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-thousand-mile-weaver",
          slot: "top",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "left",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "right",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. SPD\n2. Melee Attack\n3. Starting AP",
      weapon: { id: "lamoran-spiraldrive", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "phantom-banquet",
          slot: "top",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "left",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "right",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. SPD\n2. Melee Attack\n3. Starting AP",
      weapon: { id: "lamoran-spiraldrive", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "spd", type: "percent", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "blade-of-might",
      name: "Blade of Might",
      type: "Active",
      ap: 100,
      cooldown: 0,
      icon: "/skills/marika/ba.webp",
      description: `Strikes with a sword slash.
      Deals Slash DMG equal to {damage}% of Melee ATK to the enemy.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "swift-support",
      name: "Swift Support",
      type: "Passive",
      icon: "/skills/marika/p1.webp",
      description: `Targets hit by [Blade of Might] are inflicted with [Focused Vigil] for 2R.
      When Marika attacks a target affected by [Focused Vigil], performs a Support Attack with [Sky-Piercing Thrust].
      Each time [Sky-Piercing Thrust] is used, allied Pierce Boost increases by {pierceBoost}% for 2R. Stacks up to 10 times.

      - [Focused Vigil]: Base effect used for [Blade of Might].
      - [Sky-Piercing Thrust]: Deals Pierce DMG equal to {damage}% of Melee ATK and moves behind the target. This skill performs a Weak Point Attack if the target has a Weak Point.`,
      damage: {
        stat: "meleeAtk",
        percent: [120, 132, 144, 156, 168, 180, 192, 204, 216, 228],
        damageType: "Pierce",
      },
      values: {
        pierceBoost: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "bloodline-awakening",
      name: "Bloodline Awakening",
      type: "Active",
      ap: 10,
      cooldown: 2,
      icon: "/skills/marika/s1.webp",
      description: `Awakens the blood of Kesak flowing within.
      For 1R, increases Crit Rate by {critRate}% of your SPD and ignores enemy counterattacks. Crit DMG additionally increases by the amount of Crit Rate exceeding 100%.

      [SIGNATURE WEAPON EFFECT]:
      When using [Bloodline Awakening], recover 100% of the AP spent on movement during that turn.
      Additionally, the AP Cost of [Bloodline Awakening] is reduced by 10, and its Cooldown is reduced by 1R.`,
      values: {
        critRate: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
    {
      id: "swift-destruction",
      name: "Swift Destruction",
      type: "Passive",
      icon: "/skills/marika/p2.webp",
      description: `Targets hit by [Sky-Piercing Thrust] are inflicted with [Status Tracking] for 2R.
      When Marika performs a Support Attack against a target affected by [Status Tracking], triggers a Reaction Attack with [World-Piercing Strike].

      Each time [World-Piercing Strike] is used, for 2R, all enemies' Pierce DEF decreases by {pierceDef}.
      Stacks up to 10 times.

      - [Status Tracking]: Base effect used for [Sky-Piercing Thrust].
      - [World-Piercing Strike]: Deals Pierce DMG equal to {damage}% of Melee ATK and moves behind the target. This skill performs a Weak Point Attack if the target has a Weak Point.`,
      damage: {
        stat: "meleeAtk",
        percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
        damageType: "Pierce",
      },
      values: {
        pierceDef: [150, 160, 170, 180, 190, 200, 210, 220, 230, 240],
      },
    },
  ],

  weaponType: "Two-handed Sword",

  basic: { str: 16, tec: 4, int: 4, vit: 7, agi: 12 },

  gradeGains: {
    B: { agi: -1 },
    A: { str: -1 },
    S: { str: -1 },
    SS: { agi: -1 },
    EX1: { agi: 1 },
    EX2: { agi: 1 },
    EX3: { str: 1 },
    EX4: { str: 1 },
    EX5: { agi: 1 },
    EX6: { str: 2 },
  },

  traits: [
    "power-too-great",
    "the-result-of-purity",
    "lamora-kesak-hybrid",
    "interested-melee",
    "strong",
    "piercing",
    "swift",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 153, grade: "EX" },
  },

  profile: {
    age: "23",
    race: "Lamora",
    homeland: "City of Bel-lamori",
    height: "151cm",
    birthday: "August 25th",
    bwh: "93(J)-52-104",
    story: `Unlike many Lamora-Kesak hybrids, Marika never suffered the identity conflict so common among them. In the long history of strife between Lamorans and Kesaks, most mixed-blood children were born from circumstances far removed from love. Marika was different, her parents truly loved one another. They loved each other sincerely, and they gave that same love to Marika. Because of it, even within the chaos of the Rift, she was able to grow into an innocent and pure-hearted young woman.

    There was only one thing missing. She had no friends. That is not to say she lived in misery, but even the great love of her parents could not fully fill the heart of someone raised in a world within the Rift where family was all that existed. There remained a loneliness that could not be named.

    To fill that empty place in her heart, Marika crossed the Rift and came to the Federation, where she became one of Human God's vanguards. And now, with something close to certainty that the emptiness within her will soon be filled with warmth, Marika swings the greatsword once entrusted to her by her parents.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/TntqJGAnMGw?si=O142D1vWGoAo_cZr",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2051197527463256093",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2051593732403941508",
        title: "X PV 2",
      },
    ],
  },

  gifts: [
    { gift: "forbidden-romance", value: 30 },
    { gift: "lamora-military-ration", value: 30 },
  ],
};
