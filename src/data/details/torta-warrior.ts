import type { CharacterDetails } from "../types";

export const torta_warrior: CharacterDetails = {
  skins: [],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      note: "Substats Priority:\n1. Magic ATK\n2. Max HP",
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Magic ATK\n2. Max HP",
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "hide-splitter",
      name: "Hide Splitter",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/osla/ba.webp",
      description: `Swings a deadly Torturas to deal Slash DMG equal to {damage}% of Melee ATK to the enemy.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
    },
    {
      id: "predatory-range",
      name: "Predatory Range",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/osla/s1.webp",
      description: `Throws a chained Torturas to pull the enemy closer.
      Deals Slash DMG equal to {damage}% of Melee ATK and removes Counterattack.
      If the target is a large enemy, instead of pulling them closer, moves self to the front of the enemy.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "afflict-pain",
      name: "Afflict Pain",
      type: "Passive",
      icon: "/skills/osla/p1.webp",
      description: `Each time an attack is successfully made, has a {chance}% chance to Taunt the target.`,
      values: {
        chance: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "cry-of-the-ancients",
      name: "Cry of the Ancients",
      type: "Active",
      ap: 45,
      cooldown: 2,
      icon: "/skills/osla/s2.webp",
      description: `With a shout filled with intense determination, demoralizes enemies and boosts own resolve.
      Deals Immaterial DMG equal to {damage}% of Magic ATK.
      Hit enemies lose 10 AP, while self gains the [Primal Regeneration] effect for 2R and Aggro Adjustment increases.

      - [Primal Regeneration]: Whenever damaged, recovers HP by {recoverHp}% of Magic ATK.
      This recovery amount increases as the current HP ratio decreases, up to 4 times at 40% HP ratio.`,
      damage: {
        stat: "magicAtk",
        percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
        damageType: "Immaterial",
      },
      values: {
        recoverHp: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "endless-malice",
      name: "Endless Malice",
      type: "Passive",
      icon: "/skills/osla/p2.webp",
      description: `When attacked by an enemy, reflects the damage received back to the attacker, dealing Fixed DMG equal to {fixedDmg}% of the damage taken.
      This reflected damage increases as own current HP ratio decreases, up to 4 times at 40% HP.`,
      values: {
        fixedDmg: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
  ],

  weaponType: "Torturas",

  basic: { str: 12, tec: 8, int: 6, vit: 10, agi: 9 },

  gradeGains: {
    A: { str: 1 },
    S: { vit: 1 },
    SS: { str: 1 },
    EX: { vit: 1 },
    EX1: { str: 2 },
    EX2: { str: 1 },
    EX3: { vit: 1 },
    EX4: { str: 1 },
    EX5: { vit: 1 },
    EX6: { str: 2 },
  },

  traits: [
    "torta",
  ],

  manual: {
    spd: 92,
    startApSeen: { value: 118, grade: "B" },
  },
};
