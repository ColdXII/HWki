"use client";

import { useState } from "react";
import {
  Cake,
  MapPin,
  Ruler,
  Sparkles,
  User,
  Users,
  Star,
  type LucideIcon,
} from "lucide-react";
import type { Character } from "@/data/characters";
import {
  GIFT_RANGE,
  type CharacterDetails,
  type GiftGrade,
  type Profile,
  type TraitEffect,
} from "@/data/types";
import { STAT_LABEL, label } from "@/lib/stat-labels";
import { getTrait } from "@/data/traits";
import { weapons, uniqueLines, mainStats } from "@/data/weapons";
import { getGift } from "@/data/gifts";
import { asset } from "@/lib/asset";
import { ProfilePvSection } from "@/components/pv-embed";

// ===== NAMES AND HELPERS =====
// Only the string fact fields — not story / pv (those have their own blocks)
type ProfileFactKey = "age" | "race" | "homeland" | "height" | "birthday" | "bwh";
const FIELDS: { label: string; key: ProfileFactKey; icon: LucideIcon }[] = [
  { label: "Age", key: "age", icon: User },
  { label: "Race", key: "race", icon: Users },
  { label: "Homeland", key: "homeland", icon: MapPin },
  { label: "Height", key: "height", icon: Ruler },
  { label: "Birthday", key: "birthday", icon: Cake },
  { label: "BWH ratio", key: "bwh", icon: Sparkles },
];

const num = (n: number) => String(Number(n.toFixed(1)));
const fmtEffect = (e: TraitEffect) =>
  `${label(e.stat)} ${e.value > 0 ? "+" : ""}${num(e.value)}${e.type === "percent" ? "%" : ""}`;

const GRADE_STYLE: Record<string, string> = {
  A: "border-lime-500/50 bg-lime-500/10 text-lime-300",
  S: "border-blue-500/50 bg-blue-500/10 text-blue-300",
  SS: "border-purple-500/50 bg-purple-500/10 text-purple-300",
  EX: "border-amber-500/50 bg-amber-500/10 text-amber-300",
};

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

// One row of the Quick facts card
const Fact = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-center justify-between gap-3 border-b border-border/60 py-2 last:border-0">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="flex flex-wrap justify-end gap-1.5 text-sm font-medium">
      {children}
    </span>
  </div>
);

const GIFT_TILE: Record<GiftGrade, string> = {
  gray: "border-zinc-500/40 from-zinc-500/25",
  green: "border-emerald-500/50 from-emerald-500/25",
  blue: "border-blue-500/50 from-blue-500/25",
  purple: "border-purple-500/50 from-purple-500/25",
  yellow: "border-amber-400/60 from-amber-400/25",
};

// Same star rule as the Gifts page: the top value of a cheap gift
const isBest = (grade: GiftGrade, value: number) =>
  (grade === "gray" || grade === "green") && value === GIFT_RANGE[grade].max;

// Gift icon: shows the first letter if the file is missing
function GiftImg({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <span className="text-2xl font-bold text-muted-foreground/40">
        {name.charAt(0)}
      </span>
    );
  return (
    <img
      src={asset(src)}
      alt={name}
      onError={() => setFailed(true)}
      className="h-full w-full object-contain p-2"
    />
  );
}

// ===== THE TAB =====
export function ProfileTab({
  char,
  details,
}: {
  char: Character;
  details: CharacterDetails;
}) {
  const profile = details.profile;
  const liked = details.gifts ?? [];

  // Her unique traits
  const uniqueTraits = (details.traits ?? [])
    .map(getTrait)
    .filter((t): t is NonNullable<typeof t> => !!t && t.kind === "unique");

  // The weapon made for this character
  const weapon = weapons.find((w) => w.exclusive?.characterId === char.id);

  // "{accuracy}" in the weapon text becomes "20 → 40" (dupe 1 to dupe 5)
  const uniqueText = weapon?.unique?.description.replace(
    /\{(\w+)\}/g,
    (_, key: string) => {
      const v = weapon.unique?.values?.[key];
      return v && v.length ? `${num(v[0])} → ${num(v[v.length - 1])}` : "?";
    },
  );

  return (
    <div className="grid gap-4 lg:grid-cols-[320px_1fr] lg:items-start">
      {/* ===== LEFT ===== */}
      <div className="space-y-4">
        {/* Image with the name over the bottom */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60">
          {char.portrait ? (
            <img
              src={asset(char.portrait)}
              alt={char.name}
              className="aspect-[3/4] w-full object-cover object-top"
            />
          ) : (
            <div className="flex aspect-[3/4] items-center justify-center text-6xl font-bold text-muted-foreground/30">
              {char.name.charAt(0)}
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-12">
            <p className="text-xs text-white/70">{char.title}</p>
            <p className="text-xl font-bold text-white">{char.name}</p>
          </div>
        </div>

        <Card>
          <Title>Information</Title>
          <Fact label="Rarity">
            <img
              src={asset(`/icons/rarity/${char.rarity.toLowerCase()}.webp`)}
              alt={char.rarity}
              className="h-7 w-7 object-contain"
            />
          </Fact>
          <Fact label="Cost">{char.cost.padStart(2)}</Fact>
          {details.weaponType && (
            <Fact label="Weapon">{details.weaponType}</Fact>
          )}
          {char.baseAttack && char.baseAttack.length > 0 && (
            <Fact label="Base ATK">{char.baseAttack.join(" / ")}</Fact>
          )}
          {char.damageTypes && char.damageTypes.length > 0 && (
            <Fact label="Damage">
              {char.damageTypes.map((d) => (
                <span
                  key={d}
                  className="rounded-full bg-secondary px-2 py-0.5 text-xs"
                >
                  {d}
                </span>
              ))}
            </Fact>
          )}
        </Card>
        {liked.length > 0 && (
          <Card>
            <Title>Liked gifts</Title>
            <div className="flex flex-wrap gap-3">
              {liked.map((l) => {
                const gift = getGift(l.gift);
                if (!gift) return null;
                const best = isBest(gift.grade, l.value);
                return (
                  <div key={l.gift} className="w-[4.75rem] text-center">
                    <div
                      className={`relative flex h-16 items-center justify-center rounded-xl border bg-gradient-to-b to-black/40 ${GIFT_TILE[gift.grade]}`}
                    >
                      <GiftImg
                        src={asset(gift.icon ?? `/gifts/${gift.id}.webp`)}
                        name={gift.name}
                      />
                      <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border border-white/20 bg-black/85 px-1 text-[11px] font-bold tabular-nums">
                        {l.value}
                      </span>
                      {best && (
                        <Star className="absolute left-1 top-1 h-3 w-3 fill-amber-300 text-amber-300" />
                      )}
                    </div>
                    <p
                      className={`mt-1 text-[10px] leading-tight ${best ? "font-bold" : "text-foreground/80"}`}
                    >
                      {gift.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* Unique traits: hover (or tab to) a chip to see what it does */}
        {uniqueTraits.length > 0 && (
          <Card>
            <Title>Unique traits</Title>
            <div className="flex flex-wrap gap-2">
              {uniqueTraits.map((t) => {
                // Remove the leading spaces from each line of the description
                const desc = t.description
                  ?.split("\n")
                  .map((l) => l.trim())
                  .filter(Boolean)
                  .join("\n");
                return (
                  <div key={t.id} className="group relative">
                    <span
                      tabIndex={0}
                      className="block cursor-help rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary outline-none transition hover:bg-primary/20 focus:bg-primary/20"
                    >
                      {t.name}
                    </span>
                    <div className="pointer-events-none invisible absolute bottom-full left-0 z-30 mb-2 w-72 rounded-xl border border-border bg-popover p-3 text-xs opacity-0 shadow-xl shadow-black/40 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <p className="mb-1.5 text-sm font-semibold">{t.name}</p>
                      {desc ? (
                        <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                          {desc}
                        </p>
                      ) : (
                        <ul className="space-y-0.5 text-muted-foreground">
                          {t.effects.map((e, i) => (
                            <li key={i}>
                              {fmtEffect(e)}
                              {e.battleOnly && (
                                <span className="ml-1 text-sky-300">
                                  (battle)
                                </span>
                              )}
                              {e.condition && (
                                <span className="ml-1 text-pink-300">
                                  (max affection)
                                </span>
                              )}
                            </li>
                          ))}
                          {t.effects.length === 0 && <li>No stat effects.</li>}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        )}
      </div>

      {/* ===== RIGHT ===== */}
      <div className="space-y-4">
        {!profile ? (
          <p className="rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
            No profile added yet.
          </p>
        ) : (
          <Card>
            <Title>Profile</Title>
            <ul className="grid gap-2 sm:grid-cols-2">
              {FIELDS.filter((f) => profile[f.key]).map((f) => (
                <li
                  key={f.key}
                  className="flex items-center gap-3 rounded-xl bg-secondary/40 px-3 py-2.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 leading-tight">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {f.label}
                    </p>
                    <p className="truncate text-sm font-semibold">
                      {profile[f.key]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Exclusive weapon (only shows if a weapon in weapons.ts is made for her) */}
        {weapon && (
          <Card>
            <Title>Exclusive weapon</Title>
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              {weapon.icon && (
                <img
                  src={asset(weapon.icon)}
                  alt={weapon.name}
                  className="h-64 w-full rounded-xl border border-border bg-gradient-to-b from-white/5 to-black/40 object-contain p-4 drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)] md:h-80 md:w-64 md:shrink-0"
                />
              )}
              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-base font-semibold">{weapon.name}</p>
                  <span
                    className={`rounded border px-1.5 py-0.5 text-[10px] font-bold ${GRADE_STYLE[weapon.grade]}`}
                  >
                    {weapon.grade}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {weapon.type}
                  </span>
                </div>

                {/* Main and sub stats at Lv 60 */}
                <div className="flex flex-wrap gap-2 text-xs">
                  {mainStats(weapon).map((m, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary"
                    >
                      {label(m.stat)} +{num(m.value.lv60)}
                      {m.type === "percent" ? "%" : ""}
                    </span>
                  ))}
                  {weapon.subStats?.map((s, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-secondary px-2.5 py-1"
                    >
                      {label(s.stat)} +{num(s.value.lv60)}
                      {s.type === "percent" ? "%" : ""}
                    </span>
                  ))}
                </div>

                {weapon.unique && (
                  <div className="rounded-xl bg-secondary/40 p-3 text-xs">
                    <p className="text-sm font-semibold">
                      {weapon.unique.name}
                    </p>
                    <ul className="mt-1 space-y-1 text-muted-foreground">
                      {uniqueLines(weapon, "all").map((l, i) => (
                        <li key={i}>{l}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {weapon.exclusive && (
                  <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 text-xs">
                    <p className="text-sm font-semibold text-primary">
                      {weapon.exclusive.name}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-foreground">
                      {weapon.exclusive.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        )}
        {profile?.pv && profile.pv.length > 0 && (
          <ProfilePvSection links={profile.pv} />
        )}
        {profile?.story && (
          <Card>
            <Title>Story</Title>
            <p className="whitespace-pre-line border-l-2 border-primary/50 pl-4 text-sm leading-7 text-foreground/90">
              {profile.story}
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
