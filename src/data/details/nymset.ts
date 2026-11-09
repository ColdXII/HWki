import type { CharacterDetails } from "../types";

export const nymset: CharacterDetails = {
  skins: [
    {
      id: "nymset-s1",
      name: "Zesty Cherry Vacation",
      portrait: "/characters/nymset/nymset-s1p.webp",
      fullBody: "/characters/nymset/nymset-s1.webp",
      fullBodyCensored: "/characters/nymset/nymset-s1c.webp",
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
          url: "https://youtu.be/R4yxmC4SAfA",
          title: "Official PV",
        },
      ],
    },
    {
      id: "nymset-s2",
      name: "Black Bible Bunny Girl",
      portrait: "/characters/nymset/nymset-s2p.webp",
      fullBody: "/characters/nymset/nymset-s2.webp",
      fullBodyCensored: "/characters/nymset/nymset-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "nymset-s3",
      name: "???",
      portrait: "/characters/nymset/nymset-s3p.webp",
      fullBody: "/characters/nymset/nymset-s3.webp",
      fullBodyCensored: "/characters/nymset/nymset-s3c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "nymset-s4",
      name: "After-School Lesson",
      portrait: "/characters/nymset/nymset-s4p.webp",
      fullBody: "/characters/nymset/nymset-s4.webp",
      fullBodyCensored: "/characters/nymset/nymset-s4c.webp",
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
          url: "https://youtu.be/HZYEx2z3ujI",
          title: "Official PV",
        },
      ],
    },
    {
      id: "nymset-s6",
      name: "Black Queen's Allure",
      portrait: "/characters/nymset/nymset-s6p.webp",
      fullBody: "/characters/nymset/nymset-s6.webp",
      fullBodyCensored: "/characters/nymset/nymset-s6c.webp",
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
          url: "https://youtu.be/T22pmOFxI7k",
          title: "Official PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority: \n1. Magic Attack\n2. AP Recovery\n3. Starting AP",
      weapon: { id: "the-silver-bough", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-knight-of-seven-petals",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-knight-of-seven-petals",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-knight-of-seven-petals",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-knight-of-seven-petals",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "frost", level: 5 },
        { id: "protection", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Magic Attack\n2. AP Recovery\n3. Max HP",
      weapon: { id: "the-silver-bough", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "frost", level: 5 },
        { id: "protection", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Magic Attack\n2. AP Recovery\n3. Max HP",
      weapon: { id: "the-silver-bough", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "guardians-strike",
      name: "Guardian's Strike",
      type: "Active",
      ap: 30,
      icon: "/skills/nymset/ba.webp",
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
      icon: "/skills/nymset/s1.webp",
      description: `Prays to the Goddess of the Split Twigs with a devout heart for the healing of an ally.
        Recovers the HP of a designated ally by {heal}% of Magic ATK.`,
      values: {
        heal: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "consecrated-domain",
      name: "Consecrated Domain",
      type: "Active",
      ap: 30,
      cooldown: 1,
      icon: "/skills/nymset/s2.webp",
      description: `Invokes the name of the Goddess of the Split Twigs to declare [Consecrated Domain].
      [Consecrated Domain] lasts for 3 rounds and can maintain up to 1 at a time.
      If the caster is within the [Consecrated Domain], they gain the [Divine Strength] effect.

      [Divine Strength]: Increases own Aggro Adjustment and boosts Melee and Magic ATK by {DivineStrength}% of their base max HP.`,
      values: {
        DivineStrength: [
          13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 22.8, 24,
        ],
      },
    },
    {
      id: "divine-tongue",
      name: "Divine Tongue",
      type: "Active",
      ap: 60,
      cooldown: 3,
      icon: "/skills/nymset/s3.webp",
      description: `Pronounces an unavoidable judgment upon nearby enemies with a passage from the sacred scripture.
      Ignores counterattacks and deals Immaterial DMG equal to {damage}% of Magic ATK to all enemies within a 4.5m circular radius, pulling them forcefully towards the caster's position.
      During this attack, ACC temporarily increases by 300%, but weakness attacks are not possible.

      [SIGNATURE WEAPON EFFECT]:
      During battle, increases the attack radius of the [Divine Tongue] skill by 1m and reduces its cooldown by 1 Round.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Immaterial",
      },
    },
    {
      id: "remorse",
      name: "Remorse",
      type: "Passive",
      icon: "/skills/nymset/p.webp",
      description: `At the start of the battle, applies the [Remorse] effect to all enemies.

      [Remorse]: Reduces All ATK by {Remorse}%.`,
      values: {
        Remorse: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Immutable Radiance",
      icon: "/skills/nymset/immutable-radiance.webp",
      description: `During battle, your Magic ATK increases by {magicAtk}%.

      The range of [Consecrated Domain] increases by 3m, and allies within the area now also benefit from the ATK increase granted by [Divine Strength].
      In addition, while inside the [Consecrated Domain], you can Counterattack without limit, and on successful attack against an enemy within the area, deal Additional Immaterial DMG equal to {additionalImmaterialDMG}% of the sum of your Magic ATK and Max HP.

      When using [Grace of Healing] on an ally within the [Consecrated Domain], all other allies within the area also receive the same effect.
      On successful attack with [Divine Tongue], inflicts [Taunt] on the target for 1R.`,
      values: {
        magicAtk: [20, 24, 28, 32, 36, 40, 44],
        additionalImmaterialDMG: [100, 120, 140, 160, 180, 200, 220],
      },
    },
  },

  weaponType: "Club & Shield",

  basic: { str: 9, tec: 6, int: 9, vit: 11, agi: 10 },

  gradeGains: {
    B: { int: -1 },
    A: { str: -1 },
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
    "pathkeeper",
    "churchs-self-defense",
    "marlon",
    "interested-hp",
    "arrogant",
    "strong-willed",
  ],

  manual: {
    spd: 103,
    startApSeen: { value: 117, grade: "S" },
  },

  profile: {
    age: "22",
    race: "Marlon",
    homeland: "The Empire, Bethelburg",
    height: "160cm",
    birthday: "March 8th",
    bwh: "84(1)-52-91",
    story: `Nymset chose the path of a warrior priest to protect her friend, Bella. She gained considerable renown for safeguarding the Pilgrimage of the Martyrs, even earning the nickname "Pathkeeper".

    Later, during the Rift Crisis, she successfully protected refugees all the way to Earth, where they managed to resettle. The real issue began afterward. Having spent her time in Noctis Nebula in extreme isolation, Nymset came to Earth with a desire to find a husband and marry. She asked a senior priestess who had already married on Earth about how marriages worked here.

    The senior priestess, who had married on Earth, spoke to her about the concept of haughtiness. Taking this advice to heart, and perhaps believing in it a bit too much, Nymset began to act overly haughty, causing a minor stir. (Earthlings simply thought Nymset was not haughty, but rather just a rude priestess.)`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/mQBvA5Ie55E",
        title: "Affection PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1928397859831054543",
        title: "X PV",
      },
    ],
  },

  gifts: [
    { gift: "scripture-of-the-goddess-of-the-split-twigs", value: 40 },
    { gift: "forbidden-romance", value: 20 },
    { gift: "strawberry-chubby-macaron", value: 20 },
  ],
};
