import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { LINKS } from "../data/links";
import { DEBUT_EP, DISCOGRAPHY, IMAGES, SINGLES } from "../data/content";
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

function ReleaseCard({ title, year, type, image, href }) {
  const inner = (
  <>
      <div className="aspect-square overflow-hidden bg-ink/5">
        {image ? (
          <img
            src={image}
            alt={`${title} cover`}
            className="photo-bw h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-3xl text-ink/15">{title[0]}</span>
          </div>
        )}
      </div>
      <div className="border-t border-ink/10 p-4 group-hover:border-silver">
        <h3 className="font-display text-base text-ink">{title}</h3>
        <p className="mt-1 font-body text-xs text-ink/50">
          {year} · {type}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded border border-ink/10 bg-white transition-colors duration-200 hover:border-silver"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article
      className="group overflow-hidden rounded border border-ink/10 bg-white transition-colors duration-200 hover:border-silver"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {inner}
    </motion.article>
  );
}

export default function Music() {
  return (
    <div className="bg-white px-6 py-16 md:py-24">
      <Seo
        title="Music"
        description="Stream Anna Viola's debut EP Silver Secrets. Singles on Spotify, Apple Music, and more."
        path="/music"
      />
      <div className="mx-auto max-w-6xl">
        <motion.h1
          className="font-display text-5xl uppercase tracking-wide text-ink md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          music
        </motion.h1>

        <motion.section className="mt-14" {...sectionReveal}>
          <div className="film-grain overflow-hidden rounded border border-ink/10 bg-ink">
            <img
              src={IMAGES.hero}
              alt=""
              className="photo-bw h-48 w-full object-cover object-top opacity-60 md:h-64"
              aria-hidden="true"
            />
            <div className="p-8 md:p-12">
            <p className="font-body text-[11px] tracking-[0.3em] text-white/40 uppercase">
              debut EP
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-white md:text-4xl">
              {DEBUT_EP.title}
            </h2>
            <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/55">
              {DEBUT_EP.description}
            </p>
            <a
              href={LINKS.silverSecrets}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border border-white bg-white px-8 py-3 font-body text-[12px] tracking-[0.15em] text-ink uppercase transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              stream on push.fm
            </a>
            </div>
          </div>
        </motion.section>

        <motion.section className="mt-20" {...sectionReveal}>
          <h2 className="font-display text-2xl uppercase tracking-wide text-ink md:text-3xl">
            singles
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SINGLES.map((release) => (
              <ReleaseCard key={release.title} {...release} href={LINKS.silverSecrets} />
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-20" {...sectionReveal}>
          <h2 className="sr-only">Streaming platforms</h2>
          <p className="font-body text-[11px] tracking-[0.3em] text-ink/40 uppercase">
            stream everywhere
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {PLATFORMS.map((platform) => (
              <PlatformBadge key={platform.name} {...platform} />
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-20" {...sectionReveal}>
          <h2 className="font-display text-2xl uppercase tracking-wide text-ink md:text-3xl">
            discography
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DISCOGRAPHY.map((release) => (
              <ReleaseCard key={release.title} {...release} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
