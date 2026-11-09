import type { CharacterDetails } from "../types";

export const platina: CharacterDetails = {
  skins: [],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Melee Attack",
      weapon: { id: "the-first-heart", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "lifebound", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "lifebound", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "protection", level: 5 },
        { id: "frost", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Melee Attack",
      weapon: { id: "the-first-heart", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "protection", level: 5 },
        { id: "frost", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Melee Attack",
      weapon: { id: "the-first-heart", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "shield-bash",
      name: "Shield Bash",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/platina/ba.webp",
      description: `Conjures blades of wind to attack. Designates a target, attacking with a sword and striking with a shield.
      Deals Slash DMG equal to {damage}% of Melee ATK to the hit enemy and has a {chance}% chance to inflict [Stun].
      This skill transitions to the [Sword Strike] skill while in [Shield Deployment] state.

      [Sword Strike]:
      While in [Shield Deployment] state, designates a target and attacks with a sword.
      Deals Slash DMG equal to {damage2}% of Melee ATK to the hit enemy.`,
      damage: [
        { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Slash" },
        { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Slash" },
      ],
      values: {
        chance: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "song-of-the-sword",
      name: "Song of the Sword",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/platina/s1.webp",
      description: `Rotates in place, swinging the sword to attack.
      Deals Slash DMG equal to {damage}% of Melee ATK to all enemies within a 2.5m circular range, enters [Shield Deployment] state, and gains [Gravity Focus] effect.

      - [Shield Deployment]: Increases Block Chance by 15%, increases Aggro Adjustment, and increases Physical DEF by 150.
      This skill changes to [Song of the Shield] while in [Shield Deployment] state.
      Block Chance is capped at 75%.

      [Song of the Shield]:
      While in [Shield Deployment] state, rotates in place, 
      Swinging the sword to deal Slash DMG equal to {damage2}% of Melee ATK to all targets within 2.5m, and cancels the [Shield Deployment] state.`,
      damage: [
        { stat: "meleeAtk", percent: [90, 99, 108, 117, 126, 135, 144, 153, 162, 171], damageType: "Slash" },
        { stat: "meleeAtk", percent: [90, 99, 108, 117, 126, 135, 144, 153, 162, 171], damageType: "Slash" },
      ],
      values: {
        shield: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "gravity-fall",
      name: "Gravity Fall",
      type: "Active",
      ap: 90,
      cooldown: 0,
      icon: "/skills/platina/s2.webp",
      description: `Can only be activated by consuming the [Gravity Focus] effect if possessed.
      Leaps high in place and descends towards the target point.
      
      Upon landing, deals Crush DMG equal to {damage}% of Melee ATK to enemies within a 6m radius and pulls them in by 5m.
      Applies [Slow] effect to all targets for 2R, and the user enters [Shield Deployment] state after using the skill.
      Weak Point attacks cannot be performed with this skill.

      - [Slow]: Reduces SPD by 40%.

      [SIGNATURE WEAPON EFFECT]:
      Upon starting the battle, gains the [Gravity Focus] effect.`,
      damage: { stat: "meleeAtk", percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152], damageType: "Crush" },
    },
    {   
      id: "heart-of-platinum",
      name: "Heart of Platinum",
      type: "Passive",
      icon: "/skills/platina/p.webp",
      description: `If not in the [Shield Deployment] state, gain the [Platinum Heart] effect at the start of the turn.
      When attacked while in [Shield Deployment], gain the [Platinum Aura] effect.

      - [Platinum Heart]: Increases Melee ATK power by {meleeAtk}% until the end of the turn.
      - [Platinum Aura]: Reduces AP consumption for the [Song of the Shield] skill by {ap}%.
      Stacks up to 8 times. This effect is removed when [Shield Deployment] state ends.`,
      values: {
        meleeAtk: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
        ap: [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 28.5],
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Iron Causality",
      icon: "/skills/platina/iron-causality.webp",
      description: `During battle, Platina's Max HP increases by {maxHp}%, and Aggro Adjustment increases by {aggroAdj}.

      All enemies attacked by Platina have All ATK reduced by 33% and DMG Taken increased by {damageTaken}% for 2R.

      Once per battle, when Platina receives damage that would reduce her HP to 0, her HP is fully restored, and she immediately gains 150 AP.`,
      values: {
        maxHp: [30, 33, 36, 39, 42, 45, 48],
        aggroAdj: [100, 110, 120, 130, 140, 150, 160],
        allAtk: [15, 18, 21, 24, 27, 30, 33],
        damageTaken: [10, 12, 14, 16, 18, 20, 22],
      },
    },
  },

  weaponType: "Ancient Core",

  basic: { str: 11, tec: 9, int: 9, vit: 24, agi: 11 },

  gradeGains: {
    B: { vit: -2 },
    A: { str: -1 },
    S: { agi: -2 },
    SS: { vit: -2 },
    EX1: { str: 1 },
    EX2: { vit: 2 },
    EX3: { str: 1 },
    EX4: { agi: 2 },
    EX5: { vit: 2 },
    EX6: { str: 1 },
  },

  traits: [
    "vigilant-knight",
    "guardians-stance",
    "rakhtan",
    "righteous",
    "unyielding",
    "bulletproof",
  ],

  manual: {
    spd: 92,
    startApSeen: { value: 123, grade: "EX" },
  },

  profile: {
    age: "500+",
    race: "Rakhtan",
    homeland: "Somewhere Between Dimensions",
    height: "280cm",
    birthday: "Unknown",
    bwh: "??",
    story: `Born from the gaps between dimensions, Platina is one of the "Dimension Guardians," a metallic lifeform created within these interdimensional fissures. Among these guardians, Platina stands out, adorned in unique platinum armor, and she is convinced that her birth with such a noble color is for a special purpose.

    She vowed to protect the most dangerous dimensional breaches, and, after meeting the first Human God, she now guards the most perilous relic within the dimension.`,
  },
};
