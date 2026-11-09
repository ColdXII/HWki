import type { CharacterDetails } from "../types";

export const puppy_stepper: CharacterDetails = {
  builds: [
    {
      id: "late-game",
      name: "Late Game",
      note: "Substats Priority:\n1. Starting AP\n2. AP Recovery\n3. SPD",
      stigmas: [
        {
          set: "reckoning-of-sin-ex", slot: "top", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "left", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "right", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Starting AP\n2. AP Recovery\n3. SPD",
      stigmas: [
        {
          set: "reckoning-of-sin-ss", slot: "top", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "left", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "right", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "collide",
      name: "Collide",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "",
      description: `Charges towards the enemy using a sturdy body.
      Dashes 3m, dealing Crush DMG equal to {damage}% of Melee ATK to all enemies within a 1m radius along the path.
      Weak Point attacks cannot be performed with this skill.`,
      damage: { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Crush" },
    },
    {
      id: "combat-support",
      name: "Combat Support",
      type: "Passive",
      icon: "",
      description: `Supports allies within range by providing supplies at just the right timing.
      At the start of any turn, grants AP to allies within a 1.5m radius equal to {ap}% of the user's AP Recovery.
      Also, recovers HP by {recoverHp}% of the target's Max HP for each 1 point of the user's AP Recovery.
      The AP and HP recovery through this effect can only be granted once per round for each ally.`,
      values: {
        ap: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
        recoverHp: [0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29],
      },
    },
    {
      id: "self-shock-therapy",
      name: "Self-shock Therapy",
      type: "Passive",
      icon: "",
      description: `At the start of battle, gains AP equal to {ap} once.
      On a successful attack, recovers HP equal to {recoverHp}% of own Max HP.`,
      values: {
        ap: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
        recoverHp: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
      },
    },
    {
      id: "rush-type-supply",
      name: "Rush-type Supply",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "",
      description: `Assumes a caterpillar form to charge fiercely to the desired location.
      Charges to the designated position, dealing Crush DMG equal to {damage}% of Melee ATK to all enemies within a 1m radius along the path.
      Weak Point attacks cannot be performed with this skill.`,
      damage: { stat: "meleeAtk", percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190], damageType: "Crush" },
    },
    {
      id: "advanced-detection",
      name: "Advanced Detection",
      type: "Passive",
      icon: "",
      description: `At the start of any turn, all allies within a 5m radius, excluding self, gain the [Advanced Detection] effect.

      - [Advanced Detection]: Increases Accuracy and Crit Rate by {buff}%.`,
      values: {
        buff: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
    {
      id: "titanium-body",
      name: "Titanium Body",
      type: "Passive",
      icon: "",
      description: `Increases Slash DEF by {slashDef}.`,
      values: {
        slashDef: [500, 550, 600, 650, 700, 750, 800, 850, 900, 950],
      },
    },
  ],

  weaponType: "Ancient Core",

  basic: { str: 8, tec: 8, int: 8, vit: 10, agi: 10 },

  gradeGains: {
    A: { tec: 1 },
    S: { str: 1 },
    SS: { agi: 1 },
    EX: { vit: 1 },
    EX1: { agi: 1 },
    EX2: { vit: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { agi: 1 },
  },

  traits: [
    "machine",
  ],

  manual: {
    spd: 117,
    startApSeen: { value: 110, grade: "B" },
  },
};
