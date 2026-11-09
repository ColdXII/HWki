import type { CharacterDetails } from "../types";

export const griselda: CharacterDetails = {
  skins: [
    {
      id: "griselda-s1",
      name: "Joy of the Holy Night",
      portrait: "/characters/griselda/griselda-s1p.webp",
      fullBody: "/characters/griselda/griselda-s1.webp",
      fullBodyCensored: "/characters/griselda/griselda-s1c.webp",
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
          url: "https://youtu.be/8w0HWYOYcUM",
          title: "Official PV",
        },
      ],
    },
    {
      id: "griselda-s2",
      name: "Fully Wet",
      portrait: "/characters/griselda/griselda-s2p.webp",
      fullBody: "/characters/griselda/griselda-s2.webp",
      fullBodyCensored: "/characters/griselda/griselda-s2c.webp",
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
          url: "https://youtu.be/2EPKgcCDfLU",
          title: "Official PV",
        },
      ],
    },
    {
      id: "griselda-s3",
      name: "Cozy Breakfast",
      portrait: "/characters/griselda/griselda-s3p.webp",
      fullBody: "/characters/griselda/griselda-s3.webp",
      fullBodyCensored: "/characters/griselda/griselda-s3c.webp",
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
          url: "https://youtu.be/5CNB6sb4qo4",
          title: "Official PV",
        },
      ],
    },
    {
      id: "griselda-s4",
      name: "Midday Maman",
      portrait: "/characters/griselda/griselda-s4p.webp",
      fullBody: "/characters/griselda/griselda-s4.webp",
      fullBodyCensored: "/characters/griselda/griselda-s4c.webp",
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
          url: "https://youtu.be/5aSTV12L3HA",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2019602852558295102",
          title: "X PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game2",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "the-eye-of-cosmos", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [
        "overworked",
        "persistent",
        "efficient",
        "improvising",
        "mysterious",
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "the-eye-of-cosmos", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [
        "overworked",
        "persistent",
        "efficient",
        "improvising",
        "mysterious",
      ],
    },
  ],

  skills: [
    {
      id: "arcane-explosion",
      name: "Arcane Explosion",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/griselda/ba.webp",
      description: `Releases arcane energy, causing a massive explosion.
      Deals Immaterial DMG equal to {damage}% of Magic ATK to enemies within a 3m Circular Range at the designated location, and Additional Crush DMG equal to {damage2}% of Magic ATK.
      When attacking with this skill, temporarily increases ACC by 100%.`,
      damage: [
        {
          stat: "magicAtk",
          percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
          damageType: "Immaterial",
          label: "Damage",
        },
        {
          stat: "magicAtk",
          percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
          damageType: "Crush",
          label: "Damage Splash",
        },
      ],
    },
    {
      id: "arcane-purge",
      name: "Arcane Purge",
      type: "Passive",
      icon: "/skills/griselda/p1.webp",
      description: `At the start of the round, grants the [Arcane Purge] effect to allies except Arcane Elementals.
      When the [Arcane Purge] effect expires, the Arcane Elemental on the battlefield gains 1 stack of [Pure Energy].

      - [Arcane Purge]: Becomes a valid target for other abilities of the Arcane Elemental.
      - [Pure Energy]: A stacking effect gained by the Arcane Elemental when [Arcane Purge] expires.
      Increases Magic ATK by {magicAtk}%, up to 3 times.`,
      values: {
        magicAtk: [10.3, 10.6, 10.9, 11.2, 11.5, 11.8, 12.1, 12.4, 12.7, 13],
      },
    },
    {
      id: "undefined-space",
      name: "Undefined Space",
      type: "Active",
      ap: 65,
      cooldown: 2,
      icon: "/skills/griselda/s1.webp",
      description: `Bends space with overwhelming arcane power.
      Increases the SPD of all allies (excluding self) by {spd}% of the Arcane Elemental's base AP recovery until the end of their turn, and creates an [Undefined Space] zone at the target location for 3 rounds.

      [Undefined Space]:
      When an ally ends their turn within the zone, they recover {ap}% of the AP spent on movement during that turn.
      When the zone is created and at the start of each round, enemies within the zone are slightly pulled toward the center.`,
      values: {
        spd: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        ap: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
    {
      id: "certain-fortune",
      name: "Certain Fortune",
      type: "Passive",
      icon: "/skills/griselda/p2.webp",
      description: `On hit, grants all allies a [Banish Misfortune] shield for 1 round (does not stack),
      and restores HP to allies within [Undefined Space] equal to {recoverHp}% of the Arcane Elemental's Max HP.
      The lower the target's current HP, the more HP is restored, up to an additional 40%.

      - [Banish Misfortune]: Grants a shield equal to {shield}% of the Grand Elemental of Arcane's Max HP.`,
      values: {
        recoverHp: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
        shield: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      },
    },
    {
      id: "quantum-singularity",
      name: "Quantum Singularity",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/griselda/s2.webp",
      description: `Can be activated by consuming 3 stacks of [Pure Energy]. Unleashes overwhelming arcane force to collapse space.
      After use, reduces the caster's AP Recovery by 20 for 1R.
      Deals Immaterial DMG equal to Magic ATK × {damage}% and Additional Crush DMG equal to {damage2}% of Magic ATK to enemies within a 6m radius at the target location.
      This Additional Crush DMG increases based on the target's missing HP, up to 10×.
      While using this skill, ACC is temporarily increased by 300%.

      [SIGNATURE WEAPON EFFECT]:
      Once per Round, when using the [Quantum Singularity] skill, grants the [Arcane Purge] effect to allies excluding Arcane Elementals.`,
      damage: [
        {
          stat: "magicAtk",
          percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
          damageType: "Immaterial",
          label: "AoE Damage",
        },
        {
          stat: "magicAtk",
          percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
          damageType: "Crush",
          label: "AoE Damage",
        },
      ],
    },
    {
      id: "reversal-of-causality",
      name: "Reversal of Causality",
      type: "Passive",
      icon: "/skills/griselda/p2.webp",
      description: `If an ally with the [Arcane Purge] effect attacks and at least one target is struck with a Weak Point hit, their Melee and Ranged ATK increase by {buff}% of the Grand of Arcane Elemental's Magic ATK for the rest of that turn.
      At the end of that turn, the [Arcane Purge] effect is removed.`,
      values: {
        buff: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
  ],

  weaponType: "Arcane Orb",

  basic: { str: 6, tec: 7, int: 20, vit: 9, agi: 19 },

  gradeGains: {
    B: { int: -2 },
    A: { int: -2 },
    S: { agi: -2 },
    SS: { agi: -3 },
    EX1: { int: 2 },
    EX2: { int: 1 },
    EX3: { int: 2 },
    EX4: { agi: 2 },
    EX5: { agi: 3 },
    EX6: { int: 2 },
  },

  traits: [
    "limitless-willpower",
    "entangled-threads",
    "elemental-of-magic",
    "interested-magic",
    "ancient",
    "urgent",
    "mysterious",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 122, grade: "EX" },
  },

  profile: {
    age: "Unknown",
    race: "Arcane Elemental",
    homeland: "Unknown",
    height: "184cm",
    birthday: "Unknown",
    bwh: "111(K)-70-120",
    story: `On some planets, the refined power of the Rift is referred to as "Arcane." And from this arcane power, embodying the wishes of all mortals from worlds destroyed by the Rift, a spiritual being called an "Arcane Elemental" sometimes comes into existence. Among them, Griselda was the first arcane elemental and remains the most exalted of all grand elementals. Nothing is known about where or when Griselda was born on any planet. One moment she was in Noctis Nebula, and the next, she was on Earth.

    Even on Earth, she used her immense mental power to help mortals. Earthlings cheered her on, and she responded to their hopes, diligently tearing Abominations to shreds.

    At some point, however, she began to think. Perhaps it was all the media created by culturally advanced humans that had led her to an epiphany. She wondered what the meaning of her existence was, and if the disappearance of the Rift would strip her of her purpose. She became deeply introspective, contemplating her own existence.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/lrB2Bu1PMGQ",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1867124546001904093",
        title: "X PV",
      },
    ],
  },

  gifts: [
    { gift: "terrarium", value: 50 },
    { gift: "orca-documentary", value: 20 },
  ],
};
