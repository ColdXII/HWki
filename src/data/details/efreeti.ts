import type { CharacterDetails } from "../types";

export const efreeti: CharacterDetails = {
  skins: [
    {
      id: "efreeti-s1",
      name: "Blazing Ember",
      portrait: "/characters/efreeti/efreeti-s1p.webp",
      fullBody: "/characters/efreeti/efreeti-s1.webp",
      fullBodyCensored: "/characters/efreeti/efreeti-s1c.webp",
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
          url: "https://youtu.be/0fWQmpay6Z0",
          title: "Official PV",
        },
        {
          source: "youtube",
          url: "https://youtu.be/vPxI9tlx8r8",
          title: "Slider Preview 1",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1963121850109891006",
          title: "Slider Preview 2",
        },
      ],
    },
    {
      id: "efreeti-s2",
      name: "Love Precautions",
      portrait: "/characters/efreeti/efreeti-s2p.webp",
      fullBody: "/characters/efreeti/efreeti-s2.webp",
      fullBodyCensored: "/characters/efreeti/efreeti-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2071494210881274197",
          title: "Official PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority: \n1. Crit Damage (Min 163%)\n2. AP Recovery\n3. Max HP",
      weapon: { id: "vulkanus", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Crit Damage (Min 163%)\n2. AP Recovery\n3. Max HP",
      weapon: { id: "vulkanus", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
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
      id: "arcane-explosion",
      name: "Arcane Explosion",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/efreeti/ba.webp",
      description: `Releases arcane energy, causing a massive explosion.
      Deals Immaterial DMG equal to {damage}% of Magic ATK to enemies within a 3m Circular Range at the designated location, and Additional Crush DMG equal to {additionalDmg}% of Magic ATK.
      When attacking with this skill, temporarily increases ACC by 100%.

      [SIGNATURE WEAPON EFFECT]:
      Basic ATK grants allies with [Emberbound] a 8% increase in Crit Rate and Additional DMG Boost for 1R.`,
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
      icon: "/skills/efreeti/p1.webp",
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
      id: "ember-vortex",
      name: "Ember Vortex",
      type: "Active",
      ap: 75,
      cooldown: 3,
      icon: "/skills/efreeti/s1.webp",
      description: `Unleashes surging flames that scorch and scatter nearby foes.
      Deals {damage}% of Magic ATK as unblockable Heat DMG to the target and {damage2}% of Magic ATK as Splash Heat DMG to enemies within a 3m radius, pulling them slightly toward the center.
      This skill cannot trigger Weak Point effects.`,
      damage: [
        {
          stat: "magicAtk",
          percent: [75, 83, 90, 98, 105, 113, 120, 128, 135, 143],
          damageType: "Heat",
          label: "Damage",
        },
        {
          stat: "magicAtk",
          percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
          damageType: "Heat",
          label: "Damage Splash",
        },
      ],
    },
    {
      id: "blazing-mandate",
      name: "Blazing Mandate",
      type: "Passive",
      icon: "/skills/efreeti/p2.webp",
      description: `Inflicts [Cinderflame] on enemies hit by a combat skill for 2 rounds.

      When an ally with [Arcane Purge] attacks on their turn, the caster may trigger a support attack with Ember Vortex, with a separate chance per enemy struck:

      * Physical ATK: 30% + 10% per INT above 16
      * Elemental ATK: 75% + 5% per INT above 16

      When a support attack is triggered this way, the acting ally's [Arcane Purge] effect expires at the end of their turn.

      - [Cinderflame]: Reduces the target's Heat DEF by {heatDef} for every point of the caster's INT.
      If the caster's Base Crit DMG is 163% or higher reduces All DEF by an additional {allDef}.`,
      values: {
        heatDef: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
        allDef: [44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
      },
    },
    {
      id: "eternal-flamestorm",
      name: "Eternal Flamestorm",
      type: "Active",
      ap: 80,
      cooldown: 1,
      icon: "/skills/efreeti/s2.webp",
      description: `Consumes 2 stacks of the [Pure Energy] effect to activate this skill.

      Deals {damage}% of Magic ATK as Heat DMG to enemies in a 5m radius around the targeted location and pulls them toward the center.
      Grants AP equal to 45% of base AP Recovery to allies affected by [Emberbound].`,
      damage: {
        stat: "magicAtk",
        percent: [140, 154, 168, 182, 196, 210, 224, 238, 252, 266],
        damageType: "Heat",
      },
    },
    {
      id: "pact-of-flame",
      name: "Pact of Flame",
      type: "Active",
      ap: 15,
      cooldown: 0,
      icon: "/skills/efreeti/s3.webp",
      description: `Forge a pact to share the power of the Eternal Flame.
      This skill can only be used when HP is 80% or higher.
      Consumes 30% of base Max HP and 50% of current HP to activate.

      Generates a 5m radius [Ember Garden] zone that moves with the caster and restores 15 AP.
      Grants the [Emberbound] effect to a targeted ally.

      When a [Emberbound] ally successfully lands an attack, the caster restores {healing1}% of Max HP as healing.
      If the ally is hit, the caster suffers 15% of their current HP as Fixed DMG.

      - [ConjureL Ember Garden]: If an ally with [Emberbound] effect ends their turn within the zone after taking their action, they recover {healing2}% of the AP spent on movement during that turn.
      - [Emberbound]: Increases the target's Max HP and Current HP by the same ammount of Max HP the caster sacrificed.
      Also increases Additional DMG Boost by {additionalDmgBoost}%.

      [SIGNATURE WEAPON EFFECT]:
      When an ally with [Emberbound] attacks, the caster also performs a support attack with [Ember Vortex], even if the ally doesn't have the [Arcane Purge] effect.`,
      values: {
        healing1: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
        healing2: [44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
        additionalDmgBoost: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      },
    },
  ],

  weaponType: "Arcane Orb",

  basic: { str: 6, tec: 7, int: 20, vit: 9, agi: 19 },

  gradeGains: {
    B: { int: -1 },
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
    "flame-of-life",
    "young-flame-elemental",
    "elemental-of-magic",
    "interested-magic",
    "mysterious",
    "blazing",
    "heat-resistant",
  ],

  manual: {
    spd: 131,
    startApSeen: { value: 106, grade: "EX" },
  },

  profile: {
    age: "Unknown",
    race: "Arcane Elemental",
    homeland: "Mt. Hardum, The Grand Furnace",
    height: "162cm",
    birthday: "Unknown",
    bwh: "72(C)-46-87",
    story: `Efreeti is a young elemental, barely born and already blazing with potential. Even among her kind, arcane spirits forged from raw magic, she's considered an oddity.

    Brought into existence in the legendary forges of the Hardum Dwarves deep within the Norn Mountains, she was infused from the start with both the fiery essence of the Eternal Flame and an astonishing grasp of Dwarven technology. She served as a guardian spirit for the Dwarves, guiding their forges and defending their halls.

    But when the Rift Crisis erupted, Efreeti didn't retreat, she led the charge, helping to carve safe paths through the chaos. After arriving on Earth, she found herself drawn to humanity's resolve.

    Eager to continue the fight, she volunteered to become a Vanguard. Her reason was simple: to stand beside a worthy Human God and offer everything she had, her flames, her inventions, and her unwavering spirit. Though young and still learning, Efreeti burns with passion, a spark of hope born from the fire itself.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/7lLr2rtfU4g",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/92hTeOW4CGw",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "charcoal", value: 30 },
    { gift: "fire-octopus-noodles", value: 20 },
    { gift: "training-equipment-set", value: 20 },
  ],
};
