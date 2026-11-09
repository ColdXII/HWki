"use client";

import { useState } from "react";
import type { PvLink } from "@/data/types";

/** Pull a YouTube video id from common URL shapes */
export function youtubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) {
        return u.pathname.split("/")[2] || null;
      }
      if (u.pathname.startsWith("/shorts/")) {
        return u.pathname.split("/")[2] || null;
      }
      return u.searchParams.get("v");
    }
  } catch {
    if (/^[\w-]{11}$/.test(url)) return url;
  }
  return null;
}

const SOURCE_LABEL: Record<PvLink["source"], string> = {
  youtube: "YouTube",
  x: "X",
};

/** Compact buttons to pick a PV source */
export function PvSourceButtons({
  links,
  active,
  onSelect,
  className = "",
}: {
  links: PvLink[];
  active?: PvLink | null;
  onSelect: (link: PvLink | null) => void;
  className?: string;
}) {
  if (!links.length) return null;
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map((link, i) => {
        const key = `${link.source}-${link.url}-${i}`;
        const isOn = active?.url === link.url && active?.source === link.source;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(isOn ? null : link)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              isOn
                ? "border-primary/70 bg-primary/15 text-primary"
                : "border-border bg-secondary text-foreground hover:bg-accent"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                link.source === "youtube" ? "bg-red-500" : "bg-sky-400"
              }`}
            />
            {link.title ?? `PV · ${SOURCE_LABEL[link.source]}`}
          </button>
        );
      })}
    </div>
  );
}

/** X is link-only (no embed). Shows a card that opens the post on X. */
function XPvLink({
  link,
  className = "",
}: {
  link: PvLink;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 bg-black/80 p-8 text-center ${className}`}
    >
      <p className="text-sm text-white/80">
        {link.title ?? "Promotional video on X"}
      </p>
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/15 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:border-sky-300/60 hover:bg-sky-500/25"
      >
        Open on X
      </a>
    </div>
  );
}

/** Full-size embed that fills its parent (YouTube only; X is a link card) */
export function PvEmbed({
  link,
  className = "",
}: {
  link: PvLink;
  className?: string;
}) {
  if (link.source === "x") {
    return <XPvLink link={link} className={className} />;
  }

  const id = youtubeId(link.url);
  if (!id) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <p className="text-sm text-muted-foreground">
          Could not load this video.{" "}
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-foreground"
          >
            Open link
          </a>
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
      title={link.title ?? "PV"}
      className={className}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
    />
  );
}

/** Profile-style card: one or more PVs above story. X links stay as open-on-X. */
export function ProfilePvSection({ links }: { links: PvLink[] }) {
  const youtube = links.filter((l) => l.source === "youtube");
  const xLinks = links.filter((l) => l.source === "x");
  const [active, setActive] = useState<PvLink | null>(youtube[0] ?? null);

  if (!links.length) return null;

  return (
    <div className="space-y-3 rounded-2xl border border-border bg-card/60 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Promotional Video (PV)
        </p>
        {youtube.length > 1 && (
          <PvSourceButtons
            links={youtube}
            active={active}
            onSelect={setActive}
          />
        )}
      </div>

      {active && (
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
          <PvEmbed link={active} className="h-full w-full" />
        </div>
      )}

      {/* X posts: keep the links, do not embed */}
      {xLinks.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {xLinks.map((link, i) => (
            <a
              key={`${link.url}-${i}`}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-300 transition hover:border-sky-400/50 hover:bg-sky-500/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {link.title ?? "Open on X"}
            </a>
          ))}
        </div>
      )}

      {links.length === 1 && links[0].source === "youtube" && (
        <p className="text-[11px] text-muted-foreground">
          Source: YouTube
          {" · "}
          <a
            href={links[0].url}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-foreground"
          >
            Open on YouTube
          </a>
        </p>
      )}
    </div>
  );
}
