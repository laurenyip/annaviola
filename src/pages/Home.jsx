import { motion } from "framer-motion";
import Seo from "../components/Seo";
import SequinEmbroideryBorder from "../components/SequinEmbroideryBorder";
import {
  DEBUT_EP,
  DOCUMENTARY,
  IMAGES,
  SINGLES,
} from "../data/content";

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

function HeroPortrait() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[200px] sm:max-w-[240px]"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    >
      <div className="film-grain relative w-full overflow-hidden bg-ink">
        <img
          src={IMAGES.hero}
          alt="Anna Viola"
          className="photo-bw aspect-[3/4] w-full object-cover object-top"
        />
      </div>
    </motion.div>
  );
}

function NewspaperHeadline({ kicker, date, headline, dek, href, cta }) {
  return (
    <article className="text-center">
      <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
        {kicker && (
          <span className="newspaper-kicker font-body text-xs tracking-[0.25em] text-xray uppercase">
            {kicker}
          </span>
        )}
        {date && (
          <span className="font-body text-sm text-white/75">{date}</span>
        )}
      </div>

      <h2 className="mt-2 font-display text-2xl leading-tight tracking-wide text-white sm:text-3xl">
        {headline}
      </h2>

      {dek && (
        <p className="mt-3 font-body text-base leading-relaxed text-white/80">
          {dek}
        </p>
      )}

      {href && cta && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-shimmer mt-4 inline-block font-body text-[13px] tracking-[0.12em] text-ivory uppercase"
        >
          {cta} →
        </a>
      )}
    </article>
  );
}

function SingleRow({ single }) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden bg-white/5 sm:h-20 sm:w-20">
        {single.image ? (
          <img
            src={single.image}
            alt=""
            className="photo-bw h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-lg text-white/45">{single.title[0]}</span>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        {single.isNew && (
          <span className="mb-1 inline-block font-body text-[11px] tracking-[0.15em] text-xray uppercase">
            New
          </span>
        )}
        <h3 className="font-display text-2xl tracking-wide text-ivory sm:text-3xl">
          {single.title}
        </h3>
      </div>

      {single.href && (
        <span
          className="shrink-0 text-white transition-colors group-hover:text-xray"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 1.5C12.9 7.2 16.8 11.1 22.5 12 16.8 12.9 12.9 16.8 12 22.5 11.1 16.8 7.2 12.9 1.5 12 7.2 11.1 11.1 7.2 12 1.5Z" />
          </svg>
        </span>
      )}
    </div>
  );

  if (single.href) {
    return (
      <a
        href={single.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border-b border-white/10 py-4 transition-colors hover:border-xray/25"
      >
        {inner}
      </a>
    );
  }

  return <div className="border-b border-white/10 py-4">{inner}</div>;
}

export default function Home() {
  return (
    <div className="newspaper-page relative min-h-screen">
      <Seo
        title="Anna Viola"
        description="Anna Viola — debut EP Silver Secrets and documentary arriving November 2026."
        path="/"
      />

      <SequinEmbroideryBorder />

      <div className="relative z-10 mx-auto max-w-lg px-6 py-10 md:py-14">
        <HeroPortrait />

        <motion.section className="mt-10 border-t-2 border-white/25 pt-8" {...sectionReveal}>
          <h1 className="newspaper-kicker text-center font-body text-sm tracking-[0.3em] text-xray uppercase">
            Releases
          </h1>
          <div className="mt-6">
            <NewspaperHeadline
              date={DEBUT_EP.releaseDate}
              headline={`${DEBUT_EP.title} — Debut ${DEBUT_EP.type}`}
              dek="The debut EP arrives November 2026 — poetry turned melody, silver linings wrapped in vulnerability."
            />
          </div>
        </motion.section>

        <motion.section className="mt-10" {...sectionReveal}>
          <p className="newspaper-kicker mb-2 text-center font-body text-xs tracking-[0.3em] text-white/75 uppercase">
            Singles
          </p>
          {SINGLES.map((single) => (
            <SingleRow key={single.title} single={single} />
          ))}
        </motion.section>

        <motion.section className="mt-10 border-t border-white/10 pt-8 pb-4" {...sectionReveal}>
          <NewspaperHeadline
            kicker="Film"
            date={DOCUMENTARY.releaseDate}
            headline={`${DOCUMENTARY.title} — Out in November`}
            dek={DOCUMENTARY.description}
          />
        </motion.section>
      </div>
    </div>
  );
}
