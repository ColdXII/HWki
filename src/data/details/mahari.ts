import type { CharacterDetails } from "../types";

export const mahari: CharacterDetails = {
  skins: [
    {
      id: "mahari-s1",
      name: "Secret Date",
      portrait: "/characters/mahari/mahari-s1p.webp",
      fullBody: "/characters/mahari/mahari-s1.webp",
      fullBodyCensored: "/characters/mahari/mahari-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/oiWtAsdTypI?si=xmBnDtD40agVObsa",
          title: "Official PV",
        },
      ],
    },
    {
      id: "mahari-s2",
      name: "Gently Wet",
      portrait: "/characters/mahari/mahari-s2p.webp",
      fullBody: "/characters/mahari/mahari-s2.webp",
      fullBodyCensored: "/characters/mahari/mahari-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/Nv1KjZ5MeAA?si=SnWT1xiKtQ0RCCHY",
          title: "Official PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority: \n1. Crit Damage\n2. Starting AP",
      weapon: { id: "the-arms-of-laphnesis", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Crit Damage\n2. Starting AP",
      weapon: { id: "the-arms-of-laphnesis", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "thorny-heart",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "thorny-heart",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "gap-stab",
      name: "Gap Stab",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/mahari/ba.webp",
      description: `Stabs with a sword to attack.
      Deals Pierce DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "threat-attack",
      name: "Threat Attack",
      type: "Active",
      ap: 45,
      cooldown: 3,
      icon: "/skills/mahari/s1.webp",
      description: `Deals a threatening sword strike to the enemy.
      Deals {damage}% of Melee ATK as Pierce DMG and inflicts [Taunt] effect to the target for 2R.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "wall-of-annihilation",
      name: "Wall of Annihilation",
      type: "Active",
      ap: 55,
      cooldown: 1,
      icon: "/skills/mahari/s2.webp",
      description: `Raises a massive shield wall to draw enemy attention and protect allies.
      Deals Crush Damage equal to {damage}% of your Melee ATK power to enemies within a 7m, 150º cone and summons a [Shield Wall] in front of you.
      Enemies hit by the attack receive the [Impending Threat] effect for 2 rounds and will face you at the end of their turn.
      This skill applies as a Weak Point Attack if the enemy has a Weak Point.

      - [Impending Threat]: Affected targets cannot turn toward their attacker upon being hit.
      - [Shield Wall]: Increases the skill user's Aggro Adjustment by {aggroAdj}.
      While [Shield Wall] is active, All DEF increase by {allDef}, and you cannot be pushed, pulled, or countered.
      The Shield Wall inherits 50% of the skill user's max HP and defense, and it disappears at the start of the skill user's turn.`,
      damage: {
        stat: "meleeAtk",
        percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
        damageType: "Crush",
      },
      values: {
        aggroAdj: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
        allDef: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550],
      },
    },
    {
      id: "resolve-of-reversal",
      name: "Resolve of Reversal",
      type: "Passive",
      icon: "/skills/mahari/p1.webp",
      description: `Activates once per round.
      After landing a Weak Point Attack, gain a [Resolve of Reversal] shield that lasts for 2 rounds.

      [Resolve of Reversal]: Grants a shield equal to 40% of Max HP + {shield}% of Melee ATK.`,
      values: {
        shield: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
      },
    },
    {
      id: "will-of-resistance",
      name: "Will of Resistance",
      type: "Passive",
      icon: "/skills/mahari/p2.webp",
      description: `During battle, All DEF increase by {allDef}.
      On successful Weak Point Attack, All DEF additionally increases by {allDef2} for 2R, and while having the [Resolve of Reversal] shield, Aggro Adjustment increases by {aggroAdj}.`,
      values: {
        allDef: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        allDef2: [90, 99, 108, 117, 126, 135, 144, 153, 162, 171],
        aggroAdj: [33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
      },
    },
  ],

  weaponType: "One-handed Sword & Shield",

  basic: { str: 8, tec: 6, int: 7, vit: 15, agi: 9 },

  gradeGains: {
    B: { vit: -1 },
    A: { vit: -1 },
    S: { str: -1 },
    SS: { agi: -1 },
    EX1: { vit: 1 },
    EX2: { vit: 1 },
    EX3: { vit: 1 },
    EX4: { str: 1 },
    EX5: { agi: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "lamoras-revenant",
    "wall-of-annihilation",
    "lamora",
    "interested-melee",
    "overworked",
    "resilient",
    "urgent",
  ],

  manual: {
    spd: 113,
    startApSeen: { value: 124, grade: "EX" },
  },

  profile: {
    age: "24",
    race: "Lamora",
    homeland: "City of Bel-lamori",
    height: "163cm",
    birthday: "21st-Month 893rd",
    bwh: "72(C)-47-88",
    story: `Mahari is a new recruit of the 4th Legion, famous for capturing and executing the gladiator-skyrogue Kalakul. Born into a deeply traditional military family, she completed her training with excellent marks, earning her placement in the 4th Legion. Mahari herself dreamed of capturing a notorious pirate and thereby contributing to the Republic's honor and glory.

    However, when the Rift opened and the 4th Legion attempted to escape to avoid destruction, they were suddenly ambushed by Kesak skyrogues. At the time, there was an unspoken agreement that Lamora and Kesak would no longer engage in conflict, leaving the 4th Legion unprepared to deal with both the Rift and the skyrogues.

    The legion was overwhelmed, most of its members perished, and the survivors scattered in disarray. Mahari survived only thanks to the sacrifices and care of her senior comrades, but was ultimately left alone.

    After arriving on Earth, she officially applied for refugee status, harboring a desire to avenge herself against Kesak and resume the honorable path of a soldier.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/3k8LGq6coKo?si=rt7vjnAj392cyVsu",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/VEQt5yB0GdM?si=2z7lbFuAQars7z_I",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "lamora-military-ration", value: 40 },
    { gift: "hotel-restaurant-meal-voucher", value: 30 },
    { gift: "training-equipment-set", value: 20 },
  ],
};
