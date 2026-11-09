"use client";

import { useState, type ReactNode } from "react";

type Tab = { key: string; label: string; content: ReactNode };

export function CharacterTabs({ tabs }: { tabs: Tab[] }) {
  // The first tab is open by default
  const [active, setActive] = useState(tabs[0].key);

  return (
    <div className="space-y-5">
      {/* Tab bar */}
      <div className="flex gap-1 overflow-x-auto border-b border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`-mb-px whitespace-nowrap border-b-2 px-3 py-2 text-sm font-medium transition ${
              active === t.key
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content of the open tab */}
      <div>{tabs.find((t) => t.key === active)?.content}</div>
    </div>
  );
}
