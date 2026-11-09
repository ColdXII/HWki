import type { CharacterDetails } from "../types";

export const leah: CharacterDetails = {
  skins: [
    {
      id: "leah-s1",
      name: "Purring Temptation Lingerie",
      portrait: "/characters/leah/leah-s1p.webp",
      fullBody: "/characters/leah/leah-s1.webp",
      fullBodyCensored: "/characters/leah/leah-s1c.webp",
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
          url: "https://youtu.be/rv9yfExC3p0",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1972511858814021978",
          title: "X PV",
        },
      ],
    },
    {
      id: "leah-s3",
      name: "???",
      portrait: "/characters/leah/leah-s3p.webp",
      fullBody: "/characters/leah/leah-s3.webp",
      fullBodyCensored: "/characters/leah/leah-s3c.webp",
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
      note: "Substats Priority: \n1. Evade (Min 440-470)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "blessed-cat-bell", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
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
      note: "Substats Priority: \n1. Evade (Min 440-470)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "blessed-cat-bell", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "scorching-sun",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-knight-of-seven-petals",
          slot: "left",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
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
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Evade (Min 440-470)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "blessed-cat-bell", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
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
      id: "soulflame-strike",
      name: "Soulflame Strike",
      type: "Active",
      ap: 40,
      cooldown: 0,
      icon: "/skills/leah/ba.webp",
      description: `Rings the bell to summon the soul's flame.
      Deals {damage}% of Magic ATK as Immaterial DMG to the targeted enemy and {damage2}% of Magic ATK as Splash Immaterial DMG to enemies within a 6m, 40° cone around the target.`,
      damage: [
        {
          stat: "magicAtk",
          percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
          damageType: "Immaterial",
          label: "AoE Damage",
        },
        {
          stat: "magicAtk",
          percent: [25, 28, 30, 33, 35, 38, 40, 43, 45, 48],
          damageType: "Immaterial",
          label: "AoE Spalsh",
        },
      ],
    },
    {
      id: "serene-eye",
      name: "Serene Eye",
      type: "Passive",
      icon: "/skills/leah/p.webp",
      description: `At the start of battle, if the user's base Evade is 260 or higher, the user's Crit Rate increases by {critRate}% and all enemies take {dmgIncrease}% more damage.
      If the user's base Evade is 470 or higher, the user's Crit Rate increases by {critRate2}% and all enemies take {dmgIncrease2}% more damage.`,
      values: {
        critRate: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        dmgIncrease: [6.3, 6.6, 6.9, 7.2, 7.5, 7.8, 8.1, 8.4, 8.7, 9],
        critRate2: [38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
        dmgIncrease2: [12.6, 13.2, 13.8, 14.4, 15, 15.2, 16.2, 16.8, 17.4, 18],
      },
    },
    {
      id: "swiftpaws-blessing",
      name: "Swiftpaw's Blessing",
      type: "Active",
      ap: 30,
      cooldown: 2,
      icon: "/skills/leah/s1.webp",
      description: `A swift Cat Spirit playfully visits an ally.
      If another spirit is already present, a bit of "mischief" may occur…
      Grants the chosen ally (excluding the user) [Purification] and the [Swiftpaw's Blessing] effect for 2R, and grants one instance of [Extra Action].
      During this [Extra Action], only [Proudclaw's Blessing] and Standby may be used.

      [Proudclaw's Blessing]: A proud Cat Spirit approaches the chosen ally.
      Cannot be applied where a [Swiftpaw] is already present. Grants the ally [Purification] and the [Proudclaw's Blessing] effect for 2R, while also increasing the user's Magic ATK by {magicAtk}% for 2R.

      - [Purification]: Removes [Taunt], [Fear], [Sleap], [Madness], [Stun] and [Focus Disruption].
      - [Extra Action]: After acting during the user's turn, gain 1 Extra Action. During this [Extra Action], only [Proudclaw's Blessing] and Standby may be used. However, if no Active skills can be used with the Remaining AP, the Extra Action is not granted.
      
      [Swiftpaw's Blessing]: Grants 15 AP when applied. Reduces Aggro Adjustment by 12 and increases SPD by {spd}%.
      Increases Pierce Boost by {scale}% + {scale2}% of the user's Base Evade.

      [Proudclaw's Blessing]: Grants 15 AP when applied. Reduces Aggro Adjustment by 12 and increases SPD by {spd}% and Accuracy by {accuracy}%.
      Increases Poison Boost by {scale}% + {scale2}% of the user's Base Evade.

      [SIGNATURE WEAPON EFFECT]:
      The Pierce Boost granted by [Swiftpaw's Blessing] also increases the target's Slash Boost and Crush Boost by 85% of that value.
      The Poison Boost granted by [Proudclaw's Blessing] also increases the target's Heat, Cold, Electric, and Immaterial Boost by 85% of that value.`,
      values: {
        magicAtk: [44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
        spd: [84, 88, 92, 96, 100, 104, 108, 112, 116, 120],
        accuracy: [99, 108, 117, 126, 135, 144, 153, 162, 171, 180],
        scale: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
        scale2: [4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8],
      },
    },
    {
      id: "spiritclaw-rite",
      name: "Spiritclaw Rite",
      type: "Active",
      ap: 15,
      cooldown: 2,
      maxLevel: 1,
      icon: "/skills/leah/s2.webp",
      description: `Offer a rite to the Cat Spirit and summon the spirit of a [Summon: Wisp Cat] at the designated location.
      Summons an uncontrollable [Summon: Wisp Cat] and grants the user the [Shadowfall] effect for 2 rounds.
      When summoned, any previously existing [Summon: Wisp Cat] will return.
      At the start of each wave, the cooldown is reduced by 1 round.

      - [Shadowfall]: Increases Magic ATK by 169% of Base Evade.

      [Summon: Wisp Cat]
      Base Max HP: 150% of the user's stat.
      Base Evade: 150% of the user's stat.
      Base AP upon Summon: Fixed at 0.
      
      Has a very high Aggro Adjustment by default. When attacked, the Aggro Adjustment gradually decreases over 4 hits until it reaches a normal level.

      [SIGNATURE WEAPON EFFECT]:
      Reduces the AP cost of [Spiritclaw Rite] by 100%.`,
    },
    {
      id: "soulflame-fury",
      name: "Soulflame Fury",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/leah/s3.webp",
      description: `When [Spiritclaw Rite] is used, this skill becomes available for 2R.
      Countless cat spirits claw through the air.
      Deal {damage}% of Magic ATK as Immaterial DMG to enemies in a {scale}m × 7.5m rectangle ahead.
      For each point of INT above 15 or AGI above 13, Combat Skill DMG increases by 15%.
      For each point of VIT above 10, Crit DMG increases by 16%.

      [SIGNATURE WEAPON EFFECT]:
      When attacking with [Soulflame Fury], grants allies with 70% HP or less a [Shadow Veil] shield for 2R.

      - [Shadow Veil]: Grants a shield equal to 12% of the user's Base Evasion and increases Evasion by 15%.`,
      damage: {
        stat: "magicAtk",
        percent: [220, 242, 264, 286, 308, 330, 352, 374, 396, 418],
        damageType: "Immaterial",
      },
      values: {
        scale: [1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6],
      },
    },
  ],

  weaponType: "Mana Shard",

  basic: { str: 4, tec: 5, int: 15, vit: 10, agi: 11 },

  gradeGains: {
    EX1: { int: 1 },
    EX2: { vit: 1 },
    EX3: { int: 1 },
    EX4: { vit: 1 },
    EX5: { int: 2 },
    EX6: { agi: 2 },
  },

  traits: [
    "the-daring-priestess",
    "valolanas-duty",
    "catsidhe",
    "interested-evade",
    "arrogant",
    "noble",
    "mysterious",
  ],

  manual: {
    spd: 117,
    startApSeen: { value: 130, grade: "EX" },
  },

  profile: {
    age: "26",
    race: "Catsidhe",
    homeland: "Beastlands / Valolana",
    height: "167cm",
    birthday: "May 16th",
    bwh: "95(L)-51-97",
    story: `Leah, the proud and graceful priestess of Valolana, stands as the representative of her people. She guides their spirits and wields their power in battle, leading both allies and kin with poise.

    Yet behind her lofty, elegant exterior lies an unexpectedly endearing side. One need only see how much she adores children to notice it. Her fondness for young Delia, who works hard toward independence, reveals a tenderness far removed from her usual prideful demeanor, an innocence that shines through.

    Leah is also surprisingly impressionable. In her efforts to adjust to life on Earth, she often seeks advice from a local beauty salon, of all places.

    Even so, she continues striving earnestly for the revival of Valolana. And little by little, almost without realizing it herself, she has begun to show glimpses of the feelings she holds for the Human God.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/LM8MtmNeDwM",
        title: "Official PV 1",
      },
      {
        source: "youtube",
        url: "https://youtu.be/w-mPZV418Yk",
        title: "Official PV 2",
      },
      {
        source: "youtube",
        url: "https://youtu.be/ApZFEWzsKuY",
        title: "Affection PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1971137638431371463",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1965037384187396182",
        title: "X PV 2",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1972912361167310949",
        title: "X PV 3",
      },
    ],
  },

  gifts: [
    { gift: "terrarium", value: 50 },
    { gift: "catnip-pouch", value: 30 },
    { gift: "mangrove-leaf", value: 30 },
    { gift: "hamburg-steak", value: 20 },
  ],
};
