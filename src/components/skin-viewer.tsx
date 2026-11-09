"use client";

import { useEffect, useRef, useState } from "react";
import type { Character } from "@/data/characters";
import type { PvLink, Skin, SkinSource } from "@/data/types";
import { PvEmbed } from "@/components/pv-embed";
import { asset } from "@/lib/asset";

// An image that shows a placeholder if the file is missing,
// instead of the ugly broken-image icon
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

// Path to your currency icon. Put the file here, or change the path to match yours
const CURRENCY_ICON = "/icons/currency.webp";

// Names shown for each way of getting a skin
const SOURCE_NAME: Record<SkinSource["type"], string> = {
  shop: "Shop",
  battlepass: "Battle Pass",
  event: "Event",
  story: "Story",
  exchange: "Exchange",
  other: "Other",
};

const SOURCE_DOT: Record<PvLink["source"], string> = {
  youtube: "bg-red-500",
  x: "bg-sky-400",
};

/** Default label when a PV has no title */
function pvLabel(link: PvLink, index: number, links: PvLink[]): string {
  if (link.title) return link.title;
  const same = links.filter((l) => l.source === link.source);
  if (same.length <= 1) {
    return link.source === "youtube" ? "Official PV" : "X PV";
  }
  const n = same.indexOf(link) + 1;
  return link.source === "youtube" ? `Official PV ${n}` : `X PV ${n}`;
}

export function SkinViewer({
  char,
  skins = [],
}: {
  char: Character;
  skins?: Skin[]; // comes from the details file now
}) {
  // Which skin card is selected ("default" = the original look)
  const [skinId, setSkinId] = useState("default");
  // Whether the censored image is shown
  const [censored, setCensored] = useState(false);
  // Active PV — when set, replaces the skin image panel
  const [pv, setPv] = useState<PvLink | null>(null);

  // ===== ZOOM =====
  // One object holds the zoom level and how far the image is moved
  const [view, setView] = useState({ zoom: 1, x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x: number; y: number } | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const MAX_ZOOM = 5;

  // Back to normal size
  const resetView = () => setView({ zoom: 1, x: 0, y: 0 });

  // Zoom by a factor and keep the point (cx, cy) under the cursor.
  // cx and cy are measured from the center of the box. Buttons use 0, 0 (the center).
  const zoomAt = (factor: number, cx = 0, cy = 0) =>
    setView((v) => {
      const zoom = Math.min(MAX_ZOOM, Math.max(1, v.zoom * factor));
      if (zoom === 1) return { zoom: 1, x: 0, y: 0 };
      const k = zoom / v.zoom;
      return { zoom, x: cx - (cx - v.x) * k, y: cy - (cy - v.y) * k };
    });

  // Mouse position relative to the center of the box
  const fromCenter = (clientX: number, clientY: number) => {
    const r = box.current!.getBoundingClientRect();
    return {
      cx: clientX - r.left - r.width / 2,
      cy: clientY - r.top - r.height / 2,
    };
  };

  // Mouse wheel zoom (needs a special listener so the page doesn't scroll too)
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      const cx = e.clientX - r.left - r.width / 2;
      const cy = e.clientY - r.top - r.height / 2;
      // Small wheel moves = small zoom, so it feels smooth
      zoomAt(Math.exp(-e.deltaY * 0.0015), cx, cy);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Build the list of looks: Default first, then the skins from the details file
  const looks: Skin[] = [
    {
      id: "default",
      name: "Default",
      portrait: char.portrait,
      fullBody: char.fullBody ?? "",
      fullBodyCensored: char.fullBodyCensored,
    },
    ...skins,
  ];

  const current = looks.find((l) => l.id === skinId) ?? looks[0];
  const hasCensored = Boolean(current.fullBodyCensored);
  const pvLinks = current.pv ?? [];

  // Pick which big image to show
  const image =
    censored && current.fullBodyCensored
      ? current.fullBodyCensored
      : current.fullBody;

  return (
    <div className="space-y-5">
      {/* ===== SKIN CARDS ===== */}
      <div className="flex flex-wrap items-center gap-3">
        {looks.map((l) => {
          const active = l.id === skinId;
          // The first way to get this skin that is still possible
          const source = l.sources?.find((s) => s.available !== false);
          return (
            <button
              key={l.id}
              onClick={() => {
                setSkinId(l.id);
                setPv(null);
                setCensored(false);
                resetView();
              }}
              className={`group w-28 overflow-hidden rounded-xl border-2 text-left transition ${
                active
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border opacity-80 hover:border-foreground/30 hover:opacity-100"
              }`}
            >
              {/* Thumbnail (shows the first letter if the image is missing) */}
              <div className="relative aspect-[3/4] bg-gradient-to-b from-white/5 to-black/40">
                <SafeImg
                  key={l.portrait}
                  src={asset(l.portrait)}
                  alt={l.name}
                  className="h-full w-full object-cover object-top"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-muted-foreground/30">
                      {l.name.charAt(0)}
                    </div>
                  }
                />
                {/* LIMITED badge */}
                {l.limited && (
                  <span className="absolute left-1 top-1 rounded bg-rose-500/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                    Limited
                  </span>
                )}
              </div>

              {/* Name + how to get it */}
              <div className="bg-card/80 px-2 py-2">
                <p className="truncate text-xs font-semibold">{l.name}</p>

                {l.id === "default" ? (
                  <span className="mt-1 inline-block rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                    DEFAULT
                  </span>
                ) : source ? (
                  source.type === "shop" && source.price !== undefined ? (
                    // Shop skin: currency icon on the left, then the price
                    <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-yellow-300">
                      <img
                        src={asset(CURRENCY_ICON)}
                        alt=""
                        className="h-4 w-4 object-contain"
                      />
                      {source.price}
                    </p>
                  ) : (
                    // Other ways: Battle Pass, Event, and so on
                    <p className="mt-1 truncate text-[11px] font-medium text-sky-300">
                      {SOURCE_NAME[source.type]}
                    </p>
                  )
                ) : (
                  l.sources && (
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Unavailable
                    </p>
                  )
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* ===== VIEWER + CONTROLS ===== */}
      <div className="grid gap-4 lg:grid-cols-[1fr_240px]">
        {/* Big image / PV — PV overtakes this panel */}
        {pv ? (
          <div className="relative flex h-[80vh] min-h-[420px] flex-col overflow-hidden rounded-xl border border-border bg-black">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-black/80 px-3 py-2">
              <span className="truncate text-xs text-white/80">
                {current.name}
                {" · "}
                {pv.title ?? (pv.source === "youtube" ? "Official PV" : "X PV")}
              </span>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={pv.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md px-2 py-1 text-xs text-white/70 hover:bg-white/10 hover:text-white"
                >
                  Open source
                </a>
                <button
                  type="button"
                  onClick={() => setPv(null)}
                  className="rounded-md bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20"
                >
                  ✕ Close PV
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1">
              <PvEmbed link={pv} className="h-full w-full border-0" />
            </div>
          </div>
        ) : (
          <div
            ref={box}
            onPointerDown={(e) => {
              if (view.zoom === 1) return; // nothing to drag at normal size
              e.currentTarget.setPointerCapture(e.pointerId);
              drag.current = { x: e.clientX - view.x, y: e.clientY - view.y };
              setDragging(true);
            }}
            onPointerMove={(e) => {
              if (!drag.current) return;
              const r = e.currentTarget.getBoundingClientRect();
              // Don't let the image be dragged far outside the box
              const limitX = (r.width * view.zoom) / 2;
              const limitY = (r.height * view.zoom) / 2;
              const x = e.clientX - drag.current.x;
              const y = e.clientY - drag.current.y;
              setView((v) => ({
                ...v,
                x: Math.max(-limitX, Math.min(limitX, x)),
                y: Math.max(-limitY, Math.min(limitY, y)),
              }));
            }}
            onPointerUp={() => {
              drag.current = null;
              setDragging(false);
            }}
            onDoubleClick={(e) => {
              // Double-click: zoom in on the spot, or reset if already zoomed
              if (view.zoom > 1) return resetView();
              const { cx, cy } = fromCenter(e.clientX, e.clientY);
              zoomAt(2.5, cx, cy);
            }}
            className={`relative flex h-[80vh] min-h-[420px] touch-none select-none items-center justify-center overflow-hidden rounded-xl border border-border bg-[radial-gradient(ellipse_at_center,hsl(240_20%_14%),hsl(240_20%_6%))] p-4 ${
              view.zoom > 1
                ? dragging
                  ? "cursor-grabbing"
                  : "cursor-grab"
                : "cursor-zoom-in"
            }`}
          >
            <div
              style={{
                transform: `translate(${view.x}px, ${view.y}px) scale(${view.zoom})`,
              }}
              // No delay while dragging, a short smooth move otherwise
              className={`flex h-full w-full items-center justify-center ${
                dragging ? "" : "transition-transform duration-150 ease-out"
              }`}
            >
              <SafeImg
                key={image}
                src={asset(image)}
                alt={`${char.name} - ${current.name}`}
                className="pointer-events-none h-full w-auto max-w-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                fallback={<p className="text-muted-foreground">No image yet</p>}
              />
            </div>

            {/* Name label, top left */}
            <span className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-1 text-xs text-white/80">
              {current.name}
              {censored && hasCensored ? " · Censored" : ""}
            </span>

            {/* Zoom controls, bottom right */}
            <div
              className="absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-black/60 px-2 py-1.5 text-white backdrop-blur-sm"
              onPointerDown={(e) => e.stopPropagation()}
              onDoubleClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => zoomAt(0.8)}
                className="h-7 w-7 rounded text-lg leading-none hover:bg-white/15"
                aria-label="Zoom out"
              >
                −
              </button>
              {/* Slider: drag to zoom smoothly */}
              <input
                type="range"
                min={1}
                max={MAX_ZOOM}
                step={0.01}
                value={view.zoom}
                onChange={(e) => zoomAt(Number(e.target.value) / view.zoom)}
                className="h-1 w-24 cursor-pointer accent-purple-400"
                aria-label="Zoom"
              />
              <button
                onClick={() => zoomAt(1.25)}
                className="h-7 w-7 rounded text-lg leading-none hover:bg-white/15"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                onClick={resetView}
                className="rounded px-2 py-1 text-xs hover:bg-white/15"
              >
                Reset
              </button>
            </div>
          </div>
        )}

        {/* Controls panel: sits at the top and only is as tall as it needs to be */}
        <div className="h-fit space-y-4 rounded-xl border border-border bg-card/40 p-4 text-sm">
          {/* PV list — above How to get; supports multiple videos */}
          {pvLinks.length > 0 && (
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                PV
              </p>
              <div className="space-y-1.5">
                {pvLinks.map((link, i) => {
                  const isOn =
                    pv?.url === link.url && pv?.source === link.source;
                  // X posts: open on X (no in-app embed)
                  if (link.source === "x") {
                    return (
                      <a
                        key={`${link.source}-${link.url}-${i}`}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2 text-left text-xs font-semibold text-foreground transition hover:bg-accent"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${SOURCE_DOT[link.source]}`}
                        />
                        <span className="min-w-0 flex-1 truncate">
                          {pvLabel(link, i, pvLinks)}
                        </span>
                        <span className="shrink-0 text-[10px] text-sky-300">
                          Open on X
                        </span>
                      </a>
                    );
                  }
                  return (
                    <button
                      key={`${link.source}-${link.url}-${i}`}
                      type="button"
                      onClick={() => {
                        if (isOn) {
                          setPv(null);
                        } else {
                          setPv(link);
                          resetView();
                        }
                      }}
                      className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs font-semibold transition ${
                        isOn
                          ? "border-primary/70 bg-primary/15 text-primary"
                          : "border-border bg-secondary text-foreground hover:bg-accent"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${SOURCE_DOT[link.source]}`}
                      />
                      <span className="min-w-0 flex-1 truncate">
                        {pvLabel(link, i, pvLinks)}
                      </span>
                    </button>
                  );
                })}
              </div>
              {pv && (
                <button
                  type="button"
                  onClick={() => setPv(null)}
                  className="w-full rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  Back to skin
                </button>
              )}
            </div>
          )}

          {/* How to get this skin (hidden for Default) */}
          {current.sources && current.sources.length > 0 && (
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                How to get
              </p>
              {current.limited && (
                <span className="inline-block rounded bg-rose-500/90 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Limited
                </span>
              )}
              <ul className="space-y-2">
                {current.sources.map((s, i) => (
                  <li
                    key={i}
                    className={`rounded-lg bg-secondary/40 px-3 py-2 ${
                      s.available === false ? "opacity-50" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium">{SOURCE_NAME[s.type]}</span>
                      {s.type === "shop" && s.price !== undefined && (
                        <span className="flex items-center gap-1 font-semibold text-yellow-300">
                          <img
                            src={asset(CURRENCY_ICON)}
                            alt=""
                            className="h-4 w-4 object-contain"
                          />
                          {s.price}
                        </span>
                      )}
                    </div>
                    {s.label && (
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    )}
                    {s.note && (
                      <p className="text-xs text-muted-foreground/70">
                        {s.note}
                      </p>
                    )}
                    {s.available === false && (
                      <p className="text-xs text-rose-300">
                        No longer available
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Censored: only shown if this skin has a censored version */}
          {hasCensored && (
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Appearance
              </p>
              <div className="flex items-center justify-between">
                <span>Censored</span>
                <button
                  onClick={() => setCensored(!censored)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    censored
                      ? "border-primary/70 bg-primary/15 text-primary"
                      : "border-border bg-secondary text-muted-foreground"
                  }`}
                >
                  {censored ? "ON" : "OFF"}
                </button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Capture
            </p>
            {image && (
              <a
                href={image}
                download
                className="block rounded-md border border-border bg-secondary px-3 py-2 text-center transition hover:bg-accent"
              >
                Save image
              </a>
            )}
            {image && (
              <a
                href={image}
                target="_blank"
                rel="noreferrer"
                className="block rounded-md border border-border px-3 py-2 text-center text-muted-foreground transition hover:text-foreground"
              >
                Open full size
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}