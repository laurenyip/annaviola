import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CursorSheen from "./CursorSheen";
import { DEBUT_EP, TRACKS } from "../data/content";

const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

function TrackSlide({ track, opacity, scale }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{ opacity, scale }}
      aria-hidden={false}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <p className="font-body text-[11px] tracking-[0.35em] text-white/35 uppercase">
            track {track.trackNumber}
            {track.isNew && (
              <span className="ml-3 text-xray">· new</span>
            )}
          </p>
          <h3
            className="mt-3 font-display tracking-wide text-white"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {track.title}
          </h3>
          <p className="mt-2 font-body text-sm tracking-[0.15em] text-white/40">
            {track.year}
          </p>
        </div>

        <div>
          <p className="font-body text-base leading-relaxed text-white/60 md:text-lg">
            {track.blurb}
          </p>
          {track.href && (
            <a
              href={track.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxe btn-luxe-ghost mt-8"
            >
              {track.isEpTeaser ? "pre-save EP" : "listen"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function getOpacityRanges(index, total) {
  if (total === 1) {
    return { input: [0, 1], output: [1, 1] };
  }

  const step = 1 / (total - 1);
  const center = index * step;
  const fade = step * 0.35;

  if (index === 0) {
    return {
      input: [0, center + fade, center + fade * 2],
      output: [1, 1, 0],
    };
  }

  if (index === total - 1) {
    return {
      input: [center - fade * 2, center - fade, 1],
      output: [0, 1, 1],
    };
  }

  return {
    input: [center - fade * 2, center - fade, center + fade, center + fade * 2],
    output: [0, 1, 1, 0],
  };
}

function TrackLayer({ track, index, total, scrollYProgress }) {
  const { input, output } = getOpacityRanges(index, total);
  const opacity = useTransform(scrollYProgress, input, output);
  const scale = useTransform(opacity, [0, 1], [0.97, 1]);

  return <TrackSlide track={track} opacity={opacity} scale={scale} />;
}

/**
 * Scroll-pinned section that cross-fades between album tracks as the user scrolls.
 */
export default function PinnedTrackReveal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollHeight = `${TRACKS.length * 100}vh`;

  return (
    <motion.section
      className="film-grain border-t border-white/10 bg-ink"
      {...sectionReveal}
    >
      <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28">
        <p className="font-body text-[11px] tracking-[0.3em] text-white/40 uppercase">
          debut EP
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-wide text-white md:text-4xl">
          {DEBUT_EP.title}
        </h2>
      </div>

      <div ref={containerRef} style={{ height: scrollHeight }} className="relative">
        <CursorSheen
          className="sticky top-0 h-screen"
          intensity={0.08}
          size="150%"
        >
          <div className="relative flex h-full items-center overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            aria-hidden="true"
            style={{
              backgroundImage: `url(${DEBUT_EP.coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%) blur(48px)",
              transform: "scale(1.2)",
            }}
          />

          <div className="relative h-full w-full">
            {TRACKS.map((track, i) => (
              <TrackLayer
                key={`${track.trackNumber}-${i}`}
                track={track}
                index={i}
                total={TRACKS.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div
            className="pointer-events-none absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
            aria-hidden="true"
          >
            <div className="flex gap-2">
              {TRACKS.map((track, i) => (
                <div
                  key={track.title}
                  className="h-1 w-6 rounded-full bg-white/20"
                  style={{ opacity: 0.4 + (i === 0 ? 0.6 : 0) }}
                />
              ))}
            </div>
            <span className="font-body text-[10px] tracking-[0.25em] text-white/25 uppercase">
              scroll to explore
            </span>
          </div>
          </div>
        </CursorSheen>
      </div>
    </motion.section>
  );
}
