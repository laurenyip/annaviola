/**
 * Dev-only worst-case data for stress-testing the release lists (?data=worst|empty|one).
 * Never active in a production build. Keep it: it's the regression test for these lists.
 */
const missingImage = `${import.meta.env.BASE_URL}images/does-not-exist.png`;

const WORST_SINGLES = [
  {
    title: "Love Song for the Girl I Used to Be Before Everything Changed",
    year: "2026",
    type: "Single",
    image: missingImage,
    href: "https://example.com/a",
    isNew: true,
  },
  {
    title: "Silver",
    year: "2026",
    type: "Single",
    href: null,
  },
  {
    title: "शाम ढले तेरी यादें",
    year: "2026",
    type: "Single",
    note: "Title track from the EP, Extended Hindi Version",
    href: "https://example.com/b",
  },
  {
    title: "Đặng Thị Ngọc Hân",
    type: "Single",
    image: `${import.meta.env.BASE_URL}images/silver-secrets-cover.png`,
    href: "https://example.com/c",
  },
  {
    title: "Unforgettableness",
    year: "2025",
    type: "Remix",
    href: "https://example.com/d",
  },
  {
    title: "A",
    year: "2025",
    type: "Single",
    href: "https://example.com/e",
  },
];

export function devDataMode() {
  if (!import.meta.env.DEV) return "demo";
  return new URLSearchParams(window.location.search).get("data") ?? "demo";
}

export function devSingles(singles) {
  if (!import.meta.env.DEV) return singles;
  const mode = devDataMode();
  if (mode === "worst") return WORST_SINGLES;
  if (mode === "empty") return [];
  if (mode === "one") return singles.slice(0, 1);
  return singles;
}
