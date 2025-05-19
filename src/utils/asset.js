export function asset(path, isPublic = false) {
  if (!path.startsWith('/')) path = '/' + path;

  if (isPublic) {
    // Uses base URL (from env)
    const base = import.meta.env.VITE_BASE_URL || '/';
    return `${base}${path.replace(/^\//, '')}`;
  }

  return new URL(`../assets${path}`, import.meta.url).href;
}