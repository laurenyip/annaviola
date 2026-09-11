import NewsletterSignup from "./NewsletterSignup";

/** Sitewide email collection — sits above the footer, not inside it. */
export default function NewsletterBand() {
  return (
    <section
      className="relative z-10 border-t border-white/10 bg-transparent px-6 py-14 md:py-16"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-lg text-center">
        <p className="font-body text-[11px] tracking-[0.3em] text-xray uppercase">
          Stay close
        </p>
        <h2
          id="newsletter-heading"
          className="mt-3 font-display text-2xl tracking-wide text-white md:text-3xl"
        >
          Join the list
        </h2>
        <p className="mt-3 font-body text-sm leading-relaxed text-white/70">
          Be first for singles, the Silver Secrets EP, and everything else on
          the way.
        </p>
        <NewsletterSignup className="mt-6 text-left" compact id="site-newsletter-email" />
      </div>
    </section>
  );
}
