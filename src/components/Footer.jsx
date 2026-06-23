import { Link } from "react-router-dom";
import { InstagramIcon, SpotifyIcon, TikTokIcon, YouTubeIcon } from "./icons";
import { LINKS } from "../data/links";

const SOCIAL = [
  { href: LINKS.tiktok, label: "TikTok", icon: TikTokIcon },
  { href: LINKS.instagram, label: "Instagram", icon: InstagramIcon },
  { href: LINKS.youtube, label: "YouTube", icon: YouTubeIcon },
  { href: LINKS.spotify, label: "Spotify", icon: SpotifyIcon },
];

const LEGAL_LINKS = [
  { label: "Terms and Conditions", href: "/terms", external: false },
  { label: "Privacy Policy", href: "/privacy", external: false },
  { label: "How We Use Your Data", href: "/privacy#data-use", external: false },
  { label: "Limit Use of My Personal Information", href: "/privacy#limit-use", external: false },
  { label: "Your BC Privacy Rights", href: "/privacy#bc-rights", external: false },
  { label: "Send Feedback", href: "mailto:hello@annaviola.com", external: true },
];

const socialClass =
  "text-ink transition-opacity duration-200 opacity-90 hover:opacity-100";

const legalClass =
  "font-body text-sm leading-relaxed text-ink transition-opacity hover:text-ink/75";

export default function Footer() {
  return (
    <footer className="bg-lilac text-ink">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <div className="flex items-center justify-center gap-8">
          {SOCIAL.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={socialClass}
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <p className="mt-10 font-display text-base text-ink">
          © 2026 Anna Viola
        </p>

        <nav className="mt-4" aria-label="Legal">
          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {LEGAL_LINKS.map((link, i) => (
              <li key={link.label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-2 font-body text-sm text-ink/50" aria-hidden="true">
                    |
                  </span>
                )}
                {link.external ? (
                  <a href={link.href} className={legalClass}>
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className={legalClass}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
