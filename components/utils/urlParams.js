export function updateSearchParam(key, value) {
  const url = new URL(window.location.toString());

  if (url.searchParams.get(key) === value) {
    return null;
  }
  url.searchParams.set(key, value);

  window.history.pushState({}, "", url.toString());
}

export function removeSearchParam(key) {
  const url = new URL(window.location.href);
  url.searchParams.delete(key);

  window.history.pushState({}, "", url.toString());
}

export function getSearchParam(key) {
  if (typeof window === 'undefined') return null;
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
}

export function createProjectSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
