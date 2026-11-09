import type { CharacterDetails } from "../types";

export const re_de_da: CharacterDetails = {
  skins: [],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      stigmas: [
        {
          set: "the-wind-that-wanders-the-world", slot: "top", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world", slot: "left", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world", slot: "bottom", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world", slot: "right", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      stigmas: [
        {
          set: "reckoning-of-sin-ex", slot: "top", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "left", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "right", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      stigmas: [
        {
          set: "reckoning-of-sin-ss", slot: "top", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "left", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "right", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "dream-shock",
      name: "Dream Shock",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/rededa/ba.webp",
      description: `Attacks the enemy precisely with the power of the void.
      Deals Immaterial DMG equal to {damage}% of Magic ATK.`,
      damage: { stat: "magicAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Immaterial" },
    },
    {
      id: "ecstasy-possession",
      name: "Ecstasy Possession",
      type: "Active",
      ap: 60,
      cooldown: 1,
      icon: "/skills/rededa/s1.webp",
      description: `interpenetrates the enemy's mind with the power of the void.
      Deals Immaterial DMG equal to {damage}% of magic ATK and possesses the enemy by seizing control of their body.

      The lower the enemy's HP and the higher the user's magic ATK, the higher the success rate of possession.
      (When the user's magic ATK matches the target's remaining HP, possession succeeds with a probability of {chance}%.)
      Cannot possess bosses or elite enemies.

      Upon successful possession, the user's AP is fixed at 0, while the possessed target is controlled instead.
      If the controlled target is defeated, possession ends, and the user immediately gains 150 AP.`,
      damage: { stat: "magicAtk", percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57], damageType: "Immaterial" },
      values: {
        chance: [70, 73, 76, 79, 82, 85, 88, 91, 94, 100],
      },
    },
    {   
      id: "others-body",
      name: "Other's Body",
      type: "Passive",
      icon: "/skills/rededa/p.webp",
      description: `While in a successful possession state, All ATK of the possessed target increases by {allAtk}%.`,
      values: {
        allAtk: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
      },
    },
    {
      id: "nightmare-materialization",
      name: "Nightmare Materialization",
      type: "Active",
      ap: 45,
      cooldown: 2,
      icon: "/skills/rededa/s2.webp",
      description: `Realizes a nightmare, attacking enemies in a wide area.
      Deals Immaterial DMG equal to {damage}% of Magic ATK to enemies within a 5m radius from self.
      Has a {chance}% chance to [Stun] hit enemies and inflict them with the [Nightmare Materialization] effect.
      After using this skill, the user also becomes [Stunned].

      - [Nightmare Materialization]: Reduces all DEF by 200.`,
      damage: { stat: "magicAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Immaterial" },
      values: {
        chance: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
  ],

  weaponType: "Mana Shard",

  basic: { str: 6, tec: 6, int: 10, vit: 6, agi: 9 },

  gradeGains: {
    B: { int: -1 },
    S: { agi: 1 },
    SS: { vit: 1 },
    EX: { tec: 1 },
    EX1: { int: 1 },
    EX2: { int: 1 },
    EX3: { agi: 1 },
    EX4: { vit: 1 },
    EX5: { tec: 1 },
    EX6: { int: 1 },
  },

  traits: [
    "soccer-optimized",
    "sycophant",
    "demon",
    "uncanny",
    "weak",
  ],

  manual: {
    spd: 61,
    startApSeen: { value: 109, grade: "A" },
  },

  profile: {
    age: "1",
    race: "Demon",
    homeland: "Palace of Pleasure",
    height: "24cm",
    birthday: "Unknown",
    bwh: "Soon™",
    story: `Re-De-Da was born in the distant reaches of outer space, in the Palace of Pleasures ruled by the demon known as the Seven-Breasted Cow. Before he could even learn the ways of an incubus, Re-De-Da was accidentally summoned to Earth.

    There, he faced a crisis at the hands of those who sought to oppress him, but thanks to the help of the Human God, he managed to survive and was given his current name, Re-De-Da.`,
  },
};
