import {
  GRADES,
  stigmaValue,
  type BasicKey,
  type Build,
  type CharacterDetails,
  type Grade,
  type TraitEffect,
  allDef,
  elementsDef,
  physicalDef
} from "@/data/types";
import { getTrait } from "@/data/traits";
import { getStigmaSet } from "@/data/stigmas";
import { getWeapon, mainStats } from "@/data/weapons";

const BASIC_KEYS: BasicKey[] = ["str", "tec", "int", "vit", "agi"];

const MULT_MAX = 12.8;
const HP_MULT_MIN = 5;
const HP_MULT_MAX = 64;
const ACCURACY_BASE = 8;
const AP_RECOVERY_BASE = 80;
const AP_PER_AGI = 2.5;
const CRIT_RATE_BASE = 10;
const CRIT_DMG_BASE = 150;

const GROUPS: Record<string, readonly string[]> = { physicalDef, elementsDef, allDef };

const ATTRIBUTE_KEYS = [
  "slashBoost",
  "slashDef",
  "pierceBoost",
  "pierceDef",
  "crushBoost",
  "crushDef",
  "heatBoost",
  "heatDef",
  "coldBoost",
  "coldDef",
  "electricBoost",
  "electricDef",
  "immaterialBoost",
  "immaterialDef",
  "poisonBoost",
  "poisonDef",
  "elementalBoost",
  "blockChance",
];

const round1 = (n: number) => Math.round(n * 10 + 1e-9) / 10;

export type CalculatedStats = Record<string, number>;

export type CalcOptions = {
  basicAtk?: "meleeAtk" | "rangedAtk" | "magicAtk"; // stat the basic weapon boosts
  build?: Build;
  affection?: boolean;
  pure?: boolean;
  combat?: boolean;
  /** Needed so exclusive (signature) effects only apply to the matching character. */
  characterId?: string;
  /**
   * Chosen stack counts / condition toggles.
   * Key = effect.stackKey (or the stat key if stackKey is omitted).
   * maxStacks > 1 → stack count; maxStacks === 1 → 0 = OFF, 1 = ON.
   * Missing key → use maxStacks (preview at full stacks / ON).
   */
  stacks?: Record<string, number>;
};

/** One stack or condition control the Stats tab can show. */
export type StackControl = {
  key: string;
  label: string;
  /** >1 = stack count; 1 = ON/OFF condition toggle. */
  maxStacks: number;
  /** Stat this multiplies (for the small hint under the buttons). */
  stat: string;
};

// ===== ADDING UP EVERYTHING THAT CHANGES A STAT =====
type Totals = {
  flat: Record<string, number>; // e.g. Technic +1, Starting AP +5
  percent: Record<string, number>; // e.g. Ranged ATK 5 (meaning 5%)
  points: Record<string, number>; // Crit Rate and Crit DMG: added as points
  weaponAtk: Record<string, number>; // the weapon's own ATK number
};

const MAX_WEAPON_DUPE = 5;

/** Same unlock rule as uniqueLines: a list of N numbers unlocks at dupe (6 - N). */
const unlockDupe = (list: number[]) => MAX_WEAPON_DUPE + 1 - list.length;

function collect(
  traitIds: string[],
  build: Build | undefined,
  affection: boolean,
  combat = false,
  basicAtk?: "meleeAtk" | "rangedAtk" | "magicAtk",
  characterId?: string,
  stacks?: Record<string, number>,
): Totals {
  const t: Totals = { flat: {}, percent: {}, points: {}, weaponAtk: {} };

  // Multiplier for stackable / conditional effects.
  // maxStacks > 1 → stack count; maxStacks === 1 → on/off condition toggle.
  // Missing key in `stacks` → full stacks / ON (max preview).
  const stackMul = (e: {
    maxStacks?: number;
    stackKey?: string;
    stat: string;
  }) => {
    if (!e.maxStacks || e.maxStacks < 1) return 1;
    const key = e.stackKey ?? e.stat;
    const chosen = stacks?.[key];
    const n =
      chosen === undefined
        ? e.maxStacks
        : Math.min(e.maxStacks, Math.max(0, chosen));
    return n;
  };

  // Adds one effect. Battle-only effects and max-affection effects are skipped
  // unless the affection switch is on.
  const add = (e: TraitEffect) => {
    if (e.battleOnly && !combat) return;
    if (e.condition === "maxAffection" && !affection) return;
    const group = GROUPS[e.stat];
    if (group) {
      group.forEach((stat) => add({ ...e, stat: stat as TraitEffect["stat"] }));
      return;
    }
    const value = e.value * stackMul(e);
    if (e.stat === "critRate" || e.stat === "critDmg") {
      t.points[e.stat] = (t.points[e.stat] ?? 0) + value;
      return;
    }
    const bucket = e.type === "flat" ? t.flat : t.percent;
    bucket[e.stat] = (bucket[e.stat] ?? 0) + value;
  };

  for (const id of traitIds) getTrait(id)?.effects.forEach(add);

  if (build) {
    // Weapon: its numbers grow in a straight line from Lv 1 to Lv 60
    const w = build.weapon ? getWeapon(build.weapon.id) : undefined;
    if (w) {
      const at = (v: { lv1: number; lv60: number }) =>
        v.lv1 + ((v.lv60 - v.lv1) * (build.weapon?.level ?? 1)) / 59;
      for (const main of mainStats(w)) {
        if (
          main.stat === "meleeAtk" ||
          main.stat === "rangedAtk" ||
          main.stat === "magicAtk"
        ) {
          t.weaponAtk[main.stat] = at(main.value);
        } else {
          add({ stat: main.stat, type: main.type, value: at(main.value) });
        }
      }
      w.subStats?.forEach((s) =>
        add({ stat: s.stat, type: s.type, value: at(s.value) }),
      );

      // Unique effect stats (scale with dupe when valueKey is set)
      const dupe = Math.min(
        MAX_WEAPON_DUPE,
        Math.max(1, build.weapon?.dupe ?? 1),
      );
      for (const e of w.unique?.effects ?? []) {
        let value = e.value ?? 0;
        if (e.valueKey) {
          const list = w.unique?.values?.[e.valueKey];
          if (!list?.length) continue;
          const i = dupe - unlockDupe(list);
          if (i < 0) continue; // not unlocked at this dupe yet
          value = list[Math.min(i, list.length - 1)];
        }
        add({
          stat: e.stat,
          type: e.type,
          value,
          battleOnly: e.battleOnly,
          condition: e.condition,
          maxStacks: e.maxStacks,
          stackKey: e.stackKey,
          stackLabel: e.stackLabel,
        });
      }

      // Signature (exclusive): only for the character it belongs to
      if (
        w.exclusive &&
        characterId &&
        w.exclusive.characterId === characterId
      ) {
        w.exclusive.effects?.forEach(add);
      }
    } else if (!build.weapon && basicAtk) t.weaponAtk[basicAtk] = 2;

    // Stigmas: main stat grows from Lv 1 to Lv 25, substats are fixed numbers
    for (const s of build.stigmas) {
      const set = getStigmaSet(s.set);
      const main = set?.pieces[s.slot].mainStat;
      const range = set ? main?.value[set.grade] : undefined;
      if (main && range) {
        const value = stigmaValue(range, s.level);
        (Array.isArray(main.stat) ? main.stat : [main.stat]).forEach((stat) =>
          add({ stat, type: main.type, value }),
        );
      }
      s.subs.forEach(add);
    }
    // Combat mode: the set bonuses of the worn stigma sets
    if (combat) {
      const worn: Record<string, number> = {};
      build.stigmas.forEach((s) => (worn[s.set] = (worn[s.set] ?? 0) + 1));
      for (const [id, n] of Object.entries(worn)) {
        const set = getStigmaSet(id);
        if (set && n >= 2) set.twoSet.effects.forEach(add);
        if (set && n >= 4) set.fourSet.effects.forEach(add);
      }
    }
  }
  return t;
}

// 1 + the percents added together. pctOf(t, "meleeAtk", "allAtk") for 10% + 5% gives 1.15
const pctOf = (t: Totals, ...keys: string[]) =>
  1 + keys.reduce((sum, k) => sum + (t.percent[k] ?? 0), 0) / 100;

// ===== BASIC STATS AT A GRADE =====
function basicAt(details: CharacterDetails, startGrade: Grade, grade: Grade) {
  const shown: Record<BasicKey, number> = { ...details.basic! };
  const start = GRADES.indexOf(startGrade);
  const target = GRADES.indexOf(grade);

  if (target > start) {
    // Above the starting grade: add what each upgrade gives
    for (let i = start + 1; i <= target; i++) {
      const gains = details.gradeGains?.[GRADES[i]];
      if (!gains) continue;
      for (const k of BASIC_KEYS) shown[k] += gains[k] ?? 0;
    }
  } else {
    // Below the starting grade: each entry says how much lower that grade is
    for (let i = target; i < start; i++) {
      const gains = details.gradeGains?.[GRADES[i]];
      if (!gains) continue;
      for (const k of BASIC_KEYS) shown[k] += gains[k] ?? 0;
    }
  }
  return shown;
}

// ===== THE CALCULATOR =====
export function calcStats(
  details: CharacterDetails,
  startGrade: Grade,
  grade: Grade,
  level: number,
  options: CalcOptions = {},
): CalculatedStats | null {
  if (!details.basic) return null;
  const {
    build,
    affection = false,
    pure = false,
    combat = false,
    basicAtk,
    characterId,
    stacks,
  } = options;

  const shown = basicAt(details, startGrade, grade);

  // With a build: the character's unique traits plus the build's general traits.
  // Without one: all the traits listed in the details file.
  const own = details.traits ?? [];
  const traitIds = build
    ? [
        ...own.filter((id) => getTrait(id)?.kind === "unique"),
        ...build.generalTraits.slice(0, 6),
      ]
    : own;
  const uniqueOnly = own.filter((id) => getTrait(id)?.kind === "unique");
  const fx = collect(
    pure ? uniqueOnly : traitIds,
    pure ? undefined : build,
    affection,
    combat,
    basicAtk,
    characterId,
    stacks,
  );

  // Basic stats WITH flat trait bonuses (used in the maths, not shown)
  const eff = (k: BasicKey) => shown[k] + (fx.flat[k] ?? 0);

  // Level multipliers: a straight line from Lv 1 to Lv 60
  const t = (level - 1) / 59;
  const mult = 1 + (MULT_MAX - 1) * t;
  const hpMult = HP_MULT_MIN + (HP_MULT_MAX - HP_MULT_MIN) * t;

  // ATK = (stat x multiplier + weapon ATK x stat / 10) x (1 + percents)
  const atk = (basic: BasicKey, key: string) =>
    (eff(basic) * mult + (fx.weaponAtk[key] ?? 0) * (eff(basic) / 10)) *
    pctOf(fx, key, "allAtk");

  const apRecovery =
    (AP_RECOVERY_BASE + AP_PER_AGI * eff("agi")) * pctOf(fx, "apRecovery");

  // Starting AP = AP Recovery + flat Starting AP + the character's own number.
  // The own number is worked out from the Starting AP you typed (startApSeen),
  // by running the same sums on that screen and taking the difference.
  let ownAp = 0;
  const seen = details.manual?.startApSeen;
  if (seen) {
    const sb = basicAt(details, startGrade, seen.grade);
    const sfx = collect(details.traits ?? [], undefined, false);
    const sApRec =
      (AP_RECOVERY_BASE + AP_PER_AGI * (sb.agi + (sfx.flat.agi ?? 0))) *
      pctOf(sfx, "apRecovery");
    ownAp = Math.ceil(seen.value - sApRec - (sfx.flat.startAp ?? 0) - 1e-9);
  }
  const startAp = (ownAp + (fx.flat.startAp ?? 0)) * pctOf(fx, "startAp");
  const totalAp = startAp + apRecovery;

  const result: Record<string, number> = {
    // Basic stats, as shown on the stat screen
    str: shown.str,
    tec: shown.tec,
    int: shown.int,
    vit: shown.vit,
    agi: shown.agi,

    meleeAtk: atk("str", "meleeAtk"),
    rangedAtk: atk("tec", "rangedAtk"),
    magicAtk: atk("int", "magicAtk"),
    maxHp: eff("vit") * hpMult * pctOf(fx, "maxHp"),
    evade: eff("agi") * mult * pctOf(fx, "evade"),
    accuracy: ACCURACY_BASE * mult * pctOf(fx, "accuracy"),
    spd: (details.manual?.spd ?? 0) * pctOf(fx, "spd"),
    apRecovery,
    startAp,
    totalAp,

    // Crit stats start at 10 and 150, and everything else adds points to them
    critRate: CRIT_RATE_BASE + (fx.points.critRate ?? 0),
    critDmg: CRIT_DMG_BASE + (fx.points.critDmg ?? 0),

    // Attribute stats: the total of all matching effects
    ...Object.fromEntries(
      ATTRIBUTE_KEYS.map((k) => [k, (fx.flat[k] ?? 0) + (fx.percent[k] ?? 0)]),
    ),
  };

  return Object.fromEntries(
    Object.entries(result).map(([k, v]) => [k, round1(v)]),
  );
}

/**
 * Stack / condition controls available for a build
 * (weapon unique + matching signature + traits).
 * maxStacks > 1 → numeric stacks; maxStacks === 1 → ON/OFF condition toggle.
 * Used by the Stats tab to render 0..maxStacks controls.
 */
export function listStackControls(
  details: CharacterDetails,
  build: Build | undefined,
  characterId?: string,
): StackControl[] {
  const byKey = new Map<string, StackControl>();

  const push = (e: {
    stat: string;
    maxStacks?: number;
    stackKey?: string;
    stackLabel?: string;
  }) => {
    // Include maxStacks === 1 so conditional (non-stacking) effects get a toggle.
    if (!e.maxStacks || e.maxStacks < 1) return;
    const key = e.stackKey ?? e.stat;
    if (byKey.has(key)) return;
    byKey.set(key, {
      key,
      label: e.stackLabel ?? key,
      maxStacks: e.maxStacks,
      stat: e.stat,
    });
  };

  const own = details.traits ?? [];
  const traitIds = build
    ? [
        ...own.filter((id) => getTrait(id)?.kind === "unique"),
        ...(build.generalTraits ?? []).slice(0, 6),
      ]
    : own;
  for (const id of traitIds) getTrait(id)?.effects.forEach(push);

  if (build?.weapon) {
    const w = getWeapon(build.weapon.id);
    w?.unique?.effects?.forEach(push);
    if (w?.exclusive && characterId && w.exclusive.characterId === characterId) {
      w.exclusive.effects?.forEach(push);
    }
  }

  return [...byKey.values()];
}