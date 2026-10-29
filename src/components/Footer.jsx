import { Link } from "react-router-dom";
import CursorSheen from "./CursorSheen";
import SocialLinks from "./SocialLinks";

const PRIMARY_LINKS = [
  { label: "Terms and Conditions", href: "/terms", external: false },
  { label: "Privacy Policy", href: "/privacy", external: false },
  { label: "Send Feedback", href: "mailto:hello@annaviola.com", external: true },
];

const PRIVACY_LINKS = [
  { label: "How We Use Your Data", href: "/privacy#data-use", external: false },
  { label: "Limit Use of My Personal Information", href: "/privacy#limit-use", external: false },
  { label: "Your BC Privacy Rights", href: "/privacy#bc-rights", external: false },
];

const legalClass =
  "inline-flex min-h-8 items-center font-body leading-relaxed text-ivory/70 transition-colors hover:text-xray";

function LinkRow({ links, sizeClass }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
      {links.map((link) => (
        <li key={link.label}>
          {link.external ? (
            <a href={link.href} className={`${legalClass} ${sizeClass}`}>
              {link.label}
            </a>
          ) : (
            <Link to={link.href} className={`${legalClass} ${sizeClass}`}>
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <CursorSheen
      as="footer"
      className="relative z-10 border-t border-white/10 bg-ink text-ivory"
      intensity={0.05}
      blueIntensity={0.08}
      size="180%"
      lag={0.05}
    >
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <SocialLinks className="justify-center gap-2" />

        <p className="mt-4 font-display text-lg text-white md:text-xl">
          © 2026 Anna Viola
        </p>

        <nav className="mt-4 space-y-1" aria-label="Legal">
          <LinkRow links={PRIMARY_LINKS} sizeClass="text-sm" />
          <LinkRow links={PRIVACY_LINKS} sizeClass="text-xs md:text-sm" />
        </nav>
      </div>
    </CursorSheen>
  );
}
