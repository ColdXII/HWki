import type { CharacterDetails } from "../types";

export const palekar: CharacterDetails = {
  skins: [
    {
      id: "palekar-s1",
      name: "Teachings of the Silent Night",
      portrait: "/characters/palekar/palekar-s1p.webp",
      fullBody: "/characters/palekar/palekar-s1.webp",
      fullBodyCensored: "/characters/palekar/palekar-s1c.webp",
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
          url: "https://youtu.be/Kp7mqInUOL0",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2003346927031898455",
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
      note: "Substats Priority: \n1. Evade (200)\n2. Crit Rate (60-70%)\n3. Crit Damage",
      weapon: { id: "thread-of-ages", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
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
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Evade (200)\n2. Crit Rate (60-70%)\n3. Crit Damage",
      weapon: { id: "thread-of-ages", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Evade (200)\n2. Crit Rate (60-70%)\n3. Crit Damage",
      weapon: { id: "thread-of-ages", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "dance-of-primal-grace",
      name: "Dance of Primal Grace",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/palekar/ba.webp",
      description: `Elegantly slashes the target like a dance,
      Dealing Slash DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "blade-dance",
      name: "Blade Dance",
      type: "Passive",
      icon: "/skills/palekar/p1.webp",
      description: `Increases the user's Combat Skill DMG by {combatSkillDmg}% of their Base Evade stat.
      This effect can increase Combat Skill DMG by up to {combatSkillDmg2}.`,
      values: {
        combatSkillDmg: [5, 6.25, 7.5, 8.75, 10, 11.25, 12.5, 13.75, 15, 16.25],
        combatSkillDmg2: [10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 32.5],
      },
    },
    {
      id: "trajectory-of-severance",
      name: "Trajectory of Severance",
      type: "Active",
      ap: 50,
      cooldown: 1,
      icon: "/skills/palekar/s1.webp",
      description: `Throws two chakrams, dealing Immaterial DMG equal to {damage}% of Magic ATK to all enemies in a rectangular area.

      When this skill is used, Accuracy is temporarily increases by 300%, and Magic ATK increases by {magicAtk}% of the user's Base Evade stat.
      Additionally, for every point of INT exceeding 17, Immaterial Boost and Crit DMG increase by 8%.

      This skill can only be used when at least one target is afflicted with [Unstable].`,
      damage: {
        stat: "magicAtk",
        percent: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
        damageType: "Immaterial",
      },
      values: {
        magicAtk: [150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250],
      },
    },
    {
      id: "verse-of-ordeal",
      name: "Verse of Ordeal",
      type: "Active",
      ap: 90,
      cooldown: 1,
      icon: "/skills/palekar/s2.webp",
      description: `Infuses magical runes into all enemies within range,
      Dealing Immaterial DMG equal to {damage}% of Magic ATK and applying [Unstable] and [Slow] for 2 rounds.

      - [Unstable]: Reduces All DEF by {allDef}.
      Additionally, for every 1 point of AGI exceeding 9, increases the target's DMG Taken by 7.5%.

      - [Slow]: Reduces SPD by 40%.
      At the start of each round, if no targets are afflicted with [Unstable], this skill's cooldown is reduced by 1 round.

      [SIGNATURE WEAPON EFFECT]:
      During battle, reduces the AP cost of [Verse of Ordeal] by 15.
      Targets affected by [Unstable] have All ATK reduced by 30%, and their Slash, Poison, and Immaterial DEF are additionally reduced by 1 for every 1 base Evade the caster has, up to a maximum reduction of 200.`,
      damage: {
        stat: "magicAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Immaterial",
      },
      values: {
        allDef: [600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140],
      },
    },
    {
      id: "relentless-sworddance",
      name: "Relentless Sworddance",
      type: "Passive",
      icon: "/skills/palekar/p1.webp",
      description: `When an ally attacks an enemy afflicted with [Unstable] using a skill that consumes 60 or more AP, this unit performs a Support ATK with [Trajectory of Severance].
      The ally who triggered the Support ATK gains {ap} AP at the end of their turn. This effect activates once per character per round.`,
      values: {
        ap: [10, 13, 16, 19, 22, 25, 28, 31, 34, 37],
      },
    },
  ],

  weaponType: "Twin Swords",

  basic: { str: 6, tec: 7, int: 17, vit: 8, agi: 9 },

  gradeGains: {
    EX1: { int: 1 },
    EX2: { vit: 1 },
    EX3: { int: 1 },
    EX4: { vit: 1 },
    EX5: { int: 2 },
    EX6: { agi: 2 },
  },

  traits: [
    "the-chronicler",
    "pathforger",
    "swamp-elf",
    "interested-magic",
    "bright",
    "foreseeing",
    "enlightened",
  ],

  manual: {
    spd: 90,
    startApSeen: { value: 113, grade: "EX" },
  },

  profile: {
    age: "500+",
    race: "Swamp Elf",
    homeland: "Azuremarsh Kingdom, Miora Forest",
    height: "1741cm",
    birthday: "January 22nd",
    bwh: "97(M)-52-105",
    story: `Palekar hails from the secretive caste of Shadow Chronicler, sworn historians of the Swamp Elf legacy, bound to record the truth from behind the veil. Of all the tales she preserved, her heart was always drawn most to the stories of heroes and their triumphs.

    But true heroes are rare. And so, rather than waiting for legends to be born, Palekar chose to shape them herself. From that moment on, she stepped into the role of a mentor, guiding countless champions from the shadows, unseen but ever present. Though her name never graced the pages of history, her wisdom shaped the very figures that filled them. She became a teacher of heroes, forging legends while remaining one step removed from the spotlight.

    However, an undisclosed incident would one day lead her to abandon both her sacred duty and her pen. She vanished from the world stage, choosing seclusion over service. Even after the fall of Noctis Nebula and her arrival on Jigrad, Palekar kept to herself.

    But a plea from a younger kin, and a curious pull toward the so-called Human God, would stir something long dormant. And so, at last, the sage stepped out of the shadows… and into the light.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/PfIdW5A10cU",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/hovOtK0TCAM",
        title: "Affection PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2003054259663978736",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2003718244163813740",
        title: "X PV 2",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2003349411322355850",
        title: "X PV 3",
      },
    ],
  },

  gifts: [
    { gift: "a-single-rose", value: 30 },
    { gift: "300kg-dumbbell", value: 30 },
    { gift: "mangrove-leaf", value: 20 },
    { gift: "forbidden-romance", value: 20 },
    { gift: "training-equipment-set", value: 20 },
  ],
};
