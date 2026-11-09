"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Copy, Ticket } from "lucide-react";
import { codes, type RedeemCode } from "@/data/codes";
import { asset } from "@/lib/asset";

// Copies text. The second part is a fallback for phones that block the first way.
async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

// Is the code expired, and how many days are left (counting calendar days)?
function statusOf(c: RedeemCode, now: Date) {
  if (c.expired) return { expired: true, days: null as number | null };
  if (!c.expires) return { expired: false, days: null as number | null };
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const last = new Date(`${c.expires}T00:00:00`);
  const days = Math.round((last.getTime() - today.getTime()) / 86400000);
  return { expired: days < 0, days };
}

const fmtDate = (d: string) =>
  new Date(`${d}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

// Reward icon: shows nothing if the file is missing
function RewardImg({ src }: { src?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={asset(src)}
      alt=""
      onError={() => setFailed(true)}
      className="h-5 w-5 object-contain"
    />
  );
}

function CodeCard({
  c,
  expired,
  days,
  showRewards = true,
}: {
  c: RedeemCode;
  expired: boolean;
  days: number | null;
  showRewards?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (await copyText(c.code)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div
      className={`space-y-3 rounded-2xl border border-border bg-card/60 p-4 ${expired ? "opacity-60" : ""}`}
    >
      {/* The whole code row is one big button, easy to tap on a phone */}
      <button
        onClick={copy}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border border-dashed px-4 py-3.5 text-left transition active:scale-[0.99] ${
          copied
            ? "border-emerald-400/60 bg-emerald-500/10"
            : "border-primary/50 bg-primary/10 hover:bg-primary/15"
        }`}
      >
        <span
          className={`break-all font-mono text-base font-bold tracking-wider ${expired ? "line-through" : ""}`}
        >
          {c.code}
        </span>
        <span
          className={`flex shrink-0 items-center gap-1.5 text-xs font-semibold ${
            copied ? "text-emerald-300" : "text-primary"
          }`}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          {copied ? "Copied" : "Tap to copy"}
        </span>
      </button>

      {/* Status and date */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span
          className={`rounded px-2 py-0.5 font-bold uppercase ${
            expired
              ? "bg-rose-500/20 text-rose-300"
              : "bg-emerald-500/20 text-emerald-300"
          }`}
        >
          {expired ? "Expired" : "Active"}
        </span>
        {c.expires ? (
          <span className="text-muted-foreground">
            {expired ? "Ended" : "Until"} {fmtDate(c.expires)}
            {!expired && days !== null && days <= 3 && (
              <span className="ml-1.5 font-semibold text-amber-300">
                {days === 0
                  ? "ends today"
                  : `${days} day${days === 1 ? "" : "s"} left`}
              </span>
            )}
          </span>
        ) : (
          !expired && (
            <span className="text-muted-foreground">No expiry date</span>
          )
        )}
      </div>

      {/* Rewards */}
      {showRewards && (
        <div className="flex flex-wrap gap-2">
          {c.rewards.map((r, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs"
            >
              {r.icon && <RewardImg src={asset(r.icon)} />}
              <span>{r.name}</span>
              <span className="font-bold tabular-nums text-amber-300">
                ×{r.amount.toLocaleString("en-US")}
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// show="active": only working codes, with a title and a link (for the Home page)
// show="all": working codes first, then expired ones (for the Codes page)
export function CodeList({ show = "all" }: { show?: "active" | "all" }) {
  // The date is read in the browser, so a code turns expired by itself, with no rebuild
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);

  if (!now) return <div className="min-h-24" />;

  const list = codes.map((c) => ({ c, ...statusOf(c, now) }));
  const active = list
    .filter((x) => !x.expired)
    // soonest to expire first, codes with no date last
    .sort((a, b) =>
      (a.c.expires ?? "9999").localeCompare(b.c.expires ?? "9999"),
    );
  const old = list
    .filter((x) => x.expired)
    .sort((a, b) => (b.c.expires ?? "").localeCompare(a.c.expires ?? ""));

  const grid = "grid gap-3 md:grid-cols-2 xl:grid-cols-4";

  if (show === "active") {
    return (
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Ticket className="h-5 w-5 text-primary" /> Redeem Codes
          </h2>
          <Link href="/codes" className="text-sm text-primary hover:underline">
            All codes →
          </Link>
        </div>
        {active.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
            No active codes right now.
          </p>
        ) : (
          <div className={grid}>
            {active.map((x) => (
              <CodeCard
                key={x.c.code}
                c={x.c}
                expired={false}
                days={x.days}
                showRewards={false}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Active ({active.length})
        </p>
        {active.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
            No active codes right now.
          </p>
        ) : (
          <div className={grid}>
            {active.map((x) => (
              <CodeCard key={x.c.code} c={x.c} expired={false} days={x.days} />
            ))}
          </div>
        )}
      </section>

      {old.length > 0 && (
        <section className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Expired ({old.length})
          </p>
          <div className={grid}>
            {old.map((x) => (
              <CodeCard key={x.c.code} c={x.c} expired days={x.days} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
