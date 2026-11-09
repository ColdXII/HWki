import type { CharacterDetails } from "../types";

export const yvonna: CharacterDetails = {
  skins: [
    {
      id: "yvonna-s1",
      name: "???",
      portrait: "/characters/yvonna/yvonna-s1p.webp",
      fullBody: "/characters/yvonna/yvonna-s1.webp",
      fullBodyCensored: "/characters/yvonna/yvonna-s1c.webp",
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
          url: "https://youtu.be/QypXAiPB-qY",
          title: "Official PV",
        },
        {
          source: "youtube",
          url: "https://youtu.be/pZtGHKIOz64",
          title: "Slider Preview",
        },
      ],
    },
    {
      id: "yvonna-s2",
      name: "???",
      portrait: "/characters/yvonna/yvonna-s2p.webp",
      fullBody: "/characters/yvonna/yvonna-s2.webp",
      fullBodyCensored: "/characters/yvonna/yvonna-s2c.webp",
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
          url: "https://youtu.be/A10tghFYy18",
          title: "Official PV",
        },
      ]
    },
    {
      id: "yvonna-s3",
      name: "???",
      portrait: "/characters/yvonna/yvonna-s3p.webp",
      fullBody: "/characters/yvonna/yvonna-s3.webp",
      fullBodyCensored: "/characters/yvonna/yvonna-s3c.webp",
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
          url: "https://youtu.be/eF7ud9osljg",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2010599523052368047",
          title: "X PV",
        },
      ]
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. Crit Rate (60%)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "skadia", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
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
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Rate (60%)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "skadia", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-eternal-battle",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
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
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-eternal-battle",
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
      note: "Substats Priority:\n1. Crit Rate (60%)\n2. Crit Damage\n3. Magic Attack",
      weapon: { id: "skadia", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
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
      id: "surrounding-frost",
      name: "Surrounding Frost",
      type: "Active",
      ap: 40,
      cooldown: 0,
      icon: "/skills/yvonna/ba.webp",
      description: `Freezes the forward flow and attacks.
      Deals Cold DMG equal to {damage}% of Magic ATK to enemies in a 25º, 7m fan-shaped area targeting a specified enemy.
      This attack temporarily increases Accuracy by 100%, but cannot perform a Weak Point attack.`,
      damage: {
        stat: "magicAtk",
        percent: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
        damageType: "Cold",
      },
    },
    {
      id: "shroud-of-frost",
      name: "Shroud of Frost",
      type: "Passive",
      icon: "/skills/yvonna/p1.webp",
      description: `Once per round, whenever each ally is attacked, All DEF increases temporarily by {allDef}.
      if the affected ally defeats an enemy within the same round, SPD is increased by 260% until the end of the newly started turn.`,
      values: {
        allDef: [880, 960, 1040, 1120, 1200, 1280, 1360, 1440, 1520, 1600],
      },
    },
    {
      id: "freezing-grasp",
      name: "Freezing Grasp",
      type: "Active",
      ap: 50,
      cooldown: 1,
      icon: "/skills/yvonna/s1.webp",
      description: `Perceives the broad current and readies to intervene.
      Attacks a target within {area}m.
      Deals Cold DMG equal to {damage}% of Magic ATK to the target and enemies within a 2m radius.
      Then gains [World Where Flow Stops] for 2 rounds, enhancing Support Attack.

      - [World Where Flow Stops]: When performing a Support Attack with [Lingering Cold],
      Cold Boost temporarily increases by {coldBoost}% and the range of [Lingering Cold] increases by 15m`,
      damage: {
        stat: "magicAtk",
        percent: [45, 50, 54, 59, 63, 68, 72, 77, 81, 86],
        damageType: "Cold",
      },
      values: {
        area: [10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15],
        coldBoost: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
      },
    },
    {
      id: "frost-resonance",
      name: "Frost Resonance",
      type: "Passive",
      icon: "/skills/yvonna/p2.webp",
      description: `Inflicts [Frost] on enemies hit, lasting for 2 rounds.
      When an ally attacks an enemy afflicted with [Frost] during their turn, you gain 1 stack of [Presence of Frost].

      - [Frost]: Reduces Slash, Pierce, Crush and Cold by {debuff}.

      [Presence of Frost]:
      Automatically triggers a [Condensed Chill] Support Attack against either the enemy your ally attacked this turn or a currently targetable enemy.
      Performs a Support Attack with [Lingering Cold] against the enemy attacked by an ally who acted this turn or against an enemy currently within range.

      [Lingering Cold]:
      Harnesses nearby cold to strike the target. Deals {damage}% of Magic ATK as Cold DMG.`,
      damage: {
        stat: "magicAtk",
        percent: [55, 61, 66, 72, 77, 83, 88, 94, 99, 105],
        damageType: "Cold",
      },
      values: {
        debuff: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
      },
    },
    {
      id: "the-coldsnap",
      name: "The Coldsnap",
      type: "Active",
      ap: 15,
      cooldown: 0,
      icon: "/skills/yvonna/s2.webp",
      description: `When performing a Support Attack, gain [Chill]. Stacks up to 5 times.
      When holding 5 stacks of [Chill], all stacks are consumed to activate this skill.

      Summons a raging froststorm, attacking enemies.
      Deals Cold DMG equal to {damage}% of Magic ATK to enemies within a 9m, 150º cone and inflicts [Slow] for 2Rs.
      While using this skill, Accuracy temporarily increases by 300%.

      - [Slow]: SPD decreases by 40%.

      [SIGNATURE WEAPON EFFECT]:
      When successfully attacking with an action other than a response, gains an additional [Chill] effect at the end of the turn.`,
      damage: {
        stat: "magicAtk",
        percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
        damageType: "Cold",
      },
      values: {
        ap: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
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
    "tranels-cold-blooded",
    "hoarfrost",
    "marlon",
    "interested-magic",
    "cold",
    "rational",
    "competent",
  ],

  manual: {
    spd: 86,
    startApSeen: { value: 138, grade: "EX" },
  },

  profile: {
    age: "25",
    race: "Marlon",
    homeland: "Tranel Republic, Reina",
    height: "167cm",
    birthday: "December 31st",
    bwh: "80(F)-49-90",
    story: `In Tranel, learning the magic of frost is an extremely dangerous endeavor. Those who master it are often seen as people who halt the natural flow, and thus face religious and social suspicion, even if they manage to attain noble titles, often being talked about behind their backs. For this reason, most Frostmancers are orphans who begin learning frost magic from a very young age. Yvonna was one of these orphans. She learned various dangerous frost spells as a child and was selected as an officer in charge of fleet attacks under Vlissing's command.

    In the process, she learned to act kindly towards everyone in order not to appear dangerous, and she realized that controlling her emotions allowed her to avoid some of the scrutiny. As a result, she learned to greet others with a smile, almost like a doll.

    During the process of escaping from Tranel to Earth, she played a significant role, earning the trust of many people, and now, she has become able to work openly in the light.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/6SRhASpvUhU",
        title: "Official PV 1",
      },
      {
        source: "youtube",
        url: "https://youtu.be/f3dM2Zt2JzY",
        title: "Official PV 2",
      },
      {
        source: "youtube",
        url: "https://youtu.be/bfhqMoXhLHk",
        title: "Official PV 3",
      },
    ],
  },

  gifts: [
    { gift: "snow-globe", value: 40 },
    { gift: "americano-voucher", value: 20 },
  ],
};
