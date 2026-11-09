import type { CharacterDetails } from "../types";

export const yui: CharacterDetails = {
  skins: [
    {
      id: "yui-s1",
      name: "Long-Held Dream Lingerie",
      portrait: "/characters/yui/yui-s1p.webp",
      fullBody: "/characters/yui/yui-s1.webp",
      fullBodyCensored: "/characters/yui/yui-s1c.webp",
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
          url: "https://youtu.be/cLjNr-9XL3c",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1924416801745899713",
          title: "X PV",
        },
      ],
    },
    {
      id: "yui-s2",
      name: "???",
      portrait: "/characters/yui/yui-s2p.webp",
      fullBody: "/characters/yui/yui-s2.webp",
      fullBodyCensored: "/characters/yui/yui-s2c.webp",
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
          url: "https://www.youtube.com/shorts/hxaYdlW_SZI",
          title: "Official PV 1",
        },
        {
          source: "youtube",
          url: "https://youtu.be/nTKVAyh1Syo",
          title: "Official PV 2",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2117161272106160284",
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
      note: "Substats Priority:\n1. Crit Rate (90-100%)\n2. Crit Damage\n\n If pair with Mu Yingying, Drop the Crit Rate",
      weapon: { id: "phantom-stiletto", level: 60, dupe: 5 },
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
          set: "phantom-banquet",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
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
      note: "Substats Priority:\n1. Crit Rate (90-100%)\n2. Crit Damage\n\n If pair with Mu Yingying, Drop the Crit Rate",
      weapon: { id: "phantom-stiletto", level: 60, dupe: 5 },
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
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
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
            { stat: "critDmg", type: "percent", value: 10 },
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
      note: "Substats Priority:\n1. Crit Rate (90-100%)\n2. Crit Damage\n\n If pair with Mu Yingying, Drop the Crit Rate",
      weapon: { id: "phantom-stiletto", level: 60, dupe: 5 },
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
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
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
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "pistol-fire",
      name: "Pistol Fire",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/yui/ba.webp",
      description: `Calmly shoots at the target.
      Deals Pierce DMG equal to {damage}% of Ranged ATK.

      [SIGNATURE WEAPON EFFECT]:
      During battle, increases Basic ATK DMG of both the user and their summons by 16%`,
      damage: {
        stat: "rangedAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "conceal",
      name: "Conceal",
      type: "Passive",
      icon: "/skills/yui/p1.webp",
      description: `When attacking an enemy's weak point, uses optical camouflage to hide.
      Once per Round, at the end of a turn where you performed a Weak Point Attack, there is a {chance}% chance to gain [Conceal: Stealth].
      Activation chance increases by 1% for every 1% of your missing HP.

      - [Conceal: Stealth]: Becomes hidden and cannot be targeted by enemy skills. SPD decreases by 10%, and Accuracy increases by 50% for the first attack while hidden.`,
      values: {
        chance: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "bullet-battalion",
      name: "Bullet Battalion",
      type: "Active",
      ap: 60,
      cooldown: 1,
      maxLevel: 2,
      icon: "/skills/yui/s1.webp",
      description: `Throws a deployment box forward, summoning {stack} player-controllable units of [Summon: Bullet Battalion].
      All previously existing [Summon: Bullet Battalion] units will be deactivated upon summoning.

      [Bullet Battalion]:
      Base Max HP: 30% of the caster's Base Stat
      Base Ranged ATK: 100% of the caster's Base Stat
      Base Crit Rate: 100% of the caster's Base Stat
      Base Crit DMG: 100% of the caster's Base Stat
      Base Accuracy: 100% of the caster's Base Stat
      Base Pierce Boost: 100% of the caster's Base Stat
      Base SPD: Fixed stat 61
      Base AP Recovery: Fixed at 0
      Base AP upon Summon: Fixed stat 200
      Skill: [Standby], [Bullet Battalion · Gunfire] and [Bullet Battalion · Overload]

      [Bullet Battalion · Gunfire]:
      Fires at the target. Deals Pierce DMG equal to 60% of Ranged ATK.

      [Bullet Battalion · Overload]:
      Increases Ranged ATK by 200% during combat and reduces Aggro Adjustment by 1000.
      [Summon: Bullet Battalion] consumes all of its AP at the end its turn.`,
      values: {
        stack: [3, 4],
      },
    },
    {
      id: "kinetic-jump",
      name: "Kinetic Jump",
      type: "Active",
      ap: 43,
      cooldown: 1,
      icon: "/skills/yui/s2.webp",
      description: `Harness telekinesis to leap skyward, landing precisely at the chosen spot.`,
    },
    {
      id: "anarchic-barrage",
      name: "Anarchic Barrage",
      type: "Active",
      ap: 90,
      cooldown: 3,
      icon: "/skills/yui/s3.webp",
      description: `Unleashes a telekinetic barrage of pistols, scorching a wide area.
      This skill has an initial cooldown of 3 rounds.
      Deals Pierce DMG equal to {damage}% of Ranged ATK to all enemies within the area.
      For each target hit, regardless of direction, there is a 10% chance per point of the user's TEC stat exceeding 15 to trigger a Weak Point Attack.

      [SIGNATURE WEAPON EFFECT]:
      The Weak Point Hit chance triggered by the [Anarchic Barrage] skill is doubled.
      When [Anarchic Barrage] targets 2 or fewer enemies:
      - Against 2 enemies: temporarily increases Combat Skill DMG by 18% and restores 12 AP.
      - Against 1 enemy: temporarily increases Combat Skill DMG by 36% and restores 24 AP.`,
      damage: {
        stat: "rangedAtk",
        percent: [250, 275, 300, 325, 350, 375, 400, 425, 450, 475],
        damageType: "Pierce",
      },
    },
    {
      id: "spectral-lock-on",
      name: "Spectral Lock-on",
      type: "Passive",
      icon: "/skills/yui/p2.webp",
      description: `When performing a Basic ATK, grants all [Summon: Bullet Battalion] units on the field the [Calibration] effect for 1 round.
      Each time a [Summon: Bullet Battalion] lands a successful Basic ATK, there is a 50% chance to reduce the cooldown of Anarchic Barrage by 1 round.

      [Calibration]: Gains 200 AP and {critDmg}% Crit DMG. Cannot gain this effect again while it is active.`,
      values: {
        critDmg: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Eternal Battalion",
      icon: "/skills/yui/eternal-battalion.webp",
      description: `Enters Stealth at the end of the turn after performing a Weak Point Attack. When attacking 5 or more enemies, increases Crit DMG by {critDmg}% until the end of the turn.

      When attacking with [Pistol Fire], performs a Weak Point Attack regardless of direction, and the summoned unit [Bullet Battalion] performs a Support ATK.
      When attacking with [Pistol Fire], if the summoned unit [Bullet Battalion] has [Calibration], [Bullet Battalion] gains 200 AP at the end of the turn.

      When attacking with [Anarchic Barrage], deals Additional Pierce DMG equal to 300% of Ranged ATK. This Additional Pierce DMG increases by up to 1000% at 1000% Crit DMG.

      When the summoned unit [Bullet Battalion] uses [Bullet Battalion · Gunfire], Yui gains {ap} AP.
      [Spectral Lock-on] is enhanced, granting a 100% chance to reduce the cooldown of [Anarchic Barrage] by 1R whenever the summoned unit [Bullet Battalion] successfully lands a Basic Attack.

      From the start to the end of any unit's turn, the summoned unit [Bullet Battalion] gains [Battalion Enhancement].
      [Battalion Enhancement]: Increases Ranged ATK by {rangedAtk}% of the caster's Ranged ATK.`,
      values: {
        critDmg: [100, 200, 300, 400, 500, 600, 700],
        ap: [9, 10, 11, 12, 13, 14, 15],
        rangedAtk: [100, 120, 140, 160, 180, 200, 220],
      },
    },
  },

  weaponType: "Dual Pistols",

  basic: { str: 7, tec: 13, int: 9, vit: 11, agi: 7 },

  gradeGains: {
    B: { vit: -1 },
    A: { tec: -1 },
    S: { agi: -1 },
    SS: { vit: -1 },
    EX1: { tec: 1 },
    EX2: { vit: 1 },
    EX3: { tec: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { tec: 1 },
  },

  traits: [
    "with-precision-and-care",
    "discover-esper",
    "human",
    "interested-ranged",
    "competent",
    "meticulous",
    "rational",
  ],

  manual: {
    spd: 88,
    startApSeen: { value: 121, grade: "EX" },
  },

  profile: {
    age: "29",
    race: "Human",
    homeland: "East Asian Federation, Tokyo",
    height: "177cm",
    birthday: "January 14th",
    bwh: "97(K)-57-106",
    story: `Matsumoto Yui grew up in a peaceful, ordinary home, surrounded by warmth, stability, and love. For as long as she could remember, her dream had been simple: to one day build a quiet, happy family of her own.

    But fate had other plans. Born with a rare psionic gift, Yui couldn't remain in the background for long. As the Rift Crisis worsened, her abilities made her a natural fit for the Bureau of Rift Management. She rose quickly through the ranks as an Esper agent of Discover, carrying out her duties with calm precision and quiet excellence.

    Yet her talent came at a price. Her success often went unacknowledged, her accomplishments taken by those above her. And then came the worst of them: Secretary So Joo-hee. Under her, Yui was left to manage the Intelligence Division nearly alone. Even so, she endured.

    Now, assigned to the command of the Human God, someone unlike any superior she's ever known, Yui is slowly beginning to believe in something more. That maybe her strength doesn't have to come at the cost of isolation. That maybe, in this strange new world… her long-held dream is no longer out of reach.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/eE2qoeeheNk",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/EbhI5Fp-w_Y",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "terrarium", value: 50 },
    { gift: "gun-maintenance-kit", value: 20 },
    { gift: "americano-voucher", value: 20 },
  ],
};
