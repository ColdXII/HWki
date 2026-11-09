import type { CharacterDetails } from "../types";

export const luise: CharacterDetails = {
  skins: [
    {
      id: "luise-s1",
      name: "Beach's Glow Vacation",
      portrait: "/characters/luise/luise-s1p.webp",
      fullBody: "/characters/luise/luise-s1.webp",
      fullBodyCensored: "/characters/luise/luise-s1c.webp",
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
          url: "https://youtu.be/rWD8KCNIbxc",
          title: "Official PV",
        },
      ],
    },
    {
      id: "luise-s2",
      name: "Blazing Qipao",
      portrait: "/characters/luise/luise-s2p.webp",
      fullBody: "/characters/luise/luise-s2.webp",
      fullBodyCensored: "/characters/luise/luise-s2c.webp",
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
          url: "https://youtu.be/LagIMvQMorQ",
          title: "Official PV",
        },
      ],
    },
    {
      id: "luise-s5",
      name: "Bride's Sweet Preparations",
      portrait: "/characters/luise/luise-s5p.webp",
      fullBody: "/characters/luise/luise-s5.webp",
      fullBodyCensored: "/characters/luise/luise-s5c.webp",
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
      note: "Substats Priority:\n1. Crit Rate (30%)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "sol", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "scorching-sun",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
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
      might: [
        { id: "flame", level: 5 },
        { id: "pursuit", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Rate (30%)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "sol", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "flame", level: 5 },
        { id: "pursuit", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Rate (30%)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "sol", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
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
      id: "flame-arrow",
      name: "Flame Arrow",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/luise/ba.webp",
      description: `Shoots an arrow of fire to burn the enemy.
      Deals Heat DMG equal to {damage}% of Magic ATK.

      [SIGNATURE WEAPON EFFECT]:
      During battle, AP cost of [Flame Arrow]is reduced by 15.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Heat",
      },
    },
    {
      id: "ember",
      name: "Ember",
      type: "Passive",
      icon: "/skills/luise/p1.webp",
      description: `On a successful attack, applies the [Ember] effect to the enemy for 3 rounds.

      - [Ember]: Reduces Heat DEF by {heatDef}.`,
      values: {
        heatDef: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
      },
    },
    {
      id: "fireball",
      name: "Fireball",
      type: "Active",
      ap: 90,
      cooldown: 1,
      icon: "/skills/luise/s1.webp",
      description: `Launches a blazing orb of fire and causes it to explode, burning enemies.
      Deals Unblockable Heat DMG equal to {damage}% of Magic ATK to all enemies within a 2m circular radius.
      During this attack, ACC temporarily increases by 300%.

      [SIGNATURE WEAPON EFFECT]:
      During battle, AP cost of [Fireball] is reduced by 30.`,
      damage: {
        stat: "magicAtk",
        percent: [75, 83, 90, 98, 105, 113, 120, 128, 135, 143],
        damageType: "Heat",
      },
    },
    {
      id: "fireflake-explosion",
      name: "Fireflake Explosion",
      type: "Passive",
      icon: "/skills/luise/p2.webp",
      description: `Ignites dying embers to burn enemies.
      At the start of the round, detonates all [Ember] effects on the battlefield, dealing Additional Heat DMG equal to {damage}% of Magic ATK.

      [SIGNATURE WEAPON EFFECT]:
      Additional damage from [Fireflake Explosion] can critically strike, and after using a skill other than Standby during your turn, [Fireflake Explosion] activates, doubling its damage.`,
      damage: {
        stat: "magicAtk",
        percent: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
        damageType: "Heat",
      },
    },
    {
      id: "blaze-of-ascension",
      name: "Blaze of Ascension",
      type: "Active",
      ap: 150,
      cooldown: 3,
      icon: "/skills/luise/s2.webp",
      description: `Commands surging flames to burn enemies in front.
      Deals Unblockable Heat DMG equal to {damage}% of Magic ATK to all enemies within a 3m circular radius.
      During the attack, ACC temporarily increases by 300%, but weakness attacks are not possible.

      [SIGNATURE WEAPON EFFECT]:
      During battle, AP cost of [Blaze of Ascension] is reduced by 75.
      When an attack succeeds using a skill other than [Blaze of Ascension], the Cooldown of [Blaze of Ascension] is reduced by 1 round.`,
      damage: {
        stat: "magicAtk",
        percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
        damageType: "Heat",
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Hellfire of Longing",
      icon: "/skills/luise/hellfire-of-longing.webp",
      description: `For each target successfully hit, gain 1 stack of [Hellfire Fragment] with a {chance}% chance.
      When 8 stacks of [Hellfire Fragment] are reached, all stacks are consumed at the start of your next turn, entering [Ember of Longing] and gaining 3 Extra Actions.

      - [Ember of Longing]: Increases Magic ATK by {magicAtk}%, and sets AP cost and Cooldown of all skills to 0. However, [Fireflake Explosion] does not activate.
      While active, for each enemy damaged, [Fireflake Explosion] damage increases by {dmgIncrease}%. This effect stacks up to 10 times and lasts until the start of your next turn.
      [Ember of Longing] expires after 3 Extra Actions.`,
      values: {
        chance: [70, 75, 80, 85, 90, 95, 100],
        magicAtk: [100, 110, 120, 130, 140, 150, 160],
        dmgIncrease: [30, 36, 42, 48, 52, 60, 66],
      },
    },
  },

  weaponType: "Staff",

  basic: { str: 5, tec: 10, int: 14, vit: 10, agi: 10 },

  gradeGains: {
    B: { int: -1 },
    A: { agi: -1 },
    S: { vit: -1 },
    EX: { int: 1, vit: 1 },
    EX1: { int: 1 },
    EX2: { int: 1 },
    EX3: { agi: 1 },
    EX4: { vit: 1 },
    EX5: { int: 1, vit: 1 },
    EX6: { int: 1 },
  },

  traits: [
    "prodigy-mage",
    "memorize",
    "marlon",
    "interested-magic",
    "bright",
    "foreseeing",
  ],

  manual: {
    spd: 61,
    startApSeen: { value: 114, grade: "SS" },
  },

  profile: {
    age: "24",
    race: "Marlon",
    homeland: "The Empire, Kaisersberg",
    height: "172cm",
    birthday: "March 20th",
    bwh: "79(E)-48-90",
    story: `Unlike her older sister, Crown Princess Maximilia, who learned about warfare and governance to become the successor of the Empire, Luise followed the customs of the royal family and learned flame magic.

    When Maximilia became the Crown Princess, Luise naturally assumed the position of the Empire's Guardian. Among many fire mages, she distinguished herself with exceptional achievements.

    After the Rift Crisis, she led the people alongside her sister, and took on the responsibility of protecting the citizens and sending them to her sister, while staying behind in the dying Noctis Nebula in her sister's stead.`,
    pv: [
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1896829675592388671",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "forbidden-romance", value: 30 },
    { gift: "finest-black-tea", value: 40 },
    { gift: "magical-fairy-tale-book", value: 30 },
  ],
};
