"use client";

import { useEffect, useState } from "react";
import {
  STIGMA_MAX_LEVEL,
  SUBSTAT_DEFAULT_RANGE,
  SUBSTAT_FLAT,
  SUBSTAT_RANGES,
  SUBSTAT_STATS,
  stigmaValue,
} from "@/data/types";
import type {
  Build,
  CharacterDetails,
  EquippedStigma,
  TraitEffect,
  Weapon,
  BuildMight,
} from "@/data/types";
import { label } from "@/lib/stat-labels";
import { getStigmaSet, stigmaSets } from "@/data/stigmas";
import {
  getWeapon,
  mainStats,
  uniqueLines,
  weapons,
  weaponsOfType,
} from "@/data/weapons";
import { getTrait, traits } from "@/data/traits";
import { getMight, mightSkills } from "@/data/might";
import { useCustomBuild } from "@/components/custom-build";
import { asset } from "@/lib/asset";

// Card colors for each grade (A green, S blue, SS purple, EX yellow)
const GRADE_BADGE: Record<string, string> = {
  A: "border-lime-500/50 bg-lime-500/10 text-lime-300",
  S: "border-blue-500/50 bg-blue-500/10 text-blue-300",
  SS: "border-purple-500/50 bg-purple-500/10 text-purple-300",
  EX: "border-amber-500/50 bg-amber-500/10 text-amber-300",
};
const GRADE_CARD: Record<string, string> = {
  A: "border-lime-500/30",
  S: "border-blue-500/30",
  SS: "border-purple-500/30",
  EX: "border-amber-500/40",
};

// ===== HELPERS =====

// At most one decimal, without a trailing .0
const num = (n: number) => String(Number(n.toFixed(1)));

// "Ranged ATK +5%" or "Starting AP +5"
const fmtEffect = (e: TraitEffect) =>
  `${label(e.stat)} ${e.value > 0 ? "+" : ""}${num(e.value)}${e.type === "percent" ? "%" : ""}`;


// Clean multiline trait description for display
const cleanTraitDesc = (d?: string) =>
  d
    ?.split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .join("\n") ?? "";

// A weapon value at a level: a straight line from Lv 1 to Lv 60
const atLevel = (v: { lv1: number; lv60: number }, level: number) =>
  v.lv1 + ((v.lv60 - v.lv1) * (level - 1)) / 59;

// The main stat of one stigma piece at its level
const mainOf = (s: EquippedStigma) => {
  const set = getStigmaSet(s.set);
  const main = set?.pieces[s.slot].mainStat;
  const range = set ? main?.value[set.grade] : undefined;
  if (!main || !range) return null;
  return {
    stats: Array.isArray(main.stat) ? main.stat : [main.stat],
    type: main.type,
    value: stigmaValue(range, s.level),
  };
};

// A build's Might Skills as a list, whether it has one or several
const mightsOf = (b: Build): BuildMight[] => (!b.might ? [] : Array.isArray(b.might) ? b.might : [b.might]);

// Small title used above each section
const Title = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
    {children}
  </p>
);
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-card/60 p-4">
    {children}
  </div>
);

// ===== ONE STIGMA CARD =====
// Image that shows a placeholder if the file is missing
function SafeImg({
  src,
  alt,
  className,
  fallback,
}: {
  src?: string;
  alt: string;
  className?: string;
  fallback: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <>{fallback}</>;
  return (
    <img
      src={asset(src)}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

// Stat icon from your images. Leaves an empty space if the file is missing.
function StatImg({
  stat,
  className = "h-5 w-5",
}: {
  stat: string;
  className?: string;
}) {
  return (
    <SafeImg
      src={asset(`/icons/stats/${stat}.webp`)}
      alt=""
      className={`${className} shrink-0 object-contain`}
      fallback={<span className={`${className} shrink-0`} />}
    />
  );
}

// An effect with its icon: [icon] Ranged ATK +5%
function EffectText({ e }: { e: TraitEffect }) {
  return (
    <span className="inline-flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5">
      <StatImg stat={e.stat} className="h-4 w-4" />
      <span className="whitespace-nowrap">{fmtEffect(e)}</span>
      {e.battleOnly && (
        <span className="whitespace-nowrap text-[10px] text-sky-300">
          (battle)
        </span>
      )}
      {e.condition === "maxAffection" && (
        <span className="whitespace-nowrap text-[10px] text-pink-300">
          (max affection)
        </span>
      )}
      {e.condition && e.condition !== "maxAffection" && (
        <span className="whitespace-nowrap text-[10px] text-pink-300">
          ({e.condition})
        </span>
      )}
    </span>
  );
}

// "+5%" or "+5" (the number part of an effect)
const fmtValue = (e: TraitEffect) =>
  `${e.value > 0 ? "+" : ""}${num(e.value)}${e.type === "percent" ? "%" : ""}`;

// Small "Change" button, shown on the Custom build only
const ChangeBtn = ({
  onClick,
  label = "Change",
}: {
  onClick: () => void;
  label?: string;
}) => (
  <button
    onClick={onClick}
    className="rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary hover:bg-primary/20"
  >
    {label}
  </button>
);

// A section title with a button on the right
const TitleRow = ({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
}) => (
  <div className="mb-3 flex items-center justify-between">
    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </p>
    {action}
  </div>
);

// The pop-up that lists the alternatives (Escape or a click outside closes it)
function Picker({
  title,
  onClose,
  children,
  large,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  /** Wider + taller panel (used by the trait picker) */
  large?: boolean;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className={`flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-popover shadow-2xl ${
          large
            ? "max-h-[92vh] max-w-5xl"
            : "max-h-[80vh] max-w-2xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <p className="text-sm font-semibold">{title}</p>
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-accent"
          >
            ✕
          </button>
        </div>
        <div className="overflow-auto p-3">{children}</div>
      </div>
    </div>
  );
}

// Stigma pop-up: every set, shown with this slot's piece and main stat
function StigmaPickerBody({
  piece,
  onPick,
}: {
  piece: EquippedStigma;
  onPick: (setId: string) => void;
}) {
  const sorted = [...stigmaSets].sort((a, b) =>
    a.grade === b.grade
      ? a.name.localeCompare(b.name)
      : a.grade === "EX"
        ? -1
        : 1,
  );
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {sorted.map((set) => {
        const m = mainOf({ ...piece, set: set.id });
        return (
          <button
            key={set.id}
            onClick={() => onPick(set.id)}
            className={`flex items-center gap-3 rounded-xl border p-2 text-left transition ${
              set.id === piece.set
                ? "border-primary/70 bg-primary/10"
                : "border-border bg-secondary/40 hover:bg-accent"
            }`}
          >
            <SafeImg
              src={asset(
                set.pieces[piece.slot].icon ??
                `/stigmas/${set.id}-${piece.slot}.webp`
              )}
              alt=""
              className="h-14 w-14 shrink-0 object-contain"
              fallback={
                <span className="flex h-14 w-14 shrink-0 items-center justify-center text-2xl font-bold uppercase text-muted-foreground/30">
                  {piece.slot.charAt(0)}
                </span>
              }
            />
            <span className="min-w-0 flex-1 leading-tight">
              <span className="flex items-center gap-1.5">
                <span className="truncate text-sm font-semibold">
                  {set.name}
                </span>
                <span
                  className={`rounded border px-1 text-[10px] font-bold ${GRADE_BADGE[set.grade]}`}
                >
                  {set.grade}
                </span>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-primary">
                {m &&
                  m.stats.map((st) => (
                    <StatImg key={st} stat={st} className="h-4 w-4" />
                  ))}
                {m
                  ? `${m.stats.map(label).join(" & ")} +${num(m.value)}${m.type === "percent" ? "%" : ""}`
                  : "No data"}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

// Weapon pop-up: weapons of the character's type, and a level slider
function WeaponPickerBody({
  build,
  weaponType,
  onChange,
}: {
  build: Build;
  weaponType?: string;
  onChange: (b: Build) => void;
}) {
  const list = weaponType ? weaponsOfType(weaponType) : weapons;
  const row = (on: boolean) =>
    `flex items-center gap-3 rounded-xl border p-2 text-left transition ${
      on
        ? "border-primary/70 bg-primary/10"
        : "border-border bg-secondary/40 hover:bg-accent"
    }`;
  return (
    <>
      {build.weapon && (
        <label className="mb-3 flex items-center gap-3 text-xs">
          <span className="w-20 text-muted-foreground">
            Level {build.weapon.level}
          </span>
          <input
            type="range"
            min={1}
            max={60}
            value={build.weapon.level}
            onChange={(e) =>
              onChange({
                ...build,
                weapon: { ...build.weapon!, level: Number(e.target.value) },
              })
            }
            className="h-1 flex-1 cursor-pointer accent-purple-400"
          />
        </label>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        <button
          onClick={() => onChange({ ...build, weapon: undefined })}
          className={row(!build.weapon)}
        >
          <span className="text-sm font-semibold">No weapon</span>
        </button>
        {list.map((w) => (
          <button
            key={w.id}
            onClick={() =>
              onChange({
                ...build,
                weapon: { id: w.id, level: build.weapon?.level ?? 60, dupe: 5 },
              })
            }
            className={row(build.weapon?.id === w.id)}
          >
            <SafeImg
              src={asset(w.icon)}
              alt=""
              className="h-14 w-14 shrink-0 object-contain"
              fallback={
                <span className="flex h-14 w-14 shrink-0 items-center justify-center text-2xl font-bold text-muted-foreground/30">
                  {w.name.charAt(0)}
                </span>
              }
            />
            <span className="min-w-0 flex-1 leading-tight">
              <span className="flex items-center gap-1.5">
                <span className="truncate text-sm font-semibold">{w.name}</span>
                <span
                  className={`rounded border px-1 text-[10px] font-bold ${GRADE_BADGE[w.grade]}`}
                >
                  {w.grade}
                </span>
              </span>
              <span className="flex flex-wrap gap-x-3 text-xs text-primary">
                {mainStats(w).map((m, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5">
                    <StatImg stat={m.stat} className="h-4 w-4" />
                    {label(m.stat)} +{num(m.value.lv60)}
                  </span>
                ))}
              </span>
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

// Trait pop-up: search the general traits
// Map a stat key to a filter category (same idea as the Traits page)
const TRAIT_STAT_GROUP: Record<string, string> = {
  str: "Basic Stats",
  tec: "Basic Stats",
  int: "Basic Stats",
  vit: "Basic Stats",
  agi: "Basic Stats",
  meleeAtk: "Melee ATK",
  rangedAtk: "Ranged ATK",
  magicAtk: "Magic ATK",
  allAtk: "All ATK",
  maxHp: "Max HP",
  spd: "SPD",
  accuracy: "Accuracy",
  evade: "Evade",
  startAp: "Starting AP",
  apRecovery: "AP Recovery",
  critRate: "Crit Rate",
  critDmg: "Crit DMG",
  slashBoost: "Slash Boost",
  pierceBoost: "Pierce Boost",
  crushBoost: "Crush Boost",
  heatBoost: "Heat Boost",
  coldBoost: "Cold Boost",
  electricBoost: "Electric Boost",
  immaterialBoost: "Immaterial Boost",
  poisonBoost: "Poison Boost",
  elementalBoost: "Elemental Boost",
  slashDef: "Slash DEF",
  pierceDef: "Pierce DEF",
  crushDef: "Crush DEF",
  heatDef: "Heat DEF",
  coldDef: "Cold DEF",
  electricDef: "Electric DEF",
  immaterialDef: "Immaterial DEF",
  poisonDef: "Poison DEF",
  allDef: "All DEF",
  aggroAdj: "Aggro Adjustment",
  knockbackRes: "Knockback Resistance",
  knockbackResistance: "Knockback Resistance",
  blockChance: "Block Chance",
  formationCost: "Formation Cost",
};

const traitCategoriesOf = (t: (typeof traits)[number]): string[] => {
  const set = new Set<string>([
    ...(t.categories ?? []),
    ...(t.category ?? []),
  ]);
  for (const e of t.effects) {
    const g =
      TRAIT_STAT_GROUP[e.stat] ??
      (e.stat.endsWith("Boost")
        ? "Boost"
        : e.stat.endsWith("Def")
          ? "Defense"
          : null);
    if (g) set.add(g);
  }
  return [...set];
};

const chipOn =
  "border-primary/70 bg-primary/15 text-primary";
const chipOff =
  "border-border bg-secondary text-foreground hover:border-foreground/30 hover:bg-accent";

// Trait pop-up: search + Grade + Category filters
function TraitPickerBody({
  current,
  taken,
  onPick,
  onRemove,
}: {
  current?: string;
  taken: string[];
  onPick: (id: string) => void;
  onRemove: () => void;
}) {
  const [search, setSearch] = useState("");
  const [grades, setGrades] = useState<number[]>([]);
  const [cats, setCats] = useState<string[]>([]);

  const toggleGrade = (g: number) =>
    setGrades((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g],
    );
  const toggleCat = (c: string) =>
    setCats((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );

  // Pool: general traits not already taken (except the slot being edited)
  const pool = traits.filter(
    (t) =>
      t.kind === "general" && (!taken.includes(t.id) || t.id === current),
  );

  const gradesUsed = [
    ...new Set(
      pool.map((t) => t.grade).filter((g): g is number => g != null),
    ),
  ].sort((a, b) => a - b);

  const q = search.toLowerCase().trim();

  // Apply search + grade first (category chips count from this)
  const afterGrade = pool.filter((t) => {
    if (q && !`${t.name} ${t.id}`.toLowerCase().includes(q)) return false;
    if (grades.length > 0 && (t.grade == null || !grades.includes(t.grade)))
      return false;
    return true;
  });

  // Category counts: AND with other selected categories
  const catCounts: [string, number][] = (() => {
    const names = new Set<string>();
    for (const t of afterGrade) {
      for (const c of traitCategoriesOf(t)) names.add(c);
    }
    for (const c of cats) names.add(c);
    const entries: [string, number][] = [];
    for (const c of names) {
      const need = cats.includes(c) ? cats : [...cats, c];
      let n = 0;
      for (const t of afterGrade) {
        const list = traitCategoriesOf(t);
        if (need.every((x) => list.includes(x))) n++;
      }
      if (n > 0 || cats.includes(c)) entries.push([c, n]);
    }
    return entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  })();

  const found = afterGrade
    .filter((t) => {
      if (cats.length === 0) return true;
      const list = traitCategoriesOf(t);
      return cats.every((c) => list.includes(c));
    })
    .sort(
      (a, b) =>
        (b.grade ?? 0) - (a.grade ?? 0) || a.name.localeCompare(b.name),
    );

  const hasFilters = grades.length > 0 || cats.length > 0;

  return (
    <div className="space-y-3">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search traits..."
        className="h-9 w-full rounded-md border border-border bg-card/60 px-3 text-sm outline-none focus:border-primary/60"
      />

      {/* Grade filter */}
      {gradesUsed.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 shrink-0 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Grade
          </span>
          {gradesUsed.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => toggleGrade(g)}
              className={`rounded-full border px-3 py-1 text-sm transition ${
                grades.includes(g) ? chipOn : chipOff
              }`}
            >
              G{g}
            </button>
          ))}
        </div>
      )}

      {/* Category filter */}
      {catCounts.length > 0 && (
        <div className="flex items-start gap-2">
          <span className="w-16 shrink-0 pt-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Category
          </span>
          <div className="flex flex-1 flex-wrap gap-1.5">
            {catCounts.map(([c, n]) => (
              <button
                key={c}
                type="button"
                onClick={() => toggleCat(c)}
                className={`rounded-full border px-2.5 py-1 text-xs transition ${
                  cats.includes(c) ? chipOn : chipOff
                }`}
              >
                {c}{" "}
                <span className="opacity-60">{n}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {(hasFilters || q) && (
        <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            {found.length} trait{found.length === 1 ? "" : "s"}
          </span>
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setGrades([]);
                setCats([]);
              }}
              className="underline hover:text-foreground"
            >
              Clear filters
            </button>
          )}
        </div>
      )}

      {current && (
        <button
          onClick={onRemove}
          className="w-full rounded-lg border border-rose-500/40 px-3 py-1.5 text-left text-sm text-rose-300 hover:bg-rose-500/10"
        >
          Remove this trait
        </button>
      )}

      <div className="grid gap-1.5 sm:grid-cols-2">
        {found.map((t) => (
          <button
            key={t.id}
            onClick={() => onPick(t.id)}
            className={`w-full rounded-lg border px-3 py-2 text-left transition ${
              t.id === current
                ? "border-primary/70 bg-primary/10"
                : "border-border bg-secondary/40 hover:bg-accent"
            }`}
          >
            <span className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold">{t.name}</span>
              {t.grade != null && (
                <span className="shrink-0 text-[10px] font-bold text-amber-300">
                  G{t.grade}
                </span>
              )}
            </span>
            {t.effects.length > 0 ? (
              <span className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted-foreground">
                {t.effects.map((e, i) => (
                  <EffectText key={i} e={e} />
                ))}
              </span>
            ) : t.kind === "general" && cleanTraitDesc(t.description) ? (
              <p className="mt-0.5 whitespace-pre-line text-xs leading-relaxed text-muted-foreground">
                {cleanTraitDesc(t.description)}
              </p>
            ) : (
              <p className="mt-0.5 text-xs text-muted-foreground">No stat effects.</p>
            )}
          </button>
        ))}
      </div>

      {found.length === 0 && (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No traits match these filters.
        </p>
      )}
    </div>
  );
}

// Pop-up body: stigma level and the 3 substats
function StigmaEditBody({
  piece,
  onChange,
}: {
  piece: EquippedStigma;
  onChange: (p: EquippedStigma) => void;
}) {
  const setSub = (i: number, patch: Partial<TraitEffect>) =>
    onChange({
      ...piece,
      subs: piece.subs.map((e, j) => (j === i ? { ...e, ...patch } : e)),
    });

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-3 text-xs">
        <span className="w-24 text-muted-foreground">Level {piece.level}</span>
        <input
          type="range"
          min={1}
          max={STIGMA_MAX_LEVEL}
          value={piece.level}
          onChange={(e) =>
            onChange({ ...piece, level: Number(e.target.value) })
          }
          className="h-1 flex-1 cursor-pointer accent-purple-400"
        />
      </label>

      {piece.subs.map((e, i) => {
        const range = SUBSTAT_RANGES[e.stat] ?? SUBSTAT_DEFAULT_RANGE;
        return (
          <div
            key={i}
            className="space-y-3 rounded-xl border border-border bg-secondary/30 p-3"
          >
            <p className="text-xs text-muted-foreground">Substat {i + 1}</p>

            {/* Pick the stat from your icons */}
            <div className="flex flex-wrap gap-1.5">
              {SUBSTAT_STATS.map((st) => {
                const r = SUBSTAT_RANGES[st] ?? SUBSTAT_DEFAULT_RANGE;
                return (
                  <button
                    key={st}
                    onClick={() =>
                      setSub(i, {
                        stat: st,
                        type: SUBSTAT_FLAT.includes(st) ? "flat" : "percent",
                        value: Math.min(r.max, Math.max(r.min, e.value)), // keep it inside the new range
                      })
                    }
                    className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition ${
                      e.stat === st
                        ? "border-primary/70 bg-primary/15 text-primary"
                        : "border-border bg-secondary hover:bg-accent"
                    }`}
                  >
                    <StatImg stat={st} />
                    {label(st)}
                  </button>
                );
              })}
            </div>

            {/* The rolled value, inside the range this stat can roll */}
            <label className="flex items-center gap-3 text-xs">
              <span className="w-20 text-muted-foreground">
                {range.min} to {range.max}
              </span>
              <input
                type="range"
                min={range.min}
                max={range.max}
                step={0.1}
                value={e.value}
                onChange={(ev) =>
                  setSub(i, {
                    value: Number(Number(ev.target.value).toFixed(1)),
                  })
                }
                className="h-1 flex-1 cursor-pointer accent-purple-400"
              />
              <span className="w-14 text-right text-sm font-bold tabular-nums text-amber-300">
                {fmtValue(e)}
              </span>
            </label>
          </div>
        );
      })}
    </div>
  );
}

// The Might Skill card. The level buttons let visitors preview every level.
function MightCard({ item, onChange }: { item: BuildMight; onChange?: () => void }) {
  const [lv, setLv] = useState(item.level);
  const m = getMight(item.id);

  // Fill {name} in the text with the number for the chosen level
  const text = m?.description.replace(/\{(\w+)\}/g, (_, key: string) => {
    const n = m.values?.[key]?.[lv - 1];
    return n == null ? "?" : num(n);
  });

  return (
    <Card>
      <TitleRow action={onChange && <ChangeBtn onClick={onChange} />}>
        Might Skill
        {item.optional && (
          <span className="ml-2 rounded bg-sky-500/20 px-1.5 py-0.5 align-middle text-[10px] font-bold text-sky-300">
            OPTIONAL
          </span>
        )}
      </TitleRow>

      {!m ? (
        <p className="text-sm text-rose-300">Might Skill not found: {item.id}</p>
      ) : (
        <div className="flex items-start gap-4">
          <SafeImg
            src={asset(m.icon ?? `/might/${m.id}.webp`)}
            alt={m.name}
            className="h-16 w-16 shrink-0 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            fallback={
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-black/30 text-2xl font-bold text-muted-foreground/40">
                {m.name.charAt(0)}
              </span>
            }
          />
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-base font-semibold">{m.name}</p>
              <div className="flex items-center gap-1">
                <span className="mr-1 text-xs text-muted-foreground">Lv</span>
                {[1, 2, 3, 4, 5].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLv(l)}
                    className={`h-6 w-6 rounded border text-[11px] transition ${
                      lv === l ? "border-primary/70 bg-primary/15 text-primary" : "border-border hover:bg-accent"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        </div>
      )}

      {item.note && (
        <div className="mt-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-amber-300">Note: </span>
          {item.note}
        </div>
      )}
    </Card>
  );
}

// Pop-up body for the Custom build: pick another Might Skill
function MightPickerBody({
  current,
  onPick,
}: {
  current?: string;
  onPick: (id?: string) => void;
}) {
  const row = (on: boolean) =>
    `flex items-center gap-3 rounded-xl border p-2 text-left transition ${
      on
        ? "border-primary/70 bg-primary/10"
        : "border-border bg-secondary/40 hover:bg-accent"
    }`;
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <button onClick={() => onPick(undefined)} className={row(!current)}>
        <span className="text-sm font-semibold">None</span>
      </button>
      {mightSkills.map((m) => (
        <button
          key={m.id}
          onClick={() => onPick(m.id)}
          className={row(m.id === current)}
        >
          <SafeImg
            src={asset(m.icon ?? `/might/${m.id}.webp`)}
            alt=""
            className="h-12 w-12 shrink-0 object-contain"
            fallback={
              <span className="flex h-12 w-12 shrink-0 items-center justify-center text-xl font-bold text-muted-foreground/30">
                {m.name.charAt(0)}
              </span>
            }
          />
          <span className="text-sm font-semibold">{m.name}</span>
        </button>
      ))}
    </div>
  );
}

function StigmaCard({
  s,
  onChange,
  onEdit,
}: {
  s: EquippedStigma;
  onChange?: () => void;
  onEdit?: () => void;
}) {
  const set = getStigmaSet(s.set);
  const grade = set?.grade ?? "SS";
  const main = mainOf(s);

  // Image for this piece. Uses the piece's own icon if it has one,
  // otherwise /stigmas/<set-id>-<slot>.webp (for example /stigmas/reckoning-of-sin-top.webp)
  const icon = set?.pieces[s.slot].icon ?? `/stigmas/${s.set}-${s.slot}.webp`;

  return (
    <div
      className={`flex flex-col rounded-xl border bg-secondary/40 p-3 ${GRADE_CARD[grade]}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 leading-tight">
          <p className="truncate text-sm font-semibold">{set?.name ?? s.set}</p>
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {s.slot}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {onChange && <ChangeBtn onClick={onChange} />}
          {onEdit && <ChangeBtn onClick={onEdit} label="Edit" />}
          <span
            className={`rounded border px-1.5 py-0.5 text-[10px] font-bold ${GRADE_BADGE[grade]}`}
          >
            {grade}
          </span>
        </div>
      </div>

      {/* Piece image */}
      <div className="my-3 flex h-40 items-center justify-center rounded-lg bg-gradient-to-b from-white/5 to-black/40">
        <SafeImg
          src={asset(icon)}
          alt={`${set?.name ?? s.set} ${s.slot}`}
          className="h-35 w-35 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
          fallback={
            <span className="text-4xl font-bold uppercase text-muted-foreground/30">
              {s.slot.charAt(0)}
            </span>
          }
        />
      </div>

      {/* Main stat */}
      <p className="flex items-center gap-2 text-lg font-semibold leading-tight text-primary">
        {main ? (
          <>
            {main.stats.map((st) => (
              <StatImg key={st} stat={st} className="h-6 w-6" />
            ))}
            {`${main.stats.map(label).join(" & ")} +${num(main.value)}${main.type === "percent" ? "%" : ""}`}
          </>
        ) : (
          "No data for this grade"
        )}
      </p>
      <p className="mt-0.5 text-[11px] tabular-nums text-muted-foreground">
        Lv {s.level}/{STIGMA_MAX_LEVEL}
      </p>

      {/* Substats: each one on its own highlighted row */}
      <ul className="mt-3 space-y-1.5">
        {s.subs.map((e, i) => (
          <li
            key={i}
            className="flex items-center justify-between gap-2 rounded-lg border-l-2 border-l-primary bg-black/30 px-2.5 py-1.5"
          >
            <span className="flex items-center gap-2 text-xs text-foreground/80">
              <StatImg stat={e.stat} />
              {label(e.stat)}
            </span>
            <span className="text-sm font-bold tabular-nums text-amber-300">
              {fmtValue(e)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ===== THE WEAPON CARD =====
// Has its own dupe buttons, so visitors can preview the unique effect
function WeaponCard({
  weapon,
  level,
  startDupe,
  charId,
  onChange,
}: {
  weapon: Weapon;
  level: number;
  startDupe: number;
  charId?: string;
  onChange?: () => void;
}) {
  const [dupe, setDupe] = useState(startDupe);

  // Fill {name} in the text with the number for the chosen dupe
  const uniqueText = weapon.unique?.description.replace(
    /\{(\w+)\}/g,
    (_, key: string) => {
      const n = weapon.unique?.values?.[key]?.[dupe - 1];
      return n === undefined ? "?" : num(n);
    },
  );

  // The exclusive effect only counts for the character it was made for
  const exclusive =
    weapon.exclusive?.characterId === charId ? weapon.exclusive : undefined;

  return (
    <Card>
      <TitleRow action={onChange && <ChangeBtn onClick={onChange} />}>
        Weapon
      </TitleRow>

      {/* Big image */}
      <div className="relative flex h-50 items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-b from-white/5 to-black/40">
        <SafeImg
          src={asset(weapon.icon)}
          alt={weapon.name}
          className="h-full w-full object-contain p-4 drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
          fallback={
            <span className="text-5xl font-bold text-muted-foreground/30">
              {weapon.name.charAt(0)}
            </span>
          }
        />
        <span
          className={`absolute left-3 top-3 rounded border px-2 py-0.5 text-xs font-bold ${GRADE_BADGE[weapon.grade]}`}
        >
          {weapon.grade}
        </span>
      </div>

      {/* Name and stats */}
      <div className="mt-3 space-y-2">
        <div>
          <p className="text-lg font-semibold leading-tight">{weapon.name}</p>
          <p className="text-xs text-muted-foreground">
            {weapon.type} · Lv {level}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {mainStats(weapon).map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary"
            >
              <StatImg stat={m.stat} className="h-4 w-4" />
              {label(m.stat)} +{num(atLevel(m.value, level))}
              {m.type === "percent" ? "%" : ""}
            </span>
          ))}
          {weapon.subStats?.map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1"
            >
              <StatImg stat={s.stat} className="h-4 w-4" />
              {label(s.stat)} +{num(atLevel(s.value, level))}
              {s.type === "percent" ? "%" : ""}
            </span>
          ))}
        </div>
      </div>

      {/* Unique effect with dupe buttons */}
      {weapon.unique && (
        <div className="mt-3 rounded-xl bg-secondary/40 p-3 text-xs">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold">{weapon.unique.name}</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((d) => (
                <button
                  key={d}
                  onClick={() => setDupe(d)}
                  className={`h-6 w-6 rounded border text-[11px] transition ${
                    dupe === d
                      ? "border-primary/70 bg-primary/15 text-primary"
                      : "border-border hover:bg-accent"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <ul className="mt-1.5 space-y-1 leading-relaxed text-muted-foreground">
            {uniqueLines(weapon, dupe).map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Exclusive effect */}
      {exclusive && (
        <div className="mt-3 rounded-xl border border-primary/40 bg-primary/5 p-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold uppercase text-primary">
              Exclusive
            </span>
            <p className="text-sm font-semibold">{exclusive.name}</p>
          </div>
          <p className="mt-1.5 whitespace-pre-line leading-relaxed text-muted-foreground">
            {exclusive.description}
          </p>
        </div>
      )}
    </Card>
  );
}

// ===== ONE TRAIT CARD =====
function TraitCard({
  id,
  rank,
  dim,
  onChange,
}: {
  id: string;
  rank?: number;
  dim?: boolean;
  onChange?: () => void;
}) {
  const t = getTrait(id);
  if (!t)
    return (
      <div className="rounded-xl bg-secondary/40 p-3 text-xs text-rose-300">
        Missing trait: {id}
      </div>
    );
  return (
    <div
      className={`rounded-xl border border-border bg-secondary/40 p-3 ${dim ? "opacity-75" : ""}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <SafeImg
            src={asset(t.icon ?? `/traits/${t.id}.webp`)}
            alt=""
            className="h-9 w-9 shrink-0 rounded-lg bg-black/30 object-contain p-0.5"
            fallback={
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/30 text-sm font-bold text-muted-foreground/50">
                {t.name.charAt(0)}
              </span>
            }
          />
          {/* The trait name */}
          <p className="text-sm font-semibold leading-tight">
            {rank !== undefined && (
              <span className="mr-1.5 text-primary">{rank}.</span>
            )}
            {t.name}
          </p>
        </div>
        {/* Grade badge */}
        <div className="flex shrink-0 items-center gap-1.5">
          {onChange && <ChangeBtn onClick={onChange} />}
          {t.grade && (
            <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-bold text-amber-300">
              G{t.grade}
            </span>
          )}
        </div>
      </div>
      {t.effects.length > 0 ? (
        <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
          {t.effects.map((e, i) => (
            <li key={i} className="flex items-center">
              <EffectText e={e} />
            </li>
          ))}
        </ul>
      ) : t.kind === "general" && cleanTraitDesc(t.description) ? (
        <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-muted-foreground">
          {cleanTraitDesc(t.description)}
        </p>
      ) : (
        <p className="mt-2 text-xs text-muted-foreground">No stat effects.</p>
      )}
    </div>
  );
}
// ===== THE TAB =====
export function BuildTab({
  details,
  charId,
}: {
  details: CharacterDetails;
  charId?: string;
}) {
  const builds = details.builds ?? [];
  const { custom, setCustom } = useCustomBuild();
  const [picker, setPicker] = useState<
    | null
    | { type: "stigma"; index: number }
    | { type: "weapon" }
    | { type: "trait"; index: number }
    | { type: "stigmaEdit"; index: number }
    | { type: "might"; index: number }
  >(null);

  // Opens on the recommended build, or the first one
  const [buildId, setBuildId] = useState(
    (builds.find((b) => b.recommended) ?? builds[0])?.id ?? "",
  );

  if (builds.length === 0) {
    return <p className="text-muted-foreground">No builds added yet.</p>;
  }

  const build =
    buildId === "custom" && custom
      ? custom
      : (builds.find((b) => b.id === buildId) ?? builds[0]);
  const editable = build.id === "custom" && !!custom;
  const bw = build.weapon;
  const weapon = bw ? getWeapon(bw.id) : undefined;
  const mights = mightsOf(build);

  // How many pieces of each set are worn
  const setCount: Record<string, number> = {};
  build.stigmas.forEach((s) => (setCount[s.set] = (setCount[s.set] ?? 0) + 1));

  // Unique traits come from the character, general traits from the build
  const uniqueTraits = (details.traits ?? []).filter(
    (id) => getTrait(id)?.kind === "unique",
  );

  // ===== TOTAL BONUSES FROM THIS BUILD =====
  // Adds up the stigma main stats, substats, weapon stats and general traits
  const totals: Record<string, { stat: string; type: string; value: number }> =
    {};
  const add = (stat: string, type: string, value: number) => {
    const key = `${stat}|${type}`;
    totals[key] = { stat, type, value: (totals[key]?.value ?? 0) + value };
  };
  build.stigmas.forEach((s) => {
    const m = mainOf(s);
    if (m) m.stats.forEach((st) => add(st, m.type, m.value));
    s.subs.forEach((e) => add(e.stat, e.type, e.value));
  });
  if (weapon && bw) {
    mainStats(weapon).forEach((m) =>
      add(m.stat, m.type, atLevel(m.value, bw.level)),
    );
    weapon.subStats?.forEach((s) =>
      add(s.stat, s.type, atLevel(s.value, bw.level)),
    );
  }
  build.generalTraits.slice(0, 6).forEach((id) =>
    getTrait(id)?.effects.forEach((e) => {
      if (!e.battleOnly && !e.condition) add(e.stat, e.type, e.value);
    }),
  );
  const totalList = Object.values(totals).sort((a, b) =>
    label(a.stat).localeCompare(label(b.stat)),
  );

  return (
    <div className="space-y-4">
      {/* ===== PRESET BUTTONS ===== */}
      <div className="flex flex-wrap items-center gap-2">
        {builds.map((b) => (
          <button
            key={b.id}
            onClick={() => setBuildId(b.id)}
            className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition ${
              b.id === build.id
                ? "border-primary/70 bg-primary/15 text-primary"
                : "border-border bg-secondary hover:bg-accent"
            }`}
          >
            {b.name}
            {b.recommended && (
              <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                RECOMMENDED
              </span>
            )}
          </button>
        ))}
        {custom ? (
          <button
            onClick={() => setBuildId("custom")}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              buildId === "custom"
                ? "border-primary/70 bg-primary/15 text-primary"
                : "border-border bg-secondary hover:bg-accent"
            }`}
          >
            Custom
          </button>
        ) : (
          <button
            onClick={() => {
              setCustom({
                ...structuredClone(build),
                id: "custom",
                name: "Custom",
                recommended: false,
                note: undefined,
              });
              setBuildId("custom");
            }}
            className="rounded-full border border-dashed border-border px-4 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            + Customize
          </button>
        )}
      </div>

      {/* ===== BUILD NOTE ===== */}
      {build.note && (
        <p className="whitespace-pre-line rounded-2xl border border-border border-l-4 border-l-primary bg-card/60 p-4 text-sm leading-relaxed text-foreground/90">
          {build.note}
        </p>
      )}

      {/* ===== STIGMAS ===== */}
      <Card>
        <Title>Stigmas</Title>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {build.stigmas.map((s, i) => (
            <StigmaCard
              key={i}
              s={s}
              onChange={
                editable
                  ? () => setPicker({ type: "stigma", index: i })
                  : undefined
              }
              onEdit={
                editable
                  ? () => setPicker({ type: "stigmaEdit", index: i })
                  : undefined
              }
            />
          ))}
        </div>

        {/* Set bonuses: lit up when you wear enough pieces */}
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {Object.entries(setCount).map(([id, count]) => {
            const set = getStigmaSet(id);
            if (!set) return null;
            const rows = [
              { need: 2, text: set.twoSet.description },
              { need: 4, text: set.fourSet.description },
            ];
            return (
              <div key={id} className="rounded-xl bg-secondary/40 p-3">
                <p className="text-sm font-semibold">
                  {set.name}{" "}
                  <span className="text-xs font-normal text-muted-foreground">
                    ({count}/4 pieces)
                  </span>
                </p>
                <div className="mt-2 space-y-2">
                  {rows.map((r) => {
                    const on = count >= r.need;
                    return (
                      <div
                        key={r.need}
                        className={`flex gap-2 text-xs ${on ? "" : "opacity-40"}`}
                      >
                        <span
                          className={`h-fit shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${
                            on
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {r.need} SET
                        </span>
                        <span className="leading-relaxed text-muted-foreground">
                          {r.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {editable && custom && picker?.type === "stigmaEdit" && (
            <Picker
              title={`Edit ${custom.stigmas[picker.index].slot} stigma`}
              onClose={() => setPicker(null)}
            >
              <StigmaEditBody
                piece={custom.stigmas[picker.index]}
                onChange={(p) =>
                  setCustom({
                    ...custom,
                    stigmas: custom.stigmas.map((s, j) =>
                      j === picker.index ? p : s,
                    ),
                  })
                }
              />
            </Picker>
          )}
        </div>
      </Card>

      {details.demiGod && (mights.length > 0 || editable) && (
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          {mights.map((m, i) => (
            <MightCard
              key={build.id + m.id + i}
              item={m}
              onChange={editable ? () => setPicker({ type: "might", index: i }) : undefined}
            />
          ))}
          {editable && mights.length < 2 && (
            <button
              onClick={() => setPicker({ type: "might", index: mights.length })}
              className="rounded-2xl border border-dashed border-border py-6 text-sm text-muted-foreground hover:bg-accent"
            >
              + {mights.length === 0 ? "Add Might Skill" : "Add optional Might Skill"}
            </button>
          )}
        </div>
      )}

      {/* ===== WEAPON + TRAITS ===== */}
      <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          {weapon && bw ? (
            <WeaponCard
              key={build.id + bw.id}
              weapon={weapon}
              level={bw.level}
              startDupe={bw.dupe}
              charId={charId}
              onChange={
                editable ? () => setPicker({ type: "weapon" }) : undefined
              }
            />
          ) : bw ? (
            <Card>
              <Title>Weapon</Title>
              <p className="text-sm text-rose-300">Weapon not found: {bw.id}</p>
            </Card>
          ) : null}
          {!bw && editable && (
            <Card>
              <TitleRow
                action={
                  <ChangeBtn onClick={() => setPicker({ type: "weapon" })} />
                }
              >
                Weapon
              </TitleRow>
              <p className="text-sm text-muted-foreground">No weapon.</p>
            </Card>
          )}

          {uniqueTraits.length > 0 && (
            <Card>
              <Title>Unique Traits</Title>
              <div className="grid gap-3 sm:grid-cols-2">
                {uniqueTraits.map((id) => (
                  <TraitCard key={id} id={id} />
                ))}
              </div>
            </Card>
          )}
        </div>

        <Card>
          <Title>General Traits</Title>
          <p className="mb-3 text-xs text-muted-foreground">
            Take these in order. Only the first 6 count in Build Stats.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {build.generalTraits.slice(0, 6).map((id, i) => (
              <TraitCard
                key={id}
                id={id}
                rank={i + 1}
                onChange={
                  editable
                    ? () => setPicker({ type: "trait", index: i })
                    : undefined
                }
              />
            ))}
          </div>

          {build.generalTraits.length > 6 && (
            <>
              <p className="mb-3 mt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Alternatives, best first
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {build.generalTraits.slice(6).map((id, i) => (
                  <TraitCard
                    key={id}
                    id={id}
                    rank={i + 7}
                    dim
                    onChange={
                      editable
                        ? () => setPicker({ type: "trait", index: i + 6 })
                        : undefined
                    }
                  />
                ))}
              </div>
            </>
          )}
          {editable && build.generalTraits.length < 12 && (
            <button
              onClick={() =>
                setPicker({ type: "trait", index: build.generalTraits.length })
              }
              className="mt-3 w-full rounded-xl border border-dashed border-border py-2 text-sm text-muted-foreground hover:bg-accent"
            >
              + Add trait
            </button>
          )}
        </Card>
      </div>

      {/* ===== TOTAL BONUSES ===== */}
      <Card>
        <Title>Total bonuses from this build</Title>
        <div className="flex flex-wrap items-center gap-1.5">
          {totalList.map((t) => (
            <span
              key={`${t.stat}|${t.type}`}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
                t.value < 0
                  ? "border-rose-500/40 bg-rose-500/10 text-rose-300"
                  : "border-border bg-secondary/60"
              }`}
            >
              <StatImg stat={t.stat} className="h-4 w-4" />
              <span className="whitespace-nowrap">
                {label(t.stat)}{" "}
                <span className="font-semibold">
                  {t.value > 0 ? "+" : ""}
                  {num(t.value)}
                  {t.type === "percent" ? "%" : ""}
                </span>
              </span>
            </span>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">
          Counts stigma main stats and substats, weapon stats and general
          traits. Battle-only and max-affection effects are left out.
        </p>
      </Card>
      {editable && custom && picker?.type === "stigma" && (
        <Picker
          title={`Change ${custom.stigmas[picker.index].slot} stigma`}
          onClose={() => setPicker(null)}
        >
          <StigmaPickerBody
            piece={custom.stigmas[picker.index]}
            onPick={(setId) => {
              setCustom({
                ...custom,
                stigmas: custom.stigmas.map((s, j) =>
                  j === picker.index ? { ...s, set: setId } : s,
                ),
              });
              setPicker(null);
            }}
          />
        </Picker>
      )}
      {editable && custom && picker?.type === "weapon" && (
        <Picker title="Change weapon" onClose={() => setPicker(null)}>
          <WeaponPickerBody
            build={custom}
            weaponType={details.weaponType}
            onChange={setCustom}
          />
        </Picker>
      )}
      {editable && custom && picker?.type === "might" && (
        <Picker title="Change Might Skill" onClose={() => setPicker(null)}>
          <MightPickerBody
            current={mightsOf(custom)[picker.index]?.id}
            onPick={(id) => {
              const list = [...mightsOf(custom)];
              if (id) list[picker.index] = { ...(list[picker.index] ?? { level: 5, optional: picker.index > 0 }), id };
              else list.splice(picker.index, 1);
              setCustom({ ...custom, might: list });
              setPicker(null);
            }}
          />
        </Picker>
      )}
      {editable && custom && picker?.type === "trait" && (
        <Picker title="Change trait" onClose={() => setPicker(null)} large>
          <TraitPickerBody
            current={custom.generalTraits[picker.index]}
            taken={custom.generalTraits}
            onPick={(id) => {
              const next = [...custom.generalTraits];
              next[picker.index] = id;
              setCustom({ ...custom, generalTraits: next });
              setPicker(null);
            }}
            onRemove={() => {
              setCustom({
                ...custom,
                generalTraits: custom.generalTraits.filter(
                  (_, j) => j !== picker.index,
                ),
              });
              setPicker(null);
            }}
          />
        </Picker>
      )}
    </div>
  );
}
