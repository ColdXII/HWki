import type { CharacterDetails } from "../types";

export const delia: CharacterDetails = {
  skins: [],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority: \n1. Crit Rate (70%)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "orbina", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex", slot: "right", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Crit Rate (70%)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "orbina", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-eternal-battle", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-eternal-battle", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-eternal-battle", slot: "right", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-eternal-battle", slot: "bottom", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Crit Rate (70%)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "orbina", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss", slot: "top", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss", slot: "left", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss", slot: "right", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
  ],

  skills: [
    {
      id: "summon-energy",
      name: "Summon Energy",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/delia/ba.webp",
      description: `Releases pure energy in the form of a heat ray to attack.
      Deals Heat DMG equal to {damage}% of Magic ATK to enemies within a 1m by 7m rectangular area.
      This skill cannot be used for a Weakness Attack.`,
      damage: { stat: "magicAtk", percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152], damageType: "Heat" },
    },
    {
      id: "spatial-shift",
      name: "Spatial Shift",
      type: "Active",
      ap: 30,
      cooldown: 1,
      icon: "/skills/delia/s1.webp",
      description: `Crosses through space-time to reach the desired location.
      Teleports to a specified location within a radius of {distance}m.`,
      values: {
        distance: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      },
    },
    {
      id: "starlight-gaze",
      name: "Starlight Gaze",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/delia/s2.webp",
      description: `Starlight shines upon the enemy.
      Applies the [Starlight Gaze] effect to the enemy and grants the [Aurora] effect to the user 3 times.

      - [Starlight Gaze]: Reduces All ATK by {allAtk}% and generates a 7m circular [Starlight] area that tracks the target.
      - [Aurora]: While possessing this effect, allies attacking enemies with the [Starlight Gaze] effect inside the [Starlight] area will be supported by [Delayed Aurora].

      [Delayed Aurora]:
      Deals Heat DMG equal to {damage}% of Magic ATK to enemies with the [Starlight Gaze] effect within a 1m by 7m rectangular area.
      Recovers the HP of all allies within the [Starlight] area by {healing}% of Magic ATK.
      Consumes one [Aurora] effect.
      This skill cannot be used for a Weakness Attack.`,
      damage: { stat: "magicAtk", percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152], damageType: "Heat" },
      values: {
        allAtk: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
        healing: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {   
      id: "warped-starlight",
      name: "Warped Starlight",
      type: "Passive",
      icon: "/skills/delia/p.webp",
      description: `Distorted starlight illuminates the battlefield, twisting possibilities to forcibly turn the tide in favor.
      At the start of each round, increases the CRIT rate of all allies by {critRate1}% for 1R.
      At the start of each round, decreases the CRIT rate of all enemies by {critRate2}% for 1R.`,
      values: {
        critRate1: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        critRate2: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
    {
      id: "cast-starlight-shower",
      name: "Cast: Starlight Shower",
      type: "Active",
      ap: 80,
      cooldown: 0,
      icon: "/skills/delia/s3.webp",
      description: `Prepares a grand spell.
      During casting, movement, evasion, and response are not possible, and own Aggro Adjustment increases.
      On the next turn, gains 100 AP to activate the [Starlight Shower] skill.
      Alternatively, can prepare the spell once more in the same manner.
      In this case, on the following turn, gains 200 AP to activate the [Starlight Shower - Ultimate] skill.

      [Starlight Shower]
      Calls forth starlight to attack enemies.
      Deals Immaterial DMG equal to {dmg}% of Magic ATK to all enemies within a 5m radius.

      [Starlight Shower - Ultimate]
      Calls forth even more starlight to attack enemies.
      Deals Immaterial DMG equal to {damage}% of Magic ATK to all enemies within a 7m radius.`,
      damage: [
        { stat: "magicAtk", percent: [130, 143, 156, 169, 182, 195, 208, 221, 234, 247], damageType: "Immaterial", label: "AoE Damage" },
        { stat: "magicAtk", percent: [380, 418, 456, 494, 532, 570, 608, 646, 684, 722], damageType: "Immaterial", label: "AoE Damage" },
      ],
    },
  ],

  weaponType: "Staff",

  basic: { str: 5, tec: 7, int: 21, vit: 9, agi: 9 },

  gradeGains: {
    B: { int: -1 },
    S: { agi: 2 },
    SS: { vit: 2 },
    EX: { int: 2 },
    EX1: { int: 2 },
    EX2: { int: 1 },
    EX3: { agi: 2 },
    EX4: { vit: 2 },
    EX5: { int: 2 },
    EX6: { int: 2 },
  },

  traits: [
    "growing-sprout",
    "marlon",
    "bright",
    "magical",
  ],

  manual: {
    spd: 81,
    startApSeen: { value: 107, grade: "A" },
  },

  profile: {
    age: "12",
    race: "Marlon",
    homeland: "The Empire, Laventa",
    height: "99cm",
    birthday: "March 3rd",
    story: `Delia was born into a group of spacemancers known as the Successors of the Stars. During the Rift Crisis, Delia was separated from her parents and survived thanks to Kalina's help.

    Later, she followed Maximilia to Earth, and now resides in an orphanage established for those from Noctis Nebula. However, Delia is well aware that the orphanage can only provide the bare minimum for living, and that one day, when she grows up, she will have to leave and live on her own. She also understands that achieving her goal of attending university will require a significant amount of money.

    Understanding all of this, Delia uses her spacemancy to take on various part-time jobs. It was then that Yeon Chae-young approached her, offering her an internship as a part-time Vanguard assistant.

    Delia accepted under the condition that she could keep her other jobs, and now she waits for the Human God while working her internship.`,
  },
};
