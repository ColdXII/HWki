import type { CharacterDetails } from "../types";

export const bella: CharacterDetails = {
  skins: [
    {
      id: "bella-s1",
      name: "Combat Uniform",
      portrait: "/characters/bella/bella-s1p.webp",
      fullBody: "/characters/bella/bella-s1.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "bella-s2",
      name: "Scarlet Bunny Girl",
      portrait: "/characters/bella/bella-s2p.webp",
      fullBody: "/characters/bella/bella-s2.webp",
      fullBodyCensored: "/characters/bella/bella-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "bella-s3",
      name: "Shyless Maid",
      portrait: "/characters/bella/bella-s3p.webp",
      fullBody: "/characters/bella/bella-s3.webp",
      fullBodyCensored: "/characters/bella/bella-s3c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "bella-s4",
      name: "Latte Date",
      portrait: "/characters/bella/bella-s4p.webp",
      fullBody: "/characters/bella/bella-s4.webp",
      fullBodyCensored: "/characters/bella/bella-s4c.webp",
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
          url: "https://youtu.be/GG1ASspSiAM",
          title: "Official PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1: Healer",
      recommended: true,
      note: "Substats Priority:\n1. Magic Attack\n2. Max HP\n3. Starting AP",
      weapon: { id: "sacrament-of-mercy", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked", "persistent"],
    },
    {
      id: "late-game-2",
      name: "Late Game 2: Bonk",
      note: "Substats Priority:\n1. Crit Damage\n2. Magic ATK",
      weapon: { id: "sacrament-of-mercy", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "scorching-sun",
          slot: "top",
          grade: "EX",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "left",
          grade: "EX",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "right",
          grade: "EX",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
          grade: "EX",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked", "persistent"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Magic Attack\n2. Max HP\n3. Starting AP",
      weapon: { id: "sacrament-of-mercy", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked", "persistent"],
    },
  ],

  skills: [
    {
      id: "guardians-strike",
      name: "Guardian's Strike",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/bella/ba.webp",
      description: `Swings a mace to attack the enemy.
      Deals Crush DMG equal to {damage}% of Melee ATK and reduces the target's AP by 5.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Crush",
      },
    },
    {
      id: "grace-of-healing",
      name: "Grace of Healing",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/bella/s1.webp",
      description: `Prays to the Goddess of the Split Twigs with a devout heart for the healing of an ally.
      Recovers the HP of a designated ally by {heal}% of Magic ATK.`,
      values: {
        heal: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "life-regeneration",
      name: "Life Regeneration",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/bella/s2.webp",
      description: `Offers a solemn prayer for the mercy of the Goddess of Split Twigs.
      Recovers the HP of allies within a 2.5m circular range by {heal}% of Magic ATK.`,
      values: {
        heal: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
      },
    },
    {
      id: "reviving-bough",
      name: "Reviving Bough",
      type: "Active",
      ap: 90,
      cooldown: 0,
      icon: "/skills/bella/s3.webp",
      description: `Opens the path of the branches to invoke the goddess's miracle.
      Restores consciousness to one incapacitated ally and recovers HP by {heal}% of Magic ATK.
      The target resumes battle with AP set to {ap}.`,
      values: {
        heal: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
        ap: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
  ],

  weaponType: "Club & Shield",

  basic: { str: 9, tec: 6, int: 9, vit: 11, agi: 10 },

  gradeGains: {
    B: { str: -1 },
    A: { int: -1 },
    SS: { int: 1 },
    EX: { str: 1 },
    EX1: { vit: 1 },
    EX2: { int: 1 },
    EX3: { str: 1 },
    EX4: { int: 1 },
    EX5: { str: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "gods-beloved",
    "reviving-bough",
    "marlon",
    "interested-magic",
    "faithful",
    "heaven-sent",
    "pitiful",
  ],

  manual: {
    spd: 87,
    startApSeen: { value: 121, grade: "S" },
  },

  profile: {
    age: "22",
    race: "Marlon",
    homeland: "The Empire, Kaisersberg",
    height: "157cm",
    birthday: "April 20th",
    bwh: "84(F)-52-90",
    story: `Bella, who was an outstanding healer of the Church of the Life Branch, played a crucial role in paving the way for Princess Maximilia’s journey to Earth. Even after arriving on Earth, Bella did not stop healing people.

    She obtained a nursing assistant license and used the power of the Life Branch to heal people at the hospital, earning respect far beyond her formal rank. Currently, she has enlisted as a Vanguard at the recommendation of Yeon Chae-young.

    Although her abilities are still needed in the hospital, she aims to spread the influence of the goddess she serves to more people, and to connect her goddess, who has lost her foundation, with the Human God of this new world.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtube.com/shorts/-QX2WL1qWgU?si=jg7cbChJemL-j7Fd",
        title: "Ads PV 1",
      },
      {
        source: "youtube",
        url: "https://youtube.com/shorts/KVgLsZHELdI?si=asrsckFv9NgSo-xZ",
        title: "Ads PV 2",
      },
      {
        source: "youtube",
        url: "https://youtu.be/gNuEz6CQliw",
        title: "Affection PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/UEg4zBD7NKs",
        title: "Lobby PV",
      },
    ],
  },

  gifts: [
    { gift: "scripture-of-the-goddess-of-the-split-twigs", value: 40 },
    { gift: "strawberry-chubby-macaron", value: 20 },
  ],
};
