import type { CharacterDetails } from "../types";

export const puppy_shooter: CharacterDetails = {
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
      id: "mechanical-shooting",
      name: "Mechanical Shooting",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/txmanticore/ba.webp",
      description: `Attacks the enemy by firing the equipped firearm.
      Deals Pierce DMG equal to {damage}% of Ranged ATK.`,
      damage: { stat: "rangedAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Pierce" },
    },
    {
      id: "response-fire-mode",
      name: "Response Fire Mode",
      type: "Active",
      ap: 90,
      cooldown: 0,
      icon: "",
      description: `Enters [Response Fire mode], using computational power for precise aiming to support ally attacks.
      While in this state, Counterattacking, Support Counterattacking, Evading, and Blocking are not possible.
      Until the user's next turn, provides a Support Attack with the [Response Fire] skill whenever an ally attacks an enemy within a 7m range.

      [Response Fire]
      Assists an ally by shooting the enemy.
      Deals Pierce DMG equal to {damage}% of Ranged ATK.`,
      damage: { stat: "rangedAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Pierce" },
    },
    {
      id: "shooting-learning-system",
      name: "Shooting Learning System",
      type: "Passive",
      icon: "",
      description: `Each time an attack skill is successfully used, increases Accuracy by {accuracy}% and Crit Rate by {critRate}%.
      This effect lasts until the end of battle and can stack up to 10 times.`,
      values: {
        accuracy: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        critRate: [3, 3.3, 3.6, 3.9, 4.2, 4.5, 4.8, 5.1, 5.4, 5.7],
      },
    },
    {
      id: "rampage-rush",
      name: "Rampage Rush",
      type: "Active",
      ap: 90,
      cooldown: 4,
      icon: "",
      description: `Assumes a caterpillar form and charges forward, firing bullets wildly.
      Charges 12m, dealing Pierce DMG equal to {damage}% of Ranged ATK to all enemies within a 4m radius along the path.
      Weak Point attacks cannot be performed with this skill.`,
      damage: { stat: "rangedAtk", percent: [85, 94, 102, 111, 119, 128, 136, 145, 153, 162], damageType: "Pierce" },
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

  basic: { str: 8, tec: 8, int: 8, vit: 8, agi: 12 },

  gradeGains: {
    A: { str: 1 },
    S: { agi: 1 },
    SS: { tec: 1 },
    EX: { vit: 1 },
    EX1: { agi: 1 },
    EX2: { agi: 1 },
    EX3: { tec: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { tec: 1 },
  },

  traits: [
    "machine",
  ],

  manual: {
    spd: 117,
    startApSeen: { value: 125, grade: "B" },
  },
};
