import {
  STIGMA_GRADES,
  type StatKey,
  type StigmaPiece,
  type StigmaSet,
  type StigmaSetData,
  type TraitEffect,
} from "./types";

type Pair = [number, number];

// One piece. Give the SS numbers, the EX numbers, or both.
// Example: piece("maxHp", [5, 14.5], [5.5, 17.5])
const piece = (
  stat: StatKey | StatKey[],
  ss?: Pair,
  ex?: Pair,
): StigmaPiece => ({
  mainStat: {
    stat,
    type: "percent",
    value: {
      ...(ss && { SS: { lv1: ss[0], lv25: ss[1] } }),
      ...(ex && { EX: { lv1: ex[0], lv25: ex[1] } }),
    },
  },
});

const flat = (stat: StatKey, value: number): TraitEffect[] => [
  { stat, type: "flat", value },
];
const pct = (stat: StatKey, value: number): TraitEffect[] => [
  { stat, type: "percent", value },
];

// Shortcuts for the EX-only sets
const exPiece = (stat: StatKey | StatKey[], pair: Pair) =>
  piece(stat, undefined, pair);
const EX_MAIN: Pair = [5.5, 17.5]; // most main stats
const EX_DOUBLE: Pair = [11, 35]; // Accuracy, Evade, Crit DMG
const EX_APREC: Pair = [2.2, 7]; // AP Recovery
const EX_BOOST: Pair = [4.4, 14];

const stigmaData: StigmaSetData[] = [
  // ===== EX-ONLY SETS =====
  {
    id: "the-thousand-mile-weaver",
    name: "The Thousand Mile Weaver",
    icon: "/stigmas/the-thousand-mile-weaver.webp",
    twoSet: {
      description: "Increases Melee ATK by 10% during combat.",
      effects: pct("meleeAtk", 10),
    },
    fourSet: {
      description:
        "When hitting a weakness, increases Slash, Pierce and Crush Boost by 40% each for that attack.",
      effects: [],
    },
    pieces: {
      top: exPiece("meleeAtk", EX_MAIN),
      left: exPiece("spd", EX_MAIN),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("critRate", EX_MAIN),
    },
  },
  {
    id: "the-wind-that-wanders-the-world",
    name: "The Wind that Wanders the World",
    icon: "/stigmas/the-wind-that-wanders-the-world.webp",
    twoSet: {
      description: "Increases Movement Speed by 10% during combat.",
      effects: pct("spd", 10),
    },
    fourSet: {
      description: "When HP is at 100%, increases AP Recovery by 20%.",
      effects: pct("apRecovery", 20),
    },
    pieces: {
      top: exPiece("maxHp", EX_MAIN),
      left: exPiece("apRecovery", EX_APREC),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("accuracy", EX_DOUBLE),
    },
  },
  {
    id: "the-four-horseman",
    name: "The Four Horseman",
    icon: "/stigmas/the-four-horseman.webp",
    twoSet: {
      description: "Increases Crit DMG by 20% during combat.",
      effects: pct("critDmg", 20),
    },
    fourSet: {
      description:
        "When using a basic attack, increases Crit Rate by 7% for 3 rounds (stacks up to 5 times).",
      effects: [],
    },
    pieces: {
      top: exPiece("rangedAtk", EX_MAIN),
      left: exPiece("pierceBoost", EX_MAIN),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("critDmg", EX_DOUBLE),
    },
  },
  {
    id: "the-knight-of-seven-petals",
    name: "The Knight of Seven Petals",
    icon: "/stigmas/the-knight-of-seven-petals.webp",
    twoSet: {
      description: "Increases Physical DEF by 200 during combat.",
      effects: flat("physicalDef", 200),
    },
    fourSet: {
      description:
        "At the start of each round, grants a shield worth 6% of the caster's Max HP to allies (including themselves) at 60% HP or lower. The shield lasts 2 rounds.",
      effects: [],
    },
    pieces: {
      top: exPiece("maxHp", EX_MAIN),
      left: exPiece("evade", EX_DOUBLE),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("maxHp", EX_MAIN),
    },
  },
  {
    id: "the-eternal-battle",
    name: "The Eternal Battle",
    icon: "/stigmas/the-eternal-battle.webp",
    twoSet: {
      description: "Increases Magic ATK by 10% during combat.",
      effects: pct("magicAtk", 10),
    },
    fourSet: {
      description:
        "If an attack hits 3 or more enemies at once, increases Magic ATK by 35% for 3 rounds.",
      effects: [],
    },
    pieces: {
      top: exPiece("magicAtk", EX_MAIN),
      left: exPiece("accuracy", EX_DOUBLE),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("critRate", EX_MAIN),
    },
  },
  {
    id: "the-brilliant-touch-of-earth",
    name: "The Brilliant Touch of Earth",
    icon: "/stigmas/the-brilliant-touch-of-earth.webp",
    twoSet: {
      description: "Increases Physical DEF by 200 during combat.",
      effects: flat("physicalDef", 200),
    },
    fourSet: {
      description:
        "Gain 9% AP Recovery during combat. When using a healing skill on an ally, increases that ally's All ATK by 12% for 2 rounds.",
      effects: [],
    },
    pieces: {
      top: exPiece("magicAtk", EX_MAIN),
      left: exPiece("maxHp", EX_MAIN),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("accuracy", EX_DOUBLE),
    },
  },
  {
    id: "harmony-ex",
    name: "Harmony",
    icon: "/stigmas/harmony-ex.webp",
    twoSet: {
      description: "Increases All DEF by 160 during combat.",
      effects: flat("allDef", 160),
    },
    fourSet: {
      description:
        "Increases Melee ATK by 16% of base Max HP during battle. If HP drops below 40% from an enemy hit, gain 45 AP once per round.",
      effects: [],
    },
    pieces: {
      top: exPiece("meleeAtk", EX_MAIN),
      left: exPiece("maxHp", EX_MAIN),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("critRate", EX_MAIN),
    },
  },
  {
    id: "jupiter-ex",
    name: "Jupiter",
    icon: "/stigmas/jupiter-ex.webp",
    twoSet: {
      description: "Increases Elemental Boost by 6% during combat.",
      effects: pct("elementalBoost", 6),
    },
    fourSet: {
      description: `Using a Combat Skill gains 8% Slash DMG and 60 All DEF for 2 rounds.
      If Crit Chance is 25% or lower, gain an additional 12% Slash DMG and 90 All DEF.`,
      effects: [],
    },
    pieces: {
      top: exPiece("meleeAtk", EX_MAIN),
      left: exPiece("meleeAtk", EX_MAIN),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("maxHp", EX_MAIN),
    },
  },
  {
    id: "reckoning-of-sin-ex",
    name: "Reckoning of Sin",
    icon: "/stigmas/reckoning-of-sin-ex.webp",
    twoSet: {
      description: "Increases AP Recovery by 4% during combat.",
      effects: pct("apRecovery", 4),
    },
    fourSet: {
      description: `Gain 30 AP at the start of combat. On a successful hit, inflict [Price of Sin].
      - [Price of Sin]: Reduces Elements DEF by 200 until the target is hit.`,
      effects: flat("startAp", 30),
    },
    pieces: {
      top: exPiece("magicAtk", EX_MAIN),
      left: exPiece("apRecovery", EX_APREC),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("maxHp", EX_MAIN),
    },
  },
  {
    id: "jesters-mask-ex",
    name: "Jester's Mask",
    icon: "/stigmas/jesters-mask-ex.webp",
    twoSet: {
      description: "Increases Magic ATK by 10% during combat.",
      effects: pct("magicAtk", 10),
    },
    fourSet: {
      description: `During your turn, increases Skill DMG by 25%. Basic Attacks grant [Jester's Quip] for 2 rounds.
      - [Jester's Quip]: Increases Skill DMG and Magic ATK by 5% (stacks up to 2 times).`,
      effects: [],
    },
    pieces: {
      top: exPiece("magicAtk", EX_MAIN),
      left: exPiece("elementalBoost", EX_BOOST),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("critRate", EX_MAIN),
    },
  },
  {
    id: "phantom-banquet",
    name: "Phantom Banquet",
    icon: "/stigmas/phantom-banquet.webp",
    twoSet: {
      description: "Increases Crit DMG by 16% during combat.",
      effects: pct("critDmg", 16),
    },
    fourSet: {
      description: `Increases Basic ATK and Skill DMG by 16%.
      At combat start, Movement Speed increases by 35% (ends when using a skill). Using an Active Skill from Stealth grants 18% All ATK until the end of the turn.`,
      effects: [],
    },
    pieces: {
      top: exPiece("allAtk", EX_MAIN),
      left: exPiece("pierceBoost", EX_MAIN),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("critRate", EX_MAIN),
    },
  },
  {
    id: "blessing-of-dawn",
    name: "Blessing of Dawn",
    icon: "/stigmas/blessing-of-dawn.webp",
    twoSet: {
      description: "Reduces Damage Taken by 12% during combat.",
      effects: [],
    },
    fourSet: {
      description: `Increases Crit Rate by 6% during combat.
      Once per round, using a Support Skill grants AP equal to 8% of base AP Recovery.
      When an ally at 90% HP or lower uses an Attack Skill, gain 6% Elemental Boost until the end of the turn (up to 2 stacks). Only one Stigma can trigger this effect.`,
      effects: [],
    },
    pieces: {
      top: exPiece("magicAtk", EX_MAIN),
      left: exPiece("magicAtk", EX_MAIN),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("critRate", EX_MAIN),
    },
  },
  {
    id: "lifebound",
    name: "Lifebound",
    icon: "/stigmas/lifebound.webp",
    twoSet: {
      description: "Increases Max HP by 10% during battle.",
      effects: pct("maxHp", 10),
    },
    fourSet: {
      description:
        "When hit or healed, gain 5% All ATK and 10% Crush and Slash Boost (stacks up to 5 times).",
      effects: [],
    },
    pieces: {
      top: exPiece("maxHp", EX_MAIN),
      left: exPiece(["slashBoost", "crushBoost"], EX_MAIN),
      right: exPiece("maxHp", EX_MAIN),
      bottom: exPiece("critDmg", EX_DOUBLE),
    },
  },
  {
    id: "scorching-sun",
    name: "Scorching Sun",
    icon: "/stigmas/scorching-sun.webp",
    twoSet: {
      description: "Increases Magic ATK by 10% during combat.",
      effects: pct("magicAtk", 10),
    },
    fourSet: {
      description:
        "On a successful attack, increases Magic ATK and Heat Boost by 3% for 2 rounds (stacks up to 6 times).",
      effects: [],
    },
    pieces: {
      top: exPiece("magicAtk", EX_MAIN),
      left: exPiece("heatBoost", EX_MAIN),
      right: exPiece("magicAtk", EX_MAIN),
      bottom: exPiece("maxHp", EX_MAIN),
    },
  },
  // === SS ===
  {
    id: "thorny-heart",
    name: "The Thorny Heart",
    icon: "/stigmas/thorny-heart.webp",
    twoSet: {
      description: "Increases Melee ATK by 9% during combat.",
      effects: pct("meleeAtk", 9),
    },
    fourSet: {
      description:
        "When a counterattack is activated, increases Melee ATK by 35% for 2 rounds.",
      effects: [],
    },
    pieces: {
      top: piece("meleeAtk", [5, 14.5]),
      left: piece("evade", [10, 29]),
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("critDmg", [10, 29]),
    },
  },
  {
    id: "irreversible-secret",
    name: "The Irreversible Secret",
    icon: "/stigmas/irreversible-secret.webp",
    twoSet: {
      description: "Increases Magic ATK by 9% during combat.",
      effects: pct("magicAtk", 9),
    },
    fourSet: {
      description:
        "At the start of each round, permanently increases Slash Boost by 15% (stacks up to 4 times).",
      effects: [],
    },
    pieces: {
      top: piece("magicAtk", [5, 14.5]),
      left: piece("slashBoost", [5.5, 14.5]), // numbers as shown in the PDF
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("accuracy", [10, 29]),
    },
  },
  {
    id: "record-of-orphan",
    name: "The Record of Orphan",
    icon: "/stigmas/record-of-orphan.webp",
    twoSet: {
      description: "Increases AP Recovery by 3.6% during combat.",
      effects: pct("apRecovery", 3.6),
    },
    fourSet: {
      description:
        "When using a skill on an enemy, decreases the target's Slash, Pierce and Crush DEF by 100 until the start of the target's turn (stacks up to 3 times).",
      effects: [],
    },
    pieces: {
      top: piece("maxHp", [5, 14.5]),
      left: piece("apRecovery", [2, 5.8]),
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("accuracy", [10, 29]),
    },
  },
  {
    id: "the-blacksmith-gods-blessing",
    name: "The Blacksmith God's Blessing",
    icon: "/stigmas/the-blacksmith-gods-blessing.webp",
    twoSet: {
      description: "Increases Physical DEF by 180 during combat.",
      effects: flat("physicalDef", 180),
    },
    fourSet: {
      description:
        "When attacked, increases Slash, Pierce and Crush DEF by 200 for 2 rounds (stacks up to 3 times).",
      effects: [],
    },
    pieces: {
      top: piece("maxHp", [5, 14.5]),
      left: piece("spd", [5, 14.5]),
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("evade", [10, 29]),
    },
  },
  {
    id: "the-nobles-tactics",
    name: "The Noble's Tactics",
    icon: "/stigmas/the-nobles-tactics.webp",
    twoSet: {
      description: "Increases Ranged ATK by 9% during combat.",
      effects: pct("rangedAtk", 9),
    },
    fourSet: {
      description:
        "Increases Crit Chance by 20%. Removed if the character moves.",
      effects: [],
    },
    pieces: {
      top: piece("rangedAtk", [5, 14.5]),
      left: piece("accuracy", [10, 29]),
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("critDmg", [10, 29]),
    },
  },
  {
    id: "the-ship-of-theseus",
    name: "The Ship of Theseus",
    icon: "/stigmas/the-ship-of-theseus.webp",
    twoSet: {
      description: "Increases Magic ATK by 9% during combat.",
      effects: pct("magicAtk", 9),
    },
    fourSet: {
      description:
        "Increases Heat, Cold, Electric, Poison and Immaterial Boost by 20% each. Only applies at 100% HP.",
      effects: [],
    },
    pieces: {
      top: piece("magicAtk", [5, 14.5]),
      left: piece("spd", [5, 14.5]),
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("critRate", [5, 14.5]),
    },
  },
  {
    id: "harmony-ss",
    name: "Harmony",
    icon: "/stigmas/harmony-ss.webp",
    twoSet: {
      description: "Increases All DEF by 160 during combat.",
      effects: flat("allDef", 160),
    },
    fourSet: {
      description:
        "Increases Melee ATK by 16% of base Max HP during battle. If HP drops below 40% from an enemy hit, gain 45 AP once per round.",
      effects: [],
    },
    pieces: {
      top: piece("meleeAtk", [5, 14.5]),
      left: piece("maxHp", [5, 14.5]),
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("critRate", [5, 14.5]),
    },
  },
  {
    id: "jupiter-ss",
    name: "Jupiter",
    icon: "/stigmas/jupiter-ss.webp",
    twoSet: {
      description: "Increases Elemental Boost by 6% during combat.",
      effects: pct("elementalBoost", 6),
    },
    fourSet: {
      description:
        "Using a Combat Skill gains 8% Slash DMG and 60 All DEF for 2 rounds. If Crit Chance is 25% or lower, gain an additional 12% Slash DMG and 90 All DEF.",
      effects: [],
    },
    pieces: {
      top: piece("meleeAtk", [5, 14.5]),
      left: piece("meleeAtk", [5, 14.5]),
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("maxHp", [5, 14.5]),
    },
  },
  {
    id: "reckoning-of-sin-ss",
    name: "Reckoning of Sin",
    icon: "/stigmas/reckoning-of-sin-ss.webp",
    twoSet: {
      description: "Increases AP Recovery by 4% during combat.",
      effects: pct("apRecovery", 4),
    },
    fourSet: {
      description:
        "Gain 30 AP at the start of combat. On a successful hit, inflict [Price of Sin]: reduces Elements DEF by 200 until the target is hit.",
      effects: flat("startAp", 30),
    },
    pieces: {
      top: piece("magicAtk", [5, 14.5]),
      left: piece("apRecovery", [2, 5.8]),
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("maxHp", [5, 14.5]),
    },
  },
  {
    id: "jesters-mask-ss",
    name: "Jester's Mask",
    icon: "/stigmas/jesters-mask-ss.webp",
    twoSet: {
      description: "Increases Magic ATK by 10% during combat.",
      effects: pct("magicAtk", 10),
    },
    fourSet: {
      description:
        "During your turn, increases Skill DMG by 25%. Basic Attacks grant [Jester's Quip] for 2 rounds: increases Skill DMG and Magic ATK by 5% (stacks up to 2 times).",
      effects: [],
    },
    pieces: {
      top: piece("magicAtk", [5, 14.5]),
      left: piece("elementalBoost", [4, 11.2]),
      right: piece("maxHp", [5, 14.5]),
      bottom: piece("critRate", [5, 14.5]),
    },
  },
];

// Find a set by its id
export const getStigmaSet = (id: string) => stigmaSets.find((s) => s.id === id);

export const stigmaSets: StigmaSet[] = stigmaData.flatMap((set) => {
  const grades = STIGMA_GRADES.filter((g) =>
    Object.values(set.pieces).some((p) => p.mainStat.value[g]),
  );
  return grades.map((grade) => ({
    ...set,
    id: grades.length > 1 ? `${set.id}-${grade.toLowerCase()}` : set.id,
    grade,
    pieces: Object.fromEntries(
      Object.entries(set.pieces).map(([slot, p]) => [
        slot,
        {
          ...p,
          mainStat: {
            ...p.mainStat,
            value: { [grade]: p.mainStat.value[grade] },
          },
        },
      ]),
    ) as StigmaSet["pieces"],
  }));
});
