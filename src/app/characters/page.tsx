"use client";

// ===== IMPORTS =====
// Tools and files this page needs
import { useState } from "react";
import Link from "next/link";
import { characters } from "@/data/characters";
import { Input } from "@/components/ui/input";
import { FilterPanel, type FilterRow } from "@/components/filter-panel";

// ===== CARD STYLE PER RARITY =====
// Border and background color of each card, depending on rarity
const rarityBorder: Record<string, string> = {
  EX: "border-amber-500/40 bg-amber-500/5 hover:border-amber-400/70 hover:shadow-amber-500/10",
  SS: "border-purple-500/40 bg-purple-500/5 hover:border-purple-400/70 hover:shadow-purple-500/10",
  S: "border-blue-500/40 bg-blue-500/5 hover:border-blue-400/70 hover:shadow-blue-500/10",
  A: "border-lime-500/40 bg-lime-500/5 hover:border-lime-400/70 hover:shadow-lime-500/10",
  B: "border-zinc-500/40 bg-zinc-500/5 hover:border-zinc-400/70 hover:shadow-zinc-500/10",
};

// Image file for each rarity icon (in public/icons/rarity/)
const rarityIcons: Record<string, string> = {
  EX: "/icons/rarity/ex.webp",
  SS: "/icons/rarity/ss.webp",
  S: "/icons/rarity/s.webp",
  A: "/icons/rarity/a.webp",
  B: "/icons/rarity/b.webp",
};

// ===== FILTER OPTIONS =====
// The buttons that appear in each filter row
const rarities = ["EX", "SS", "S", "A", "B"];
const baseAttacks = ["Melee ATK", "Ranged ATK", "Magic ATK"];
const damageTypes = [
  "Slash",
  "Pierce",
  "Crush",
  "Heat",
  "Cold",
  "Electric",
  "Poison",
  "Immaterial",
];

// Text color for each damage type button
const damageTypesColor: Record<string, string> = {
  Slash: "text-zinc-300",
  Pierce: "text-zinc-300",
  Crush: "text-zinc-300",
  Heat: "text-red-400",
  Cold: "text-sky-400",
  Electric: "text-yellow-300",
  Immaterial: "text-purple-300",
  Poison: "text-lime-400",
};

// Builds the Cost buttons from your data automatically.
// It collects every cost once, then sorts them 2, 3, 4...
const costs = [...new Set(characters.map((c) => c.cost))].sort(
  (a, b) => Number(a) - Number(b),
);

// ===== HELPERS =====

// Some fields hold one value ("EX") and some hold a list (["Slash", "Heat"]).
// This turns both into a list so the code can treat them the same way.
const asArray = (v: unknown): string[] =>
  Array.isArray(v) ? v.map(String) : v == null ? [] : [String(v)];

// Shortcut for the type of one character
type Char = (typeof characters)[number];

// Rarity order for sorting: EX is the highest, B is the lowest
const rarityRank: Record<string, number> = { EX: 0, SS: 1, S: 2, A: 3, B: 4 };

// Reads a field from a character by its name, for example "rarity" or "damageTypes"
const getField = (char: Char, field: string) =>
  asArray((char as unknown as Record<string, unknown>)[field]);

// ===== THE PAGE =====
export default function CharactersPage() {
  // What the user typed in the search box
  const [search, setSearch] = useState("");

  // Whether B units are shown (off by default)
  const [showB, setShowB] = useState(false);

  // Which filter buttons are clicked, for example { rarity: ["EX"], cost: ["4"] }
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  // Which sort option is chosen, and whether the order is flipped
  const [sortBy, setSortBy] = useState("default");
  const [reversed, setReversed] = useState(false);

  // Runs when a filter button is clicked: adds it if not selected, removes it if selected
  const toggle = (rowKey: string, value: string) =>
    setSelected((prev) => {
      const cur = prev[rowKey] ?? [];
      return {
        ...prev,
        [rowKey]: cur.includes(value)
          ? cur.filter((x) => x !== value)
          : [...cur, value],
      };
    });

  // STEP 1: remove B units unless "Show B units" is on
  const visible = showB
    ? characters
    : characters.filter((c) => c.rarity !== "B");

  // STEP 2: keep only characters whose name matches the search box
  const searched = visible.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  // STEP 3: checks if one character matches all the selected filters.
  // "skipKey" lets a row ignore its own selection (used for counting below).
  const passes = (char: Char, skipKey?: string) =>
    Object.entries(selected).every(
      ([key, values]) =>
        key === skipKey ||
        values.length === 0 ||
        getField(char, key).some((v) => values.includes(v)),
    );

  // STEP 4: the number shown on each button.
  // It counts characters that match the search and the OTHER rows' filters.
  const countFor = (field: string, value: string) =>
    searched.filter(
      (char) => passes(char, field) && getField(char, field).includes(value),
    ).length;

  // The filter rows shown in the panel
  const rows: FilterRow[] = [
    {
      key: "rarity",
      label: "Rarity",
      options: rarities.map((r) => ({
        value: r,
        icon: rarityIcons[r],
        count: countFor("rarity", r),
      })),
    },
    {
      // No count on Cost
      key: "cost",
      label: "Cost",
      options: costs.map((c) => ({ value: c })),
    },
    {
      key: "baseAttack",
      label: "Base ATK",
      options: baseAttacks.map((b) => ({
        value: b,
        count: countFor("baseAttack", b),
      })),
    },
    {
      key: "damageTypes",
      label: "Damage Type",
      options: damageTypes.map((d) => ({
        value: d,
        color: damageTypesColor[d],
        count: countFor("damageTypes", d),
      })),
    },
  ];

  // FINAL LIST: the characters that pass search and every filter.
  // This is what appears in the grid.
  const filtered = searched.filter((char) => passes(char));

  // Sort the final list. "default" keeps the order from characters.ts.
  const sorted = [...filtered].sort((a, b) => {
    let result = 0;
    if (sortBy === "name") result = a.name.localeCompare(b.name);
    if (sortBy === "cost") result = Number(a.cost) - Number(b.cost);
    if (sortBy === "rarity")
      result = rarityRank[a.rarity] - rarityRank[b.rarity];
    // If the flip button is on, reverse the result
    return reversed ? -result : result;
  });

  // True when at least one filter button is selected (shows the "Clear filters" button)
  const hasFilters = Object.values(selected).some((v) => v.length > 0);

  return (
    <div className="space-y-6">
      {/* ===== SEARCH BOX + RESULT COUNTER ===== */}
      <div className="flex items-center justify-between gap-4">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md bg-card/60"
        />
        {/* Example: "12 of 61" */}
        <div className="flex flex-wrap items-center justify-end gap-2">
          {/* Sort pills: click one to sort, click again to flip direction */}
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Sort
          </span>
          {[
            { key: "default", label: "Default" },
            { key: "name", label: "Name" },
            { key: "cost", label: "Cost" },
            { key: "rarity", label: "Rarity" },
          ].map((opt) => {
            const active = sortBy === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => {
                  if (active && opt.key !== "default") {
                    // Already selected: flip the direction
                    setReversed(!reversed);
                  } else {
                    // New option: select it, start from the normal direction
                    setSortBy(opt.key);
                    setReversed(false);
                  }
                }}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition ${
                  active
                    ? "border-primary/70 bg-primary/15 text-primary"
                    : "border-border bg-secondary text-foreground hover:border-foreground/30 hover:bg-accent"
                }`}
              >
                {opt.label}
                {/* Arrow only on the active sort (not on Default) */}
                {active && opt.key !== "default" && (
                  <span className="text-xs">{reversed ? "↓" : "↑"}</span>
                )}
              </button>
            );
          })}

          {/* Result counter, for example "12 of 61" */}
          <span className="ml-2 text-sm text-muted-foreground">
            {filtered.length} of {visible.length}
          </span>
        </div>
      </div>

      {/* ===== FILTER PANEL ===== */}
      <FilterPanel
        rows={rows}
        selected={selected}
        onToggle={toggle}
        // The "Show B units" button at the bottom
        flags={[{ key: "showB", label: "Show Mercenary" }]}
        activeFlags={showB ? ["showB"] : []}
        onToggleFlag={() => setShowB(!showB)}
        // The "Clear filters" button (only appears when something is selected)
        canClear={hasFilters}
        onClear={() => setSelected({})}
      />

      {/* ===== CHARACTER GRID ===== */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {sorted.map((char) => (
          // Each card links to that character's own page
          <Link key={char.id} href={`/characters/${char.id}`}>
            <div
              className={`group relative overflow-hidden rounded-xl border transition-all hover:shadow-lg ${rarityBorder[char.rarity]}`}
            >
              {/* Portrait area */}
              <div className="relative aspect-[3/4] bg-gradient-to-b from-black/20 to-black/40">
                {char.portrait ? (
                  <img
                    src={char.portrait}
                    alt={char.name}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  // If there is no portrait, show the first letter of the name
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-muted-foreground/30">
                    {char.name.charAt(0)}
                  </div>
                )}

                {/* Rarity icon, top left */}
                <div className="absolute left-2 top-2">
                  <img
                    src={rarityIcons[char.rarity]}
                    alt={char.rarity}
                    className="h-10 w-10 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  />
                </div>

                {/* Cost, top right. padStart turns "4" into "04" */}
                <div className="absolute right-2 top-2 flex flex-col items-end leading-none [text-shadow:0_0_3px_#000,0_0_6px_#000,0_1px_8px_#000]">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-white/90">
                    Cost
                  </span>
                  <span className="text-2xl font-light tabular-nums text-white">
                    {char.cost.padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Name and title under the portrait */}
              <div className="p-2.5">
                <p className="truncate text-sm font-semibold transition-colors group-hover:text-primary">
                  {char.name}
                </p>
                <p className="truncate text-xs text-foreground/70">
                  {char.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Shown when no character matches the search and filters */}
      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          No characters found.
        </p>
      )}
    </div>
  );
}
