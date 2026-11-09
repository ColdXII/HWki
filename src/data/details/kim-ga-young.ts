import type { CharacterDetails } from "../types";

export const kim_ga_young: CharacterDetails = {
  skins: [
    {
      id: "kimgayoung-s1",
      name: "Beachside Vacation",
      portrait: "/characters/kimgayoung/kimgayoung-s1p.webp",
      fullBody: "/characters/kimgayoung/kimgayoung-s1.webp",
      fullBodyCensored: "/characters/kimgayoung/kimgayoung-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "kimgayoung-s2",
      name: "Bold at Heart Lingerie",
      portrait: "/characters/kimgayoung/kimgayoung-s2p.webp",
      fullBody: "/characters/kimgayoung/kimgayoung-s2.webp",
      fullBodyCensored: "/characters/kimgayoung/kimgayoung-s2c.webp",
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
          url: "https://youtu.be/Pfu7uYUVLI0",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2000777539586023881",
          title: "X PV",
        },
      ],
    },
    {
      id: "kimgayoung-s4",
      name: "???",
      portrait: "/characters/kimgayoung/kimgayoung-s4p.webp",
      fullBody: "/characters/kimgayoung/kimgayoung-s4.webp",
      fullBodyCensored: "/characters/kimgayoung/kimgayoung-s4c.webp",
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
      note: "Substats Priority:\n1. Crit Rate (60%)\n2. Crit Damage\n3. Ranged Attack",
      weapon: { id: "ss4-refitted-model", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "phantom-banquet",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
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
      ],
      generalTraits: ["methodical", "efficient", "competent"],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Rate (60%)\n2. Crit Damage\n3. Ranged Attack",
      weapon: { id: "ss4-refitted-model", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-four-horseman",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-four-horseman",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-four-horseman",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-four-horseman",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: ["methodical", "efficient", "competent"],
    },

    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Rate (60%)\n2. Crit Damage",
      weapon: { id: "ss4-refitted-model", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-nobles-tactics",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-nobles-tactics",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: ["methodical", "efficient", "competent"],
    },
  ],

  skills: [
    {
      id: "sniping",
      name: "Sniping",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/araha/ba.webp",
      description: `Snipes an enemy with a rifle.
        Deals Pierce DMG equal to {damage}% of Ranged ATK and makes the target Unable to Counterattack for 1 round.
        During this attack, own ACC temporarily decreases by 15%.`,
      damage: {
        stat: "rangedAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Pierce",
      },
    },
    {
      id: "support-fire",
      name: "Support Fire",
      type: "Passive",
      maxLevel: 1,
      icon: "/skills/araha/p.webp",
      description: `Gains 10 AP on each successful Support Counterattack or Support Attack.`,
    },
    {
      id: "camouflage",
      name: "Camouflage",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/araha/s1.webp",
      description: `Uses the drone's optical functions to conceal herself.
      Gains [Camouflage: Stealth] for 3R.

      - [Camouflage: Stealth]: Enters Stealth and cannot be targeted by enemy skills. While in Stealth, the first attack made has 100% Crit Rate and {CamouflageStealth}% increased Crit DMG.`,
      values: {
        CamouflageStealth: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
      },
    },
    {
      id: "wire-maneuver-shot",
      name: "Wire Maneuver Shot",
      type: "Active",
      ap: 90,
      cooldown: 5,
      icon: "/skills/araha/s2.webp",
      description: `Rapidly fires at the enemy, then uses the ultralight wires of all her drones to leap 5m behind the target.
      Deals Pierce DMG equal to {damage}% of Ranged ATK to the enemy hit.
      After landing, gains [Camouflage: Stealth] for 3R.

      - [Camouflage: Stealth]: Enters Stealth and cannot be targeted by enemy skills. While in Stealth, the first attack made has 100% Crit Rate and {CamouflageStealth}% increased Crit DMG.

      [SIGNATURE WEAPON EFFECT]:
      When performing a Support Attack, reduces the cooldown of [Wire Maneuver Shot] by 1R.`,
      damage: {
        stat: "rangedAtk",
        percent: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
        damageType: "Pierce",
      },
      values: {
        CamouflageStealth: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
      },
    },
  ],

  weaponType: "Rifle",

  basic: { str: 7, tec: 14, int: 9, vit: 7, agi: 9 },

  gradeGains: {
    B: { agi: -1 },
    A: { tec: -1 },
    SS: { vit: 1 },
    EX: { tec: 1 },
    EX1: { tec: 1 },
    EX2: { agi: 1 },
    EX3: { tec: 1 },
    EX4: { vit: 1 },
    EX5: { tec: 1 },
    EX6: { tec: 1 },
  },

  traits: [
    "yeon-chae-young-fan-club",
    "drone-scouting",
    "human",
    "interested-ranged",
    "useful",
    "persistent",
  ],

  manual: {
    spd: 88,
    startApSeen: { value: 124, grade: "S" },
  },

  profile: {
    age: "23",
    race: "Human",
    homeland: "East Asia Federation, Yeongwol",
    height: "160cm",
    birthday: "October 10th",
    bwh: "72(C)-46-87",
    story: `Kim Ga-young was an ordinary girl who lived her life as naturally as water flows. Though her academic performance was always outstanding, she simply followed what others told her to do, eventually getting into a prestigious university.

    One day, by chance, she witnessed Yeon Chae-young commanding a Rift site, a scene that left a deep impression on her, especially seeing a woman take charge so confidently. It was a defining moment for Ga-young; she had found her role model.

    Inspired by Yeon Chae-young, she decided that she wanted to become an impressive woman like her, and immediately began studying for the civil service examination. Given her talent for studying, she passed the exam with ease and applied to become an agent under Yeon Chae-young's lead.

    Though people around her expressed concerns, she remained determined for the first time in her life. Although she couldn't become a dedicated agent to the Human God like Yeon Chae-young, she managed to become a scout that supports them.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/EfbEIIMc3nw",
        title: "Affection PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2000833243227263199",
        title: "X PV",
      },
    ],
  },

  gifts: [
    { gift: "fire-octopus-noodles", value: 30 },
    { gift: "strawberry-chubby-macaron", value: 20 },
    { gift: "glazed-fruit-stick", value: 20 },
    { gift: "forbidden-romance", value: 20 },
    { gift: "setflix-membership-voucher", value: 20 },
    { gift: "americano-voucher", value: 20 },
  ],
};
