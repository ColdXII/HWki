import type { CharacterDetails } from "../types";

export const kaul: CharacterDetails = {
  skins: [
    {
      id: "kaul-s1",
      name: "Unwavering Submission",
      portrait: "/characters/kaul/kaul-s1p.webp",
      fullBody: "/characters/kaul/kaul-s1.webp",
      fullBodyCensored: "/characters/kaul/kaul-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 900,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/BnBZHbiptd0",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1985282766695805092",
          title: "X PV 1",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2064580168417759273",
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
      note: "Substats Priority:\n1. Crit Damage\n2. Melee ATK\n3. Mov Speed\n\nUse this with Korabi",
      weapon: { id: "massively-vibrating-pole", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jupiter-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Damage\n2. Melee ATK\n3. Mov Speed",
      weapon: { id: "massively-vibrating-pole", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Damage\n2. Melee ATK\n3. Mov Speed\n\nUse this with Korabi",
      weapon: { id: "massively-vibrating-pole", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jupiter-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
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
      icon: "/skills/kaul/ba.webp",
      description: `Stabs with a sword to attack.
      Deals Pierce DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "reckless-leap",
      name: "Reckless Leap",
      type: "Active",
      ap: 75,
      cooldown: 2,
      icon: "/skills/kaul/s1.webp",
      description: `Leaps high into the air and strikes down at the designated location, dealing {damage}% of Melee ATK as Slash DMG to enemies within a 3m radius.
      Reduces the user's Weak Point Angle by 120º until the start of their next turn. Enemies hit have a {chance}% chance to be inflicted with [Taunt] for 1 round.

      - [Taunt]: Inflicts taunt of the target.

      [SIGNATURE WEAPON EFFECT]:
      When using [Reckless Leap], reduces DMG taken by 50% until the start of the user's next turn.`,
      damage: {
        stat: "meleeAtk",
        percent: [125, 138, 150, 163, 175, 188, 200, 213, 225, 238],
        damageType: "Slash",
      },
      values: {
        chance: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
      },
    },
    {
      id: "time-to-feast",
      name: "Time to Feast",
      type: "Passive",
      icon: "/skills/kaul/p1.webp",
      description: `After using a skill other than Standby, increases All DEF by {allDef}% of current SPD.
      This effect lasts until the start of the user's next turn.`,
      values: {
        allDef: [55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      },
    },
    {
      id: "masochistic-frenzy",
      name: "Masochistic Frenzy",
      type: "Active",
      ap: 45,
      cooldown: 2,
      icon: "/skills/kaul/s2.webp",
      description: `Lowers the shield and shifts into an aggressive stance.
      Restores HP equal to 100% of max HP and gains the [Seeker of Pleasure] effect, becoming driven solely by lust and destruction.

      - [Seeker of Pleasure]: Healing intake and Block Chance are reduced by 100%, but Melee ATK increases by {meleeAtk}%`,
      values: {
        meleeAtk: [55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      },
    },
    {
      id: "thrill-of-agony",
      name: "Thrill of Agony",
      type: "Passive",
      maxLevel: 1,
      icon: "/skills/kaul/p2.webp",
      description: `When [Masochistic Frenzy] is used, and the [Seeker of Pleasure] effect is active, the skills [Gap Stab] and [Masochistic Frenzy] are replaced with [Slaughter the Weak] and [Irresistible Urge], respectively.

      [Slaughter the Weak]:
      Can only be used when HP is above 1%.
      Swings the blade in a wide, sweeping arc to strike nearby enemies.
      Upon use, takes Fixed DMG equal to the user's Shield value + 20% of Max HP, but HP cannot drop below 1 during this turn.
      Deals Slash DMG equal to {damage}% of the user's Melee ATK to enemies within a 3m, 75° cone in front.

      [Irresistible Urge]:
      Counts as a Basic Skill and can only be used when HP is 60% or below.
      Temporarily increases Critical Rate by 100% and boosts Crit DMG by 1.75% for every 1% HP lost.
      Deals Slash DMG equal to {damage2}% of the user's Melee ATK to the target and Splash Slash DMG equal to {damage3}% of the user's Melee ATK to nearby enemies. This attack ignores counterattacks.
      After use, removes the [Seeker of Pleasure] effect and restores HP equal to 100% of Max HP.

      [SIGNATURE WEAPON EFFECT]:
      When activating [Slaughter the Weak] with HP at 99% or below, gains one instance of [Extra Action]. This effect cannot trigger during an Extra Action.`,
      damage: [
        {
          stat: "meleeAtk",
          percent: [100],
          damageType: "Slash",
          label: "AoE Damage",
        },
        {
          stat: "meleeAtk",
          percent: [150],
          damageType: "Slash",
          label: "AoE Damage",
        },
        {
          stat: "meleeAtk",
          percent: [80],
          damageType: "Slash",
          label: "AoE Splash",
        },
      ],
    },
  ],

  weaponType: "One-handed Sword & Shield",

  basic: { str: 8, tec: 6, int: 7, vit: 15, agi: 9 },

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
    "insatiable-desire",
    "unquenched-thirst",
    "kesak",
    "interested-cdmg",
    "strong",
    "aggressive",
    "radical",
  ],

  manual: {
    spd: 117,
    startApSeen: { value: 128, grade: "EX" },
  },

  profile: {
    age: "28",
    race: "Kesak",
    homeland: "Bel-Lamori",
    height: "178cm",
    birthday: "September 25th",
    bwh: "94(J)-53-106",
    story: `Once a warband warrior feared across the stars, Kaul of the Bel-Lamori was a name spoken in dread... a Kesak Sky Pirate with a trail of legendary pillages behind her.

    When the Rift Crisis struck, her fate was shrouded in rumor. Some claimed she slaughtered her own allies and vanished. Others said she died in the chaos of a world swallowed by rupture.

    But the truth was stranger still. Kaul survived. And against all odds, she made it to Earth.

    Her arrival, of course, wasn't without incident. She clashed violently with the Bureau of Rift Management, but somehow, through fire, force, and sheer stubborn will, she was brought into the fold.

    Now serving as one of the Human God's Vanguards, Kaul holds onto a simple, almost innocent dream: to save what's left of her world... and one day, return to the glory days of raiding, this time, maybe with the Human God at her side.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/t0nQSfZWt9c",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/1CSq5NhBWc0",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "300kg-dumbbell", value: 30 },
    { gift: "lamora-military-ration", value: 30 },
    { gift: "grey-goose-vodka", value: 70 },
  ],
};
