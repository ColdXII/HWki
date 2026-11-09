import type { CharacterDetails } from "../types";

export const gulam: CharacterDetails = {
  skins: [],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority:\n1. Evade\n2. Crit Rate",
      weapon: { id: "the-anguished-rose", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-thousand-mile-weaver", slot: "top", level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "left", level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "bottom", level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver", slot: "right", level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Evade\n2. Crit Rate",
      weapon: { id: "the-anguished-rose", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "thorny-heart", slot: "top", level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "thorny-heart", slot: "left", level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "thorny-heart", slot: "bottom", level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "thorny-heart", slot: "right", level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "underground-twin-swords",
      name: "Underground Twin Swords",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/gulam/ba.webp",
      description: `Quickly stabs the enemy with twin blades.
      Deals Pierce DMG equal to {damage}% of Melee ATK.`,
      damage: { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Pierce" },
    },
    {
      id: "burrow",
      name: "Burrow",
      type: "Active",
      ap: 45,
      cooldown: 1,
      maxLevel: 1,
      icon: "/skills/gulam/s1.webp",
      description: `Burrows underground and gains the [Burrow] effect for 2 rounds.

      - [Burrow]: During this effect Response, Evade, Block, or using general skills is prohibited. The user stays Hidden and cannot be targeted by enemy skills.
      Can use the [Emerge] skill.
      - [Emerge]: Select ground within 9m to move to that location and emerge, ending the [Burrow] state.`,
    },
    {   
      id: "underground-evasion",
      name: "Underground Evasion",
      type: "Passive",  
      icon: "/skills/gulam/p1.webp",
      description: `Each time a successful evade occurs, gains the [Underground Evasion] effect.

      - [Underground Evasion]: Increases Evade by {evade}%.
      Stacks up to 5 times. This effect dissipates upon gaining the [Burrow] effect.`,
      values: {
        evade: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
      },
    },
    {   
      id: "lost-elegance",
      name: "Lost Elegance",
      type: "Passive",  
      icon: "/skills/gulam/p2.webp",
      description: `Activates when receiving damage that would lead to incapacitation.
      Once per battle, HP will not fall below 1, and the user immediately burrows underground, entering [Burrow] state for 2R.
      Then gains {ap} AP.`,
      values: {
        ap: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      },
    },
    {
      id: "exploding-elegance",
      name: "Exploding Elegance",
      type: "Active",
      ap: 90,
      cooldown: 3,
      icon: "/skills/gulam/s2.webp",
      description: `Approaches gracefully with fluttering rose petals and delivers a picture-perfect strike.
      Deals Pierce DMG equal to {damage}% of Melee ATK.
      Temporarily increases Melee ATK by {meleeAtk}% of current Evasion for this attack.`,
      damage: { stat: "meleeAtk", percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190], damageType: "Pierce" },
      values: {
        meleeAtk: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
  ],

  weaponType: "Twin Swords",

  basic: { str: 7, tec: 7, int: 7, vit: 8, agi: 11 },

  gradeGains: {
    B: { tec: -1 },
    A: { str: -1 },
    S: { int: -1 },
    EX: { vit: 1 },
    EX1: { agi: 1 },
    EX2: { vit: 1 },
    EX3: { agi: 1 },
    EX4: { str: 1 },
    EX5: { vit: 1 },
    EX6: { agi: 1 },
  },

  traits: [
    "unyielding-style",
    "fluttering-romance",
    "kobold",
    "peaceful",
    "persistent",
  ],

  manual: {
    spd: 117,
    startApSeen: { value: 120, grade: "SS" },
  },

  profile: {
    age: "19",
    race: "Kobold",
    homeland: "Rodriga, Margul Cavern",
    height: "118cm",
    birthday: "September 14th",
    story: `Gulam was a warrior who harbored deep questions about the lives of his fellow kobolds living in the kobold nation of Rodriga. Unsatisfied with simply exploring underground and mining minerals, Gulam set out on a journey to the surface, where he learned about exceptional swordsmanship and a romantic approach to life.

    Upon returning home, he shared his insights with his fellow kobolds, but few chose to follow his path.

    After the Rift, Gulam proved his worth by rescuing his people, and now, he is preparing to embark on a new adventure in search of fresh romance.`
  },
};
