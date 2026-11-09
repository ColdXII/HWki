import type { CharacterDetails } from "../types";

export const war_marcenary: CharacterDetails = {
  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority: \n1. Melee Attack\n2. Starting AP",
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Melee Attack\n2. Starting AP",
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "pole-break",
      name: "Pole Break",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/erneste/ba.webp",
      description: `Swings the greatsword widely to attack enemies.
      Deals Slash DMG equal to {damage}% of Melee ATK to enemies in a fan-shaped area.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "gotta-protect-myself",
      name: "Gotta Protect Myself!",
      type: "Passive",
      icon: "/skills/erneste/p1.webp",
      description: `Increases Block Chance by {blockChance}%.
      Block Chance is capped at 75%.`,
      values: {
        blockChance: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "formation-destruction",
      name: "Formation Destruction",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/erneste/s1.webp",
      description: `Charges towards the target with a half-swording technique, colliding forcefully, then swings the sword widely to attack surrounding enemies.
      Leaps low at the target, dealing Slash DMG equal to {damage}% of Melee ATK to the target and all enemies within a 2.5m radius, and knocks them back 2.5m.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
    },
    {
      id: "crisis-to-opportunity",
      name: "Crisis to Opportunity!",
      type: "Passive",
      icon: "/skills/erneste/p2.webp",
      description: `On a successful block, gains an immediate opportunity for a counterattack.
      During counterattack, Melee ATK increases by {meleeAtk}%.`,
      values: {
        meleeAtk: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
    {
      id: "declaration-of-victory",
      name: "Declaration of Victory",
      type: "Active",
      ap: 45,
      cooldown: 3,
      icon: "/skills/erneste/s2.webp",
      description: `Raises the sword high and declares victory, boosting the morale of allies.
      Grants the [Declaration of Victory] effect to self and allies within a 5m radius for 2R.

      - [Declaration of Victory]: Increases each target's Melee ATK by {meleeAtk}% of the caster's Melee ATK, and increases SPD by {spd}.`,
      values: {
        meleeAtk: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
        spd: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
  ],

  weaponType: "Two-handed Sword",

  basic: { str: 10, tec: 10, int: 9, vit: 9, agi: 10 },

  gradeGains: {
    A: { vit: 1 },
    S: { agi: 1 },
    SS: { str: 1 },
    EX: { str: 1 },
    EX1: { vit: 1 },
    EX2: { vit: 1 },
    EX3: { agi: 1 },
    EX4: { str: 1 },
    EX5: { str: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "marlon",
  ],

  manual: {
    spd: 87,
    startApSeen: { value: 121, grade: "B" },
  },
};
