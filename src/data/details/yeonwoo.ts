import type { CharacterDetails } from "../types";

export const yeonwoo: CharacterDetails = {
  skins: [
    {
      id: "yeonwoo-hungry",
      name: "Hungry Mode",
      portrait: "/characters/yeonwoo/yeonwoo-hp.webp",
      fullBody: "/characters/yeonwoo/yeonwoo-h.webp",
      sources: [
        {
          type: "other",
          available: false,
        },
      ],
    },
    {
      id: "yeonwoo-s2",
      name: "Licklick Milky Drip",
      portrait: "/characters/yeonwoo/yeonwoo-s2p.webp",
      fullBody: "/characters/yeonwoo/yeonwoo-s2.webp",
      fullBodyCensored: "/characters/yeonwoo/yeonwoo-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "yeonwoo-s3",
      name: "Licklick Milky Drip - Hungry Mode ",
      portrait: "/characters/yeonwoo/yeonwoo-s3p.webp",
      fullBody: "/characters/yeonwoo/yeonwoo-s3.webp",
      fullBodyCensored: "/characters/yeonwoo/yeonwoo-s3c.webp",
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
      note: "Substats Priority: \n1. Max HP\n2. Crit Damage\n3. AP Recovery",
      weapon: { id: "the-everlasting-burger", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound",
          slot: "top",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound",
          slot: "left",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "lifebound",
          slot: "right",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Max HP\n2. Crit Damage\n3. AP Recovery",
      weapon: { id: "the-everlasting-burger", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Max HP\n2. Crit Damage\n3. AP Recovery",
      weapon: { id: "the-everlasting-burger", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "gluttons-might",
      name: "Glutton's Might",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/yeonwoo/ba.webp",
      description: `Attacks with the Glutton's Might.
      Deals Crush DMG equal to {damage}% of Magic ATK and restores HP as HP Recovery equal to {recoverHp}% of Max HP.`,
      damage: {
        stat: "magicAtk",
        percent: [33, 36, 40, 43, 46, 50, 53, 56, 59, 63],
        damageType: "Crush",
      },
      values: {
        recoverHp: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
      },
    },
    {
      id: "snack-time",
      name: "Snack Time",
      type: "Passive",
      maxLevel: 1,
      icon: "/skills/yeonwoo/p1.webp",
      description: `When receiving HP Recovery, if [Gluttony] is not at max stacks, gain [Room for Snacks].

      - [Gluttony]: Stacks up to 8 times as a base effect of the Glutton's skills.
      - [Room for Snacks]: Triggers an additional response using the [Munch O'Clock] skill. This effect ends at the end of the turn.

      [Munch O'Clock]:
      Takes something out and digs in.
      Gain 1~2 stacks of [Gluttony]. This skill counts as a Basic Skill.

      [SIGNATURE WEAPON EFFECT]:
      If [Munch O'Clock!] grants only 1 stack of [Gluttony], gain 1 additional stack.`,
      values: {
        spd: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
      },
    },
    {
      id: "leaping-chomp",
      name: "Leaping Chomp!",
      type: "Active",
      ap: 75,
      cooldown: 2,
      icon: "/skills/yeonwoo/s1.webp",
      description: `Leaps up and lands at target location,
      Dealing Crush DMG equal to {damage}% of Magic ATK to enemies within a 3m circular radius.`,
      damage: {
        stat: "magicAtk",
        percent: [110, 121, 132, 143, 154, 165, 176, 187, 198, 209],
        damageType: "Crush",
      },
    },
    {
      id: "all-fueled-up",
      name: "All Fueled Up!",
      type: "Passive",
      icon: "/skills/yeonwoo/p2.webp",
      description: `Boosts strength through great digestion.
      Increases Healing Intake by {healScale}% during battle.
      Gains 1 stack of [Potential Calories] at turn end after receiving HP Recovery or using a Combat Skill.

      - [Potential Calories]: Magic ATK increases by {magicAtk}% of Base Max HP. Stacks up to 3 times.`,
      values: {
        healScale: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        magicAtk: [6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 11.4, 12],
      },
    },
    {
      id: "one-for-the-road",
      name: "One for the Road?",
      type: "Active",
      ap: 15,
      cooldown: 1,
      icon: "/skills/yeonwoo/s2.webp",
      description: `Devours a hearty meal to restore the power of Gluttony.
      Recovers HP equal to {recoverHp}% of missing HP and gains 4 stacks of [Gluttony].
      While under the [True Gourmand] effect from [Avatar of Gluttony], this skill transforms into [Boom Boom Slam!!] and its cooldown is reset.
      Shares a cooldown with [Boom Boom Slam!!].

      [Boom Boom Slam!!]:
      Slams the ground wildly with your fist.
      Deals Crush DMG equal to {damage}% of Magic ATK to a designated target,
      and Splash Crush DMG equal to {damage2}% of Magic ATK to enemies within a 4m radius.
      On a successful hit, the skill's cooldown is reset.
      Shares a cooldown with [One for the Road?].`,
      damage: [
        {
          stat: "magicAtk",
          percent: [154, 169, 185, 200, 216, 231, 246, 262, 277, 293],
          damageType: "Crush",
        },
        {
          stat: "magicAtk",
          percent: [121, 133, 145, 157, 169, 182, 194, 206, 218, 230],
          damageType: "Slash",
        },
      ],
      values: {
        recoverHp: [33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
      },
    },
    {
      id: "avatar-of-gluttony",
      name: "Avatar of Gluttony",
      type: "Active",
      ap: 15,
      cooldown: 0,
      icon: "/skills/yeonwoo/s3.webp",
      description: `Can only be used when holding 8 or more stacks of [Gluttony].
      Draws upon the full power of Gluttony to assume a "form befitting an Apostle of Gluttony".
      Grants the [True Gourmand] effect and restores 15 AP.
      While this effect is active, the skill is replaced with [Yum-Yummy Beam!!].

      While [True Gourmand] is active, using any skill causes you to take Fixed DMG from the [Pact · Nutrition, Gluttony Conversion] effect.
      After 2 rounds (including the turn this skill is used), all skills except [Yum-Yummy Beam!!] become unavailable on your turn.

      - [True Gourmand]: At the start of your turn, Magic ATK increases by {magicAtk}% of Max HP and lasts until the end of the turn.
      - [Pact · Nutrition, Gluttony Conversion]: Burns through nutrition to sustain Gluttony's Hunger.
      Takes Fixed DMG equal to current shield value plus 32% of current Max HP.

      [Yum-Yummy Beam!!]:
      While affected by [True Gourmand · Skill Lock], only this skill can be used.

      Channels the power of Gluttony into a devastating burst.
      Deals Crush DMG equal to {damage}% of Magic ATK to all enemies in a 90º cone within 6m.
      This skill does not trigger [Pact · Nutrition, Gluttony Conversion]'s Fixed DMG effect.

      If used without [True Gourmand · Skill Lock], the transformed [Avatar of Gluttony] skill will incur a 1-round cooldown after use.

      Upon attack, Combat Skill DMG is increased by 140%,
      and for each point of VIT over 18, Crit DMG increases by 24%. These effects last until the end of the turn.

      After the attack, [True Gourmand] ends, HP is fully restored, and all stacks of [Gluttony] and [Potential Calories] are reset.`,
      damage: {
        stat: "magicAtk",
        percent: [121, 133, 145, 157, 169, 182, 194, 206, 216, 230],
        damageType: "Crush",
      },
      values: {
        magicAtk: [22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
      },
    },
  ],

  weaponType: "Mana Shard",

  basic: { str: 4, tec: 9, int: 9, vit: 13, agi: 5 },

  gradeGains: {
    EX1: { vit: 1 },
    EX2: { agi: 2 },
    EX3: { vit: 2 },
    EX4: { vit: 1 },
    EX5: { vit: 1 },
    EX6: { vit: 1, agi: 1 },
  },

  traits: [
    "the-unrestrained",
    "gluttony-and-the-demons",
    "human",
    "interested-hp",
    "resilient",
    "desperate",
    "fortunate",
  ],

  manual: {
    spd: 92,
    startApSeen: { value: 154, grade: "EX" },
  },

  profile: {
    age: "20",
    race: "Human",
    homeland: "East Asian Federation, Seoul",
    height: "151cm",
    birthday: "October 22nd",
    bwh: "90(J)-49-90 / 103(K)-61-105",
    story: `Born in an ordinary family in Neo Seoul, Yeonwoo lost her family during the Rift crisis that struck downtown Seoul in her childhood. Afterwards, she was raised by her grandmother. Though her noticeable appetite led to bullying at school, her grandmother's warm care allowed her to safely finish her school years.

    Following her grandmother's passing, Yeonwoo returned to Neo Seoul, as per her final wish, but ended up spending most of the inheritance she received. To cover her tuition, Yeonwoo began livestreaming mukbangs, drawing from the praise she had once received from adults for her hearty appetite.

    However, after accepting a suspicious invitation and falling asleep, Yeonwoo's life enters a new phase, when she awakens to meet the Human God.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/TwZemeDhte8",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1945022789406040250",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1952989250552762503",
        title: "X PV 2",
      },
    ],
  },

  gifts: [
    { gift: "hotel-restaurant-meal-voucher", value: 40 },
    { gift: "fire-octopus-noodles", value: 20 },
    { gift: "hamburg-steak", value: 20 },
    { gift: "strawberry-chubby-macaron", value: 20 },
    { gift: "glazed-fruit-stick", value: 20 },
  ],
};
