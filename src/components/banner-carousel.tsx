"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Banner = {
  src: string;
  alt: string;
  position?: string; // which part of the image stays visible when it is cropped, e.g. "center 30%"
};

const INTERVAL = 5000; // time on each banner, in milliseconds

export function BannerCarousel({ banners }: { banners: Banner[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = banners.length;

  // Go to the next banner after a while. Pauses while the mouse is over it.
  // Clicking an arrow or a dot restarts the timer.
  useEffect(() => {
    if (paused || count < 2) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, count]);

  if (count === 0) return null;

  const go = (i: number) => setIndex((i + count) % count);

  return (
    <div
      className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card/60 md:aspect-[21/9]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* All banners are stacked, and only the current one is visible (fade) */}
      {banners.map((b, i) => (
        <img
          key={b.src}
          src={asset(b.src)}
          alt={b.alt}
          style={{ objectPosition: b.position ?? "center" }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Soft shade at the bottom, so the dots stay readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

      {count > 1 && (
        <>
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous banner"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/70 group-hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next banner"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/70 group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {banners.map((b, i) => (
              <button
                key={b.src}
                onClick={() => go(i)}
                aria-label={`Banner ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
