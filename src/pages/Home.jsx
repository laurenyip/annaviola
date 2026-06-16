import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import VanityMirrorModal from "../components/easter-eggs/VanityMirrorModal";
import { LINKS } from "../data/links";
const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const TRACKS = [
  { number: "01", title: "Velvet Hour" },
  { number: "02", title: "Midnight in Bombay" },
  { number: "03", title: "Golden Vanity" },
];

function GlitterParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: `${8 + Math.random() * 84}%`,
        top: `${10 + Math.random() * 80}%`,
        size: 2 + Math.floor(Math.random() * 5),
        color: Math.random() > 0.4 ? "#FFFFFF" : "#D4D4D4",
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 3,
        reverse: i % 2 === 0,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${p.reverse ? "animate-float-reverse" : "animate-float"}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: 0.4 + Math.random() * 0.5,
            boxShadow: "0 0 6px rgba(255,255,255,0.6)",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function ChalkUnderline() {
  return (
    <motion.svg
      viewBox="0 0 200 12"
      className="mt-2 h-3 w-48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.path
        d="M2 8 C 30 2, 55 11, 85 6 S 140 3, 198 7"
        stroke="#D4D4D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        style={{ strokeDasharray: 1, strokeDashoffset: 0 }}
      />
    </motion.svg>
  );
}

function HeroSection() {
  const [mirrorOpen, setMirrorOpen] = useState(false);

  return (
    <section className="relative -mt-16 flex min-h-screen items-center justify-center overflow-hidden bg-ink pt-16">      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
        role="img"
        aria-label="Anna Viola hero portrait"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0D0D0D 0%, transparent 40%, transparent 70%, #0D0D0D 100%)",
        }}
      />

      <GlitterParticles />

      <div className="relative z-10 px-6 text-center">
        <motion.h1
          className="font-display italic text-ivory"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          annaviolaa
        </motion.h1>
        <motion.p
          className="mt-4 font-body text-[13px] tracking-[0.2em] text-ivory/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          debut album out now
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 animate-scroll-bounce">
        <div className="h-10 w-px bg-ivory/40" />
        <span className="font-body text-[11px] tracking-[0.2em] text-ivory/40 uppercase">
          scroll
        </span>
      </div>

      <button
        type="button"
        className="absolute bottom-6 right-6 z-20 h-10 w-10 cursor-none opacity-0"
        onClick={() => setMirrorOpen(true)}
        aria-label="Open vanity mirror"
      />

      <VanityMirrorModal isOpen={mirrorOpen} onClose={() => setMirrorOpen(false)} />
    </section>
  );
}
function ArtistIntro() {
  return (
    <motion.section
      className="bg-white px-6 py-20 md:py-28"
      {...sectionReveal}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-script text-[48px] leading-none text-ink">about</h2>
          <ChalkUnderline />
          <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-ink/80">
            <p>
              Anna Viola is a 23-year-old pop artist weaving Indian glamour with the
              cinematic elegance of Old Hollywood — think velvet curtains, gold light,
              and the hush before the spotlight finds you.
            </p>
            <p>
              Raised between Bombay nights and vintage film reels, her sound pairs lush
              melodies with stories of desire, diaspora, and dressing for the life you
              want. Every track feels like stepping into a vanity mirror at midnight.
            </p>
            <p>
              Her debut album marks the first chapter of a world built on lace, lilac,
              and unapologetic glamour — a invitation to stay a little longer.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div
            className="relative w-full max-w-sm border border-silver p-1"
            style={{ boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.08)" }}
          >
            <img
              src="/images/portrait.jpg"
              alt="Anna Viola portrait"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function FeaturedRelease() {
  return (
    <motion.section
      className="border-t border-ink bg-ink px-6 py-20 md:py-28"
      {...sectionReveal}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl text-ivory md:text-4xl">latest release</h2>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div
            className="mx-auto aspect-square w-full max-w-[280px] bg-ink/30"
            style={{ boxShadow: "0 0 40px rgba(255, 255, 255, 0.08)" }}
          >
            <div className="flex h-full w-full items-center justify-center border border-ivory/10">
              <span className="font-script text-4xl text-ivory/40">album art</span>
            </div>
          </div>

          <div>
            <ol className="space-y-1">
              {TRACKS.map((track) => (
                <li
                  key={track.number}
                  className="group flex items-baseline gap-4 border-l-2 border-transparent px-4 py-3 font-body text-sm text-ivory/70 transition-all duration-200 hover:border-silver hover:text-ivory"
                >
                  <span className="text-ivory/40">{track.number}</span>
                  <span>{track.title}</span>
                </li>
              ))}
            </ol>

            <div
              id="spotify-embed"
              className="mt-10 flex h-[152px] items-center justify-center rounded border border-ivory/10 bg-ink/20"
            >
              <p className="font-body text-sm text-ivory/40">
                Spotify embed placeholder — replace with iframe
              </p>
            </div>

            <a
              href={LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border border-ivory bg-transparent px-8 py-3 font-body text-[13px] tracking-[0.15em] text-ivory uppercase transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              listen now
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Anna Viola"
        description="Anna Viola — debut album out now. Indian Glam × Old Hollywood pop. Stream music, watch videos, and connect."
        path="/"
      />
      <HeroSection />
      <ArtistIntro />
      <FeaturedRelease />
    </>
  );
}