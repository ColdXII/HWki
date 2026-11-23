import type { CharacterDetails } from "../types";

export const min_eun_sol: CharacterDetails = {
  skins: [
    {
      id: "mineunsol-s1",
      name: "Pastel Pink Bunny Girl",
      portrait: "/characters/mineunsol/mineunsol-s1p.webp",
      fullBody: "/characters/mineunsol/mineunsol-s1.webp",
      fullBodyCensored: "/characters/mineunsol/mineunsol-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "mineunsol-s2",
      name: "Dress of Everlasting Devotion",
      portrait: "/characters/mineunsol/mineunsol-s2p.webp",
      fullBody: "/characters/mineunsol/mineunsol-s2.webp",
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
          url: "https://youtube.com/shorts/Lcg9U3pGyZU",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2122615786078666955",
          title: "X PV",
        },
        {
          source: "youtube",
          url: "https://youtu.be/LBGTPv5s7R0",
          title: "Slider PV 1",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2122616000000762262",
          title: "Slider PV 2",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      note: "Substats Priority: \n1. AP Recovery\n2. Magic Attack",
      weapon: { id: "the-black-idol", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex", slot: "top", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "left", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "right", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. AP Recovery\n2. Magic Attack",
      weapon: { id: "the-black-idol", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss", slot: "top", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "left", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "right", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "mental-shock",
      name: "Mental Shock",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/mineunsol/ba.webp",
      description: `Shocks the enemy's mind with an unblockable attack.
      Deals Immaterial DMG equal to {damage}% of Magic ATK.`,
      damage: [
        { stat: "magicAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Immaterial" },
      ],
    },
    {   
      id: "kings-offering",
      name: "King's Offering",
      type: "Passive",
      icon: "/skills/mineunsol/p1.webp",
      description: `"This creature is the offering of the Dark King, and none shall covet it."

      At the start of each round, increases the Human God's All ATK and Immaterial Boost by {buff}% for 1R.
      From the start to the end of any unit's turn, increases Min Eun-sol's Magic ATK by the sum of the Human God's ATK stats.`,
      values: {
        buff: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "devour-will",
      name: "Devour Will",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/mineunsol/s1.webp",
      description: `The Dark King's power devours the enemy's will to survive.
      Deals Immaterial DMG equal to {damage}% of Magic ATK to the enemy and applies [Loss of Will] for 1R.
      
      - [Loss of Will]: Reduces AP by 5 and prevents Evades and Counterattacks.`,
      damage: { stat: "magicAtk", percent: [120, 132, 144, 156, 168, 180, 192, 204, 216, 228], damageType: "Immaterial" },
    },
    {
      id: "kings-favor",
      name: "King's Favor",
      type: "Passive",
      icon: "/skills/mineunsol/p2.webp",
      description: `From the start to the end of any unit's turn, increases Final DMG by {finalDmg}% of AP Recovery. This effect reaches its maximum at 300 AP Recovery.`,
      values: {
        finalDmg: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      },
    },
    {
      id: "the-kings-wrath",
      name: "The King's Wrath",
      type: "Active",
      ap: 90,
      cooldown: 0,
      icon: "/skills/mineunsol/s2.webp",
      description: `A mysterious gaze watches, its owner unknown.
      Deals Immaterial DMG equal to {damage}% of Magic ATK to the enemy.`,
      damage: { stat: "magicAtk", percent: [600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140], damageType: "Immaterial" },
    },
  ],

  weaponType: "Mana Shard",

  basic: { str: 5, tec: 6, int: 14, vit: 13, agi: 5 },

  gradeGains: {
    B: { int: -1 },
    S: { agi: 1 },
    SS: { vit: 1 },
    EX: { int: 2 },
    EX1: { int: 2 },
    EX2: { int: 1 },
    EX3: { agi: 1 },
    EX4: { vit: 1 },
    EX5: { int: 2 },
    EX6: { int: 2 },
  },

  traits: [
    "wholehearted",
    "the-sacrifice-unleashed",
    "human",
    "interested-magic",
    "peaceful",
    "dogmatic",
  ],

  manual: {
    spd: 79,
    startApSeen: { value: 110, grade: "A" },
  },

  profile: {
    age: "21",
    race: "Human",
    homeland: "East Asia Federation, Seoul",
    height: "158cm",
    birthday: "January 20th",
    bwh: "72(C)-51-86",
    story: `Now forgotten by everyone, Eun-sol was one of the victims aboard the ship where the Human God first awakened. She was targeted by the Forsaken God, and the Human God gambled with his life to protect her.

    Eun-sol remembers that sacrifice, and after pondering how she might help the Human God, she made a selfless but dangerous choice.`,
  },

  gifts: [
    { gift: "forbidden-romance", value: 20 },
    { gift: "human-gods-hair", value: 70 },
  ],
};
