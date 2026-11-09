export function asset(path?: string): string | undefined {
  if (!path || !path.startsWith("/")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}