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
  hero: `${base}images/hero-portrait.png`,
  about: `${base}images/silver-secrets-about.png`,
  cover: `${base}images/silver-secrets-cover.png`,
  pedestalCover: `${base}images/pedestal-cover.png`,
  rightTimeWrongPerson: `${base}images/right-time-wrong-person.png`,
  logoOrnamentTop: `${base}images/logo-ornament-top.png`,
  ornamentBorderLeft: `${base}images/ornament-border-left.png`,
  ornamentBorderRight: `${base}images/ornament-border-right.png`,
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
  releaseDate: "November 2026",
  description: "new album coming soon!",
  coverImage: IMAGES.cover,
  artImage: IMAGES.about,
};

export const NEXT_SINGLE = {
  title: "New Single",
  releaseDate: "August 21, 2026",
  description:
    "The next single arrives August 21 — a first taste of what's coming before the debut EP.",
};

export const DOCUMENTARY = {
  title: "Documentary",
  releaseDate: "November 2026",
  description:
    "A documentary arrives this November — go behind the scenes of Anna Viola's world as the debut EP lands.",
};

export const SINGLES = [
  {
    title: "Right Time, Wrong Person",
    year: "2026",
    type: "Single",
    image: IMAGES.rightTimeWrongPerson,
    href: LINKS.rightTimeWrongPerson,
    isNew: true,
  },
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
    image: IMAGES.pedestalCover,
    href: LINKS.pedestal,
  },
];

export const UPDATES = [
  {
    id: "next-single-aug-2026",
    date: "August 21, 2026",
    section: "Releases",
    headline: "New Single — Out August 21",
    dek: "The next single arrives August 21 — a first taste of what's coming before the debut EP.",
  },
  {
    id: "ep-november-2026",
    date: "November 2026",
    section: "Releases",
    headline: "Silver Secrets — Debut EP",
    dek: "The debut EP arrives November 2026 — poetry turned melody, silver linings wrapped in vulnerability.",
  },
  {
    id: "documentary-nov-2026",
    date: "November 2026",
    section: "Film",
    headline: "Documentary — Out in November",
    dek: "A documentary arrives this November — go behind the scenes of Anna Viola's world as the debut EP lands.",
  },
];

export const TRACKS = [
  {
    title: "Silver Secrets",
    trackNumber: "01",
    year: "2026",
    blurb:
      "The title track — poetry turned melody, silver linings wrapped in vulnerability.",
    href: LINKS.silverSecrets,
  },
  {
    title: "Pedestal",
    trackNumber: "02",
    year: "2025",
    blurb:
      "A confession about admiration from a distance — longing set to a slow burn.",
    href: LINKS.pedestal,
  },
  {
    title: "Right Time, Wrong Person",
    trackNumber: "03",
    year: "2026",
    blurb:
      "Just dropped — when the heart is right but the moment isn't. Stream the new single now.",
    href: LINKS.rightTimeWrongPerson,
    isNew: true,
  },
];

export const DISCOGRAPHY = [
  {
    title: "Right Time, Wrong Person",
    year: "2026",
    type: "Single",
    image: IMAGES.rightTimeWrongPerson,
    href: LINKS.rightTimeWrongPerson,
    isNew: true,
  },
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
    image: IMAGES.pedestalCover,
    href: LINKS.pedestal,
  },
];
