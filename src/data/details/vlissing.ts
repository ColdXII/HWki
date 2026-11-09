import type { CharacterDetails } from "../types";

export const vlissing: CharacterDetails = {
  skins: [
    {
      id: "vlissing-s1",
      name: "Luxury Vacation",
      portrait: "/characters/vlissing/vlissing-s1p.webp",
      fullBody: "/characters/vlissing/vlissing-s1.webp",
      fullBodyCensored: "/characters/vlissing/vlissing-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "vlissing-s2",
      name: "Benevolent Angel",
      portrait: "/characters/vlissing/vlissing-s2p.webp",
      fullBody: "/characters/vlissing/vlissing-s2.webp",
      fullBodyCensored: "/characters/vlissing/vlissing-s2c.webp",
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
          url: "https://youtu.be/KdLOgwarev4",
          title: "Official PV",
        },
      ],
    },
    {
      id: "vlissing-s3",
      name: "Finally, Tonight Lingerie",
      portrait: "/characters/vlissing/vlissing-s3p.webp",
      fullBody: "/characters/vlissing/vlissing-s3.webp",
      fullBodyCensored: "/characters/vlissing/vlissing-s3c.webp",
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
          url: "https://youtu.be/W_N_7LjD-gw",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1959856568528453977",
          title: "X PV",
        },
      ],
    },
    {
      id: "vlissing-s5",
      name: "???",
      portrait: "/characters/vlissing/vlissing-s5p.webp",
      fullBody: "/characters/vlissing/vlissing-s5.webp",
      fullBodyCensored: "/characters/vlissing/vlissing-s5c.webp",
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
          url: "https://youtube.com/shorts/Kz8HGXX7Y4M",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2114706027996455334",
          title: "X PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      note: "Substats Priority:\n1. Magic Attack\n2. AP Recovery",
      weapon: { id: "atra-hasis", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Magic Attack\n2. AP Recovery",
      weapon: { id: "atra-hasis", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "sharp-wave",
      name: "Sharp Wave",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/vlissing/ba.webp",
      description: `Targets an enemy and unleashes blades of water in a 25º, 7m cone.
      Deals Slash DMG equal to {damage}% of Magic ATK, restores HP to allies along the path by {recoverHp}% of Magic ATK, and grants 1 stack of [Tip of the Wave] for 2 rounds.

      - [Tip of the Wave]: Crit Rate increases by 4%, stacks up to 2 times.

      [SIGNATURE WEAPON EFFECT]:
      Changes [Sharp Wave] to a Directional attack`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
      values: {
        recoverHp: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "counterwave",
      name: "Counterwave",
      type: "Passive",
      icon: "/skills/vlissing/p1.webp",
      description: `At the start of each round, {chance}% chance to gain [Counterwave] for 1 round.

      - [Counterwave]: Grants immunity to action-forcing effects [Taunt], [Fear], [Sleap], [Madness], [Stun] and the action-restricting effect [Focus Disruption], while Heat DEF increases by {heatDef}`,
      values: {
        chance: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
        heatDef: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "wave-of-life-cycle",
      name: "Wave of Life Cycle",
      type: "Active",
      ap: 30,
      cooldown: 2,
      icon: "/skills/vlissing/s1.webp",
      description: `Purifies with the flow of pure waters.
      Restores HP to allies within a {size}m radius around the targeted ally equal to {recoverHp}% of Magic ATK, and grants [Purification] and 1 stack of [Clean Flow].

      - [Purification]: Removes [Taunt], [Fear], [Sleap], [Madness], [Stun] and [Focus Disruption].`,
      values: {
        size: [2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4],
        recoverHp: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "ebb-and-flow",
      name: "Ebb and Flow",
      type: "Passive",
      icon: "/skills/vlissing/p2.webp",
      description: `Redirects the current, granting life to allies and suffering to enemies.
      Grants the targeted ally 1 stack of [Clean Flow] and the targeted enemy 1 stack of [Tangled Flow]. Both effects stack up to 5 times.

      [Clean Flow]:
      At the end of the turn in which the holder is attacked,
      Restores HP equal to {recoverHp}% of Magic ATK +{scale} of the target's Max HP, then consumes 1 stack of [Clean Flow].
      Healing increases up to 1.15 x based on the target's missing HP.
      The maximum multiplier further increases by 0.12 for every 1 INT above 16.

      [Tangled Flow]:
      At the end of the turn in which the holder is attacked by an enemy other than the caster, deals Additional Pierce DMG equal to {damage}% of Magic ATK, then consumes 1 stack of [Tangled Flow].
      Damage increases to 1.15 x based on the target's missing HP.
      The maximum multiplier further increases by 0.12 for every 1 INT above 16

      [SIGNATURE WEAPON EFFECT]:
      On hit, enemies have a chance equal to your current Additional DMG Boost to gain 1 stack of [Tangled Flow].
      When hitting an enemy that already has [Tangled Flow] with an Active skill, deals Additional Slash DMG equal to 120% of Magic ATK.
      At the start of each Round, allies with [Clean Flow] gain 18% of All ATK for 1 Round.`,
      damage: {
        stat: "magicAtk",
        percent: [220, 240, 260, 280, 300, 320, 340, 360, 380, 400],
        damageType: "Pierce",
      },
      values: {
        recoverHp: [33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
        scale: [6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 11.4, 12],
      },
    },
    {
      id: "flooding-flow",
      name: "Flooding Flow",
      type: "Active",
      ap: 75,
      cooldown: 2,
      icon: "/skills/vlissing/s2.webp",
      description: `At the start of battle, gain [Riding the Flow]. This effect ends when using this skill.
      Summons a massive current to crash down in a circular area.
      Deals Crush DMG equal to {damage}% of Magic ATK to enemies within a 9m radius, and Restores HP to allies equal to {recoverHp}% of Magic ATK.

      Upon use, the caster gains [Flooding Power] and [Constraint of the Flow] for 2 rounds.
      On a successful hit, the caster gains 1 stack of [Eye of the Flow] for 2 rounds.
      Additionally grants allies 1 stack of [Clean Flow] and enemies 1 stack of [Tangled Flow].

      - [Riding the Flow]: SPD increases by 60%.
      - [Flooding Power]: Additional DMG Boost increases by {additionalDmgBoost}%.
      - [Constraint of the Flow]: Evade decreases by 36%.
      - [Eye of the Flow]: Elemental Boost increases by {elementalBoost}% and Magic ATK increases by {magicAtk}%. Stacks up to 3 times.`,
      damage: {
        stat: "magicAtk",
        percent: [140, 154, 168, 182, 196, 210, 224, 238, 252, 266],
        damageType: "Crush",
      },
      values: {
        additionalDmgBoost: [44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
        elementalBoost: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        magicAtk: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      },
    },
  ],

  weaponType: "Staff",

  basic: { str: 7, tec: 8, int: 13, vit: 10, agi: 10 },

  gradeGains: {
    B: { tec: -1 },
    A: { int: -1 },
    S: { agi: -1 },
    SS: { vit: -1 },
    EX1: { int: 2 },
    EX2: { vit: 1 },
    EX3: { int: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { int: 2 },
  },

  traits: [
    "divine-guardian-of-tranel",
    "embracing-wave",
    "marlon",
    "interested-magic",
    "noble",
    "rational",
  ],

  manual: {
    spd: 79,
    startApSeen: { value: 127, grade: "EX" },
  },

  profile: {
    age: "112",
    race: "Marlon",
    homeland: "Tranel Republic, Reina",
    height: "182cm",
    birthday: "July 1st",
    bwh: "99(I)-58-114",
    story: `In the Tranel Republic, famous for its navigation, the Flow Guardians who guide the ships are the most important mages in the republic. They direct waterways and at times even create currents directly. Some Flowmancers possess the ability to manipulate the flow within the body to heal wounds. These individuals learn the art of fluid manipulation, earning them noble status and significant influence in society.

    Among these Flow Guardians, the artisan maiden of the flow, Vlissing, is renowned for her grace and majesty. Despite being human, she received the blessing of the flow and does not age, making her radiant beauty and her rejection of countless marriage proposals from noblemen famous. She is arrogant toward everyone, but due to her immense control over the power of the flow, few are willing to cross her.

    After leading the people of Tranel to Earth with her powers, she dispatched Flow Guardians to various locations related to water. While she is regarded as an important figure even in Neo Seoul, Vlissing still seeks to elevate her name further, craving greater reverence and admiration.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/CQuBq6iRloA",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "queens-tiara", value: 120 },
    { gift: "finest-black-tea", value: 40 },
    { gift: "luxury-bag", value: 60 },
  ],
};
