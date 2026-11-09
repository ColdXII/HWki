"use client";

import { useState, type ReactNode } from "react";
import {
  demiGodLevel,
  type CharacterDetails,
  type DemiGodEffect,
  type Skill,
  type TraitEffect,
} from "@/data/types";
import { label } from "@/lib/stat-labels";
import { getTrait } from "@/data/traits";
import { asset } from "@/lib/asset";
import { Hourglass, Zap } from "lucide-react";

const MAX_LEVEL = 10; // skills go from Lv 1 to Lv 10

// A skill's damage outputs as a list, whether it has one or several
const damagesOf = (s?: Skill) =>
  !s?.damage ? [] : Array.isArray(s.damage) ? s.damage : [s.damage];

// Color for each damage type. Change any color here.
const DMG_COLOR: Record<string, string> = {
  Slash: "text-rose-400",
  Pierce: "text-orange-400",
  Crush: "text-amber-600",
  Heat: "text-red-500",
  Cold: "text-sky-400",
  Electric: "text-yellow-300",
  Immaterial: "text-purple-300",
  Poison: "text-lime-400",
};

const DAMAGE_TYPES = Object.keys(DMG_COLOR);

function Highlight({ text }: { text: string }) {
  const parts = text.split(
    /(\[[^\]]+\]|\b(?:Additional )?(?:Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison)(?: (?:Additional )?DMG| (?:Additional )?Boost| Additional)?)/g,
  );

  return (
    <>
      {parts.map((p, i) => {
        if (i % 2 !== 1) return p;

        // Handle bracketed words like [Lava]
        if (p.startsWith("[")) {
          return (
            <span key={i} className="font-semibold text-foreground">
              {p}
            </span>
          );
        }

        // Find the damage type inside the matched phrase (e.g. "Heat" in "additional Heat DMG")
        const matchedType = DAMAGE_TYPES.find((type) => p.includes(type));
        const colorClass = matchedType
          ? DMG_COLOR[matchedType]
          : "text-foreground";

        return (
          <span key={i} className={`font-semibold ${colorClass}`}>
            {p}
          </span>
        );
      })}
    </>
  );
}

// Trait icon: shows the first letter if the file is missing
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
  if (failed)
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/30 text-sm font-bold text-muted-foreground/50">
        {name.charAt(0)}
      </span>
    );
  return (
    <img
      src={asset(icon ?? `/traits/${id}.webp`)}
      alt=""
      onError={() => setFailed(true)}
      className="h-9 w-9 shrink-0 rounded-lg bg-black/30 object-contain p-0.5"
    />
  );
}

const fmtEffect = (e: TraitEffect) =>
  `${label(e.stat)} ${e.value > 0 ? "+" : ""}${Number(e.value.toFixed(1))}${
    e.type === "percent" ? "%" : ""
  }`;

// Small title above each card
const Title = ({ children }: { children: ReactNode }) => (
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
    {children}
  </p>
);

// Demi-God icon: shows the first letter if the file is missing
function DemiImg({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const box =
    "h-12 w-12 shrink-0 rounded-xl border border-amber-500/40 bg-black/30";
  if (failed)
    return (
      <span
        className={`${box} flex items-center justify-center text-lg font-bold text-amber-300/60`}
      >
        {name.charAt(0)}
      </span>
    );
  return (
    <img
      src={asset(src)}
      alt={name}
      onError={() => setFailed(true)}
      className={`${box} object-contain p-0.5`}
    />
  );
}

// The unit's own Demi-God effect. Its level comes from the EX rank.
function DemiEffectCard({ effect }: { effect: DemiGodEffect }) {
  const RANKS = ["EX", "EX1", "EX2", "EX3", "EX4", "EX5", "EX6"];
  const [rank, setRank] = useState("EX6");
  const lv = demiGodLevel(rank);
  const slug = effect.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const text = effect.description
    .split("\n")
    .map((l) => l.trim())
    .join("\n")
    .replace(/\{(\w+)\}/g, (_, key: string) => {
      const n = effect.values?.[key]?.[lv - 1];
      return n == null ? "?" : String(n);
    });

  return (
    <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <DemiImg src={asset(effect.icon ?? `/demigod/${slug}.webp`)} name={effect.name} />
          <div className="leading-tight">
            <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-bold uppercase text-amber-300">
              Demi-God
            </span>
            <p className="mt-1 text-sm font-semibold">
              {effect.name} <span className="text-muted-foreground">Lv {lv}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {RANKS.map((r) => (
            <button
              key={r}
              onClick={() => setRank(r)}
              className={`rounded border px-2 py-0.5 text-[11px] transition ${
                rank === r
                  ? "border-primary/70 bg-primary/15 text-primary"
                  : "border-border hover:bg-accent"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
        <Highlight text={text} />
      </p>
    </div>
  );
}

export function SkillsTab({ details }: { details: CharacterDetails }) {
  const [demi, setDemi] = useState(false);
  const baseSkills = details.skills ?? [];
  const skills = [...baseSkills, ...(demi ? details.demiGod?.skills ?? [] : [])];

  const [index, setIndex] = useState(0);
  const [level, setLevel] = useState(1);

  const base = skills[index] ?? skills[0];
  const isNew = index >= baseSkills.length;
  const skill = demi && base?.enchanted ? { ...base, ...base.enchanted } : base;
  const isEnchanted = demi && !!base?.enchanted;
  const maxLevel = skill?.maxLevel ?? MAX_LEVEL;

  const damages = damagesOf(skill);
  const percents = damages.map((d) => d.percent[level - 1] ?? undefined);

  const text = skill?.description.replace(/\{(\w+)\}/g, (_, key: string) => {
    const m = key.match(/^damage(\d*)$/);
    const n = m
      ? percents[m[1] ? Number(m[1]) - 1 : 0]
      : skill.values?.[key]?.[level - 1];
    return n == null ? "?" : String(n);
  });

  // Traits: unique first, then general
  const traits = (details.traits ?? [])
    .map(getTrait)
    .filter((t): t is NonNullable<typeof t> => !!t)
    .sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "unique" ? -1 : 1));

  return (
    <div className="space-y-4">
      {details.demiGod && (
        <div className="space-y-3">
          <button
            onClick={() => {
              setDemi((prev) => {
                const next = !prev;
                if (!next) {
                  // Turning DG off → clamp index to base skills only
                  setIndex((idx) =>
                    Math.min(idx, (details.skills ?? []).length - 1),
                  );
                }
                return next;
              });
              setLevel(1);
            }}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              demi
                ? "border-amber-400/60 bg-amber-500/15 text-amber-300"
                : "border-border bg-secondary hover:bg-accent"
            }`}
          >
            Demi-God Ascension: {demi ? "ON" : "OFF"}
          </button>
          {demi && details.demiGod.effect && (
            <DemiEffectCard effect={details.demiGod.effect} />
          )}
        </div>
      )}

      {/* ===== SKILLS ===== */}
      {skills.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
          No skills added yet.
        </p>
      ) : (
        <div className="grid gap-4 lg:grid-cols-[240px_1fr] lg:items-start">
          {/* Skill list */}
          <div className="space-y-2 rounded-2xl border border-border bg-card/60 p-3">
            {skills.map((s, i) => (
              <button
                key={s.id}
                onClick={() => {
                  setIndex(i);
                  setLevel(1);
                }}
                className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2 text-left transition ${
                  i === index
                    ? "border-primary/70 bg-primary/10"
                    : "border-border bg-secondary/40 hover:bg-accent"
                }`}
              >
                {s.icon ? (
                  <img
                    src={asset(s.icon)}
                    alt=""
                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-muted-foreground">
                    {s.name.charAt(0)}
                  </span>
                )}
                <span className="min-w-0 leading-tight">
                  <span className="block truncate text-sm font-semibold">
                    {s.name}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {s.type}
                  </span>
                  {i >= baseSkills.length && (
                    <span className="ml-1.5 rounded bg-amber-500/20 px-1 text-[10px] font-bold text-amber-300">
                      NEW
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Skill details */}
          <div className="space-y-4 rounded-2xl border border-border bg-card/60 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold">
                  {skill.name}
                  {isEnchanted && (
                    <span className="ml-2 rounded bg-amber-500/20 px-1.5 py-0.5 align-middle text-[10px] font-bold uppercase text-amber-300">
                      Enchanted
                    </span>
                  )}
                  {isNew && (
                    <span className="ml-2 rounded bg-amber-500/20 px-1.5 py-0.5 align-middle text-[10px] font-bold uppercase text-amber-300">
                      New
                    </span>
                  )}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-md bg-secondary px-2 py-0.5 text-muted-foreground">
                    {skill.type}
                  </span>
                  {skill.ap !== undefined && (
                    <span className="flex items-center gap-1 rounded-md bg-amber-500/15 px-2 py-0.5 font-semibold text-amber-300">
                      <Zap className="h-3 w-3" /> AP {skill.ap}
                    </span>
                  )}
                  {skill.cooldown !== undefined && (
                    <span className="flex items-center gap-1 rounded-md bg-sky-500/15 px-2 py-0.5 font-semibold text-sky-300">
                      <Hourglass className="h-3 w-3" /> {skill.cooldown} R
                    </span>
                  )}
                </div>
              </div>

              {/* Level buttons */}
              {maxLevel > 1 && (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setLevel(1)}
                    className="h-8 rounded-md border border-border px-2 text-xs hover:bg-accent"
                  >
                    MIN
                  </button>
                  <button
                    onClick={() => setLevel(Math.max(1, level - 1))}
                    className="h-8 w-8 rounded-md border border-border hover:bg-accent"
                    aria-label="Level down"
                  >
                    −
                  </button>
                  <span className="w-16 text-center text-sm tabular-nums">
                    Lv <span className="text-base font-semibold">{level}</span>/
                    {maxLevel}
                  </span>
                  <button
                    onClick={() => setLevel(Math.min(maxLevel, level + 1))}
                    className="h-8 w-8 rounded-md border border-border hover:bg-accent"
                    aria-label="Level up"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setLevel(maxLevel)}
                    className="h-8 rounded-md border border-border px-2 text-xs hover:bg-accent"
                  >
                    MAX
                  </button>
                </div>
              )}
            </div>

            {/* Damage bar */}
            {damages.map((d, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border-l-4 border-primary bg-secondary/40 px-4 py-2.5"
              >
                <span className="text-sm text-muted-foreground">
                  {d.label ?? "Damage"}
                  {d.damageType && (
                    <span
                      className={`ml-1.5 font-semibold ${DMG_COLOR[d.damageType]}`}
                    >
                      {d.damageType}
                    </span>
                  )}
                </span>
                <span className="text-sm font-semibold">
                  {label(d.stat)}{" "}
                  {percents[i] === undefined ? "?" : `${percents[i]}%`}
                </span>
              </div>
            ))}

            <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
              <Highlight text={text ?? ""} />
            </p>

            {skill.flavor && (
              <p className="border-t border-border/60 pt-3 text-sm italic text-muted-foreground">
                {skill.flavor}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ===== TRAITS ===== */}
      {traits.length > 0 && (
        <div className="rounded-2xl border border-border bg-card/60 p-4">
          <Title>Traits</Title>
          <div className="grid gap-3 sm:grid-cols-2">
            {traits.map((t) => {
              // Remove the leading spaces from each line of the description
              const desc = t.description
                ?.split("\n")
                .map((l) => l.trim())
                .filter(Boolean)
                .join("\n");
              return (
                <div key={t.id} className="rounded-xl bg-secondary/40 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2">
                      <TraitImg id={t.id} icon={t.icon} name={t.name} />
                      <p className="text-sm font-semibold">{t.name}</p>
                    </div>
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
                  {desc ? (
                    <p className="mt-1.5 whitespace-pre-line text-xs leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  ) : (
                    <ul className="mt-1.5 space-y-1 text-xs text-muted-foreground">
                      {t.effects.map((e, i) => (
                        <li
                          key={i}
                          className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5"
                        >
                          <span className="whitespace-nowrap">
                            {fmtEffect(e)}
                          </span>
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
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
