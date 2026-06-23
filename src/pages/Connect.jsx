import { motion } from "framer-motion";
import Seo from "../components/Seo";
import PageLogo from "../components/PageLogo";
import { InstagramIcon, TikTokIcon, YouTubeIcon, SpotifyIcon } from "../components/icons";
import { LINKS } from "../data/links";

const SOCIAL = [
  { href: LINKS.tiktok, label: "TikTok", icon: TikTokIcon },
  { href: LINKS.instagram, label: "Instagram", icon: InstagramIcon },
  { href: LINKS.youtube, label: "YouTube", icon: YouTubeIcon },
  { href: LINKS.spotify, label: "Spotify", icon: SpotifyIcon },
];

export default function Connect() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-ink px-6 py-20 text-ivory md:min-h-[calc(100vh-4.5rem)]">
      <Seo
        title="Follow"
        description="Follow Anna Viola on TikTok, Instagram, YouTube, and Spotify."
        path="/connect"
      />

      <PageLogo variant="light" />

      <motion.nav
        className="mt-14 flex items-center justify-center gap-10 md:gap-14"
        aria-label="Social media"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        {SOCIAL.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-luxe text-ivory/80 transition-colors hover:text-ivory"
            aria-label={label}
          >
            <Icon className="h-8 w-8 md:h-10 md:w-10" />
          </a>
        ))}
      </motion.nav>
    </div>
  );
}
