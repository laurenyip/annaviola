import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import NewsletterSignup from "../components/NewsletterSignup";
import { UPDATES } from "../data/content";

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

function Masthead() {
  const today = new Date().toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="newspaper-masthead border-b-2 border-white/15 pb-6 text-center">
      <p className="newspaper-kicker font-body text-[10px] tracking-[0.35em] text-xray uppercase">
        Vancouver · Pop · Poetry
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-wide text-ivory md:text-6xl">
        The Dispatch
      </h1>
      <p className="mt-2 font-body text-[11px] tracking-[0.2em] text-white/45 uppercase">
        Anna Viola — Official Bulletin
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-body text-[11px] text-white/35">
        <span>{today}</span>
        <span aria-hidden="true">·</span>
        <span>Vol. I</span>
        <span aria-hidden="true">·</span>
        <span>Est. 2025</span>
      </div>
    </header>
  );
}

function UpdateArticle({ update, featured = false }) {
  return (
    <article className={featured ? "newspaper-feature" : ""}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="newspaper-kicker font-body text-[10px] tracking-[0.25em] text-xray uppercase">
          {update.section}
        </span>
        <span className="font-body text-[11px] text-white/35">{update.date}</span>
      </div>

      <h2
        className={`mt-2 font-display leading-tight tracking-wide text-ivory ${
          featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
        }`}
      >
        {update.headline}
      </h2>

      {update.image && (
        <div className="mt-4 overflow-hidden border border-white/10">
          <img
            src={update.image}
            alt=""
            className="aspect-square w-full max-w-xs object-cover"
          />
          <p className="border-t border-white/10 px-2 py-1 font-body text-[10px] text-white/35 italic">
            Cover art — {update.headline}
          </p>
        </div>
      )}

      <p
        className={`mt-3 font-body leading-relaxed text-white/60 ${
          featured ? "text-base md:columns-2 md:gap-8 md:text-[15px]" : "text-sm"
        }`}
      >
        {update.dek}
      </p>

      {update.href && (
        <a
          href={update.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-shimmer mt-4 inline-block font-body text-[12px] tracking-[0.12em] text-ivory uppercase"
        >
          {update.cta} →
        </a>
      )}
    </article>
  );
}

export default function Updates() {
  const [featured, ...rest] = UPDATES;

  return (
    <div className="newspaper-page min-h-screen bg-ink px-6 py-16 md:py-24">
      <Seo
        title="Updates"
        description="News, releases, and announcements from Anna Viola — Silver Secrets EP, music videos, and more."
        path="/updates"
      />

      <div className="mx-auto max-w-4xl">
        <motion.div {...sectionReveal}>
          <Masthead />
        </motion.div>

        <motion.section className="mt-10 border-b border-white/10 pb-10" {...sectionReveal}>
          <UpdateArticle update={featured} featured />
        </motion.section>

        <motion.section
          className="mt-10 grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2"
          {...sectionReveal}
        >
          {rest.map((update) => (
            <UpdateArticle key={update.id} update={update} />
          ))}
        </motion.section>

        <motion.aside
          className="newspaper-signup mt-10 border border-white/15 bg-white/[0.03] p-6 md:p-8"
          {...sectionReveal}
        >
          <div className="border-b border-white/10 pb-4">
            <p className="newspaper-kicker font-body text-[10px] tracking-[0.3em] text-xray uppercase">
              Mailing List
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-wide text-ivory md:text-3xl">
              Get the bulletin in your inbox
            </h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-white/50">
              Be first to know when music videos premiere, new singles drop, and the
              full EP goes live.
            </p>
          </div>
          <NewsletterSignup className="mt-6" />
        </motion.aside>

        <p className="mt-10 text-center font-body text-[11px] text-white/30">
          <Link
            to="/"
            className="underline decoration-white/20 underline-offset-2 hover:text-xray"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
