export function asset(path: string): string;
export function asset(path?: string): string | undefined;
export function asset(path?: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path || !path.startsWith("/")) return path;
  if (base && (path === base || path.startsWith(base + "/"))) return path;
  return `${base}${path}`;
}