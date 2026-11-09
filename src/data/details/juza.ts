import type { CharacterDetails } from "../types";

export const juza: CharacterDetails = {
  skins: [
    {
      id: "juza-s1",
      name: "???",
      portrait: "/characters/juza/juza-s1p.webp",
      fullBody: "/characters/juza/juza-s1.webp",
      fullBodyCensored: "/characters/juza/juza-s1c.webp",
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
      note: "Substats Priority:\n1. Crit Damage\n2. Max HP\n\nUse this with Eugenia",
      weapon: { id: "doomstar", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound", slot: "top", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound", slot: "left", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound", slot: "bottom", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "lifebound", slot: "right", level: 25,
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
      note: "Substats Priority:\n1. Crit Damage\n2. Max HP\n\nUse this with Eugenia",
      weapon: { id: "the-anguished-rose", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "harmony-ex", slot: "top", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex", slot: "left", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex", slot: "right", level: 25,
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
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Damage\n2. Max HP\n\nUse this with Eugenia",
      weapon: { id: "the-anguished-rose", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "harmony-ss", slot: "top", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss", slot: "left", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss", slot: "right", level: 25,
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
      id: "iron-club-punishment",
      name: "Iron Club Punishment",
      type: "Active",
      ap: 35,
      cooldown: 0,
      icon: "/skills/juza/ba.webp",
      description: `Slams the enemy to unleash a shockwave.

      Deals Crush DMG equal to {damage}% of Melee ATK to the target and all enemies within a 1.5m radius, while dealing Fixed DMG equal to 11% of each ally's Max HP to allies within the area and slightly knocking them back.
      also deals Additional Crush DMG equal to {damage2}% per [Fighting Spirit] stack.

      - [Fighting Spirit]: Allows Juza's other skills to take effect on the target. Additional DMG granted by [Fighting Spirit] only applies to enemies.`,
      damage: [
        { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Crush", label: "AoE Damage" },
        { stat: "meleeAtk", percent: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200], damageType: "Crush", label: "AoE Damage" },
      ],
    },
    {
      id: "burning-determination",
      name: "Burning Determination",
      type: "Passive",
      maxLevel: 1,
      icon: "/skills/juza/p1.webp",
      description: `Gain [Fighting Spirit] stacks equal to the amount of DMG received.
      At the start of battle, Juza gains 10 stacks of [Fighting Spirit].
      When Juza attacks allies, Evading, Blocking, Critical Hits, Weakness Attacks, and Support Attacks cannot occur. In addition, allies do not Counterattack Juza.

      - [Fighting Spirit]: Allows Juza's other skills to take effect on the target. Additional DMG granted by [Fighting Spirit] only applies to enemies.`,
      values: {
        spd: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
      },
    },
    {
      id: "forced-execution",
      name: "Forced Execution",
      type: "Active",
      ap: 10,
      cooldown: 0,
      maxLevel: 1,
      icon: "/skills/juza/s1.webp",
      description: `Smashes the target and sends them flying.
      Deals Crush DMG equal to {damage}% of Melee ATK to an enemy and knocks them back 20m.
      Deals Fixed DMG equal to 11% of Max HP to an ally and knocks them back 20m.`,
      damage: {
        stat: "meleeAtk",
        percent: [1],
        damageType: "Crush",
      },
    },
    {
      id: "engine-overheat",
      name: "Engine Overheat",
      type: "Passive",
      icon: "/skills/juza/p2.webp",
      description: `At the start of battle, loses all Evade Chance and reduces all DEF by 1000.
      Additionally, increases Melee ATK and Max HP by {buff}%.`,
      values: {
        buff: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
      },
    },
    {
      id: "rampaging-comet",
      name: "Rampaging Comet",
      type: "Active",
      ap: 120,
      cooldown: 1,
      icon: "/skills/juza/s2.webp",
      description: `Gathers nearby objects into a massive sphere and slams it into the target.
      Deals Crush DMG equal to {damage}% of Melee ATK to enemies within a 5m radius, and Fixed DMG equal to 11% of each ally's Max HP to allies within the area.
      Deals additional Crush DMG equal to {damage2}% per [Fighting Spirit] stack.
      At the end of the turn in which this skill is used, [Crazy Stance] is removed and Juza recovers HP equal to 100% of Max HP.

      - [Fighting Spirit]: Allows Juza's other skills to take effect on the target. Additional DMG granted by [Fighting Spirit] only applies to enemies.`,
      damage: [
        { stat: "meleeAtk", percent: [300, 330, 360, 390, 420, 450, 480, 510, 540, 570], damageType: "Crush", label: "AoE Damage" },
        { stat: "meleeAtk", percent: [500, 550, 600, 650, 700, 750, 800, 850, 900, 950], damageType: "Crush", label: "AoE Damage" },
      ],
    },
    {
      id: "chaotic-beatdown",
      name: "Chaotic Beatdown",
      type: "Passive",
      icon: "/skills/juza/p3.webp",
      description: `When Juza's HP falls to 30% or lower, performs an additional Response with 'Crazy Stance' and gains [Crazy Stance].
      [Crazy Stance]: Loses all Speed, but gains {crushBoost}% Crush Boost, {dmgIncrease}% DMG Taken Down, and 2m increased Range.

      [Crazy Stance] can only activate after Juza's first turn.
      - While [Crazy Stance] is active, [Iron Club Punishment] is replaced by [Swift Punishment · Meteor Shower].
      - While [Crazy Stance] is active, performs an additional Response against a random nearby enemy with [Swift Punishment · Meteor Shower].
      - While [Crazy Stance] is active, the Invincibility granted by [Head-On Clash] is extended to 2 turns.

      [Swift Punishment · Meteor Shower]
      This skill is considered a Basic Skill.
      Deals Crush DMG equal to {damage}% of Melee ATK to the target and enemies within a 3.5m-radius circular area around the target, and Fixed DMG equal to 11% of each ally's Max HP to allies within the area, slightly knocking them back.
      Deals additional Crush DMG equal to {damage2}% per [Fighting Spirit] stack.`,
    damage: [
      { stat: "meleeAtk", percent: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285], damageType: "Crush", label: "AoE Damage" },
      { stat: "meleeAtk", percent: [220, 240, 260, 280, 300, 320, 340, 360, 380, 400], damageType: "Crush", label: "AoE Damage" },
    ],
      values: {
        crushBoost: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
        dmgIncrease: [38, 41, 44, 47, 50, 53, 56, 59, 62, 65],
      },
    },
  ],

  weaponType: "Two-handed Blunt",

  basic: { str: 12, tec: 6, int: 6, vit: 17, agi: 7 },

  gradeGains: {
    B: { vit: -1 },
    A: { vit: -1 },
    S: { str: -1 },
    SS: { agi: -1 },
    EX1: { vit: 1 },
    EX2: { vit: 1 },
    EX3: { vit: 1 },
    EX4: { str: 2 },
    EX5: { agi: 1 },
    EX6: { vit: 2 },
  },

  traits: [
    "head-on-clash",
    "intimidation",
    "human",
    "interested-hp",
    "muscular",
    "radical",
    "berserking",
  ],

  manual: {
    spd: 110,
    startApSeen: { value: 116, grade: "EX" },
  },

  profile: {
    age: "21",
    race: "Human",
    homeland: "East Asia Federation, Tokyo",
    height: "202cm",
    birthday: "October 30th",
    bwh: "129(R)-76-126",
    story: `Juza hails from Tokyo in the East Asia Federation. From an early age, she exhibited extraordinary physical growth and superhuman strength. She was already pushing six feet tall in elementary school, and after realizing early on just how different she was from everyone else, she began keeping her distance from others and spent much of her time watching television.

    What ultimately inspired Juza to start calling herself a villain was a biker film. Its protagonist was an outlaw on the run, yet still used his strength to help those who had been abandoned by the law. Even when society turned against him, he refused to compromise his principles. Deeply inspired by him, Juza resolved to become what she called a "villain with class": someone who would wield her strength according to a code of her own.

    Donning a tokko-fuku, Juza began operating on the outskirts of Tokyo, beating down thugs and criminals who preyed on the locals while lending a hand to anyone in need. Some condemned her actions as illegal vigilantism, but Juza saw things differently. If protecting people the law had abandoned meant stepping outside the law herself, then that was simply her way of being a villain. As word of her exploits spread, the people of the outskirts began calling her Socho, and the streets under her watch gradually became safer. That all changed when the Rift Crisis struck.

    Juza fought the Abominations while her crew and the local residents evacuated, only to be exposed to Oblivia Madness in the process. She came dangerously close to losing control, but refused to let herself become an Abomination that destroyed without conviction or purpose. She managed to suppress the madness through sheer force of will.

    But while she fought to retain control of herself, the home she and her crew had protected was devastated. Juza was left carrying the guilt of having failed to save it. Later, she heard rumors of a Human God in the western Federation who could cure Oblivia. Hoping both to rid herself of the madness and learn to control her tremendous strength, Juza left Tokyo behind and headed west.`,
    pv: [
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2091805214915616932",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2091821804818256210",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2092188733013684560",
        title: "X PV 2",
      },
    ],
  },

  gifts: [
    { gift: "gloomy-chromi-keyring", value: 30 },
    { gift: "300kg-dumbbell", value: 30 },
  ],
};
