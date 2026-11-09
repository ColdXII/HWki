import type { CharacterDetails } from "../types";

export const araha: CharacterDetails = {
  skins: [
    {
      id: "araha-s1",
      name: "Midnight Blue Bunny Girl",
      portrait: "/characters/araha/araha-s1p.webp",
      fullBody: "/characters/araha/araha-s1.webp",
      fullBodyCensored: "/characters/araha/araha-s1c.webp",
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
          url: "https://youtu.be/Xo7war0xaoY",
          title: "Official PV",
        },
      ],
    },
    {
      id: "araha-s2",
      name: "Sweet Gingerbread Girl",
      portrait: "/characters/araha/araha-s2p.webp",
      fullBody: "/characters/araha/araha-s2.webp",
      fullBodyCensored: "/characters/araha/araha-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "araha-s4",
      name: "???",
      portrait: "/characters/araha/araha-s4p.webp",
      fullBody: "/characters/araha/araha-s4.webp",
      fullBodyCensored: "/characters/araha/araha-s4c.webp",
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
          url: "https://youtube.com/shorts/EO9NchVqyEg?si=zdZZokNNKO3JE8-I",
          title: "Official PV",
        },
        {
          source: "youtube",
          url: "https://youtu.be/Oi0ITyG6lLs",
          title: "Slider Preview 1",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2105938364604248207",
          title: "Slider Preview 2",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority:\n1. Crit Damage\n2. Ranged Attack\n3. AP Recovery",
      weapon: { id: "jk220-artemis", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "phantom-banquet", slot: "top", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "phantom-banquet", slot: "left", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "phantom-banquet", slot: "right", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "phantom-banquet", slot: "bottom", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: ["ambush-weak-point", "doom", "desperate", "penetrating", "piercing", "functional"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Damage\n2. Ranged Attack\n3. AP Recovery",
      weapon: { id: "jk220-artemis", level: 60, dupe: 5 },
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
          set: "reckoning-of-sin-ss", slot: "left", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-nobles-tactics", slot: "right", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: ["ambush-weak-point", "doom", "desperate", "penetrating", "piercing", "functional"],
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
      damage: { stat: "rangedAtk", percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190], damageType: "Pierce" },
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

      - [Camouflage: Stealth]: Enters Stealth and cannot be targeted by enemy skills. While in Stealth, the first attack made has 100% Crit Rate and {CamouflageStealth}% increased Crit DMG.`,
      damage: { stat: "rangedAtk", percent: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285], damageType: "Pierce" },
      values: {
        CamouflageStealth: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
      },
    },
  ],

  weaponType: "Rifle",

  basic: { str: 7, tec: 14, int: 9, vit: 8, agi: 9 },

  gradeGains: {
    B: { agi: -1 },
    A: { tec: -1 },
    S: { vit: -1 },
    EX: { tec: 1 },
    EX1: { tec: 1 },
    EX2: { agi: 1 },
    EX3: { tec: 1 },
    EX4: { vit: 1 },
    EX5: { tec: 1 },
    EX6: { tec: 1 },
  },

  traits: [
    "bullseye",
    "guaranteed-hit",
    "wood-elf",
    "interested-ranged",
    "professional",
    "piercing",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 143, grade: "SS" },
  },

  profile: {
    age: "210",
    race: "Wood Elf",
    homeland: "The Empire, Kaisersberg",
    height: "160cm",
    birthday: "February 9th",
    bwh: "80(G)-47-88",
    story: `Among the Wood Elves who refused to abandon their forest, few lived to tell the tale. Araha, an archer with flawless aim, was one of the rare survivors.

    Unlike her kin, her parents had served the Empire, and she had grown up among humans. This background made the decision to flee through a Rift an easy one, but the escape took its toll.

    The real tragedy wasn’t leaving her homeland behind. It was losing her family to the Rift’s Oblivia. Grief consumed Araha, but just as she was about to be lost to it, Yeon Chae-young, an agent of the Bureau of Rift Management, pulled her back.

    “You can’t bring them back… but you can at least make those responsible pay.”

    That simple suggestion turned her sorrow into purpose. Araha was a natural with a bow, and adapting to a sniper rifle came easily. Before long, she became one of the few non-humans to be recruited as a Vanguard for Discover.

    She now has only one goal: to end the Rift Crisis and rebuild what was lost. It’s a distant dream, but if there’s even the slightest chance of finding her family again, she’ll do whatever it takes.`,
  },

  gifts: [
    { gift: "gun-maintenance-kit", value: 30 },
    { gift: "orca-documentary", value: 20 },
    { gift: "fire-octopus-noodles", value: 20 },
  ],
};
