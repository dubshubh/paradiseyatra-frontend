export const BACKEND_URL = (process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL || 'http://localhost:5000').replace(/\/$/, '');

export function buildUrl(path: string): string {
  if (!path) return BACKEND_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${BACKEND_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}