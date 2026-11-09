import type { CharacterDetails } from "../types";

export const kalma: CharacterDetails = {
  skins: [
    {
      id: "kalma-s1",
      name: "Devil's Scheme Lingerie",
      portrait: "/characters/kalma/kalma-s1p.webp",
      fullBody: "/characters/kalma/kalma-s1.webp",
      fullBodyCensored: "/characters/kalma/kalma-s1c.webp",
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
          url: "https://youtu.be/H39Z-SdtLTQ",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1955187525741580446",
          title: "X PV",
        },
      ],
    },
    {
      id: "kalma-s3",
      name: "Collar of Burning Submission",
      portrait: "/characters/kalma/kalma-s3p.webp",
      fullBody: "/characters/kalma/kalma-s3.webp",
      fullBodyCensored: "/characters/kalma/kalma-s3c.webp",
      sources: [
        {
          type: "shop",
          price: 900,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/HOqF6waV2Oo",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2046154536365281430",
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
      note: "Substats Priority:\n1. Crit Rate (65%)\n2. Crit Damage\n3. Magic ATK",
      weapon: { id: "storms-eye", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Rate (65%)\n2. Crit Damage\n3. Magic ATK",
      weapon: { id: "storms-eye", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-eternal-battle",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-eternal-battle",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-eternal-battle",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-eternal-battle",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Rate (65%)\n2. Crit Damage\n3. Magic ATK",
      weapon: { id: "storms-eye", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "bolt-slash",
      name: "Bolt Slash",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/kalma/ba.webp",
      description: `Launches an electrified sphere to attack.
      The sphere burrows into the targeted enemy before bursting outward in all directions.
      Deals Electric DMG equal to {damage}% of Magic ATK to the target, and Splash Electric DMG equal to {damage2}% of Magic ATK to enemies within a 4m radius.
      The designated target cannot be hit with a standard Weakness Attack by this skill.`,
      damage: [
        {
          stat: "magicAtk",
          percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152],
          damageType: "Electric",
          label: "AoE Damage",
        },
        {
          stat: "magicAtk",
          percent: [25, 28, 30, 33, 35, 38, 40, 43, 45, 48],
          damageType: "Electric",
          label: "AoE Damage",
        },
      ],
    },
    {
      id: "charge-accumulation",
      name: "Charge Accumulation",
      type: "Passive",
      maxLevel: 1,
      icon: "/skills/kalma/p1.webp",
      description: `When using a skill that is not Standby and not a Response skill, gain 1 stack of [Charge].

      - [Charge]: A base effect used by the Electromancer's skills, stack up to 5 times.`,
    },
    {
      id: "bolt-chaser",
      name: "Bolt Chaser",
      type: "Active",
      ap: 15,
      cooldown: 2,
      icon: "/skills/kalma/s1.webp",
      description: `Dashes like lightning in the chosen direction.
      Charges 7m forward, dealing Electric DMG equal to {damage}% of Magic ATK to enemies within 3m along the path, and gains [Extra Action] once.
      After using this skill, Magic ATK increases by {magicAtk}% for 1R, and any attack made this turn via [Extra Action] is treated as a Weak Point Attack.
      This skill is considered a Basic Skill and cannot deal Weak Point Attack on its own.

      - [Extra Action]: After acting on your turn, gain 1 Extra Action. However, if no Active skills can be used with the Remaining AP, the Extra Action is not granted.`,
      damage: {
        stat: "magicAtk",
        percent: [35, 39, 42, 46, 49, 53, 56, 60, 63, 67],
        damageType: "Electric",
      },
      values: {
        magicAtk: [47.5, 50, 52.5, 55, 57.5, 60, 62.5, 65, 67.5, 70],
      },
    },
    {
      id: "lightning-cascade",
      name: "Lightning Cascade",
      type: "Active",
      ap: 65,
      cooldown: 1,
      icon: "/skills/kalma/s2.webp",
      description: `Emits a powerful current from your fingertips for a short time.
      Deals Electric DMG equal to {damage}% of Magic ATK to enemies within a 5m, 150° frontal cone, and inflicts [Volt Mark] for 1R on hit enemies.
      When an ally attacks an enemy with [Volt Mark], all ATK increases by {allAtk}% for 2R.
      While using this skill, ACC is temporarily increased by 100%.

      - [Volt Mark]: When attacking a target with this effect, the attacker's All ATK increases by {allAtk}% for 2R.

      [SIGNATURE WEAPON EFFECT]:
      When [Lightning Cascade] hits, temporarily reduces the target's Electric DEF by 240.`,
      damage: {
        stat: "magicAtk",
        percent: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
        damageType: "Electric",
      },
      values: {
        allAtk: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      },
    },
    {
      id: "raging-thunderstorm",
      name: "Raging Thunderstorm",
      type: "Active",
      ap: 80,
      cooldown: 1,
      icon: "/skills/kalma/s3.webp",
      description: `If you have 5 stacks of [Charge], consumes all stacks to use this skill.
      Summons a storm and strikes with a fierce bolt of lightning.
      Deals Electric DMG equal to {damage}% of Magic ATK to enemies within a 2.5m radius.
      Upon attack, temporarily increases Crit DMG by 10% for every INT exceeding 6, and if the target has [Volt Mark], reduces their Electric DEF by {electricDef} until the end of the turn.
      This attack is treated as a Weak Point Attack, and temporarily increases ACC by 300%.

      [SIGNATURE WEAPON EFFECT]:
      [Raging Thunderstorm] becomes a area-targeted attack, its attack radius increases by 1m, and its damage increases by 15%.`,
      damage: {
        stat: "magicAtk",
        percent: [180, 198, 216, 234, 252, 270, 288, 306, 324, 342],
        damageType: "Electric",
      },
      values: {
        electricDef: [620, 640, 660, 680, 700, 720, 740, 760, 780, 800],
      },
    },
    {
      id: "flashbreak",
      name: "Flashbreak",
      type: "Passive",
      maxLevel: 1,
      icon: "/skills/kalma/p2.webp",
      description: `When [Raging Thunderstorm] hits 2 or fewer enemies, temporarily increases Magic ATK by 18%.
      When using [Bolt Chaser], reduces the AP cost of [Lightning Cascade] and [Raging Thunderstorm] by 15 until the end of the turn.`,
    },
  ],

  weaponType: "Arcane Orb",

  basic: { str: 4, tec: 5, int: 10, vit: 8, agi: 13 },

  gradeGains: {
    EX1: { int: 1 },
    EX2: { agi: 2 },
    EX3: { vit: 1 },
    EX4: { int: 1 },
    EX5: { vit: 1, agi: 1 },
    EX6: { int: 1, agi: 1 },
  },

  traits: [
    "top-grade-mind",
    "heart-of-thunder-and-wind",
    "kesak",
    "interested-magic",
    "persistent",
    "thunderous",
    "noticeable",
  ],

  manual: {
    spd: 82,
    startApSeen: { value: 124, grade: "EX" },
  },

  profile: {
    age: "28",
    race: "Kesak",
    homeland: "Bel-Lamori",
    height: "182cm",
    birthday: "June 4th",
    bwh: "105(K)-58-113",
    story: `Once named heir to the Storm Clan of the Kesak, Kalma showed remarkable brilliance from an early age. She mastered the clan's treasured Storm Cell with ease, and all believed she was destined for greatness.

    But when the Rift annihilated her people, leaving her the sole survivor, she appeared on Earth with a new dream, no longer to be the Kesak's greatest raider, but to become president of the Federation.

    Now serving as a Vanguard under the Human God, Kalma sees this as the perfect chance to rise as a political powerhouse. With unshakable ambition, she marches forward, determined to claim the presidency and lead the charge against the Rift.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/rkoNMvJ0au0",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/MFZed7UrR08",
        title: "Affection PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1955193300249612555",
        title: "X PV",
      },
    ],
  },

  gifts: [
    { gift: "kalma-election", value: 30 },
    { gift: "strategy-simulation-board-game", value: 40 },
  ],
};
