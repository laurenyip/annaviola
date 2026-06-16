import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "../components/Seo";
import {
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
  SpotifyIcon,
  AppleMusicIcon,
  YouTubeMusicIcon,
  AmazonMusicIcon,
  TidalIcon,
  ArrowIcon,
  SpinnerIcon,
} from "../components/icons";
import { LINKS, HANDLE } from "../data/links";
import { ARTIST } from "../data/content";

const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const SOCIALS = [
  { name: "Instagram", handle: HANDLE, href: LINKS.instagram },
  { name: "TikTok", handle: HANDLE, href: LINKS.tiktok },
  { name: "YouTube", handle: HANDLE, href: LINKS.youtube },
  { name: "Spotify", handle: "Anna Viola", href: LINKS.spotify },
];

const STREAMING = [
  { name: "Silver Secrets", icon: SpotifyIcon, href: LINKS.silverSecrets },
  { name: "Spotify", icon: SpotifyIcon, href: LINKS.spotify },
  { name: "Apple Music", icon: AppleMusicIcon, href: LINKS.appleMusic },
  { name: "YouTube Music", icon: YouTubeMusicIcon, href: LINKS.youtubeMusic },
  { name: "Amazon Music", icon: AmazonMusicIcon, href: LINKS.amazonMusic },
  { name: "Tidal", icon: TidalIcon, href: LINKS.tidal },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SocialCard({ name, handle, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded border border-white/5 bg-ink/80 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
    >
      <div>
        <p className="font-display text-lg text-ivory">{name}</p>
        <p className="mt-1 font-body text-[13px] text-ivory/60">{handle}</p>
      </div>
      <ArrowIcon className="text-ivory/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ivory" />
    </a>
  );
}

function StreamingRow({ name, icon: Icon, href }) {
  return (
    <a
      href={href}
      className="group flex min-w-[200px] shrink-0 items-center gap-3 border-b border-ivory/20 py-4 font-body text-sm text-ivory transition-colors duration-200 hover:text-silver md:min-w-0"
      style={{ borderBottomWidth: "0.5px" }}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="flex-1">{name}</span>
      <span className="text-ivory/40 transition-colors duration-200 group-hover:text-silver">
        open
      </span>
    </a>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!EMAIL_RE.test(email.trim())) {
      setError("please enter a valid email");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="mx-auto w-full max-w-[480px] text-center">
      <h2 className="font-display text-3xl italic text-ivory md:text-4xl">
        stay in the loop
      </h2>
      <p className="mt-3 font-body text-[13px] text-ivory/60">
        new music, tour dates, and secrets
      </p>

      <div className="mt-8 min-h-[52px]">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.p
              key="success"
              className="font-script text-[32px] text-silver"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              you&apos;re on the list ✦
            </motion.p>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <div className="text-left">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="your@email.com"
                  disabled={status === "submitting"}
                  className="w-full border border-ivory/60 bg-transparent px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory/40 transition-colors duration-200 focus:border-white focus:outline-none disabled:opacity-60"
                  aria-label="Email address"
                  aria-invalid={!!error}
                  aria-describedby={error ? "email-error" : undefined}
                />
                {error && (
                  <p id="email-error" className="mt-2 font-body text-xs text-[#E07A6A]">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3 font-body text-[13px] text-ink transition-colors duration-200 hover:bg-ivory disabled:opacity-80"
              >
                {status === "submitting" ? (
                  <>
                    <SpinnerIcon />
                    <span className="sr-only">Subscribing</span>
                  </>
                ) : (
                  "subscribe"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Connect() {
  return (
    <div className="bg-ink px-6 py-16 text-ivory md:py-24">
      <Seo
        title="Connect"
        description="Follow Anna Viola — stream Silver Secrets, join the newsletter, and connect on social."
        path="/connect"
      />
      <div className="mx-auto max-w-6xl">
        <motion.section {...sectionReveal}>
          <h1 className="font-script text-[56px] leading-none text-silver">find me</h1>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SOCIALS.map((social) => (
              <SocialCard key={social.name} {...social} />
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-20" {...sectionReveal}>
          <h2 className="font-display text-3xl italic md:text-4xl">stream</h2>
          <div className="mt-8 flex gap-8 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-x-12 md:overflow-visible lg:grid-cols-3">
            {STREAMING.map((platform) => (
              <div key={platform.name} className="min-w-[220px] shrink-0 md:min-w-0 md:shrink">
                <StreamingRow {...platform} />
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-20" {...sectionReveal}>
          <NewsletterForm />
          <p className="mt-10 text-center font-body text-sm text-ivory/70">
            {ARTIST.location} · For bookings &amp; press:{" "}
            <a
              href="mailto:hello@annaviola.com"
              className="text-ivory/90 underline decoration-white/20 underline-offset-2 transition-colors hover:text-silver"
            >
              hello@annaviola.com
            </a>
          </p>
        </motion.section>
      </div>
    </div>
  );
}
