import type { Weapon, WeaponStat } from "./types";

// Every weapon, written once. To add one, copy a block, change the id and the numbers.
// Characters pick weapons by id, and only weapons of their own type are offered.
export const weapons: Weapon[] = [
  // == EX ===
    // == Ahram ==
      {
        id: "ruthless-judgment",
        name: "Ruthless Judgment",
        grade: "EX",
        type: "Dual Pistols",
        icon: "/weapons/ruthless-judgment.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },

        unique: {
          name: "Focus Target",
          description: `During battle Ranged ATK increases by {rangedAtk}%.
          During battle Pierce Boost increases by {pierceBoost}%.
          During battle Crit DMG increases by {critDmg}%.
          At the start of battle gain {ap} AP.
          Whenever an ally other than yourself attacks, Crit Rate increases by {critRate}% for 2R. Stacks up to 10 times.
          On a successful attack deals Additional Pierce DMG equal to {additionalPierceDmg}% of Ranged ATK`,
          values: {
            rangedAtk: [10, 15, 20, 25, 30],
            ap: [5, 10, 15, 20, 25],
            pierceBoost: [15, 20, 30, 40],
            critDmg: [30, 40, 50],
            critRate: [5, 10],
            additionalPierceDmg: [100],
          },
          effects: [
            { stat: "rangedAtk", type: "percent", valueKey: "rangedAtk", battleOnly: true },
            { stat: "startAp", type: "flat", valueKey: "ap", battleOnly: true },
            { stat: "pierceBoost", type: "percent", valueKey: "pierceBoost", battleOnly: true },
            { stat: "critDmg", type: "percent", valueKey: "critDmg", battleOnly: true },
            { stat: "critRate", type: "percent", valueKey: "critRate", maxStacks: 10, stackKey: "ally-crit", stackLabel: "Crit Rate Stack", battleOnly: true },
            { stat: "additionalPierceDmg", type: "percent", valueKey: "additionalPierceDmg", battleOnly: true },
          ],
        },

        exclusive: {
          characterId: "ahram",
          name: "Ahram Signature: Tactical Encouragement",
          description: `At the start of battle, grants allies [Tactical Offensive Formation].
          
          [Tactical Offensive Formation]: When it is not the target's turn, Crit DMG and Pierce Boost increase by 50%.`,
          effects: [
            // Ally-only formation buff — no self stats to apply
          ]
        },
      },
    // == Ahara ==
      {
        id: "jk220-artemis",
        name: "JK220 Artemis",
        grade: "EX",
        type: "Rifle",
        icon: "/weapons/jk220-artemis.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "critDmg", type: "percent", value: { lv1: 11, lv60: 70 } }],

        unique: {
          name: "The Phantom Menace",
          description: `Increases Counterattack DMG and Support Counterattack DMG by {buff}% during battle.
            On a successful Support Counterattack, increases Ranged ATK by {rangedAtk}% for 2R. Stacks up to 10 times.
            On a successful Additional Response, increases Pierce Boost by {pierceBoost}% for 2R. Stacks up to 10 times`,
          values: { 
            buff: [20, 40, 60, 80, 100],
            rangedAtk: [10, 20, 30, 40, 50],
            pierceBoost: [10, 20, 30, 40, 50],
          },
          effects: [
            { stat: "counterattackDmg", type: "percent", valueKey: "buff", battleOnly: true },
            { stat: "supportCounterattackDmg", type: "percent", valueKey: "buff", battleOnly: true },
            { stat: "rangedAtk", type: "percent", valueKey: "rangedAtk", maxStacks: 10, stackKey: "support-counterattack", stackLabel: "Successful Support Counterattack", battleOnly: true },
            { stat: "pierceBoost", type: "percent", valueKey: "pierceBoost", maxStacks: 10, stackKey: "additional-response", stackLabel: "Successful Additional Response", battleOnly: true },
          ],
        },

        exclusive: {
          characterId: "araha",
          name: "Araha Signature: Ghost",
          description: `On a successful Support Counterattack or when an ally is hit, performs an additional Response against a random enemy and gains 20 AP.
            On a successful attack, reduces the cooldown of [Wire Maneuver Shot] by 1R. At the end of a turn in which she attacks, enters Stealth for 3R.
            Unlocks the active skill [Rapid Covert Maneuver] during battle.

            [Rapid Covert Maneuver]:
            The AI ARTEMIS maintains stable control of the mobility drones without overloading them.
            Leaps to the designated location. When this skill is used, grants [ARTEMIS: Scan Battlefield] to allies within 3m of the landing point for 1R and enters Stealth for 3R.
            When this skill is used, increases Additional DMG Boost by 100% for 3R.

            - [ARTEMIS: Scan Battlefield]: Grants a Shield equal to 100% of Ranged ATK until the end of the Round and restores HP equal to 100% of Ranged ATK`,
          effects: [
            { stat: "additionalDmgBoost", type: "percent", value: 100, battleOnly: true },
          ],
        },
      },
    // == Bella ==
      {
        id: "sacrament-of-mercy",
        name: "Sacrament of Mercy",
        grade: "EX",
        type: "Club & Shield",
        icon: "/weapons/sacrament-of-mercy.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 13.2, lv60: 84 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 13.2, lv60: 84 } },
        ],
        subStats: [{ stat: "magicAtk", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "Prayer for Grace",
          description: `During combat, increases Magic ATK by {magicAtk}%, All DEF by {allDef}, and reduces Aggro Adjustment by {aggroAdj}.
            At the start of battle, grants all allies the [Merciful Touch] effect.

            - [Merciful Touch]: Increases Max HP by {maxHp}%. Does not restore current HP. This effect does not stack.`,
          values: { 
            magicAtk: [20, 25, 30, 35, 40],
            allDef: [60, 100, 140, 180, 220],
            aggroAdj: [16, 18, 20, 22, 24],
            maxHp: [45, 47.5, 50, 52.5, 55]
          },
          effects: [
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", battleOnly: true },
            { stat: "allDef", type: "flat", valueKey: "allDef", battleOnly: true },
            { stat: "aggroAdj", type: "flat", valueKey: "aggroAdj", battleOnly: true },
          ],
        },

        exclusive: {
          characterId: "bella",
          name: "Bella Signature: Devotion of the Goddess",
          description: `Increases SPD by 43% and Crush Boost by 86% during battle. At the start of each Round, gains 3 stacks of [Devoted Servant]. When using an active healing skill, gains 1 stack of [Guidance of the Goddess].

            - [Devoted Servant]: During battle, when an ally other than self has 68.7% HP or lower, performs an additional Response with [Grace of Healing] on the ally within Range with the lowest HP percentage.
            - [Guidance of the Goddess]: Increases Melee ATK by 100% of base Magic ATK, Crit Rate by 25%, and Crit DMG by 50%. Stacks up to 5 times. On a successful Basic Attack, removes all stacks`,
          effects: [
            { stat: "spd", type: "percent", value: 43, battleOnly: true },
            { stat: "crushBoost", type: "percent", value: 86, battleOnly: true },
          ],
        },
      },
    // == Berga ==
      {
        id: "crimson-veil-torturas",
        name: "Crimson Veil Torturas",
        grade: "EX",
        type: "Torturas",
        icon: "/weapons/crimson-veil-torturas.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Crimson Beast Strike",
          description: `Increases Slash Boost by {slashBoost1}% of Max HP during combat.
            When hit by a Weak Point Attack, All DEF increases by {alldef} for the rest of the turn.
            After using a Charge, Leap, Teleportation, or Self-Mobility skill, gain 3 stacks of [Wild Rush] for 2 rounds.
            At the start of your turn, if you have [Wild Rush], Slash Boost increases by {slashBoost2}% for that turn.

            - [Wild Rush]: Can stack up to 5 times. Loses 1 stack at the end of your turn after attacking.`,
          values: { 
            slashBoost1: [1.6, 2.0, 2.4, 2.8, 3.2],
            alldef: [1000, 1250, 1500, 1750, 2000],
            slashBoost2: [20, 25, 30, 35, 40],
          },
          effects: [
            { stat: "slashBoost", type: "percent", valueKey: "slashBoost2", maxStacks: 1, stackKey: "wild-rush", stackLabel: "Wild Rush (start of turn)", battleOnly: true },
            { stat: "allDef", type: "flat", valueKey: "alldef", maxStacks: 1, stackKey: "wp-def", stackLabel: "After Weak Point hit", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "berga",
          name: "Berga Signature: Mirror of the Wild",
          description: `At the start of battle, gain 2 stacks of [The Fire Within].
            At the start of your first turn, gain 45 AP and increase SPD by 40% for that turn.
            When gaining the [Bloodrush] effect, CRIT Chance increases by an additional 33% for 2 rounds and grants immunity to [Taunt], [Fear], [Sleep], [Madness], [Stun], and [Focus Disruption].`,
          effects: [
            { stat: "startAp", type: "flat", value: 45, battleOnly: true },
            { stat: "spd", type: "percent", value: 40, battleOnly: true },
          ]
        },
      },
    // == Cora ==
      {
        id: "orbina",
        name: "Orbina",
        grade: "EX",
        type: "Staff",
        icon: "/weapons/orbina.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 14.3, lv60: 93 } },
        subStats: [{ stat: "magicAtk", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "Blessing of Earth",
          description: `During combat, Magic ATK increases by {magicAtk}%.
          When using a skill other than Standby on your turn, gain the [Blessing of the Architect] effect for 2R.

          - [Blessing of the Architect]: Increases Heat Boost by {heatBoost}%. Stacks up to 3 times`,
          values: { 
            magicAtk: [20, 25, 30, 35, 40],
            heatBoost: [25, 30, 35, 40, 45],
          },
          effects: [  
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", battleOnly: true },
            { stat: "heatBoost", type: "percent", valueKey: "heatBoost", maxStacks: 3, stackKey: "blessing-architect", stackLabel: "Blessing of the Architect", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "cora",
          name: "Cora Signature: Harmony of the Architect",
          description: `At the start of combat, for 3 uses only, the AP cost of [Summon Lava] becomes 0 and its cooldown is reduced by 1R.
          At the start of combat, gain a shield equal to 100% of base Magic ATK for 1R. The shield is removed at the end of the turn if damaged.
          During combat, Magic ATK and Heat Boost increase by 30%. The attack radius of [Summon Lava] and the radius of the [Lava] zone each increase by 1m.
          During combat, the AP cost of [Volcanic Eruption] decreases by 30, and the damage of [Forbidden Land] increases by 100%.
          If HP is at 100%, the AP cost of [Summon Energy] decreases by 40%.`,
          effects: [
            { stat: "magicAtk", type: "percent", value: 30, battleOnly: true },
            { stat: "heatBoost", type: "percent", value: 30, battleOnly: true },
          ]
        },
      },
    // == Echidna ==
      {
        id: "scales-of-blight",
        name: "Scales of Blight",
        grade: "EX",
        type: "Arcane Orb",
        icon: "/weapons/scales-of-blight.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "accuracy", type: "percent", value: { lv1: 15.4, lv60: 98 } }],

        unique: {
          name: "Echo of Astrea",
          description: `During battle, your Accuracy increases by {accuracy}%.
          When using a skill, gain {buff}% to both Poison Boost and Additional DMG Boost until the end of the turn.`,
          values: { 
            accuracy: [20, 25, 30, 35, 40],
            buff: [24, 32, 40, 45, 56],
          },
          effects: [
            { stat: "accuracy", type: "percent", valueKey: "accuracy", battleOnly: true },
            { stat: "poisonBoost", type: "percent", valueKey: "buff", battleOnly: true },
            { stat: "additionalDmgBoost", type: "percent", valueKey: "buff", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "echidna",
          name: "Echidna Signature: Talon of the Forgotten Sting",
          description: `During battle, increases own Accuracy and Poison Boost by 20%.
          At the end of a turn in which a skill (other than Standby) is used, enemies affected by Lingering Miasma take Additional Poison DMG equal to 85% of their total accumulated poison.`,
          effects: [
            { stat: "accuracy", type: "percent", value: 20, battleOnly: true },
            { stat: "poisonBoost", type: "percent", value: 20, battleOnly: true },
          ]
        },
      },
    // == Efreeti ==
      {
        id: "vulkanus",
        name: "Vulkanus",
        grade: "EX",
        type: "Arcane Orb",
        icon: "/weapons/vulkanus.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Endless Heat",
          description: `Increases Crit Rate by {critRate}% of base Max HP during combat.
          After a successful support attack, grants all allies the [Thermal Saturation] effect at the start of the next turn.

          [Thermal Saturation]: Increases Elemental Boost by {elementalBoost}% and Additional DMG Boost by {additionalDmgBoost}%.
          The effect expires at the end of the holder's turn.`,
          values: { 
            critRate: [2, 2.5, 3, 3.5, 4],
            elementalBoost: [8, 9, 10, 11, 12],
            additionalDmgBoost: [16, 20, 24, 28, 32],
          },
          effects: [
            { stat: "elementalBoost", type: "percent", valueKey: "elementalBoost", battleOnly: true },
            { stat: "additionalDmgBoost", type: "percent", valueKey: "additionalDmgBoost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "efreeti",
          name: "Efreeti Signature: The Unextinguishable Flame",
          description: `Increases Crit Rate by 30% during combat.
          Basic ATK grants allies with [Emberbound] a 8% increase in Crit Rate and Additional DMG Boost for 1R.
          When an ally with [Emberbound] attacks, the caster also performs a support attack with [Ember Vortex], even if the ally doesn't have the [Arcane Purge] effect.`,
          effects: [
            { stat: "critRate", type: "percent", value: 30, battleOnly: true },
          ]
        },
      },
    // == Emilia ==
      {
        id: "seryel-medical-hammer",
        name: "Seryel: Medical Hammer",
        grade: "EX",
        type: "Club & Shield",
        icon: "/weapons/medical-hammer.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 11, lv60: 77 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 11, lv60: 77 } },
        ],
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Clinical Insight",
          description: `Aggro Adjustment by {aggroAdj} and increases AP Recovery by {apRecovery}% during battle.
          At the start of the unit's turn, if Crit Rate is 48% or higher, increases Crit Rate by {critRate}% until the end of that turn.`,
          values: { 
            aggroAdj: [16, 18, 20, 22, 24],
            apRecovery: [16, 20, 24, 28, 32],
            critRate: [32, 40, 48, 56, 64],
          },
          effects: [
            { stat: "aggroAdj", type: "flat", valueKey: "aggroAdj", battleOnly: true },
            { stat: "apRecovery", type: "percent", valueKey: "apRecovery", battleOnly: true },
            { stat: "critRate", type: "percent", valueKey: "critRate", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "emilia",
          name: "Emilia Signature: Precision Treatment Protocol",
          description: `At the start of battle, gains AP equal to 200% of INT.
          When using any skill other than Standby, increases allies Elemental Boost by an amount equal to 200% of the caster's INT for 2R.`,
          effects: []
        },
      },
    // == Erneste ==
      {
        id: "dawnbringer",
        name: "Dawnbringer",
        grade: "EX",
        type: "Two-handed Sword",
        icon: "/weapons/dawnbringer.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "meleeAtk", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "Frontline Charisma",
          description: `Increases Block Chance by {blockChance}% during battle.
          On a successful attack, increases the target's DMG Taken by {dmgIncrease}% for 2R.

          Block Chance is capped at 75%.`,
          values: { 
            blockChance: [22, 32, 42, 52, 62],
            dmgIncrease: [10, 15, 20, 25, 30],
          },
          effects: [
            { stat: "blockChance", type: "percent", valueKey: "blockChance", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "erneste",
          name: "Erneste Signature: Our Protector",
          description: `Increases SPD by 100% and Melee ATK by 300% during battle.
          Extends the duration of [Declaration of Victory] to 3R and additionally increases the affected target's Melee ATK by 200% of the caster's Melee ATK.
          On a successful attack, creates an aftershock in a 4m-radius circular area around the caster, pulling in enemies and dealing additional Slash DMG equal to 180% of Melee ATK.
          Unlocks the [Frontline Disruptor] skill.

          [Frontline Disruptor]: Leaps low toward the designated location, sweeping through the surrounding area with a slash.
          Deals Slash DMG equal to 120% of Melee ATK to enemies within a 2.5m-radius circular area around the designated location.
          Knocks back enemies hit by the attack.`,
          effects: [
            { stat: "spd", type: "percent", value: 100, battleOnly: true },
            { stat: "meleeAtk", type: "percent", value: 300, battleOnly: true },
          ]
        },
      },
    // == Eugenia ==
      {
        id: "lumen-veritas",
        name: "Lumen Veritas",
        grade: "EX",
        type: "Arcane Orb",
        icon: "/weapons/lumen-veritas.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Cycle of Eternity",
          description: `During battle, increases your Max HP by {maxHp}%.
          When using a Support-type skill, you gain {ap} AP, and all allies except yourself gain {boost}% increased Crush Boost and Slash Boost for 2R.
          This AP can only be gained once every 2R.`,
          values: { 
            maxHp: [20, 25, 30, 35, 40],
            boost: [20, 24, 28, 32, 36],
            ap: [30, 35, 40, 45, 50],
          },
          effects: [
            { stat: "maxHp", type: "percent", valueKey: "maxHp", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "eugenia",
          name: "Eugenia Signature: Crownseeker's Might",
          description: `During battle, increases your Aggro Adjustment by 50 and reduces the AP cost of [Energy Form Shift] and [Flow Overdrive] by 15.
          During battle, increases Crit Rate by an amount equal to 10% of the ATK increase gained from [Soul Resonance], and increases the damage boost effect of [Flow Overdrive] by 50%.`,
          effects: [
            { stat: "aggroAdj", type: "flat", value: 50, battleOnly: true },
          ]
        },
      },
    // == Everette ==
      {
        id: "the-queens-platinum-staff",
        name: "The Queen's Platinum Staff",
        grade: "EX",
        type: "Staff",
        icon: "/weapons/the-queens-platinum-staff.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "startAp", type: "flat", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Epilogue",
          description: `Once per round, at the start of your turn, your Magic ATK increases by {magicAtk}% for each unit of AP you hold above 100.
          (For example, holding 300 AP results in a Magic ATK increase of {scale}%).`,
          values: { 
            magicAtk: [0.4, 0.5, 0.6, 0.7, 0.8],
            scale: [80, 100, 120, 140, 160],          },
          effects: []
        },

        exclusive: {
          characterId: "everette",
          name: "Everette Signature: The Eternal Queen",
          description: `AP Recovery increases by 12%.
          Additionally, when Everette hits 3 / 4 / 5 or more enemies in a single attack, special effects are granted to her:
          - [Beautiful Queen]: Everette's Crit Rate increases by 100% for 2R.
          - [Elegant Queen]: Everette's Immaterial Boost increases by 300% for 2R.
          - [Eternal Queen]: Everette's Crit DMG increases by 300% for 2R.`,
          effects: [
            { stat: "apRecovery", type: "percent", value: 12, battleOnly: true },
          ]
        },
      },
    // == Fammene ==
      {
        id: "the-anguished-rose",
        name: "The Anguished Rose",
        grade: "EX",
        type: "Mana Shard",
        icon: "/weapons/the-anguished-rose.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "magicAtk", type: "percent", value: { lv1: 12, lv60: 49 } }],

        unique: {
          name: "Sad Ending",
          description: `When using a skill (excluding standby) during the turn, restores all allies' HP by {healing}% of the caster's Magic ATK.
          Also grants all allies (excluding the caster) the [Sad Ending] effect for 1 round.

          [Sad Ending]:
          - Increases Melee ATK by {meleeAtk}% based on the caster's Magic ATK.
          - Increases Ranged ATK by {rangedAtk}% based on the caster's Magic ATK.`,
          values: { 
            healing: [16, 20, 24, 28, 32],
            meleeAtk: [10, 12.5, 15, 17.5, 20],
            rangedAtk: [20, 25, 30, 35, 40],
          },
          effects: []
        },

        exclusive: {
          characterId: "fammene",
          name: "Fammene Signature: Wind of Tragedy",
          description: `Increases AP Recovery by 8%.
          Gains the [Whirling Wind] effect at the start of battle. (Same as the [Whirling Wind] effect caused by the level 1 'Wind's Gathering' skill)`,
          effects: [
            { stat: "apRecovery", type: "percent", value: 8, battleOnly: true },
          ]
        },
      },
    // == Garud ==
      {
        id: "undying-flamefeather",
        name: "Undying Flamefeather",
        grade: "EX",
        type: "Staff",
        icon: "/weapons/undying-flamefeather.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "magicAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Phoenix's Ascent",
          description: `Increases Magic ATK by {magicAtk}% during battle.
          Whenever a Mobility Skill is used, increases Heat Boost and Additional DMG Boost by {heat}% for the rest of the battle. Stacks up to 3 times.`,
          values: { 
            magicAtk: [20, 30, 40, 50, 60],
            heat: [10, 15, 20, 25, 30],
          },
          effects: [
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", battleOnly: true },
            { stat: "heatBoost", type: "percent", valueKey: "heat", maxStacks: 3, stackKey: "phoenix-ascent", stackLabel: "Mobility skill stacks", battleOnly: true },
            { stat: "additionalDmgBoost", type: "percent", valueKey: "heat", maxStacks: 3, stackKey: "phoenix-ascent", stackLabel: "Mobility skill stacks", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "garud",
          name: "Garud Signature: Cataclysmic Flame",
          description: `Gains 30 AP at the start of battle.
          Increases the additional Heat DMG dealt by [Flame] by 100%.`,
          effects: [
            { stat: "startAp", type: "flat", value: 30, battleOnly: true },
          ]
        },
      },
    // == Griselda ==
      {
        id: "the-eye-of-cosmos",
        name: "The Eye of Cosmos",
        grade: "EX",
        type: "Arcane Orb",
        icon: "/weapons/the-eye-of-cosmos.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "The River of Stars",
          description: `During battle, Magic ATK increases by {magicAtk}% and Crush Boost increases by {crushBoost}%.
          Each ally's combat skill damage increases by {combatSkill}% during the first turn after the start of the round, and when an ally other than self uses a skill, recovers HP equal to {recoverHp}% of own Magic ATK.
          Using a skill targeting an ally grants the [Purification] effect.`,
          values: { 
            magicAtk: [40, 50, 60, 70, 80],
            crushBoost: [20, 25, 30, 35, 40],
            combatSkill: [16, 20, 24, 28, 32],
            recoverHp: [12, 15, 18, 21, 24],
          },
          effects: [
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", battleOnly: true },
            { stat: "crushBoost", type: "percent", valueKey: "crushBoost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "griselda",
          name: "Griselda Signature: The Rendezvous",
          description: `Once per Round, when using the [Quantum Singularity] skill, grants the [Arcane Purge] effect to allies excluding Arcane Elementals.`,
          effects: []
        },
      },
    // == Headless Knight ==
      {
        id: "the-cranium-of-the-defeated",
        name: "The Cranium of The Defeated",
        grade: "EX",
        type: "Ancient Core",
        icon: "/weapons/the-cranium-of-the-defeated.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
        ],
        subStats: [{ stat: "meleeAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "The Eve",
          description: `On successful attack, reduces the enemy's AP by {ap}. When attacking two or more enemies, increases Slash Boost by {slashBoost}% until the end of the turn.`,
          values: { 
            ap: [4, 5, 6, 7, 8],
            slashBoost: [20, 25, 30, 35, 40],
          },
          effects: [
            { stat: "slashBoost", type: "percent", valueKey: "slashBoost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "headless-knight",
          name: "Headless Knight Signature: The Mad General",
          description: `On successful attack, increases CRIT rate by 2% and CRIT DMG by 4%. Can stack up to 20 times.`,
          effects: [
            { stat: "critRate", type: "percent", value: 2, maxStacks: 20, stackKey: "mad-general", stackLabel: "On successful attack", battleOnly: true },
            { stat: "critDmg", type: "percent", value: 4, maxStacks: 20, stackKey: "mad-general", stackLabel: "On successful attack", battleOnly: true },
          ]
        },
      },
    // == Ines ==
      {
        id: "the-severer-of-fate",
        name: "The Severer of Fate",
        grade: "EX",
        type: "Two-handed Sword",
        icon: "/weapons/the-severer-of-fate.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "critDmg", type: "percent", value: { lv1: 11, lv60: 70 } }],

        unique: {
          name: "Destiny",
          description: `Crit Rate is increased by {critRate}%. Applies [Fate] effect to enemies successfully hit for 1R.

          [Fate]: When attacking an enemy with this effect, reduces their Slash DEF by {slashDef} until the end of the turn.`,
          values: { 
            critRate: [20, 25, 30, 35, 40],
            slashDef: [600, 750, 900, 1050, 1200],
          },
          effects: [
            { stat: "critRate", type: "percent", valueKey: "critRate", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "ines",
          name: "Ines Signature: The Winter Duchess",
          description: `Reduces AP consumption for the [World Cleaver] skill by 50% during combat.`,
          effects: []
        },
      },
    // == Juha ==
      {
        id: "the-wings-of-glory",
        name: "The Wings of Glory",
        grade: "EX",
        type: "Rifle",
        icon: "/weapons/the-wings-of-glory.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 14.1, lv60: 91 } },
        subStats: [{ stat: "rangedAtk", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "May the Honor Be in the Bullet",
          description: `Increases personal AP Recovery by {apRecovery}%, and raises Pierce boost for all allies by {pierceBoost}%.
          When allies other than the user utilize any skill aside from Standby, they gain the [Glory] effect, stacking up to a maximum of 30 times.
          At the start of each round, all [Glory] effects are consumed, distributing AP to each ally (other than the user) equal to {ap}% of the user's base AP Recovery for each stack.
          All effects granted to allies by [May the Honor Be in the Bullet] will not stack if they share the same name..`,
          values: { 
            apRecovery: [20, 25, 30, 35, 40],
            pierceBoost: [12, 15, 18, 21, 24],
            ap: [2, 2.5, 3, 3.5, 4],
          },
          effects: [
            { stat: "apRecovery", type: "percent", valueKey: "apRecovery", battleOnly: true },
            { stat: "pierceBoost", type: "percent", valueKey: "pierceBoost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "juha",
          name: "Juha Signature: The One Who Judges",
          description: `On Basic Attack, there is a 50% chance to reduce the cooldown of the skills [Combat Roll], [Mental Corrosion] and [The Executioner] by 1 round.`,
          effects: []
        },
      },
    // == Juza ==
      {
        id: "doomstar",
        name: "Doomstar",
        grade: "EX",
        type: "Two-handed Blunt",
        icon: "/weapons/doomstar.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Iron Club Supremacy",
          description: `At the start of battle, increases Max HP by {maxHp}%.
          At the start of battle, increases Melee ATK by {meleeAtk}%.
          At the start of battle, increases Crush Boost by {crushBoost}%.`,
          values: { 
            maxHp: [10, 20, 30, 40, 50],
            meleeAtk: [10, 20, 30, 40, 50],
            crushBoost: [10, 20, 30, 40, 50],
          },
          effects: [
            { stat: "maxHp", type: "percent", valueKey: "maxHp", battleOnly: true },
            { stat: "meleeAtk", type: "percent", valueKey: "meleeAtk", battleOnly: true },
            { stat: "crushBoost", type: "percent", valueKey: "crushBoost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "juza",
          name: "Juza Signature: One Heart and Soul",
          description: `During battle, increases allies Magic ATK by 50% and Healing Received by 50%.
          At the start of battle, gains [Deadly Blow].

          [Deadly Blow]: When attacking, takes Fixed DMG equal to 60% of current HP, then removes this effect. Afterwards, gains 30% DMG Taken Down for 1 Round.`,
          effects: []
        },
      },
    // == Kalina ==
      {
        id: "tyrant-edge",
        name: "Tyrant Edge",
        grade: "EX",
        type: "Twin Swords",
        icon: "/weapons/tyrant-edge.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 14.1, lv60: 91 } },
        subStats: [{ stat: "critRate", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "The Edge Runner",
          description: `Increases Slash Boost by {slashBoost}% of the user's Base Evasion during battle. This effect can stack up to a maximum of {scale}%.
          When targeted by an enemy attack, the user turns to face the attacker. If an attack hits, restores HP equal to {recoverHp}% of the damage dealt.`,
          values: { 
            slashBoost: [12, 15, 18, 21, 24],
            scale: [30, 37.5, 45, 52.5, 60],
            recoverHp: [4, 6, 8, 10, 12],
          },
          effects: []
        },

        exclusive: {
          characterId: "kalina",
          name: "Kalina Signature: Persistence",
          description: `At the start of battle, gains 30 AP and increases Melee ATK by 20%.
          [Hunter on the Vine] now increases Melee ATK and Crit DMG based on movement distance and AP spent. The increase in Crit DMG matches the percentage of Melee ATK gained through this skill (1 AP is treated as 0.1m of linear distance).
          Once per round, using [Blades of Tyranny] restores 55 AP and resets its cooldown.`,
          effects: [
            { stat: "startAp", type: "flat", value: 30, battleOnly: true },
            { stat: "meleeAtk", type: "percent", value: 20, battleOnly: true },
          ]
        },
      },
    // == Kalma ==
      {
        id: "storms-eye",
        name: "Storm's Eye",
        grade: "EX",
        type: "Arcane Orb",
        icon: "/weapons/storms-eye.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 16.5, lv60: 105 } },
        subStats: [{ stat: "critDmg", type: "percent", value: { lv1: 6.6, lv60: 42 } }],

        unique: {
          name: "Cruise System",
          description: `During combat, Magic ATK increases by {magicAtk}%.
          When using a skill other than Standby, gain [Overvoltage] for 1 Round.

          [Overvoltage]: Increases Electric Boost by {electricBoost}%. If the skill used was a charge, leap, teleportation, or self-mobility skill, refreshes the effect to increase Electric Boost by {electricBoost2}% instead.`,
          values: { 
            magicAtk: [20, 25, 30, 35, 40],
            electricBoost: [12, 15, 18, 21, 24],
            electricBoost2: [32, 40, 48, 56, 64],
          },
          effects: [
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", battleOnly: true },
            { stat: "electricBoost", type: "percent", valueKey: "electricBoost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "kalma",
          name: "Kalma Signature: Clear Your Mind and Shoot",
          description: `During combat, Increases Crit Rate by 6.8%, and [Raging Thunderstorm] becomes a area-targeted attack, its attack radius increases by 1m, and its damage increases by 15%.
          When [Lightning Cascade] hits, temporarily reduces the target's Electric DEF by 240.`,
          effects: [
            { stat: "critRate", type: "percent", value: 6.8, battleOnly: true },
          ]
        },
      },
    // == Kaul ==
      {
        id: "massively-vibrating-pole",
        name: "Massively Vibrating Pole",
        grade: "EX",
        type: "One-handed Sword & Shield",
        icon: "/weapons/massively-vibrating-pole.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "meleeAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Resonance of Blood",
          description: `During battle, increases Melee ATK by {meleeAtk}% and all DEF by {allDef}.
          When using a skill other than Standby, increases SPD by {spd}% for 2 rounds. Can stack up to 3 times.`,
          values: { 
            meleeAtk: [20, 24, 28, 32, 36],
            allDef: [100, 120, 140, 160, 180],
            spd: [24, 26, 28, 30, 32],
          },
          effects: [
            { stat: "meleeAtk", type: "percent", valueKey: "meleeAtk", battleOnly: true },
            { stat: "allDef", type: "flat", valueKey: "allDef", battleOnly: true },
            { stat: "spd", type: "percent", valueKey: "spd", maxStacks: 3, stackKey: "resonance-spd", stackLabel: "Skill use SPD stacks", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "kaul",
          name: "Kaul Signature: Surging Desire",
          description: `Increases Basic ATK DMG by 20% during battle.
          Reduces the AP cost of [Masochistic Frenzy] by 45.
          When activating [Slaughter the Weak] with HP at 99% or below, gains one instance of [Extra Action]. This effect cannot trigger during an Extra Action.
          When using [Reckless Leap], reduces DMG taken by 50% until the start of the user's next turn.`,
          effects: []
        },
      },
    // == Kilon ==
      {
        id: "aronbite",
        name: "Aronbite",
        grade: "EX",
        type: "Two-handed Sword",
        icon: "/weapons/aronbite.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "meleeAtk", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "Unbreakable Wrath",
          description: `Increases Melee ATK by {meleeAtk}% during combat.
          When hit or healed, gain a stack that increases Max HP by {maxHp}% and Aggro Adjustment by {aggroAdj}. Stacks up to 9 times.
          On Basic ATK, gain 1 stack of [Composure].

          - [Composure]: Stacks up to 6 times. At max stacks, at the start of your turn, gain 55 AP and the [Fortitude] effect, then Composure resets.

          - [Fortitude]: Consumes 50% of your HP and increases Melee ATK by {meleeAtk2}% of the HP consumed. Lasts until the end of the turn. If you Standby, recover HP equal to the amount consumed.`,
          values: { 
            meleeAtk: [12, 27, 42, 57, 72],
            maxHp: [8, 9, 10, 11, 12],
            aggroAdj: [8, 9, 10, 11, 12],
            piercedef: [140, 175, 210, 245, 280],
            meleeAtk2: [100, 115, 130, 145, 160],
          },
          effects: [
            { stat: "meleeAtk", type: "percent", valueKey: "meleeAtk", battleOnly: true },
            { stat: "maxHp", type: "percent", valueKey: "maxHp", maxStacks: 9, stackKey: "unbreakable", stackLabel: "Hit/heal stacks", battleOnly: true },
            { stat: "aggroAdj", type: "flat", valueKey: "aggroAdj", maxStacks: 9, stackKey: "unbreakable", stackLabel: "Hit/heal stacks", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "kilon",
          name: "Kilon Signature: Wastelands Enforcer",
          description: `Increases Lifesteal by 4% during combat.
          While holding the [Fortitude] effect, using the [Thousand Arms Stance] skill also restores HP equal to the amount consumed.
          On Basic ATK, has a 29% chance to reduce the cooldown of [Split the Crown] by 1 round.
          Using the [Taunting Roar] skill grants 3 stacks of [Unyielding Bulwark] and triggers a follow-up attack with [Thousand Arms Stance].

          - [Unyielding Bulwark]: Increases All DEF by 120. Stacks up to 3 times. Loses 1 stack at the start of each round.`,
          effects: []
        },
      },
    // == Kim Ga-young ==
      {
        id: "ss4-refitted-model",
        name: "SS4 - Refitted Model",
        grade: "EX",
        type: "Rifle",
        icon: "/weapons/ss4-refitted-model.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "rangedAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Calibration of Steel and Shot",
          description: `During battle, increases Ranged ATK by {rangedAtk}%.
          When it is not this unit's turn, increases Ranged ATK by {rangedAtk2}%.`,
          values: { 
            rangedAtk: [20, 25, 30, 35, 40],
            rangedAtk2: [40, 50, 60, 70, 80],
          },
          effects: [
            { stat: "rangedAtk", type: "percent", valueKey: "rangedAtk", battleOnly: true },
            { stat: "rangedAtk", type: "percent", valueKey: "rangedAtk2", maxStacks: 1, stackKey: "off-turn", stackLabel: "Not own turn", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "kim-ga-young",
          name: "Kim Ga-young Signature: Upgrade!!!",
          description: `At the start of battle, inflicts [Drone Scouting] on all enemies.
          When performing a Support Attack, reduces the cooldown of [Wire Maneuver Shot] by 1R.
          At the end of a turn in which she attacks, enters Stealth for 3R.

          If the following General Traits are possessed, additionally gains the corresponding stats:
          - [Efficient]: Crit DMG +100%
          - [Competent]: Ranged ATK +30%
          - [Methodical]: Support Attack DMG +30%`,
          effects: []
        },
      },
    // == Korabi ==
      {
        id: "red-pudding",
        name: "Red Pudding",
        grade: "EX",
        type: "Staff",
        icon: "/weapons/red-pudding.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 13.2, lv60: 84 } },
        subStats: [{ stat: "slashBoost", type: "percent", value: { lv1: 6.6, lv60: 42 } }],

        unique: {
          name: "Painborne Bloom",
          description: `Magic ATK increases by {magicAtk}% during battle.
          Enemies hit by your attacks are afflicted with [Pulse of the Rift] for 2 rounds.

          [Pulse of the Rift]: SPD increases by 32% and Physical DEF decreases by {physicalDef}.`,
          values: { 
            magicAtk: [20, 25, 30, 35, 40],
            physicalDef: [240, 300, 360, 420, 480],
          },
          effects: [
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "korabi",
          name: "Korabi Signature: Blooming Bloodlust",
          description: `During combat, Additional Response triggered by the skill [Timid, Yet Explosive!] always activates at 100% chance.
          The [Burning Desire] effect granted by the skill [Blood Pact] increases the target ally's Slash Boost and Crush Boost by 50% of your Base Slash Boost, and increases their Melee ATK and Ranged ATK by 15% of your Base Magic ATK.
          Slash Boost and Crush Boost gained this way cannot exceed 30%.
          When using the skill [Whirlwind of Bloodlust], removes Weak Points from all allies for 2 rounds.`,
          effects: []
        },
      },
    // == Kotoha ==
      {
        id: "fox-spirits-guidance",
        name: "Ofuda: Fox Spirit's Guidance",
        grade: "EX",
        type: "Mana Shard",
        icon: "/weapons/fox-spirits-guidance.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "magicAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Miko's Guidance",
          description: `At the start of battle, gains {startAp} AP and reduces damage taken by {reduceDmg}% throughout the battle.
          Whenever a Support skill is used, increases allies All ATK by {allAtk}% for the rest of the battle.
          ATK increases applied to allies by [Unique: Miko's Guidance] do not stack.`,
          values: { 
            startAp: [40, 45, 50, 55, 60],
            reduceDmg: [10, 15, 20, 25, 30],
            allAtk: [20, 28, 36, 44, 52],
          },
          effects: [
            { stat: "startAp", type: "flat", valueKey: "startAp", battleOnly: true },
            { stat: "allAtk", type: "percent", valueKey: "allAtk", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "kotoha",
          name: "Kotoha Signature: Light in the Darkness",
          description: `Reduces the AP cost of [Offering of Life] to 0 during battle.

          While [Perfect Unity] is active, Elemental Boost increases by 40%, plus an additional 4% for each skill level of [Art of Perfect Unity].`,
          effects: [
            { stat: "elementalBoost", type: "percent", value: 40, battleOnly: true },
          ]
        },
      },
    // == Leah ==
      {
        id: "blessed-cat-bell",
        name: "Blessed Cat Bell",
        grade: "EX",
        type: "Mana Shard",
        icon: "/weapons/blessed-cat-bell.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 9.9, lv60: 63 } },
        subStats: [{ stat: "evade", type: "percent", value: { lv1: 19.8, lv60: 126 } }],

        unique: {
          name: "Link to the Spirit Realm",
          description: `Increases AP Recovery by {apRecovery}% during combat.
          During the user's turn, reduces all enemies Immaterial DEF by {immaterialDef}.
          If the user's Base Evasion is 440 or higher, increases all enemies DMG Taken by {dmgTaken}% during the user's turn.`,
          values: { 
            apRecovery: [20, 25, 30, 35, 40],
            immaterialDef: [160, 200, 240, 280, 320],
            dmgTaken: [12, 15, 18, 21, 24],
          },
          effects: [
            { stat: "apRecovery", type: "percent", valueKey: "apRecovery", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "leah",
          name: "Leah Signature: Wish You All the Best",
          description: `Increases Crit Rate by 18% and Immaterial Boost by 22% during combat.
          Reduces the AP cost of [Spiritclaw Rite] by 100%.
          The Pierce Boost granted by [Swiftpaw's Blessing] also increases the target's Slash Boost and Crush Boost by 85% of that value.
          The Poison Boost granted by [Proudclaw's Blessing] also increases the target's Heat, Cold, Electric, and Immaterial Boost by 85% of that value.
          When attacking with [Soulflame Fury], grants allies with 70% HP or less a [Shadow Veil] shield for 2R.

          - [Shadow Veil]: Grants a shield equal to 12% of the user's Base Evasion and increases Evasion by 15%.`,
          effects: [
            { stat: "critRate", type: "percent", value: 18, battleOnly: true },
            { stat: "immaterialBoost", type: "percent", value: 22, battleOnly: true },
          ]
        },
      },
    // == Lisandria ==
      {
        id: "vengeful-thornblade",
        name: "Vengeful Thornblade",
        grade: "EX",
        type: "One-handed Sword",
        icon: "/weapons/vengeful-thornblade.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
        ],
        subStats: [{ stat: "meleeAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Bloomed by Revelation",
          description: `During battle, Melee ATK increases by {meleeAtk}% and Aggro Adjustment increases by {aggroAdj}.
          During the weapon holder's turn, Support Attack DMG of allies other than self increases by {supportAttackDmg}%.`,
          values: { 
            meleeAtk: [20, 25, 30, 35, 40],
            aggroAdj: [12, 15, 18, 21, 24],
            supportAttackDmg: [40, 50, 60, 70, 80],
          },
          effects: [
            { stat: "meleeAtk", type: "percent", valueKey: "meleeAtk", battleOnly: true },
            { stat: "aggroAdj", type: "flat", valueKey: "aggroAdj", battleOnly: true },
            { stat: "supportAttackDmg", type: "percent", valueKey: "supportAttackDmg", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "lisandria",
          name: "Lisandria Signature: Vow Beneath the Thorned Bloom",
          description: `During battle, AP cost of Basic Attacks decreases by 16%.
          Using [Sword of the Unknown], grants 60 AP and reduces its cooldown by 1R.
          Using [Blood Judgment], grants [Penance].

          - [Penance]: If current HP is 50% or higher, gains 1 [Salvation] at the end of any turn and Additional DMG Boost increases by 10%.
          At the end of the effect holder's turn, these effects are doubled. This Additional DMG Boost can stack up to 20 times.
          If [Salvation] is not possessed, [Penance] and all Additional DMG Boost gained from this effect are removed.`,
          effects: []
        },
      },
    // == Luise ==
      {
        id: "sol",
        name: "Sol",
        grade: "EX",
        type: "Staff",
        icon: "/weapons/sol.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "heatBoost", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "Inferno",
          description: `Increases Crit Rate by {critRate}% during combat.
          For every 1 point below 100 base Movement Speed, increases Crit DMG by {critDmg}%.
          At the start of any random turn, gains [Sunlit Ember].

          [Sunlit Ember]: Increases Heat Boost by {heatBoost}%, stacking up to 5 times.
          Expires at the end of the user's turn if any skill other than Standby is used.`,
          values: { 
            critRate: [30, 32.5, 35, 37.5, 40],
            critDmg: [1, 2.25, 3.5, 4.75, 6],
            heatBoost: [24, 26, 28, 30, 32],
          },
          effects: [
            { stat: "critRate", type: "percent", valueKey: "critRate", battleOnly: true },
            { stat: "heatBoost", type: "percent", valueKey: "heatBoost", maxStacks: 5, stackKey: "sunlit-ember", stackLabel: "Sunlit Ember", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "luise",
          name: "Luise Signature: Flare",
          description: `During battle, AP cost of [Flame Arrow], [Fireball] and [Blaze of Ascension] is reduced by 15, 30 and 75, respectively.

          When an attack succeeds using a skill other than [Blaze of Ascension], the Cooldown of [Blaze of Ascension] is reduced by 1 round.

          Additional damage from [Fireflake Explosion] can critically strike, and after using a skill other than Standby during your turn, [Fireflake Explosion] activates, doubling its damage.`,
          effects: []
        },
      },  
    // == Mahari ==
      {
        id: "the-arms-of-laphnesis",
        name: "The Arms of Laphnesis",
        grade: "EX",
        type: "One-handed Sword & Shield",
        icon: "/weapons/the-arms-of-laphnesis.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "critDmg", type: "percent", value: { lv1: 15.4, lv60: 98 } }],

        unique: {
          name: "Hammer and Anvil",
          description: `During battle, Melee ATK increases by {meleeAtk}%, and All DEF increases by {allDef}. At the end of own turn, if the character has a shield effect, all allies are granted the [Origin of Resolve] effect for 1R.

          [Origin of Resolve]: Crit DMG increases by {critDmg}%, and additionally, increases by {scale}% of the caster's base Crit DMG.`,
          values: { 
            meleeAtk: [12, 15, 18, 21, 24],
            allDef: [180, 225, 270, 315, 360],
            critDmg: [6, 8, 10, 12, 14],
            scale: [16, 20, 24, 28, 32],
          },
          effects: [
            { stat: "meleeAtk", type: "percent", valueKey: "meleeAtk", battleOnly: true },
            { stat: "allDef", type: "flat", valueKey: "allDef", battleOnly: true },
            { stat: "critDmg", type: "percent", valueKey: "critDmg", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "mahari",
          name: "Mahari Signature: Rank Formation",
          description: `Once per round, at the end of an ally's turn (excluding the caster), they gain 45 AP.`,
          effects: []
        },
      },
    // == Marhim ==
      {
        id: "the-crimson-executioner",
        name: "The Crimson Executioner",
        grade: "EX",
        type: "Twin Swords",
        icon: "/weapons/the-crimson-executioner.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "critRate", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Bloodsoaked Executioner",
          description: `Increases Pierce Boost by {pierceBoost}% during battle.
          On attack, temporarily increases Melee ATK proportionally based on the distance moved in a straight line this turn, up to 2m, increasing by {meleeAtk}%.`,
          values: { 
            pierceBoost: [20, 25, 30, 35, 40],
            meleeAtk: [40, 50, 60, 70, 80],
          },
          effects: [
            { stat: "pierceBoost", type: "percent", valueKey: "pierceBoost", battleOnly: true },
            { stat: "meleeAtk", type: "percent", valueKey: "meleeAtk", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "marhim",
          name: "Marhim Signature: The Bloodbath",
          description: `Using the [Bloodsoaked Execution] skill during battle reduces its cooldown by 2 rounds.`,
          effects: []
        },
      },
    // == Marika ==
      {
        id: "lamoran-spiraldrive",
        name: "Lamoran Spiraldrive",
        grade: "EX",
        type: "Two-handed Sword",
        icon: "/weapons/lamoran-spiraldrive.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 14.3, lv60: 77 } },
        subStats: [
          { stat: "meleeAtk", type: "percent", value: { lv1: 5.5, lv60: 35 } },
          { stat: "spd", type: "percent", value: { lv1: 5.5, lv60: 35 } },
        ],

        unique: {
          name: "Spiral Blade",
          description: `During battle, your SPD increases by {spd}%.
          Each time you attack, Crit DMG increases by {critDmg}% for 1R. Stacks up to 10 times.`,
          values: { 
            spd: [10, 15, 20, 25, 30],
            critDmg: [1, 2, 3, 4, 5],
          },
          effects: [
            { stat: "spd", type: "percent", valueKey: "spd", battleOnly: true },
            { stat: "critDmg", type: "percent", valueKey: "critDmg", maxStacks: 10, stackKey: "spiral-blade", stackLabel: "Attack stacks", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "marika",
          name: "Marika Signature: Wish of Devoted Love",
          description: `During battle, your SPD increases by 20.
          When using [Bloodline Awakening], recover 100% of the AP spent on movement during that turn.

          Additionally, the AP Cost of [Bloodline Awakening] is reduced by 10, and its Cooldown is reduced by 1R.`,
          effects: [
            { stat: "spd", type: "flat", value: 20, battleOnly: true },
          ]
        },
      },
    // == Matrotho ==
      {
        id: "the-lamoran-wind",
        name: "The Lamoran Wind",
        grade: "EX",
        type: "One-handed Sword",
        icon: "/weapons/the-lamoran-wind.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "critDmg", type: "percent", value: { lv1: 15.4, lv60: 98 } }],

        unique: {
          name: "Gleamblade",
          description: `At the start of each round, increases Crit Rate by {critRate}% for each amount of AP Recovery exceeding 100.
          If current HP is 100% at the start of the round, Crit Rate increases by an additional {critRate2}%.`,
          values: { 
            critRate: [0.4, 0.5, 0.6, 0.7, 0.8],
            critRate2: [8, 10, 12, 14, 16],
          },
          effects: [
            { stat: "critRate", type: "percent", valueKey: "critRate2", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "matrotho",
          name: "Matrotho Signature: The Windblade",
          description: `Once per round, performs a Support Attack on successful attack.`,
          effects: []
        },
      },
    // == Maximilia ==
      {
        id: "kaiserstolz",
        name: "Kaiserstolz",
        grade: "EX",
        type: "One-handed Sword & Shield",
        icon: "/weapons/kaiserstolz.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "critRate", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Grace of the Empire",
          description: `During battle, Max HP increases by {maxHp}%.
          All allies (excluding self) gain {physicalDef} Slash, Pierce, and Crush DEF.`,
          values: { 
            maxHp: [20, 25, 30, 35, 40],
            physicalDef: [200, 240, 280, 320, 360],
          },
          effects: [
            { stat: "maxHp", type: "percent", valueKey: "maxHp", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "maximilia",
          name: "Maximilia Signature: Will of Protection",
          description: `During battle, Crit Rate increases by 20%.
          If Crit Rate exceeds 100%, every 5% excess Crit Rate increases the AP reduction of [Sunder Strike] by 1, up to 5.
          The DEF reduction effect of [Pressure] increases proportional to your Crit Rate, up to 40% at 100% Crit Rate.`,
          effects: [
            { stat: "critRate", type: "percent", value: 20, battleOnly: true },
          ]
        },
      },
    // == Min Eun-sol ==
      {
        id: "the-black-idol",
        name: "The Black Idol",
        grade: "EX",
        type: "Mana Shard",
        icon: "/weapons/the-black-idol.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Dark Guardianship",
          description: `During battle, increases Magic ATK by {magicAtk}% of Max HP.
          Recovers {recoverHp}% of HP each time an enemy on the battlefield is defeated.`,
          values: { 
            magicAtk: [12, 15, 18, 21, 24],
            recoverHp: [12, 15, 18, 21, 24],
          },
          effects: []
        },

        exclusive: {
          characterId: "min_eun_sol",
          name: "Min Eun-sol Signature: Black Pulse",
          description: `At the start of any turn, if you have the [King's Favor] effect, all allies except yourself gain 1000 to All DEF for the duration of the turn.`,
          effects: []
        },
      },
    // == Mira ==
      {
        id: "eleuthia",
        name: "Eleuthia",
        grade: "EX",
        type: "Torturas",
        icon: "/weapons/eleuthia.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
        ],
        subStats: [{ stat: "magicAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Guardian Star's Riposte",
          description: `At the start of each round, gains {stack} additional Counterattack opportunities.
          Max HP increases by {maxHp}%.`,
          values: { 
            stack: [1, 2, 3, 4, 5],
            maxHp: [20, 25, 30, 35, 40],
          },
          effects: [
            { stat: "maxHp", type: "percent", valueKey: "maxHp", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "mira",
          name: "Mira Signature: Dawnlight's Response",
          description: `At the start of battle, gains 280 stacks of [Radiance of Oath].
          When using [Afterimage of Stars], the effect is also applied to yourself.`,
          effects: []
        },
      },
    // == Mirana ==
      {
        id: "chrysaor",
        name: "Chrysaor",
        grade: "EX",
        type: "Torturas",
        icon: "/weapons/chrysaor.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
        ],
        subStats: [{ stat: "magicAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Echo of Light",
          description: `At the start of each round, gains {stack} additional Counterattack opportunities.
          Magic ATK increases by {maxHp}%.`,
          values: { 
            stack: [1, 2, 3, 4, 5],
            magicAtk: [20, 25, 30, 35, 40],
          },
          effects: [
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "mirana",
          name: "Mirana Signature: Dawnlight's Resonance",
          description: `At the start of battle, gains 280 stacks of [Radiance of Oath] and increases Immaterial Boost by 40%.
          When Mira uses [Afterimage of Stars], its effects are also applied to the weapon holder.`,
          effects: [
            { stat: "immaterialBoost", type: "percent", value: 40, battleOnly: true },
          ]
        },
      },
    // == Mu Yingying ==
      {
        id: "tactical-suppression-gear-es01",
        name: "Tactical Suppression Gear - ES01",
        grade: "EX",
        type: "Club & Shield",
        icon: "/weapons/tactical-suppression-gear-es01.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
        subStats: [{ stat: "meleeAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Anti-Shock Armor",
          description: `During battle, Electric DEF increases by {electricDef}.
          Additionally, Counterattack DMG increases by {counterattackDmg}%.
          Block Rate increases by {blockChance}%. Block Rate is capped at 75%.`,
          values: { 
            electricDef: [200, 400, 600, 800, 1000],
            counterattackDmg: [50, 100, 150, 200, 250],
            blockChance: [10, 20, 30, 40, 50],
          },
          effects: [
            { stat: "electricDef", type: "flat", valueKey: "electricDef", battleOnly: true },
            { stat: "counterattackDmg", type: "percent", valueKey: "counterattackDmg", battleOnly: true },
            { stat: "blockChance", type: "percent", valueKey: "blockChance", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "mu-yingying",
          name: "Mu Yingying Signature: Current Brand",
          description: `On a successful hit, inflicts [Electrocution] on the enemy.
          Converts the Crush DMG of [Suppression Strike] into Electric DMG and increases its range to 5m. Can perform unlimited Counterattacks during battle.`,
          effects: []
        },
      },
    // == Nari ==
      {
        id: "zamiel",
        name: "Zamiel",
        grade: "EX",
        type: "Rifle",
        icon: "/weapons/zamiel.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "rangedAtk", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Star Shooter",
          description: `During battle, Pierce Boost increases by {pierceBoost}%.
          At the start of your turn, Crit Rate increases by {critRate}%.
          This effect is removed at the end of the turn or upon moving.`,
          values: { 
            pierceBoost: [20, 25, 30, 35, 40],
            critRate: [20, 25, 30, 35, 40],
          },
          effects: [
            { stat: "pierceBoost", type: "percent", valueKey: "pierceBoost", battleOnly: true },
            { stat: "critRate", type: "percent", valueKey: "critRate", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "nari",
          name: "Nari Exclusive: Aether Bullet Sharpshooter",
          description: `During combat, the AP consumption of the [Precision Shooting Stance] skill is reduced by 40.
          When using this skill, the [Piercing Aether Bullet] skill changes to a directional attack with an increased attack width of 1 meter.
          After using the [Combat Roll] skill from the basic stance, the user can follow up with [Precision Shooting Stance] for additional responses.`,
          effects: []
        },
      },
    // == Nika ==
      {
        id: "the-ninth-bite",
        name: "The Ninth Bite",
        grade: "EX",
        type: "Twin Swords",
        icon: "/weapons/the-ninth-bite.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "accuracy", type: "percent", value: { lv1: 15.4, lv60: 98 } }],

        unique: {
          name: "Death Sentence",
          description: `Increases Poison Boost by {poisonBoost}%.
          On successful attack, deals Additional Poison DMG equal to {additionalPoisonDmg}% of Accuracy.`,
          values: { 
            poisonBoost: [40, 50, 60, 70, 80],
            additionalPoisonDmg: [60, 75, 90, 105, 120],
          },
          effects: [
            { stat: "poisonBoost", type: "percent", valueKey: "poisonBoost", battleOnly: true },
            { stat: "additionalPoisonDmg", type: "percent", valueKey: "additionalPoisonDmg", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "nika",
          name: "Nika Signature: Venomous Fragrance",
          description: `At the start of a random turn or when the user activates a skill, all enemies within 5m are afflicted with [Poison Scent].
          If a target under [Poison Scent] possesses the [Necrotoxin] effect at the end of the turn, they take Additional Poison DMG equal to 20% of their accumulated [Necrotoxin].`,
          effects: []
        },
      },
    // == Nonoha ==
      {
        id: "whispering-breeze",
        name: "Whispering Breeze",
        grade: "EX",
        type: "Mana Shard",
        icon: "/weapons/whispering-breeze.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 16.5, lv60: 105 } },
        subStats: [{ stat: "magicAtk", type: "percent", value: { lv1: 3.3, lv60: 21 } }],

        unique: {
          name: "Call of the Skyweave",
          description: `During battle, increases Magic ATK by {magicAtk}%.
          At the end of a turn in which a Support skill is used, increases all allies' SPD by {spd}% for 2 rounds. Can stack up to 2 times.`,
          values: { 
            magicAtk: [20, 25, 30, 35, 40],
            spd: [40, 44, 48, 52, 56],
          },
          effects: [
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", battleOnly: true },
            { stat: "spd", type: "percent", valueKey: "spd", maxStacks: 2, stackKey: "skyweave-spd", stackLabel: "Support skill SPD", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "nonoha",
          name: "Nonoha Signature: Endless Wings",
          description: `At the start of battle, grants all allies except the user the [Source of Wind] effect. If the user becomes incapacitated, [Source of Wind] is removed from all allies.
          Once per battle, the following effect triggers:
          If an ally with [Source of Wind] ends their turn with 30% HP or less, they gain a Shield equal to 50% of their Max HP. This Shield lasts until the start of that ally's next turn.

          [Source of Wind]: At the start of the holder's turn, if their SPD exceeds 200, increases Elemental Boost by 1% for every 10 SPD above 200, up to a maximum of 40%.
          If the holder attacks the same enemy twice during their turn, after the turn ends, deals Fixed DMG equal to half of the holder's total ATK to that enemy.
          If the holder's SPD exceeds 200, this Fixed DMG is increased by 1% for every 2 SPD above 200, up to a maximum increase of 200%.`,
          effects: []
        },
      },
    // == Nymset ==
      {
        id: "the-silver-bough",
        name: "The Silver Bough",
        grade: "EX",
        type: "Club & Shield",
        icon: "/weapons/the-silver-bough.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
        ],
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Mighty",
          description: `During battle, increases SPD by {spd}% and Aggro Adjustment by {aggroAdj}.
          If an enemy within 5m attacks you, temporarily decreases their All ATK by {allAtk}%.`,
          values: { 
            spd: [16, 20, 24, 28, 32],
            aggroAdj: [20, 25, 30, 35, 40],
            allAtk: [30, 37, 44, 51, 58],
          },
          effects: [
            { stat: "spd", type: "percent", valueKey: "spd", battleOnly: true },
            { stat: "aggroAdj", type: "flat", valueKey: "aggroAdj", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "nymset",
          name: "Nymset Signature: Seraph",
          description: `During battle, increases the attack radius of the [Divine Tongue] skill by 1m and reduces its cooldown by 1 Round.`,
          effects: []
        },
      },
    // == Olivia ==
      {
        id: "star-splicer",
        name: "Star Splicer",
        grade: "EX",
        type: "Two-handed Sword",
        icon: "/weapons/star-splicer.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 16.5, lv60: 105 } },
        subStats: [{ stat: "apRecovery", type: "percent", value: { lv1: 1.1, lv60: 7 } }],

        unique: {
          name: "Phenomenon",
          description: `Reduces Crit DMG dealt by 40%, but increases Melee ATK by {meleeAtk}% while in combat.
          At the start of your turn, gain 1 stack of [Blade Resonance]. (This effect does not trigger if you used Standby in your previous turn.)
          Upon reaching 3 stacks of [Blade Resonance], gain [Grand Echo] for 2 turns.

          - [Blade Resonance]: Increases Basic ATK DMG and Combat Skill DMG by {buff}%, stacking up to 3 times.
          - [Grand Echo]: Increases Slash Boost by {slashBoost}%. (All [Blade Resonance] stacks reset when [Grand Echo] ends).`,
          values: { 
            meleeAtk: [20, 25, 30, 35, 40],
            buff: [8, 9, 10, 11, 12],
            slashBoost: [12, 14, 16, 18, 20],
          },
          effects: [
            { stat: "meleeAtk", type: "percent", valueKey: "meleeAtk", battleOnly: true },
            { stat: "slashBoost", type: "percent", valueKey: "slashBoost", maxStacks: 1, stackKey: "grand-echo", stackLabel: "Grand Echo", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "olivia",
          name: "Olivia Signature: Nova Strike",
          description: `After using [Thousandfold Execution], gain 1 stack of [Transcendence].
          Upon reaching 2 stacks of [Transcendence], perform an additional Counterattack with [Nova Strike] instead of [Thousandfold Execution].
          (All [Transcendence] stacks are reset afterward).

          [Nova Strike]:
          Swings the blade in a wide arc, slashing all nearby enemies.
          Deals 150% Slash DMG based on [Thousandfold Execution] to enemies within an 8m radius and sets AP to 159.`,
          effects: []
        },
      },
    // == Osla ==
      {
        id: "the-grand-ancestors-spirit",
        name: "The Grand Ancestor's Spirit",
        grade: "EX",
        type: "Torturas",
        icon: "/weapons/the-grand-ancestors-spirit.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 11, lv60: 70 } },
        ],
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Verdict of the History",
          description: `During battle, SPD increases by {spd}% and Aggro Adjustment increases by {aggroAdj}.
          For any enemy that initiates an attack on the unit, all Support Counterattacks, Counterattacks, or Additional Attacks directed at that enemy during the same turn are treated as Weak Point Attacks (provided the skill used is eligible for Weak Point Attacks).
          When attacked, allied units, except the unit under attack, receive the [Primordial Spirit's Descent] effect.
          This effect can stack up to 5 times.

          [Primordial Spirit's Descent]:
          On a successful attack, inflict Additional Slash DMG and remove 1 stack from the effect.
          Additional DMG equals {additionalDmg}% of the Melee ATK power of the effect provider, with damage increased proportionally to Crit Rate (damage doubles at 100% Crit Rate).
          This effect activates only via a single weapon during battle; if the weapon-bearer becomes incapacitated, the effect ceases.`,
          values: { 
            spd: [16, 20, 24, 28, 32],
            aggroAdj: [20, 25, 30, 35, 40],
            additionalDmg: [160, 200, 240, 280, 320],
          },
          effects: [
            { stat: "spd", type: "percent", valueKey: "spd", battleOnly: true },
            { stat: "aggroAdj", type: "flat", valueKey: "aggroAdj", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "osla",
          name: "Osla Signature: Ancient Spirit's Core",
          description: `During battle, the probability of applying the [Taunt] effect from the [Afflict Pain] skill increases by an additional 43%. In addition, if the current HP of the unit falls below 30% upon receiving an attack, restore 10% of Max HP.
          The Additional Slash DMG from [Primordial Spirit's Descent] is applied at double strength.`,
          effects: []
        },
      },
    // == Palekar ==
      {
        id: "thread-of-ages",
        name: "Thread of Ages",
        grade: "EX",
        type: "Twin Swords",
        icon: "/weapons/thread-of-ages.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 14.3, lv60: 93 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 14.3, lv60: 93 } },
        ],
        subStats: [{ stat: "evade", type: "percent", value: { lv1: 11, lv60: 70 } }],

        unique: {
          name: "Legacy of War",
          description: `Increases the user's Magic ATK by {magicAtk}% during battle.
          When attacking an enemy, increases Immaterial Boost by {immaterialBoost}% until the end of the turn.`,
          values: { 
            magicAtk: [20, 25, 30, 35, 40],
            immaterialBoost: [40, 50, 60, 70, 80],
          },
          effects: [
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", battleOnly: true },
            { stat: "immaterialBoost", type: "percent", valueKey: "immaterialBoost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "palekar",
          name: "Palekar Signature: She Who Cleaves Through Crisis",
          description: `During battle, increases Magic ATK by 20% and gains 30 AP.
          During battle, reduces the AP cost of [Verse of Ordeal] by 15.
          Targets affected by [Unstable] have All ATK reduced by 30%, and their Slash, Poison, and Immaterial DEF are additionally reduced by 1 for every 1 base Evade the caster has, up to a maximum reduction of 200.`,
          effects: [
            { stat: "magicAtk", type: "percent", value: 20, battleOnly: true },
            { stat: "startAp", type: "flat", value: 30, battleOnly: true },
          ]
        },
      },
    // == Pantheri ==
      {
        id: "tideblossom",
        name: "Tideblossom",
        grade: "EX",
        type: "One-handed Sword",
        icon: "/weapons/tideblossom.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "evade", type: "percent", value: { lv1: 15.4, lv60: 98 } }],

        unique: {
          name: "Flowing Arc",
          description: `Increases SPD during combat by {spd}% and Aggro Adjustment by {aggroAdj}.
          When an ally successfully dodges, the wielder gains 1 stack of [Sword Wave], up to 6 stacks.
          At the start of each round, grants either [Deep Trench] or [High Crest] to all allies except the wielder for 1 round. All [Sword Wave] stacks are consumed.
          Effects granted by [Unique: Flowing Arc] do not stack with effects of the same name.

          - [Sword Wave]: Affects the strength of [Deep Trench] and [High Crest] based on the number of stacks consumed.
          - [Deep Trench]: Increases Crit Rate by 2% + {critRate}% per [Sword Wave] stack consumed.
          Only applies if the unit's Crit Rate is below 75%.
          - [High Crest]: Increases Crit DMG by 4% + {critDmg}% per [Sword Wave] stack consumed.
          Only applies if the unit's Crit Rate is 75% or higher.`,
          values: { 
            spd: [30, 32.5, 35, 37.5, 40],
            aggroAdj: [10, 12, 14, 16, 18],
            pierceDef: [140, 175, 210, 245, 280],
            critRate: [1, 1.25, 1.5, 1.75, 2],
            critDmg: [1.5, 1.875, 2.25, 2.625, 3],
          },
          effects: [
            { stat: "spd", type: "percent", valueKey: "spd", battleOnly: true },
            { stat: "aggroAdj", type: "flat", valueKey: "aggroAdj", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "pantheri",
          name: "Pantheri Signature: Tidal Flower Dance",
          description: `Gain 1 stack of [Sword Wave] on each attack.
          When using a combat skill, restore HP equal to 8% of your Evade stat for 1 round upon dodging.
          When using [That One Strike], temporarily sets Crit Rate to 100% and increases Crit DMG by 39% of Evade. If it hits a Weak Point, the cooldown is reduced by 1 round.`,
          effects: []
        },
      },
    // == Platina ==
      {
        id: "the-first-heart",
        name: "The First Heart",
        grade: "EX",
        type: "Ancient Core",
        icon: "/weapons/the-first-heart.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "maxHp", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Symbol of Immortality",
          description: `Each time attacked by an enemy,
          Increases AP Recovery by {apRecovery}%, and increases Slash DEF, Crush DEF, and Pierce DEF by {physicalDef} until the start of the next round. Can stack up to 5 times.`,
          values: { 
            apRecovery: [12, 15, 18, 21, 24],
            physicalDef: [240, 300, 360, 420, 480],
          },
          effects: [
            { stat: "apRecovery", type: "percent", valueKey: "apRecovery", maxStacks: 5, stackKey: "immortal", stackLabel: "Times attacked", battleOnly: true },
            { stat: "slashDef", type: "flat", valueKey: "physicalDef", maxStacks: 5, stackKey: "immortal", stackLabel: "Times attacked", battleOnly: true },
            { stat: "crushDef", type: "flat", valueKey: "physicalDef", maxStacks: 5, stackKey: "immortal", stackLabel: "Times attacked", battleOnly: true },
            { stat: "pierceDef", type: "flat", valueKey: "physicalDef", maxStacks: 5, stackKey: "immortal", stackLabel: "Times attacked", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "platina",
          name: "Platina Signature: The Platinum Knight",
          description: `Upon starting the battle, gains the [Gravity Focus] effect.`,
          effects: []
        },
      },
    // == Samarika ==
      {
        id: "nocturnal-watcher",
        name: "Nocturnal Watcher",
        grade: "EX",
        type: "Twin Swords",
        icon: "/weapons/nocturnal-watcher.webp",

        mainStat: { stat: "meleeAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "meleeAtk", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "Silent Wings",
          description: `During combat, Crit Rate increases by 20/25/30/35/40%.
          While it is your turn, enemies afflicted with [Slow] are visible. If you attack and at least one enemy has the [Slow] effect, your Slash Boost and Poison Boost each increase by {boost}% until the end of the turn.`,
          values: { 
            critRate: [20, 25, 30, 35, 40],
            boost: [40, 50, 60, 70, 80],
          },
          effects: [
            { stat: "critRate", type: "percent", valueKey: "critRate", battleOnly: true },
            { stat: "slashBoost", type: "percent", valueKey: "boost", battleOnly: true },
            { stat: "poisonBoost", type: "percent", valueKey: "boost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "samarika",
          name: "Samarika Signature: Owl Huntress",
          description: `At the start of battle, gains 30 AP and increases Slash Boost and Poison Boost by 12% of Base Evade. This bonus can reach up to 30%.
          When successfully hitting an enemy afflicted with [Slow] during your turn, deal Additional Poison DMG equal to 9% of Base Melee ATK × the total AP spent on skills that turn. This Additional DMG can Crit.
          The Additional Slash DMG dealt by [Fang of the Swamp] can also Crit. After using this skill, its cooldown is reduced by 2 rounds and you recover 55 AP.
          Cooldown reduction and AP recovery effect can trigger once every 2 rounds.`,
          effects: [
            { stat: "startAp", type: "flat", value: 30, battleOnly: true },
          ]
        },
      },
    // == So Joo-hee ==
      {
        id: "fleure-de-vanita-92",
        name: "Fleure de Vanita 92",
        grade: "EX",
        type: "Dual Pistols",
        icon: "/weapons/fleure-de-vanita-92.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "spd", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Trace of Vanity",
          description: `On Weakness Attack, grants one stack of [Mark of Vanity] that lasts for 2 Rounds. Additionally, on successful attack, grants the target an additional stack of [Mark of Vanity] and increases ally Accuracy by {accuracy}%.
          
          [Mark of Vanity]: Reduces all DEF of the target by {alldef} and further reduces Pierce DEF by an additional {piercedef}. Can stack up to 2 times.`,
          values: { 
            accuracy: [20, 25, 30, 35, 40],
            allDef: [160, 200, 240, 280, 320],
            pierceDef: [140, 175, 210, 245, 280],
          },
          effects: [
            { stat: "accuracy", type: "percent", valueKey: "accuracy", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "so-joo-hee",
          name: "So Joo-hee Signature: Magnifique",
          description: `[Mark of Vanity] effect's DEF reduction is applied at 2 times the usual value.
          At the start of the next turn after ending your own turn, if there is an ally within a 3m range who is not in a Stealth or Banish state, gain the [Conceal: Stealth] effect.`,
          effects: []
        },
      },
    // == TX-Manticore ==
      {
        id: "the-aegaeon-core",
        name: "The Aegaeon Core",
        grade: "EX",
        type: "Ancient Core",
        icon: "/weapons/the-aegaeon-core.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "critDmg", type: "percent", value: { lv1: 11, lv60: 70 } }],

        unique: {
          name: "Overwhelming Body",
          description: `During battle, All DEF increases by {allDef}.
          When self Counterattacks, Ranged ATK increases by {rangedAtk}% for 1R.
          Applies the [Fatigue Issue] effect to enemies hit by self's attack, lasting 2R.

          - [Fatigue Issue]: Accuracy decreases by {accuracy}%, and All ATK decreases by {allAtk}%.`,
          values: { 
            allDef: [200, 250, 300, 350, 400],
            rangedAtk: [40, 45, 50, 55, 60],
            accuracy: [5, 5.5, 6, 6.5, 7],
            allAtk: [12, 14, 16, 18, 20],
          },
          effects: [
            { stat: "allDef", type: "flat", valueKey: "allDef", battleOnly: true },
            { stat: "rangedAtk", type: "percent", valueKey: "rangedAtk", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "tx-manticore",
          name: "TX-Manticore Signature: Oppressor",
          description: `The [Fatigue Issue] effect's Accuracy and ATK reduction applies at 3x the usual value, and using the [Delayed Bombardment] skill increases Aggro Adjustment by 30 for 1R.`,
          effects: []
        },
      },
    // == Valeta ==
      {
        id: "the-bloody-acacia",
        name: "The Bloody Acacia",
        grade: "EX",
        type: "One-handed Sword",
        icon: "/weapons/the-bloody-acacia.webp",

        mainStat: [
          { stat: "meleeAtk", type: "flat", value: { lv1: 13.2, lv60: 84 } },
          { stat: "magicAtk", type: "flat", value: { lv1: 13.2, lv60: 84 } },
        ],
        subStats: [{ stat: "apRecovery", type: "percent", value: { lv1: 2.2, lv60: 14 } }],

        unique: {
          name: "Blood on the Edge",
          description: `During battle, increases Immaterial Boost by {immaterialBoost}%.
          On a successful attack, has a {chance}% chance to deal Additional Immaterial DMG equal to {additionalImmaterialDMG}% of Magic ATK.
          If you defeat an enemy, restores HP of all allies by {recoverHp}% of Magic ATK at the end of the turn.`,
          values: { 
            immaterialBoost: [24, 30, 36, 42, 48],
            chance: [80, 85, 90, 95, 100],
            additionalImmaterialDMG: [100, 125, 150, 175, 200],
            recoverHp: [80, 100, 120, 140, 160],
          },
          effects: [
            { stat: "immaterialBoost", type: "percent", valueKey: "immaterialBoost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "valeta",
          name: "Valeta Signature: Thornwhip of Condemnation",
          description: `During battle, the AP cost of Basic Attack skills decreases by 5. Gains 3 stacks of [Judgment] at the start of the battle.`,
          effects: []
        },
      },
    // == Vlissing ==
      {
        id: "atra-hasis",
        name: "Atra-hasis",
        grade: "EX",
        type: "Staff",
        icon: "/weapons/atra-hasis.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "magicAtk", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "The Great Flood",
          description: `Reduces AP cost of Basic ATK by {ap}%.
          When targeting an ally with a skill, increases their All DEF by {buff} for 1 Round.
          When targeting an enemy with a skill, reduces their All DEF by {debuff} for 2 Rounds.`,
          values: { 
            ap: [16, 20, 24, 28, 32],
            buff: [160, 200, 240, 280, 320],
            debuff: [360, 450, 540, 630, 720],
          },
          effects: []
        },

        exclusive: {
          characterId: "vlissing",
          name: "Vlissing Signature: Sacred Flow",
          description: `During combat, Max HP by 8% and Additional DMG Boost by 36%.
          Changes [Sharp Wave] to a Directional attack.
          On hit, enemies have a chance equal to your current Additional DMG Boost to gain 1 stack of [Tangled Flow].
          When hitting an enemy that already has [Tangled Flow] with an Active skill, deals Additional Slash DMG equal to 120% of Magic ATK.
          At the start of each Round, allies with [Clean Flow] gain 18% of All ATK for 1 Round.`,
          effects: [
            { stat: "maxHp", type: "percent", value: 8, battleOnly: true },
            { stat: "additionalDmgBoost", type: "percent", value: 36, battleOnly: true },
          ]
        },
      },  
    // == Yeon Chae-young ==
      {
        id: "dmp-9-prototype",
        name: "DMP-9 Prototype",
        grade: "EX",
        type: "Dual Pistols",
        icon: "/weapons/dmp-9-prototype.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 14.3, lv60: 91 } },
        subStats: [{ stat: "rangedAtk", type: "percent", value: { lv1: 5.5, lv60: 35 } }],

        unique: {
          name: "An Elite Agent's Dignity",
          description: `During combat, increases Crit DMG by {critDmg}% and SPD by {spd}%.
          When allies other than yourself take their turn and land a Weak Point Attack, gain [Briefing] (stacks up to 2 times).
          At the start of your turn, if [Briefing] is at max stacks, gain [Keen Insight].

          [Keen Insight]: Increases Pierce Boost by {pierceBoost}%.`,
          values: { 
            critDmg: [20, 26, 32, 38, 44],
            spd: [20, 24, 28, 32, 36],
            pierceBoost: [24, 32, 40, 48, 56],
          },
          effects: [
            { stat: "critDmg", type: "percent", valueKey: "critDmg", battleOnly: true },
            { stat: "spd", type: "percent", valueKey: "spd", battleOnly: true },
            { stat: "pierceBoost", type: "percent", valueKey: "pierceBoost", maxStacks: 1, stackKey: "keen-insight", stackLabel: "Keen Insight", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "yeon-chae-young",
          name: "Yeon Chae-young Signature: Commence Operation",
          description: `Increases Ranged ATK by 10% during combat.
          When Crit Rate exceeds 100%, half of the excess value is temporarily converted into Crit DMG.
          At the start of your turn, if you have [Keen Insight], gain [Extra Action] once, and the AP cost of [Assassination] and [Mass Execution] is reduced by 18 for that turn.
          During combat, [Conceal] is enhanced.

          [Conceal]
          During combat, increases Crit DMG by 10%.
          At the start of combat and after landing a Weak Point Attack, enter Stealth until the end of your turn.`,
          effects: [
            { stat: "rangedAtk", type: "percent", value: 10, battleOnly: true },
            { stat: "critDmg", type: "percent", value: 10, battleOnly: true },
          ]
        },
      },
    // == Yeonwoo ==
      {
        id: "the-everlasting-burger",
        name: "The Everlasting Burger",
        grade: "EX",
        type: "Mana Shard",
        icon: "/weapons/the-everlasting-burger.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "critRate", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Munch Munch Again",
          description: `Increases Crit Rate by {critRate}% and Crit DMG by {critDmg}% during battle.
          When receiving an HP Recovery effect, gains the [Gained Weight] effect for 1 round.

          [Gained Weight]: Increases Crush Boost by {crushBoost}%.`,
          values: { 
            critRate: [12, 15, 18, 21, 24],
            critDmg: [16, 20, 24, 28, 32],
            crushBoost: [40, 50, 60, 70, 80],
          },
          effects: [
            { stat: "critRate", type: "percent", valueKey: "critRate", battleOnly: true },
            { stat: "critDmg", type: "percent", valueKey: "critDmg", battleOnly: true },
            { stat: "crushBoost", type: "percent", valueKey: "crushBoost", maxStacks: 1, stackKey: "gained-weight", stackLabel: "Gained Weight", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "yeonwoo",
          name: "Yeonwoo Signature: Everything's Tasty And Happy",
          description: `If [Munch O'Clock!] grants only 1 stack of [Gluttony], gain 1 additional stack.
          When gaining AP at the end of any turn via the [Rapid-Fire Food Fight] effect, gain an additional 50% of that AP.`,
          effects: []
        },
      },
    // == Yui ==
      {
        id: "phantom-stiletto",
        name: "Phantom Stiletto",
        grade: "EX",
        type: "Dual Pistols",
        icon: "/weapons/phantom-stiletto.webp",

        mainStat: { stat: "rangedAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "critRate", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "Lock-on from Beyond",
          description: `Increases Pierce Boost by {pierceBoost}% during combat. On attack, gain the [Keen Lock-on] effect, applied only to that attack.

          [Keen Lock-on]: Increases your Crit DMG and Ranged ATK by {critDmg}% for each ally on the field (excluding yourself), up to a maximum of 8 allies.`,
          values: { 
            pierceBoost: [20, 25, 30, 35, 40],
            critDmg: [6, 7, 8, 9, 10],
          },
          effects: [
            { stat: "pierceBoost", type: "percent", valueKey: "pierceBoost", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "yui",
          name: "Yui Signature: Soul Resonance",
          description: `During battle, increases Basic ATK DMG of both the user and their summons by 16%.
          The Weak Point Hit chance triggered by the [Anarchic Barrage] skill is doubled.
          When [Anarchic Barrage] targets 2 or fewer enemies:
          - Against 2 enemies: temporarily increases Combat Skill DMG by 18% and restores 12 AP.
          - Against 1 enemy: temporarily increases Combat Skill DMG by 36% and restores 24 AP.`,
          effects: [
            { stat: "basicAttackDmg", type: "percent", value: 16, battleOnly: true },
          ]
        },
      },
    // == Yvonna ==
      {
        id: "skadia",
        name: "Skadia",
        grade: "EX",
        type: "Staff",
        icon: "/weapons/skadia.webp",

        mainStat: { stat: "magicAtk", type: "flat", value: { lv1: 12.1, lv60: 77 } },
        subStats: [{ stat: "coldBoost", type: "percent", value: { lv1: 7.7, lv60: 49 } }],

        unique: {
          name: "The Frozen Tears",
          description: `Increases Cold Boost by {coldBoost}%.
          Each time an ally attacks during battle, increases own Magic ATK by {magicAtk}% for 1 round. Can stack up to 5 times.`,
          values: { 
            coldBoost: [20, 25, 30, 35, 40],
            magicAtk: [16, 20, 24, 28, 32],
          },
          effects: [
            { stat: "coldBoost", type: "percent", valueKey: "coldBoost", battleOnly: true },
            { stat: "magicAtk", type: "percent", valueKey: "magicAtk", maxStacks: 5, stackKey: "ally-attack", stackLabel: "Ally attack stacks", battleOnly: true },
          ]
        },

        exclusive: {
          characterId: "yvonna",
          name: "Yvonna Signature: Frozen Smile",
          description: `When successfully attacking with an action other than a response, gains an additional [Chill] effect at the end of the turn.`,
          effects: []
        },
      },  
];

// A weapon's main stats as a list, so the code works for one or two

export const mainStats = (w: Weapon): WeaponStat[] =>
  Array.isArray(w.mainStat) ? w.mainStat : [w.mainStat];

// Find one weapon by id
export const getWeapon = (id: string) => weapons.find((w) => w.id === id);

// Weapons a character can use, based on their weapon type
export const weaponsOfType = (type: string) =>
  weapons.filter((w) => w.type === type);

const MAX_DUPE = 5;

// The dupe where a number starts: 5 numbers start at dupe 1, 1 number starts at dupe 5
const unlockDupe = (list: number[]) => MAX_DUPE + 1 - list.length;

// The lines of a weapon's unique text for one dupe.
// A line is hidden until every number in it has unlocked.
// dupe = "all" shows every line, with ranges like "10 → 30"
export function uniqueLines(w: Weapon, dupe: number | "all"): string[] {
  const u = w.unique;
  if (!u) return [];
  const values = u.values ?? {};
  const lines: string[] = [];

  for (const raw of u.description.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    let hidden = false;

    const text = line.replace(/\{(\w+)\}/g, (_, key: string) => {
      const list = values[key];
      if (!list || list.length === 0) return "?";
      if (dupe === "all") {
        const first = list[0];
        const last = list[list.length - 1];
        return first === last ? String(first) : `${first} → ${last}`;
      }
      const i = dupe - unlockDupe(list);
      if (i < 0) {
        hidden = true; // not unlocked yet at this dupe
        return "";
      }
      return String(list[Math.min(i, list.length - 1)]);
    });

    if (!hidden) lines.push(text);
  }
  return lines;
}
