/** Artist content — bio from official promo, release via PUSH.fm */
import { LINKS } from "./links";

const base = import.meta.env.BASE_URL;

export const ARTIST = {
  name: "Anna Viola",
  handle: "@annaviolaa",
  location: "Vancouver, Canada",
  tagline: "pop · poetry · glitter",
};

export const IMAGES = {
  hero: `${base}images/silver-secrets-hero.png`,
  about: `${base}images/silver-secrets-about.png`,
  cover: `${base}images/silver-secrets-cover.png`,
};

export const BIO = [
  "Based in Vancouver, Canada, Anna Viola found music through poetry — turning thoughts, emotions, and experiences into words. Words that eventually evolved into music that blends storytelling with melody.",
  "Inspired by artists like Labrinth, The Weeknd, and Rihanna, Anna's sound is shaped by vulnerability. She aspires to put her people on the map and bring stronger representation into the music industry.",
  "For listeners to see themselves in her stories, feel understood by the music, and know there's space for voices like hers to be heard. Anna Viola is currently promoting her debut EP.",
];

export const DEBUT_EP = {
  title: "Silver Secrets",
  type: "EP",
  year: "2026",
  description: "new album coming soon!",
  coverImage: IMAGES.cover,
  artImage: IMAGES.about,
};

export const SINGLES = [
  {
    title: "Silver Secrets",
    year: "2026",
    type: "Single",
    image: IMAGES.cover,
    href: LINKS.silverSecrets,
  },
  {
    title: "Pedestal",
    year: "2025",
    type: "Single",
    href: LINKS.pedestal,
  },
];

export const DISCOGRAPHY = [
  {
    title: "Silver Secrets",
    year: "2026",
    type: "EP",
    image: IMAGES.cover,
    href: LINKS.silverSecrets,
  },
  {
    title: "Pedestal",
    year: "2025",
    type: "Single",
    href: LINKS.pedestal,
  },
];
