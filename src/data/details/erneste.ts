import type { CharacterDetails } from "../types";

export const erneste: CharacterDetails = {
  skins: [
    {
      id: "erneste-s1",
      name: "Sunshine Vacation",
      portrait: "/characters/erneste/erneste-s1p.webp",
      fullBody: "/characters/erneste/erneste-s1.webp",
      fullBodyCensored: "/characters/erneste/erneste-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "erneste-s3",
      name: "???",
      portrait: "/characters/erneste/erneste-s3p.webp",
      fullBody: "/characters/erneste/erneste-s3.webp",
      fullBodyCensored: "/characters/erneste/erneste-s3c.webp",
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
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority: \n1. Melee Attack\n2. Starting AP",
      weapon: { id: "dawnbringer", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Melee Attack\n2. Starting AP",
      weapon: { id: "dawnbringer", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "pole-break",
      name: "Pole Break",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/erneste/ba.webp",
      description: `Swings the greatsword widely to attack enemies.
      Deals Slash DMG equal to {damage}% of Melee ATK to enemies in a fan-shaped area.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "gotta-protect-myself",
      name: "Gotta Protect Myself!",
      type: "Passive",
      icon: "/skills/erneste/p1.webp",
      description: `Increases Block Chance by {blockChance}%.
      Block Chance is capped at 75%.`,
      values: {
        blockChance: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "formation-destruction",
      name: "Formation Destruction",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/erneste/s1.webp",
      description: `Charges towards the target with a half-swording technique, colliding forcefully, then swings the sword widely to attack surrounding enemies.
      Leaps low at the target, dealing Slash DMG equal to {damage}% of Melee ATK to the target and all enemies within a 2.5m radius, and knocks them back 2.5m.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
    },
    {
      id: "crisis-to-opportunity",
      name: "Crisis to Opportunity!",
      type: "Passive",
      icon: "/skills/erneste/p2.webp",
      description: `On a successful block, gains an immediate opportunity for a counterattack.
      During counterattack, Melee ATK increases by {meleeAtk}%.`,
      values: {
        meleeAtk: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
    {
      id: "declaration-of-victory",
      name: "Declaration of Victory",
      type: "Active",
      ap: 45,
      cooldown: 3,
      icon: "/skills/erneste/s2.webp",
      description: `Raises the sword high and declares victory, boosting the morale of allies.
      Grants the [Declaration of Victory] effect to self and allies within a 5m radius for 2R.

      - [Declaration of Victory]: Increases each target's Melee ATK by {meleeAtk}% of the caster's Melee ATK, and increases SPD by {spd}.

      [SIGNATURE WEAPON EFFECT]:
      Extends the duration of [Declaration of Victory] to 3R and additionally increases the affected target's Melee ATK by 200% of the Erneste Melee ATK.`,
      values: {
        meleeAtk: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
        spd: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
  ],

  weaponType: "Two-handed Sword",

  basic: { str: 10, tec: 10, int: 9, vit: 10, agi: 11 },

  gradeGains: {
    B: { vit: -1 },
    A: { agi: -1 },
    SS: { str: 1 },
    EX: { str: 1 },
    EX1: { vit: 1 },
    EX2: { vit: 1 },
    EX3: { agi: 1 },
    EX4: { str: 1 },
    EX5: { str: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "snake-tongue",
    "tactical-commander",
    "marlon",
    "interested-melee",
    "arrogant",
    "improvising",
  ],

  manual: {
    spd: 92,
    startApSeen: { value: 138, grade: "S" },
  },

  profile: {
    age: "20",
    race: "Marlon",
    homeland: "The Empire, Lamivia",
    height: "162cm",
    birthday: "February 9th",
    bwh: "73(D)-46-85",
    story: `Erneste, born the daughter of the Imperial Mercenary Commander, took over the mercenary company at a young age when her father could no longer lead.

    Unfortunately, during one of her missions, she was cursed by a sorcerer, compelled to utter vile words regardless of the situation. Not long after, this curse caused a breakdown in her relationship with her subordinates, the mercenaries lost trust in her as Erneste's words turned increasingly spiteful. Eventually, she was abandoned by her own men.

    Fortunately, thanks to the kindness of Maximilia, she managed to escape safely to Earth during the Great Escape. However, her notorious reputation made it hard for anyone to accept her.

    That was when Yeon Chae-young, who had heard of her talent, approached her, offering a chance to put her skills to use for the Federation. Erneste accepted the offer.`,
    pv: [
      {
        source: "youtube",
        url: "https://www.youtube.com/shorts/8NjF_vN_TlY",
        title: "Ads PV 1",
      },
      {
        source: "youtube",
        url: "https://www.youtube.com/shorts/N4YTvshEEHI",
        title: "Ads PV 2",
      },
    ],
  },

  gifts: [
    { gift: "setflix-membership-voucher", value: 30 },
    { gift: "strategy-simulation-board-game", value: 40 },
    { gift: "hotel-restaurant-meal-voucher", value: 30 },
    { gift: "soju", value: 20 },
  ],
};
