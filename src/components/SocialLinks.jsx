import { InstagramIcon, TikTokIcon, YouTubeIcon, SpotifyIcon } from "./icons";
import { LINKS } from "../data/links";

const SOCIAL = [
  { href: LINKS.tiktok, label: "TikTok", icon: TikTokIcon },
  { href: LINKS.instagram, label: "Instagram", icon: InstagramIcon },
  { href: LINKS.youtube, label: "YouTube", icon: YouTubeIcon },
  { href: LINKS.spotify, label: "Spotify", icon: SpotifyIcon },
];

/** Social icon row — each link gets a 44px hit area around the glyph. */
export default function SocialLinks({ className = "", iconClassName = "h-5 w-5" }) {
  return (
    <ul className={`flex items-center ${className}`} aria-label="Social media">
      {SOCIAL.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-luxe inline-flex h-11 min-w-11 items-center justify-center text-ivory/85 transition-colors hover:text-white"
            aria-label={`${label} (opens in a new tab)`}
          >
            <Icon className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  );
}
