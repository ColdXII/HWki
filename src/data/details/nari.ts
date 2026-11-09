import type { CharacterDetails } from "../types";

export const nari: CharacterDetails = {
  skins: [
    {
      id: "nari-s1",
      name: "Spec Ops Elite Unit",
      portrait: "/characters/nari/nari-s1p.webp",
      fullBody: "/characters/nari/nari-s1.webp",
      fullBodyCensored: "/characters/nari/nari-s1c.webp",
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
          url: "https://youtu.be/1i2i4qhr348",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1891407115140346139",
          title: "X PV",
        },
      ],
    },
    {
      id: "nari-s3",
      name: "Bountiful Blessing",
      portrait: "/characters/nari/nari-s3p.webp",
      fullBody: "/characters/nari/nari-s3.webp",
      fullBodyCensored: "/characters/nari/nari-s3c.webp",
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
          url: "https://x.com/_horizonwalker/status/2051538993540636798",
          title: "Official PV",
        },
      ],
    },
    {
      id: "nari-s4",
      name: "Unmistakable Curves",
      portrait: "/characters/nari/nari-s4p.webp",
      fullBody: "/characters/nari/nari-s4.webp",
      fullBodyCensored: "/characters/nari/nari-s4c.webp",
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
          url: "https://x.com/_horizonwalker/status/2071494149690560599",
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
      note: "Substats Priority: \n1. Crit Rate (40%)\n2. Crit Damage",
      weapon: { id: "zamiel", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-four-horseman",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-four-horseman",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "phantom-banquet",
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
      might: [
        { id: "insight", level: 5, note: "With Ahram" },
        { id: "pursuit", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Crit Rate (40%)\n2. Crit Damage\n\nWith Ahram",
      weapon: { id: "zamiel", level: 60, dupe: 5 },
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
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "insight", level: 5, note: "With Ahram" },
        { id: "pursuit", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Crit Rate (40%)\n2. Crit Damage",
      weapon: { id: "zamiel", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
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
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "military-shooting",
      name: "Military Shooting",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/nari/ba.webp",
      description: `Fires an accurate shot at the enemy with a rifle.
      On hit, deals {damage}% of Ranged ATK as Pierce DMG.`,
      damage: {
        stat: "rangedAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "combat-roll",
      name: "Combat Roll",
      type: "Active",
      ap: 30,
      cooldown: 2,
      icon: "/skills/nari/s1.webp",
      description: `Jump low to the designated location and gain AP of {ap}.

      [SIGNATURE WEAPON EFFECT]:
      After using the [Combat Roll] skill from the basic stance, the user can follow up with [Precision Shooting Stance] for additional responses.`,
      values: {
        ap: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "precision-shooting-stance",
      name: "Precision Shooting Stance",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/nari/s2.webp",
      description: `Assumes the optimal stance for marksmanship.
      Gain [Precision Shooting Stance], and while this effect is active, [Combat Roll] becomes available.
      After use, this skill changes to [Cancel Precision Shooting Stance].

      - [Precision Shooting Stance]: Increases Ranged ATK by {rangedAtk}% and Pierce Boost by 8%.
      
      The range of [Military Shooting] increases based on the skill's level, and its AP Cost increases by 15.
      While this effect is active, your SPD is reduced to 0, and you cannot evade enemy attacks.

      [SIGNATURE WEAPON EFFECT]:
      During combat, the AP consumption of the [Precision Shooting Stance] skill is reduced by 40`,
      values: {
        rangedAtk: [70, 77, 84, 91, 98, 105, 112, 119, 126, 133],
      },
    },
    {
      id: "pinpoint-shooting",
      name: "Pinpoint Shooting",
      type: "Passive",
      icon: "/skills/nari/p1.webp",
      description: `Inflicts [Marked Target] on the first enemy hit by your attack.
      Using the [Combat Roll] skill or striking an enemy with [Marked Target] grants [Shooting Focus], lasting until the end of your next turn.

      - [Shooting Focus]: Increases Ranged ATK by {rangedAtk}%.`,
      values: {
        rangedAtk: [70, 77, 84, 91, 98, 105, 112, 119, 126, 133],
      },
    },
    {
      id: "piercing-aether-bullet",
      name: "Piercing Aether Bullet",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/nari/s3.webp",
      description: `Fires a bullet that pierces everything in its path.
      After using this skill, you are pushed slightly backward, and your AP Recovery decreases by 15% until the start of the next round.

      Deals Pierce DMG equal to {damage}% of your Ranged ATK to all enemies in a 0.5m x 40m rectangular area.
      If only one enemy is hit, it is treated as a Weak Point Attack.

      [SIGNATURE WEAPON EFFECT]:
      When using this skill, the [Piercing Aether Bullet] skill changes to a directional attack with an increased attack width of 1 meter.`,
      damage: {
        stat: "rangedAtk",
        percent: [180, 198, 216, 234, 252, 270, 288, 306, 324, 342],
        damageType: "Pierce",
      },
    },
    {
      id: "inner-tranquility",
      name: "Inner Tranquility",
      type: "Passive",
      icon: "/skills/juha/p2.webp",
      description: `During battle, Crit DMG increases by {critDmg}%.
      Using the [Combat Roll] skill increases its AP cost by 10 but reduces its cooldown by 1 round immediately after use.`,
      values: {
        critDmg: [44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Judgment Aether Bullet",
      icon: "/skills/nari/judgment-aether-bullet.webp",
      description: `While [Precision Shooting Stance] is active, the Cooldown of [Piercing Aether Bullet] is reduced by 2R.

      After using [Combat Roll], for 1R, Combat Skill DMG increases by {combatSkillDmg}%, and the AP Cost of Basic Attacks and [Piercing Aether Bullet] is reduced by 10.
      Additionally, when attacking while under [The Executioner], the target's Pierce DEF is temporarily set to 0. (Enemies already below 0 are not further reduced.)

      If there are no enemies within a 3m radius, gain [Composure].
      - [Composure]: Increases Crit Rate by {critRate}%, Crit DMG by {critDmg}%, and ACC by 100%.`,
      values: {
        combatSkillDmg: [30, 35, 40, 45, 50, 55, 60],
        critRate: [20, 22, 24, 26, 28, 30, 32],
        critDmg: [40, 44, 48, 52, 56, 60, 64],
      },
    },
  },

  weaponType: "Rifle",

  basic: { str: 7, tec: 14, int: 9, vit: 8, agi: 11 },

  gradeGains: {
    B: { tec: -1 },
    A: { agi: -1 },
    S: { tec: -1 },
    SS: { agi: -1 },
    EX1: { tec: 1 },
    EX2: { tec: 1 },
    EX3: { agi: 1 },
    EX4: { tec: 1 },
    EX5: { agi: 1 },
    EX6: { tec: 1 },
  },

  traits: [
    "juhas-aide",
    "born-sharpshooter",
    "orke",
    "interested-ranged",
    "competent",
    "dogmatic",
    "penetrating",
  ],

  manual: {
    spd: 84,
    startApSeen: { value: 121, grade: "EX" },
  },

  profile: {
    age: "31",
    race: "Orke",
    homeland: "Orke Republic, Morrim Island",
    height: "182cm",
    birthday: "February 43th",
    bwh: "113(O)-60-120",
    story: `Nari's family, the Taeha family, had long served as vassals to the Daeyeon family. Nari herself always believed that she would serve the Daeyeon family as well, and it was decided that she would specifically serve Juha, a member of the Daeyeon family.

    Nari accompanied Juha as part of the delegation sent to Earth, ensuring Juha's safe arrival. Fortunately, Nari was a true soldier, skilled in maintaining a poker face and rarely showing her emotions. She thought of Juha, whose words often contradicted her actions, as an adorable mistress and resolved to assist her as much as possible.

    Especially after discovering Juha's interest in the Human God, she decided to help her mistress pursue her feelings, believing that love would greatly contribute to Juha's emotional growth.

    Nari began studying Earthlings' ways of love, and, in order to put that knowledge to use, she decided to become a Vanguard of the Human God.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/ydkDLLQauXY",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/1Wky6JA-o1s",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "americano-voucher", value: 30 },
    { gift: "orca-documentary", value: 20 },
    { gift: "training-equipment-set", value: 20 },
  ],
};
