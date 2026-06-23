import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import VanityMirrorModal from "../components/easter-eggs/VanityMirrorModal";
import { LINKS } from "../data/links";
import { ARTIST, BIO, DEBUT_EP, IMAGES } from "../data/content";

const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

function GlitterParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        id: i,
        left: `${8 + Math.random() * 84}%`,
        top: `${10 + Math.random() * 80}%`,
        size: 2 + Math.floor(Math.random() * 5),
        color: Math.random() > 0.35 ? "#FFFFFF" : "#D4D4D4",
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
            opacity: 0.35 + Math.random() * 0.55,
            boxShadow: "0 0 8px rgba(255,255,255,0.75)",
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
    <section className="film-grain relative -mt-16 flex min-h-screen items-center justify-center overflow-hidden bg-ink pt-16 md:-mt-[4.5rem] md:pt-[4.5rem]">
      <div
        className="photo-bw absolute inset-0 animate-ken-burns bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
        role="img"
        aria-label="Anna Viola"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0A0A0A 0%, transparent 45%, transparent 65%, #0A0A0A 100%)",
        }}
      />

      <GlitterParticles />

      <div className="relative z-10 px-6 text-center">
        <motion.h1
          className="text-glow font-display tracking-wide text-white"
          style={{ fontSize: "clamp(48px, 7vw, 88px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {ARTIST.name}
        </motion.h1>
        <motion.p
          className="mt-5 font-body text-[13px] tracking-[0.25em] text-white/60 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          {DEBUT_EP.title} — debut EP out July 1
        </motion.p>
        <motion.a
          href={LINKS.silverSecrets}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-luxe btn-luxe-light mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          stream singles
        </motion.a>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 animate-scroll-bounce">
        <div className="h-10 w-px bg-white/30" />
        <span className="font-body text-[11px] tracking-[0.2em] text-white/30 uppercase">
          scroll
        </span>
      </div>

      <button
        type="button"
        className="absolute bottom-6 right-6 z-20 h-10 w-10 opacity-0"
        onClick={() => setMirrorOpen(true)}
        aria-label="Open vanity mirror"
      />

      <VanityMirrorModal isOpen={mirrorOpen} onClose={() => setMirrorOpen(false)} />
    </section>
  );
}

function ArtistIntro() {
  return (
    <motion.section className="bg-white px-6 py-20 md:py-28" {...sectionReveal}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <p className="font-body text-[11px] tracking-[0.3em] text-ink/40 uppercase">
            {ARTIST.location}
          </p>
          <h2 className="text-glow mt-3 font-display text-4xl tracking-wide text-ink md:text-5xl">
            {ARTIST.name}
          </h2>
          <ChalkUnderline />
          <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-ink/75">
            {BIO.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div
            className="film-grain frame-luxe img-zoom-wrap relative w-full max-w-sm border border-ink/15 p-1"
            style={{ boxShadow: "8px 8px 0 rgba(0, 0, 0, 0.06)" }}
          >
            <img
              src={IMAGES.about}
              alt="Anna Viola — Silver Secrets"
              className="photo-bw img-zoom aspect-[4/5] w-full object-cover object-top"
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
      className="film-grain border-t border-white/10 bg-ink px-6 py-20 md:py-28"
      {...sectionReveal}
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-body text-[11px] tracking-[0.3em] text-white/40 uppercase">
          debut EP
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-wide text-white md:text-4xl">
          {DEBUT_EP.title}
        </h2>
        <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-white/55">
          {DEBUT_EP.description}
        </p>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <a
            href={LINKS.silverSecrets}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto block w-full max-w-[280px]"
          >
            <div
              className="img-zoom-wrap aspect-square overflow-hidden border border-white/10 transition-colors duration-500 group-hover:border-white/50"
              style={{ boxShadow: "0 0 48px rgba(255, 255, 255, 0.06)" }}
            >
              <img
                src={DEBUT_EP.coverImage}
                alt={`${DEBUT_EP.title} cover art`}
                className="photo-bw img-zoom h-full w-full object-cover"
              />
            </div>
          </a>

          <div>
            <p className="font-body text-sm text-white/50">
              Stream singles and unlock the full EP experience on{" "}
              <a
                href={LINKS.silverSecrets}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
              >
                PUSH.fm
              </a>
              .
            </p>

            <div
              id="spotify-embed"
              className="mt-8 flex min-h-[152px] items-center justify-center rounded border border-white/10 bg-white/5 px-6 py-8"
            >
              <div className="text-center">
                <p className="font-display text-lg text-white">Silver Secrets</p>
                <p className="mt-2 font-body text-sm text-white/45">
                  Listen on Apple Music, Amazon, Tidal &amp; more
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={LINKS.silverSecrets}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxe btn-luxe-fill"
              >
                listen now
              </a>
              <a
                href={LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxe btn-luxe-ghost"
              >
                spotify
              </a>
            </div>
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
        description="Anna Viola — Silver Secrets debut EP. Vancouver-based pop. Stream singles, watch videos, and connect."
        path="/"
      />
      <HeroSection />
      <ArtistIntro />
      <FeaturedRelease />
    </>
  );
}
