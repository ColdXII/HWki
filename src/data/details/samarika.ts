import type { CharacterDetails } from "../types";

export const samarika: CharacterDetails = {
  skins: [
    {
      id: "samarika-s1",
      name: "Swamp Elf Traditional Costume",
      portrait: "/characters/samarika/samarika-s1p.webp",
      fullBody: "/characters/samarika/samarika-s1.webp",
      fullBodyCensored: "/characters/samarika/samarika-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "samarika-s3",
      name: "Stillheart Maid",
      portrait: "/characters/samarika/samarika-s3p.webp",
      fullBody: "/characters/samarika/samarika-s3.webp",
      fullBodyCensored: "/characters/samarika/samarika-s3c.webp",
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
          url: "https://youtu.be/jar2ouyBAdI",
          title: "Official PV",
        },
      ],
    },
    {
      id: "samarika-s4",
      name: "Sentinel Noir",
      portrait: "/characters/samarika/samarika-s4p.webp",
      fullBody: "/characters/samarika/samarika-s4.webp",
      fullBodyCensored: "/characters/samarika/samarika-s4c.webp",
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
          url: "https://youtu.be/X1MYggbjEf4",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2066394566123786312",
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
      note: "Substats Priority: \n1. Crit Rate (60%)\n2. Evade\n3. Crit Damage",
      weapon: { id: "nocturnal-watcher", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "pursuit", level: 5 },
        { id: "shattering", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Crit Rate (60%)\n2. Evade\n3. Crit Damage",
      weapon: { id: "nocturnal-watcher", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jupiter-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-knight-of-seven-petals",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "pursuit", level: 5 },
        { id: "shattering", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Crit Rate (60%)\n2. Evade\n3. Crit Damage",
      weapon: { id: "nocturnal-watcher", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
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
      icon: "/skills/samarika/ba.webp",
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
      icon: "/skills/samarika/p.webp",
      description: `Increases SPD by {spd}. Additionally, when attacking, temporarily increases Melee ATK based on the straight-line distance moved.
      At 10 m, Melee ATK increases by up to {meleeAtk}%.`,
      values: {
        spd: [20, 23, 26, 29, 32, 35, 38, 41, 44, 47],
        meleeAtk: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
      },
    },
    {
      id: "swamp-s-arrest",
      name: "Swamp's Arrest",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/samarika/s1.webp",
      description: `Leaps over the target while throwing a swamp trap.
      Deals Slash DMG equal to {damage}% of Melee ATK and has a {chance}% chance to apply [Slow] effect for 2R.
      Weak Point attacks cannot be performed with this skill.

      - [Slow]: Reduces SPD by 40%.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
      values: {
        chance: [50, 55, 60, 65, 70, 75, 80, 85, 90, 100],
      },
    },
    {
      id: "fang-of-the-swamp",
      name: "Fang of the Swamp",
      type: "Active",
      ap: 90,
      cooldown: 2,
      icon: "/skills/samarika/s2.webp",
      description: `Leaps low toward the enemy, slashing past them with a deadly dual strike from both Harpes.
      Deals Slash DMG equal to {damage}% of Melee ATK as the user vaults over the target.

      If the target is afflicted with [Slow], deals Additional Slash DMG equal to {damage2}% of the user's combined Melee ATK and Base Evade.

      [SIGNATURE WEAPON EFFECT]:
      When successfully hitting an enemy afflicted with [Slow] during your turn, deal Additional Poison DMG equal to 9% of Base Melee ATK × the total AP spent on skills that turn. This Additional DMG can Crit.
      The Additional Slash DMG dealt by [Fang of the Swamp] can also Crit. After using this skill, its cooldown is reduced by 2 rounds and you recover 55 AP. Cooldown reduction and AP recovery effect can trigger once every 2 rounds.`,
      damage: [
        {
          stat: "meleeAtk",
          percent: [135, 149, 162, 176, 189, 203, 216, 230, 243, 257],
          damageType: "Slash",
        },
        {
          stat: "meleeAtk",
          percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
          damageType: "Slash",
        },
      ],
    },
  ],

  demiGod: {
    effect: {
      name: "Shadow of All Creation",
      icon: "/skills/samarika/shadow-of-all-creation.webp",
      description: `During battle, your Melee ATK increases by {meleeAtk}%.
      When attacking an enemy affected by [Slow], Slash Boost, Poison Boost, and Crit DMG increase by {buff}%, and you gain [Shadow Veil] for 1R.

      [Shadow Veil]:
      While active, your attacks ignore all Counterattacks. Evade increases by {evade}% and Crit DMG increases by {critDmg}% respectively.
      Upon successfully evading an attack, performs a Support Counterattack using [Throw Swamp Trap] and gains {ap} AP. When making a single-target attack, DMG dealt increases by {dmgIncrease}%.`,
      values: {
        meleeAtk: [50, 55, 60, 65, 70, 75, 80],
        buff: [30, 33, 36, 39, 42, 45, 48],
        evade: [100, 110, 120, 130, 140, 150, 160],
        critDmg: [30, 36, 42, 48, 54, 60, 66],
        ap: [4, 5, 6, 7, 8, 9, 10],
        dmgIncrease: [40, 48, 56, 64, 72, 80, 88],
      },
    },
  },

  weaponType: "Twin Swords",

  basic: { str: 11, tec: 8, int: 5, vit: 8, agi: 14 },

  gradeGains: {
    B: { str: -1 },
    A: { agi: -1 },
    SS: { agi: 1 },
    EX: { vit: 1 },
    EX1: { str: 1 },
    EX2: { agi: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { str: 1 },
  },

  traits: [
    "vigilante-of-justice",
    "swamp-hunting",
    "swamp-elf",
    "interested-melee",
    "masterful",
    "scorching",
  ],

  manual: {
    spd: 143,
    startApSeen: { value: 113, grade: "S" },
  },

  profile: {
    age: "241",
    race: "Swamp Elf",
    homeland: "Azuremarsh Kingdom, Miora Forest",
    height: "176cm",
    birthday: "March 28th",
    bwh: "88(J)-51-105",
    story: `For Samarika, her older sister Kalina was a figure of both love and hatred. This sentiment had taken root when she was very young, as Kalina, under the pretext of training her, used all of the renowned swamp elf hero Elkalin's combat techniques on her. Naturally, she was nothing more than a sparring target for Kalina, and her resentment only grew.

    The tipping point came when Kalina applied for and secured the position of Swamp Ranger officer that Samarika had set her eyes on. To Samarika, who dreamed of living independently from Kalina, this was a bolt from the blue.

    Having experienced multiple conflicts over time, Samarika no longer wanted to be subordinate to her sister after moving to Earth. Inspired by her insights from the East Asian Federation, she left her sister's vigilante group and established her own, gaining quite a reputation under the name "Hanseong Owls."`,
    pv: [
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1939934934845542774",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "glazed-fruit-stick", value: 30 },
    { gift: "mangrove-leaf", value: 20 },
    { gift: "sports-sneakers", value: 20 },
  ],
};
