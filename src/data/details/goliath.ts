import type { CharacterDetails } from "../types";

export const goliath: CharacterDetails = {
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
      description: `Fire at the enemy with a large-caliber hand cannon.
      Deals Pierce DMG equal to {damage}% of Ranged ATK.`,
      damage: { stat: "rangedAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Pierce" },
    },
    {
      id: "interception-optimize",
      name: "Interception Optimize",
      type: "Passive",
      icon: "",
      description: `If the user Standby during this turn, Accuracy increases by 50% and Ranged ATK increases by {rangedAtk}% for 1 Round.`,
      values: {
        rangedAtk: [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 28.5],
      },
    },
    {
      id: "rocket-launch",
      name: "Rocket Launch",
      type: "Active",
      ap: 90,
      cooldown: 0,
      icon: "",
      description: `Launches a self-guided rocket towards the sky.
      Deals Crush DMG equal to {damage}% of Ranged ATK and deals Additional Heat DMG equal to {damage2}% of Ranged ATK.
      This attack benefits from a 100% Accuracy adjustment.`,
      damage: [
        {
          stat: "rangedAtk",
          percent: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
          damageType: "Crush",
          label: "Damage",
        },
        {
          stat: "rangedAtk",
          percent: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
          damageType: "Heat",
          label: "Additonal DMG",
        },
      ],
    },
    {
      id: "close-range-reaction",
      name: "Close-range Reaction",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "",
      description: `Forcefully pushes the target away and fires a shot.
      Deals Pierce DMG equal to {damage}% of Ranged ATK and Additional Crush DMG equal to {damage2}% of Melee ATK, while knocking the target back by 5m.`,
      damage: [
        {
          stat: "rangedAtk",
          percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
          damageType: "Pierce",
          label: "Damage",
        },
        {
          stat: "meleeAtk",
          percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
          damageType: "Crush",
          label: "Additonal DMG",
        },
      ],
    },
     {
      id: "triple-rocket-barrage",
      name: "Triple Rocket Barrage",
      type: "Active",
      ap: 150,
      cooldown: 1,
      icon: "",
      description: `Entering Rocket Barrage mode. Immediately gain AP 200 and acquire 3 stacks of [Rocket Barrage mode].

      - [Rocket Barrage mode]: Unable to move, only [Rocket Barrage] and [Standby] skills can be used.
      The mode ends after using [Standby] or 3 times of [Rocket Barrage], changing AP to 0.
      
      [Rocket Barrage]:
      Fire a rocket upward to bombard the ground. This attack does not consume AP to activate but consumes one stack of [Rocket Barrage mode] after use.
      Deals Crush DMG equal to {damage}% of Ranged ATK, and Additional Heat DMG equal to {damage2}% of Ranged ATK.
      Temporarily increases Accuracy by 100% during this attack.`,
      damage: [
        {
          stat: "rangedAtk",
          percent: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
          damageType: "Crush",
          label: "Damage",
        },
        {
          stat: "rangedAtk",
          percent: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
          damageType: "Heat",
          label: "Additonal DMG",
        },
      ],
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
  ],

  weaponType: "Ancient Core",

  basic: { str: 10, tec: 14, int: 10, vit: 14, agi: 7 },

  gradeGains: {
    A: { str: 1 },
    S: { tec: 1 },
    SS: { tec: 2 },
    EX: { vit: 2 },
    EX1: { agi: 3 },
    EX2: { str: 1 },
    EX3: { tec: 1 },
    EX4: { tec: 2 },
    EX5: { vit: 2 },
    EX6: { agi: 3 },
  },

  traits: [
    "machine",
  ],

  manual: {
    spd: 92,
    startApSeen: { value: 128, grade: "B" },
  },
};
