import { motion } from "framer-motion";
import Seo from "../components/Seo";
import PageLogo from "../components/PageLogo";
import SequinEmbroideryBorder from "../components/SequinEmbroideryBorder";
import { LINKS } from "../data/links";
import { DEBUT_EP, IMAGES, SINGLES } from "../data/content";

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

function NewspaperHeadline({ kicker, date, headline, dek, href, cta, featured = false }) {
  return (
    <article className={featured ? "newspaper-feature text-center" : ""}>
      <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
        <span className="newspaper-kicker font-body text-xs tracking-[0.25em] text-xray uppercase">
          {kicker}
        </span>
        {date && (
          <span className="font-body text-[13px] text-white/35">{date}</span>
        )}
      </div>

      <h2
        className={`mt-2 font-display leading-tight tracking-wide text-ivory ${
          featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
        }`}
      >
        {headline}
      </h2>

      {dek && (
        <p
          className={`mt-3 font-body leading-relaxed text-white/55 ${
            featured ? "text-base sm:text-lg" : "text-base"
          }`}
        >
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

function SingleRow({ single, prominent = false }) {
  const inner = (
    <div className="flex items-center gap-4">
      <div
        className={`img-zoom-wrap shrink-0 overflow-hidden border border-white/10 bg-white/5 ${
          prominent ? "h-24 w-24" : "h-[4.5rem] w-[4.5rem]"
        }`}
      >
        {single.image ? (
          <img
            src={single.image}
            alt=""
            className="photo-bw img-zoom h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-lg text-white/15">{single.title[0]}</span>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {single.isNew && (
            <span className="rounded-full border border-xray/40 px-2.5 py-0.5 font-body text-[11px] tracking-[0.15em] text-xray uppercase">
              New
            </span>
          )}
          <span className="font-body text-xs tracking-[0.2em] text-white/35 uppercase">
            {single.type}
          </span>
        </div>
        <h3
          className={`mt-0.5 font-display tracking-wide text-ivory ${
            prominent ? "text-2xl" : "text-lg"
          }`}
        >
          {single.title}
        </h3>
        <p className="font-body text-[13px] text-white/40">{single.year}</p>
      </div>

      {single.href && (
        <span className="shrink-0 font-body text-xs tracking-[0.1em] text-white/30 uppercase group-hover:text-xray">
          →
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
  const recentSingle = SINGLES.find((s) => s.isNew) ?? SINGLES[0];
  const olderSingles = SINGLES.filter((s) => s !== recentSingle);

  return (
    <div className="newspaper-page relative min-h-screen bg-black">
      <Seo
        title="Anna Viola"
        description="Anna Viola — Silver Secrets debut EP out July 1, 2026. Stream singles, watch videos, and connect."
        path="/"
      />

      <SequinEmbroideryBorder />

      <div className="relative z-10 mx-auto max-w-lg px-6 py-10 md:py-14">
        <PageLogo variant="light" className="mb-8 [&_a]:lowercase" />

        <HeroPortrait />

        <motion.section className="mt-10 border-t-2 border-white/15 pt-8" {...sectionReveal}>
          <NewspaperHeadline
            featured
            kicker="Releases"
            date={DEBUT_EP.releaseDate}
            headline={`${DEBUT_EP.title} — Debut ${DEBUT_EP.type}`}
            dek="The debut EP arrives this summer — poetry turned melody, silver linings wrapped in vulnerability. Pre-save now and be first in line when every secret drops."
            href={LINKS.silverSecrets}
            cta="Pre-save EP"
          />
        </motion.section>

        <motion.section className="mt-10" {...sectionReveal}>
          <p className="newspaper-kicker mb-4 text-center font-body text-xs tracking-[0.3em] text-xray uppercase">
            Latest Single
          </p>
          <SingleRow single={recentSingle} prominent />
        </motion.section>

        <motion.section className="mt-6" {...sectionReveal}>
          <p className="newspaper-kicker mb-2 text-center font-body text-xs tracking-[0.3em] text-white/40 uppercase">
            Singles
          </p>
          {olderSingles.map((single) => (
            <SingleRow key={single.title} single={single} />
          ))}
        </motion.section>
      </div>
    </div>
  );
}
