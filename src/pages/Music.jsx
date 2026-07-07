import { motion } from "framer-motion";
import Seo from "../components/Seo";
import PageLogo from "../components/PageLogo";
import { LINKS } from "../data/links";
import { DISCOGRAPHY, SINGLES } from "../data/content";
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
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-body text-[13px] text-ivory transition-all duration-500 ease-luxe-out hover:scale-[1.05] hover:border-xray/50 hover:bg-xray/10 hover:shadow-[0_4px_20px_rgba(126,200,220,0.12)]"
    >
      <Icon className="h-4 w-4 shrink-0" />
      {name}
    </a>
  );
}

function ReleaseCard({ title, year, type, image, href, isNew }) {
  const inner = (
    <>
      <div className="img-zoom-wrap relative aspect-square overflow-hidden bg-white/5">
        {isNew && (
          <span className="absolute left-3 top-3 z-10 rounded-full border border-xray/40 bg-ink/80 px-2 py-0.5 font-body text-[10px] tracking-[0.15em] text-xray uppercase">
            New
          </span>
        )}
        {image ? (
          <img
            src={image}
            alt={`${title} cover`}
            className="photo-bw img-zoom h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-3xl text-white/15">{title[0]}</span>
          </div>
        )}
      </div>
      <div className="border-t border-white/10 p-4 group-hover:border-xray/40">
        <h3 className="font-display text-base text-ivory">{title}</h3>
        <p className="mt-1 font-body text-xs text-white/45">
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
        className="group card-luxe block overflow-hidden rounded border border-white/10 bg-white/[0.03] hover:border-xray/30"
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article className="group card-luxe overflow-hidden rounded border border-white/10 bg-white/[0.03] hover:border-xray/30">
      {inner}
    </motion.article>
  );
}

export default function Music() {
  return (
    <div className="bg-ink px-6 py-16 text-ivory md:py-24">
      <Seo
        title="Music"
        description="Stream Anna Viola — Right Time, Wrong Person, Silver Secrets, Pedestal, and more."
        path="/music"
      />
      <div className="mx-auto max-w-6xl">
        <PageLogo variant="light" />

        <motion.div className="mt-8 flex justify-center" {...sectionReveal}>
          <p className="announcement-ribbon">new album out soon</p>
        </motion.div>

        <motion.section className="mt-16" {...sectionReveal}>
          <h2 className="font-display text-2xl tracking-wide text-ivory md:text-3xl">
            Singles
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SINGLES.map((release) => (
              <ReleaseCard key={release.title} {...release} />
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-20" {...sectionReveal}>
          <h2 className="sr-only">Streaming platforms</h2>
          <p className="font-body text-[11px] tracking-[0.3em] text-xray/70 uppercase">
            stream everywhere
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {PLATFORMS.map((platform) => (
              <PlatformBadge key={platform.name} {...platform} />
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-20" {...sectionReveal}>
          <h2 className="font-display text-2xl tracking-wide text-ivory md:text-3xl">
            Discography
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
