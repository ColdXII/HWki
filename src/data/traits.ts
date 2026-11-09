
import type { Trait } from "./types";

export const traits: Trait[] = [
  // ===== Unique Trait =====

  // ==== Race ====
    {
      id: "catsidhe",
      name: "Catsidhe",
      kind: "unique",
      icon: "/icons/stats/catsidhe.webp",
      description: "Agility 2",
      effects: [{ stat: "agi", type: "flat", value: 2 }],
    },
    {
      id: "demon",
      name: "Demon",
      kind: "unique",
      icon: "/icons/stats/demon.webp",
      description: "Crit DMG 20%",
      effects: [{ stat: "critDmg", type: "percent", value: 20 }],
    },
    {
      id: "elemental-of-magic",
      name: "Elemental of Magic",
      kind: "unique",
      description: "Magic ATK 20% \n Max HP -10%",
      effects: [
        { stat: "magicAtk", type: "percent", value: 20 },
        { stat: "maxHp", type: "percent", value: -10 },
      ],
    },
    {
      id: "half-elf",
      name: "Half Elf",
      kind: "unique",
      icon: "/icons/stats/halfelf.webp",
      description: "Starting AP 8 \n AP Recovery 6%",
      effects: [
        { stat: "startAp", type: "flat", value: 8 },
        { stat: "apRecovery", type: "percent", value: 6 },
      ],
    },
    {
      id: "highland-elf",
      name: "Highland Elf",
      kind: "unique",
      description:
        "Intelligence 1 \n Heat DEF 50 \n Cold DEF 50 \n Electric DEF 50 \n Immaterial DEF 50",
      effects: [
        { stat: "int", type: "flat", value: 1 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "swamp-elf",
      name: "Swamp Elf",
      kind: "unique",
      icon: "/icons/stats/swamp-elf.webp",
      description: "Starting AP 10 \n SPD 10%",
      effects: [
        { stat: "startAp", type: "flat", value: 10 },
        { stat: "spd", type: "percent", value: 10 },
      ],
    },
    {
      id: "wood-elf",
      name: "Wood Elf",
      kind: "unique",
      description: "Agility 1 \n AP Recovery 4%",
      effects: [
        { stat: "agi", type: "flat", value: 1 },
        { stat: "apRecovery", type: "percent", value: 4 },
      ],
    },
    {
      id: "fairy",
      name: "Fairy",
      kind: "unique",
      icon: "/icons/stats/fairy.webp",
      description: "Strength -1 \n Vitality -1 \n Evade 15%",
      effects: [
        { stat: "str", type: "flat", value: -1 },
        { stat: "vit", type: "flat", value: -1 },
        { stat: "evade", type: "percent", value: 15 },
      ],
    },
    {
      id: "grrik",
      name: "Grrik",
      kind: "unique",
      icon: "/icons/stats/grrik.webp",
      description: "Slash Boost 15% \n Pierce Boost 15% \n Crush Boost 15% \n Slash DEF 50 \n Pierce DEF 50 \n Crush DEF 50",
      effects: [
        { stat: "slashBoost", type: "percent", value: 15 },
        { stat: "pierceBoost", type: "percent", value: 15 },
        { stat: "crushBoost", type: "percent", value: 15 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "human",
      name: "Human",
      kind: "unique",
      icon: "/icons/stats/human.webp",
      description: "Technic 1 \n AP Recovery 4%",
      effects: [
        { stat: "tec", type: "flat", value: 1 },
        { stat: "apRecovery", type: "percent", value: 4 },
      ],
    },
    {
      id: "kesak",
      name: "Kesak",
      kind: "unique",
      icon: "/icons/stats/kesak.webp",
      description: "Intelligence -4 \n Vitality 7",
      effects: [
        { stat: "int", type: "flat", value: -4 },
        { stat: "vit", type: "flat", value: 7 },
      ],
    },
    {
      id: "kobold",
      name: "Kobold",
      kind: "unique",
      icon: "/icons/stats/kobold.webp",
      description: "Evade 10% \n Max HP 10%",
      effects: [
        { stat: "evade", type: "percent", value: 10 },
        { stat: "maxHp", type: "percent", value: 10 },
      ],
    },
    {
      id: "lamora",
      name: "Lamora",
      kind: "unique",
      icon: "/icons/stats/lamora.webp",
      description: "AP Recovery 12%",
      effects: [{ stat: "apRecovery", type: "percent", value: 12 }],
    },
    {
      id: "lamora-kesak-hybrid",
      name: "Lamora-Kesak Hybrid",
      kind: "unique",
      icon: "/icons/stats/lamora-kesak.webp",
      description: "AP Recovery 12% \n Vitality 7",
      effects: [
        { stat: "apRecovery", type: "percent", value: 12 },
        { stat: "vit", type: "flat", value: 7 },
      ],
    },
    {
      id: "machine",
      name: "Machine",
      kind: "unique",
      icon: "/icons/stats/gear.webp",
      description: "Slash DEF 150 \n Pierce DEF 150 \n Crush DEF 150",
      effects: [
        { stat: "slashDef", type: "flat", value: 150 },
        { stat: "pierceDef", type: "flat", value: 150 },
        { stat: "crushDef", type: "flat", value: 150 },
      ],
    },
    {
      id: "marlon",
      name: "Marlon",
      kind: "unique",
      icon: "/icons/stats/marlon.webp",
      description: "Strength 1 \n Technic 1 \n Intelligence 1",
      effects: [
        { stat: "str", type: "flat", value: 1 },
        { stat: "tec", type: "flat", value: 1 },
        { stat: "int", type: "flat", value: 1 },
      ],
    },
    {
      id: "orke",
      name: "Orke",
      kind: "unique",
      icon: "/icons/stats/orke.webp",
      description: "Technic 1 \n Ranged ATK 5% \n Accuracy 5%",
      effects: [
        { stat: "tec", type: "flat", value: 1 },
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
      flavor: "A humanoid race that wanders the universe, with a totalitarian culture that reveres firearms as sacred.",
    },
    {
      id: "phoenix",
      name: "Phoenix",
      kind: "unique",
      description: "Heat Boost 10% \n Max HP 5%",
      effects: [
        { stat: "heatBoost", type: "percent", value: 10 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "rakhtan",
      name: "Rakhtan",
      kind: "unique",
      icon: "/icons/stats/rakhtan.webp",
      description: "Strength 1 \n Technic 1 \n Intelligence 1 \n Vitality 1",
      effects: [
        { stat: "str", type: "flat", value: 1 },
        { stat: "tec", type: "flat", value: 1 },
        { stat: "int", type: "flat", value: 1 },
        { stat: "vit", type: "flat", value: 1 },
      ],
    },
    {
      id: "torta",
      name: "Torta",
      kind: "unique",
      icon: "/icons/stats/torta.webp",
      description: "Vitality 1 \n Evade -2%",
      effects: [
        { stat: "vit", type: "flat", value: 1 },
        { stat: "evade", type: "percent", value: -2 },
      ],
    },

  // ==== Personality ====
  // == Affection ==
    {
      id: "interested-melee",
      name: "Interested",
      kind: "unique",
      icon: "/icons/stats/interested.webp",
      effects: [
        {
          stat: "meleeAtk",
          type: "percent",
          value: 10,
          condition: "maxAffection",
        },
      ],
    },
    {
      id: "interested-ranged",
      name: "Interested",
      kind: "unique",
      icon: "/icons/stats/interested.webp",
      effects: [
        {
          stat: "rangedAtk",
          type: "percent",
          value: 10,
          condition: "maxAffection",
        },
      ],
    },
    {
      id: "interested-magic",
      name: "Interested",
      kind: "unique",
      icon: "/icons/stats/interested.webp",
      effects: [
        {
          stat: "magicAtk",
          type: "percent",
          value: 10,
          condition: "maxAffection",
        },
      ],
    },
    {
      id: "interested-hp",
      name: "Interested",
      kind: "unique",
      icon: "/icons/stats/interested.webp",
      effects: [
        {
          stat: "maxHp",
          type: "percent",
          value: 10,
          condition: "maxAffection",
        },
      ],
    },
    {
      id: "interested-evade",
      name: "Interested",
      kind: "unique",
      icon: "/icons/stats/interested.webp",
      effects: [
        {
          stat: "evade",
          type: "percent",
          value: 10,
          condition: "maxAffection",
        },
      ],
    },
    {
      id: "interested-cdmg",
      name: "Interested",
      kind: "unique",
      icon: "/icons/stats/interested.webp",
      effects: [
        {
          stat: "critDmg",
          type: "percent",
          value: 16,
          condition: "maxAffection",
        },
      ],
    },
    {
      id: "interested-eletric",
      name: "Interested",
      kind: "unique",
      icon: "/icons/stats/interested.webp",
      effects: [
        {
          stat: "electricBoost",
          type: "percent",
          value: 10,
          condition: "maxAffection",
        },
      ],
    },
  // == EX ==
    // == Ahram ==
      {
        id: "orkean-combat-support",
        name: "Orkean Combat Support",
        kind: "unique",
        description:
        `Activates the level 1 Passive Skill [Orkean Combat Support].

        When [Issue Orders] is triggered, Orkean allies activate special effects.

        Nari: Performs a Support Attack with [Piercing Aether Shot]
        Juha: Performs a Support Attack with [Military Shooting], then follows up with an additional reaction using [Military Shooting].`,
        effects: [],
        flavor: "United as one, the might of Orke drives its enemies into a panicked retreat.",
      },
      {
        id: "combat-readiness",
        name: "Combat Readiness",
        kind: "unique",
        description: 
        `Ranged ATK 20%
        Max HP -10%`,
        effects: [
          { stat: "rangedAtk", type: "percent", value: 20 },
          { stat: "maxHp", type: "percent", value: -10 },
        ],
        flavor: "To prepare for battle with the patience to grind steel into a needle is to trade vitality for unrivaled focus.",
      },
    // == Berga ==
      {
        id: "shut-in-affinity",
        name: "Shut-In Affinity",
        kind: "unique",
        description: `Activates the Level 1 Passive Skill [Healthy Adjustment]. \n
        [Healthy Adjustment]: Recover HP equal to 180% of Magic ATK when using Basic Attack,
        If the attack hits a Weak Point, recovers an additional 240% of Magic ATK as HP. \n
        Aggro Adjustment -40
        Max HP -20%`,
        effects: [
          { stat: "aggroAdj", type: "flat", value: -40 },
          { stat: "maxHp", type: "percent", value: -20},
        ],
      },
      {
        id: "hikikomoris-resilience",
        name: "Hikikomori's Resilience",
        kind: "unique",
        description: `Gain 1 stack of [Kinetic Momentum] for 2 rounds when using a Combat Skill. \n
        [Conservation of Momentum]: At the start of your turn, if you have the [Kinetic Momentum] effect, the SPD increases by 80% and Basic Attack AP cost is reduced by 65% for that turn.
        At the start of your turn, if another Vanguard (excluding the Human God) is within 3m, gain the [Comfort Zone Breach] effect. \n
        - [Kinetic Momentum]: Can stack up to 3 times. 1 stack is consumed with each Basic Attack.
        - [Comfort Zone Breach]: SPD decreases by 3% (Personal space is a thing, you know...)`,
        effects: [],
      },
    // == Echidna ==
      {
        id: "distroted-wish",
        name: "A Distorted Wish",
        kind: "unique",
        description: `Formation Cost +1
        Intelligence -7
        Vitality 2
        Agility 3
        Aggro Adjustment -30`,
        effects: [
          { stat: "formationCost", type: "flat", value: 1 },
          { stat: "int", type: "flat", value: -7 },
          { stat: "vit", type: "flat", value: 2 },
          { stat: "agi", type: "flat", value: 3 },
          { stat: "aggroAdj", type: "flat", value: -30 },
        ],
      },
      {
        id: "do-not-touch",
        name: "Do Not Touch",
        kind: "unique",
        description: `Activates the Level 1 Passive Skill [Do Not Touch].

        [Do Not Touch]: When attacked, at the end of the turn, inflicts Poison DMG equal to 100% of the attacker's accumulated [Acid Venom].`,
        effects: [],
      },
    // == Efreeti ==
      {
        id: "flame-of-life",
        name: "Flame of Life",
        kind: "unique",
        description: `Activates the Level 1 passive skill [Flame of Life].
          
        [Flame of Life]: During combat, increases Magic ATK by 21% of Efreeti's base Max HP.
        If Efreeti's INT exceeds 16, the DEF reduction effect caused by the [Blazing Mandate] skill increases by 6% for every point above 16.`,
        effects: [
        ],
      },
      {
        id: "young-flame-elemental",
        name: "Young Flame Elemental",
        kind: "unique",
        description: `Activates Level 1 passive skill [Warmth Within the Hearth].
          
        [Warmth Within the Hearth]: Converts the Additional Crush DMG of the [Arcane Explosion] skill into Additional Heat DMG.
        Intelligence -4
        Heat DEF 1000
        Cold DEF -40`,
        effects: [
          { stat: "int", type: "flat", value: -4 },
          { stat: "heatDef", type: "flat", value: 1000 },
          { stat: "coldDef", type: "flat", value: -40 },
        ],
      },
    // == Emilia ==
      {
        id: "emilias-diagnosis-method",
        name: "Emilia's Diagnosis Method",
        kind: "unique",
        description: `Formation Cost +1
          
        Activates the Level 1 passive skill [This Might Sting A Little].
        
        [This Might Sting A Little]: Allows Basic ATK to be used on allies during battle.
        When using Basic ATK on an ally, [Stimulus Response Test] is used instead.
        
        - [Stimulus Response Test]: Performs a "medical-grade" "physical contact test" on an ally using a "diagnostic tool."
        Deals a "small amount" of Fixed DMG to the target and grants them 14 AP.
        Strength -8
        Vitality -3
        Intelligence 3`,
        effects: [
          { stat: "formationCost", type: "flat", value: 1 },
          { stat: "str", type: "flat", value: -8 },
          { stat: "vit", type: "flat", value: -6 },
          { stat: "int", type: "flat", value: 3 },
        ],
      },
      {
        id: "case-collection",
        name: "Case Collection",
        kind: "unique",
        description: `When Emilia uses a skill, its effects increase based on her Crit Rate. At 100% Crit Rate, it gains up to 100% additional effect.`,
        effects: [
        ],
      },
    // == Eugenia ==
      {
        id: "inner-desire",
        name: "Inner Desire",
        kind: "unique",
        description: `Vitality 2`,
        effects: [
          { stat: "vit", type: "flat", value: 2 },
        ],
      },
      {
        id: "energy-alignment",
        name: "Energy Alignment",
        kind: "unique",
        description: `Activates the Level 1 passive skill [Energy Alignment].
          
        [Energy Alignment]: During battle, increases all allies' Max HP by 10% of your Max HP and increases Healing Done by 15%.`,
        effects: [
        ],
      },
    // == Everette ==
      {
        id: "ancient-archmage",
        name: "Ancient Archmage",
        kind: "unique",
        description: `Activates the Level 1 Passive Skill [Ancient Archmage]. \n
        [Ancient Archmage]: Whenever Everette uses a skill other than Standby or a Combat Skill, her Magic ATK increases by 100%.
        This effect is removed at the end of the turn in which she uses a Standby or Attack Skill. Can stack up to 5 times. \n
        Magic ATK 20%`,
        effects: [{ stat: "magicAtk", type: "percent", value: 20 }],
      },
      {
        id: "the-world-contract",
        name: "The World Contract",
        kind: "unique",
        description: `Activates Level 3 Passive Skill [Temporal Manipulation].

        [Temporal Manipulation]: During battle, grants all allies the [Time Acceleration] effect and all enemies the [Time Deceleration] effect.

        - [Time Acceleration]: Increases SPD by 12, AP Recovery by (8, 10, 12) and Immaterial DEF by 120.
        - [Time Deceleration]: Reduces ACC by 12, Evasion by (8, 10, 12)% and Immaterial DEF by 120.`,
        effects: [
        ],
      },
    // == Fammene ==
      {
        id: "the-talk-of-the-town",
        name: "The Talk of the Town",
        kind: "unique",
        description: `Activates the Level 1 passive skill [The Talk of the Town].
          
        [The Talk of the Town]: All female Vanguards take an interest in Fammene and try to stand out more.
        Once per round, at the end of own turn, Crit Rate of all female Vanguards in the party increases by 15%, but ACC decreases by 10%.
        This effect only applies for the turn immediately following Fammene's turn`,
        effects: [
          { stat: "critRate", type: "percent", value: 15, battleOnly: true },
          { stat: "accuracy", type: "percent", value: -10, battleOnly: true },
        ],
      },
      {
        id: "lady-of-the-breeze",
        name: "Lady of the Breeze",
        kind: "unique",
        description: `Formation Cost +1
          
        Activates the Level 1 passive skill [Rushing Breeze].
        
        [Rushing Breeze]: At the start of battle, grants the [Rushing Breeze] effect to all allies. Reapplies this effect each time the [Monsoon] skill is used.
        
        - [Rushing Breeze]: Increases SPD by 200% until the end of own turn.
        Intelligence 3`,
        effects: [
          { stat: "formationCost", type: "flat", value: 1 },
          { stat: "int", type: "flat", value: 3 },
          { stat: "spd", type: "percent", value: 200, battleOnly: true },
        ],
      },
    // == Garud ==
      {
        id: "transcendent",
        name: "Transcendent",
        kind: "unique",
        description: `Cannot perform Weak Point Attacks, but gains Magic ATK, Max HP, Elemental Boost, and AP in return.
        Magic ATK 50%
        Max HP 25%
        Elemental Boost 10%
        Starting Ap 30`,
        effects: [
          { stat: "magicAtk", type: "percent", value: 50 },
          { stat: "maxHp", type: "percent", value: 25 },
          { stat: "elementalBoost", type: "percent", value: 10 },
          { stat: "startAp", type: "flat", value: 30 },
        ],
      },
      {
        id: "eternity",
        name: "Eternity",
        kind: "unique",
        description: `Activates the Level 1 passive skill [Eternity].
          
        Upon taking fatal damage, nullifies that damage once with transcendent power, recovers 50% of Max HP, and gains [Eternity] for 1R.
        
        - [Eternity]: At the start of any turn, recovers HP equal to 15% of Max HP. While this effect is active, increases All DEF by 1000, but cannot act or perform Responses and becomes immune to Crowd Control effects. At the start of the next Round, fully recovers HP, gains 200 AP, and can act again.
        
        This effect can only trigger once per battle.`,
        effects: [
        ],
      },
    // == Griselda ==
      {
        id: "limitless-willpower",
        name: "Limitless Willpower",
        kind: "unique",
        description: `Formation Cost +2
        Intelligence +2
        Agility +1
        Vitality +1`,
        effects: [
          { stat: "formationCost", type: "flat", value: 2 },
          { stat: "int", type: "flat", value: 2 },
          { stat: "agi", type: "flat", value: 1 },
          { stat: "vit", type: "flat", value: 1 },
        ],
      },
      {
        id: "entangled-threads",
        name: "Entangled Threads",
        kind: "unique",
        description: `Activates the Level 1 Passive Skill [Dual Entanglement].

        [Dual Entanglement]: The Combat Skill DMG of allies excluding yourself, increases by 24% and the Basic Attack DMG increases by 4%.
        When allies excluding yourself use a Combat Skill,  they will gain 5 AP at the start of the next round.`,
        effects: [
          { stat: "combatSkillDmg", type: "percent", value: 24, battleOnly: true },
          { stat: "basicAttackDmg", type: "percent", value: 4, battleOnly: true },
          { stat: "startAp", type: "flat", value: 5, battleOnly: true },
        ],
      },
    // == Headless Knight ==
      {
        id: "rake",
        name: "Rake",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Activates the level 1 active skill [Rake].
          
        [Rake]: Consumes 15 AP. If possesses the [Reaper] effect, can consume it to activate this skill.
        Extends an auxiliary blade to attack.
        Deals Slash DMG equal to 60% of Melee ATK to enemies in a 5m, 120° fan-shaped area and slightly pulls them in.`,
        effects: [
        ],
      },
      {
        id: "headless-knight",
        name: "Headless Knight",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Activates the Level 1 passive skill [Headless Knight].
          
        [Headless Knight]: At the start of the round, increases Melee ATK by 50% of base Magic ATK for 1 Round.`,
        effects: [
        ],
      },
    // == Juha ==
      {
        id: "fervent-soul",
        name: "Fervent Soul",
        kind: "unique",
        icon: "/icons/stats/smart.webp",
        description: `Activates the level 1 passive skill [Fervent Soul].
          
        [Fervent Soul]: Juha has inherited the mental strength of the Orke race in an exceptionally potent way. At the start of the round, gains the [Fervent Soul] effect for 1R.
        
        - [Fervent Soul]: Immune to [Taunt] and [Stun] effects, and Immaterial DEF increases by 150.`,
        effects: [
          { stat: "immaterialDef", type: "flat", value: 150, battleOnly: true },
        ],
      },
      {
        id: "whisper-of-the-gun",
        name: "Whisper of the Gun",
        kind: "unique",
        icon: "/icons/stats/shooting.webp",
        description: `Activates the Level 3 passive skill [Stealth Detection].
          
        [Stealth Detection]: At the start of each of own turns, detects any stealthed enemies within a 5m radius.
        Also, at the start of each of own turns, decreases Pierce DEF of all enemies within a 5m radius by 300 for 1R`,
        effects: [
        ],
      },
    // == Juza ==
      {
        id: "head-on-clash",
        name: "Head-On Clash",
        kind: "unique",
        icon: "/icons/stats/attacking.webp",
        description: `Activates the Lv. 1 passive skill [Head-On Clash].
          
        [Head-On Clash]: Reduces Healing Received by 50% and takes Fixed DMG equal to 30% of current HP whenever a skill is used. When attacking, HP cannot fall below 1 until the end of the turn.`,
        effects: [
        ],
      },
      {
        id: "intimidation",
        name: "Intimidation",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Aggro Adjustment increases by 50.
        If Juza's attack hits only one target, it performs a Weak Point Attack regardless of direction.
        Aggro Adjustment 50`,
        effects: [
          { stat: "aggroAdj", type: "flat", value: 50 },
        ],
      },
    // == Kalma ==
      {
        id: "top-grade-mind",
        name: "Top-Grade Mind",
        kind: "unique",
        icon: "/icons/stats/think.webp",
        description: `Formation Cost +1
        Max HP -18%
        Magic ATK +175%`,
        effects: [
          { stat: "formationCost", type: "flat", value: 1 },
          { stat: "maxHp", type: "percent", value: -18 },
          { stat: "magicAtk", type: "percent", value: 175 },
        ],
      },
      {
        id: "heart-of-thunder-and-wind",
        name: "Heart of Thunder and Wind",
        kind: "unique",
        icon: "/icons/stats/electricBoost.webp",
        description: `Activates the Level 1 passive skill [Lingering Lightning].
          
        [Lingering Lightning]: When using a skill that is not Standby and not a Response skill, gain 1 stack of [Surging Spark], an energy that circles around you. At the start of your turn, if [Surging Spark] is at max stacks, consumes all stacks to reset the cooldown of [Bolt Chaser].
        
        - [Surging Spark]: Stacks up to 2 times.`,
        effects: [
        ],
      },
    // == Kaul ==
      {
        id: "insatiable-desire",
        name: "Insatiable Desire",
        kind: "unique",
        icon: "/icons/stats/body.webp",
        description: `During battle, increases Melee ATK by 20% of base Melee ATK for every point of base Vitality exceeding 13.`,
        effects: [
        ],
      },
      {
        id: "unquenched-thirst",
        name: "Unquenched Thirst",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Activates the Level 1 passive skill [Unquenched Thirst].
          
        [Unquenched Thirst]: Increases the user's Block Chance by 15%, and raises all DEF by 50 for each enemy within 6m (up to 4 enemies).
        When the shield is stowed, the [Time to Feast] skill increases Melee ATK instead of all DEF by the same amount.
        
        Block Chance is capped at 75%.`,
        effects: [
        ],
      },
    // == Korabi ==
      {
        id: "timid-yet-explosive",
        name: "Timid, Yet Explosive!",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Activates the Level 1 passive skill [Timid, Yet Explosive!].
          
        [Timid, Yet Explosive!]: All DEF increases by 60 during battle. At the start of each Wave, the cooldown of Wave of Blood is reset. When an ally performs a Counter, there is a 30% chance to perform a Support Counter.
        During a Support Counter, Magic ATK increases by 30% and Crit Rate increases by 100% until the end of the turn. After a Support Counter, there is a 30% chance to trigger an Additional Response. During an Additional Response, Magic ATK increases by 80%, Basic ATK DMG increases by 20%, and Crit DMG increases by 160% until the end of the turn.`,
        effects: [
        ],
      },
      {
        id: "decidedly-above-average",
        name: "Decidedly Above Average",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Formation Cost -1
        Intelligence 1
        Vitality -4`,
        effects: [
          { stat: "formationCost", type: "flat", value: -1 },
          { stat: "int", type: "flat", value: 1 },
          { stat: "vit", type: "flat", value: -4 },
        ],
      },
    // == Kotoha ==
      {
        id: "fox-spirits-blessing",
        name: "Fox Spirit's Blessing",
        kind: "unique",
        icon: "/icons/stats/belief.webp",
        description: `Max HP +20%
        Magic ATK +20%`,
        effects: [
          { stat: "maxHp", type: "percent", value: 20 },
          { stat: "magicAtk", type: "percent", value: 20 },
        ],
      },
      {
        id: "kindred-spirit",
        name: "Kindred Spirit",
        kind: "unique",
        icon: "/icons/stats/spark.webp",
        description: `Activates the Level 1 passive skill [Kindred Spirit].
          
        [Kindred Spirit]: Designates the ally affected by [Perfect Unity] as a [Kindred Spirit]. While protected by [Boundary Ward], that ally gains a Barrier equal to 20% of Max HP at the start of the target's turn. The Barrier lasts for 1 Round and cannot stack or be refreshed.`,
        effects: [
        ],
      },
    // == Leah ==
      {
        id: "the-daring-priestess",
        name: "The Daring Priestess",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Formation Cost +1
        Weakpoint Angle Reduced by 70°`,
        effects: [
          { stat: "formationCost", type: "flat", value: 1 },
          { stat: "weakAng", type: "percent", value: -70 },
        ],
      },
      {
        id: "valolanas-duty",
        name: "Valolana's Duty",
        kind: "unique",
        icon: "/icons/stats/noble.webp",
        description: `Activates the Level 1 passive skill [Echoes of Blessing].
          
        [Echoes of Blessing]: Allies under [Swiftpaw's Blessing] gain +25% Melee ATK and +15% Combat Skill DMG during another ally's turn.
        Allies under [Prowdclaw's Blessing] gain +6% Additional DMG Boost,
        If the ally is from Valolana, these effects are enhanced, up to 85% Melee ATK, 77% Combat Skill DMG, and 43% Additional DMG Boost.
        These cat spirits offer greater aid to those with ties to Valolana...`,
        effects: [
        ],
      },
    // == Mahari ==
      {
        id: "lamoras-revenant",
        name: "Lamora's Revenant",
        kind: "unique",
        icon: "/icons/stats/talent.webp",
        description: `Formation Cost -1
        Vitality -2
        Block Chance 25%`,
        effects: [
          { stat: "formationCost", type: "flat", value: -1 },
          { stat: "vit", type: "flat", value: -2 },
          { stat: "blockChance", type: "percent", value: 25 },
        ],
      },
      {
        id: "wall-of-annihilation",
        name: "Wall of Annihilation",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `[Shield Wall] is enhanced into [Annihilation Wall].
          
        [Wall of Annihilation]: Consumes 55 AP. Draws the enemy's attention and protects allies by creating a massive shield wall. While generating the shield wall, attacks the weaknesses of enemies in the front fan-shaped area and makes them face self.`,
        effects: [
        ],
      },
    // == Marhim ==
      {
        id: "dirty-pair-nika",
        name: "Dirty Pair - Nika",
        kind: "unique",
        icon: "/icons/stats/friend.webp",
        description: `Activates the Level 1 passive skill [Dirty Pair - Nika].
          
        [Dirty Pair Nika]: When Nika attacks, supports with the [Dirty Pair Dagger Throw] skill. Gains [Shadow Step] effect for 1 round afterwards.
        
        -[Dirty Pair Dagger Throw]: Throws a dagger at an enemy within 7m, dealing Pierce DMG equal to 40% of Melee ATK.`,
        effects: [
        ],
      },
      {
        id: "crimson-momentum",
        name: "Crimson Momentum",
        kind: "unique",
        icon: "/icons/stats/lethal.webp",
        description: `Activates the Level 3 passive skill [Momentum].
          
        [Momentum]: On a successful Weakness Attack, reduces the target's AP by 9 and gains the [Momentum] effect until the start of the next round.
        
        - [Momentum]: Increases AP Recovery by 12%. Stacks up to 5 times.`,
        effects: [
        ],
      },
    // == Marika ==
      {
        id: "power-too-great",
        name: "Power Too Great",
        kind: "unique",
        icon: "/icons/stats/body.webp",
        description: `Strength +2%
        SPD +20%`,
        effects: [
          { stat: "str", type: "flat", value: 2 },
          { stat: "spd", type: "percent", value: 20 },
        ],
      },
      {
        id: "the-result-of-purity",
        name: "The Result of Purity",
        kind: "unique",
        icon: "/icons/stats/flower.webp",
        description: `Activates the Level 1 passive skill [Follow-Up Assault].
          
        [Follow-Up Assault]: Using [Sky-Piercing Thrust] grants 20 AP.
        Using [World-Piercing Strike] grants 40 AP.`,
        effects: [
        ],
      },
    // == Martrotho ==
      {
        id: "the-blade-of-wind",
        name: "The Blade of Wind",
        kind: "unique",
        icon: "/icons/stats/wind.webp",
        description: `SPD +10%`,
        effects: [
          { stat: "spd", type: "percent", value: 10 },
        ],
      },
      {
        id: "resonance-of-vitality",
        name: "Resonance of Vitality",
        kind: "unique",
        icon: "/icons/stats/bodyheal.webp",
        description: `Activates the Level 3 passive skill [Fighting Spirit].
          
        [Fighting Spirit]: On a successful attack against an enemy with the [Nomination] effect, recovers HP equal to 30% of base Melee ATK and gains the [Fighting Spirit] effect for 1R.
        
        - [Fighting Spirit]: Increases own Crit Rate by 12%. Stacks up to 3 times.`,
        effects: [
        ],
      },
    // == Maximilia ==
      {
        id: "imperial-bond",
        name: "Imperial Bond",
        kind: "unique",
        icon: "/icons/stats/mental.webp",
        description: `Activates the Level 1 Passive Skill [Imperial Bond].
          
        [Imperial Bond]: All of Luise's skill ranges increase by 2m.`,
        effects: [
        ],
      },
      {
        id: "the-last-heir",
        name: "The Last Heir",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Formation Cost +2
        Vitality +2
        Melee ATK +20%
        Crit Rate +12%
        Block Chance +25%`,
        effects: [
          { stat: "formationCost", type: "flat", value: 2 },
          { stat: "vit", type: "flat", value: 2 },
          { stat: "meleeAtk", type: "percent", value: 20 },
          { stat: "critRate", type: "percent", value: 12 },
          { stat: "blockChance", type: "percent", value: 25 },
        ],
      },
    // == Mira & Mirana ==
      {
        id: "a-heart-that-follows",
        name: "A Heart That Follows",
        kind: "unique",
        icon: "/icons/stats/body.webp",
        description: `Activates the Level 1 passive skill [A Heart That Follows Behind].
          
        [A Heart That Follows Behind]: At the start of each round, sets AP to 101 + 50% of [Radiance of Oath] stacks.`,
        effects: [
        ],
      },
      {
        id: "a-knight-s-oath",
        name: "A Knight's Oath",
        kind: "unique",
        icon: "/icons/stats/lethal.webp",
        description: `Activates the Level 1 passive skill [A Knight's Oath].
          
        [A Knight's Oath]: At the start of battle, grants [Bound Master] to the ally with the highest INT.
        
        - [Bound Master]: Mira and Mirana's skills are empowered based on the AP Cost of skills used by the holder of this effect.`,
        effects: [
        ],
      },
    // == Mu Yingying ==
      {
        id: "static-electricity",
        name: "Static Electricity",
        kind: "unique",
        icon: "/icons/stats/electricBoost.webp",
        description: `At the start of your turn, applies [Electrocution] to allies within a 3m radius for 2R. When an enemy initiates an attack against you, turns to face the attacker.
          
        Block Rate +25%.
        Block Rate is capped at 75%.
        
        - [Electrocution]: When hit, deals additional Electric DMG based on the caster's Electric DEF to enemies within a 5m radius.
        When hit by Electric DMG, this effect triggers one additional time.
        DMG from [Electrocution] only occurs after [Plasma Burst] has been used at least once.
        
        At EX+2, adds additional Electric DMG equal to 20% of Electric DEF.
        Electric DEF 300`,
        effects: [
          { stat: "blockChance", type: "percent", value: 25 },
          { stat: "electricDef", type: "flat", value: 300 },
        ],
      },
      {
        id: "sense-of-belonging",
        name: "Sense of Belonging",
        kind: "unique",
        icon: "/icons/stats/friend.webp",
        description: `Yeon Chae-young additionally gains [Sense of Distance].
          
        - [Sense of Distance]: On attack, reduces the cooldown of all skills by 1R.
        
        So Joo-hee additionally gains [Love-Hate]. 
        
        - [Love-Hate]: Increases all DEF by 3000, reduces DMG taken by 50%, and allows Counterattacks regardless of the base number of Counterattacks.`,
        effects: [
        ],
      },
    // == Nari ==
      {
        id: "juhas-aide",
        name: "Juha's Aide",
        kind: "unique",
        icon: "/icons/stats/smart.webp",
        description: `Unlocks the Level 1 Passive Skill [Executioner's Rifle].
          
        [Executioner's Rifle]: If the user has [The Executioner], the cooldown of [Piercing Aether Bullet] is reduced by 2 rounds,`,
        effects: [
        ],
      },
      {
        id: "born-sharpshooter",
        name: "Born Sharpshooter",
        kind: "unique",
        icon: "/icons/stats/target.webp",
        description: `Formation Cost +2
        Technic +2
        Agility +5
        Vitality +1`,
        effects: [
          { stat: "formationCost", type: "flat", value: 2 },
          { stat: "tec", type: "flat", value: 2 },
          { stat: "agi", type: "flat", value: 5 },
          { stat: "vit", type: "flat", value: 1 },
        ],
      },
    // == Nika ==
      {
        id: "dirty-pair-marhim",
        name: "Dirty Pair - Marhim",
        kind: "unique",
        icon: "/icons/stats/friend.webp",
        description: `Activates the Level 1 passive skill [Dirty Pair - Marhim].
          
        [Dirty Pair - Marhim]: When Marhim attacks, supports with the [Dirty Pair Dagger Throw] skill. Gains [Shadow Step] effect for 1 round afterwards.
        
        - [Dirty Pair Dagger Throw]: Throws a dagger at an enemy within 7m, dealing Pierce DMG equal to 70% of Melee ATK.`,
        effects: [
        ],
      },
      {
        id: "lack-of-presence",
        name: "Lack of Presence",
        kind: "unique",
        icon: "/icons/stats/hidden.webp",
        description: `Activates the Level 1 passive skill [Lack of Presence].
          
        [Lack of Presence]: If there are no enemies within 3m, gains the [Shadow Step] effect for 2 rounds.`,
        effects: [
        ],
      },
    // == Olivia ==
      {
        id: "brave-duchess",
        name: "The Brave Duchess",
        kind: "unique",
        description: "Formation Cost +2 \n Weak Spot Hit Multiplier -80% \n Strength 4 \n Vitality 2 \n Agility 2",
        effects: [
          { stat: "formationCost", type: "flat", value: 2 },
          { stat: "weakSpot", type: "percent", value: -80 },
          { stat: "str", type: "flat", value: 4 },
          { stat: "vit", type: "flat", value: 2 },
          { stat: "agi", type: "flat", value: 2 },
        ],
      },
      {
        id: "bladebreaker",
        name: "Bladebreaker",
        kind: "unique",
        description:
          "Activates Level 1 Passive Skill [Bladebreaker]. \n\n [Bladebreaker]: During your turn, always blocks attacks from the front. \n\n Block Chance is capped at 75%, \n Block Chance 28%",
        effects: [{ stat: "blockChance", type: "percent", value: 28 }],
      },
    // == Palekar ==
      {
        id: "the-chronicler",
        name: "The Chronicler",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Formation Cost +2`,
        effects: [
          { stat: "formationCost", type: "flat", value: 2 },
        ],
      },
      {
        id: "pathforger",
        name: "Pathforger",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Activates the Level 1 passive skill [Pathforger].
          
        [Pathforger]: Allies with the [Swamp Elf] trait can trigger the effects of [Relentless Sworddance] up to 2 times per round.`,
        effects: [
        ],
      },
    // == Platina ==
      {
        id: "vigilant-knight",
        name: "Vigilant Knight",
        kind: "unique",
        icon: "/icons/stats/counterattack.webp",
        description: `Activates the Level 1 Passive Skill [Vigilant Knight].
          
        [Vigilant Knight]: The Platinum Knight uses a shield to guard in all directions, protecting her back.
        Platina does not receive a Weakness Attack even when attacked from behind.`,
        effects: [
        ],
      },
      {
        id: "guardians-stance",
        name: "Guardian's Stance",
        kind: "unique",
        icon: "/icons/stats/defend.webp",
        description: `Activates the Level 1 Passive Skill [Guardian's Stance].
          
        [Guardian's Stance]: Takes an unwavering stance as the Platinum Guardian.
        Increases Knockback Resistance by 1000.`,
        effects: [
          { stat: "knockbackRes", type: "flat", value: 1000, battleOnly: true },
        ],
      },
    // == TX-Manticore ==
      {
        id: "steel-retribution",
        name: "Steel Retribution",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Activate the Level 1 Passive Skill [Area Suppression]
          
        [Area Suppression]: Increases Aggro Adjustment by 80 and automatically performs counterattacks.
        Every 2 counterattacks, a [Reactive Electrofield] shield is acquired.
        
        -[Reactive Electrofield]: Grants a shield equal to 24% of base maximum HP.`,
        effects: [
          { stat: "aggroAdj", type: "flat", value: 80, battleOnly: true },
        ],
      },
      {
        id: "steel-frame",
        name: "Steel Frame",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Activates the Level 1 Active Skill [Solid Impact].
        
        [Solid Impact]: Consumes 25 AP. Can be used once during battle. If the skill is used within 2 rounds after the start of the combat without falling into an incapacitated state, recovers 25 AP.
        Leaps to the designated location and deals Crush DMG equal to 120% of Melee ATK to enemies within 2.5m, pushing them back significantly.
        Slash DEF 50
        Pierce DEF 50
        Crush DEF 50`,
        effects: [
          { stat: "slashDef", type: "flat", value: 50 },
          { stat: "pierceDef", type: "flat", value: 50 },
          { stat: "crushDef", type: "flat", value: 50 },
        ],
      },
    // == Valeta ==
      {
        id: "iron-blooded-ascetics",
        name: "Iron-blooded Ascetics",
        kind: "unique",
        icon: "/icons/stats/belief.webp",
        description: `Formation Cost +2
        Strength +3
        Intelligence +4
        Agility +2`,
        effects: [
          { stat: "formationCost", type: "flat", value: 2 },
          { stat: "str", type: "flat", value: 3 },
          { stat: "int", type: "flat", value: 4 },
          { stat: "agi", type: "flat", value: 2 },
        ],
      },
      {
        id: "gate-guardian",
        name: "Gate Guardian",
        kind: "unique",
        icon: "/icons/stats/defend.webp",
        description: `Activates the Level 1 passive skill [The Gate Guardian].
          
        [The Gate Guardian]: Gains 100 AP at the end of the turn, only once per battle, if there is an ally with HP below 40%.`,
        effects: [
        ],
      },
    // == Vlissing ==
      {
        id: "divine-guardian-of-tranel",
        name: "Divine Guardian of Tranel",
        kind: "unique",
        icon: "/icons/stats/belief.webp",
        description: `Formation Cost +1
        Intelligence +2
        Agility +2
        Vitality +2`,
        effects: [
          { stat: "formationCost", type: "flat", value: 1 },
          { stat: "int", type: "flat", value: 2 },
          { stat: "agi", type: "flat", value: 2 },
          { stat: "vit", type: "flat", value: 2 },
        ],
      },
      {
        id: "embracing-wave",
        name: "Embracing Wave",
        kind: "unique",
        icon: "/icons/stats/wave.webp",
        description: `Activates the Level 3 passive skill [Dawn's Spray].
          
        [Dawn's Spray]: At the start of battle, grants all allies on the field the [Counterwave] effect for 3 rounds.`,
        effects: [
        ],
      },
    // == Yeonwoo ==
      {
        id: "the-unrestrained",
        name: "The Unrestrained",
        kind: "unique",
        icon: "/icons/stats/noble.webp",
        description: `Activates Level 1 Passive Skill [Stretchy Stomach].
          
        [Stretchy Stomach]: At the start of combat, Max HP increases by 15%.
        When affected by a healing effect, the cooldown of Leaping Chomp! is reduced by 1 round.`,
        effects: [
        ],
      },
      {
        id: "gluttony-and-the-demons",
        name: "Gluttony and the Demon's",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Weak Spot Hit Multiplier -25%
          
        Activates Level 1 Passive Skill [Rapid-Fire Food Fight].
        
        [Rapid-Fire Food Fight] If HP is 85% or higher at the end of any turn while [True Gourmand] is active, gain AP equal to 51% of base AP recovery.
        Intelligence -4
        Vitality 5`,
        effects: [
          { stat: "weakSpot", type: "percent", value: -25 },
          { stat: "int", type: "flat", value: -4 },
          { stat: "vit", type: "flat", value: 5 },
        ],
      },
    // == Yui ==
      {
        id: "with-precision-and-care",
        name: "With Precision and Care",
        kind: "unique",
        icon: "/icons/stats/noble.webp",
        description: `Formation Cost +1
        Vitality 1
        Technic 1
        Agility 3`,
        effects: [
          { stat: "formationCost", type: "flat", value: 1 },
          { stat: "vit", type: "flat", value: 1 },
          { stat: "tec", type: "flat", value: 1 },
          { stat: "agi", type: "flat", value: 3 },
        ],
      },
      {
        id: "discover-esper",
        name: "Discover Esper Marksmanship",
        kind: "unique",
        icon: "/icons/stats/attacking.webp",
        description: `Formation Cost +2
          
        Activates the Level 1 passive skill [Discover Esper Marksmanship].
        
        [Discover Esper Marksmanship]: When firing with a pistol, additional telekinetically controlled firearms fire simultaneously. Increases Basic ATK DMG by 24% and Ranged ATK by 70%.
        Vitality 2
        Technic 2`,
        effects: [
          { stat: "formationCost", type: "flat", value: 2 },
          { stat: "vit", type: "flat", value: 2 },
          { stat: "tec", type: "flat", value: 2 },
        ],
      },
    // == Yvonna ==
      {
        id: "tranels-cold-blooded",
        name: "Tranel's Cold-blooded",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        description: `Activates the Level 1 passive skill [Tranel's Cold Commander].
          
        [Tranel's Cold Commander]: During battle, increases allies Support Attack DMG by 12%, and increases all allies Basic Attack DMG (excluding self) by 12%.`,
        effects: [
          { stat: "supportAttackDmg", type: "percent", value: 12, battleOnly: true },
        ],
      },
      {
        id: "hoarfrost",
        name: "Hoarfrost",
        kind: "unique",
        icon: "/icons/stats/ice.webp",
        description: `Activates the Level 3 passive skill [Snowfall].
          
        [Snowfall]: At the Start of Round, gain the [Snowfall] effect.
        
        - [Snowfall]: Cold Boost increases by 12%. This effect stacks up to 3 times.`,
        effects: [
          { stat: "coldBoost", type: "percent", value: 12, battleOnly: true },
        ],
      },
  // == SS ==
    // == Araha ==
      {
        id: "bullseye",
        name: "Bullseye",
        kind: "unique",
        description: `Activates the Level 1 Passive Skill [Bullseye].
          
        [Bullseye]: When an ally is attacked, performs a Support Counterattack.`,
        effects: [
        ],
      },
      {
        id: "guaranteed-hit",
        name: "Guaranteed Hit",
        kind: "unique",
        description: `On a successful attack, inflicts [Drone Target] on the enemy for 2R.
          
        [Drone Target]: At the start of a turn in which Araha uses [Wire Maneuver Shot], sends a self-destruct drone to each target, dealing Additional Pierce DMG equal to 300% of Ranged ATK.`,
        effects: [
        ],
      },
    // == Gulam ==
      {
        id: "unyielding-style",
        name: "Unyielding Style",
        kind: "unique",
        icon: "/icons/stats/eyeglasses.webp",
        description: `Weakness Angle Reduction -20°
        Block Chance -100%
        Evade 30%`,
        effects: [
          { stat: "blockChance", type: "percent", value: -100 },
          { stat: "evade", type: "percent", value: 30 },
        ],
      },
      {
        id: "fluttering-romance",
        name: "Fluttering Romance",
        kind: "unique",
        icon: "/icons/stats/flower.webp",
        description: `Activates level 3 passive skill [Bees and Butterflies].
          
        [Bees and Butterflies]: On successful attack during your turn, evade against enemy counterattacks and support counterattacks increases by 400% for that turn.`,
        effects: [
          { stat: "evade", type: "percent", value: 400, battleOnly: true },
        ],
      },
    // == Kalina ==
      {
        id: "obedience",
        name: "Obedience",
        kind: "unique",
        icon: "/icons/stats/smart.webp",
        description: `Activates Level 1 Passive Skill [Obedience].

        [Obedience]: If deployed with the Human God, increases own Melee ATK by 10%.
        Increases the Melee ATK of all Swamp Rangers by 5%.`,
        effects: [
        ],
      },
      {
        id: "double-down",
        name: "Double Down",
        kind: "unique",
        icon: "/icons/stats/body.webp",
        description: `Activates Level 3 Passive Skill [Full Extent].

        [Full Extent]: Consumes 60 AP to drive oneself to prepare for more intense action.
        For 4 rounds, increases Melee ATK by 80% of the user's Base Evasion and grants 36 AP Recovery and 24 Evasion.
        Melee ATK gained from this effect caps at 200.
        The AP Recovery and Evasion bonuses also apply to allies with the [Swamp Elf] trait.`,
        effects: [
        ],
      },
    // == Kilon ==
      {
        id: "alpha-dog",
        name: "Alpha Dog",
        kind: "unique",
        icon: "/icons/stats/noble.webp",
        description: `Activates the Level 1 Passive Skill [Alpha Dog].
          
        [Alpha Dog]: Increases Slash DEF and Pierce DEF of all allies by 50.`,
        effects: [
          { stat: "slashBoost", type: "flat", value: 50, battleOnly: true },
          { stat: "pierceDef", type: "flat", value: 50, battleOnly: true },
        ],
      },
      {
        id: "grrik-chivalry",
        name: "Grrik Chivalry",
        kind: "unique",
        icon: "/icons/stats/belief.webp",
        description: `Activates the Level 3 Passive Skill [Iron Wall].
          
        [Iron Wall]: Each time damage is taken, All DEF increases by 150, lasting until the end of battle.
        Stacks up to 3 times.`,
        effects: [
        ],
      },
    // == Lisandria ==
      {
        id: "judgment-of-vengeance",
        name: "Judgment of Vengeance",
        kind: "unique",
        icon: "/icons/stats/lethal.webp",
        description: `Activates the Level 1 passive skill [Judgment of Vengeance].
          
        [Judgment of Vengeance]: Evade decreases by 15%. On Counterattack, Melee ATK increases by 100%.`,
        effects: [
          { stat: "evade", type: "percent", value: -15, battleOnly: true },
          { stat: "meleeAtk", type: "percent", value: 100, battleOnly: true },
        ],
      },
      {
        id: "enthusiast",
        name: "Enthusiast",
        kind: "unique",
        icon: "/icons/stats/judge.webp",
        description: `Activates the Level 3 passive skill [Faith of Salvation].
          
        [Faith of Salvation]: On successful attack, has a 48% chance to gain an additional [Salvation] stack`,
        effects: [
        ],
      },
    // == Luise ==
      {
        id: "prodigy-mage",
        name: "Prodigy Mage",
        kind: "unique",
        icon: "/icons/stats/noble.webp",
        description: `Activates the Level 1 Passive skill [Prodigy Mage].
          
        [Prodigy Mage]: Possesses a genius understanding of magic, allowing for more efficient spell usage.
        All skills' AP cost decreases by 3%.
        Intelligence 3`,
        effects: [
          { stat: "int", type: "flat", value: 3 },
        ],
      },
      {
        id: "memorize",
        name: "Memorize",
        kind: "unique",
        icon: "/icons/stats/magic.webp",
        description: `Activates the Level 1 Passive skill [Memorize].
          
        [Memorize]: Prepares the incantation in advance.
        Reduces the AP cost required for the first use of the 'Blaze of Ascension' skill during battle by 100.`,
        effects: [
        ],
      },
    // == Osla ==
    {
      id: "oath-of-magnatira",
      name: "Oath of Magnatira",
      kind: "unique",
      icon: "/icons/stats/belief.webp",
      description: `Activates the Level 1 Passive Skill [Oath of Magnatira].
        
        [Oath of Magnatira]: On enemy defeat, gain Counterattack count.`,
      effects: [
      ],
    },
    {
      id: "savage-regeneration",
      name: "Savage Regeneration",
      kind: "unique",
      icon: "/icons/stats/bodyheal.webp",
      description: `Activates the Level 3 Passive Skill [Physical Regeneration].
        
        [Physical Regeneration]: At the start of own turn, recovers HP equal to 6% of Max HP + 120% of Magic ATK.`,
      effects: [
      ],
    },
  // == S ==
    // == Bella ==
      {
        id: "gods-beloved",
        name: "God's Beloved",
        kind: "unique",
        description: `Activates the Level 1 passive skill [God's Beloved].
          
        [God's Beloved]: Each time an ally recovers HP, self has a 30% chance to gain 20 AP.`,
        effects: [
        ],
      },
      {
        id: "reviving-bough",
        name: "Reviving Bough",
        kind: "unique",
        description: `Activates the Level 3 passive skill [Sacred Healing].
          
        [Sacred Healing]: At the start of the round, allies with a lower HP percentage than self recover HP equal to 12% of their Max HP.`,
        effects: [
        ],
      },
    // == Canisk ==
      {
        id: "the-rabid-dog",
        name: "The Rabid Dog",
        kind: "unique",
        description: `Activates Level 1 Passive Skill [The Rabid Dog].

        [The Rabid Dog]: When an ally becomes incapacitated, overwhelming vengeance surges.
        Immediately gain the [Mad Dog] effect for 2 rounds.

        - [Mad Dog]: Cannot be commanded as Human Gods, acts aggressively on its own, does not use the [Thousand Arms Stance] skill. 
        SPD increases by 30%, AP Recovery increases by 30% and Melee ATK increases by 50%.`,
        effects: [
        ],
      },
      {
        id: "grrik-s-sincerity",
        name: "Grrik's Sincerity",
        kind: "unique",
        description: `Melee ATK 30%`,
        effects: [
          { stat: "meleeAtk", type: "percent", value: 30 },
        ],
      },
    // == Cora ==
      {
        id: "prisoner",
        name: "Prisoner",
        kind: "unique",
        description: `Starting AP +20`,
        effects: [
          { stat: "startAp", type: "flat", value: 20 },
        ],
      },
      {
        id: "primal-core",
        name: "Primal Core",
        kind: "unique",
        description: `Activates the Level 3 passive skill [Heat of the Earth].
          
        [Heat of the Earth]: If HP is 100% during battle, reduces the AP cost of the Summon Lava skill by 60%.`,
        effects: [
        ],
      },
    // == Erneste ==
      {
        id: "snake-tongue",
        name: "Snake-tongue",
        kind: "unique",
        description: `Activates the Level 1 Passive Skill [Snake-tongue].
          
        [Snake-tongue]: Deliver some encouraging words(?) to boost the morale of the allies deployed alongside her.
        At the start of each round, grants allies [Now That You Mention It...!] for 1R and enemies [Now That You Mention It...?] for 1R.
        
        - [Now That You Mention It...!]: Increases Melee ATK by 10%
        - [Now That You Mention It...?]: Reduces Melee ATK by 10%`,
        effects: [
          { stat: "meleeAtk", type: "percent", value: 10, battleOnly: true },
        ],
      },
      {
        id: "tactical-commander",
        name: "Tactical Commander",
        kind: "unique",
        description: `Activates the Level 3 Passive Skill [Command].
          
        [Command]: From the start of any turn until the end of that turn, increases Melee ATK for self and nearby allies by 10% for each ally within 5m.`,
        effects: [
          { stat: "meleeAtk", type: "percent", value: 10, battleOnly: true },
        ],
      },
    // == Gulsni ==
      {
        id: "pure-eyes",
        name: "Pure Eyes",
        kind: "unique",
        icon: "/icons/stats/flower.webp",
        description: `Activates the Level 1 passive skill [Pure Eyes].
          
        [Pure Eyes]: When the enemy attacks Gulsni, an unknown guilt is felt, reducing All ATK by 5% for 2 rounds.
        Can stack up to 3 times.`,
        effects: [
        ],
      },
      {
        id: "cant-catch-up",
        name: "Can't Catch Up!",
        kind: "unique",
        icon: "/icons/stats/shield.webp",
        description: `Activates the Level 3 passive skill [Comfort].
          
        [Comfort]: At the Start of Turn, if in [Burrow] state, Recovers HP by 30% of Max HP.`,
        effects: [
        ],  
      },
    // == Kim Ga-young ==
      {
        id: "yeon-chae-young-fan-club",
        name: "Yeon Chae-young Fan Club",
        kind: "unique",
        icon: "/icons/stats/smart.webp",
        description: `Formation Cost -1
        Agility -2
        Vitality -2
        Strength -1
        Technic -3
        Intelligence -1`,
        effects: [
          { stat: "formationCost", type: "flat", value: -1 },
          { stat: "agi", type: "flat", value: -2 },
          { stat: "vit", type: "flat", value: -2 },
          { stat: "str", type: "flat", value: -1 },
          { stat: "tec", type: "flat", value: -3 },
          { stat: "int", type: "flat", value: -1 },
        ],
      },
      {
        id: "drone-scouting",
        name: "Drone Scouting",
        kind: "unique",
        icon: "/icons/stats/drone.webp",
        description: `On a successful attack, inflicts [Drone Scouting].
          
        [Drone Scouting]: When Kim Ga-young attacks a target with [Drone Scouting], increases Final DMG by 50%. Stacks up to 5 times.
        When an ally attacks a target with [Drone Scouting], Kim Ga-young performs a Support Attack.
        [Drone Scouting] can only be applied to one enemy at a time. When Kim Ga-young attacks an enemy without [Drone Scouting], she loses all stacks of increased Final DMG`,
        effects: [
        ],
      },
    // == Nymset ==
      {
        id: "pathkeeper",
        name: "Pathkeeper",
        kind: "unique",
        description: `Activates the Level 1 passive skill [Pathkeeper].
          
        [Pathkeeper]: Increases All DEF of all allies within a 5m circular range by 100 and SPD by 10.`,
        effects: [
          { stat: "slashDef", type: "flat", value: 100, battleOnly: true },
          { stat: "pierceDef", type: "flat", value: 100, battleOnly: true },
          { stat: "crushDef", type: "flat", value: 100, battleOnly: true },
          { stat: "heatDef", type: "flat", value: 100, battleOnly: true },
          { stat: "coldDef", type: "flat", value: 100, battleOnly: true },
          { stat: "electricDef", type: "flat", value: 100, battleOnly: true },
          { stat: "immaterialDef", type: "flat", value: 100, battleOnly: true },
          { stat: "poisonDef", type: "flat", value: 100, battleOnly: true },
          { stat: "spd", type: "flat", value: 10, battleOnly: true },
        ],
      },
      {
        id: "churchs-self-defense",
        name: "Church's Self-defense",
        kind: "unique",
        description: `Block Chance +18%
        Crush Boost +30%
        SPD +20%`,
        effects: [
          { stat: "blockChance", type: "percent", value: 18 },
          { stat: "crushBoost", type: "percent", value: 30 },
          { stat: "spd", type: "percent", value: 20 },
        ],
      },
    // == Pantheri ==
      {
        id: "friend-of-the-people",
        name: "Friend of the People",
        kind: "unique",
        icon: "/icons/stats/friend.webp",
        description: `Activates the Level 1 Passive Skill [Friend of the People].
          
        [Friend of the People]: Driven by the goal of protecting the weak, gains strength when fighting enemies who go against justice.
        Slash, Pierce and Crush DEF increases by 100 during battle.`,
        effects: [
          { stat: "slashDef", type: "flat", value: 100, battleOnly: true },
          { stat: "pierceDef", type: "flat", value: 100, battleOnly: true },
          { stat: "crushDef", type: "flat", value: 100, battleOnly: true },
        ],
      },
      {
        id: "overwhelming",
        name: "Overwhelming",
        kind: "unique",
        icon: "/icons/stats/eyeglasses.webp",
        description: `Activates the Level 3 Passive Skill [Overwhelm].
          
        [Overwhelm]: If the enemy is defeated by [That One Strike], applies the [Overwhelming] effect to all enemies for 2R.
        
        - [Overwhelming]: Reduces Melee, Ranged and Magic ATK by 30%.`,
        effects: [
        ],
      },
    // == Samarika ==
      {
        id: "vigilante-of-justice",
        name: "Vigilante of Justice",
        kind: "unique",
        description: `Strength +1
        Vitality -1`,
        effects: [
          { stat: "str", type: "flat", value: 1 },
          { stat: "vit", type: "flat", value: -1 },
        ],
      },
      {
        id: "swamp-hunting",
        name: "Swamp Hunting",
        kind: "unique",
        description: `Activates the Level 3 passive skill [Hunter's Intuition].
          
        [Hunter's Intuition]: At the end of a turn in which the user attacks, there is a 90% chance to trigger the [Throw Swamp Trap] follow-up skill.
        
        - [Throw Swamp Trap]: Throws a swamp trap at the enemy, dealing Poison DMG equal to 36% of Melee ATK and has a 65% chance to reduce the target's SPD by 40%
        
        Each time this skill is used, the user's Crit Rate increases by 5% , stacking up to 5 times.`,
        effects: [
        ],
      },
    // == Yeon Chae-young ==
    {
      id: "efficient-tactics",
      name: "Efficient Tactics",
      kind: "unique",
      icon: "/icons/stats/talent.webp",
      description: `Activates Level 1 Passive Skill [Efficient Operation].

      [Efficient Operation]: At the start of battle, grants all allies AP by 5.`,
      effects: [
        { stat: "startAp", type: "flat", value: 5, battleOnly: true },
      ],
    },
    {
      id: "first-blood",
      name: "First Blood",
      kind: "unique",
      icon: "/icons/stats/attacking.webp",
      description: `Activates Level 3 Passive Skill [Bold Move].

      [Bold Move]: Once per round, the first attack gains 100% Crit Rate and Crit DMG increases by 40%.`,
      effects: [
        { stat: "critRate", type: "percent", value: 100, battleOnly: true },
        { stat: "critDmg", type: "percent", value: 40, battleOnly: true },
      ],
    },
  // == A ==
    // == Delia ==
      {
        id: "growing-sprout",
        name: "Growing Sprout",
        kind: "unique",
        description: `Formation Cost -2
        Intelligence -6`,
        effects: [
          { stat: "formationCost", type: "flat", value: -2 },
          { stat: "int", type: "flat", value: -6 },
        ],
      },
    // == Ines ==
      {
        id: "rising-star",
        name: "Rising Star",
        kind: "unique",
        icon: "/icons/stats/noble.webp",
        description: `SPD 5%
        Evade 20%`,
        effects: [
          { stat: "spd", type: "percent", value: 5 },
          { stat: "evade", type: "percent", value: 20 },
        ],
      },
      {
        id: "ocean-steps",
        name: "Ocean Steps",
        kind: "unique",
        icon: "/icons/stats/wave.webp",
        description: `Activates the Level 3 passive skill [Stride of Magnal].
          
        [Stride of Magnal]: Upon performing a Weakness Attack, increases Melee ATK proportionally to the distance moved before the attack, up to a maximum of 10m for an increase of 60% until the end of the turn.`,
        effects: [
        ],
      },  
    // == Min Eun-sol ==
      {
        id: "wholehearted",
        name: "Wholehearted",
        kind: "unique",
        icon: "/icons/stats/flower.webp",
        description: `Activates Level 1 Passive Skill [Wholehearted].

        [Wholehearted]: Looks solely towards the Human God with blind devotion.
        If deployed with the Human God, decreases Evasion by 10% but increases Magic ATK by 15%.`,
        effects: [
        ],
      },
      {
        id: "mental-bulwark",
        name: "Mental Bulwark",
        kind: "unique",
        icon: "/icons/stats/bulwark.webp",
        description: `Activates Level 1 Passive Skill [Mental Bulwark].

        [Mental Bulwark]: During battle, increase All allies Heat, Cold, Electric, Poison, Immaterial DEF by 50.`,
        effects: [
        ],
      },
    // == Nonoha ==
      {
        id: "ill-do-my-best",
        name: "I'll Do My Best@!",
        kind: "unique",
        icon: "/icons/stats/noble.webp",
        description: `AP Recovery +5%`,
        effects: [
          { stat: "apRecovery", type: "percent", value: 5 },
        ],
      },
      {
        id: "tailwind",
        name: "Tailwind",
        kind: "unique",
        icon: "/icons/stats/wind.webp",
        description: `Activates the Level 3 passive skill [Tailwind].
          
          [Tailwind]: At the start of own turn, if possessing the [Whirling Wind] effect, permanently gains the [Tailwind] effect.
          
          - [Tailwind]: Increases own AP Recovery by 12%`,
        effects: [
          { stat: "apRecovery", type: "percent", value: 12, battleOnly: true },
        ],
      },
    // == Re-De-Da ==
      {
        id: "soccer-optimized",
        name: "Soccer-optimized",
        kind: "unique",
        icon: "/icons/stats/body.webp",
        description: `Knockback Resistance -50`,
        effects: [
          { stat: "knockbackRes", type: "flat", value: -50 },
        ],
      },
      {
        id: "sycophant",
        name: "Sycophant",
        kind: "unique",
        icon: "/icons/stats/two-side.webp",
        effects: [
        ],
      },
    // == Rhasadina ==
      {
        id: "friendship-with-luise",
        name: "Friendship with Luise",
        kind: "unique",
        icon: "/icons/stats/friend.webp",
        description: `Activates the Level 1 passive skill [Friendship with Luise].
          
        [Friendship with Luise]: If deployed with Luise, focuses more, increasing AP Recovery by 5%.`,
        effects: [
          { stat: "apRecovery", type: "percent", value: 5, battleOnly: true },
        ],
      },
      {
        id: "fairy-dust",
        name: "Fairy Dust",
        kind: "unique",
        icon: "/icons/stats/spark.webp",
        description: `Activates the Level 1 passive skill [Fairy Dust].
          
        [Fairy Dust]: Uses the mystical dust from the fairy's wings to recover nearby allies.
        At the start of own turn, there is a 30% chance to heal the HP of allies within a 5m radius, based on own Magic ATK`,
        effects: [
        ],
      },
    // == So Joo-hee ==
      {
        id: "upstarts-pride",
        name: "Upstart's Pride",
        kind: "unique",
        icon: "/icons/stats/mental.webp",
        description: `Formation Cost -1
        Agility -1
        Vitality -3
        Strength -1
        Technic -3
        Intelligence -1`,
        effects: [
          { stat: "formationCost", type: "flat", value: -1 },
          { stat: "agi", type: "flat", value: -1 },
          { stat: "vit", type: "flat", value: -3 },
          { stat: "str", type: "flat", value: -1 },
          { stat: "tec", type: "flat", value: -3 },
          { stat: "int", type: "flat", value: -1 },
        ],
      },
      {
        id: "unearned-confidence",
        name: "Unearned Confidence",
        kind: "unique",
        icon: "/icons/stats/like.webp",
        description: `Activates the Level 1 passive skill [Concentration].
          
        [Concentration]: At the start of battle, increases Crit Rate by 12% and Ranged ATK by 30%.
        Upon being hit, this effect vanishes.`,
        effects: [
          { stat: "critRate", type: "percent", value: 12, battleOnly: true },
          { stat: "rangedAtk", type: "percent", value: 30, battleOnly: true },
        ],
      },
  // ===== General Trait =====
  // ==== Tier 7 ====
    {
      id: "fundamental-warrior",
      name: "Fundamental Warrior",
      kind: "general",
      grade: 7,
      description: "During battle, Basic Attack DMG increases by 10%. Melee ATK 10%",
      effects: [
        { stat: "meleeAtk", type: "percent", value: 10 },
        { stat: "basicAttackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "consistent-marksman",
      name: "Consistent Marksman",
      kind: "general",
      grade: 7,
      description: `During battle, Basic Attack DMG increases by 10%. Ranged ATK 10%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 10 },
        { stat: "basicAttackDmg", type: "percent", value: 10 },
      ],
    },
    {
      id: "unadorned-mage",
      name: "Unadorned Mage",
      kind: "general",
      grade: 7,
      description: `During battle, Basic Attack DMG increases by 10%. Magic ATK 10%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 10 },
        { stat: "basicAttackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "trump-card-warrior",
      name: "Trump-Card Warrior",
      kind: "general",
      grade: 7,
      description: `During battle, Combat Skill DMG increases by 10%. Melee ATK 10%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 10 },
        { stat: "combatSkillDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "battle-ready-marksman",
      name: "Battle-Ready Marksman",
      kind: "general",
      grade: 7,
      description: `During battle, Combat Skill DMG increases by 10%. Ranged ATK 10%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 10 },
        { stat: "combatSkillDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "all-in-mage",
      name: "All-In Mage",
      kind: "general",
      grade: 7,
      description: `During battle, Combat Skill DMG increases by 10%. Magic ATK 10%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 10 },
        { stat: "combatSkillDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "retaliating-warrior",
      name: "Retaliating Warrior",
      kind: "general",
      grade: 7,
      description: `During battle, Counterattack DMG increases by 10%. Melee ATK 10%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 10 },
        { stat: "counterattackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "surefire-countering-marksman",
      name: "Surefire Countering Marksman",
      kind: "general",
      grade: 7,
      description: `During battle, Counterattack DMG increases by 10%. Ranged ATK 10%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 10 },
        { stat: "counterattackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "retaliating-mage",
      name: "Retaliating Mage",
      kind: "general",
      grade: 7,
      description: `During battle, Counterattack DMG increases by 10%. Magic ATK 10%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 10 },
        { stat: "counterattackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "coordinated-warrior",
      name: "Coordinated Warrior",
      kind: "general",
      grade: 7,
      description: `During battle, Support Attack DMG increases by 10%. Melee ATK 10%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 10 },
        { stat: "supportAttackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "coordinated-attack-marksman",
      name: "Coordinated-Attack Marksman",
      kind: "general",
      grade: 7,
      description: `During battle, Support Attack DMG increases by 10%. Ranged ATK 10%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 10 },
        { stat: "supportAttackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "coordinated-mage",
      name: "Coordinated Mage",
      kind: "general",
      grade: 7,
      description: `During battle, Support Attack DMG increases by 10%. Magic ATK 10%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 10 },
        { stat: "supportAttackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "ally-protecting-warrior",
      name: "Ally-Protecting Warrior",
      kind: "general",
      grade: 7,
      description: `During battle, Support Counterattack DMG increases by 10%. Melee ATK 10%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 10 },
        { stat: "supportCounterattackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "vangeful-marksman",
      name: "Vangeful Marksman",
      kind: "general",
      grade: 7,
      description: `During battle, Support Counterattack DMG increases by 10%. Ranged ATK 10%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 10 },
        { stat: "supportCounterattackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "standby-mage",
      name: "Standby Mage",
      kind: "general",
      grade: 7,
      description: `During battle, Support Counterattack DMG increases by 10%. Magic ATK 10%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 10 },
        { stat: "supportCounterattackDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "opeing-exploiting-warrior",
      name: "Opeing-Exploiting Warrior",
      kind: "general",
      grade: 7,
      description: `During battle, Response DMG increases by 10%. Melee ATK 10%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 10 },
        { stat: "responseDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "opening-exploiting-marksman",
      name: "Opening-Exploiting Marksman",
      kind: "general",
      grade: 7,
      description: `During battle, Response DMG increases by 10%. Ranged ATK 10%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 10 },
        { stat: "responseDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "quick-reponding-archmage",
      name: "Quick-Reponding Archmage",
      kind: "general",
      grade: 7,
      description: `During battle, Response DMG increases by 10%. Magic ATK 10%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 10 },
        { stat: "responseDmg", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "momentum-building-warrior",
      name: "Momentum Building Warrior",
      kind: "general",
      grade: 7,
      description: `During battle, Additional DMG Boost increases by 10%. Melee ATK 10%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 10 },
        { stat: "additionalDmgBoost", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "momentum-building-marksman",
      name: "Momentum-Building Marksman",
      kind: "general",
      grade: 7,
      description: `During battle, Additional DMG Boost increases by 10%. Ranged ATK 10%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 10 },
        { stat: "additionalDmgBoost", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "accelerating-mage",
      name: "Accelerating Mage",
      kind: "general",
      grade: 7,
      description: `During battle, Additional DMG Boost increases by 10%. Magic ATK 10%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 10 },
        { stat: "additionalDmgBoost", type: "percent", value: 10, battleOnly: true },
      ],
    },
    {
      id: "finishing-warrior",
      name: "Finishing Warrior",
      kind: "general",
      grade: 7,
      description: `During battle, Final DMG increases by 7%. Melee ATK 10%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 10 },
        { stat: "finalDmg", type: "percent", value: 7, battleOnly: true },
      ],
    },
    {
      id: "no-mercy-marksman",
      name: "No-Mercy Marksman",
      kind: "general",
      grade: 7,
      description: `During battle, Final DMG increases by 7%. Ranged ATK 10%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 10 },
        { stat: "finalDmg", type: "percent", value: 7, battleOnly: true },
      ],
    },
    {
      id: "finishing-mage",
      name: "Finishing Mage",
      kind: "general",
      grade: 7,
      description: `During battle, Final DMG increases by 7%. Magic ATK 10%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 10 },
        { stat: "finalDmg", type: "percent", value: 7, battleOnly: true },
      ],
    },
    {
      id: "elemental-warrior",
      name: "Elemental Warrior",
      kind: "general",
      grade: 7,
      description: `During battle, Elemental Boost increases by 7%. Melee ATK 10%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 10 },
        { stat: "elementalBoost", type: "percent", value: 7, battleOnly: true },
      ],
    },
    {
      id: "power-honed-marksman",
      name: "Power-Honed Marksman",
      kind: "general",
      grade: 7,
      description: `During battle, Elemental Boost increases by 7%. Ranged ATK 10%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 10 },
        { stat: "elementalBoost", type: "percent", value: 7, battleOnly: true },
      ],
    },
    {
      id: "energy-infused-mage",
      name: "Energy-Infused Mage",
      kind: "general",
      grade: 7,
      description: `During battle, Elemental Boost increases by 7%. Magic ATK 10%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 10 },
        { stat: "elementalBoost", type: "percent", value: 7, battleOnly: true },
      ],
    },
    {
      id: "focused-target-strike",
      name: "Focused Target Strike",
      kind: "general",
      grade: 7,
      description: `When attacking a single target, DMG increases by 25% until the end of turn.`,
      effects: [
      ],
    },
    {
      id: "sweeping-momentum",
      name: "Sweeping Momentum",
      kind: "general",
      grade: 7,
      description: `When a single attack successfully hits 3 or more enemies, All ATK increases by 30% until the end of turn.`,
      effects: [
      ],
    },
    {
      id: "ambush-weak-point",
      name: "Ambush Weak Point",
      kind: "general",
      grade: 7,
      description: `When attacking outside own turn Increases Crit DMG by 20%.`,
      effects: [
      ],
    },
    {
      id: "deepening-wounds",
      name: "Deepening Wounds",
      kind: "general",
      grade: 7,
      description: `DMG increases based on target's missing HP, up to 33%.`,
      effects: [
      ],
    },
    {
      id: "strike-the-defenseless",
      name: "Strike the Defenseless",
      kind: "general",
      grade: 7,
      description: `DMG increases by 20% when attacking an enemy at 100% HP.`,
      effects: [
      ],
    },
    {
      id: "overflowing-confidence",
      name: "Overflowing Confidence",
      kind: "general",
      grade: 7,
      description: `When attacking, each 1% of Crit Rate exceeding 100% increases Crit DMG by 1%, up to 50%.`,
      effects: [
      ],
    },
    {
      id: "reward-for-precision",
      name: "Reward For Precision",
      kind: "general",
      grade: 7,
      description: `Additional DMG Boost increases based on base Accuracy. For Every 100 Accuracy, Additional DMG Boost increases, by 10%, up to 50%`,
      effects: [
      ],
    },
    {
      id: "first-strike-finisher",
      name: "First-Strike Finisher",
      kind: "general",
      grade: 7,
      description: `When Attacking a target for the first time, deals additional Pierce DMG equal to 200% of combined All ATK. Targets that have already taken DMG from this Effect cannot be affected by it again.`,
      effects: [
      ],
    },
    {
      id: "flash-awakening",
      name: "Flash Awakening",
      kind: "general",
      grade: 7,
      description: `At the Start of any turn, Crit Rate Increases by 5% and Crit DMG by 10%. These bonuses expire at the end of your turn.`,
      effects: [
      ],
    },
    {
      id: "reckless-assault",
      name: "Reckless Assault",
      kind: "general",
      grade: 7,
      description: `DMG dealt and DMG taken increase by 20%.`,
      effects: [
      ],
    },
    {
      id: "costly-firepower",
      name: "Costly Firepower",
      kind: "general",
      grade: 7,
      description: `AP cost of all skills increases by 15%, and All ATK increases by 30%.`,
      effects: [
      ],
    },
    {
      id: "sprint-momentum",
      name: "Sprint Momentum",
      kind: "general",
      grade: 7,
      description: `When attacking, All ATK temporarily increases based on the distance traveled, up to 200% at 10m.`,
      effects: [
      ],
    },
    {
      id: "punish-the-disabled",
      name: "Punish the Disabled",
      kind: "general",
      grade: 7,
      description: `When attacking a target affected by [Stun] or [Taunt], deals additional Pierce DMG equal to 250 of Physical DEF. This DMG can only occur one per turn.`,
      effects: [
      ],
    },
    {
      id: "consecutive-action-momentum",
      name: "Consecutive Action Momentum",
      kind: "general",
      grade: 7,
      description: `Each attack increases All ATK and all Elemental Boost by 8% until the end of turn.`,
      effects: [
      ],
    },
    {
      id: "desperate-struggle",
      name: "Desperate Struggle",
      kind: "general",
      grade: 7,
      description: `When Attacking, increases All ATK based on own lost HP, upto 100%.`,
      effects: [
      ],
    },
    {
      id: "shielded-menace",
      name: "Shielded Menace",
      kind: "general",
      grade: 7,
      description: `When attacking while you have a Shield, Crit Rate increases by 25%.`,
      effects: [
      ],
    },
    {
      id: "vital-point-pierce",
      name: "Vital Point Pierce",
      kind: "general",
      grade: 7,
      description: `On Weak Point Attacks, deals an additional Slash DMG equal to 75% of combined All ATK. This DMG increases based on you Crit DMG. This DMG can only occur once per turn.`,
      effects: [
      ],
    },
    {
      id: "life-force",
      name: "Life Force",
      kind: "general",
      grade: 7,
      description: `For every 100 base Max HP, increases Elemental Boost by 1% up to 30%.`,
      effects: [
      ],
    },
    {
      id: "spear-of-defense",
      name: "Spear of Defense",
      kind: "general",
      grade: 7,
      description: `When Attacking, Melee ATK increases by 100% of Physical DEF until the end of turn, up to a maximum increase of 1000.`,
      effects: [
      ],
    },
    {
      id: "last-breath",
      name: "Last Breath",
      kind: "general",
      grade: 7,
      description: `On a successful hit, executes enemies with less than 12% HP. This effect does not apply to powerful enemies.`,
      effects: [
      ],
    },
    {
      id: "burst-step",
      name: "Burst Step",
      kind: "general",
      grade: 7,
      description: `if no AP was Spent on movement during the current turn, All ATK, Crit Rate, and Accuracy increase by 30% until the end of your next turn.`,
      effects: [
      ],
    },
    {
      id: "ironclad",
      name: "Ironclad",
      kind: "general",
      grade: 7,
      description: `During Battle, DMG taken decreases by 30%.`,
      effects: [
      ],
    },
    {
      id: "layered-armor",
      name: "Layered Armor",
      kind: "general",
      grade: 7,
      description: `Each time you are hit, all DEF permanently increases by 100 and aggroAdj modifier increases by 5. Stacks up to 20 times.`,
      effects: [
      ],
    },
    {
      id: "renewed-protection",
      name: "Renewed Protection",
      kind: "general",
      grade: 7,
      description: `At the Start of each Round, gains a Barrier equal to 50% of Max HP for 1 Round.`,
      effects: [
      ],
    },
    {
      id: "death-s-reprive",
      name: "Death's Reprive",
      kind: "general",
      grade: 7,
      description: `Once per battle, when taking fatal damage, nullifies that damage and fully recovers HP. Afterwards, increases All DEF by 1,000 for 1 Round.`,
      effects: [
      ],
    },
    {
      id: "life-for-power",
      name: "Life for Power",
      kind: "general",
      grade: 7,
      description: `During battle, reduces All ATK by 20% but increases Max HP by 40%.`,
      effects: [
      ],
    },
    {
      id: "flawless-stance",
      name: "Flawless Stance",
      kind: "general",
      grade: 7,
      description: `During battle, reduces Weak Point angle by 360°.`,
      effects: [
      ],
    },
    {
      id: "perfect-retaliation",
      name: "Perfect Retaliation",
      kind: "general",
      grade: 7,
      description: `On a successful Block, always Counterattacks and increases Counterattack DMG by 100% and Range by 2m.`,
      effects: [
      ],
    },
    {
      id: "composure-under-taunt",
      name: "Composure Under Taunt",
      kind: "general",
      grade: 7,
      description: `When attacked by a Taunted enemy, All DEF temporarily increases by 1,000 and you gain 15 AP.`,
      effects: [
      ],
    },
    {
      id: "ironclad-counterattack",
      name: "Ironclad Counterattack",
      kind: "general",
      grade: 7,
      description: `When hit, deals additional Slash DMG equal to 100% of Physical DEF to the attacker. This DMG can only occur once per turn.`,
      effects: [
      ],
    },
    {
      id: "unbreakable-will",
      name: "Unbreakable Will",
      kind: "general",
      grade: 7,
      description: `Becomes immune to [Stun], [Taunt], Push and Pull effects.`,
      effects: [
      ],
    },
    {
      id: "taste-of-blood",
      name: "Taste of Blood",
      kind: "general",
      grade: 7,
      description: `Gains 5% Lifesteal.`,
      effects: [
      ],
    },
    {
      id: "tenfold-retaliation",
      name: "Tenfold Retaliation",
      kind: "general",
      grade: 7,
      description: `Reflects 1,000% of damage taken.`,
      effects: [
      ],
    },
    {
      id: "lightfooted",
      name: "Lightfooted",
      kind: "general",
      grade: 7,
      description: `Reduces the AP cost of all skills by 10%.`,
      effects: [
      ],
    },
    {
      id: "restored-vigot",
      name: "Restored Vigot",
      kind: "general",
      grade: 7,
      description: `When attacking, refunds 15% of the AP spent on the skill. Activates up to 3 times per round.`,
      effects: [
      ],
    },
    {
      id: "accelerated-aim",
      name: "Accelerated Aim",
      kind: "general",
      grade: 7,
      description: `On a successful hit, gains AP. Can activate up 15 times per round.`,
      effects: [
      ],
    },
    {
      id: "rising-power",
      name: "Rising Power",
      kind: "general",
      grade: 7,
      description: `For each Round elapsed, increases All ATK, Accuracy, Evade, SPD, AP Recovery, Crit Rate, and Crit DMG by 10%, and All DEF by 100.`,
      effects: [
      ],
    },
    {
      id: "quick-step",
      name: "Quick Step",
      kind: "general",
      grade: 7,
      description: `AP Rcovery increases as base SPD decreases. Grants no bonus at 110 SPD or higher and increases AP Recovery by up 60 at 70 SPD.`,
      effects: [
      ],
    },
    {
      id: "evasion-build-up",
      name: "Evasion Build-Up",
      kind: "general",
      grade: 7,
      description: `Each successful Evade permanently increases Melee ATK, Slash Boost, Crit Rate, and Crit DMG by 7%. Stacks up to 10 times.`,
      effects: [
      ],
    },
    {
      id: "last-shield-standing",
      name: "Last Shield Standing",
      kind: "general",
      grade: 7,
      description: `When hit, all other allies gain 10 AP. Each ally can benefit from this effect up to 6 times per round, shared across all units equipped with this effect.`,
      effects: [
      ],
    },
    {
      id: "supportive-elemental-boost",
      name: "Supportive Elemental Boost",
      kind: "general",
      grade: 7,
      description: `Using a Support Skill permanently increases all allies' Elemental Boost by 12%. Does not stack with the same Effect.`,
      effects: [
      ],
    },
    {
      id: "eroding-strike",
      name: "Eroding Strike",
      kind: "general",
      grade: 7,
      description: `On a successful hit, reduces the target's all DEF by 100. Stacks up to 5 times.`,
      effects: [
      ],
    },
    {
      id: "overwhelming-presence",
      name: "Overwhelming Presence",
      kind: "general",
      grade: 7,
      description: `Increases DMG taken by all enemies within a 5m radius by 15%. Does not stack with the same effect.`,
      effects: [
      ],
    },
    {
      id: "renewed-reserves",
      name: "Renewed Reserves",
      kind: "general",
      grade: 7,
      description: `Each round, gains additional AP equal to 30% of own AP Recovery`,
      effects: [
      ],
    },
    {
      id: "abundant-healing",
      name: "Abundant Healing",
      kind: "general",
      grade: 7,
      description: `Increases Healing Done and Healing Received by 50%`,
      effects: [
      ],
    },
    {
      id: "mana-infused-healing",
      name: "Mana-Infused Healing",
      kind: "general",
      grade: 7,
      description: `Using a Support Skill restores HP to all allies equal to 30% of your Magic ATK. Activates up to 3 time per round.`,
      effects: [
      ],
    },
  // ==== Tier 6 ====
    {
      id: "unceasing-immortal",
      name: "Unceasing Immortal",
      kind: "general",
      grade: 6,
      description: `Max HP 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "relentless-shadow",
      name: "Relentless Shadow",
      kind: "general",
      grade: 6,
      description: `Evade 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "evade", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "steadfast-divine-archer",
      name: "Steadfast Divine Archer",
      kind: "general",
      grade: 6,
      description: `Accuracy 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "diligent-gladiator",
      name: "Diligent Gladiator",
      kind: "general",
      grade: 6,
      description: `Melee ATK 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "diligent-sniper",
      name: "Diligent Sniper",
      kind: "general",
      grade: 6,
      description: `Ranged ATK 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "restless-mage",
      name: "Restless Mage",
      kind: "general",
      grade: 6,
      description: `Magic ATK 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "tireless-wanderer",
      name: "Tireless Wanderer",
      kind: "general",
      grade: 6,
      description: `AP Recovery 4.5%, SPD 5%`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 4.5 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "steadfast-assault-captain",
      name: "Steadfast Assault Captain",
      kind: "general",
      grade: 6,
      description: `Starting AP 5, AP Recovery 4.5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "restless-fixer",
      name: "Restless Fixer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "vigorous-arbiter",
      name: "Vigorous Arbiter",
      kind: "general",
      grade: 6,
      description: `Crit DMG 10%, AP Recovery 4.5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "unceasing-swordmaster",
      name: "Unceasing Swordmaster",
      kind: "general",
      grade: 6,
      description: `Slash Boost 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "vigorous-master-archer",
      name: "Vigorous Master Archer",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "restless-destroyer",
      name: "Restless Destroyer",
      kind: "general",
      grade: 6,
      description: `Crush Boost 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "steadfast-infernomancer",
      name: "Steadfast Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "diligent-blizzard-mage",
      name: "Diligent Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "relentless-thunder-mage",
      name: "Relentless Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "tireless-toxicologist",
      name: "Tireless Toxicologist",
      kind: "general",
      grade: 6,
      description: `Poison Boost 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "unceasing-pantasmist",
      name: "Unceasing Pantasmist",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 5%, AP Recovery 4.5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "relentless-guardian",
      name: "Relentless Guardian",
      kind: "general",
      grade: 6,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, AP Recovery 4.5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "tireless-rampart",
      name: "Tireless Rampart",
      kind: "general",
      grade: 6,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, AP Recovery 4.5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "apRecovery", type: "percent", value: 4.5 },
      ],
    },
    {
      id: "energetic-fortress",
      name: "Energetic Fortress",
      kind: "general",
      grade: 6,
      description: `AP Recovery 4.5%, All DEF 80`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 4.5 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "overwhelming-skirmish",
      name: "Overwhelming Skirmish",
      kind: "general",
      grade: 6,
      description: `AP Recovery 4.5%, Knockback Resistance 25`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 4.5 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "conspicuous-skirmish-captain",
      name: "Conspicuous Skirmish Captain",
      kind: "general",
      grade: 6,
      description: `AP Recovery 4.5%, Aggro Adjustment 40`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 4.5 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "serene-skirmish-captain",
      name: "Serene Skirmish Captain",
      kind: "general",
      grade: 6,
      description: `AP Recovery 4.5%, Aggro Adjustment -40`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 4.5 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "agile-immortal",
      name: "Agile Immortal",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, Evade 5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "perceptive-immortal",
      name: "Perceptive Immortal",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, Accuracy 5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "tenacious-gladiator",
      name: "Tenacious Gladiator",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, Melee ATK 5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "tenacious-sniper",
      name: "Tenacious Sniper",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, Ranged ATK 5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "resolute-sage",
      name: "Resolute Sage",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, Magic ATK 5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "fleet-footed-immortal",
      name: "Fleet-Footed Immortal",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, SPD 5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "quick-deploying-immortal",
      name: "Quick-Deploying Immortal",
      kind: "general",
      grade: 6,
      description: `Starting AP 5, Max HP 9%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "keen-immortal",
      name: "Keen Immortal",
      kind: "general",
      grade: 6,
      description: `Crit Rate 5%, Max HP 9%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "lethal-immortal",
      name: "Lethal Immortal",
      kind: "general",
      grade: 6,
      description: `Crit DMG 10%, Max HP 9%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "persistent-swordmaster",
      name: "Persistent Swordmaster",
      kind: "general",
      grade: 6,
      description: `Slash Boost 5%, Max HP 9%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "enduring-master-archer",
      name: "Enduring Master Archer",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 5%, Max HP 9%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "resolute-destroyer",
      name: "Resolute Destroyer",
      kind: "general",
      grade: 6,
      description: `Crush Boost 5%, Max HP 9%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "tenacious-infernomancer",
      name: "Tenacious Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 5%, Max HP 9%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "tenacious-blizzard-mage",
      name: "Tenacious Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 5%, Max HP 9%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "sturdy-thunder-mage",
      name: "Sturdy Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 5%, Max HP 9%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "resilient-toxicologist",
      name: "Resilient Toxicologist",
      kind: "general",
      grade: 6,
      description: `Poison Boost 5%, Max HP 9%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "persistent-phantasmist",
      name: "Persistent Phantasmist",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 5%, Max HP 9%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "sturdy-guardian",
      name: "Sturdy Guardian",
      kind: "general",
      grade: 6,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, Max HP 9%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "resilient-rampart",
      name: "Resilient Rampart",
      kind: "general",
      grade: 6,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, Max HP 9%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "maxHp", type: "percent", value: 9 },
      ],
    },
    {
      id: "unfallen-fortress",
      name: "Unfallen Fortress",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, All DEF 80`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "overwhelming-immortal",
      name: "Overwhelming Immortal",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, Knockback Resistance 25`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "menacing-immortal",
      name: "Menacing Immortal",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "serene-immortal",
      name: "Serene Immortal",
      kind: "general",
      grade: 6,
      description: `Max HP 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "maxHp", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "swift-divine-archer",
      name: "Swift Divine Archer",
      kind: "general",
      grade: 6,
      description: `Accuracy 5%, Evade 9%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "swift-gladiator",
      name: "Swift Gladiator",
      kind: "general",
      grade: 6,
      description: `Melee ATK 5%, Evade 9%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "swift-sniper",
      name: "Swift Sniper",
      kind: "general",
      grade: 6,
      description: `Ranged ATK 5%, Evade 9%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "dancing-sage",
      name: "Dancing Sage",
      kind: "general",
      grade: 6,
      description: `Magic ATK 5%, Evade 9%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "agile-shadow",
      name: "Agile Shadow",
      kind: "general",
      grade: 6,
      description: `Evade 9%, SPD 5%`,
      effects: [
        { stat: "evade", type: "percent", value: 9 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "swift-assault-captain",
      name: "Swift Assault Captain",
      kind: "general",
      grade: 6,
      description: `Starting AP 5, Evade 9%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "dancing-fixer",
      name: "Dancing Fixer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 5%, Evade 9%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "flexible-arbiter",
      name: "Flexible Arbiter",
      kind: "general",
      grade: 6,
      description: `Crit DMG 10%, Evade 9%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "agile-swordmaster",
      name: "Agile Swordmaster",
      kind: "general",
      grade: 6,
      description: `Slash Boost 5%, Evade 9%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "flexible-master-archer",
      name: "Flexible Master Archer",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 5%, Evade 9%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "dancing-destroyer",
      name: "Dancing Destroyer",
      kind: "general",
      grade: 6,
      description: `Crush Boost 5%, Evade 9%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "swift-infernomancer",
      name: "Swift Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 5%, Evade 9%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "swift-blizzard-mage",
      name: "Swift Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 5%, Evade 9%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "nimble-thunder-mage",
      name: "Nimble Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 5%, Evade 9%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "flexible-toxicologist",
      name: "Flexible Toxicologist",
      kind: "general",
      grade: 6,
      description: `Poison Boost 5%, Evade 9%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "wind-swift-pantasmist",
      name: "Wind-Swift Pantasmist",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 5%, Evade 9%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "nimble-guardian",
      name: "Nimble Guardian",
      kind: "general",
      grade: 6,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, Evade 9%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "gliding-rampart",
      name: "Gliding Rampart",
      kind: "general",
      grade: 6,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, Evade 9%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "evade", type: "percent", value: 9 },
      ],
    },
    {
      id: "wind-swift-fortress",
      name: "Wind-Swift Fortress",
      kind: "general",
      grade: 6,
      description: `Evade 9%, All DEF 80`,
      effects: [
        { stat: "evade", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "overwhelming-shadow",
      name: "Overwhelming Shadow",
      kind: "general",
      grade: 6,
      description: `Evade 9%, Knockback Resistance 25`,
      effects: [
        { stat: "evade", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "provocative-shadow",
      name: "Provocative Shadow",
      kind: "general",
      grade: 6,
      description: `Evade 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "evade", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "quiet-shadow",
      name: "Quiet Shadow",
      kind: "general",
      grade: 6,
      description: `Evade 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "evade", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "accurate-gladiator",
      name: "Accurate Gladiator",
      kind: "general",
      grade: 6,
      description: `Melee ATK 5%, Accuracy 9%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "precise-sniper",
      name: "Precise Sniper",
      kind: "general",
      grade: 6,
      description: `Ranged ATK 5%, Accuracy 9%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "reliable-sage",
      name: "Reliable Sage",
      kind: "general",
      grade: 6,
      description: `Magic ATK 5%, Accuracy 9%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "agile-divine-archer",
      name: "Agile Divine Archer",
      kind: "general",
      grade: 6,
      description: `Accuracy 9%, SPD 5%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 9 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "precise-assault-captain",
      name: "Precise Assault Captain",
      kind: "general",
      grade: 6,
      description: `Starting AP 5, Accuracy 9%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "reliable-fixer",
      name: "Reliable Fixer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 5%, Accuracy 9%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "opportunistic-arbiter",
      name: "Opportunistic Arbiter",
      kind: "general",
      grade: 6,
      description: `Crit DMG 10%, Accuracy 9%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "precise-swordmaster",
      name: "Precise Swordmaster",
      kind: "general",
      grade: 6,
      description: `Slash Boost 5%, Accuracy 9%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "accurate-master-archer",
      name: "Accurate Master Archer",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 5%, Accuracy 9%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "reliable-destroyer",
      name: "Reliable Destroyer",
      kind: "general",
      grade: 6,
      description: `Crush Boost 5%, Accuracy 9%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "precise-infernomancer",
      name: "Precise Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 5%, Accuracy 9%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "accurate-blizzard-mage",
      name: "Accurate Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 5%, Accuracy 9%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "opportunistic-thunder-mage",
      name: "Opportunistic Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 5%, Accuracy 9%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "reliable-toxicologist",
      name: "Reliable Toxicologist",
      kind: "general",
      grade: 6,
      description: `Poison Boost 5%, Accuracy 9%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "flawless-phantasmist",
      name: "Flawless Phantasmist",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 5%, Accuracy 9%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "opportunistic-guardian",
      name: "Opportunistic Guardian",
      kind: "general",
      grade: 6,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, Accuracy 9%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "opportunistic-rampart",
      name: "Opportunistic Rampart",
      kind: "general",
      grade: 6,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, Accuracy 9%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "accuracy", type: "percent", value: 9 },
      ],
    },
    {
      id: "reliable-fortress",
      name: "Reliable Fortress",
      kind: "general",
      grade: 6,
      description: `Accuracy 9%, All DEF 80`,
      effects: [
        { stat: "accuracy", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "overwhelming-divine-archer",
      name: "Overwhelming Divine Archer",
      kind: "general",
      grade: 6,
      description: `Accuracy 9%, Knockback Resistance 25`,
      effects: [
        { stat: "accuracy", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "conspicuous-divine-archer",
      name: "Conspicuous Divine Archer",
      kind: "general",
      grade: 6,
      description: `Accuracy 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "accuracy", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "vanishing-divine-archer",
      name: "Vanishing Divine Archer",
      kind: "general",
      grade: 6,
      description: `Accuracy 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "accuracy", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "indomitable-sniper",
      name: "Indomitable Sniper",
      kind: "general",
      grade: 6,
      description: `Melee ATK 9%, Ranged ATK 5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 9 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "fierce-sage",
      name: "Fierce Sage",
      kind: "general",
      grade: 6,
      description: `Melee ATK 9%, Magic ATK 5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 9 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "restless-gladiator",
      name: "Restless Gladiator",
      kind: "general",
      grade: 6,
      description: `Melee ATK 9%, SPD 5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 9 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "quick-gladiator",
      name: "Quick Gladiator",
      kind: "general",
      grade: 6,
      description: `Starting AP 5, Melee ATK 9%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "keen-gladiator",
      name: "Keen Gladiator",
      kind: "general",
      grade: 6,
      description: `Crit Rate 5%, Melee ATK 9%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "ferocious-gladiator",
      name: "Ferocious Gladiator",
      kind: "general",
      grade: 6,
      description: `Crit DMG 10%, Melee ATK 9%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "sharp-gladiator",
      name: "Sharp Gladiator",
      kind: "general",
      grade: 6,
      description: `Slash Boost 5%, Melee ATK 9%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "penetrating-gladiator",
      name: "Penetrating Gladiator",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 5%, Melee ATK 9%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "smashing-gladiator",
      name: "Smashing Gladiator",
      kind: "general",
      grade: 6,
      description: `Crush Boost 5%, Melee ATK 9%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "burning-gladiator",
      name: "Burning Gladiator",
      kind: "general",
      grade: 6,
      description: `Heat Boost 5%, Melee ATK 9%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "frozen-gladiator",
      name: "Frozen Gladiator",
      kind: "general",
      grade: 6,
      description: `Cold Boost 5%, Melee ATK 9%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "flashing-gladiator",
      name: "Flashing Gladiator",
      kind: "general",
      grade: 6,
      description: `Electric Boost 5%, Melee ATK 9%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "infiltrating-gladiator",
      name: "Infiltrating Gladiator",
      kind: "general",
      grade: 6,
      description: `Poison Boost 5%, Melee ATK 9%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "formless-gladiator",
      name: "Formless Gladiator",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 5%, Melee ATK 9%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "sturdy-gladiator",
      name: "Sturdy Gladiator",
      kind: "general",
      grade: 6,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, Melee ATK 9%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "unwavering-gladiator",
      name: "Unwavering Gladiator",
      kind: "general",
      grade: 6,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, Melee ATK 9%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "meleeAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "ironclad-gladiator",
      name: "Ironclad Gladiator",
      kind: "general",
      grade: 6,
      description: `Melee ATK 9%, All DEF 80`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "mighty-gladiator",
      name: "Mighty Gladiator",
      kind: "general",
      grade: 6,
      description: `Melee ATK 9%, Knockback Resistance 25`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "attention-grabbing-gladiator",
      name: "Attention-Grabbing Gladiator",
      kind: "general",
      grade: 6,
      description: `Melee ATK 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "stealthy-gladiator",
      name: "Stealthy Gladiator",
      kind: "general",
      grade: 6,
      description: `Melee ATK 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "precise-sage",
      name: "Precise Sage",
      kind: "general",
      grade: 6,
      description: `Ranged ATK 9%, Magic ATK 5%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 9 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "restless-sniper",
      name: "Restless Sniper",
      kind: "general",
      grade: 6,
      description: `Ranged ATK 9%, SPD 5%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 9 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "leading-sniper",
      name: "Leading Sniper",
      kind: "general",
      grade: 6,
      description: `Starting AP 5, Ranged ATK 9%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "keen-sniper",
      name: "Keen Sniper",
      kind: "general",
      grade: 6,
      description: `Crit Rate 5%, Ranged ATK 9%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "ruthless-sniper",
      name: "Ruthless Sniper",
      kind: "general",
      grade: 6,
      description: `Crit DMG 10%, Ranged ATK 9%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "clean-cutting-sniper",
      name: "Clean-Cutting Sniper",
      kind: "general",
      grade: 6,
      description: `Slash Boost 5%, Ranged ATK 9%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "penetrating-sniper",
      name: "Penetrating Sniper",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 5%, Ranged ATK 9%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "vibrating-sniper",
      name: "Vibrating Sniper",
      kind: "general",
      grade: 6,
      description: `Crush Boost 5%, Ranged ATK 9%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "blazing-sniper",
      name: "Blazing Sniper",
      kind: "general",
      grade: 6,
      description: `Heat Boost 5%, Ranged ATK 9%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "frozen-sniper",
      name: "Frozen Sniper",
      kind: "general",
      grade: 6,
      description: `Cold Boost 5%, Ranged ATK 9%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "high-voltage-sniper",
      name: "High-Voltage Sniper",
      kind: "general",
      grade: 6,
      description: `Electric Boost 5%, Ranged ATK 9%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "infiltrating-sniper",
      name: "Infiltrating Sniper",
      kind: "general",
      grade: 6,
      description: `Poison Boost 5%, Ranged ATK 9%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "unfathomable-sniper",
      name: "Unfathomable Sniper",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 5%, Ranged ATK 9%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "steadfast-sniper",
      name: "Steadfast Sniper",
      kind: "general",
      grade: 6,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, Ranged ATK 9%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "formidable-sniper",
      name: "Formidable Sniper",
      kind: "general",
      grade: 6,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, Ranged ATK 9%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "rangedAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "ironclad-sniper",
      name: "Ironclad Sniper",
      kind: "general",
      grade: 6,
      description: `Ranged ATK 9%, All DEF 80`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "forceful-sniper",
      name: "Forceful Sniper",
      kind: "general",
      grade: 6,
      description: `Ranged ATK 9%, Knockback Resistance 25`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "confident-sniper",
      name: "Confident Sniper",
      kind: "general",
      grade: 6,
      description: `Ranged ATK 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "vanishing-sniper",
      name: "Vanishing Sniper",
      kind: "general",
      grade: 6,
      description: `Ranged ATK 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "dashing-sage",
      name: "Dashing Sage",
      kind: "general",
      grade: 6,
      description: `Magic ATK 9%, SPD 5%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 9 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "quick-starting-sage",
      name: "Quick-Starting Sage",
      kind: "general",
      grade: 6,
      description: `Starting AP 5, Magic ATK 9%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "alert-sage",
      name: "Alert Sage",
      kind: "general",
      grade: 6,
      description: `Crit Rate 5%, Magic ATK 9%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "ruthless-sage",
      name: "Ruthless Sage",
      kind: "general",
      grade: 6,
      description: `Crit DMG 10%, Magic ATK 9%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "clean-cutting-sage",
      name: "Clean-Cutting Sage",
      kind: "general",
      grade: 6,
      description: `Slash Boost 5%, Magic ATK 9%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "single-shot-sage",
      name: "Single-Shot Sage",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 5%, Magic ATK 9%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "resonant-sage",
      name: "Resonant Sage",
      kind: "general",
      grade: 6,
      description: `Crush Boost 5%, Magic ATK 9%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "ember-lit-sage",
      name: "Ember-Lit Sage",
      kind: "general",
      grade: 6,
      description: `Heat Boost 5%, Magic ATK 9%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "freezing-sage",
      name: "Freezing Sage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 5%, Magic ATK 9%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "lightning-fast-sage",
      name: "Lightning-Fast Sage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 5%, Magic ATK 9%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "deadly-sage",
      name: "Deadly Sage",
      kind: "general",
      grade: 6,
      description: `Poison Boost 5%, Magic ATK 9%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "otherworldly-sage",
      name: "Otherworldly Sage",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 5%, Magic ATK 9%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "stubborn-sage",
      name: "Stubborn Sage",
      kind: "general",
      grade: 6,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, Magic ATK 9%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "rampart-like-sage",
      name: "Rampart-Like Sage",
      kind: "general",
      grade: 6,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, Magic ATK 9%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "magicAtk", type: "percent", value: 9 },
      ],
    },
    {
      id: "fortress-like-sage",
      name: "Fortress-Like Sage",
      kind: "general",
      grade: 6,
      description: `Magic ATK 9%, All DEF 80`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "powerful-sage",
      name: "Powerful Sage",
      kind: "general",
      grade: 6,
      description: `Magic ATK 9%, Knockback Resistance 25`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "frontline-sage",
      name: "Frontline Sage",
      kind: "general",
      grade: 6,
      description: `Magic ATK 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "silent-sage",
      name: "Silent Sage",
      kind: "general",
      grade: 6,
      description: `Magic ATK 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "restless-assault-captain",
      name: "Restless Assault Captain",
      kind: "general",
      grade: 6,
      description: `Starting AP 5, SPD 9%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "dashing-fixer",
      name: "Dashing Fixer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 5%, SPD 9%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "agile-arbiter",
      name: "Agile Arbiter",
      kind: "general",
      grade: 6,
      description: `Crit DMG 10%, SPD 9%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "fleet-footed-swordmaster",
      name: "Fleet-Footed Swordmaster",
      kind: "general",
      grade: 6,
      description: `Slash Boost 5%, SPD 9%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "dashing-master-archer",
      name: "Dashing Master Archer",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 5%, SPD 9%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "dashing-destroyer",
      name: "Dashing Destroyer",
      kind: "general",
      grade: 6,
      description: `Crush Boost 5%, SPD 9%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "restless-infernomancer",
      name: "Restless Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 5%, SPD 9%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "restless-blizzard-mage",
      name: "Restless Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 5%, SPD 9%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "agile-thunder-mage",
      name: "Agile Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 5%, SPD 9%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "restless-toxicologist",
      name: "Restless Toxicologist",
      kind: "general",
      grade: 6,
      description: `Poison Boost 5%, SPD 9%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "fleet-footed-phantasmist",
      name: "Fleet-Footed Phantasmist",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 5%, SPD 9%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "agile-guardian",
      name: "Agile Guardian",
      kind: "general",
      grade: 6,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, SPD 9%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "restless-rampart",
      name: "Restless Rampart",
      kind: "general",
      grade: 6,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, SPD 9%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "spd", type: "percent", value: 9 },
      ],
    },
    {
      id: "fleet-footed-fortress",
      name: "Fleet-Footed Fortress",
      kind: "general",
      grade: 6,
      description: `SPD 9%, All DEF 80`,
      effects: [
        { stat: "spd", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "pressing-wanderer",
      name: "Pressing Wanderer",
      kind: "general",
      grade: 6,
      description: `SPD 9%, Knockback Resistance 25`,
      effects: [
        { stat: "spd", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "imposing-wanderer",
      name: "Imposing Wanderer",
      kind: "general",
      grade: 6,
      description: `SPD 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "spd", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "untracable-wanderer",
      name: "Untracable Wanderer",
      kind: "general",
      grade: 6,
      description: `SPD 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "spd", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "quick-starting-fixer",
      name: "Quick-Starting Fixer",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Crit Rate 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "critRate", type: "percent", value: 5 },
      ],
    },
    {
      id: "hasty-arbiter",
      name: "Hasty Arbiter",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Crit DMG 10%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "critDmg", type: "percent", value: 10 },
      ],
    },
    {
      id: "quick-deploying-swordmaster",
      name: "Quick-Deploying Swordmaster",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Slash Boost 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "slashBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "hasty-master-archer",
      name: "Hasty Master Archer",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Pierce Boost 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "pierceBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "quick-starting-destroyer",
      name: "Quick-Starting Destroyer",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Crush Boost 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "crushBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "leading-infernomancer",
      name: "Leading Infernomancer",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Heat Boost 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "heatBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "quick-blizzard-mage",
      name: "Quick Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Cold Boost 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "coldBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "preemptive-thunder-mage",
      name: "Preemptive Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Electric Boost 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "electricBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "one-step-ahead-toxicologist",
      name: "One Step Ahead Toxicologist",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Poison Boost 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "poisonBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "leading-phantasmist",
      name: "Leading Phantasmist",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Immaterial Boost 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "preemptive-guardian",
      name: "Preemptive Guardian",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "one-step-ahead-rampart",
      name: "One Step Ahead Rampart",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "preemptive-fortress",
      name: "Preemptive Fortress",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, All DEF 80`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "powerful-assault-captain",
      name: "Powerful Assault Captain",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Knockback Resistance 25`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "confident-assault-captain",
      name: "Confident Assault Captain",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Aggro Adjustment 40`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "stealthy-assault-captain",
      name: "Stealthy Assault Captain",
      kind: "general",
      grade: 6,
      description: `Starting AP 9, Aggro Adjustment -40`,
      effects: [
        { stat: "startAp", type: "flat", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "quick-witted-arbiter",
      name: "Quick-Witted Arbiter",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Crit DMG 10%`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "critDmg", type: "percent", value: 10 },
      ],
    },
    {
      id: "keen-swordmaster",
      name: "Keen Swordmaster",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Slash Boost 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "slashBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "quick-witted-master-archer",
      name: "Quick-Witted Master Archer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Pierce Boost 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "pierceBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "alert-destroyer",
      name: "Alert Destroyer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Crush Boost 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "crushBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "keen-infernomancer",
      name: "Keen Infernomancer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Heat Boost 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "heatBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "keen-blizzard-mage",
      name: "Keen Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Cold Boost 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "coldBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "watchful-thunder-mage",
      name: "Watchful Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Electric Boost 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "electricBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "alert-toxicologist",
      name: "Alert Toxicologist",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Poison Boost 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "poisonBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "watchful-phantasmist",
      name: "Watchful Phantasmist",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Immaterial Boost 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "quick-witted-guardian",
      name: "Quick-Witted Guardian",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "alert-rampart",
      name: "Alert Rampart",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "watchful-fortress",
      name: "Watchful Fortress",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, All DEF 80`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "powerful-fixer",
      name: "Powerful Fixer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Knockback Resistance 25`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "frontline-fixer",
      name: "Frontline Fixer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "silent-fixer",
      name: "Silent Fixer",
      kind: "general",
      grade: 6,
      description: `Crit Rate 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "critRate", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "lethal-swordmancer",
      name: "Lethal Swordmancer",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Slash Boost 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "slashBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "decisive-master-archer",
      name: "Decisive Master Archer",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Pierce Boost 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "pierceBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "fierce-destroyer",
      name: "Fierce Destroyer",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Crush Boost 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "crushBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "ruthless-infernomancer",
      name: "Ruthless Infernomancer",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Heat Boost 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "heatBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "ferocious-blizzard-mage",
      name: "Ferocious Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Cold Boost 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "coldBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "deadly-thunder-mage",
      name: "Deadly Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Electric Boost 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "electricBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "resolute-toxicologist",
      name: "Resolute Toxicologist",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Poison Boost 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "poisonBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "merciless-phantasmist",
      name: "Merciless Phantasmist",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Immaterial Boost 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "deadly-guardian",
      name: "Deadly Guardian",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "resolute-rampart",
      name: "Resolute Rampart",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "merciless-fortress",
      name: "Merciless Fortress",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, All DEF 80`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "impactful-arbiter",
      name: "Impactful Arbiter",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Knockback Resistance 25`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "frontline-arbiter",
      name: "Frontline Arbiter",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Aggro Adjustment 40`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "serene-arbiter",
      name: "Serene Arbiter",
      kind: "general",
      grade: 6,
      description: `Crit DMG 18%, Aggro Adjustment -40`,
      effects: [
        { stat: "critDmg", type: "percent", value: 18 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "slashing-guardian",
      name: "Slashing Guardian",
      kind: "general",
      grade: 6,
      description: `Slash Boost 9%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "razor-sharp-rampart",
      name: "Razor-Sharp Rampart",
      kind: "general",
      grade: 6,
      description: `Slash Boost 9%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "flash-fast-fortress",
      name: "Flash-Fast Fortress",
      kind: "general",
      grade: 6,
      description: `Slash Boost 9%, All DEF 80`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "overwhelming-swordmaster",
      name: "Overwhelming Swordmaster",
      kind: "general",
      grade: 6,
      description: `Slash Boost 9%, Knockback Resistance 25`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "menacing-swordmaster",
      name: "Menacing Swordmaster",
      kind: "general",
      grade: 6,
      description: `Slash Boost 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "serene-swordmaster",
      name: "Serene Swordmaster",
      kind: "general",
      grade: 6,
      description: `Slash Boost 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "piercing-guardian",
      name: "Piercing Guardian",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 9%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "single-strike-rampart",
      name: "Single-Strike Rampart",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 9%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "dead-aim-fortress",
      name: "Dead-Aim Fortress",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 9%, All DEF 80`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "impactful-master-archer",
      name: "Impactful Master Archer",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 9%, Knockback Resistance 25`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "frontline-master-archer",
      name: "Frontline Master Archer",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "serene-master-archer",
      name: "Serene Master Archer",
      kind: "general",
      grade: 6,
      description: `Pierce Boost 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "smashing-guardian",
      name: "Smashing Guardian",
      kind: "general",
      grade: 6,
      description: `Crush Boost 9%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "crushing-rampart",
      name: "Crushing Rampart",
      kind: "general",
      grade: 6,
      description: `Crush Boost 9%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "shattering-fortress",
      name: "Shattering Fortress",
      kind: "general",
      grade: 6,
      description: `Crush Boost 9%, All DEF 80`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "powerful-destroyer",
      name: "Powerful Destroyer",
      kind: "general",
      grade: 6,
      description: `Crush Boost 9%, Knockback Resistance 25`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "fronline-destroyer",
      name: "Fronline Destroyer",
      kind: "general",
      grade: 6,
      description: `Crush Boost 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "silent-destroyer",
      name: "Silent Destroyer",
      kind: "general",
      grade: 6,
      description: `Crush Boost 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "frozen-infernomancer",
      name: "Frozen Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, Cold Boost 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "coldBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "high-voltage-infernomancer",
      name: "High-Voltage Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, Electric Boost 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "electricBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "infiltrating-infernomancer",
      name: "Infiltrating Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, Poison Boost 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "poisonBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "unfathomable-infernomancer",
      name: "Unfathomable Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, Immaterial Boost 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "scorching-guardian",
      name: "Scorching Guardian",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "blazing-rampart",
      name: "Blazing Rampart",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "fiery-fortress",
      name: "Fiery Fortress",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, All DEF 80`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "forceful-infernomancer",
      name: "Forceful Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, Knockback Resistance 25`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "confident-infernomancer",
      name: "Confident Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "vanishing-infernomancer",
      name: "Vanishing Infernomancer",
      kind: "general",
      grade: 6,
      description: `Heat Boost 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "flashing-blizzard-mage",
      name: "Flashing Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 9%, Electric Boost 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 9 },
        { stat: "electricBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "infiltrating-blizzard-mage",
      name: "Infiltrating Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 9%, Poison Boost 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 9 },
        { stat: "poisonBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "formless-blizzard-mage",
      name: "Formless Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 9%, Immaterial Boost 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 9 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "chilling-guardian",
      name: "Chilling Guardian",
      kind: "general",
      grade: 6,
      description: `Cold Boost 9%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "frostbitten-rampart",
      name: "Frostbitten Rampart",
      kind: "general",
      grade: 6,
      description: `Cold Boost 9%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "ruthless-fortress",
      name: "Ruthless Fortress",
      kind: "general",
      grade: 6,
      description: `Cold Boost 9%, All DEF 80`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "mighty-blizzard-mage",
      name: "Mighty Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 9%, Knockback Resistance 25`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "provocative-blizzard-mage",
      name: "Provocative Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "stealthy-blizzard-mage",
      name: "Stealthy Blizzard Mage",
      kind: "general",
      grade: 6,
      description: `Cold Boost 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "toxic-thunder-mage",
      name: "Toxic Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 9%, Poison Boost 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 9 },
        { stat: "poisonBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "uncanny-thunder-mage",
      name: "Uncanny Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 9%, Immaterial Boost 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 9 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "electrified-guardian",
      name: "Electrified Guardian",
      kind: "general",
      grade: 6,
      description: `Electric Boost 9%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "electrifying-rampart",
      name: "Electrifying Rampart",
      kind: "general",
      grade: 6,
      description: `Electric Boost 9%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "thunderous-fortress",
      name: "Thunderous Fortress",
      kind: "general",
      grade: 6,
      description: `Electric Boost 9%, All DEF 80`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "mighty-thunder-mage",
      name: "Mighty Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 9%, Knockback Resistance 25`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "provocative-thunder-mage",
      name: "Provocative Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "quiet-thunder-mage",
      name: "Quiet Thunder Mage",
      kind: "general",
      grade: 6,
      description: `Electric Boost 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "veiled-toxicologist",
      name: "Veiled Toxicologist",
      kind: "general",
      grade: 6,
      description: `Poison Boost 9%, Immaterial Boost 5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 9 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "venomous-guardian",
      name: "Venomous Guardian",
      kind: "general",
      grade: 6,
      description: `Poison Boost 9%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "spreading-rampart",
      name: "Spreading Rampart",
      kind: "general",
      grade: 6,
      description: `Poison Boost 9%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "venomous-fortress",
      name: "Venomous Fortress",
      kind: "general",
      grade: 6,
      description: `Poison Boost 9%, All DEF 80`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "pressing-toxicologist",
      name: "Pressing Toxicologist",
      kind: "general",
      grade: 6,
      description: `Poison Boost 9%, Knockback Resistance 25`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "provocative-toxicologist",
      name: "Provocative Toxicologist",
      kind: "general",
      grade: 6,
      description: `Poison Boost 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "unseen-toxicologist",
      name: "Unseen Toxicologist",
      kind: "general",
      grade: 6,
      description: `Poison Boost 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "uncanny-guardian",
      name: "Uncanny Guardian",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 9%, Slash DEF 100, Pierce DEF 100, Crush DEF 100`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 9 },
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "veiled-rampart",
      name: "Veiled Rampart",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 9%, Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 9 },
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
      ],
    },
    {
      id: "incorporeal-fortress",
      name: "Incorporeal Fortress",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 9%, All DEF 80`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 9 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "overwhelming-phantasmist",
      name: "Overwhelming Phantasmist",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 9%, Knockback Resistance 25`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 9 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "conspicuous-phantasmist",
      name: "Conspicuous Phantasmist",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 9%, Aggro Adjustment 40`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "soundless-phantasmist",
      name: "Soundless Phantasmist",
      kind: "general",
      grade: 6,
      description: `Immaterial Boost 9%, Aggro Adjustment -40`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 9 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "mighty-guardian",
      name: "MIghty Guardian",
      kind: "general",
      grade: 6,
      description: `Slash DEF 200, Pierce DEF 200, Crush DEF 200, Knockback Resistance 40`,
      effects: [
        { stat: "slashDef", type: "flat", value: 200 },
        { stat: "pierceDef", type: "flat", value: 200 },
        { stat: "crushDef", type: "flat", value: 200 },
        { stat: "knockbackRes", type: "flat", value: 40 },
      ],
    },
    {
      id: "provocative-guardian",
      name: "Provocative Guardian",
      kind: "general",
      grade: 6,
      description: `Slash DEF 200, Pierce DEF 200, Crush DEF 200, Aggro Adjustment 40`,
      effects: [
        { stat: "slashDef", type: "flat", value: 200 },
        { stat: "pierceDef", type: "flat", value: 200 },
        { stat: "crushDef", type: "flat", value: 200 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "quiet-guardian",
      name: "Quiet Guardian",
      kind: "general",
      grade: 6,
      description: `Slash DEF 200, Pierce DEF 200, Crush DEF 200, Aggro Adjustment -40`,
      effects: [
        { stat: "slashDef", type: "flat", value: 200 },
        { stat: "pierceDef", type: "flat", value: 200 },
        { stat: "crushDef", type: "flat", value: 200 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "pressing-rampart",
      name: "Pressing Rampart",
      kind: "general",
      grade: 6,
      description: `Heat DEF 200, Cold DEF 200, Electric DEF 200, Poison DEF 200, Immaterial DEF 200, Knockback Resistance 25`,
      effects: [
        { stat: "heatDef", type: "flat", value: 200 },
        { stat: "coldDef", type: "flat", value: 200 },
        { stat: "electricDef", type: "flat", value: 200 },
        { stat: "poisonDef", type: "flat", value: 200 },
        { stat: "immaterialDef", type: "flat", value: 200 },
        { stat: "knockbackRes", type: "flat", value: 25 },
      ],
    },
    {
      id: "imposing-rampart",
      name: "Imposing Rampart",
      kind: "general",
      grade: 6,
      description: `Heat DEF 200, Cold DEF 200, Electric DEF 200, Poison DEF 200, Immaterial DEF 200, Aggro Adjustment 40`,
      effects: [
        { stat: "heatDef", type: "flat", value: 200 },
        { stat: "coldDef", type: "flat", value: 200 },
        { stat: "electricDef", type: "flat", value: 200 },
        { stat: "poisonDef", type: "flat", value: 200 },
        { stat: "immaterialDef", type: "flat", value: 200 },
        { stat: "aggroAdj", type: "flat", value: 40 },
      ],
    },
    {
      id: "unseen-rampart",
      name: "Unseen Rampart",
      kind: "general",
      grade: 6,
      description: `Heat DEF 200, Cold DEF 200, Electric DEF 200, Poison DEF 200, Immaterial DEF 200, Aggro Adjustment -40`,
      effects: [
        { stat: "heatDef", type: "flat", value: 200 },
        { stat: "coldDef", type: "flat", value: 200 },
        { stat: "electricDef", type: "flat", value: 200 },
        { stat: "poisonDef", type: "flat", value: 200 },
        { stat: "immaterialDef", type: "flat", value: 200 },
        { stat: "aggroAdj", type: "flat", value: -40 },
      ],
    },
    {
      id: "overwhelming-fortress",
      name: "Overwhelming Fortress",
      kind: "general",
      grade: 6,
      description: `Knockback Resistance 40, All DEF 160`,
      effects: [
        { stat: "knockbackRes", type: "flat", value: 40 },
        { stat: "allDef", type: "flat", value: 160 },
      ],
    },
    {
      id: "conspicuous-fortress",
      name: "Conspicuous Fortress",
      kind: "general",
      grade: 6,
      description: `Aggro Adjustment 40, All DEF 160`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 40 },
        { stat: "allDef", type: "flat", value: 160 },
      ],
    },
    {
      id: "soundless-fortress",
      name: "Soundless Fortress",
      kind: "general",
      grade: 6,
      description: `Aggro Adjustment -40, All DEF 160`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: -40 },
        { stat: "allDef", type: "flat", value: 160 },
      ],
    },
    {
      id: "menacing-mighty-champion",
      name: "Menacing Mighty Champion",
      kind: "general",
      grade: 6,
      description: `Aggro Adjustment 40, Knockback Resistance 50`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 40 },
        { stat: "knockbackRes", type: "flat", value: 50 },
      ],
    },
    {
      id: "serene-mighty-champion",
      name: "Serene Mighty Champion",
      kind: "general",
      grade: 6,
      description: `Aggro Adjustment -40, Knockback Resistance 50`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: -40 },
        { stat: "knockbackRes", type: "flat", value: 50 },
      ],
    },
  // ==== Tier 5 ====
    {
      id: "relentless-undying",
      name: "Relentless Undying",
      kind: "general",
      grade: 5,
      description: `Max HP 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "restless-dancer",
      name: "Restless Dancer",
      kind: "general",
      grade: 5,
      description: `Evade 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "evade", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "unceasing-gunner",
      name: "Unceasing Gunner",
      kind: "general",
      grade: 5,
      description: `Accuracy 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "vigorous-fighter",
      name: "Vigorous Fighter",
      kind: "general",
      grade: 5,
      description: `Melee ATK 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "unceasing-deadeye",
      name: "Unceasing Deadeye",
      kind: "general",
      grade: 5,
      description: `Ranged ATK 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "energetic-archmage",
      name: "Energetic Archmage",
      kind: "general",
      grade: 5,
      description: `Magic ATK 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "steadfast-sprinter",
      name: "Steadfast Sprinter",
      kind: "general",
      grade: 5,
      description: `AP Recovery 3.5%, SPD 4%`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 3.5 },
        { stat: "spd", type: "percent", value: 4 },
      ],
    },
    {
      id: "unceasing-vanguard",
      name: "Unceasing Vanguard",
      kind: "general",
      grade: 5,
      description: `Starting AP 4, AP Recovery 3.5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "energetic-gambler",
      name: "Energetic Gambler",
      kind: "general",
      grade: 5,
      description: `Crit Rate 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "tireless-executioner",
      name: "Tireless Executioner",
      kind: "general",
      grade: 5,
      description: `Crit DMG 8%, AP Recovery 3.5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 8 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "relentless-swordsman",
      name: "Relentless Swordsman",
      kind: "general",
      grade: 5,
      description: `Slash Boost 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "tireless-sharpshooter",
      name: "Tireless Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "energetic-striker",
      name: "Energetic Striker",
      kind: "general",
      grade: 5,
      description: `Crush Boost 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "unceasing-flamecaster",
      name: "Unceasing Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "vigorous-frostmancer",
      name: "Vigorous Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "restless-lightning-mage",
      name: "Restless Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "steadfast-venomcaster",
      name: "Steadfast Venomcaster",
      kind: "general",
      grade: 5,
      description: `Poison Boost 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "diligent-illusionist",
      name: "Diligent Illusionist",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 4%, AP Recovery 3.5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 4 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "restless-defender",
      name: "Restless Defender",
      kind: "general",
      grade: 5,
      description: `Slash DEF 75, Pierce DEF 75, Crush DEF 75, AP Recovery 3.5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "steadfast-protector",
      name: "Steadfast Protector",
      kind: "general",
      grade: 5,
      description: `Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75, AP Recovery 3.5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
        { stat: "apRecovery", type: "percent", value: 3.5 },
      ],
    },
    {
      id: "diligent-bulwark",
      name: "Diligent Bulwark",
      kind: "general",
      grade: 5,
      description: `AP Recovery 3.5%, All DEF 60`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 3.5 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "pressing-skirmisher",
      name: "Pressing Skirmisher",
      kind: "general",
      grade: 5,
      description: `AP Recovery 3.5%, Knockback Resistance 20`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 3.5 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "attention-grabiing-skirmisher",
      name: "Attention-Grabiing Skirmisher",
      kind: "general",
      grade: 5,
      description: `AP Recovery 3.5%, Aggro Adjustment 30`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 3.5 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "stealthy-skirmisher",
      name: "Stealthy Skirmisher",
      kind: "general",
      grade: 5,
      description: `AP Recovery 3.5%, Aggro Adjustment -30`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 3.5 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "nimble-undying",
      name: "Nimble Undying",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, Evade 4%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "evade", type: "percent", value: 4 },
      ],
    },
    {
      id: "opportunistic-undying",
      name: "Opportunistic Undying",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, Accuracy 4%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "accuracy", type: "percent", value: 4 },
      ],
    },
    {
      id: "enduring-fighter",
      name: "Enduring Fighter",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, Melee ATK 4%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "meleeAtk", type: "percent", value: 4 },
      ],
    },
    {
      id: "persistent-deadeye",
      name: "Persistent Deadeye",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, Ranged ATK 4%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "rangedAtk", type: "percent", value: 4 },
      ],
    },
    {
      id: "unfallen-archmage",
      name: "Unfallen Archmage",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, Magic ATK 4%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "magicAtk", type: "percent", value: 4 },
      ],
    },
    {
      id: "agile-undying",
      name: "Agile Undying",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, SPD 4%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "spd", type: "percent", value: 4 },
      ],
    },
    {
      id: "preemptive-undying",
      name: "Preemptive Undying",
      kind: "general",
      grade: 5,
      description: `Starting AP 4, Max HP 7%`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "watchful-undying",
      name: "Watchful Undying",
      kind: "general",
      grade: 5,
      description: `Crit Rate 4%, Max HP 7%`,
      effects: [
        { stat: "critRate", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "deadly-undying",
      name: "Deadly Undying",
      kind: "general",
      grade: 5,
      description: `Crit DMG 8%, Max HP 7%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 8 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "sturdy-swordsman",
      name: "Sturdy Swordsman",
      kind: "general",
      grade: 5,
      description: `Slash Boost 4%, Max HP 7%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "resilient-sharpshooter",
      name: "Resilient Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 4%, Max HP 7%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "persistent-striker",
      name: "Persistent Striker",
      kind: "general",
      grade: 5,
      description: `Crush Boost 4%, Max HP 7%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "persistent-flamecaster",
      name: "Persistent Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 4%, Max HP 7%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "resolute-frostmancer",
      name: "Resolute Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 4%, Max HP 7%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "resolute-lightning-mage",
      name: "Resolute Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 4%, Max HP 7%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "tenacious-venomcaster",
      name: "Tenacious Venomcaster",
      kind: "general",
      grade: 5,
      description: `Poison Boost 4%, Max HP 7%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "tenacious-illusionist",
      name: "Tenacious Illusionist",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 4%, Max HP 7%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "resolute-defender",
      name: "Resolute Defender",
      kind: "general",
      grade: 5,
      description: `Slash DEF 75, Pierce DEF 75, Crush DEF 75, Max HP 7%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "tenacious-protector",
      name: "Tenacious Protector",
      kind: "general",
      grade: 5,
      description: `Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75, Max HP 7%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
        { stat: "maxHp", type: "percent", value: 7 },
      ],
    },
    {
      id: "tenacious-bulwark",
      name: "Tenacious Bulwark",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, All DEF 60`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "mighty-undying",
      name: "Mighty Undying",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, Knockback Resistance 20`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "provocative-undying",
      name: "Provocative Undying",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "quiet-undying",
      name: "Quiet Undying",
      kind: "general",
      grade: 5,
      description: `Max HP 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "maxHp", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "flexible-gunner",
      name: "Flexible Gunner",
      kind: "general",
      grade: 5,
      description: `Accuracy 4%, Evade 7%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "flexible-fighter",
      name: "Flexible Fighter",
      kind: "general",
      grade: 5,
      description: `Melee ATK 4%, Evade 7%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "agile-deadeye",
      name: "Agile Deadeye",
      kind: "general",
      grade: 5,
      description: `Ranged ATK 4%, Evade 7%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "wind-swift-archmage",
      name: "Wind-Swift Archmage",
      kind: "general",
      grade: 5,
      description: `Magic ATK 4%, Evade 7%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "dashing-dancer",
      name: "Dashing Dancer",
      kind: "general",
      grade: 5,
      description: `Evade 7%, SPD 4%`,
      effects: [
        { stat: "evade", type: "percent", value: 7 },
        { stat: "spd", type: "percent", value: 4 },
      ],
    },
    {
      id: "agile-vanguard",
      name: "Agile Vanguard",
      kind: "general",
      grade: 5,
      description: `Starting AP 4, Evade 7%`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "wind-swift-gambler",
      name: "Wind-Swift Gambler",
      kind: "general",
      grade: 5,
      description: `Crit Rate 4%, Evade 7%`,
      effects: [
        { stat: "critRate", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "agile-executioner",
      name: "Agile Executioner",
      kind: "general",
      grade: 5,
      description: `Crit DMG 8%, Evade 7%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 8 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "nimble-swordsman",
      name: "Nimble Swordsman",
      kind: "general",
      grade: 5,
      description: `Slash Boost 4%, Evade 7%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "gliding-sharpshooter",
      name: "Gliding Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 4%, Evade 7%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "wind-swift-striker",
      name: "Wind-Swift Striker",
      kind: "general",
      grade: 5,
      description: `Crush Boost 4%, Evade 7%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "agile-flamecaster",
      name: "Agile Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 4%, Evade 7%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "flexible-frostmancer",
      name: "Flexible Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 4%, Evade 7%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "swift-lightning-mage",
      name: "Swift Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 4%, Evade 7%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "swift-venomcaster",
      name: "Swift Venomcaster",
      kind: "general",
      grade: 5,
      description: `Poison Boost 4%, Evade 7%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "swift-illusionist",
      name: "Swift Illusionist",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 4%, Evade 7%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 4 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "dancing-defender",
      name: "Dancing Defender",
      kind: "general",
      grade: 5,
      description: `Slash DEF 75, Pierce DEF 75, Crush DEF 75, Evade 7%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "swift-protector",
      name: "Swift Protector",
      kind: "general",
      grade: 5,
      description: `Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75, Evade 7%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
        { stat: "evade", type: "percent", value: 7 },
      ],
    },
    {
      id: "swift-bulwark",
      name: "Swift Bulwark",
      kind: "general",
      grade: 5,
      description: `Evade 7%, All DEF 60`,
      effects: [
        { stat: "evade", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "powerful-dancer",
      name: "Powerful Dancer",
      kind: "general",
      grade: 5,
      description: `Evade 7%, Knockback Resistance 20`,
      effects: [
        { stat: "evade", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "frontline-dancer",
      name: "Frontline Dancer",
      kind: "general",
      grade: 5,
      description: `Evade 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "evade", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "silent-dancer",
      name: "Silent Dancer",
      kind: "general",
      grade: 5,
      description: `Evade 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "evade", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "perceptive-fighter",
      name: "Perceptive Fighter",
      kind: "general",
      grade: 5,
      description: `Melee ATK 4%, Accuracy 7%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "perceptive-deadeye",
      name: "Perceptive Deadeye",
      kind: "general",
      grade: 5,
      description: `Ranged ATK 4%, Accuracy 7%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "precise-archmage",
      name: "Precise Archmage",
      kind: "general",
      grade: 5,
      description: `Magic ATK 4%, Accuracy 7%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "dashing-gunner",
      name: "Dashing Gunner",
      kind: "general",
      grade: 5,
      description: `Accuracy 7%, SPD 4%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 7 },
        { stat: "spd", type: "percent", value: 4 },
      ],
    },
    {
      id: "perceptive-vanguard",
      name: "Perceptive Vanguard",
      kind: "general",
      grade: 5,
      description: `Starting AP 4, Accuracy 7%`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "perceptive-gambler",
      name: "Perceptive Gambler",
      kind: "general",
      grade: 5,
      description: `Crit Rate 4%, Accuracy 7%`,
      effects: [
        { stat: "critRate", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "perceptive-executioner",
      name: "Perceptive Executioner",
      kind: "general",
      grade: 5,
      description: `Crit DMG 8%, Accuracy 7%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 8 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "opportunistic-swordsman",
      name: "Opportunistic Swordsman",
      kind: "general",
      grade: 5,
      description: `Slash Boost 4%, Accuracy 7%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "perceptive-sharpshooter",
      name: "Perceptive Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 4%, Accuracy 7%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "perceptive-striker",
      name: "Perceptive Striker",
      kind: "general",
      grade: 5,
      description: `Crush Boost 4%, Accuracy 7%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "reliable-flamecaster",
      name: "Reliable Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 4%, Accuracy 7%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "perceptive-frostmancer",
      name: "Perceptive Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 4%, Accuracy 7%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "reliable-lightning-mage",
      name: "Reliable Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 4%, Accuracy 7%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "precise-venomcaster",
      name: "Precise Venomcaster",
      kind: "general",
      grade: 5,
      description: `Poison Boost 4%, Accuracy 7%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "accurate-illusionist",
      name: "Accurate Illusionist",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 4%, Accuracy 7%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 4 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "reliable-defender",
      name: "Reliable Defender",
      kind: "general",
      grade: 5,
      description: `Slash DEF 75, Pierce DEF 75, Crush DEF 75, Accuracy 7%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "precise-protector",
      name: "Precise Protector",
      kind: "general",
      grade: 5,
      description: `Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75, Accuracy 7%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "accurate-bulwark",
      name: "Accurate Bulwark",
      kind: "general",
      grade: 5,
      description: `Accuracy 7%, All DEF 60`,
      effects: [
        { stat: "accuracy", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "impactful-gunner",
      name: "Impactful Gunner",
      kind: "general",
      grade: 5,
      description: `Accuracy 7%, Knockback Resistance 20`,
      effects: [
        { stat: "accuracy", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "frontline-gunner",
      name: "Frontline Gunner",
      kind: "general",
      grade: 5,
      description: `Accuracy 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "accuracy", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "serene-gunner",
      name: "Serene Gunner",
      kind: "general",
      grade: 5,
      description: `Accuracy 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "accuracy", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "resilient-deadeye",
      name: "Resilient Deadeye",
      kind: "general",
      grade: 5,
      description: `Melee ATK 7%, Ranged ATK 4%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 7 },
        { stat: "rangedAtk", type: "percent", value: 4 },
      ],
    },
    {
      id: "furious-archmage",
      name: "Furious Archmage",
      kind: "general",
      grade: 5,
      description: `Melee ATK 7%, Magic ATK 4%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 7 },
        { stat: "magicAtk", type: "percent", value: 4 },
      ],
    },
    {
      id: "dashing-fighter",
      name: "Dashing Fighter",
      kind: "general",
      grade: 5,
      description: `Melee ATK 7%, SPD 4%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 7 },
        { stat: "spd", type: "percent", value: 4 },
      ],
    },
    {
      id: "hasty-fighter",
      name: "Hasty Fighter",
      kind: "general",
      grade: 5,
      description: `Starting AP 4, Melee ATK 7%`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "quick-witted-fighter",
      name: "Quick-Witted Fighter",
      kind: "general",
      grade: 5,
      description: `Crit Rate 4%, Melee ATK 7%`,
      effects: [
        { stat: "critRate", type: "percent", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "decisive-fighter",
      name: "Decisive Fighter",
      kind: "general",
      grade: 5,
      description: `Crit DMG 8%, Melee ATK 7%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 8 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "one-slash-fighter",
      name: "One-Slash Fighter",
      kind: "general",
      grade: 5,
      description: `Slash Boost 4%, Melee ATK 7%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "single-shot-fighter",
      name: "Single-Shot Fighter",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 4%, Melee ATK 7%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "overhead-smashing-fighter",
      name: "Overhead-Smashing Fighter",
      kind: "general",
      grade: 5,
      description: `Crush Boost 4%, Melee ATK 7%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "smoldering-fighter",
      name: "Smoldering FIghter",
      kind: "general",
      grade: 5,
      description: `Heat Boost 4%, Melee ATK 7%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "cold-fighter",
      name: "Cold FIghter",
      kind: "general",
      grade: 5,
      description: `Cold Boost 4%, Melee ATK 7%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "sparking-fighter",
      name: "Sparking Fighter",
      kind: "general",
      grade: 5,
      description: `Electric Boost 4%, Melee ATK 7%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "creeping-fighter",
      name: "Creeping Fighter",
      kind: "general",
      grade: 5,
      description: `Poison Boost 4%, Melee ATK 7%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "elusive-fighter",
      name: "Elusive Fighter",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 4%, Melee ATK 7%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 4 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "armored-fighter",
      name: "Armored Fighter",
      kind: "general",
      grade: 5,
      description: `Slash DEF 75, Pierce DEF 75, Crush DEF 75, Melee ATK 7%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "unbroken-fighter",
      name: "Unbroken Fighter",
      kind: "general",
      grade: 5,
      description: `Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75, Melee ATK 7%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
        { stat: "meleeAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "immortal-fighter",
      name: "Immortal Fighter",
      kind: "general",
      grade: 5,
      description: `Melee ATK 7%, All DEF 60`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "impactful-fighter",
      name: "Impactful FIghter",
      kind: "general",
      grade: 5,
      description: `Melee ATK 7%, Knockback Resistance 20`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "high-momentum-fighter",
      name: "High- Momentum Fighter",
      kind: "general",
      grade: 5,
      description: `Melee ATK 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "serene-fighter",
      name: "Serene Fighter",
      kind: "general",
      grade: 5,
      description: `Melee ATK 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "one-hit-archmage",
      name: "One-Hit Archmage",
      kind: "general",
      grade: 5,
      description: `Ranged ATK 7%, Magic ATK 4%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 7 },
        { stat: "magicAtk", type: "percent", value: 4 },
      ],
    },
    {
      id: "fleet-footed-deadeye",
      name: "Fleet-Footed Deadeye",
      kind: "general",
      grade: 5,
      description: `Ranged ATK 7%, SPD 4%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 7 },
        { stat: "spd", type: "percent", value: 4 },
      ],
    },
    {
      id: "quick-deploying-deadeye",
      name: "Quick-Deploying Deadeye",
      kind: "general",
      grade: 5,
      description: `Starting AP 4, Ranged ATK 7%`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "quick-witted-deadeye",
      name: "Quick-Witted Deadeye",
      kind: "general",
      grade: 5,
      description: `Crit Rate 4%, Ranged ATK 7%`,
      effects: [
        { stat: "critRate", type: "percent", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "lethal-deadeye",
      name: "Lethal Deadeye",
      kind: "general",
      grade: 5,
      description: `Crit DMG 8%, Ranged ATK 7%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 8 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "razorwind-deadeye",
      name: "Razorwind Deadeye",
      kind: "general",
      grade: 5,
      description: `Slash Boost 4%, Ranged ATK 7%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "vital-piercing-deadeye",
      name: "Vital-Piercing Deadeye",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 4%, Ranged ATK 7%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "heavy-hitting-deadeye",
      name: "Heavy-Hitting Deadeye",
      kind: "general",
      grade: 5,
      description: `Crush Boost 4%, Ranged ATK 7%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "flame-wreathed-deadeye",
      name: "Flame-Wreathed Deadeye",
      kind: "general",
      grade: 5,
      description: `Heat Boost 4%, Ranged ATK 7%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "frost-laden-deadeye",
      name: "Frost-Laden Deadeye",
      kind: "general",
      grade: 5,
      description: `Cold Boost 4%, Ranged ATK 7%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "shocking-deadeye",
      name: "Shocking Deadeye",
      kind: "general",
      grade: 5,
      description: `Electric Boost 4%, Ranged ATK 7%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "toxic-deadeye",
      name: "Toxic Deadeye",
      kind: "general",
      grade: 5,
      description: `Poison Boost 4%, Ranged ATK 7%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "mysterious-deadeye",
      name: "Mysterious Deadeye",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 4%, Ranged ATK 7%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 4 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "unshakable-deadeye",
      name: "Unshakable Deadeye",
      kind: "general",
      grade: 5,
      description: `Slash DEF 75, Pierce DEF 75, Crush DEF 75, Ranged ATK 7%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "unbroken-deadeye",
      name: "Unbroken Deadeye",
      kind: "general",
      grade: 5,
      description: `Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75, Ranged ATK 7%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
        { stat: "rangedAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "flawless-deadeye",
      name: "Flawless Deadeye",
      kind: "general",
      grade: 5,
      description: `Ranged ATK 7%, All DEF 60`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "overwhelming-deadeye",
      name: "Overwhelming Deadeye",
      kind: "general",
      grade: 5,
      description: `Ranged ATK 7%, Knockback Resistance 20`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "menacing-deadeye",
      name: "Menacing Deadeye",
      kind: "general",
      grade: 5,
      description: `Ranged ATK 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "serene-deadeye",
      name: "Serene Deadeye",
      kind: "general",
      grade: 5,
      description: `Ranged ATK 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "fleet-footed-archmage",
      name: "Fleet-Footed Archmage",
      kind: "general",
      grade: 5,
      description: `Magic ATK 7%, SPD 4%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 7 },
        { stat: "spd", type: "percent", value: 4 },
      ],
    },
    {
      id: "quick-starting-archmage",
      name: "Quick-Starting Archmage",
      kind: "general",
      grade: 5,
      description: `Starting AP 4, Magic ATK 7%`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "watchful-archmage",
      name: "Watchful Archmage",
      kind: "general",
      grade: 5,
      description: `Crit Rate 4%, Magic ATK 7%`,
      effects: [
        { stat: "critRate", type: "percent", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "merciless-archmage",
      name: "Merciless Archmage",
      kind: "general",
      grade: 5,
      description: `Crit DMG 8%, Magic ATK 7%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 8 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "flash-fast-archmage",
      name: "Flash-Fast Archmage",
      kind: "general",
      grade: 5,
      description: `Slash Boost 4%, Magic ATK 7%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "dead-aim-archmage",
      name: "Dead-Aim Archmage",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 4%, Magic ATK 7%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "shattering-archmage",
      name: "Shattering Archmage",
      kind: "general",
      grade: 5,
      description: `Crush Boost 4%, Magic ATK 7%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "fiery-archmage",
      name: "Fiery Archmage",
      kind: "general",
      grade: 5,
      description: `Heat Boost 4%, Magic ATK 7%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "ruthless-archmage",
      name: "Ruthless Archmage",
      kind: "general",
      grade: 5,
      description: `Cold Boost 4%, Magic ATK 7%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "thunderous-archmage",
      name: "Thunderous Archmage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 4%, Magic ATK 7%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "venomous-archmage",
      name: "Venomous Archmage",
      kind: "general",
      grade: 5,
      description: `Poison Boost 4%, Magic ATK 7%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "incorporeal-archmage",
      name: "Incorporeal Archmage",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 4%, Magic ATK 7%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 4 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "steadfast-archmage",
      name: "Steadfast Archmage",
      kind: "general",
      grade: 5,
      description: `Slash DEF 75, Pierce DEF 75, Crush DEF 75, Magic ATK 7%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "blocking-archmage",
      name: "Blocking Archmage",
      kind: "general",
      grade: 5,
      description: `Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75, Magic ATK 7%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
        { stat: "magicAtk", type: "percent", value: 7 },
      ],
    },
    {
      id: "impregnable-archmage",
      name: "Impregnable Archmage",
      kind: "general",
      grade: 5,
      description: `Magic ATK 7%, All DEF 60`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "overwhelming-archmage",
      name: "Overwhelming Archmage",
      kind: "general",
      grade: 5,
      description: `Magic ATK 7%, Knockback Resistance 20`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "conspicuous-archmage",
      name: "Conspicuous Archmage",
      kind: "general",
      grade: 5,
      description: `Magic ATK 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "soundless-archmage",
      name: "Soundless Archmage",
      kind: "general",
      grade: 5,
      description: `Magic ATK 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "fleet-footed-vanguard",
      name: "Fleet-Footed Vanguard",
      kind: "general",
      grade: 5,
      description: `Starting AP 4, SPD 7%`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "fleet-footed-gambler",
      name: "Fleet-Footed Gambler",
      kind: "general",
      grade: 5,
      description: `Crit Rate 4%, SPD 7%`,
      effects: [
        { stat: "critRate", type: "percent", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "restless-executioner",
      name: "Restless Executioner",
      kind: "general",
      grade: 5,
      description: `Crit DMG 8%, SPD 7%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 8 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "agile-swordsman",
      name: "Agile Swordsman",
      kind: "general",
      grade: 5,
      description: `Slash Boost 4%, SPD 7%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "restless-sharpshooter",
      name: "Restless Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 4%, SPD 7%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "fleet-footed-striker",
      name: "Fleet-Footed Striker",
      kind: "general",
      grade: 5,
      description: `Crush Boost 4%, SPD 7%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "fleet-footed-flamecaster",
      name: "Fleet-Footed Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 4%, SPD 7%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "dashing-frostmancer",
      name: "Dashing Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 4%, SPD 7%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "dashing-lightning-mage",
      name: "Dashing Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 4%, SPD 7%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "dashing-venomcaster",
      name: "Dashing Venomcaster",
      kind: "general",
      grade: 5,
      description: `Poison Boost 4%, SPD 7%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "restless-illusionist",
      name: "Restless Illusionist",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 4%, SPD 7%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 4 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "dashing-defender",
      name: "Dashing Defender",
      kind: "general",
      grade: 5,
      description: `Slash DEF 75, Pierce DEF 75, Crush DEF 75, SPD 7%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "restless-protector",
      name: "Restless Protector",
      kind: "general",
      grade: 5,
      description: `Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75, SPD 7%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
        { stat: "spd", type: "percent", value: 7 },
      ],
    },
    {
      id: "restless-bulwark",
      name: "Restless Bulwark",
      kind: "general",
      grade: 5,
      description: `SPD 7%, All DEF 60`,
      effects: [
        { stat: "spd", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "forceful-sprinter",
      name: "Forceful Sprinter",
      kind: "general",
      grade: 5,
      description: `SPD 7%, Knockback Resistance 20`,
      effects: [
        { stat: "spd", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "confident-sprinter",
      name: "Confident Sprinter",
      kind: "general",
      grade: 5,
      description: `SPD 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "spd", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "vanishing-sprinter",
      name: "Vanishing Sprinter",
      kind: "general",
      grade: 5,
      description: `SPD 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "spd", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "quick-deploying-gambler",
      name: "Quick-Deploying Gambler",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Crit Rate 4%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "critRate", type: "percent", value: 4 },
      ],
    },
    {
      id: "one-step-ahead-executioner",
      name: "One Step Ahead Executioner",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Crit DMG 8%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "critDmg", type: "percent", value: 8 },
      ],
    },
    {
      id: "preemptive-swordsman",
      name: "Preemptive Swordsman",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Slash Boost 4%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "slashBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "one-step-ahead-sharpshooter",
      name: "One Step Ahead Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Pierce Boost 4%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "pierceBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "quick-deploying-striker",
      name: "Quick-Deploying Striker",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Crush Boost 4%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "crushBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "hasty-flamecaster",
      name: "Hasty Flamecaster",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Heat Boost 4%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "heatBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "hasty-frostmancer",
      name: "Hasty Frostmancer",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Cold Boost 4%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "coldBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "leading-lightning-mage",
      name: "Leading Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Electric Boost 4%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "electricBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "leading-venomcaster",
      name: "Leading Venomcaster",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Poison Boost 4%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "poisonBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "quick-illusionist",
      name: "Quick Illusionist",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Immaterial Boost 4%`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "immaterialBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "quick-starting-defender",
      name: "Quick-Starting Defender",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "leading-protector",
      name: "Leading Protector",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "quick-bulwark",
      name: "Quick Bulwark",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, All DEF 60`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "overwhelming-vanguard",
      name: "Overwhelming Vanguard",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Knockback Resistance 20`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "menacing-vanguard",
      name: "Menacing Vanguard",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Aggro Adjustment 30`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "serene-vanguard",
      name: "Serene Vanguard",
      kind: "general",
      grade: 5,
      description: `Starting AP 7, Aggro Adjustment -30`,
      effects: [
        { stat: "startAp", type: "flat", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "watchful-executioner",
      name: "Watchful Executioner",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Crit DMG 8%`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "critDmg", type: "percent", value: 8 },
      ],
    },
    {
      id: "watchful-swordsman",
      name: "Watchful Swordsman",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Slash Boost 4%`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "slashBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "watchful-sharpshooter",
      name: "Watchful Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Pierce Boost 4%`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "pierceBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "watchful-striker",
      name: "Watchful Striker",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Crush Boost 4%`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "crushBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "alert-flamecaster",
      name: "Alert Flamecaster",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Heat Boost 4%`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "heatBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "quick-witted-frostmancer",
      name: "Quick-Witted Frostmancer",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Cold Boost 4%`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "coldBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "keen-lightning-mage",
      name: "Keen Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Electric Boost 4%`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "electricBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "kenn-venomcaster",
      name: "Kenn Venomcaster",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Poison Boost 4%`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "poisonBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "keen-illusionist",
      name: "Keen Illusionist",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Immaterial Boost 4%`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "immaterialBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "alert-defender",
      name: "Alert Defender",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "keen-protector",
      name: "Keen Protector",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "keen-bulwark",
      name: "Keen Bulwark",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, All DEF 60`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "overwhelming-gambler",
      name: "Overwhelming Gambler",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Knockback Resistance 20`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "conspicuous-gambler",
      name: "Conspicuous Gambler",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "untraceable-gambler",
      name: "Untraceable Gambler",
      kind: "general",
      grade: 5,
      description: `Crit Rate 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "critRate", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "deadly-swordsman",
      name: "Deadly Swordsman",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Slash Boost 4%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "slashBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "resolute-sharpshooter",
      name: "Resolute Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Pierce Boost 4%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "pierceBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "merciless-striker",
      name: "Merciless Striker",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Crush Boost 4%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "crushBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "decisive-flamecaster",
      name: "Decisive Flamecaster",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Heat Boost 4%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "heatBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "decisive-frostmancer",
      name: "Decisive Frostmancer",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Cold Boost 4%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "coldBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "fierce-lightning-mage",
      name: "Fierce Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Electric Boost 4%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "electricBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "ruthless-venomcaster",
      name: "Ruthless Venomcaster",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Poison Boost 4%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "poisonBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "ferocious-illusionist",
      name: "Ferocious Illusionist",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Immaterial Boost 4%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "immaterialBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "fierce-defender",
      name: "Fierce Defender",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "ruthless-protector",
      name: "Ruthless Protector",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "ferocious-bulwark",
      name: "Ferocious Bulwark",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, All DEF 60`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "pressing-executioner",
      name: "Pressing Executioner",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Knockback Resistance 20`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "menacing-executioner",
      name: "Menacing Executioner",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Aggro Adjustment 30`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "unseen-executioner",
      name: "Unseen Executioner",
      kind: "general",
      grade: 5,
      description: `Crit DMG 14%, Aggro Adjustment -30`,
      effects: [
        { stat: "critDmg", type: "percent", value: 14 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "clean-cutting-defender",
      name: "Clean-Cutting Defender",
      kind: "general",
      grade: 5,
      description: `Slash Boost 7%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "clean-cutting-protector",
      name: "Clean-Cutting Protector",
      kind: "general",
      grade: 5,
      description: `Slash Boost 7%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "razorwind-bulwark",
      name: "Razorwind Bulwark",
      kind: "general",
      grade: 5,
      description: `Slash Boost 7%, All DEF 60`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "mighty-swordsman",
      name: "Mighty Swordsman",
      kind: "general",
      grade: 5,
      description: `Slash Boost 7%, Knockback Resistance 20`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "provocative-swordsman",
      name: "Provocative Swordsman",
      kind: "general",
      grade: 5,
      description: `Slash Boost 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "quiet-swordsman",
      name: "Quiet Swordsman",
      kind: "general",
      grade: 5,
      description: `Slash Boost 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "single-shot-defender",
      name: "Single-Shot Defender",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 7%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "penetrating-protector",
      name: "Penetrating Protector",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 7%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "penetrating-bulwark",
      name: "Penetrating Bulwark",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 7%, All DEF 60`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "pressing-sharpshooter",
      name: "Pressing Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 7%, Knockback Resistance 20`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "imposing-sharpshooter",
      name: "Imposing Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "soundless-sharpshooter",
      name: "Soundless Sharpshooter",
      kind: "general",
      grade: 5,
      description: `Pierce Boost 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "resonant-defender",
      name: "Resonant Defender",
      kind: "general",
      grade: 5,
      description: `Crush Boost 7%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "vibrating-protector",
      name: "Vibrating Protector",
      kind: "general",
      grade: 5,
      description: `Crush Boost 7%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "overpowering-bulwark",
      name: "Overpowering Bulwark",
      kind: "general",
      grade: 5,
      description: `Crush Boost 7%, Knockback Resistance 20, All DEF 60`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "overwhelming-striker",
      name: "Overwhelming Striker",
      kind: "general",
      grade: 5,
      description: `Crush Boost 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "conspicuous-striker",
      name: "Conspicuous Striker",
      kind: "general",
      grade: 5,
      description: `Crush Boost 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "vanishing-striker",
      name: "Vanishing Striker",
      kind: "general",
      grade: 5,
      description: `Crush Boost 7%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 7 },
      ],
    },
    {
      id: "frost-laden-flamecaster",
      name: "Frost-Laden Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, Cold Boost 4%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "coldBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "shocking-flamecaster",
      name: "Shocking Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, Electric Boost 4%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "electricBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "toxic-flamecaster",
      name: "Toxic Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, Poison Boost 4%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "poisonBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "elusive-flamecaster",
      name: "Elusive Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, Immaterial Boost 4%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "immaterialBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "ember-lit-defender",
      name: "Ember-Lit Defender",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "fiery-protector",
      name: "Fiery Protector",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "burning-bulwark",
      name: "Burning Bulwark",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, All DEF 60`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "overwhelming-flamecaster",
      name: "Overwhelming Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, Knockback Resistance 20`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "menacing-flamecaster",
      name: "Menacing Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "serene-flamecaster",
      name: "Serene Flamecaster",
      kind: "general",
      grade: 5,
      description: `Heat Boost 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "lightning-fast-frostmancer",
      name: "Lightning-Fast Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 7%, Electric Boost 4%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 7 },
        { stat: "electricBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "deadly-frostmancer",
      name: "Deadly Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 7%, Poison Boost 4%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 7 },
        { stat: "poisonBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "elusive-frostmancer",
      name: "Elusive Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 7%, Immaterial Boost 4%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 7 },
        { stat: "immaterialBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "freezing-defender",
      name: "Freezing Defender",
      kind: "general",
      grade: 5,
      description: `Cold Boost 7%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "frozen-protector",
      name: "Frozen Protector",
      kind: "general",
      grade: 5,
      description: `Cold Boost 7%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "frozen-bulwark",
      name: "Frozen Bulwark",
      kind: "general",
      grade: 5,
      description: `Cold Boost 7%, All DEF 60`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "powerful-frostmancer",
      name: "Powerful Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 7%, Knockback Resistance 20`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "confident-frostmancer",
      name: "Confident Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "silent-frostmancer",
      name: "Silent Frostmancer",
      kind: "general",
      grade: 5,
      description: `Cold Boost 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "deadly-lightning-mage",
      name: "Deadly Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 7%, Poison Boost 4%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 7 },
        { stat: "poisonBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "unfathomable-lightning-mage",
      name: "Unfathomable Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 7%, Immaterial Boost 4%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 7 },
        { stat: "immaterialBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "lightning-fast-defender",
      name: "Lightning-Fast Defender",
      kind: "general",
      grade: 5,
      description: `Electric Boost 7%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "high-voltage-protector",
      name: "High-Voltage Protector",
      kind: "general",
      grade: 5,
      description: `Electric Boost 7%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "flashing-bulwark",
      name: "Flashing Bulwark",
      kind: "general",
      grade: 5,
      description: `Electric Boost 7%, All DEF 60`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "powerful-lightning-mage",
      name: "Powerful Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 7%, Knockback Resistance 20`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "confident-lightning-mage",
      name: "Confident Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "silent-lightning-mage",
      name: "Silent Lightning Mage",
      kind: "general",
      grade: 5,
      description: `Electric Boost 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "unfathomable-venomcaster",
      name: "Unfathomable Venomcaster",
      kind: "general",
      grade: 5,
      description: `Poison Boost 7%, Immaterial Boost 4%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 7 },
        { stat: "immaterialBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "spreading-defender",
      name: "Spreading Defender",
      kind: "general",
      grade: 5,
      description: `Poison Boost 7%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "infiltrating-protector",
      name: "Infiltrating Protector",
      kind: "general",
      grade: 5,
      description: `Poison Boost 7%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "infiltrating-bulwark",
      name: "Infiltrating Bulwark",
      kind: "general",
      grade: 5,
      description: `Poison Boost 7%, All DEF 60`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "forceful-venomcaster",
      name: "Forceful Venomcaster",
      kind: "general",
      grade: 5,
      description: `Poison Boost 7%, Knockback Resistance 20`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "confident-venomcaster",
      name: "Confident Venomcaster",
      kind: "general",
      grade: 5,
      description: `Poison Boost 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "vanishing-venomcaster",
      name: "Vanishing Venomcaster",
      kind: "general",
      grade: 5,
      description: `Poison Boost 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "otherworldly-defender",
      name: "Otherworldly Defender",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 7%, Slash DEF 75, Pierce DEF 75, Crush DEF 75`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 7 },
        { stat: "slashDef", type: "flat", value: 75 },
        { stat: "pierceDef", type: "flat", value: 75 },
        { stat: "crushDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "unfathomable-protector",
      name: "Unfathomable Protector",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 7%, Heat DEF 75, Cold DEF 75, Electric DEF 75, Poison DEF 75, Immaterial DEF 75`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 7 },
        { stat: "heatDef", type: "flat", value: 75 },
        { stat: "coldDef", type: "flat", value: 75 },
        { stat: "electricDef", type: "flat", value: 75 },
        { stat: "poisonDef", type: "flat", value: 75 },
        { stat: "immaterialDef", type: "flat", value: 75 },
      ],
    },
    {
      id: "formless-bulwark",
      name: "Formless Bulwark",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 7%, All DEF 60`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 7 },
        { stat: "allDef", type: "flat", value: 60 },
      ],
    },
    {
      id: "mighty-illusionist",
      name: "Mighty Illusionist",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 7%, Knockback Resistance 20`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 7 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "attention-grabbing-illusionist",
      name: "Attention-Grabbing Illusionist",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 7%, Aggro Adjustment 30`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "stealthy-illusionist",
      name: "Stealthy Illusionist",
      kind: "general",
      grade: 5,
      description: `Immaterial Boost 7%, Aggro Adjustment -30`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 7 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "powerful-defender",
      name: "Powerful Defender",
      kind: "general",
      grade: 5,
      description: `Slash DEF 150, Pierce DEF 150, Crush DEF 150, Knockback Resistance 20`,
      effects: [
        { stat: "slashDef", type: "flat", value: 150 },
        { stat: "pierceDef", type: "flat", value: 150 },
        { stat: "crushDef", type: "flat", value: 150 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "frontline-defender",
      name: "Frontline Defender",
      kind: "general",
      grade: 5,
      description: `Slash DEF 150, Pierce DEF 150, Crush DEF 150, Aggro Adjustment 30`,
      effects: [
        { stat: "slashDef", type: "flat", value: 150 },
        { stat: "pierceDef", type: "flat", value: 150 },
        { stat: "crushDef", type: "flat", value: 150 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "silent-defender",
      name: "Silent Defender",
      kind: "general",
      grade: 5,
      description: `Slash DEF 150, Pierce DEF 150, Crush DEF 150, Aggro Adjustment -30`,
      effects: [
        { stat: "slashDef", type: "flat", value: 150 },
        { stat: "pierceDef", type: "flat", value: 150 },
        { stat: "crushDef", type: "flat", value: 150 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "forceful-protector",
      name: "Forceful Protector",
      kind: "general",
      grade: 5,
      description: `Heat DEF 150, Cold DEF 150, Electric DEF 150, Poison DEF 150, Immaterial DEF 150, Knockback Resistance 20`,
      effects: [
        { stat: "heatDef", type: "flat", value: 150 },
        { stat: "coldDef", type: "flat", value: 150 },
        { stat: "electricDef", type: "flat", value: 150 },
        { stat: "poisonDef", type: "flat", value: 150 },
        { stat: "immaterialDef", type: "flat", value: 150 },
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "confident-protector",
      name: "Confident Protector",
      kind: "general",
      grade: 5,
      description: `Heat DEF 150, Cold DEF 150, Electric DEF 150, Poison DEF 150, Immaterial DEF 150, Aggro Adjustment 30`,
      effects: [
        { stat: "heatDef", type: "flat", value: 150 },
        { stat: "coldDef", type: "flat", value: 150 },
        { stat: "electricDef", type: "flat", value: 150 },
        { stat: "poisonDef", type: "flat", value: 150 },
        { stat: "immaterialDef", type: "flat", value: 150 },
        { stat: "aggroAdj", type: "flat", value: 30 },
      ],
    },
    {
      id: "vanishing-protector",
      name: "Vanishing Protector",
      kind: "general",
      grade: 5,
      description: `Heat DEF 150, Cold DEF 150, Electric DEF 150, Poison DEF 150, Immaterial DEF 150, Aggro Adjustment -30`,
      effects: [
        { stat: "heatDef", type: "flat", value: 150 },
        { stat: "coldDef", type: "flat", value: 150 },
        { stat: "electricDef", type: "flat", value: 150 },
        { stat: "poisonDef", type: "flat", value: 150 },
        { stat: "immaterialDef", type: "flat", value: 150 },
        { stat: "aggroAdj", type: "flat", value: -30 },
      ],
    },
    {
      id: "forceful-bulwark",
      name: "Forceful Bulwark",
      kind: "general",
      grade: 5,
      description: `Knockback Resistance 20, All DEF 120`,
      effects: [
        { stat: "knockbackRes", type: "flat", value: 20 },
        { stat: "allDef", type: "flat", value: 120 },
      ],
    },
    {
      id: "attention-grabbing-bulwark",
      name: "Attention-Grabbing Bulwark",
      kind: "general",
      grade: 5,
      description: `Aggro Adjustment 30, All DEF 120`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 30 },
        { stat: "allDef", type: "flat", value: 120 },
      ],
    },
    {
      id: "stealthy-bulwark",
      name: "Stealthy Bulwark",
      kind: "general",
      grade: 5,
      description: `Aggro Adjustment 30, All DEF 120`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 30 },
        { stat: "allDef", type: "flat", value: 120 },
      ],
    },
    {
      id: "provocative-strongman",
      name: "Provocative Strongman",
      kind: "general",
      grade: 5,
      description: `Aggro Adjustment 30, Knockback Resistance 40`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 30 },
        { stat: "knockbackRes", type: "flat", value: 40 },
      ],
    },
    {
      id: "quiet-strongman",
      name: "Quiet Strongman",
      kind: "general",
      grade: 5,
      description: `Aggro Adjustment -30, Knockback Resistance 40`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: -30 },
        { stat: "knockbackRes", type: "flat", value: 40 },
      ],
    },
  // ==== Tier 4 ====
    {
      id: "restless-survivor",
      name: "Restless Survivor",
      kind: "general",
      grade: 4,
      description: `Max HP 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "energetic-acrobat",
      name: "Energetic Acrobat",
      kind: "general",
      grade: 4,
      description: `Evade 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "evade", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "tireless-hunter",
      name: "Tireless Hunter",
      kind: "general",
      grade: 4,
      description: `Accuracy 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "tireless-warrior",
      name: "Tireless Warrior",
      kind: "general",
      grade: 4,
      description: `Melee ATK 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "relentless-marksman",
      name: "Relentless Marksman",
      kind: "general",
      grade: 4,
      description: `Ranged ATK 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "diligent-mage",
      name: "Diligent Mage",
      kind: "general",
      grade: 4,
      description: `Magic ATK 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "unceasing-pursuer",
      name: "Unceasing Pursuer",
      kind: "general",
      grade: 4,
      description: `AP Recovery 2.5%, SPD 3%`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 2.5 },
        { stat: "spd", type: "percent", value: 3 },
      ],
    },
    {
      id: "relentless-scout",
      name: "Relentless Scout",
      kind: "general",
      grade: 4,
      description: `Starting AP 3, AP Recovery 2.5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "diligent-challenger",
      name: "Diligent Challenger",
      kind: "general",
      grade: 4,
      description: `Crit Rate 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "relentless-assassin",
      name: "Relentless Assassin",
      kind: "general",
      grade: 4,
      description: `Crit DMG 6%, AP Recovery 2.5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 6 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "restless-swordsman",
      name: "Restless Swordsman",
      kind: "general",
      grade: 4,
      description: `Slash Boost 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "steadfast-gunslinger",
      name: "Steadfast Gunslinger",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "diligent-hammerer",
      name: "Diligent Hammerer",
      kind: "general",
      grade: 4,
      description: `Crush Boost 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "relentless-pyromancer",
      name: "Relentless Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "unceasing-cryomancer",
      name: "Unceasing Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "unceasing-stormcaller",
      name: "Unceasing Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "unceasing-venomancer",
      name: "Unceasing Venomancer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "vigorous-illusionist",
      name: "Vigorous Illusionist",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 3%, AP Recovery 2.5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 3 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "energetic-bodyguard",
      name: "Energetic Bodyguard",
      kind: "general",
      grade: 4,
      description: `Slash DEF 50, Pierce DEF 50, Crush DEF 50, AP Recovery 2.5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "unceasing-sentinel",
      name: "Unceasing Sentinel",
      kind: "general",
      grade: 4,
      description: `Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50, AP Recovery 2.5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
        { stat: "apRecovery", type: "percent", value: 2.5 },
      ],
    },
    {
      id: "vigorous-shieldbearer",
      name: "Vigorous Shieldbearer",
      kind: "general",
      grade: 4,
      description: `AP Recovery 2.5%, All DEF 40`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 2.5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "powerful-skirmisher",
      name: "Powerful Skirmisher",
      kind: "general",
      grade: 4,
      description: `AP Recovery 2.5%, Knockback Resistance 15`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 2.5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "frontline-skirmisher",
      name: "Frontline Skirmisher",
      kind: "general",
      grade: 4,
      description: `AP Recovery 2.5%, Aggro Adjustment 20`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 2.5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "quiet-skirmisher",
      name: "Quiet Skirmisher",
      kind: "general",
      grade: 4,
      description: `AP Recovery 2.5%, Aggro Adjustment -20`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 2.5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "dancing-survivor",
      name: "Dancing Survivor",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, Evade 3%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "evade", type: "percent", value: 3 },
      ],
    },
    {
      id: "reliable-survivor",
      name: "Reliable Survivor",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, Accuracy 3%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: 3 },
      ],
    },
    {
      id: "resilient-warrior",
      name: "Resilient Warrior",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, Melee ATK 3%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "meleeAtk", type: "percent", value: 3 },
      ],
    },
    {
      id: "sturdy-marksman",
      name: "Sturdy Marksman",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, Ranged ATK 3%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 3 },
      ],
    },
    {
      id: "tenacious-mage",
      name: "Tenacious Mage",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, Magic ATK 3%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 3 },
      ],
    },
    {
      id: "dashing-survivor",
      name: "Dashing Survivor",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, SPD 3%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 3 },
      ],
    },
    {
      id: "quick-starting-survivor",
      name: "Quick-Starting Survivor",
      kind: "general",
      grade: 4,
      description: `Starting AP 3, Max HP 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "alert-survivor",
      name: "Alert Survivor",
      kind: "general",
      grade: 4,
      description: `Crit Rate 3%, Max HP 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "fierce-survivor",
      name: "Fierce Survivor",
      kind: "general",
      grade: 4,
      description: `Crit DMG 6%, Max HP 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 6 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "resolute-swordsman",
      name: "Resolute Swordsman",
      kind: "general",
      grade: 4,
      description: `Slash Boost 3%, Max HP 5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "tenacious-gunslinger",
      name: "Tenacious Gunslinger",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 3%, Max HP 5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "tenacious-hammerer",
      name: "Tenacious Hammerer",
      kind: "general",
      grade: 4,
      description: `Crush Boost 3%, Max HP 5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "sturdy-pyromancer",
      name: "Sturdy Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 3%, Max HP 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "resilient-cryomancer",
      name: "Resilient Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 3%, Max HP 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "persistent-stormcaller",
      name: "Persistent Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 3%, Max HP 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "persistent-venomancer",
      name: "Persistent Venomancer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 3%, Max HP 5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "resolute-illusionist",
      name: "Resolute Illusionist",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 3%, Max HP 5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 3 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "persistent-bodyguard",
      name: "Persistent Bodyguard",
      kind: "general",
      grade: 4,
      description: `Slash DEF 50, Pierce DEF 50, Crush DEF 50, Max HP 5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "persistent-sentinel",
      name: "Persistent Sentinel",
      kind: "general",
      grade: 4,
      description: `Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50, Max HP 5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "enduring-shieldbearer",
      name: "Enduring Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, All DEF 40`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "powerful-survivor",
      name: "Powerful Survivor",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, Knockback Resistance 15`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "frontline-survivor",
      name: "Frontline Survivor",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "silent-survivor",
      name: "Silent Survivor",
      kind: "general",
      grade: 4,
      description: `Max HP 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "agile-hunter",
      name: "Agile Hunter",
      kind: "general",
      grade: 4,
      description: `Accuracy 3%, Evade 5%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "gliding-warrior",
      name: "Gliding Warrior",
      kind: "general",
      grade: 4,
      description: `Melee ATK 3%, Evade 5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "nimble-marksman",
      name: "Nimble Marksman",
      kind: "general",
      grade: 4,
      description: `Ranged ATK 3%, Evade 5%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "swift-mage",
      name: "Swift Mage",
      kind: "general",
      grade: 4,
      description: `Magic ATK 3%, Evade 5%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "fleet-footed-acrobat",
      name: "Fleet-Footed Acrobat",
      kind: "general",
      grade: 4,
      description: `Evade 5%, SPD 3%`,
      effects: [
        { stat: "evade", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 3 },
      ],
    },
    {
      id: "nimble-scout",
      name: "Nimble Scout",
      kind: "general",
      grade: 4,
      description: `Starting AP 3, Evade 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "swift-challenger",
      name: "Swift Challenger",
      kind: "general",
      grade: 4,
      description: `Crit Rate 3%, Evade 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "swift-assassin",
      name: "Swift Assassin",
      kind: "general",
      grade: 4,
      description: `Crit DMG 6%, Evade 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 6 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "dancing-swordsman",
      name: "Dancing Swordsman",
      kind: "general",
      grade: 4,
      description: `Slash Boost 3%, Evade 5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "swift-gunslinger",
      name: "Swift Gunslinger",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 3%, Evade 5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "swift-hammerer",
      name: "Swift Hammerer",
      kind: "general",
      grade: 4,
      description: `Crush Boost 3%, Evade 5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "nimble-pyromancer",
      name: "Nimble Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 3%, Evade 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "gliding-cryomancer",
      name: "Gliding Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 3%, Evade 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "wind-swift-stormcaller",
      name: "Wind-Swift Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 3%, Evade 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "agile-venomancer",
      name: "Agile Venomancer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 3%, Evade 5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "flexible-illusionist",
      name: "Flexible Illusionist",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 3%, Evade 5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 3 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "wind-swift-bodyguard",
      name: "Wind-Swift Bodyguard",
      kind: "general",
      grade: 4,
      description: `Slash DEF 50, Pierce DEF 50, Crush DEF 50, Evade 5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "agile-sentinel",
      name: "Agile Sentinel",
      kind: "general",
      grade: 4,
      description: `Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50, Evade 5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "flexible-shieldbearer",
      name: "Flexible Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Evade 5%, All DEF 40`,
      effects: [
        { stat: "evade", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "pressing-acrobat",
      name: "Pressing Acrobat",
      kind: "general",
      grade: 4,
      description: `Evade 5%, Knockback Resistance 15`,
      effects: [
        { stat: "evade", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "conspicuous-acrobat",
      name: "Conspicuous Acrobat",
      kind: "general",
      grade: 4,
      description: `Evade 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "evade", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "soundless-acrobat",
      name: "Soundless Acrobat",
      kind: "general",
      grade: 4,
      description: `Evade 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "evade", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "opportunistic-warrior",
      name: "Opportunistic Warrior",
      kind: "general",
      grade: 4,
      description: `Melee ATK 3%, Accuracy 5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "opportunistic-marksman",
      name: "Opportunistic Marksman",
      kind: "general",
      grade: 4,
      description: `Ranged ATK 3%, Accuracy 5%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "accurate-mage",
      name: "Accurate Mage",
      kind: "general",
      grade: 4,
      description: `Magic ATK 3%, Accuracy 5%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "fleet-footed-hunter",
      name: "Fleet-Footed Hunter",
      kind: "general",
      grade: 4,
      description: `Accuracy 5%, SPD 3%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 3 },
      ],
    },
    {
      id: "opportunistic-scout",
      name: "Opportunistic Scout",
      kind: "general",
      grade: 4,
      description: `Starting AP 3, Accuracy 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "accurate-challenger",
      name: "Accurate Challenger",
      kind: "general",
      grade: 4,
      description: `Crit Rate 3%, Accuracy 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "precise-assassin",
      name: "Precise Assassin",
      kind: "general",
      grade: 4,
      description: `Crit DMG 6%, Accuracy 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 6 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "reliable-swordsman",
      name: "Reliable Swordsman",
      kind: "general",
      grade: 4,
      description: `Slash Boost 3%, Accuracy 5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "precise-gunslinger",
      name: "Precise Gunslinger",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 3%, Accuracy 5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "accurate-hammerer",
      name: "Accurate Hammerer",
      kind: "general",
      grade: 4,
      description: `Crush Boost 3%, Accuracy 5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "opportunistic-pyromancer",
      name: "Opportunistic Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 3%, Accuracy 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "reliable-cryomancer",
      name: "Reliable Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 3%, Accuracy 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "precise-stormcaller",
      name: "Precise Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 3%, Accuracy 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "perceptive-venomancer",
      name: "Perceptive Venomancer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 3%, Accuracy 5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "reliable-illusionist",
      name: "Reliable Illusionist",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 3%, Accuracy 5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 3 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "perceptive-bodyguard",
      name: "Perceptive Bodyguard",
      kind: "general",
      grade: 4,
      description: `Slash DEF 50, Pierce DEF 50, Crush DEF 50, Accuracy 5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "perceptive-sentinel",
      name: "Perceptive Sentinel",
      kind: "general",
      grade: 4,
      description: `Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50, Accuracy 5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "perceptive-shieldbearer",
      name: "Perceptive Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Accuracy 5%, All DEF 40`,
      effects: [
        { stat: "accuracy", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "pressing-hunter",
      name: "Pressing Hunter",
      kind: "general",
      grade: 4,
      description: `Accuracy 5%, Knockback Resistance 15`,
      effects: [
        { stat: "accuracy", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "attention-grabbing-hunter",
      name: "Attention-Grabbing Hunter",
      kind: "general",
      grade: 4,
      description: `Accuracy 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "accuracy", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "stealthy-hunter",
      name: "Stealthy Hunter",
      kind: "general",
      grade: 4,
      description: `Accuracy 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "accuracy", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "furious-marksman",
      name: "Furious Marksman",
      kind: "general",
      grade: 4,
      description: `Melee ATK 5%, Ranged ATK 3%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "rangedAtk", type: "percent", value: 3 },
      ],
    },
    {
      id: "unstoppable-mage",
      name: "Unstoppable Mage",
      kind: "general",
      grade: 4,
      description: `Melee ATK 5%, Magic ATK 3%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 3 },
      ],
    },
    {
      id: "restless-warrior",
      name: "Restless Warrior",
      kind: "general",
      grade: 4,
      description: `Melee ATK 5%, SPD 3%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 3 },
      ],
    },
    {
      id: "one-step-ahead-warrior",
      name: "One Step Ahead Warrior",
      kind: "general",
      grade: 4,
      description: `Starting AP 3, Melee ATK 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "watchful-warrior",
      name: "Watchful Warrior",
      kind: "general",
      grade: 4,
      description: `Crit Rate 3%, Melee ATK 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "resolute-warrior",
      name: "Resolute Warrior",
      kind: "general",
      grade: 4,
      description: `Crit DMG 6%, Melee ATK 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 6 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "razor-sharp-warrior",
      name: "Razor-Sharp Warrior",
      kind: "general",
      grade: 4,
      description: `Slash Boost 3%, Melee ATK 5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "single-strike-warrior",
      name: "Single-Strike Warrior",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 3%, Melee ATK 5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "crushing-warrior",
      name: "Crushing Warrior",
      kind: "general",
      grade: 4,
      description: `Crush Boost 3%, Melee ATK 5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "blazing-warrior",
      name: "Blazing Warrior",
      kind: "general",
      grade: 4,
      description: `Heat Boost 3%, Melee ATK 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "frostbitten-warrior",
      name: "Frostbitten Warrior",
      kind: "general",
      grade: 4,
      description: `Cold Boost 3%, Melee ATK 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "thunderous-warrior",
      name: "Thunderous Warrior",
      kind: "general",
      grade: 4,
      description: `Electric Boost 3%, Melee ATK 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "poison-coated-warrior",
      name: "Poison-Coated Warrior",
      kind: "general",
      grade: 4,
      description: `Poison Boost 3%, Melee ATK 5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "veiled-warrior",
      name: "Veiled Warrior",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 3%, Melee ATK 5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 3 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "unyielding-warrior",
      name: "Unyielding Warrior",
      kind: "general",
      grade: 4,
      description: `Slash DEF 50, Pierce DEF 50, Crush DEF 50, Melee ATK 5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "defiant-warrior",
      name: "Defiant Warrior",
      kind: "general",
      grade: 4,
      description: `Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50, Melee ATK 5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
        { stat: "meleeAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "impregnable-warrior",
      name: "Impregnable Warrior",
      kind: "general",
      grade: 4,
      description: `Melee ATK 5%, All DEF 40`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "pressing-warrior",
      name: "Pressing Warrior",
      kind: "general",
      grade: 4,
      description: `Melee ATK 5%, Knockback Resistance 15`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "imposing-warrior",
      name: "Imposing Warrior",
      kind: "general",
      grade: 4,
      description: `Melee ATK 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "unseen-warrior",
      name: "Unseen Warrior",
      kind: "general",
      grade: 4,
      description: `Melee ATK 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "flawless-mage",
      name: "Flawless Mage",
      kind: "general",
      grade: 4,
      description: `Ranged ATK 5%, Magic ATK 3%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "magicAtk", type: "percent", value: 3 },
      ],
    },
    {
      id: "agile-marksman",
      name: "Agile Marksman",
      kind: "general",
      grade: 4,
      description: `Ranged ATK 5%, SPD 3%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 3 },
      ],
    },
    {
      id: "preemptive-marksman",
      name: "Preemptive Marksman",
      kind: "general",
      grade: 4,
      description: `Starting AP 3, Ranged ATK 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "watchful-marksman",
      name: "Watchful Marksman",
      kind: "general",
      grade: 4,
      description: `Crit Rate 3%, Ranged ATK 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "deadly-marksman",
      name: "Deadly Marksman",
      kind: "general",
      grade: 4,
      description: `Crit DMG 6%, Ranged ATK 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 6 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "slashing-marksman",
      name: "Slashing Marksman",
      kind: "general",
      grade: 4,
      description: `Slash Boost 3%, Ranged ATK 5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "piercing-marksman",
      name: "Piercing Marksman",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 3%, Ranged ATK 5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "smashing-marksman",
      name: "Smashing Marksman",
      kind: "general",
      grade: 4,
      description: `Crush Boost 3%, Ranged ATK 5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "scorching-marksman",
      name: "Scorching Marksman",
      kind: "general",
      grade: 4,
      description: `Heat Boost 3%, Ranged ATK 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "chilling-marksman",
      name: "Chilling Marksman",
      kind: "general",
      grade: 4,
      description: `Cold Boost 3%, Ranged ATK 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "electrified-marksman",
      name: "Electrified Marksman",
      kind: "general",
      grade: 4,
      description: `Electric Boost 3%, Ranged ATK 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "venomous-marksman",
      name: "Venomous Marksman",
      kind: "general",
      grade: 4,
      description: `Poison Boost 3%, Ranged ATK 5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "uncanny-marksman",
      name: "Uncanny Marksman",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 3%, Ranged ATK 5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "solid-marksman",
      name: "Solid Marksman",
      kind: "general",
      grade: 4,
      description: `Slash DEF 50, Pierce DEF 50, Crush DEF 50, Ranged ATK 5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "unwavering-marksman",
      name: "Unwavering Marksman",
      kind: "general",
      grade: 4,
      description: `Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50, Ranged ATK 5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "impregnable-marksman",
      name: "Impregnable Marksman",
      kind: "general",
      grade: 4,
      description: `Ranged ATK 5%, All DEF 40`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "mighty-marksman",
      name: "Mighty Marksman",
      kind: "general",
      grade: 4,
      description: `Ranged ATK 5%, Knockback Resistance 15`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "provocative-marksman",
      name: "Provocative Marksman",
      kind: "general",
      grade: 4,
      description: `Ranged ATK 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "quiet-marksman",
      name: "Quiet Marksman",
      kind: "general",
      grade: 4,
      description: `Ranged ATK 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "agile-mage",
      name: "Agile Mage",
      kind: "general",
      grade: 4,
      description: `Magic ATK 5%, SPD 3%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 5 },
        { stat: "spd", type: "percent", value: 3 },
      ],
    },
    {
      id: "quick-mage",
      name: "Quick Mage",
      kind: "general",
      grade: 4,
      description: `Starting AP 3, Magic ATK 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "keen-mage",
      name: "Keen Mage",
      kind: "general",
      grade: 4,
      description: `Crit Rate 3%, Magic ATK 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "ferocious-mage",
      name: "Ferocious Mage",
      kind: "general",
      grade: 4,
      description: `Crit DMG 6%, Magic ATK 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 6 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "sharp-mage",
      name: "Sharp Mage",
      kind: "general",
      grade: 4,
      description: `Slash Boost 3%, Magic ATK 5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "penetrating-mage",
      name: "Penetrating Mage",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 3%, Magic ATK 5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "smashing-mage",
      name: "Smashing Mage",
      kind: "general",
      grade: 4,
      description: `Crush Boost 3%, Magic ATK 5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "burning-mage",
      name: "Burning Mage",
      kind: "general",
      grade: 4,
      description: `Heat Boost 3%, Magic ATK 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "frozen-mage",
      name: "Frozen Mage",
      kind: "general",
      grade: 4,
      description: `Cold Boost 3%, Magic ATK 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "flashing-mage",
      name: "Flashing Mage",
      kind: "general",
      grade: 4,
      description: `Electric Boost 3%, Magic ATK 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "infiltrating-mage",
      name: "Infiltrating Mage",
      kind: "general",
      grade: 4,
      description: `Poison Boost 3%, Magic ATK 5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "formless-mage",
      name: "Formless Mage",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 3%, Magic ATK 5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "sturdy-mage",
      name: "Sturdy Mage",
      kind: "general",
      grade: 4,
      description: `Slash DEF 50, Pierce DEF 50, Crush DEF 50, Magic ATK 5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "unwavering-mage",
      name: "Unwavering Mage",
      kind: "general",
      grade: 4,
      description: `Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50, Magic ATK 5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "ironclad-mage",
      name: "Ironclad Mage",
      kind: "general",
      grade: 4,
      description: `Magic ATK 5%, All DEF 40`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "mighty-mage",
      name: "Mighty Mage",
      kind: "general",
      grade: 4,
      description: `Magic ATK 5%, Knockback Resistance 15`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "attention-grabbing-mage",
      name: "Attention-Grabbing Mage",
      kind: "general",
      grade: 4,
      description: `Magic ATK 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "stealthy-mage",
      name: "Stealthy Mage",
      kind: "general",
      grade: 4,
      description: `Aggro Adjustment -20`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "agile-scout",
      name: "Agile Scout",
      kind: "general",
      grade: 4,
      description: `Starting AP 3, SPD 5%`,
      effects: [
        { stat: "startAp", type: "flat", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "restless-challenger",
      name: "Restless Challenger",
      kind: "general",
      grade: 4,
      description: `Crit Rate 3%, SPD 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "dashing-assassin",
      name: "Dashing Assassin",
      kind: "general",
      grade: 4,
      description: `Crit DMG 6%, SPD 5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 6 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "dashing-swordsman",
      name: "Dashing Swordsman",
      kind: "general",
      grade: 4,
      description: `Slash Boost 3%, SPD 5%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "restless-gunslinger",
      name: "Restless Gunslinger",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 3%, SPD 5%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "restless-hammerer",
      name: "Restless Hammerer",
      kind: "general",
      grade: 4,
      description: `Crush Boost 3%, SPD 5%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "agile-pyromancer",
      name: "Agile Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 3%, SPD 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "restless-cryomancer",
      name: "Restless Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 3%, SPD 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "fleet-footed-stormcaller",
      name: "Fleet-Footed Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 3%, SPD 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "fleet-footed-venomancer",
      name: "Fleet-Footed Venomancer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 3%, SPD 5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "dashing-illusionist",
      name: "Dashing Illusionist",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 3%, SPD 5%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "fleet-footed-bodyguard",
      name: "Fleet-Footed Bodyguard",
      kind: "general",
      grade: 4,
      description: `Slash DEF 50, Pierce DEF 50, Crush DEF 50, SPD 5%`,
      effects: [
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "fleet-footed-sentinel",
      name: "Fleet-Footed Sentinel",
      kind: "general",
      grade: 4,
      description: `Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50, SPD 5%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
        { stat: "spd", type: "percent", value: 5 },
      ],
    },
    {
      id: "dashing-shieldbearer",
      name: "Dashing Shieldbearer",
      kind: "general",
      grade: 4,
      description: `SPD 5%, All DEF 40`,
      effects: [
        { stat: "spd", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "overwhelming-pursuer",
      name: "Overwhelming Pursuer",
      kind: "general",
      grade: 4,
      description: `SPD 5%, Knockback Resistance 15`,
      effects: [
        { stat: "spd", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "menacing-pursuer",
      name: "Menacing Pursuer",
      kind: "general",
      grade: 4,
      description: `SPD 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "spd", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "stealthy-pursuer",
      name: "Stealthy Pursuer",
      kind: "general",
      grade: 4,
      description: `SPD 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "spd", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "quick-challenger",
      name: "Quick Challenger",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Crit Rate 3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "critRate", type: "percent", value: 3 },
      ],
    },
    {
      id: "leading-assassin",
      name: "Leading Assassin",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Crit DMG 6%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "critDmg", type: "percent", value: 6 },
      ],
    },
    {
      id: "quick-starting-swordsman",
      name: "Quick-Starting Swordsman",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Slash Boost 3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "slashBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "leading-gunslinger",
      name: "Leading Gunslinger",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Pierce Boost 3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "pierceBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "quick-hammerer",
      name: "Quick Hammerer",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Crush Boost 3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "crushBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "preemptive-pyromancer",
      name: "Preemptive Pyromancer",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Heat Boost 3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "heatBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "one-step-ahead-cryomancer",
      name: "One Step Ahead Cryomancer",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Cold Boost 3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "coldBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "hasty-stormcaller",
      name: "Hasty Stormcaller",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Electric Boost 3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "electricBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "quick-deploying-venomancer",
      name: "Quick-Deploying Venomancer",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Poison Boost 3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "poisonBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "hasty-illusionist",
      name: "Hasty Illusionist",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Immaterial Boost 3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "immaterialBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "quick-deploying-bodyguard",
      name: "Quick-Deploying Bodyguard",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "quick-deploying-sentinel",
      name: "Quick-Deploying Sentinel",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "hasty-shieldbearer",
      name: "Hasty Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, All DEF 40`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "mighty-scout",
      name: "Mighty Scout",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Knockback Resistance 15`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "provocative-scout",
      name: "Provocative Scout",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Aggro Adjustment 20`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "quiet-scout",
      name: "Quiet Scout",
      kind: "general",
      grade: 4,
      description: `Starting AP 5, Aggro Adjustment -20`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "keen-assassin",
      name: "Keen Assassin",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Crit DMG 6%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "critDmg", type: "percent", value: 6 },
      ],
    },
    {
      id: "alert-swordsman",
      name: "Alert Swordsman",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Slash Boost 3%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "slashBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "keen-gunslinger",
      name: "Keen Gunslinger",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Pierce Boost 3%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "pierceBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "keen-hammerer",
      name: "Keen Hammerer",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Crush Boost 3%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "crushBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "quick-witted-pyromancer",
      name: "Quick-Witted Pyromancer",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Heat Boost 3%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "heatBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "alert-cryomancer",
      name: "Alert Cryomancer",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Cold Boost 3%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "coldBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "quick-witted-stormcaller",
      name: "Quick-Witted Stormcaller",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Electric Boost 3%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "electricBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "watchful-venomancer",
      name: "Watchful Venomancer",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Poison Boost 3%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "poisonBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "quick-witted-illusionist",
      name: "Quick-Witted Illusionist",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Immaterial Boost 3%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "immaterialBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "watchful-bodyguard",
      name: "Watchful Bodyguard",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "watchful-sentinel",
      name: "Watchful Sentinel",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "quick-witted-shieldbearer",
      name: "Quick-Witted Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, All DEF 40`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "mighty-challenger",
      name: "Mighty Challenger",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Knockback Resistance 15`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "attention-grabbing-challenger",
      name: "Attention-Grabbing Challenger",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "stealthy-challenger",
      name: "Stealthy Challenger",
      kind: "general",
      grade: 4,
      description: `Crit Rate 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "fierce-swordsman",
      name: "Fierce Swordsman",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Slash Boost 3%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "slashBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "ruthless-gunslinger",
      name: "Ruthless Gunslinger",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Pierce Boost 3%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "pierceBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "ferocious-hammerer",
      name: "Ferocious Hammerer",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Crush Boost 3%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "crushBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "deadly-pyromancer",
      name: "Deadly Pyromancer",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Heat Boost 3%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "heatBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "resolute-cryomancer",
      name: "Resolute Cryomancer",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Cold Boost 3%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "coldBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "merciless-stormcaller",
      name: "Merciless Stormcaller",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Electric Boost 3%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "electricBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "lethal-venomancer",
      name: "Lethal Venomancer",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Poison Boost 3%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "poisonBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "decisive-illusionist",
      name: "Decisive Illusionist",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Immaterial Boost 3%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "immaterialBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "merciless-bodyguard",
      name: "Merciless Bodyguard",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "sharp-eyed-sentinel",
      name: "Sharp-Eyed Sentinel",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "decisive-shieldbearer",
      name: "Decisive Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, All DEF 40`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "forceful-assassin",
      name: "Forceful Assassin",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Knockback Resistance 15`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "confident-assassin",
      name: "Confident Assassin",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Aggro Adjustment 20`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "vanishing-assassin",
      name: "Vanishing Assassin",
      kind: "general",
      grade: 4,
      description: `Crit DMG 10%, Aggro Adjustment -20`,
      effects: [
        { stat: "critDmg", type: "percent", value: 10 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "flash-fast-bodyguard",
      name: "Flash-Fast Bodyguard",
      kind: "general",
      grade: 4,
      description: `Slash Boost 5%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "razorwind-sentinel",
      name: "Razorwind Sentinel",
      kind: "general",
      grade: 4,
      description: `Slash Boost 5%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "sharp-shieldbearer",
      name: "Sharp Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Slash Boost 5%, All DEF 40`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "powerful-swordsman",
      name: "Powerful Swordsman",
      kind: "general",
      grade: 4,
      description: `Slash Boost 5%, Knockback Resistance 15`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "frontline-swordsman",
      name: "Frontline Swordsman",
      kind: "general",
      grade: 4,
      description: `Slash Boost 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "silent-swordsman",
      name: "Silent Swordsman",
      kind: "general",
      grade: 4,
      description: `Slash Boost 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "penetraing-bodyguard",
      name: "Penetraing Bodyguard",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 5%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "vital-piercing-sentinel",
      name: "Vital-Piercing Sentinel",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 5%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "single-shot-shieldbearer",
      name: "Single-Shot Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 5%, All DEF 40`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "forceful-gunslinger",
      name: "Forceful Gunslinger",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 5%, Knockback Resistance 15`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "confident-gunslinger",
      name: "Confident Gunslinger",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "vanishing-gunsliner",
      name: "Vanishing Gunsliner",
      kind: "general",
      grade: 4,
      description: `Pierce Boost 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "shattering-bodyguard",
      name: "Shattering Bodyguard",
      kind: "general",
      grade: 4,
      description: `Crush Boost 5%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "heavy-hitting-sentinel",
      name: "Heavy-Hitting Sentinel",
      kind: "general",
      grade: 4,
      description: `Crush Boost 5%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "resonant-shieldbearer",
      name: "Resonant Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Crush Boost 5%, All DEF 40`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "mighty-hammerer",
      name: "Mighty Hammerer",
      kind: "general",
      grade: 4,
      description: `Crush Boost 5%, Knockback Resistance 15`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "attention-grabbing-hammerer",
      name: "Attention-Grabbing Hammerer",
      kind: "general",
      grade: 4,
      description: `Crush Boost 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "stealthy-hammerer",
      name: "Stealthy Hammerer",
      kind: "general",
      grade: 4,
      description: `Crush Boost 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "chilling-pyromancer",
      name: "Chilling Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, Cold Boost 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "coldBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "electrifying-pyromancer",
      name: "Electrifying Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, Electric Boost 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "electricBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "venomous-pyromancer",
      name: "Venomous Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, Poison Boost 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "poisonBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "uncanny-pyromancer",
      name: "Uncanny Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, Immaterial Boost 5%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "fiery-bodyguard",
      name: "Fiery Bodyguard",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "flame-wreathed-sentinel",
      name: "Flame-Wreathed Sentinel",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "smoldering-shieldbearer",
      name: "Smoldering Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, All DEF 40`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "mighty-pyromancer",
      name: "Mighty Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, Knockback Resistance 15`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "provocative-pyromancer",
      name: "Provocative Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "quiet-pyromancer",
      name: "Quiet Pyromancer",
      kind: "general",
      grade: 4,
      description: `Heat Boost 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "electrifying-cryomancer",
      name: "Electrifying Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 5%, Electric Boost 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "electricBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "venomous-cryomancer",
      name: "Venomous Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 5%, Poison Boost 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "poisonBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "incorporeal-cryomancer",
      name: "Incorporeal Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 5%, Immaterial Boost 5%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "ruthless-bodyguard",
      name: "Ruthless Bodyguard",
      kind: "general",
      grade: 4,
      description: `Cold Boost 5%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "frost-laden-sentinel",
      name: "Frost-Laden Sentinel",
      kind: "general",
      grade: 4,
      description: `Cold Boost 5%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "cold-shieldbearer",
      name: "Cold Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 5%, All DEF 40`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "pressing-cryomancer",
      name: "Pressing Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 5%, Knockback Resistance 15`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "conspicuous-cryomancer",
      name: "Conspicuous Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "serene-cryomancer",
      name: "Serene Cryomancer",
      kind: "general",
      grade: 4,
      description: `Cold Boost 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "venomous-stormcaller",
      name: "Venomous Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 5%, Poison Boost 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "poisonBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "incorporeal-stormcaller",
      name: "Incorporeal Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 5%, Immaterial Boost 5%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "thunderous-bodyguard",
      name: "Thunderous Bodyguard",
      kind: "general",
      grade: 4,
      description: `Electric Boost 5%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "shocking-sentinel",
      name: "Shocking Sentinel",
      kind: "general",
      grade: 4,
      description: `Electric Boost 5%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "sparking-shieldbearer",
      name: "Sparking Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Electric Boost 5%, All DEF 40`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "overwhelming-stormcaller",
      name: "Overwhelming Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 5%, Knockback Resistance 15`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "conspicuous-stormcaller",
      name: "Conspicuous Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "serene-stormcaller",
      name: "Serene Stormcaller",
      kind: "general",
      grade: 4,
      description: `Electric Boost 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "mysterious-venomancer",
      name: "Mysterious Venomancer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 5%, Immaterial Boost 5%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "immaterialBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "toxic-bodyguard",
      name: "Toxic Bodyguard",
      kind: "general",
      grade: 4,
      description: `Poison Boost 5%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "toxic-sentinel",
      name: "Toxic Sentinel",
      kind: "general",
      grade: 4,
      description: `Poison Boost 5%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "creeping-shieldbearer",
      name: "Creeping Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 5%, All DEF 40`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "overwhelming-venomancer",
      name: "Overwhelming Venomancer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 5%, Knockback Resistance 15`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "menacing-venomancer",
      name: "Menacing Venomancer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "serene-venomancer",
      name: "Serene Venomancer",
      kind: "general",
      grade: 4,
      description: `Poison Boost 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "incorporeal-bodyguard",
      name: "Incorporeal Bodyguard",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 5%, Slash DEF 50, Pierce DEF 50, Crush DEF 50`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "slashDef", type: "flat", value: 50 },
        { stat: "pierceDef", type: "flat", value: 50 },
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "formless-sentinel",
      name: "Formless Sentinel",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 5%, Heat DEF 50, Cold DEF 50, Electric DEF 50, Poison DEF 50, Immaterial DEF 50`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "heatDef", type: "flat", value: 50 },
        { stat: "coldDef", type: "flat", value: 50 },
        { stat: "electricDef", type: "flat", value: 50 },
        { stat: "poisonDef", type: "flat", value: 50 },
        { stat: "immaterialDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "elusive-shieldbearer",
      name: "Elusive Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 5%, All DEF 40`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "allDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "powerful-illusionist",
      name: "Powerful Illusionist",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 5%, Knockback Resistance 15`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "confident-illusionist",
      name: "Confident Illusionist",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 5%, Aggro Adjustment 20`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "serene-illusionist",
      name: "Serene Illusionist",
      kind: "general",
      grade: 4,
      description: `Immaterial Boost 5%, Aggro Adjustment -20`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 5 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "forceful-bodyguard",
      name: "Forceful Bodyguard",
      kind: "general",
      grade: 4,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, Knockback Resistance 15`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "conspicuous-bodyguard",
      name: "Conspicuous Bodyguard",
      kind: "general",
      grade: 4,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, Aggro Adjustment 20`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "vanishing-bodyguard",
      name: "Vanishing Bodyguard",
      kind: "general",
      grade: 4,
      description: `Slash DEF 100, Pierce DEF 100, Crush DEF 100, Aggro Adjustment -20`,
      effects: [
        { stat: "slashDef", type: "flat", value: 100 },
        { stat: "pierceDef", type: "flat", value: 100 },
        { stat: "crushDef", type: "flat", value: 100 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "overwhelming-sentinel",
      name: "Overwhelming Sentinel",
      kind: "general",
      grade: 4,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, Knockback Resistance 15`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "knockbackRes", type: "flat", value: 15 },
      ],
    },
    {
      id: "menacing-sentinel",
      name: "Menacing Sentinel",
      kind: "general",
      grade: 4,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, Aggro Adjustment 20`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "aggroAdj", type: "flat", value: 20 },
      ],
    },
    {
      id: "serene-sentinel",
      name: "Serene Sentinel",
      kind: "general",
      grade: 4,
      description: `Heat DEF 100, Cold DEF 100, Electric DEF 100, Poison DEF 100, Immaterial DEF 100, Aggro Adjustment -20`,
      effects: [
        { stat: "heatDef", type: "flat", value: 100 },
        { stat: "coldDef", type: "flat", value: 100 },
        { stat: "electricDef", type: "flat", value: 100 },
        { stat: "poisonDef", type: "flat", value: 100 },
        { stat: "immaterialDef", type: "flat", value: 100 },
        { stat: "aggroAdj", type: "flat", value: -20 },
      ],
    },
    {
      id: "impactful-shieldbearer",
      name: "Impactful Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Knockback Resistance 15, All DEF 80`,
      effects: [
        { stat: "knockbackRes", type: "flat", value: 15 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "frontline-shieldbearer",
      name: "Frontline Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Aggro Adjustment 20, All DEF 80`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 20 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "serene-shieldbearer",
      name: "Serene Shieldbearer",
      kind: "general",
      grade: 4,
      description: `Aggro Adjustment -20, All DEF 80`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: -20 },
        { stat: "allDef", type: "flat", value: 80 },
      ],
    },
    {
      id: "frontline-giant",
      name: "Frontline Giant",
      kind: "general",
      grade: 4,
      description: `Aggro Adjustment 20, Knockback Resistance 30`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 20 },
        { stat: "knockbackRes", type: "flat", value: 30 },
      ],
    },
    {
      id: "silent-giant",
      name: "Silent Giant",
      kind: "general",
      grade: 4,
      description: `Aggro Adjustment -20, Knockback Resistance 30`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: -20 },
        { stat: "knockbackRes", type: "flat", value: 30 },
      ],
    },
  // ==== Tier 3 ====
    {
      id: "overworked",
      name: "Overworked",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/clock.webp",
      description: `AP Recovery 4%
      Max HP -5%`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: -5 },
      ],
    },
    {
      id: "persistent",
      name: "Persistent",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/body.webp",
      description: `AP Recovery 4%
      Starting AP -5`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 4 },
        { stat: "startAp", type: "flat", value: -5 },
      ],
    },
    {
      id: "sturdy",
      name: "Sturdy",
      kind: "general",
      grade: 3,
      description: `Max HP 5%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 5 },
      ],
    },
    {
      id: "agile",
      name: "Agile",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/swift.webp",
      description: `Evade 5%`,
      effects: [
        { stat: "evade", type: "percent", value: 5 },
      ],
    },
    {
      id: "precise",
      name: "Precise",
      kind: "general",
      grade: 3,
      description: `Accuracy 5%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 5 },
      ],
    },
    {
      id: "paranoid",
      name: "Paranoid",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/smart.webp",
      description: `Accuracy 7%
      Immaterial DEF -100`,
      effects: [
        { stat: "accuracy", type: "percent", value: 7 },
        { stat: "immaterialDef", type: "flat", value: -100 },
      ],
    },
    {
      id: "ferocious",
      name: "Ferocious",
      kind: "general",
      grade: 3,
      description: `Melee ATK 7%
      Max HP -5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 7 },
        { stat: "maxHp", type: "percent", value: -5 },
      ],
    },
    {
      id: "functional",
      name: "Functional",
      kind: "general",
      grade: 3,
      description: `Ranged ATK 5%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "barraging",
      name: "Barraging",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/shooting.webp",
      description: `Ranged ATK 5%
      Accuracy -2%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: -2 },
      ],
    },
    {
      id: "mysterious",
      name: "Mysterious",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/magic.webp",
      description: `Magic ATK 5%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 5 },
      ],
    },
    {
      id: "rampaging",
      name: "Rampaging",
      kind: "general",
      grade: 3,
      description: `SPD 5%
      Accuracy -2%`,
      effects: [
        { stat: "spd", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: -2 },
      ],
    },
    {
      id: "prophetic",
      name: "Prophetic",
      kind: "general",
      grade: 3,
      description: `Starting AP 5`,
      effects: [
        { stat: "startAp", type: "flat", value: 5 },
      ],
    },
    {
      id: "berserking",
      name: "Berserking",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/burst.webp",
      description: `SPD 6%
      Max HP -4%`,
      effects: [
        { stat: "spd", type: "percent", value: 6 },
        { stat: "maxHp", type: "percent", value: -4 },
      ],
    },
    {
      id: "heaven-sent",
      name: "Heaven-sent",
      kind: "general",
      grade: 3,
      description: `Crit Rate 5%`,
      effects: [
        { stat: "critRate", type: "percent", value: 5 },
      ],
    },
    {
      id: "doom",
      name: "Doom",
      kind: "general",
      grade: 3,
      description: `Crit DMG 12%
      Max HP -3%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 12 },
        { stat: "maxHp", type: "percent", value: -3 },
      ],
    },
    {
      id: "desperate",
      name: "Desperate",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/lethal.webp",
      description: `Crit DMG 15%
      Crit Rate -5%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 15 },
        { stat: "critRate", type: "percent", value: -5 },
      ],
    },
    {
      id: "enlightened",
      name: "Enlightened",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/smart.webp",
      description: `Elemental Boost 5%`,
      effects: [
        { stat: "elementalBoost", type: "percent", value: 5 },
      ],
    },
    {
      id: "masterful",
      name: "Masterful",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/gear.webp",
      description: `Slash Boost 4%
      Pierce Boost 4%
      Crush Boost 4%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 4 },
        { stat: "pierceBoost", type: "percent", value: 4 },
        { stat: "crushBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "natural",
      name: "Natural",
      kind: "general",
      grade: 3,
      description: `Heat Boost 4%
      Cold Boost 4%
      Electric Boost 4%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 4 },
        { stat: "coldBoost", type: "percent", value: 4 },
        { stat: "electricBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "acute",
      name: "Acute",
      kind: "general",
      grade: 3,
      description: `Slash Boost 8%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 8 },
      ],
    },
    {
      id: "penetrating",
      name: "Penetrating",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/lethal.webp",
      description: `Pierce Boost 8%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 8 },
      ],
    },
    {
      id: "sledging",
      name: "Sledging",
      kind: "general",
      grade: 3,
      description: `Crush Boost 8%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 8 },
      ],
    },
    {
      id: "blazing",
      name: "Blazing",
      kind: "general",
      grade: 3,
      description: `Heat Boost 8%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 8 },
      ],
    },
    {
      id: "frozen",
      name: "Frozen",
      kind: "general",
      grade: 3,
      description: `Cold Boost 8%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 8 },
      ],
    },
    {
      id: "thunderous",
      name: "Thunderous",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/electric.webp",
      description: `Electric Boost 8%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 8 },
      ],
    },
    {
      id: "venomous",
      name: "Venomous",
      kind: "general",
      grade: 3,
      description: `Poison Boost 8%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 8 },
      ],
    },
    {
      id: "evil",
      name: "Evil",
      kind: "general",
      grade: 3,
      description: `Immaterial Boost 8%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 8 },
      ],
    },
    {
      id: "chainmail",
      name: "Chainmail",
      kind: "general",
      grade: 3,
      description: `Slash DEF 50`,
      effects: [
        { stat: "slashDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "bulletproof",
      name: "Bulletproof",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/counterattack.webp",
      description: `Pierce DEF 50`,
      effects: [
        { stat: "pierceDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "repelling",
      name: "Repelling",
      kind: "general",
      grade: 3,
      description: `Crush DEF 50`,
      effects: [
        { stat: "crushDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "heat-resistant",
      name: "Heat Resistant",
      kind: "general",
      grade: 3,
      description: `Heat DEF 50`,
      effects: [
        { stat: "heatDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "cold-resistant",
      name: "Cold Resistant",
      kind: "general",
      grade: 3,
      description: `Cold DEF 50`,
      effects: [
        { stat: "coldDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "insulating",
      name: "Insulating",
      kind: "general",
      grade: 3,
      description: `Electric DEF 50`,
      effects: [
        { stat: "electricDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "toxin-resistant",
      name: "Toxin Resistant",
      kind: "general",
      grade: 3,
      description: `Poison DEF 50`,
      effects: [
        { stat: "poisonDef", type: "flat", value: 50 },
      ],
    },
    {
      id: "based",
      name: "Based",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/shield.webp",
      description: `Knockback Resistance 20`,
      effects: [
        { stat: "knockbackRes", type: "flat", value: 20 },
      ],
    },
    {
      id: "slippery",
      name: "Slippery",
      kind: "general",
      grade: 3,
      description: `Knockback Resistance -20`,
      effects: [
        { stat: "knockbackRes", type: "flat", value: -20 },
      ],
    },
    {
      id: "radical",
      name: "Radical",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/lethal.webp",
      description: `Melee Attack 3%
      Ranged Attack 3%
      Magic Attack 3%
      Aggro Adjustment 15`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 3 },
        { stat: "rangedAtk", type: "percent", value: 3 },
        { stat: "magicAtk", type: "percent", value: 3 },
        { stat: "aggroAdj", type: "flat", value: 15 },
      ],
    },
    {
      id: "arrogant",
      name: "Arrogant",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/eyeglasses.webp",
      description: `Evade 5%
      Knockback Resistance 10`,
      effects: [
        { stat: "evade", type: "percent", value: 5 },
        { stat: "knockbackRes", type: "flat", value: 10 },
      ],
    },
    {
      id: "rational",
      name: "Rational",
      kind: "general",
      grade: 3,
      icon: "/icons/stats/smart.webp",
      description: `Magic ATK 6%
      Crit Rate -2%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 6 },
        { stat: "critRate", type: "percent", value: -2 },
      ],
    },
    {
      id: "methodical",
      name: "Methodical",
      kind: "general",
      grade: 3,
      description: `Starting AP 10
      AP Recovery -3%`,
      effects: [
        { stat: "startAp", type: "flat", value: 10 },
        { stat: "apRecovery", type: "percent", value: -3 },
      ],
    },
  // ==== Tier 2 ====
    {
      id: "efficient",
      name: "Efficient",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/smart.webp",
      description: `AP Recovery 3%
      Immaterial DEF -50`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 3 },
        { stat: "immaterialDef", type: "flat", value: -50 },
      ],
    },
    {
      id: "competent",
      name: "Competent",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/smart.webp",
      description: `AP Recovery 2%`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 2 },
      ],
    },
    {
      id: "stubborn",
      name: "Stubborn",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/counterattack.webp",
      description: `Max HP 4%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 4 },
      ],
    },
    {
      id: "alert",
      name: "Alert",
      kind: "general",
      grade: 2,
      description: `Evade 4%`,
      effects: [
        { stat: "evade", type: "percent", value: 4 },
      ],
    },
    {
      id: "accurate",
      name: "Accurate",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/noble.webp",
      description: `Accuracy 4%`,
      effects: [
        { stat: "accuracy", type: "percent", value: 4 },
      ],
    },
    {
      id: "powerful",
      name: "Powerful",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/body.webp",
      description: `Melee ATK 4%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 4 },
      ],
    },
    {
      id: "aggressive",
      name: "Aggressive",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/body.webp",
      description: `Melee ATK 5%
      Accuracy -5%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 5 },
        { stat: "accuracy", type: "percent", value: -5 },
      ],
    },
    {
      id: "technical",
      name: "Technical",
      kind: "general",
      grade: 2,
      description: `Ranged ATK 3%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 3 },
      ],
    },
    {
      id: "bright",
      name: "Bright",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/noble.webp",
      description: `Magic ATK 4%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 4 },
      ],
    },
    {
      id: "uncanny",
      name: "Uncanny",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/two-side.webp",
      description: `Magic ATK 4%
      Max HP -3%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: -3 },
      ],
    },
    {
      id: "dashing",
      name: "Dashing",
      kind: "general",
      grade: 2,
      description: `SPD 4%`,
      effects: [
        { stat: "spd", type: "percent", value: 4 },
      ],
    },
    {
      id: "foreseeing",
      name: "Foreseeing",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/smart.webp",
      description: `Starting AP 4`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
      ],
    },
    {
      id: "fortunate",
      name: "Fortunate",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/luck.webp",
      description: `Crit Rate 4%`,
      effects: [
        { stat: "critRate", type: "percent", value: 4 },
      ],
    },
    {
      id: "dogmatic",
      name: "Dogmatic",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/smart.webp",
      description: `Crit DMG 8%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 8 },
      ],
    },
    {
      id: "renowned",
      name: "Renowned",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/smart.webp",
      description: `Slash Boost 3%
      Pierce Boost 3%
      Crush Boost 3%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 3 },
        { stat: "pierceBoost", type: "percent", value: 3 },
        { stat: "crushBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "magical",
      name: "Magical",
      kind: "general",
      grade: 2,
      description: `Heat Boost 3%
      Cold Boost 3%
      Electric Boost 3%
      Poison Boost 3%
      Immaterial Boost 3%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 3 },
        { stat: "coldBoost", type: "percent", value: 3 },
        { stat: "electricBoost", type: "percent", value: 3 },
        { stat: "poisonBoost", type: "percent", value: 3 },
        { stat: "immaterialBoost", type: "percent", value: 3 },
      ],
    },
    {
      id: "ancient",
      name: "Ancient",
      kind: "general",
      grade: 2,
      description: `Immaterial Boost 4%
      Poison Boost 4%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 4 },
        { stat: "poisonBoost", type: "percent", value: 4 },
      ],
    },
    {
      id: "sharp",
      name: "Sharp",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/lethal.webp",
      description: `Slash Boost 6%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 6 },
      ],
    },
    {
      id: "piercing",
      name: "Piercing",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/lethal.webp",
      description: `Pierce Boost 6%`,
      effects: [
        { stat: "pierceBoost", type: "percent", value: 6 },
      ],
    },
    {
      id: "heavy",
      name: "Heavy",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/shield.webp",
      description: `Crush Boost 6%`,
      effects: [
        { stat: "crushBoost", type: "percent", value: 6 },
      ],
    },
    {
      id: "scorching",
      name: "Scorching",
      kind: "general",    
      grade: 2,
      description: `Heat Boost 6%`,
      effects: [
        { stat: "heatBoost", type: "percent", value: 6 },
      ],
    },
    {
      id: "cold",
      name: "Cold",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/ice.webp",
      description: `Cold Boost 6%`,
      effects: [
        { stat: "coldBoost", type: "percent", value: 6 },
      ],
    },
    {
      id: "tingling",
      name: "Tingling",
      kind: "general",
      grade: 2,
      description: `Electric Boost 6%`,
      effects: [
        { stat: "electricBoost", type: "percent", value: 6 },
      ],
    },
    {
      id: "harsh",
      name: "Harsh",
      kind: "general",
      grade: 2,
      description: `Poison Boost 6%`,
      effects: [
        { stat: "poisonBoost", type: "percent", value: 6 },
      ],
    },
    {
      id: "strange",
      name: "Strange",
      kind: "general",
      grade: 2,
      description: `Immaterial Boost 6%`,
      effects: [
        { stat: "immaterialBoost", type: "percent", value: 6 },
      ],
    },
    {
      id: "defensive",
      name: "Defensive",
      kind: "general",
      grade: 2,
      description: `Slash DEF 30
      Pierce DEF 30
      Crush DEF 30`,
      effects: [
        { stat: "slashDef", type: "flat", value: 30 },
        { stat: "pierceDef", type: "flat", value: 30 },
        { stat: "crushDef", type: "flat", value: 30 },
      ],
    },
    {
      id: "urgent",
      name: "Urgent",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/belief.webp",
      description: `Heat DEF 20
      Cold DEF 20
      Electric DEF 20
      Poison DEF 20
      Immaterial DEF 20`,
      effects: [
        { stat: "heatDef", type: "flat", value: 20 },
        { stat: "coldDef", type: "flat", value: 20 },
        { stat: "electricDef", type: "flat", value: 20 },
        { stat: "poisonDef", type: "flat", value: 20 },
        { stat: "immaterialDef", type: "flat", value: 20 },
      ],
    },
    {
      id: "faithful",
      name: "Faithful",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/belief.webp",
      description: `Poison DEF 40
      Immaterial DEF 40`,
      effects: [
        { stat: "poisonDef", type: "flat", value: 40 },
        { stat: "immaterialDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "peaceful",
      name: "Peaceful",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/belief.webp",
      description: `Heat DEF 40
      Cold DEF 40
      Electric DEF 40
      Crit DMG -10%`,
      effects: [
        { stat: "heatDef", type: "flat", value: 40 },
        { stat: "coldDef", type: "flat", value: 40 },
        { stat: "electricDef", type: "flat", value: 40 },
        { stat: "critDmg", type: "percent", value: -10 },
      ],
    },
    {
      id: "unyielding",
      name: "Unyielding",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/defend.webp",
      description: `Knockback Resistance 10`,
      effects: [
        { stat: "knockbackRes", type: "flat", value: 10 },
      ],
    },
    {
      id: "principled",
      name: "Principled",
      kind: "general",
      grade: 2,
      description: `Knockback Resistance -10`,
      effects: [
        { stat: "knockbackRes", type: "flat", value: -10 },
      ],
    },
    {
      id: "prominent",
      name: "Prominent",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/eyeglasses.webp",
      description: `Aggro Adjustment 10`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 10 },
      ],
    },
    {
      id: "blurry",
      name: "Blurry",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/hidden.webp",
      description: `Aggro Adjustment -10`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: -10 },
      ],
    },
    {
      id: "righteous",
      name: "Righteous",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/spark.webp",
      description: `Melee ATK 2%
      Ranged ATK 2%
      Magic ATK 2%
      Max HP 2%`, 
      effects: [
        { stat: "meleeAtk", type: "percent", value: 2 },
        { stat: "rangedAtk", type: "percent", value: 2 },
        { stat: "magicAtk", type: "percent", value: 2 },
        { stat: "maxHp", type: "percent", value: 2 },
      ],
    },
    {
      id: "safe",
      name: "Safe",
      kind: "general",
      grade: 2,
      description: `Slash DEF 20
      Pierce DEF 20
      Crush DEF 20
      Aggro Adjustment -5`,
      effects: [
        { stat: "slashDef", type: "flat", value: 20 },
        { stat: "pierceDef", type: "flat", value: 20 },
        { stat: "crushDef", type: "flat", value: 20 },
        { stat: "aggroAdj", type: "flat", value: -5 },
      ],
    },
    {
      id: "weak",
      name: "Weak",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/body.webp",
      description: `Aggro Adjustment -15
      Max HP -3%`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: -15 },
        { stat: "maxHp", type: "percent", value: -3 },
      ],
    },
    {
      id: "pitiful",
      name: "Pitiful",
      kind: "general",
      grade: 2,
      description: `Max HP -3%
      Heat DEF 30
      Cold DEF 30
      Electric DEF 30
      Poison DEF 30
      Immaterial DEF 30`,
      effects: [
        { stat: "maxHp", type: "percent", value: -3 },
        { stat: "heatDef", type: "flat", value: 30 },
        { stat: "coldDef", type: "flat", value: 30 },
        { stat: "electricDef", type: "flat", value: 30 },
        { stat: "poisonDef", type: "flat", value: 30 },
        { stat: "immaterialDef", type: "flat", value: 30 },
      ],
    },
    {
      id: "sensitive",
      name: "Sensitive",
      kind: "general",
      grade: 2,
      icon: "/icons/stats/react.webp",
      description: `Slash DEF -30
      Pierce DEF -30
      Crush DEF -30
      Accuracy 7%`,
      effects: [
        { stat: "slashDef", type: "flat", value: -30 },
        { stat: "pierceDef", type: "flat", value: -30 },
        { stat: "crushDef", type: "flat", value: -30 },
        { stat: "accuracy", type: "percent", value: 7 },
      ],
    },
    {
      id: "charming",
      name: "Charming",
      kind: "general",
      grade: 2,
      description: `Aggro Adjustment 10
      Evade 3%`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 10 },
        { stat: "evade", type: "percent", value: 3 },
      ],
    },
  // ==== Tier 1 ====
    {
      id: "useful",
      name: "Useful",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/smart.webp",
      description: `AP Recovery 1%`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 1 },
      ],
    },
    {
      id: "resilient",
      name: "Resilient",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/counterattack.webp",
      description: `Max HP 3%`,
      effects: [
        { stat: "maxHp", type: "percent", value: 3 },
      ],
    },
    {
      id: "nimble",
      name: "Nimble",
      kind: "general",
      grade: 1,
      description: `Evade 3%`,
      effects: [
        { stat: "evade", type: "percent", value: 3 },
      ],
    },
    {
      id: "gaunt",
      name: "Gaunt",
      kind: "general",
      grade: 1,
      description: `Evade 4%
      Max HP -3%`,
      effects: [
        { stat: "evade", type: "percent", value: 4 },
        { stat: "maxHp", type: "percent", value: -3 },
      ],
    },
    {
      id: "meticulous",
      name: "Meticulous",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/noble.webp",
      description: `Accuracy 3%
      Starting AP 3`,
      effects: [
        { stat: "accuracy", type: "percent", value: 3 },
        { stat: "startAp", type: "flat", value: 3 },
      ],
    },
    {
      id: "strong",
      name: "Strong",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/body.webp",
      description: `Melee ATK 3%`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 3 },
      ],
    },
    {
      id: "muscular",
      name: "Muscular",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/body.webp",
      description: `Melee ATK 2%
      Slash DEF 30
      Pierce DEF 30
      Crush DEF 30`,
      effects: [
        { stat: "meleeAtk", type: "percent", value: 2 },
        { stat: "slashDef", type: "flat", value: 30 },
        { stat: "pierceDef", type: "flat", value: 30 },
        { stat: "crushDef", type: "flat", value: 30 },
      ],
    },
    {
      id: "professional",
      name: "Professional",
      kind: "general",
      grade: 1,
      description: `Ranged ATK 2%
      Accuracy 3%`,
      effects: [
        { stat: "rangedAtk", type: "percent", value: 2 },
        { stat: "accuracy", type: "percent", value: 3 },
      ],
    },
    {
      id: "intelligent",
      name: "Intelligent",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/noble.webp",
      description: `Magic ATK 3%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 3 },
      ],
    },
    {
      id: "bookish",
      name: "Bookish",
      kind: "general",
      grade: 1,
      description: `Magic ATK 3%
      SPD -2%`,
      effects: [
        { stat: "magicAtk", type: "percent", value: 3 },
        { stat: "spd", type: "percent", value: -2 },
      ],
    },
    {
      id: "swift",
      name: "Swift",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/swift.webp",
      description: `SPD 3%`,
      effects: [
        { stat: "spd", type: "percent", value: 3 },
      ],
    },
    {
      id: "prepared",
      name: "Prepared",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/shield.webp",
      description: `Starting AP 3`,
      effects: [
        { stat: "startAp", type: "flat", value: 3 },
      ],
    },
    {
      id: "lucky",
      name: "Lucky",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/luck.webp",
      description: `Crit Rate 3%`,
      effects: [
        { stat: "critRate", type: "percent", value: 3 },
      ],
    },
    {
      id: "precarious",
      name: "Precarious",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/burst.webp",
      description: `Crit DMG 6%`,
      effects: [
        { stat: "critDmg", type: "percent", value: 6 },
      ],
    },
    {
      id: "determined",
      name: "Determined",
      kind: "general",
      grade: 1,
      description: `Slash Boost 2%
      Pierce Boost 2%
      Crush Boost 2%`,
      effects: [
        { stat: "slashBoost", type: "percent", value: 2 },
        { stat: "pierceBoost", type: "percent", value: 2 },
        { stat: "crushBoost", type: "percent", value: 2 },
      ],
    },
    {
      id: "durable",
      name: "Durable",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/shield.webp",
      description: `Slash DEF 20
      Pierce DEF 20
      Crush DEF 20`,
      effects: [
        { stat: "slashDef", type: "flat", value: 20 },
        { stat: "pierceDef", type: "flat", value: 20 },
        { stat: "crushDef", type: "flat", value: 20 },
      ],
    },
    {
      id: "strong-willed",
      name: "Strong-Willed",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/defend.webp",
      description: `Knockback Resistance 5
      Immaterial DEF 40`,
      effects: [
        { stat: "knockbackRes", type: "flat", value: 5 },
        { stat: "immaterialDef", type: "flat", value: 40 },
      ],
    },
    {
      id: "noticeable",
      name: "Noticeable",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/eyeglasses.webp",
      description: `Aggro Adjustment 6`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: 6 },
      ],
    },
    {
      id: "hidden",
      name: "Hidden",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/hidden.webp",
      description: `Aggro Adjustment -6`,
      effects: [
        { stat: "aggroAdj", type: "flat", value: -6 },
      ],
    },
    {
      id: "noble",
      name: "Noble",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/mental.webp",
      description: `Evade 3%
      Slash DEF 10
      Pierce DEF 10
      Crush DEF 10`,
      effects: [
        { stat: "evade", type: "percent", value: 3 },
        { stat: "slashDef", type: "flat", value: 10 },
        { stat: "pierceDef", type: "flat", value: 10 },
        { stat: "crushDef", type: "flat", value: 10 },
      ],
    },
    {
      id: "strict",
      name: "Strict",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/cross.webp",
      description: `Starting AP 4
      Knockback Resistance -5`,
      effects: [
        { stat: "startAp", type: "flat", value: 4 },
        { stat: "knockbackRes", type: "flat", value: -5 },
      ],
    },
    {
      id: "improvising",
      name: "Improvising",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/two-side.webp",
      description: `AP Recovery 3%
      Starting AP -3`,
      effects: [
        { stat: "apRecovery", type: "percent", value: 3 },
        { stat: "startAp", type: "flat", value: -3 },
      ],
    },
    {
      id: "inferiority-complex",
      name: "Inferiority Complex",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/mental.webp",
      description: `Technic -1
      Vitality -1`,
      effects: [
        { stat: "tec", type: "flat", value: -1 },
        { stat: "vit", type: "flat", value: -1 },
      ],
    },
    {
      id: "parachute",
      name: "Parachute",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/hidden.webp",
      description: `Starting AP -10`,
      effects: [
        { stat: "startAp", type: "flat", value: -10 },
      ],
    },
    {
      id: "immature",
      name: "Immature",
      kind: "general",
      grade: 1,
      icon: "/icons/stats/two-side.webp",
      description: `Accuracy -5%
      Evade -5%`,
      effects: [
        { stat: "accuracy", type: "percent", value: -5 },
        { stat: "evade", type: "percent", value: -5 },
      ],
    },
];  

// Find a trait by its id
export const getTrait = (id: string) => traits.find((t) => t.id === id);
