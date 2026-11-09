"use client";

import { useState } from "react";
import { weapons, uniqueLines, mainStats } from "@/data/weapons";
import { WEAPON_TYPES } from "@/data/types";
import { STAT_LABEL, label } from "@/lib/stat-labels";

const GRADES = ["EX", "SS", "S", "A"];

const GRADE_BADGE: Record<string, string> = {
  A: "border-lime-500/50 bg-lime-500/10 text-lime-300",
  S: "border-blue-500/50 bg-blue-500/10 text-blue-300",
  SS: "border-purple-500/50 bg-purple-500/10 text-purple-300",
  EX: "border-amber-500/50 bg-amber-500/10 text-amber-300",
};

const num = (n: number) => String(Number(n.toFixed(1)));

export default function WeaponsPage() {
  const [search, setSearch] = useState("");
  const [grades, setGrades] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);

  // Adds the value to a list, or removes it if it's already there
  const toggle = (list: string[], set: (v: string[]) => void, v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  // Only offer weapon types that you have added at least one weapon for
  const usedTypes = WEAPON_TYPES.filter((t) =>
    weapons.some((w) => w.type === t),
  );

  const shown = weapons
    .filter(
      (w) =>
        w.name.toLowerCase().includes(search.toLowerCase()) &&
        (grades.length === 0 || grades.includes(w.grade)) &&
        (types.length === 0 || types.includes(w.type)),
    )
    .sort(
      (a, b) =>
        GRADES.indexOf(a.grade) - GRADES.indexOf(b.grade) ||
        a.name.localeCompare(b.name),
    );

  const chip = (on: boolean) =>
    `rounded-full border px-3 py-1 text-sm transition ${
      on
        ? "border-primary/70 bg-primary/15 text-primary"
        : "border-border bg-secondary hover:bg-accent"
    }`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search weapons..."
          className="h-10 w-full max-w-md rounded-md border border-border bg-card/60 px-3 text-sm outline-none focus:border-primary/60"
        />
        <span className="text-sm text-muted-foreground">
          {shown.length} of {weapons.length}
        </span>
      </div>

      {/* Filters */}
      <div className="space-y-3 rounded-2xl border border-border bg-card/60 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Grade
          </span>
          {GRADES.map((g) => (
            <button
              key={g}
              onClick={() => toggle(grades, setGrades, g)}
              className={chip(grades.includes(g))}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 border-t border-border/60 pt-3">
          <span className="w-16 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Type
          </span>
          {usedTypes.map((t) => (
            <button
              key={t}
              onClick={() => toggle(types, setTypes, t)}
              className={chip(types.includes(t))}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Weapons */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((w) => (
          <div
            key={w.id}
            className="space-y-3 rounded-2xl border border-border bg-card/60 p-4"
          >
            {/* Image */}
            <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-b from-white/5 to-black/40">
              {w.icon ? (
                <img
                  src={w.icon}
                  alt={w.name}
                  className="h-full w-full object-contain p-3 drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
                />
              ) : (
                <span className="text-5xl font-bold text-muted-foreground/30">
                  {w.name.charAt(0)}
                </span>
              )}
              <span
                className={`absolute left-3 top-3 rounded border px-2 py-0.5 text-xs font-bold ${GRADE_BADGE[w.grade]}`}
              >
                {w.grade}
              </span>
            </div>

            <div>
              <p className="text-base font-semibold leading-tight">{w.name}</p>
              <p className="text-xs text-muted-foreground">{w.type}</p>
            </div>

            {/* Stats at Lv 60 */}
            <div className="flex flex-wrap gap-2 text-xs">
              {mainStats(w).map((m, i) => (
                <span
                  key={i}
                  className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary"
                >
                  {label(m.stat)} +{num(m.value.lv60)}
                  {m.type === "percent" ? "%" : ""}
                </span>
              ))}
              {w.subStats?.map((s, i) => (
                <span key={i} className="rounded-full bg-secondary px-2.5 py-1">
                  {label(s.stat)} +{num(s.value.lv60)}
                  {s.type === "percent" ? "%" : ""}
                </span>
              ))}
            </div>

            {/* Unique effect, with ranges like "10 → 30" across dupes */}
            {w.unique && (
              <div className="rounded-xl bg-secondary/40 p-3 text-xs">
                <p className="text-sm font-semibold">{w.unique.name}</p>
                <ul className="mt-1.5 space-y-1 leading-relaxed text-muted-foreground">
                  {uniqueLines(w, "all").map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            )}

            {w.exclusive && (
              <div className="rounded-xl border border-primary/40 bg-primary/5 p-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold uppercase text-primary">
                    Exclusive
                  </span>
                  <p className="text-sm font-semibold">{w.exclusive.name}</p>
                </div>
                <p className="mt-1.5 whitespace-pre-line leading-relaxed text-muted-foreground">
                  {w.exclusive.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          No weapons found.
        </p>
      )}
    </div>
  );
}
