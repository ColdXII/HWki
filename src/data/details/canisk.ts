import type { CharacterDetails } from "../types";

export const canisk: CharacterDetails = {
  skins: [],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority: \n1. Max HP\n2. Melee Attack\n3. Starting AP",
      stigmas: [
        {
          set: "harmony-ex", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "harmony-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Max HP\n2. Melee Attack\n3. Starting AP",
      stigmas: [
        {
          set: "harmony-ss", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "harmony-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
  ],

  skills: [
    {
      id: "brotherhoods-strike",
      name: "Brotherhood's Strike",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/kilon/ba.webp",
      description: `Swings the greatsword horizontally, slashing enemies within a fan-shaped range.
      Deals Slash DMG equal to {damage}% of Melee ATK`,
      damage: { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Slash" },
    },
    {   
      id: "thousand-arms-stance",
      name: "Thousand Arms Stance",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/kilon/s1.webp",
      description: `Raises the greatsword and assumes a counterattack stance.
      Enters [Counterattack Posture] until the start of the next round, increasing Crit Rate by {critRate}% and performing counterattacks regardless of the base number of counterattacks.`,
      values: {
        critRate: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "taunting-roar",
      name: "Taunting Roar",
      type: "Active",
      ap: 15,
      cooldown: 3,
      icon: "/skills/kilon/s2.webp",
      description: `Plant your sword into the ground and unleash a roar.
      Deals Crush DMG equal to {damage}% of Magic ATK in a 5m circular AoE.
      Enemies hit are inflicted with [Taunt] for 2 rounds and have all ATK reduced by {allAtk}% for 2 rounds.
      Your Aggro Adjustment increases for the duration.
      This attack temporarily increases Accuracy by 300%`,
      damage: { stat: "magicAtk", percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57], damageType: "Crush" },
      values: {
        allAtk: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "split-the-crown",
      name: "Split the Crown",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/kilon/s3.webp",
      description: `Strikes downward with a greatsword to deliver a powerful blow.
      Deals Slash DMG equal to {damage}% of Melee ATK.
      This skill's Slash Boost increases proportionally to missing HP, up to 200% for the turn it's used.
      If this skill defeats an enemy, restores {recoverHp}% of Max HP as HP Recovery`,
      damage: { stat: "meleeAtk", percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190], damageType: "Slash" },
      values: {
        recoverHp: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
      },
    },
  ],

  weaponType: "Two-handed Sword",

  basic: { str: 12, tec: 7, int: 6, vit: 13, agi: 7 },

  gradeGains: {
    B: { vit: -1 },
    A: { str: -1 },
    SS: { agi: 1 },
    EX: { vit: 1 },
    EX1: { str: 2 },
    EX2: { vit: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { str: 2 },
  },

  traits: [
    "the-rabid-dog",
    "grriks-sincerity",
    "grrik",
    "ferocious",
    "precarious",
  ],

  manual: {
    spd: 92,
    startApSeen: { value: 123, grade: "S" },
  },

  profile: {
    age: "16",
    race: "Grrik",
    homeland: "Kingdom of Fangs, Luicika",
    height: "225cm",
    birthday: "Bear's Month, 5th",
    story: `Those early years were harsh, so harsh that Canisk received no proper education beyond combat, nor learned the Grrik code of honor. Concepts like mercy and restraint made no sense; why should one hold back from striking the wicked or the weak?

    Such thinking, however, earned Canisk the gravest insult among their kind: "rabid dog." Shunned and scorned, Canisk grew more isolated, and more twisted.

    Though they longed, deep down, to understand the Grrik tradition of brotherhood, they masked that yearning behind a hardened, solitary front. For a time, Canisk wandered from place to place, offering their strength wherever brute force was in demand, like a mercenary.

    And yet, buried deep within, the old Grrik instinct, the desire to belong to a pack, still stirs, quietly urging Canisk toward something more.`,
  },
};
