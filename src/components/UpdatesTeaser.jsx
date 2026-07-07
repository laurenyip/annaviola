import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NewsletterSignup from "./NewsletterSignup";
import { UPDATES } from "../data/content";

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

/** Compact newspaper strip for the home page — links to full bulletin. */
export default function UpdatesTeaser() {
  const latest = UPDATES[0];

  return (
    <motion.section
      className="newspaper-page border-t border-white/10 bg-ink px-6 py-16 md:py-20"
      {...sectionReveal}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-white/15 pb-4">
          <div>
            <p className="newspaper-kicker font-body text-[10px] tracking-[0.35em] text-xray uppercase">
              The Dispatch
            </p>
            <h2 className="mt-1 font-display text-2xl tracking-wide text-ivory md:text-3xl">
              Latest
            </h2>
          </div>
          <Link
            to="/updates"
            className="font-body text-[11px] tracking-[0.15em] text-white/45 uppercase underline decoration-xray/30 underline-offset-4 hover:text-xray"
          >
            All updates →
          </Link>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <article>
            <p className="font-body text-[11px] text-xray/70">{latest.date}</p>
            <h3 className="mt-2 font-display text-xl tracking-wide text-ivory md:text-2xl">
              {latest.headline}
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-white/55">
              {latest.dek}
            </p>
          </article>

          <div className="newspaper-signup border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <p className="newspaper-kicker font-body text-[10px] tracking-[0.3em] text-xray uppercase">
              Join the list
            </p>
            <p className="mt-2 font-body text-sm text-white/50">
              Videos, singles, EP news — straight to you.
            </p>
            <NewsletterSignup className="mt-4" compact />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
