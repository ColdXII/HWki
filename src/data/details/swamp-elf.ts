import type { CharacterDetails } from "../types";

export const swamp_elf: CharacterDetails = {
  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. Crit Chance (30%)\n2. Crit DMG\n3. Melee Attack",
      stigmas: [
        {
          set: "lifebound", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound", slot: "bottom", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound", slot: "right", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Chance (30%)\n2. Crit DMG\n3. Melee Attack",
      stigmas: [
        {
          set: "the-thousand-mile-weaver", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "bottom", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "right", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
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
          set: "thorny-heart", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "thorny-heart", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "thorny-heart", slot: "bottom", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "thorny-heart", slot: "right", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "harpe-art",
      name: "Harpe Art",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/samarika/ba.webp",
      description: `The swamp elf extends their long arms and swiftly swings the harpe.
      Deals Slash DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "hunter-on-the-vine",
      name: "Hunter on the Vine",
      type: "Passive",
      icon: "/skills/samarika/p.webp",
      description: `Increases SPD by {spd}. Additionally, when attacking, temporarily increases Melee ATK based on the straight-line distance moved.
      At 10 m, Melee ATK increases by up to {meleeAtk}%.`,
      values: {
        spd: [20, 23, 26, 29, 32, 35, 38, 41, 44, 47],
        meleeAtk: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
      },
    },
    {
      id: "assault",
      name: "Assault",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/kalina/s1.webp",
      description: `Leaps high and dives quickly to ambush enemies.
      Jumps to the designated location and deals Slash DMG equal to {damage}% of Melee ATK to all enemies within a 1.3m circular radius.
      Ignores counterattacks from the target.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
    },
    {
      id: "blades-of-tyranny",
      name: "Blades of Tyranny",
      type: "Active",
      ap: 90,
      cooldown: 1,
      icon: "/skills/kalina/s2.webp",
      description: `Slashes the area in a blinding flash of speed with twin harpes. Deals {damage}% Slash DMG to all enemies within a 2.5m radius.
      Upon use, temporarily increases Crit Rate by {critRate}% of the user's Base Evasion. This bonus can reach up to a maximum of {scale}%.`,
      damage: {
        stat: "meleeAtk",
        percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
        damageType: "Slash",
      },
      values: {
        critRate: [12.8, 13.6, 14.4, 15.2, 16, 16.8, 17.6, 18.4, 19.2, 20],
        scale: [32, 34, 36, 38, 40, 42, 44, 46, 48, 50],
      },
    },
    {
      id: "survival-expert",
      name: "Survival Expert",
      type: "Passive",
      icon: "/skills/kalina/p2.webp",
      description: `Once per battle, survives a fatal blow with 1 HP and immediately gains {ap} AP. Then restores {recoverHp}% of own HP.`,
      values: {
        ap: [105, 110, 115, 120, 125, 130, 135, 140, 145, 150],
        recoverHp: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
      },
    },
    {
      id: "swamp-s-arrest",
      name: "Swamp's Arrest",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/samarika/s1.webp",
      description: `Leaps over the target while throwing a swamp trap.
      Deals Slash DMG equal to {damage}% of Melee ATK and has a {chance}% chance to apply [Slow] effect for 2R.
      Weak Point attacks cannot be performed with this skill.

      - [Slow]: Reduces SPD by 40%.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
      values: {
        chance: [50, 55, 60, 65, 70, 75, 80, 85, 90, 100],
      },
    },
    {
      id: "fang-of-the-swamp",
      name: "Fang of the Swamp",
      type: "Active",
      ap: 90,
      cooldown: 2,
      icon: "/skills/samarika/s2.webp",
      description: `Leaps low toward the enemy, slashing past them with a deadly dual strike from both Harpes.
      Deals Slash DMG equal to {damage}% of Melee ATK as the user vaults over the target.

      If the target is afflicted with [Slow], deals Additional Slash DMG equal to {damage2}% of the user's combined Melee ATK and Base Evade.`,
      damage: [
        {
          stat: "meleeAtk",
          percent: [135, 149, 162, 176, 189, 203, 216, 230, 243, 257],
          damageType: "Slash",
        },
        {
          stat: "meleeAtk",
          percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
          damageType: "Slash",
        },
      ],
    },
  ],

  weaponType: "Twin Swords",

  basic: { str: 10, tec: 8, int: 5, vit: 8, agi: 13 },

  gradeGains: {
    A: { agi: 1 },
    S: { str: 1 },
    SS: { agi: 1 },
    EX: { vit: 1 },
    EX1: { str: 1 },
    EX2: { agi: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { str: 1 },
  },

  traits: [
    "swamp-elf",
  ],

  manual: {
    spd: 143,
    startApSeen: { value: 109, grade: "B" },
  },
};
