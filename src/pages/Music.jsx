import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { LINKS } from "../data/links";
import {
  SpotifyIcon,
  AppleMusicIcon,
  YouTubeMusicIcon,
  AmazonMusicIcon,
  TidalIcon,
} from "../components/icons";

const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const PLATFORMS = [
  { name: "Spotify", icon: SpotifyIcon, href: LINKS.spotify },
  { name: "Apple Music", icon: AppleMusicIcon, href: LINKS.appleMusic },
  { name: "YouTube Music", icon: YouTubeMusicIcon, href: LINKS.youtubeMusic },
  { name: "Amazon Music", icon: AmazonMusicIcon, href: LINKS.amazonMusic },
  { name: "Tidal", icon: TidalIcon, href: LINKS.tidal },
];

const DISCOGRAPHY = [
  { title: "Golden Vanity", year: "2026", type: "Album" },
  { title: "Velvet Hour", year: "2025", type: "Single" },
  { title: "Bombay Nights", year: "2025", type: "EP" },
  { title: "Lilac Room", year: "2024", type: "Single" },
  { title: "Vanity Mirror", year: "2024", type: "EP" },
  { title: "Starlight Sari", year: "2023", type: "Single" },
];

function PlatformBadge({ name, icon: Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-body text-[13px] text-ivory transition-all duration-200 hover:scale-[1.03] hover:ring-1 hover:ring-silver"
    >
      <Icon className="h-4 w-4 shrink-0" />
      {name}
    </a>
  );
}

function EmbedPlaceholder({ label }) {
  return (
    <div className="flex aspect-[4/1] min-h-[152px] w-full items-center justify-center rounded-lg bg-ink">
      <p className="font-body text-sm text-ivory/40">
        {label} embed placeholder — replace with iframe
      </p>
    </div>
  );
}

function AlbumCard({ title, year, type }) {
  return (
    <motion.article
      className="group overflow-hidden rounded border border-ink/10 bg-white transition-colors duration-200 hover:border-silver"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="aspect-square bg-ivory/50">
        <div className="flex h-full items-center justify-center">
          <span className="font-script text-3xl text-ink/20">{title[0]}</span>
        </div>
      </div>
      <div className="border-t border-ink/10 p-4 group-hover:border-silver">
        <h3 className="font-display text-base text-ink">{title}</h3>
        <p className="mt-1 font-body text-xs text-ink/50">
          {year} · {type}
        </p>
      </div>
    </motion.article>
  );
}

export default function Music() {
  return (
    <div className="bg-white px-6 py-16 md:py-24">
      <Seo
        title="Music"
        description="Stream Anna Viola on Spotify, Apple Music, and more. Explore the full discography."
        path="/music"
      />
      <div className="mx-auto max-w-6xl">
        <motion.h1
          className="font-display text-5xl italic text-ink md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          music
        </motion.h1>

        <motion.section className="mt-14" {...sectionReveal}>
          <h2 className="sr-only">Streaming platforms</h2>
          <div className="flex flex-wrap gap-3">
            {PLATFORMS.map((platform) => (
              <PlatformBadge key={platform.name} {...platform} />
            ))}
          </div>

          <div className="mt-10 space-y-6">
            <EmbedPlaceholder label="Spotify" />
            <EmbedPlaceholder label="Apple Music" />
          </div>
        </motion.section>

        <motion.section className="mt-20" {...sectionReveal}>
          <h2 className="font-display text-2xl text-ink md:text-3xl">discography</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DISCOGRAPHY.map((release) => (
              <AlbumCard key={release.title} {...release} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
