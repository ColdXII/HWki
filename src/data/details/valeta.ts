import type { CharacterDetails } from "../types";

export const valeta: CharacterDetails = {
  skins: [
    {
      id: "valeta-s1",
      name: "Pure Angel",
      portrait: "/characters/valeta/valeta-s1p.webp",
      fullBody: "/characters/valeta/valeta-s1.webp",
      fullBodyCensored: "/characters/valeta/valeta-s1c.webp",
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
          url: "https://youtu.be/il5hYHCfALk",
          title: "Official PV",
        },
      ],
    },
    {
      id: "valeta-s3",
      name: "Lock of Rapture",
      portrait: "/characters/valeta/valeta-s3p.webp",
      fullBody: "/characters/valeta/valeta-s3.webp",
      fullBodyCensored: "/characters/valeta/valeta-s3c.webp",
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
          url: "https://youtu.be/FkOlsm2f81A",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2030932909377610122",
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
      note: "Substats Priority: \n1. Magic Attack\n2. AP Recovery",
      weapon: { id: "the-bloody-acacia", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Magic Attack\n2. AP Recovery",
      weapon: { id: "the-bloody-acacia", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Magic Attack\n2. AP Recovery",
      weapon: { id: "the-bloody-acacia", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "spinning-slash",
      name: "Spinning Slash",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/valeta/ba.webp",
      description: `Conjures blades of wind to attack.
      Deals Slash DMG equal to {damage}% of Magic ATK and knocks the target back by 1.5m.

      [SIGNATURE WEAPON EFFECT]:
      During battle, the AP cost of Basic Attack skills decreases by 5.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "light-in-the-darkness",
      name: "Light in the Darkness",
      type: "Passive",
      icon: "/skills/valeta/p1.webp",
      description: `When using a skill or attacking, restores HP to self and allies within a 5m radius based on {recoverHp}% of Magic ATK.`,
      values: {
        recoverHp: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
    {
      id: "sword-of-the-unknown",
      name: "Sword of the Unknown",
      type: "Active",
      ap: 45,
      cooldown: 3,
      icon: "/skills/valeta/s1.webp",
      description: `Channels divine power into the sword through prayer.
      Grants self a shield effect equal to {shield}% of Magic ATK for 3R and the [Sword of the Unknown] effect.

      [Sword of the Unknown]: Basic attacks additionally deal Immaterial DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
        damageType: "Immaterial",
      },
      values: {
        shield: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
      },
    },
    {
      id: "exorcist-s-crusade",
      name: "Exorcist's Crusade",
      type: "Passive",
      icon: "/skills/valeta/p2.webp",
      description: `On a successful attack, gains [Salvation] and [Judgment] effects.

      - [Salvation]: Increases own Magic ATK by {buff}%. Stacks up to 9 times.
      - [Judgment]: Increases own Melee ATK by {buff}%. Stacks up to 9 times.

      [SIGNATURE WEAPON EFFECT]:
      Gains 3 stacks of [Judgment] at the start of the battle.`,
      values: {
        buff: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
    {
      id: "dark-sacrament",
      name: "Dark Sacrament",
      type: "Active",
      ap: 15,
      cooldown: 1,
      icon: "/skills/valeta/s2.webp",
      description: `Can only be activated while possessing 3 or more [Judgment] effects. Grants 3 stacks of [Angel of Judgment].

      [Angel of Judgment]: Replaces the [Spinning Slash] skill with [Thornwhip of Condemnation].
      At the end of the turn, 1 stack of [Angel of Judgment] is consumed.
      While [Angel of Judgment] is active, [Judgment] and [Salvation] effects cannot be gained.

      [Thornwhip of Condemnation]:
      Strikes enemies with divine power.
      Deals Slash DMG equal to {damage}% of Melee ATK to enemies within a 5m 120° fan-shaped area,
      And deals Additional Immaterial DMG equal to {damage2}% of Magic ATK for each [Judgment] effect possessed.`,
      damage: [
        {
          stat: "meleeAtk",
          percent: [90, 99, 108, 117, 126, 135, 144, 153, 162, 171],
          damageType: "Slash",
        },
        {
          stat: "magicAtk",
          percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
          damageType: "Immaterial",
        },
      ],
      values: {
        ap: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
      },
    },
  ],

  weaponType: "One-handed Sword",

  basic: { str: 9, tec: 7, int: 8, vit: 12, agi: 13 },

  gradeGains: {
    B: { str: -1 },
    A: { int: -1 },
    S: { agi: -1 },
    SS: { str: -1 },
    EX1: { int: 1 },
    EX2: { str: 1 },
    EX3: { int: 1 },
    EX4: { agi: 1 },
    EX5: { str: 1 },
    EX6: { int: 1 },
  },

  traits: [
    "iron-blooded-ascetics",
    "gate-guardian",
    "marlon",
    "interested-magic",
    "stubborn",
    "accurate",
    "sensitive",
  ],

  manual: {
    spd: 93,
    startApSeen: { value: 120, grade: "EX" },
  },

  profile: {
    age: "31",
    race: "Marlon",
    homeland: "The Empire, Bethelburg",
    height: "160cm",
    birthday: "February 21st",
    bwh: "91(J)-48-91",
    story: `The nickname "The Gate Guardian" is not exactly an honorable one. Valeta, who was responsible for overseeing the novice nuns at the Aradal Snow Mountain Convent, was known for excessively controlling the novices, often found guarding the door. Out of resentment for her strict rules, the novice nuns gave her the nickname "The Gate Guardian."

    When the Rift Crisis began and they moved to Earth, Valeta returned to active duty, fighting on the front lines. She devoted herself to protecting the novice knight-nuns, and the nickname "Guardian of the Gate" gained much more honor compared to before.

    After arriving on Earth, the order no longer recruited new knight-nuns, leading Valeta to hope to serve as a Vanguard under the Human God.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/d7qqIKrA8U0",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/_YNy07gAhtA",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "a-single-rose", value: 30 },
    { gift: "finest-black-tea", value: 40 },
  ],
};
