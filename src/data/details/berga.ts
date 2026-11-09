import type { CharacterDetails } from "../types";

export const berga: CharacterDetails = {
  skins: [
    {
      id: "berga-s2",
      name: "Timid MooMoo",
      portrait: "/characters/berga/berga-s2p.webp",
      fullBody: "/characters/berga/berga-s2.webp",
      fullBodyCensored: "/characters/berga/berga-s2c.webp",
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
          url: "https://youtu.be/eqgDayrGNFc",
          title: "Official PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      note: "Substats Priority:\n1. Crit Damage\n2. Max HP",
      weapon: { id: "crimson-veil-torturas", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "harmony-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Damage\n2. Crit Rate (55%)\n3. Max HP",
      weapon: { id: "crimson-veil-torturas", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked", "persistent"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Damage\n2. Max HP",
      weapon: { id: "crimson-veil-torturas", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "harmony-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "hide-splitter",
      name: "Hide Splitter",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/berga/ba.webp",
      description: `Swings a deadly Torturas to deal Slash DMG equal to {damage}% of Melee ATK to the enemy.`,
      damage: {
        stat: "meleeAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Slash",
      },
    },
    {
      id: "giants-leap",
      name: "Giant's Leap",
      type: "Active",
      ap: 25,
      icon: "/skills/berga/s1.webp",
      description: `Can only be used when the user's HP is above 15%. Consumes 12% of each ally's AP (excluding self) to activate. After use, the caster loses 12% of their current HP.
      Leaps toward the enemy and strikes down with force.
      Deals Crush DMG equal to {damage}% of Melee ATK to the target on hit.
      Can only be used once per round on the same target.`,
      damage: {
        stat: "meleeAtk",
        percent: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
        damageType: "Crush",
      },
    },
    {
      id: "adaptive-muscle",
      name: "Adaptive Muscle",
      type: "Passive",
      icon: "/skills/berga/p1.webp",
      description: `If HP is 50% or higher when attacking, CRIT DMG increases by {critDmg}%.
      If HP is 20% or lower when hit, all DEF increases by the same amount as your CRIT DMG.
      This DEF increase scales with missing HP, up to a maximum of 1.3×.`,
      values: {
        critDmg: [44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
      },
    },
    {
      id: "blade-storm",
      name: "Blade Storm",
      type: "Active",
      ap: 65,
      cooldown: 3,
      icon: "/skills/berga/s2.webp",
      description: `After using this skill, AP recovery is reduced by 20 for 1 round.

      Rushes forward while swinging a Torturas.
      Charges 8m forward, dealing Slash DMG equal to {damage}% of Melee ATK to all enemies within a 2m radius along the path.
      This skill cannot trigger Weak Point Attacks, but temporarily increases ACC by 100%`,
      damage: {
        stat: "meleeAtk",
        percent: [90, 99, 108, 117, 126, 135, 144, 153, 162, 171],
        damageType: "Slash",
      },
    },
    {
      id: "oath-of-punishment-and-crushing",
      name: "Oath of Punishment and Crushing",
      type: "Passive",
      icon: "/skills/berga/p2.webp",
      description: `Gain 1 stack of [The Fire Within] whenever an ally is hit.
      When [The Fire Within] reaches max stacks, automatically respond with the skill 'Pent-Up Wrath.'
      While under the effect of [Bloodrush], gain 12 AP whenever an ally is hit.

      - [The Fire Within]: Increases Magic ATK by 3% per stack, up to 4 stacks.

      [Pent-Up Wrath]: Unleashes your fury to strengthen yourself. Grants [Purification] upon activation.
      If AP is 200 or less, restore it to 200 and reset the cooldown of [Blade Storm].
      Gain the [Bloodrush] effect for 2 rounds.

      - [Bloodrush]: Decreases ACC by 10% and Physical DEF by 150, and increases Melee ATK by {meleeAtk}%.
      Reduces Blade Storm's AP cost by {ap}%, and resets its cooldown on use.
      When [Bloodrush] ends, all stacks of [The Fire Within] are removed

      [SIGNATURE WEAPON EFFECT]:
      When gaining the [Bloodrush] effect, Crit Rate increases by an additional 33% for 2 rounds and grants immunity to [Taunt], [Fear], [Sleep], [Madness], [Stun], and [Focus Disruption].`,
      values: {
        meleeAtk: [71.5, 78, 84.5, 91, 97.5, 104, 110.5, 117, 123.5, 130],
        ap: [33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
      },
    },
  ],

  basic: { str: 14, tec: 8, int: 6, vit: 12, agi: 9 },

  gradeGains: {
    B: { str: -1 },
    A: { vit: -1 },
    S: { str: -1 },
    SS: { vit: -1 },
    EX1: { str: 2 },
    EX2: { str: 1 },
    EX3: { vit: 1 },
    EX4: { str: 1 },
    EX5: { vit: 1 },
    EX6: { str: 2 },
  },

  traits: [
    "shut-in-affinity",
    "hikikomoris-resilience",
    "torta",
    "interested-melee",
    "strong",
    "muscular",
    "hidden",
  ],

  weaponType: "Torturas",

  manual: {
    spd: 85,
    startApSeen: { value: 101, grade: "EX" },
  },

  profile: {
    age: "26",
    race: "Torta",
    homeland: "Tortaria, Fjord of Blades",
    height: "182cm",
    birthday: "Winter",
    bwh: "111(K)-61-124",
    story: `Berga, daughter of Bergo, was once a quiet but outstanding warrior of the Osla Vanguard Unit. Gifted with extraordinary physical strength, she earned commendations in countless battles.

    Unlike many of her Torta kin, she never boasted about her accomplishments, earning recognition as a humble and honorable warrior. But in truth, her restraint didn't come from modesty—it stemmed from a deeply introverted nature.

    That side of her became painfully clear during the journey to Earth, when she suffered the devastating loss of her family and people. Unable to carry the weight of that grief, she shut herself away, retreating into her room and turning her back on the world outside.

    To outsiders, she might just seem overly absorbed in Earth's culture and technology. But beneath that surface lies a quiet, lingering pain—a grief she's never truly let go of. What she needs isn't space, but sincere care… and someone who truly understands.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/GG0I9J242WY",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/xT1SP8cGKWw",
        title: "Affection PV",
      },
    ],  
  },

  gifts: [
    { gift: "frog-plush", value: 30 },
    { gift: "strategy-simulation-board-game", value: 40 },
    { gift: "setflix-membership-voucher", value: 20 },
  ],
};
