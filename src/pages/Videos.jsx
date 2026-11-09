import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { LINKS } from "../data/links";

const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

/** From youtube.com/@annaviolaaa. The channel's only full-length video. */
const FEATURED = {
  embedId: "0A9ni6P3u1A",
  title: "Silver Secrets — Official Lyric Video",
};

/** Song-related Shorts from the channel, titles as she wrote them (hashtags dropped). */
const SHORTS = [
  { embedId: "ixxu_npSZDI", title: "Parallel Lines" },
  { embedId: "_fIDWK0eYiY", title: "we’ll always be parallel lines" },
  { embedId: "iIaWXrdm3Kg", title: "unravelled scenes" },
  { embedId: "vixQCGFVIBM", title: "you emptied me clean" },
  { embedId: "XxZBPndmPg8", title: "loving the wrong person can almost delete you" },
  { embedId: "qW_-iyQGl0M", title: "it’s always right time wrong person" },
];

function StarDivider() {
  return (
    <div className="flex items-center gap-4 py-10" aria-hidden="true">
      <div className="h-px flex-1 bg-ivory/15" />
      <span className="text-xs leading-none text-silver">★</span>
      <div className="h-px flex-1 bg-ivory/15" />
    </div>
  );
}

function VideoEmbed({ embedId, title, vertical = false }) {
  return (
    <article>
      <div
        className={`relative overflow-hidden rounded bg-ink/50 ${
          vertical ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        {/* youtube-nocookie: no YouTube cookies until a visitor presses play. */}
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${embedId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <p className="mt-3 font-body text-sm text-ivory/80">{title}</p>
    </article>
  );
}

export default function Videos() {
  return (
    <div className="bg-transparent px-6 py-16 text-ivory md:py-24">
      <Seo
        title="Videos"
        description="Watch Anna Viola's official lyric video for Silver Secrets and her latest Shorts."
        path="/videos"
      />
      <div className="mx-auto max-w-5xl">
        <motion.section {...sectionReveal}>
          <VideoEmbed {...FEATURED} />
        </motion.section>

        <StarDivider />

        <motion.section {...sectionReveal} aria-labelledby="shorts-heading">
          <h2
            id="shorts-heading"
            className="mb-6 text-center font-display text-2xl tracking-wide text-white md:text-3xl"
          >
            Shorts
          </h2>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {SHORTS.map((short) => (
              <VideoEmbed key={short.embedId} {...short} vertical />
            ))}
          </div>

          <p className="mt-10 text-center">
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="link-shimmer inline-flex min-h-11 items-center font-body text-[13px] tracking-[0.12em] text-ivory uppercase"
            >
              More on YouTube →
            </a>
          </p>
        </motion.section>
      </div>
    </div>
  );
}
