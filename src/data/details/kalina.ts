import type { CharacterDetails } from "../types";

export const kalina: CharacterDetails = {
  skins: [
    {
      id: "kalina-s1",
      name: "Swamp Elf Traditional Costume",
      portrait: "/characters/kalina/kalina-s1p.webp",
      fullBody: "/characters/kalina/kalina-s1.webp",
      fullBodyCensored: "/characters/kalina/kalina-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "kalina-s2",
      name: "White Bunny Girl",
      portrait: "/characters/kalina/kalina-s2p.webp",
      fullBody: "/characters/kalina/kalina-s2.webp",
      fullBodyCensored: "/characters/kalina/kalina-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "kalina-s3",
      name: "???",
      portrait: "/characters/kalina/kalina-s3p.webp",
      fullBody: "/characters/kalina/kalina-s3.webp",
      fullBodyCensored: "/characters/kalina/kalina-s3c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "kalina-s4",
      name: "Tight-Fit Bloomers",
      portrait: "/characters/kalina/kalina-s4p.webp",
      fullBody: "/characters/kalina/kalina-s4.webp",
      fullBodyCensored: "/characters/kalina/kalina-s4c.webp",
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
          url: "https://youtu.be/QV4Lv1btGSY",
          title: "Official PV",
        },
      ],
    },
    {
      id: "kalina-s5",
      name: "???",
      portrait: "/characters/kalina/kalina-s5p.webp",
      fullBody: "/characters/kalina/kalina-s5.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "kalina-s6",
      name: "Joyous Knot of the Silent Night",
      portrait: "/characters/kalina/kalina-s6p.webp",
      fullBody: "/characters/kalina/kalina-s6.webp",
      fullBodyCensored: "/characters/kalina/kalina-s6c.webp",
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
          url: "https://youtu.be/jM-OiOIv99c",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2003348808332378340",
          title: "X PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority: \n1. Evade (250)\n2. Crit Damage\n3. Melee Attack",
      weapon: { id: "tyrant-edge", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-thousand-mile-weaver",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "left",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "right",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Evade (250)\n2. Crit Damage\n3. Melee Attack",
      weapon: { id: "tyrant-edge", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound",
          slot: "left",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "right",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Evade (250)\n2. Crit Damage\n3. Melee Attack",
      weapon: { id: "tyrant-edge", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "thorny-heart",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "thorny-heart",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "thorny-heart",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "thorny-heart",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "harpe-art",
      name: "Harpe Art",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/kalina/ba.webp",
      description: `The swamp elf extends their long arms and swiftly swings the harpe.
      Deals Slash DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "hunter-on-the-vine",
      name: "Hunter on the Vine",
      type: "Passive",
      icon: "/skills/kalina/p1.webp",
      description: `Increases SPD by {spd}. Additionally, when attacking, temporarily increases Melee ATK based on the straight-line distance moved.
      At 10 m, Melee ATK increases by up to {meleeAtk}%.

      [SIGNATURE WEAPON EFFECT]:
      [Hunter on the Vine] now increases Melee ATK and Crit DMG based on movement distance and AP spent. The increase in Crit DMG matches the percentage of Melee ATK gained through this skill (1 AP is treated as 0.1m of linear distance).`,
      values: {
        spd: [20, 23, 26, 29, 32, 35, 38, 41, 44, 47],
        meleeAtk: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
      },
    },
    {
      id: "assault",
      name: "Assault",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/kalina/s1.webp",
      description: `Leaps high and dives quickly to ambush enemies.
      Jumps to the designated location and deals Slash DMG equal to {damage}% of Melee ATK to all enemies within a 1.3m circular radius.
      Ignores counterattacks from the target.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
    },
    {
      id: "blades-of-tyranny",
      name: "Blades of Tyranny",
      type: "Active",
      ap: 90,
      cooldown: 1,
      icon: "/skills/kalina/s2.webp",
      description: `Slashes the area in a blinding flash of speed with twin harpes. Deals {damage}% Slash DMG to all enemies within a 2.5m radius.
      Upon use, temporarily increases Crit Rate by {critRate}% of the user's Base Evasion. This bonus can reach up to a maximum of {scale}%.

      [SIGNATURE WEAPON EFFECT]:
      Once per round, using [Blades of Tyranny] restores 55 AP and resets its cooldown.`,
      damage: {
        stat: "meleeAtk",
        percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
        damageType: "Slash",
      },
      values: {
        critRate: [12.8, 13.6, 14.4, 15.2, 16, 16.8, 17.6, 18.4, 19.2, 20],
        scale: [32, 34, 36, 38, 40, 42, 44, 46, 48, 50],
      },
    },
    {
      id: "survival-expert",
      name: "Survival Expert",
      type: "Passive",
      icon: "/skills/kalina/p2.webp",
      description: `Once per battle, survives a fatal blow with 1 HP and immediately gains {ap} AP. Then restores {recoverHp}% of own HP.`,
      values: {
        ap: [105, 110, 115, 120, 125, 130, 135, 140, 145, 150],
        recoverHp: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
      },
    },
  ],

  weaponType: "Twin Swords",

  basic: { str: 11, tec: 8, int: 5, vit: 8, agi: 15 },

  gradeGains: {
    B: { agi: -1 },
    A: { str: -1 },
    S: { agi: -1 },
    EX: { vit: 1 },
    EX1: { str: 1 },
    EX2: { agi: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { str: 1 },
  },

  traits: [
    "obedience",
    "double-down",
    "swamp-elf",
    "interested-melee",
    "agile",
    "persistent",
  ],

  manual: {
    spd: 143,
    startApSeen: { value: 114, grade: "SS" },
  },

  profile: {
    age: "27X",
    race: "Swamp Elf",
    homeland: "Azuremarsh Kingdom, Miora Forest",
    height: "191cm",
    birthday: "March 7th",
    bwh: "91(N)-55-110",
    story: `Kalina, a soldier of Webwoods renowned for her accomplishments during the Slave Wars, was among the first group to follow Maximilia in protecting the refugees of Noctis Nebula.

    With her exceptional scouting abilities, Kalina assisted Maximilia in keeping the refugees safe, and played a significant role in successfully leading most of them to safety on Earth.

    After parting ways with Maximilia, Kalina heard of the Bureau of Rift Management fighting against the abominations, and chose to join forces with them once more to continue the fight.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtube.com/shorts/F3V7WEr2kFs?si=YmbafFSBeFHTcvmP",
        title: "Ads PV 1",
      },
      {
        source: "youtube",
        url: "https://youtu.be/CLMIus7vFpY",
        title: "Ads PV 2",
      },
      {
        source: "youtube",
        url: "https://youtu.be/oGYl1RhGNaA",
        title: "Lobby PV",
      },
    ],
  },

  gifts: [
    { gift: "mangrove-leaf", value: 30 },
    { gift: "soju", value: 20 },
    { gift: "training-equipment-set", value: 20 },
  ],
};
