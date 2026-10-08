import { NavLink } from "react-router-dom";
import PageLogo from "./PageLogo";
import { InstagramIcon, TikTokIcon, YouTubeIcon, SpotifyIcon } from "./icons";
import { LINKS } from "../data/links";

const SOCIAL = [
  { href: LINKS.tiktok, label: "TikTok", icon: TikTokIcon },
  { href: LINKS.instagram, label: "Instagram", icon: InstagramIcon },
  { href: LINKS.youtube, label: "YouTube", icon: YouTubeIcon },
  { href: LINKS.spotify, label: "Spotify", icon: SpotifyIcon },
];

const linkClass = (isActive) =>
  `nav-link font-display text-xl tracking-wide transition-opacity duration-200 sm:text-[1.6875rem] md:text-3xl ${
    isActive
      ? "text-white opacity-100 underline decoration-1 underline-offset-8"
      : "text-ivory/80 hover:text-white hover:opacity-100"
  }`;

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -bottom-10 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.5),#000_22%,#000_78%,rgba(0,0,0,0.5))] [-webkit-mask-image:linear-gradient(to_bottom,#000_calc(100%-3.5rem),transparent)] [mask-image:linear-gradient(to_bottom,#000_calc(100%-3.5rem),transparent)]"
      />
      <nav className="relative flex h-[7.125rem] w-full items-center justify-between px-4 sm:h-[7.875rem] sm:px-6 md:h-36 md:px-8 lg:px-10">
        <NavLink to="/music" className={({ isActive }) => linkClass(isActive)}>
          Listen
        </NavLink>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <PageLogo variant="light" compact />
        </div>

        <div
          className="flex items-center gap-3 sm:gap-4 md:gap-5"
          aria-label="Social media"
        >
          {SOCIAL.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-luxe text-ivory/85 transition-colors hover:text-white"
              aria-label={label}
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
