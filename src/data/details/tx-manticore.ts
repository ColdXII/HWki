import type { CharacterDetails } from "../types";

export const tx_manticore: CharacterDetails = {
  skins: [],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority: \n1. Crit Damage\n2. Range Attack\n3. Crit Rate",
      weapon: { id: "the-aegaeon-core", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-four-horseman", slot: "top", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-four-horseman", slot: "left", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-four-horseman", slot: "bottom", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-four-horseman", slot: "right", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Crit Damage\n2. Range Attack\n3. Crit Rate",
      weapon: { id: "the-aegaeon-core", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-nobles-tactics", slot: "top", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-nobles-tactics", slot: "left", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-nobles-tactics", slot: "bottom", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-nobles-tactics", slot: "right", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "designated-fire",
      name: "Designated Fire",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/txmanticore/ba.webp",
      description: `Fires machine gun at the enemy.
      Deals Pierce DMG equal to {damage}% of Ranged ATK to the enemies hit by the attack.
      After the basic attack, performs a Support Attack with the [Detection Shot] skill on a random enemy, dealing Pierce DMG equal to 35% of Ranged ATK.

      [Detection Shot]
      Attacks a random enemy, dealing Pierce DMG equal to 35% of Ranged ATK`,
      damage: { stat: "rangedAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Pierce" },
    },
    {   
      id: "tactical-clearing",
      name: "Tactical Clearing",
      type: "Passive",
      icon: "/skills/txmanticore/p1.webp",
      description: `During combat, Crit Rate increases by {critRate}%.
      Applies the [Tactical Target] effect to enemies hit by own Support Attacks and Counterattacks, lasting for 2R.

      - [Tactical Target]: When an ally attacks the target of the effect, increases Accuracy by {accuracy}% temporarily.`,
      values: {
        critRate: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
        accuracy: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
    {
      id: "open-fire",
      name: "Open Fire",
      type: "Active",
      ap: 80,
      cooldown: 5,
      icon: "/skills/txmanticore/s1.webp",
      description: `Fires all machine guns to suppress the frontlines.
      Deals Pierce DMG equal to {damage}% of Ranged ATK to enemies within a 60º fan range of 9m in front.
      Temporarily increases Crit Rate by 24% when the skill is used.`,
      damage: { stat: "rangedAtk", percent: [85, 94, 102, 111, 119, 128, 136, 145, 153, 162], damageType: "Pierce" },
    },
    {   
      id: "airspace-radar",
      name: "Airspace Radar",
      type: "Passive",
      icon: "/skills/txmanticore/p2.webp",
      description: `When allies, excluding self, are attacked by enemies, there is a 45% chance to perform a Support Attack.
      If any of the attacked enemies have the [Tactical Target] effect, the chance to perform a Support Attack increases to 100%.
      If the Support Attack is successful through this skill, there is a {chance}% chance to reduce the cooldown of the [Open Fire] skill by 1R.`,
      values: {
        chance: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40],
      },
    },
    {
      id: "delayed-bombardment",
      name: "Delayed Bombardment",
      type: "Active",
      ap: 65,
      cooldown: 1,
      icon: "/skills/txmanticore/s2.webp",
      description: `Fires guided missile into the air.
      Creates a circular [Guided Target] area with a 4m radius at the designated location.

      [Guided Target]: At the start of each round, the area is bombarded by guided missile, dealing the following damage to enemies within the area. This Additional DMG scales with Crit DMG.

      - Additional Pierce DMG equal to {damage}% of Ranged ATK
      - Additional Crush DMG equal to {damage2}% of Ranged ATK
      - Additional Heat DMG equal to {damage3}% of Ranged ATK.

      [SIGNATURE WEAPON EFFECT]:
      Using the [Delayed Bombardment] skill increases Aggro Adjustment by 30 for 1R.`,
      damage: [
        { stat: "rangedAtk", percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152], damageType: "Pierce" },
        { stat: "rangedAtk", percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152], damageType: "Crush" },
        { stat: "rangedAtk", percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152], damageType: "Heat" },
      ],
    },
  ],

  weaponType: "Ancient Core",

  basic: { str: 10, tec: 14, int: 9, vit: 20, agi: 9 },

  gradeGains: {
    B: { vit: -1 },
    A: { tec: -1 },
    S: { agi: -1 },
    SS: { vit: -1 },
    EX1: { tec: 2 },
    EX2: { vit: 2 },
    EX3: { tec: 1 },
    EX4: { agi: 3 },
    EX5: { vit: 3 },
    EX6: { tec: 1 },
  },

  traits: [
    "steel-retribution",
    "steel-frame",
    "machine",
    "efficient",
    "accurate",
    "bulletproof"
  ],

  manual: {
    spd: 87,
    startApSeen: { value: 110, grade: "EX" },
  },

  profile: {
    age: "-",
    race: "Machine",
    homeland: "-",
    height: "-",
    birthday: "-",
    story: `TX-Manticore is equipped with high firepower and detection capabilities, allowing it to effectively intercept the enemy's core forces. This Manticore, which both the enemy and allies refer to with awe, is known to be a key weapon that can turn the tide of battle when it appears on certain fronts.

    It is the final form of the autonomous demolisher tank model that can be produced with current technology, stationed across multiple fronts to effectively suppress the enemy's frontline.`
  },
};
