"use client";

import { useState, type ReactNode } from "react";
import {
  BatteryCharging,
  Brain,
  ChevronDown,
  ChevronsLeft,
  Crosshair,
  Dumbbell,
  Flame,
  Gauge,
  Hand,
  Heart,
  Percent,
  Shield,
  Sparkles,
  Sword,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { GRADES, type CharacterDetails, type Grade } from "@/data/types";
import { calcStats, listStackControls } from "@/lib/calc-stats";
import { useCustomBuild } from "@/components/custom-build";
import { asset } from "@/lib/asset";

// ===== ICONS =====
// false = use the built-in icons below.
// When you add the game's icons to public/icons/stats/, set this to true.
// File names must match the stat keys, for example str.webp, meleeAtk.webp
const USE_GAME_ICONS = true;

// Built-in icon for each stat (used until you add the game's icons)
const FALLBACK_ICON: Record<string, LucideIcon> = {
  str: Dumbbell,
  tec: Hand,
  int: Brain,
  vit: Heart,
  agi: ChevronsLeft,
  meleeAtk: Sword,
  rangedAtk: Target,
  magicAtk: Sparkles,
  maxHp: Heart,
  spd: Gauge,
  startAp: Zap,
  apRecovery: BatteryCharging,
  accuracy: Crosshair,
  evade: Shield,
  critRate: Percent,
  critDmg: Flame,
};

function StatIcon({ k }: { k: string }) {
  const Fallback = FALLBACK_ICON[k] ?? Sparkles;
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
      {USE_GAME_ICONS ? (
        <img
          src={asset(`/icons/stats/${k}.webp`)}
          alt=""
          className="h-5 w-5 object-contain"
        />
      ) : (
        <Fallback className="h-4 w-4 text-foreground/80" />
      )}
    </span>
  );
}

// ===== LABELS =====
// The five basic stats. "boosts" says what each one increases.
const BASIC = [
  { key: "str", label: "Strength", short: "STR", boosts: "Melee ATK" },
  { key: "tec", label: "Technic", short: "TEC", boosts: "Ranged ATK" },
  { key: "int", label: "Intelligence", short: "INT", boosts: "Magic ATK" },
  { key: "vit", label: "Vitality", short: "VIT", boosts: "Max HP" },
  {
    key: "agi",
    label: "Agility",
    short: "AGI",
    boosts: "Evade, Starting AP, AP Recovery",
  },
] as const;

// Which basic stat feeds each boosted stat (shown as a small tag)
const FROM: Record<string, string> = {
  meleeAtk: "STR",
  rangedAtk: "TEC",
  magicAtk: "INT",
  maxHp: "VIT",
  evade: "AGI",
  totalAp: "AGI",
  apRecovery: "AGI",
};

// Order of the 5 corners on the radar chart, clockwise from the top
const RADAR_ORDER = ["str", "int", "agi", "vit", "tec"] as const;

// The other stats shown in the Combat card
const KEY_STATS: { key: string; label: string; pct?: boolean }[] = [
  { key: "maxHp", label: "Max HP" },
  { key: "spd", label: "SPD" },
  { key: "startAp", label: "Starting AP" },
  { key: "apRecovery", label: "AP Recovery" },
  { key: "totalAp", label: "Total AP" },
  { key: "accuracy", label: "Accuracy" },
  { key: "evade", label: "Evade" },
  { key: "critRate", label: "Crit Rate", pct: true },
  { key: "critDmg", label: "Crit DMG", pct: true },
];

// Attribute Stats, first group
const PHYSICAL_STATS: { key: string; label: string; pct?: boolean }[] = [
  { key: "slashBoost", label: "Slash Boost", pct: true },
  { key: "slashDef", label: "Slash DEF" },
  { key: "pierceBoost", label: "Pierce Boost", pct: true },
  { key: "pierceDef", label: "Pierce DEF" },
  { key: "crushBoost", label: "Crush Boost", pct: true },
  { key: "crushDef", label: "Crush DEF" },
];

// Attribute Stats, second group (Heat and below)
const ELEMENTAL_STATS: { key: string; label: string; pct?: boolean }[] = [
  { key: "heatBoost", label: "Heat Boost", pct: true },
  { key: "heatDef", label: "Heat DEF" },
  { key: "coldBoost", label: "Cold Boost", pct: true },
  { key: "coldDef", label: "Cold DEF" },
  { key: "electricBoost", label: "Electric Boost", pct: true },
  { key: "electricDef", label: "Electric DEF" },
  { key: "poisonBoost", label: "Poison Boost", pct: true },
  { key: "poisonDef", label: "Poison DEF" },
  { key: "immaterialBoost", label: "Immaterial Boost", pct: true },
  { key: "immaterialDef", label: "Immaterial DEF" },
  { key: "elementalBoost", label: "Elemental Boost", pct: true },
  { key: "blockChance", label: "Block Chance", pct: true },
];

// Boosts show a % sign, DEF shows a + sign (like "+10"), as in the game
const fmtAttr = (n: number, pct?: boolean) =>
  pct ? `${fmt(n)}%` : n > 0 ? `+${fmt(n)}` : fmt(n);

// The radar treats this number as "full". Raise it if a stat passes the edge.
const RADAR_MAX = 30;

// ===== HELPERS =====

// Whole numbers without decimals, others with one decimal
const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

// ===== RADAR CHART =====
function Radar({ values }: { values: Record<string, number> }) {
  const C = 120; // center of the drawing
  const R = 74; // radius of the outer pentagon

  // Position of a point: which corner (0 to 4) and how far out (0 to 1)
  const point = (i: number, ratio: number) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    return [C + Math.cos(angle) * R * ratio, C + Math.sin(angle) * R * ratio];
  };
  const toPath = (ratios: number[]) =>
    ratios.map((r, i) => point(i, r).join(",")).join(" ");

  // Square root stretches small values outward, like the game's chart
  const ratios = RADAR_ORDER.map((k) =>
    Math.min(1, Math.sqrt((values[k] ?? 0) / RADAR_MAX)),
  );

  return (
    <svg viewBox="0 0 240 240" className="mx-auto w-full max-w-[300px]">
      <defs>
        <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(52,211,153)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(52,211,153)" stopOpacity="0.55" />
        </radialGradient>
      </defs>

      {/* Background rings */}
      {[0.25, 0.5, 0.75, 1].map((r) => (
        <polygon
          key={r}
          points={toPath(Array(5).fill(r))}
          fill="none"
          stroke="currentColor"
          className="text-border"
        />
      ))}
      {/* Lines from the center to each corner */}
      {RADAR_ORDER.map((_, i) => (
        <line
          key={i}
          x1={C}
          y1={C}
          x2={point(i, 1)[0]}
          y2={point(i, 1)[1]}
          stroke="currentColor"
          className="text-border"
        />
      ))}
      {/* The filled shape */}
      <polygon
        points={toPath(ratios)}
        fill="url(#radarFill)"
        stroke="rgb(52,211,153)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Dots on each corner of the shape */}
      {ratios.map((r, i) => (
        <circle
          key={i}
          cx={point(i, r)[0]}
          cy={point(i, r)[1]}
          r="3"
          fill="rgb(52,211,153)"
        />
      ))}
      {/* Short name and number around the edge */}
      {RADAR_ORDER.map((k, i) => {
        const [x, y] = point(i, 1.3);
        const short = BASIC.find((b) => b.key === k)!.short;
        return (
          <g key={k}>
            <text
              x={x}
              y={y - 6}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground text-[9px] font-semibold tracking-wider"
            >
              {short}
            </text>
            <text
              x={x}
              y={y + 7}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-[13px] font-semibold"
            >
              {fmt(values[k] ?? 0)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ===== ATK RING =====
// Each colored part shows how big that ATK is compared with the other two
const ATK_PARTS = [
  { key: "meleeAtk", label: "Melee ATK", color: "#f87171" },
  { key: "rangedAtk", label: "Ranged ATK", color: "#fb923c" },
  { key: "magicAtk", label: "Magic ATK", color: "#60a5fa" },
] as const;

function AtkRing({ values }: { values: Record<string, number> }) {
  const R = 46;
  const CIRC = 2 * Math.PI * R;
  const GAP = 3; // small space between the colored parts
  const total = ATK_PARTS.reduce((sum, p) => sum + (values[p.key] ?? 0), 0);

  let used = 0; // how much of the ring is already drawn
  const arcs = ATK_PARTS.map((p) => {
    const len = total ? ((values[p.key] ?? 0) / total) * CIRC : 0;
    const arc = (
      <circle
        key={p.key}
        cx="60"
        cy="60"
        r={R}
        fill="none"
        stroke={p.color}
        strokeWidth="10"
        strokeDasharray={`${Math.max(0, len - GAP)} ${CIRC}`}
        strokeDashoffset={-used}
      />
    );
    used += len;
    return arc;
  });

  return (
    <div className="relative mx-auto h-40 w-40">
      {/* Rotated so the ring starts at the top */}
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          className="text-border"
        />
        {arcs}
      </svg>
      {/* Text in the middle (not rotated) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-tight">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          ATK
        </span>
        <span className="text-xs text-muted-foreground">Multiplier</span>
      </div>
    </div>
  );
}

// ===== SMALL PIECES =====

// A small title for each card
const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
    {children}
  </p>
);

// One row: icon, name, optional small text under the name, optional tag, and the value
function StatRow({
  k,
  label,
  value,
  sub,
  tag,
  dot,
}: {
  k: string;
  label: string;
  value: string;
  sub?: string; // small text under the name
  tag?: string; // small tag showing which basic stat feeds this one
  dot?: string; // colored dot that matches the ring
}) {
  return (
    <li className="flex items-center gap-3 rounded-lg bg-secondary/40 px-3 py-2">
      <StatIcon k={k} />
      {dot && (
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: dot }}
        />
      )}
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-sm text-muted-foreground">{label}</p>
        {sub && (
          <p className="truncate text-[11px] text-muted-foreground/60">{sub}</p>
        )}
      </div>
      {tag && (
        <span className="rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
          {tag}
        </span>
      )}
      <span className="text-lg font-semibold tabular-nums">{value}</span>
    </li>
  );
}

// ===== GRADE ICON =====
// File names match the grade: b.webp, a.webp, …, ex.webp, ex1.webp … ex6.webp
const gradeIconSrc = (g: Grade) => `/icons/rarity/${g.toLowerCase()}.webp`;

function GradeIcon({
  grade,
  className = "h-9 w-9",
}: {
  grade: Grade;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span
        className={`flex items-center justify-center text-sm font-bold ${className}`}
      >
        {grade}
      </span>
    );
  }
  return (
    <img
      src={asset(gradeIconSrc(grade))}
      alt={grade}
      onError={() => setFailed(true)}
      className={`${className} object-contain`}
    />
  );
}

// ===== THE TAB =====
export function StatsTab({
  details,
  startGrade,
  basicAtk,
  characterId,
}: {
  details: CharacterDetails;
  startGrade: Grade; // the character's own rarity, e.g. "EX"
  basicAtk?: "meleeAtk" | "rangedAtk" | "magicAtk"; // the stat the basic weapon boosts
  /** Character id — used so weapon signature (exclusive) effects apply only to the right unit. */
  characterId?: string;
}) {
  // Full list: B → A → S → SS → EX → EX1…EX6
  const grades = GRADES as readonly Grade[];
  // "pure" or the id of one of the character's builds
  const [mode, setMode] = useState<string>("pure");
  const [affection, setAffection] = useState(true);
  const [combat, setCombat] = useState(true);
  /** Chosen stack counts for stackable weapon/trait effects. */
  const [stacks, setStacks] = useState<Record<string, number>>({});
  /** Which control sections are open. */
  const [open, setOpen] = useState({
    build: true,
    power: true,
    combat: true,
    stacks: true,
  });
  const toggle = (key: keyof typeof open) =>
    setOpen((o) => ({ ...o, [key]: !o[key] }));

  const { custom } = useCustomBuild();
  const builds = [...(details.builds ?? []), ...(custom ? [custom] : [])];
  const build = builds.find((b) => b.id === mode);

  // Opens on their own grade, at level 60
  const [grade, setGrade] = useState<Grade>(startGrade);
  const [level, setLevel] = useState(60);

  const stackControls =
    mode === "pure" ? [] : listStackControls(details, build, characterId);
  const gradeIdx = grades.indexOf(grade);
  const modeLabel =
    mode === "pure"
      ? "Pure Stats"
      : `${builds.find((b) => b.id === mode)?.name ?? mode} Stats`;

  // Every stat, calculated from the basic stats and traits
  const now = calcStats(
    details,
    startGrade,
    grade,
    level,
    mode === "pure"
      ? { pure: true, affection, characterId, stacks }
      : { build, affection, combat, basicAtk, characterId, stacks },
  );

  if (!now) {
    return <p className="text-muted-foreground">No stats added yet.</p>;
  }

  const stepBtn =
    "h-8 w-8 shrink-0 rounded-full border border-border hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40";
  const numInput =
    "h-8 w-14 rounded-md border border-border bg-card/60 text-center text-sm tabular-nums outline-none focus:border-primary/60 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

  const Section = ({
    id,
    title,
    summary,
    children,
  }: {
    id: keyof typeof open;
    title: string;
    summary?: string;
    children: ReactNode;
  }) => {
    const isOpen = open[id];
    return (
      <div className="border-b border-border/60 last:border-b-0">
        <button
          type="button"
          onClick={() => toggle(id)}
          className="flex w-full items-center gap-2 py-3 text-left"
        >
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition ${
              isOpen ? "rotate-0" : "-rotate-90"
            }`}
          />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {title}
          </span>
          {!isOpen && summary && (
            <span className="ml-auto truncate text-xs text-muted-foreground/80">
              {summary}
            </span>
          )}
        </button>
        {isOpen && <div className="pb-4">{children}</div>}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* ===== CONTROLS (collapsible) =====
          1 Build → 2 Grade/Level → 3 Combat → 4 Stacks */}
      <div className="rounded-2xl border border-border bg-card/60 px-4">
        {/* 1. Build */}
        <Section id="build" title="1 · Build" summary={modeLabel}>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "pure", name: "Pure Stats" },
              ...builds.map((b) => ({ id: b.id, name: `${b.name} Stats` })),
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  m.id === mode
                    ? "border-primary/70 bg-primary/15 text-primary"
                    : "border-border bg-secondary hover:bg-accent"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </Section>

        {/* 2. Grade + Level — two equal columns, aligned */}
        <Section
          id="power"
          title="2 · Grade & Level"
          summary={`${grade} · Lv ${level}`}
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
            {/* Grade */}
            <div className="flex items-center gap-2">
              <span className="w-12 shrink-0 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Grade
              </span>
              <button
                type="button"
                onClick={() => {
                  if (gradeIdx > 0) setGrade(grades[gradeIdx - 1]);
                }}
                disabled={gradeIdx <= 0}
                className={stepBtn}
                aria-label="Previous grade"
              >
                −
              </button>
              <div
                className="flex h-12 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/50 bg-primary/10 shadow-md shadow-primary/10"
                title={grade}
              >
                <GradeIcon grade={grade} />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (gradeIdx >= 0 && gradeIdx < grades.length - 1)
                    setGrade(grades[gradeIdx + 1]);
                }}
                disabled={gradeIdx >= grades.length - 1}
                className={stepBtn}
                aria-label="Next grade"
              >
                +
              </button>
            </div>

            {/* Level */}
            <div className="flex items-center gap-2">
              <span className="w-12 shrink-0 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Level
              </span>
              <button
                type="button"
                onClick={() => setLevel(Math.max(1, level - 1))}
                className={stepBtn}
                aria-label="Level down"
              >
                −
              </button>
              <input
                type="range"
                min={1}
                max={60}
                value={level}
                onChange={(e) => setLevel(Number(e.target.value))}
                className="h-1.5 min-w-0 flex-1 cursor-pointer accent-purple-400"
                aria-label="Level"
              />
              <button
                type="button"
                onClick={() => setLevel(Math.min(60, level + 1))}
                className={stepBtn}
                aria-label="Level up"
              >
                +
              </button>
              <input
                type="number"
                min={1}
                max={60}
                value={level}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v === "") return;
                  setLevel(Math.min(60, Math.max(1, Math.round(Number(v)))));
                }}
                onBlur={(e) => {
                  if (e.target.value === "") setLevel(1);
                }}
                className={numInput}
                aria-label="Level value"
              />
            </div>
          </div>
        </Section>

        {/* 3. Combat (build only) */}
        {mode !== "pure" && (
          <Section
            id="combat"
            title="3 · Combat"
            summary={`Combat ${combat ? "ON" : "OFF"} · Aff ${affection ? "ON" : "OFF"}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setCombat(!combat)}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  combat
                    ? "border-sky-400/60 bg-sky-500/15 text-sky-300"
                    : "border-border bg-secondary hover:bg-accent"
                }`}
              >
                Combat mode: {combat ? "ON" : "OFF"}
              </button>
              <button
                type="button"
                onClick={() => setAffection(!affection)}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  affection
                    ? "border-pink-400/60 bg-pink-500/15 text-pink-300"
                    : "border-border bg-secondary hover:bg-accent"
                }`}
              >
                Max affection: {affection ? "ON" : "OFF"}
              </button>
            </div>
          </Section>
        )}

        {/* 4. Stacks / conditions */}
        {mode !== "pure" && combat && stackControls.length > 0 && (
          <Section
            id="stacks"
            title="4 · Stacks & conditions"
            summary={stackControls
              .map((c) => {
                const n =
                  stacks[c.key] === undefined ? c.maxStacks : stacks[c.key];
                if (c.maxStacks === 1) {
                  return `${c.label} ${n ? "ON" : "OFF"}`;
                }
                return `${c.label} ${n}/${c.maxStacks}`;
              })
              .join(" · ")}
          >
            <div className="space-y-3">
              {stackControls.map((c) => {
                const current =
                  stacks[c.key] === undefined ? c.maxStacks : stacks[c.key];
                const setN = (raw: number) =>
                  setStacks((prev) => ({
                    ...prev,
                    [c.key]: Math.min(
                      c.maxStacks,
                      Math.max(0, Math.round(raw)),
                    ),
                  }));

                // Conditional (non-stacking) effects: simple ON / OFF toggle
                if (c.maxStacks === 1) {
                  const on = current >= 1;
                  return (
                    <div
                      key={c.key}
                      className="flex flex-wrap items-center gap-3"
                    >
                      <span className="min-w-40 text-xs text-muted-foreground">
                        {c.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setN(1)}
                          className={`rounded-full border px-3 py-1.5 text-xs transition ${
                            on
                              ? "border-sky-400/60 bg-sky-500/15 text-sky-300"
                              : "border-border bg-secondary hover:bg-accent"
                          }`}
                          aria-label={`${c.label} on`}
                        >
                          ON
                        </button>
                        <button
                          type="button"
                          onClick={() => setN(0)}
                          className={`rounded-full border px-3 py-1.5 text-xs transition ${
                            !on
                              ? "border-rose-400/60 bg-rose-500/15 text-rose-300"
                              : "border-border bg-secondary hover:bg-accent"
                          }`}
                          aria-label={`${c.label} off`}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                  );
                }

                // Real stacks: numeric stepper
                return (
                  <div
                    key={c.key}
                    className="flex flex-wrap items-center gap-3"
                  >
                    <span className="min-w-40 text-xs text-muted-foreground">
                      {c.label}
                      <span className="ml-1 text-muted-foreground/70">
                        / {c.maxStacks}
                      </span>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setN(current - 1)}
                        disabled={current <= 0}
                        className={stepBtn}
                        aria-label={`${c.label} down`}
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={0}
                        max={c.maxStacks}
                        value={current}
                        onChange={(e) => {
                          const v = e.target.value;
                          if (v === "") return;
                          setN(Number(v));
                        }}
                        onBlur={(e) => {
                          if (e.target.value === "") setN(0);
                        }}
                        className={numInput}
                        aria-label={c.label}
                      />
                      <button
                        type="button"
                        onClick={() => setN(current + 1)}
                        disabled={current >= c.maxStacks}
                        className={stepBtn}
                        aria-label={`${c.label} up`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        )}
      </div>

      {/* ===== TWO COLUMNS: Basic Stats (left), Combat (right) ===== */}
      <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* LEFT: radar chart and the five basic stats */}
        <div className="rounded-2xl border border-border bg-card/60 p-4">
          <CardTitle>Basic Stats</CardTitle>
          <Radar values={now} />
          <ul className="mt-4 space-y-2">
            {BASIC.map((s) => (
              <StatRow
                key={s.key}
                k={s.key}
                label={s.label}
                sub={`Boosts ${s.boosts}`}
                value={fmt(now[s.key] ?? 0)}
              />
            ))}
          </ul>
        </div>

        {/* RIGHT: ATK ring, the three ATK values, then the other stats */}
        <div className="rounded-2xl border border-border bg-card/60 p-4">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card/60 p-4">
              <CardTitle>Combat</CardTitle>
              <AtkRing values={now} />

              {/* Three ATK tiles under the ring */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {ATK_PARTS.map((p) => (
                  <div
                    key={p.key}
                    className="rounded-lg bg-secondary/40 px-3 py-2 text-center"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {p.label.replace(" ATK", "")}
                      </span>
                    </div>
                    <p className="text-lg font-semibold tabular-nums">
                      {fmt(now[p.key] ?? 0)}
                    </p>
                    <span className="rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                      {FROM[p.key]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Other stats in two columns */}
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {KEY_STATS.filter((s) => now[s.key] !== undefined).map((s) => (
                  <StatRow
                    key={s.key}
                    k={s.key}
                    label={s.label}
                    tag={FROM[s.key]}
                    value={`${fmt(now[s.key])}${s.pct ? "%" : ""}`}
                  />
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card/60 p-4">
              <CardTitle>Attribute Stats</CardTitle>
              {/* ===== ATTRIBUTE STATS ===== */}

              {[PHYSICAL_STATS, ELEMENTAL_STATS].map((group, i) => (
                <ul
                  key={i}
                  className={`grid gap-2 sm:grid-cols-2 ${
                    i > 0 ? "mt-4 border-t border-border/60 pt-4" : ""
                  }`}
                >
                  {group.map((s) => (
                    <StatRow
                      key={s.key}
                      k={s.key}
                      label={s.label}
                      value={fmtAttr(now[s.key] ?? 0, s.pct)}
                    />
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}