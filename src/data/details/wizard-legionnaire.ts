import type { CharacterDetails } from "../types";

export const wizard_legionnaire: CharacterDetails = {
  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. Crit Rate (30%)\n2. Crit Damage\n3. Magic Attack",
      stigmas: [
        {
          set: "scorching-sun",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Rate (30%)\n2. Crit Damage\n3. Magic Attack",
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
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
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Rate (30%)\n2. Crit Damage\n3. Magic Attack",
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
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
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "flame-arrow",
      name: "Flame Arrow",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/luise/ba.webp",
      description: `Shoots an arrow of fire to burn the enemy.
      Deals Heat DMG equal to {damage}% of Magic ATK.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Heat",
      },
    },
    {
      id: "ember",
      name: "Ember",
      type: "Passive",
      icon: "/skills/luise/p1.webp",
      description: `On a successful attack, applies the [Ember] effect to the enemy for 3 rounds.

      - [Ember]: Reduces Heat DEF by {heatDef}.`,
      values: {
        heatDef: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
      },
    },
    {
      id: "fireball",
      name: "Fireball",
      type: "Active",
      ap: 90,
      cooldown: 1,
      icon: "/skills/luise/s1.webp",
      description: `Launches a blazing orb of fire and causes it to explode, burning enemies.
      Deals Unblockable Heat DMG equal to {damage}% of Magic ATK to all enemies within a 2m circular radius.
      During this attack, ACC temporarily increases by 300%.`,
      damage: {
        stat: "magicAtk",
        percent: [75, 83, 90, 98, 105, 113, 120, 128, 135, 143],
        damageType: "Heat",
      },
    },
    {
      id: "fireflake-explosion",
      name: "Fireflake Explosion",
      type: "Passive",
      icon: "/skills/luise/p2.webp",
      description: `Ignites dying embers to burn enemies.
      At the start of the round, detonates all [Ember] effects on the battlefield, dealing Additional Heat DMG equal to {damage}% of Magic ATK.`,
      damage: {
        stat: "magicAtk",
        percent: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
        damageType: "Heat",
      },
    },
    {
      id: "blaze-of-ascension",
      name: "Blaze of Ascension",
      type: "Active",
      ap: 150,
      cooldown: 3,
      icon: "/skills/luise/s2.webp",
      description: `Commands surging flames to burn enemies in front.
      Deals Unblockable Heat DMG equal to {damage}% of Magic ATK to all enemies within a 3m circular radius.
      During the attack, ACC temporarily increases by 300%, but weakness attacks are not possible.`,
      damage: {
        stat: "magicAtk",
        percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
        damageType: "Heat",
      },
    },
  ],

  weaponType: "Staff",

  basic: { str: 5, tec: 10, int: 13, vit: 9, agi: 9 },

  gradeGains: {
    A: { int: 1 },
    S: { agi: 1 },
    SS: { vit: 1 },
    EX: { int: 1, vit: 1 },
    EX1: { int: 1 },
    EX2: { int: 1 },
    EX3: { agi: 1 },
    EX4: { vit: 1 },
    EX5: { int: 1, vit: 1 },
    EX6: { int: 1 },
  },

  traits: [
    "marlon",
  ],

  manual: {
    spd: 61,
    startApSeen: { value: 115, grade: "B" },
  },
};
