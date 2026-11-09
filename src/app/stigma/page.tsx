"use client";

import { useState } from "react";
import { Gem, Search } from "lucide-react";
import { stigmaSets } from "@/data/stigmas";
import {
  STIGMA_MAX_LEVEL,
  type StigmaGrade,
  type StigmaSlot,
} from "@/data/types";
import { asset } from "@/lib/asset";
import { STAT_LABEL, label } from "@/lib/stat-labels";

const SLOTS: StigmaSlot[] = ["top", "left", "bottom", "right"];

const num = (n: number) => String(Number(n.toFixed(1)));

// Colors for each grade
const BADGE: Record<StigmaGrade, string> = {
  SS: "border-purple-500/50 bg-purple-500/15 text-purple-300",
  EX: "border-amber-500/50 bg-amber-500/15 text-amber-300",
};
const CARD: Record<StigmaGrade, string> = {
  SS: "border-purple-500/30 from-purple-500/10",
  EX: "border-amber-500/30 from-amber-500/10",
};
const GLOW: Record<StigmaGrade, string> = {
  SS: "from-purple-500/25",
  EX: "from-amber-500/25",
};

// Image that shows the first letter of the slot if the file is missing
function PieceImg({
  src,
  alt,
  slot,
}: {
  src?: string;
  alt: string;
  slot: string;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <span className="text-3xl font-bold uppercase text-muted-foreground/30">
        {slot.charAt(0)}
      </span>
    );
  }
  return (
    <img 
      src={asset(src)}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-20 w-20 object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)] transition group-hover:scale-110"
    />
  );
}

export default function StigmaPage() {
  const [search, setSearch] = useState("");
  const [grade, setGrade] = useState<StigmaGrade | "all">("all");

  const q = search.toLowerCase();

  // EX first, then SS, then by name
  const shown = stigmaSets
    .filter(
      (s) =>
        (grade === "all" || s.grade === grade) &&
        `${s.name} ${s.twoSet.description} ${s.fourSet.description}`
          .toLowerCase()
          .includes(q),
    )
    .sort((a, b) =>
      a.grade === b.grade
        ? a.name.localeCompare(b.name)
        : a.grade === "EX"
          ? -1
          : 1,
    );

  const count = (g: StigmaGrade) =>
    stigmaSets.filter((s) => s.grade === g).length;

  return (
    <div className="space-y-6">
      {/* ===== HEADER ===== */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-card/60 to-card/30 p-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Stigma</h1>
          <p className="text-sm text-muted-foreground">
            Sets, main stats and set bonuses.
          </p>
        </div>
        <span className="rounded-full border border-border bg-black/30 px-3 py-1.5 text-xs">
          <b className="text-sm">{stigmaSets.length}</b> sets
        </span>
      </div>

      {/* ===== SEARCH AND GRADE FILTER ===== */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search a set or a bonus..."
            className="h-10 w-full rounded-xl border border-border bg-card/60 pl-9 pr-3 text-sm outline-none focus:border-primary/60"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setGrade("all")}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              grade === "all"
                ? "border-primary/70 bg-primary/15 text-primary"
                : "border-border bg-secondary hover:bg-accent"
            }`}
          >
            All{" "}
            <span className="text-xs text-muted-foreground">
              {stigmaSets.length}
            </span>
          </button>
          {(["EX", "SS"] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGrade(grade === g ? "all" : g)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                grade === g
                  ? BADGE[g]
                  : "border-border bg-secondary hover:bg-accent"
              }`}
            >
              {g} <span className="text-xs opacity-70">{count(g)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== SETS ===== */}
      <div className="grid gap-4 lg:grid-cols-2">
        {shown.map((set) => (
          <div
            key={set.id}
            className={`space-y-4 rounded-3xl border bg-gradient-to-b to-card/40 p-4 ${CARD[set.grade]}`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-bold leading-tight">{set.name}</p>
              <span
                className={`shrink-0 rounded-md border px-2 py-0.5 text-xs font-bold ${BADGE[set.grade]}`}
              >
                {set.grade}
              </span>
            </div>

            {/* The four pieces */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SLOTS.map((slot) => {
                const main = set.pieces[slot].mainStat;
                const v = main.value[set.grade];
                const stats = Array.isArray(main.stat)
                  ? main.stat
                  : [main.stat];
                return (
                  <div
                    key={slot}
                    className="group flex flex-col items-center overflow-hidden rounded-2xl border border-border/60 bg-black/30 text-center"
                  >
                    <div
                      className={`flex h-24 w-full items-center justify-center bg-gradient-to-b to-transparent ${GLOW[set.grade]}`}
                    >
                      <PieceImg
                        src={asset(
                          set.pieces[slot].icon ??
                          `/stigmas/${set.id}-${slot}.webp`
                        )}
                        alt={`${set.name} ${slot}`}
                        slot={slot}
                      />
                    </div>
                    <div className="w-full space-y-0.5 px-2 pb-2.5 pt-1.5">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {slot}
                      </p>
                      <p className="text-xs font-semibold leading-tight text-primary">
                        {stats.map(label).join(" & ")}
                      </p>
                      <p className="text-[11px] font-medium tabular-nums text-amber-300">
                        {v
                          ? `${num(v.lv1)} → ${num(v.lv25)}${main.type === "percent" ? "%" : ""}`
                          : "No data"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="-mt-2 text-[11px] text-muted-foreground">
              Main stat from Lv 1 to Lv {STIGMA_MAX_LEVEL}
            </p>

            {/* Set bonuses */}
            <div className="space-y-2">
              {[
                { need: 2, text: set.twoSet.description },
                { need: 4, text: set.fourSet.description },
              ].map((r) => (
                <div
                  key={r.need}
                  className="flex gap-3 rounded-xl bg-black/25 p-3"
                >
                  <span className="flex h-fit shrink-0 items-center rounded-md bg-emerald-500/20 px-2 py-1 text-[10px] font-bold text-emerald-300">
                    {r.need} SET
                  </span>
                  <span className="text-xs whitespace-pre-line leading-relaxed text-foreground/85">
                    {r.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          No sets found.
        </p>
      )}
    </div>
  );
}
