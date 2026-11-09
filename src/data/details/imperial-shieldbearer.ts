import type { CharacterDetails } from "../types";

export const imperial_shieldbearer: CharacterDetails = {
  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Melee Attack",
      stigmas: [
        {
          set: "lifebound", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "lifebound", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "lifebound", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Melee Attack",
      stigmas: [
        {
          set: "reckoning-of-sin-ex", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Melee Attack",
      stigmas: [
        {
          set: "reckoning-of-sin-ss", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
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
      icon: "/skills/mahari/ba.webp",
      description: `Stabs with a sword to attack.
      Deals Pierce DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "threat-attack",
      name: "Threat Attack",
      type: "Active",
      ap: 45,
      cooldown: 3,
      icon: "/skills/mahari/s1.webp",
      description: `Deals a threatening sword strike to the enemy.
      Deals {damage}% of Melee ATK as Pierce DMG and inflicts [Taunt] effect to the target for 2R.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "wall-of-shields",
      name: "Wall of Shields",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "",
      description: `Raises a massive shield wall to protect allies from enemies.
      Increases own Aggro Adjustment for 2 rounds and summons a [Shield Wall] in the front.
      While the [Shield Wall] is active, All DEF increases by {allDef}, cannot be pushed or pulled, and all responses are disabled.

      The [Shield Wall] vanishes at the start of the caster's next turn.
      The [Shield Wall] inherits 50% of the summoner's HP and DEF.`,
      values: {
        allDef: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550],
      },
    },
    {
      id: "fortification-first-aid",
      name: "Fortification - First Aid",
      type: "Passive",
      icon: "",
      description: `At the start of each round, Recovers the HP of all allies by {recoverHp}% of their max HP at the start of each round.`,
      values: {
        recoverHp: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
      },
    },
  ],

  weaponType: "One-handed Sword & Shield",

  basic: { str: 7, tec: 6, int: 7, vit: 13, agi: 8 },

  gradeGains: {
    A: { vit: 1 },
    S: { vit: 1 },
    SS: { str: 1 },
    EX: { agi: 1 },
    EX1: { vit: 1 },
    EX2: { vit: 1 },
    EX3: { vit: 1 },
    EX4: { str: 1 },
    EX5: { agi: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "marlon",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 118, grade: "B" },
  },
};
