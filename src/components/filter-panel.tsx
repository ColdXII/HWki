"use client";

export type FilterOption = {
  value: string;
  label?: string;
  icon?: string;
  count?: number;
  color?: string;
};

export type FilterRow = {
  key: string;
  label: string;
  options: FilterOption[];
};

export type FilterFlag = { key: string; label: string };

type Props = {
  rows: FilterRow[];
  selected: Record<string, string[]>;
  onToggle: (rowKey: string, value: string) => void;
  flags?: FilterFlag[];
  activeFlags?: string[];
  onToggleFlag?: (key: string) => void;
  onClear?: () => void;
  canClear?: boolean;
};

const pillBase =
  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition";
const pillOff =
  "border-border bg-secondary text-foreground hover:border-foreground/30 hover:bg-accent";
const pillOn = "border-primary/70 bg-primary/15 text-primary";

export function FilterPanel({
  rows,
  selected,
  onToggle,
  flags,
  activeFlags = [],
  onToggleFlag,
  onClear,
  canClear,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/60">
      {rows.map((row) => (
        <div
          key={row.key}
          className="flex items-start gap-4 border-b border-border/60 px-5 py-3"
        >
          <span className="w-20 shrink-0 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:w-24">
            {row.label}
          </span>
          <div className="flex flex-wrap gap-2">
            {row.options.map((o) => {
              const active = (selected[row.key] ?? []).includes(o.value);
              return (
                <button
                  key={o.value}
                  onClick={() => onToggle(row.key, o.value)}
                  className={`${pillBase} ${
                    active ? pillOn : `${pillOff} ${o.color ?? ""}`
                  }`}
                >
                  {o.icon && (
                    <img
                      src={o.icon}
                      alt={o.value}
                      className="h-6 w-auto object-contain"
                    />
                  )}
                  {(!o.icon || o.label) && <span>{o.label ?? o.value}</span>}
                  {o.count !== undefined && (
                    <span className="text-xs text-muted-foreground">
                      {o.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {((flags && flags.length > 0) || canClear) && (
        <div className="flex flex-wrap gap-2 px-5 py-3">
          {flags?.map((f) => (
            <button
              key={f.key}
              onClick={() => onToggleFlag?.(f.key)}
              className={`${pillBase} ${
                activeFlags.includes(f.key) ? pillOn : pillOff
              }`}
            >
              {f.label}
            </button>
          ))}
          {canClear && (
            <button
              onClick={onClear}
              className={`${pillBase} border-transparent text-muted-foreground hover:text-foreground`}
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
