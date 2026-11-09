export function asset(path: string): string;
export function asset(path?: string): string | undefined;
export function asset(path?: string) {

  const basePath = process.env.NODE_ENV === 'production' ? '/HWki' : '';

  if (!path || !path.startsWith("/")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}