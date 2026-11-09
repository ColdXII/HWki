"use client";

import { useState } from "react";
import { Crown, Gift, Search, Star } from "lucide-react";
import { characters } from "@/data/characters";
import { getDetails } from "@/data/details";
import { gifts, getGift } from "@/data/gifts";
import { GIFT_GRADES, GIFT_RANGE, type GiftGrade } from "@/data/types";

// Tile colors for each gift grade
const TILE: Record<GiftGrade, string> = {
  gray: "border-zinc-500/40 from-zinc-500/25 shadow-zinc-500/10",
  green: "border-emerald-500/50 from-emerald-500/25 shadow-emerald-500/20",
  blue: "border-blue-500/50 from-blue-500/25 shadow-blue-500/20",
  purple: "border-purple-500/50 from-purple-500/25 shadow-purple-500/20",
  yellow: "border-amber-400/60 from-amber-400/25 shadow-amber-400/25",
};
const DOT: Record<GiftGrade, string> = {
  gray: "bg-zinc-400",
  green: "bg-emerald-400",
  blue: "bg-blue-400",
  purple: "bg-purple-400",
  yellow: "bg-amber-300",
};

// The three tips at the top
const TIPS = [
  {
    icon: Gift,
    title: "Gift boxes",
    text: "Normal gifts come from boxes. The top box gives purple to yellow gifts, so picking a purple one is never worth it.",
  },
  {
    icon: Crown,
    title: "Always grab the Tiara",
    text: "Pick it whenever it shows up.",
  },
  {
    icon: Star,
    title: "Best value",
    text: "The star marks the top value of the gift: high value for lower quantity.",
  },
];

// Bold on your sheet = the top of the grade's range for a cheap gift.
// Only gray and green are confirmed, so only those two count.
const isBest = (grade: GiftGrade, value: number) =>
  grade !== "purple" && value === GIFT_RANGE[grade].max;

// Gift icon: shows the first letter if the file is missing
function GiftImg({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <span className="text-3xl font-bold text-muted-foreground/40">
        {name.charAt(0)}
      </span>
    );
  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-full w-full object-contain p-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
    />
  );
}

export default function GiftsPage() {
  const [search, setSearch] = useState("");
  const q = search.toLowerCase();

  // Characters that have gifts, filtered by the search (character or gift name)
  const rows = characters
    .map((c) => ({ c, liked: getDetails(c.id).gifts ?? [] }))
    .filter(({ liked }) => liked.length > 0)
    .filter(
      ({ c, liked }) =>
        c.name.toLowerCase().includes(q) ||
        liked.some((l) => getGift(l.gift)?.name.toLowerCase().includes(q)),
    );

  const withGifts = characters.filter(
    (c) => (getDetails(c.id).gifts ?? []).length > 0,
  ).length;

  return (
    <div className="space-y-6">
      {/* ===== HEADER ===== */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-card/60 to-card/30 p-6">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
            <Gift className="h-7 w-7" />
          </span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Gifts</h1>
            <p className="text-sm text-muted-foreground">
              Which gifts each character likes, and what they are worth.
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="rounded-full border border-border bg-black/30 px-3 py-1.5">
            <b className="text-sm">{withGifts}</b> characters
          </span>
          <span className="rounded-full border border-border bg-black/30 px-3 py-1.5">
            <b className="text-sm">{gifts.length}</b> gifts
          </span>
        </div>
      </div>

      {/* ===== TIPS ===== */}
      <div className="grid gap-3 md:grid-cols-3">
        {TIPS.map((t) => (
          <div
            key={t.title}
            className="flex gap-3 rounded-2xl border border-border bg-card/60 p-4"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <t.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">{t.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {t.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== GRADE LEGEND ===== */}
      <div className="flex flex-wrap gap-2">
        {GIFT_GRADES.map((g) => (
          <span
            key={g}
            className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full shadow-[0_0_8px] shadow-current ${DOT[g]}`}
            />
            <span className="font-semibold capitalize">{g}</span>
            <span className="tabular-nums text-muted-foreground">
              {GIFT_RANGE[g].min} to {GIFT_RANGE[g].max}
            </span>
          </span>
        ))}
      </div>

      {/* ===== SEARCH ===== */}
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a character or a gift..."
          className="h-10 w-full rounded-xl border border-border bg-card/60 pl-9 pr-3 text-sm outline-none focus:border-primary/60"
        />
      </div>

      {/* ===== ONE CARD FOR EACH CHARACTER ===== */}
      <div className="space-y-4">
        {rows.map(({ c, liked }) => (
          <div
            key={c.id}
            className="overflow-hidden rounded-3xl border border-border bg-card/60"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Character */}
              <div className="flex shrink-0 items-center gap-4 bg-gradient-to-br from-primary/20 to-transparent p-4 sm:w-56 sm:flex-col sm:items-start">
                {c.portrait ? (
                  <img
                    src={c.portrait}
                    alt={c.name}
                    className="h-35 w-35 rounded-2xl object-cover object-top ring-2 ring-white/10"
                  />
                ) : (
                  <div className="flex h-28 w-24 items-center justify-center rounded-2xl bg-black/30 text-3xl font-bold text-muted-foreground/40">
                    {c.name.charAt(0)}
                  </div>
                )}
                <div className="leading-tight">
                  <p className="text-lg font-bold">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.title}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground"></p>
                </div>
              </div>

              {/* Gifts */}
              <div className="flex flex-1 flex-wrap content-start gap-4 p-5">
                {liked.map((l) => {
                  const gift = getGift(l.gift);
                  if (!gift)
                    return (
                      <span key={l.gift} className="text-xs text-rose-300">
                        Missing: {l.gift}
                      </span>
                    );
                  const range = GIFT_RANGE[gift.grade];
                  const outOfRange = l.value < range.min || l.value > range.max;
                  const best = isBest(gift.grade, l.value);
                  return (
                    <div
                      key={l.gift}
                      className="w-30 text-center transition hover:-translate-y-1"
                    >
                      <div
                        className={`relative flex h-30 items-center justify-center rounded-2xl border bg-gradient-to-b to-black/40 shadow-lg ${TILE[gift.grade]}`}
                      >
                        <GiftImg
                          src={gift.icon ?? `/gifts/${gift.id}.webp`}
                          name={gift.name}
                        />
                        {/* Value */}
                        <span
                          className={`absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full border px-1.5 text-xs font-bold tabular-nums ${
                            outOfRange
                              ? "border-rose-400 bg-rose-950 text-rose-300"
                              : "border-white/20 bg-black/85 text-white"
                          }`}
                        >
                          {l.value}
                        </span>
                        {best && (
                          <Star className="absolute left-1.5 top-1.5 h-4 w-4 fill-amber-300 text-amber-300 drop-shadow" />
                        )}
                      </div>
                      <p
                        className={`mt-2 text-[11px] leading-tight ${best ? "font-bold text-foreground" : "text-foreground/80"}`}
                      >
                        {gift.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {rows.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          Nothing found.
        </p>
      )}
    </div>
  );
}
