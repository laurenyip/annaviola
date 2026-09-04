import { useState } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import CoverCanvas from "../components/CoverCanvas";
import { LINKS } from "../data/links";
import { SINGLES } from "../data/content";
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

function ReleaseCard({ title, image, canvas, href, isNew }) {
  const [hovering, setHovering] = useState(false);

  const inner = (
    <>
      <div className="img-zoom-wrap relative mx-auto aspect-square w-full overflow-hidden">
        {isNew && (
          <span className="absolute left-2.5 top-2.5 z-10 font-body text-[10px] tracking-[0.15em] text-white uppercase">
            New
          </span>
        )}
        {image ? (
          <CoverCanvas
            image={image}
            canvas={canvas}
            playing={Boolean(canvas && hovering)}
            alt={`${title} cover`}
            className="h-full w-full"
            imgClassName="photo-bw img-zoom h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-white/5">
            <span className="font-display text-3xl text-white/30">{title[0]}</span>
          </div>
        )}
      </div>
      <div className="pt-3 text-center">
        <h3 className="font-display text-base tracking-wide text-white md:text-lg">
          {title}
        </h3>
      </div>
    </>
  );

  const hoverHandlers = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
    onFocus: () => setHovering(true),
    onBlur: () => setHovering(false),
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        {...hoverHandlers}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article className="group" {...hoverHandlers}>
      {inner}
    </motion.article>
  );
}

export default function Music() {
  return (
    <div className="bg-ink px-6 py-16 text-ivory md:py-24">
      <Seo
        title="Music"
        description="Stream Anna Viola — Parallel Lines, Right Time, Wrong Person, Silver Secrets, Pedestal, and more."
        path="/music"
      />
      <div className="mx-auto max-w-6xl">
        <motion.section {...sectionReveal}>
          <h2 className="sr-only">Streaming platforms</h2>
          <p className="text-center font-body text-[11px] tracking-[0.3em] text-xray/70 uppercase">
            stream everywhere
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {PLATFORMS.map((platform) => (
              <PlatformBadge key={platform.name} {...platform} />
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-16" {...sectionReveal}>
          <h2 className="text-center font-display text-2xl tracking-wide text-white md:text-3xl">
            Singles
          </h2>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:gap-4 md:max-w-3xl md:gap-5">
            {SINGLES.map((release) => (
              <ReleaseCard key={release.title} {...release} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
