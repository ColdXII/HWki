import type { CharacterDetails } from "../types";

export const rhasadina: CharacterDetails = {
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
      id: "fruit-throw",
      name: "Fruit Throw",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/rhasadina/ba.webp",
      description: `Pulls out a fruit from a mysterious fruit pouch and throws it to attack.
      Deals Crush DMG equal to {damage}% of Magic ATK and applies the [Fruit Fragment] effect for 3R.

      - [Fruit Fragment]: At the start of each round, inflicts Pierce DMG equal to 30% of the caster's Magic ATK.`,
      damage: { stat: "magicAtk", percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57], damageType: "Crush" },
    },
    {
      id: "aspect-shift",
      name: "Aspect Shift",
      type: "Active",
      ap: 30,
      cooldown: 2,
      maxLevel: 1,
      icon: "/skills/rhasadina/s1.webp",
      description: `Moves to the dimensional backside, isolating oneself from the world.
      Grants the [Aspect Shift] effect until the next turn.

      - [Aspect Shift]: Cannot be targeted by enemies and is immune to all attacks, but cannot perform any responses.`,
    },
    {   
      id: "final-fortune",
      name: "Final Fortune",
      type: "Passive",
      icon: "/skills/rhasadina/p.webp",
      description: `When an ally takes damage that would lead to incapacitation, there is a {chance}% chance to allow them to survive with 1 HP.
      This effect can activate only once per Vanguard.`,
      values: {
        chance: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40],
      },
    },
    {
      id: "game-spice",
      name: "Game Spice",
      type: "Active",
      ap: 90,
      cooldown: 0,
      maxLevel: 2,
      icon: "/skills/rhasadina/s2.webp",
      description: `With fairy magic, brings about a powerful effect on the battlefield. One of the following five effects is activated at random:
      ①. Recovers all allies by {recoverHp}% of own magic ATK.
      ②. Deals Additional Immaterial DMG equal to {damage}% of own Magic ATK to all enemies.
      ③. Grants all allies an increase in All ATK by {allAtk}% for 2 rounds.
      ④. Grants all allies {ap} AP.
      ⑤. Nothing happens.`,
      damage: { stat: "magicAtk", percent: [200, 300], damageType: "Immaterial" },
      values: {
        recoverHp: [120, 180],
        allAtk: [30, 45],
        ap: [30, 45],
      },
    },
  ],

  weaponType: "Mana Shard",

  basic: { str: 7, tec: 8, int: 7, vit: 9, agi: 8 },

  gradeGains: {
    B: { tec: -1 },
    S: { int: 1 },
    SS: { agi: 1 },
    EX: { vit: 1 },
    EX1: { int: 1 },
    EX2: { vit: 1 },
    EX3: { int: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { int: 1 },
  },

  traits: [
    "friendship-with-luise",
    "fairy-dust",
    "fairy",
    "lucky",
    "arrogant",
  ],

  manual: {
    spd: 79,
    startApSeen: { value: 109, grade: "A" },
  },

  profile: {
    age: "Unknown",
    race: "Fairy",
    homeland: "Unknown",
    height: "30cm",
    birthday: "Unknown",
    story: `Of all the choices she could make, it was the crossroads that fascinated her most. During a conversation with Luise, whom she met by chance, she realized that her own crossroads had arrived. She decided to assist Luise with her work, trying to follow her own path, and eventually, upon meeting the Human God, she became certain that her journey would no longer diverge.`
    },
};
