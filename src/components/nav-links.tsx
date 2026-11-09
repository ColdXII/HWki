"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const ITEMS = [
  { href: "/characters", label: "Vanguards" },
  { href: "/weapons", label: "Weapons" },
  { href: "/traits", label: "Traits" },
  { href: "/stigma", label: "Stigma" },
  { href: "/gifts", label: "Gifts" },
];

// The pages inside the Misc dropdown
const MISC = [
  { href: "/effects", label: "Effects" },
  { href: "/codes", label: "Codes" },
];

// Active on the page itself and on pages under it (like /characters/ahram)
const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(href + "/");

export function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close the menu after going to another page
  useEffect(() => setOpen(false), [pathname]);

  // Close it when you click outside or press Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const miscActive = MISC.some((m) => isActive(pathname, m.href));

  return (
    <nav className="flex items-center gap-1 text-sm">
      {ITEMS.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`relative rounded-md px-3 py-1.5 transition ${
              active
                ? "bg-primary/15 font-medium text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            {item.label}
            {active && (
              <span className="absolute inset-x-3 -bottom-3 h-0.5 rounded-full bg-primary" />
            )}
          </Link>
        );
      })}

      {/* Misc dropdown: opens on hover or click */}
      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className={`relative flex items-center gap-1 rounded-md px-3 py-1.5 transition ${
            miscActive
              ? "bg-primary/15 font-medium text-primary"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
        >
          Misc
          <ChevronDown
            className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`}
          />
          {miscActive && (
            <span className="absolute inset-x-3 -bottom-3 h-0.5 rounded-full bg-primary" />
          )}
        </button>

        {open && (
          // pt-2 keeps the menu open while the mouse moves down to it
          <div className="absolute left-0 top-full z-50 pt-2">
            <div className="w-40 overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-xl shadow-black/40">
              {MISC.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className={`block rounded-lg px-3 py-2 transition ${
                    isActive(pathname, m.href)
                      ? "bg-primary/15 font-medium text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {m.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
