"use client";

import { memo, useMemo, useState } from "react";
import { traits } from "@/data/traits";
import type { Trait, TraitEffect } from "@/data/types";
import { label } from "@/lib/stat-labels";

const PAGE_SIZE = 60;

// ===== helpers (module scope — run once) =====

const fmtEffect = (e: TraitEffect) =>
  `${label(e.stat)} ${e.value > 0 ? "+" : ""}${Number(e.value.toFixed(1))}${
    e.type === "percent" ? "%" : ""
  }`;

/** Map a stat key to a filter category chip */
const STAT_GROUP: Record<string, string> = {
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
  basicAttackDmg: "Basic Attack DMG",
  combatSkillDmg: "Combat Skill DMG",
  additionalDmgBoost: "Additional DMG Boost",
  responseDmg: "Response DMG",
  counterattackDmg: "Counterattack DMG",
  supportAtkDmg: "Support Attack DMG",
  supportAttackDmg: "Support Attack DMG",
  supportCounterattackDmg: "Support Counterattack DMG",
  finalDmg: "Final DMG",
  slashDef: "Slash DEF",
  pierceDef: "Pierce DEF",
  crushDef: "Crush DEF",
  heatDef: "Heat DEF",
  coldDef: "Cold DEF",
  electricDef: "Electric DEF",
  immaterialDef: "Immaterial DEF",
  poisonDef: "Poison DEF",
  formationCost: "Formation Cost",
  aggroAdj: "Aggro Adjustment",
  knockbackRes: "Knockback Resistance",
  knockbackResistance: "Knockback Resistance",
  allDef: "All DEF",
  blockChance: "Block Chance",
};

const groupOf = (stat: string) =>
  STAT_GROUP[stat] ??
  (stat.endsWith("Boost") ? "Boost" : stat.endsWith("Def") ? "Defense" : null);

const categoriesOf = (t: Trait): string[] => {
  const set = new Set<string>([...(t.categories ?? []), ...(t.category ?? [])]);
  for (const e of t.effects) {
    const g = groupOf(e.stat);
    if (g) set.add(g);
  }
  return [...set];
};

/** Trim each line of a multiline description once */
const cleanDesc = (d?: string) =>
  d
    ?.split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .join("\n") ?? "";

// Precompute once — `traits` is a static module export
const CATS_BY_ID = new Map(traits.map((t) => [t.id, categoriesOf(t)] as const));
const DESC_BY_ID = new Map(
  traits.map((t) => [t.id, cleanDesc(t.description)] as const),
);
const SEARCH_BY_ID = new Map(
  traits.map(
    (t) => [t.id, `${t.name} ${t.description ?? ""}`.toLowerCase()] as const,
  ),
);
const USED_GRADES = [
  ...new Set(traits.map((t) => t.grade).filter((g): g is number => g != null)),
].sort((a, b) => a - b);
const toggle = <T,>(list: T[], set: (v: T[]) => void, v: T) =>
  set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

const chipClass = (on: boolean) =>
  `rounded-full border px-3 py-1 text-sm capitalize transition ${
    on
      ? "border-primary/70 bg-primary/15 text-primary"
      : "border-border bg-secondary hover:bg-accent"
  }`;

// ===== UI pieces =====

function TraitImg({
  id,
  icon,
  name,
}: {
  id: string;
  icon?: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/30 text-sm font-bold text-muted-foreground/50">
        {name.charAt(0)}
      </span>
    );
  }
  return (
    <img
      src={icon ?? `/traits/${id}.webp`}
      alt=""
      onError={() => setFailed(true)}
      className="h-9 w-9 shrink-0 rounded-lg bg-black/30 object-contain p-0.5"
    />
  );
}

const TraitCard = memo(function TraitCard({ t }: { t: Trait }) {
  const cats = CATS_BY_ID.get(t.id);
  const desc = DESC_BY_ID.get(t.id);

  return (
    <div className="rounded-2xl border border-border bg-card/60 p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <TraitImg id={t.id} icon={t.icon} name={t.name} />
          <p className="text-sm font-semibold">{t.name}</p>
        </div>
        <div className="flex shrink-0 gap-1.5">
          {t.grade != null && (
            <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-bold text-amber-300">
              G{t.grade}
            </span>
          )}
          <span
            className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase ${
              t.kind === "unique"
                ? "bg-primary/15 text-primary"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {t.kind}
          </span>
        </div>
      </div>

      {cats && cats.length > 0 && (
        <div className="mt-1.5 flex flex-wrap gap-1">
          {cats.map((c) => (
            <span
              key={c}
              className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      )}

      {desc ? (
        <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-muted-foreground">
          {desc}
        </p>
      ) : (
        <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
          {t.effects.map((e, i) => (
            <li
              key={i}
              className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5"
            >
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
            </li>
          ))}
          {t.effects.length === 0 && <li>No stat effects.</li>}
        </ul>
      )}
    </div>
  );
});

// ===== page =====

export default function TraitsPage() {
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState("all");
  const [grades, setGrades] = useState<number[]>([]);
  const [cats, setCats] = useState<string[]>([]);
  const [limit, setLimit] = useState(PAGE_SIZE);

  const q = search.trim().toLowerCase();

  // Traits matching search / kind / grade (category filter applied separately for the list)
  const basePool = useMemo(() => {
    const gradeSet = grades.length ? new Set(grades) : null;
    return traits.filter((t) => {
      if (kind !== "all" && t.kind !== kind) return false;
      if (gradeSet && (t.grade == null || !gradeSet.has(t.grade))) return false;
      if (q && !(SEARCH_BY_ID.get(t.id) ?? "").includes(q)) return false;
      return true;
    });
  }, [q, kind, grades]);

  // Category chip counts: respect search / kind / grade and other selected categories (AND).
  // Count for chip C = traits that have C and every currently selected category.
  const catCounts = useMemo(() => {
    const names = new Set<string>();
    for (const t of basePool) {
      for (const c of CATS_BY_ID.get(t.id) ?? []) names.add(c);
    }
    // Always keep selected chips visible even if count drops to 0
    for (const c of cats) names.add(c);

    const entries: [string, number][] = [];
    for (const c of names) {
      // Must include this chip's category + all selected ones
      const need = cats.includes(c) ? cats : [...cats, c];
      let n = 0;
      for (const t of basePool) {
        const list = CATS_BY_ID.get(t.id);
        if (list && need.every((x) => list.includes(x))) n++;
      }
      if (n > 0 || cats.includes(c)) entries.push([c, n]);
    }
    return entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [basePool, cats]);

  const shown = useMemo(() => {
    const catNeed = cats.length ? cats : null;
    const filtered = catNeed
      ? basePool.filter((t) => {
          const traitCats = CATS_BY_ID.get(t.id);
          return !!traitCats && catNeed.every((c) => traitCats.includes(c));
        })
      : basePool;
    return [...filtered].sort((a, b) =>
      a.kind === b.kind
        ? a.name.localeCompare(b.name)
        : a.kind === "general"
          ? -1
          : 1,
    );
  }, [basePool, cats]);

  // Reset pagination when filters change (derive next limit in the same update)
  const setKindAndReset = (k: string) => {
    setKind(k);
    setLimit(PAGE_SIZE);
  };
  const toggleGrade = (g: number) => {
    toggle(grades, setGrades, g);
    setLimit(PAGE_SIZE);
  };
  const toggleCat = (c: string) => {
    toggle(cats, setCats, c);
    setLimit(PAGE_SIZE);
  };
  const onSearch = (value: string) => {
    setSearch(value);
    setLimit(PAGE_SIZE);
  };
  const clearFilters = () => {
    setKind("all");
    setGrades([]);
    setCats([]);
    setLimit(PAGE_SIZE);
  };

  const hasFilters = kind !== "all" || grades.length > 0 || cats.length > 0;
  const visible = shown.slice(0, limit);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="space-y-3 rounded-2xl border border-border bg-card/60 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Kind
          </span>
          {(["all", "general", "unique"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKindAndReset(k)}
              className={chipClass(kind === k)}
            >
              {k}
            </button>
          ))}
        </div>

        {USED_GRADES.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 border-t border-border/60 pt-3">
            <span className="w-20 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Grade
            </span>
            {USED_GRADES.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => toggleGrade(g)}
                className={chipClass(grades.includes(g))}
              >
                {g}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-start gap-2 border-t border-border/60 pt-3">
          <span className="w-20 shrink-0 pt-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Category
          </span>
          <div className="flex flex-1 flex-wrap gap-2">
            {catCounts.map(([c, n]) => (
              <button
                key={c}
                type="button"
                onClick={() => toggleCat(c)}
                className={chipClass(cats.includes(c))}
              >
                {c} <span className="text-xs opacity-60">{n}</span>
              </button>
            ))}
          </div>
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs text-muted-foreground underline hover:text-foreground"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search traits..."
          className="h-10 w-full max-w-md rounded-md border border-border bg-card/60 px-3 text-sm outline-none focus:border-primary/60"
        />
        <span className="text-sm text-muted-foreground">
          {shown.length} of {traits.length}
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((t) => (
          <TraitCard key={t.id} t={t} />
        ))}
      </div>

      {shown.length > limit && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setLimit((n) => n + PAGE_SIZE)}
            className="rounded-full border border-border bg-secondary px-6 py-2 text-sm hover:bg-accent"
          >
            Show more ({shown.length - limit} left)
          </button>
        </div>
      )}

      {shown.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          No traits found.
        </p>
      )}
    </div>
  );
}
