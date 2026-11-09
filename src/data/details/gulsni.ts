import type { CharacterDetails } from "../types";

export const gulsni: CharacterDetails = {
  skins: [],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Evasion",
      stigmas: [
        {
          set: "harmony-ex", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "harmony-ex", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "harmony-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "harmony-ex", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Evasion",
      stigmas: [
        {
          set: "harmony-ss", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "harmony-ss", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "harmony-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "harmony-ss", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
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
      icon: "/skills/gulsni/ba.webp",
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
      icon: "/skills/gulsni/s1.webp",
      description: `Burrows underground and gains the [Burrow] effect for 2 rounds.

      - [Burrow]: During this effect Response, Evade, Block, or using general skills is prohibited. The user stays Hidden and cannot be targeted by enemy skills.
      Can use the [Emerge] skill.
      - [Emerge]: Select ground within 9m to move to that location and emerge, ending the [Burrow] state.`,
    },
    {   
      id: "underground-defense-techniques",
      name: "Underground Defense Techniques",
      type: "Passive",  
      icon: "/skills/gulsni/p1.webp",
      description: `Increases Physical DEF by {physicalDef} and Block Chance by {blockChance}%.

      Block Chance is capped at 75%.`,
      values: {
        physicalDef: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
        blockChance: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
    {
      id: "underground-explosion",
      name: "Underground Explosion",
      type: "Active",
      ap: 90,
      cooldown: 4,
      icon: "/skills/gulsni/s2.webp",
      description: `Erupts from the ground, causing devastation.
      Can only be used in [Burrow] state.
      Deals Crush DMG equal to {damage}% of Melee ATK, knocks back the enemy 3m, and [Taunts] for 1R.
      Cannot perform a weakness attack with this skill.`,
      damage: { stat: "meleeAtk", percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190], damageType: "Crush" },
    },
    {   
      id: "improvised-fortress",
      name: "Improvised Fortress",
      type: "Passive",  
      icon: "/skills/gulsni/p2.webp",
      description: `If in [Burrow] state at the start of the turn, the effect applies.
      Increases Physical DEF by {physicalDef} and AP Recovery by {apRecovery}% until the start of the next round.`,
      values: {
        physicalDef: [300, 330, 360, 390, 420, 450, 480, 510, 540, 570],
        apRecovery: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
  ],

  weaponType: "Twin Swords",

  basic: { str: 7, tec: 7, int: 6, vit: 8, agi: 11 },

  gradeGains: {
    B: { tec: -1 },
    A: { str: -1 },
    SS: { int: 1 },
    EX: { vit: 1 },
    EX1: { agi: 1 },
    EX2: { vit: 1 },
    EX3: { agi: 1 },
    EX4: { str: 1 },
    EX5: { vit: 1 },
    EX6: { agi: 1 },
  },

  traits: [
    "pure-eyes",
    "cant-catch-up",
    "kobold",
  ],

  manual: {
    spd: 117,
    startApSeen: { value: 120, grade: "S" },
  },

  profile: {
    age: "12",
    race: "Kobold",
    homeland: "Rodriga, Margul Cavern",
    height: "121cm",
    birthday: "August 1st",
    story: `Gulsni was born into the distinguished Gul family, a prominent name even among the Kobolds. Though the Gul family lost their homeland to the Rift, they found business success on Earth by undertaking dangerous mining operations, and they hoped to collaborate with humans to further expand their business.

    Gulsni, however, was too naive to be suited for business, but he had a talent for combat and a strong sense of adventure, leading to his selection within the Gul family to apply to become a Vanguard.

    Gulsni is a Kobold whose intelligence falls just slightly below the average in a race with a wide range of intellectual abilities. He is simple, kind-hearted, and views the world without prejudice, seeing things purely for what they are.

    Despite his limited intelligence, Gulsni possesses considerable insight through his unbiased perspective. He is now aspiring to become a Vanguard, ready to fight against the Rift.`
  },
};
