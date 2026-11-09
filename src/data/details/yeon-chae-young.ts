import type { CharacterDetails } from "../types";

export const yeon_chae_young: CharacterDetails = {
  skins: [
    {
      id: "yeonchaeyoung-s1",
      name: "Red Notice",
      portrait: "/characters/yeonchaeyoung/yeonchaeyoung-s1p.webp",
      fullBody: "/characters/yeonchaeyoung/yeonchaeyoung-s1.webp",
      fullBodyCensored: "/characters/yeonchaeyoung/yeonchaeyoung-s1c.webp",
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
          url: "https://youtu.be/31Djkt6tkqU",
          title: "Official Youtube",
        },
      ],
    },
    {
      id: "yeonchaeyoung-s2",
      name: "???",
      portrait: "/characters/yeonchaeyoung/yeonchaeyoung-s2p.webp",
      fullBody: "/characters/yeonchaeyoung/yeonchaeyoung-s2.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "yeonchaeyoung-s4",
      name: "???",
      portrait: "/characters/yeonchaeyoung/yeonchaeyoung-s4p.webp",
      fullBody: "/characters/yeonchaeyoung/yeonchaeyoung-s4.webp",
      fullBodyCensored: "/characters/yeonchaeyoung/yeonchaeyoung-s4c.webp",
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
          url: "https://youtu.be/5kr42JsHFAk",
          title: "Official Youtube",
        },
      ],
    },
    {
      id: "yeonchaeyoung-s6",
      name: "???",
      portrait: "/characters/yeonchaeyoung/yeonchaeyoung-s6p.webp",
      fullBody: "/characters/yeonchaeyoung/yeonchaeyoung-s6.webp",
      fullBodyCensored: "/characters/yeonchaeyoung/yeonchaeyoung-s6c.webp",
      sources: [
        {
          type: "shop",
          price: 850,
          available: true,
        },
      ],
      pv: [
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2097211157866258835",
          title: "Slider Preview",
        },
      ],
    },
    {
      id: "yeonchaeyoung-s7",
      name: "???",
      portrait: "/characters/yeonchaeyoung/yeonchaeyoung-s7p.webp",
      fullBody: "/characters/yeonchaeyoung/yeonchaeyoung-s7.webp",
      fullBodyCensored: "/characters/yeonchaeyoung/yeonchaeyoung-s7c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. Crit Rate (50%)\n2. Crit Damage\n3. Ranged Attack",
      weapon: { id: "dmp-9-prototype", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "phantom-banquet",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "insight", level: 5 },
        { id: "pursuit", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Rate (50%)\n2. Crit Damage\n3. Ranged Attack",
      weapon: { id: "dmp-9-prototype", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "phantom-banquet",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-four-horseman",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-four-horseman",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "insight", level: 5 },
        { id: "pursuit", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Rate (50%)\n2. Crit Damage\n3. Ranged Attack",
      weapon: { id: "dmp-9-prototype", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-nobles-tactics",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-nobles-tactics",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "pistol-fire",
      name: "Pistol Fire",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/yeonchaeyoung/ba.webp",
      description: `Calmly shoots at the target.
      Deals Pierce DMG equal to {damage}% of Ranged ATK.`,
      damage: {
        stat: "rangedAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "conceal",
      name: "Conceal",
      type: "Passive",
      icon: "/skills/yeonchaeyoung/p1.webp",
      description: `When attacking an enemy's weak point, uses optical camouflage to hide.
      Once per Round, at the end of a turn where you performed a Weak Point Attack, there is a {chance}% chance to gain [Conceal: Stealth].
      Activation chance increases by 1% for every 1% of your missing HP.

      - [Conceal: Stealth]: Becomes hidden and cannot be targeted by enemy skills. SPD decreases by 10%, and Accuracy increases by 50% for the first attack while hidden.

      [SIGNATURE WEAPON EFFECT]:
      During combat, increases Crit DMG by 10%.
      At the start of combat and after landing a Weak Point Attack, enter Stealth until the end of your turn.`,
      values: {
        chance: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "assassination",
      name: "Assassination",
      type: "Active",
      ap: 45,
      cooldown: 1,
      icon: "/skills/yeonchaeyoung/s1.webp",
      description: `Approaches the enemy and delivers an Unblockable point-blank shot.
      Deals Pierce DMG equal to {damage}% of Ranged ATK.
      This attack is always considered to be from behind the enemy and ignores counterattack effects.
      During this attack, Accuracy temporarily increases by 300%.`,
      damage: {
        stat: "rangedAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Pierce",
      },
    },
    {
      id: "mass-execution",
      name: "Mass Execution",
      type: "Active",
      ap: 90,
      cooldown: 1,
      icon: "/skills/yeonchaeyoung/s2.webp",
      description: `Performs a quick and precise rapid shot on up to 3 enemies.
      Executes a distributed attack in order of proximity, dealing Pierce DMG equal to {damage}% of Ranged ATK divided by the number of targets.`,
      damage: {
        stat: "rangedAtk",
        percent: [180, 198, 216, 234, 252, 270, 288, 306, 324, 342],
        damageType: "Pierce",
      },
    },
    {
      id: "unavoidable-eyes",
      name: "Unavoidable Eyes",
      type: "Passive",
      icon: "/skills/yeonchaeyoung/p2.webp",
      description: `Identifies the enemy's weak point and guides allies.
      Increases Accuracy of all allies by {accuracy}%.`,
      values: {
        accuracy: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Trail of Providence",
      icon: "/skills/yeonchaeyoung/trail-of-providence.webp",
      description: `During battle, AP Cost of all skills decreases by {ap}, Ranged ATK increases by {rangedAtk}%, and Crit DMG increases by {critDmg}%.

      Additionally, {count} times per round, when an enemy within 5m finishes their action, immediately performs an additional Reaction using [Mass Execution] and reduces Cooldown of all skills by 1R.

      After the additional Reaction, gains [Stealth].

      For each enemy successfully hit by [Mass Execution], gains {ap} AP.`,
      values: {
        apCost: [4, 5, 6, 7, 8, 9, 10],
        rangedAtk: [50, 55, 60, 65, 70, 75, 80],
        critDmg: [30, 33, 36, 39, 42, 45, 48],
        count: [3, 3, 3, 5, 5, 5, 5],
        ap: [8, 10, 12, 14, 16, 18, 20],
      },
    },
  },

  weaponType: "Dual Pistols",

  basic: { str: 7, tec: 13, int: 9, vit: 10, agi: 6 },

  gradeGains: {
    B: { vit: -1 },
    A: { tec: -1 },
    SS: { agi: 1 },
    EX: { vit: 1 },
    EX1: { tec: 1 },
    EX2: { vit: 1 },
    EX3: { tec: 1 },
    EX4: { vit: 1 },
    EX5: { agi: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "efficient-tactics",
    "first-blood",
    "human",
    "interested-ranged",
    "competent",
    "meticulous",
    "overworked",
  ],

  manual: {
    spd: 88,
    startApSeen: { value: 117, grade: "S" },
  },

  profile: {
    age: "27",
    race: "Human",
    homeland: "East Asia Federation, Fukuoka",
    height: "170cm",
    birthday: "May 8th",
    bwh: "103(L)-56-105",
    story: `During her adolescence, Yeon Chae-young lost her parents to an Abomination. That experience led her to deeply question the role of the state, which ultimately had a profound influence on her decision to apply to the Bureau of Rift Management. Passing the administrative examination for Rift management, widely considered one of the highest elite paths in the Federation, Yeon Chae-young qualified as a fifth-grade officer and chose to volunteer for field duty, becoming an active field agent.

    And then she met him. Within the Rift's barrier, sacrificing himself for countless people only to rise again and obliterate the Blood Maker in an instant, she met the Human God. In that moment, she knew it was destiny.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtube.com/shorts/4UZLCiyLpOQ?si=6qtS1cyzADDbsJLM",
        title: "Ads PV 1",
      },
      {
        source: "youtube",
        url: "https://youtube.com/shorts/m7VeaBm25mg?si=WfGv06Z1h6w-cHU9",
        title: "Ads PV 2",
      },
      {
        source: "youtube",
        url: "https://youtu.be/q5L-VqmPSJA",
        title: "Affection PV",
      },
    ]
  },

  gifts: [
    { gift: "americano-voucher", value: 30 },
    { gift: "gun-maintenance-kit", value: 20 },
  ],
};
