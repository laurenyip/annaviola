import { Link } from "react-router-dom";
import { InstagramIcon, SpotifyIcon, TikTokIcon, YouTubeIcon } from "./icons";
import { LINKS } from "../data/links";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/music", label: "Music" },
  { to: "/videos", label: "Videos" },
  { to: "/connect", label: "Connect" },
];

const SOCIAL = [
  { href: LINKS.instagram, label: "Instagram", icon: InstagramIcon },
  { href: LINKS.tiktok, label: "TikTok", icon: TikTokIcon },
  { href: LINKS.youtube, label: "YouTube", icon: YouTubeIcon },
  { href: LINKS.spotify, label: "Spotify", icon: SpotifyIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-10 text-center md:grid md:grid-cols-3 md:items-start md:gap-8 md:text-left">
          <div>
            <p className="font-script text-3xl">annaviolaa</p>
            <p className="mt-2 font-body text-sm tracking-wide text-ivory/50">
              pop · glamour · glitter
            </p>
            <a
              href={LINKS.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-body text-xs tracking-widest text-ivory/40 underline decoration-white/20 underline-offset-2 transition-colors hover:text-ivory"
            >
              linktr.ee/annaviolaa
            </a>
          </div>

          <nav>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-[13px] tracking-widest text-ivory/50 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <p className="font-body text-[13px] tracking-widest text-ivory/50">
              Follow
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory transition-opacity hover:opacity-70"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="mt-10 border-0 border-t border-white/10" style={{ borderTopWidth: "0.5px" }} />

        <p className="mt-6 text-center font-body text-[11px] text-ivory/30">
          © 2026 Anna Viola. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
