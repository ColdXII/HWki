import type { CharacterDetails } from "../types";

export const matrotho: CharacterDetails = {
  skins: [
    {
      id: "matrotho-s1",
      name: "Water Sports Vacation",
      portrait: "/characters/matrotho/matrotho-s1p.webp",
      fullBody: "/characters/matrotho/matrotho-s1.webp",
      fullBodyCensored: "/characters/matrotho/matrotho-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "matrotho-s2",
      name: "Skipping School Chic",
      portrait: "/characters/matrotho/matrotho-s2p.webp",
      fullBody: "/characters/matrotho/matrotho-s2.webp",
      fullBodyCensored: "/characters/matrotho/matrotho-s2c.webp",
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
          url: "https://youtu.be/oHSo1XVRYpg",
          title: "Official PV",
        },
      ],
    },
    {
      id: "matrotho-s4",
      name: "Silent Heart Lingerie",
      portrait: "/characters/matrotho/matrotho-s4p.webp",
      fullBody: "/characters/matrotho/matrotho-s4.webp",
      fullBodyCensored: "/characters/matrotho/matrotho-s4c.webp",
      sources: [
        {
          type: "shop",
          price: 850,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/WvFe4RCpamI",
          title: "Official PV",
        },
        {
          source: "youtube",
          url: "https://youtu.be/Tp7VoYEHjQQ",
          title: "Slider Preview 1",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2044671589829263652",
          title: "Slider Preview 2",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority: \n1. Crit Damage\n2. Melee Attack\n3. Crit Rate",
      weapon: { id: "the-lamoran-wind", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-thousand-mile-weaver",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critRate", type: "percent", value: 5 },
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
      note: "Substats Priority: \n1. Crit Damage\n2. Melee Attack",
      weapon: { id: "the-lamoran-wind", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "phantom-banquet",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
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
      might: [
        { id: "pursuit", level: 5 },
        { id: "shattering", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Crit Damage\n2. Melee Attack",
      weapon: { id: "the-lamoran-wind", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "thorny-heart",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
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
          set: "reckoning-of-sin-ss",
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
      id: "sabre-strike",
      name: "Sabre Strike",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/matrotho/ba.webp",
      description: `Delivers a powerful and elegant slash to a nearby enemy.
      Deals Slash DMG equal to {damage}% of Melee ATK.

      [SIGNATURE WEAPON EFFECT]:
      Once per round, performs a Support Attack on successful attack.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "determination",
      name: "Determination",
      type: "Passive",
      icon: "/skills/matrotho/p1.webp",
      description: `When attacked, instead of the Basic Counterattack (once per round), use the [Sensory Concentration] skill during the Counterattack phase. After activation, follow up with a Support Counterattack.

      [Sensory Concentration]
      Steadies the mind and focuses the senses. Increases Evade by {evade}% for 1R.`,
      values: {
        evade: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
      },
    },
    {
      id: "nomination",
      name: "Nomination",
      type: "Active",
      ap: 5,
      cooldown: 1,
      icon: "/skills/matrotho/s1.webp",
      description: `Designates an enemy as the user's target, applying the [Nomination] effect.
      Removes any existing [Nomination] effect from other targets on the battlefield.

      - [Nomination]: Reduces Slash DEF by {slashDef}.`,
      values: {
        slashDef: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
      },
    },
    {
      id: "sword-of-the-flowing-river",
      name: "Sword of the Flowing River",
      type: "Passive",
      icon: "/skills/matrotho/p2.webp",
      description: `On a successful attack against an enemy with the [Nomination] effect, gains 6 AP and the [Sword of the Flowing River] effect for 1R. Stacks up to 5 times.

      - [Sword of the Flowing River]: Increases Melee ATK by {meleeAtk}% while using the [Sabre Strike] skill.`,
      values: {
        meleeAtk: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "blade-of-war",
      name: "Blade of War",
      type: "Active",
      ap: 45,
      cooldown: 2,
      icon: "/skills/matrotho/s2.webp",
      description: `Quickly dashes forward while attacking.
      Dashes 6m, dealing Slash DMG equal to {damage}% of Melee ATK to all enemies within a 1.5m radius along the path.
      Upon a successful attack on an enemy with [Nomination], gains 30 AP.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Blooming Wind",
      icon: "/skills/matrotho/blooming-wind.webp",
      description: `During battle, Melee ATK increases by {meleeAtk}% and AP Recovery increases by {apRecovery}%.
      On successful attack, if Crit Rate exceeds 50%, performs a Support Attack with a chance equal to the excess amount.

      When defeating an enemy, immediately performs an Additional Response against the nearest enemy using [Blade of War], reduces the Cooldown of [Nomination] by 1R, and increases AP of all allies except yourself by {ap}. Triggers {trigger} times per round.

      When using a Basic Attack against an enemy affected by [Nomination], increases allied Basic Attack and Support Attack DMG by {buff}% for 1R. Stacks up to 5 times.

      When using [Blade of War], DMG Taken is reduced by 75% until the end of the turn.`,
      values: {
        meleeAtk: [40, 44, 48, 52, 56, 60, 64],
        apRecovery: [5, 7, 9, 11, 13, 15, 17],
        ap: [30, 33, 36, 39, 42, 45, 48],
        trigger: [1, 1, 1, 2, 2, 2, 2],
        buff: [10, 11, 12, 13, 14, 15, 16],
      },
    },
  },

  weaponType: "One-handed Sword",

  basic: { str: 11, tec: 7, int: 6, vit: 7, agi: 18 },

  gradeGains: {
    B: { agi: -1 },
    A: { str: -1 },
    S: { agi: -1 },
    SS: { agi: -1 },
    EX1: { vit: 1 },
    EX2: { agi: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { agi: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "the-blade-of-wind",
    "resonance-of-vitality",
    "lamora",
    "interested-melee",
    "masterful",
    "agile",
  ],

  manual: {
    spd: 111,
    startApSeen: { value: 133, grade: "EX" },
  },

  profile: {
    age: "28",
    race: "Lamora",
    homeland: "City of Bel-lamori",
    height: "160cm",
    birthday: "May 72nd",
    bwh: "75(D)-49-91",
    story: `Even among the strict Lamorans, there are still those who live outside the law. Most Lamorans who become outlaws do so to reclaim their honor, often choosing to live in the wilderness rather than in the safe cities.

    Matrotho, a renowned swordswoman of the Republic Guard, was famous for her free spirit and her unique, bold style of swordsmanship. She was known as the Windblade and had served as the closest bodyguard to the President of Lamora. However, after the "Night of Blades," when the President was assassinated, Matrotho was arrested as the prime suspect. Falsely accused, she broke out of prison in order to clear her name, and most people around her, believing in her innocence, turned a blind eye to her escape.

    In the wilderness, she searched tirelessly for the real culprit but found no leads. Then the Rift opened, and determined not to die with her name sullied, she went through the Rift to Earth.

    Even on Earth, Matrotho continues to pursue her goal of clearing her name, gathering information from her fellow escapees. To secure a solid position for herself, she plans to become a Vanguard.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/8eGzvF7i4D0",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "sports-sneakers", value: 30 },
    { gift: "lamora-military-ration", value: 30 },
  ],
};
