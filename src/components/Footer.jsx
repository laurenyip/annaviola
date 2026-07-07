import { Link } from "react-router-dom";
import CursorSheen from "./CursorSheen";

const LEGAL_LINKS = [
  { label: "Terms and Conditions", href: "/terms", external: false },
  { label: "Privacy Policy", href: "/privacy", external: false },
  { label: "How We Use Your Data", href: "/privacy#data-use", external: false },
  { label: "Limit Use of My Personal Information", href: "/privacy#limit-use", external: false },
  { label: "Your BC Privacy Rights", href: "/privacy#bc-rights", external: false },
  { label: "Send Feedback", href: "mailto:hello@annaviola.com", external: true },
];

const legalClass =
  "font-body text-sm leading-relaxed text-ivory/70 transition-colors hover:text-xray";

export default function Footer() {
  return (
    <CursorSheen
      as="footer"
      className="border-t border-white/10 bg-ink text-ivory"
      intensity={0.05}
      blueIntensity={0.08}
      size="180%"
      lag={0.05}
    >
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <p className="font-display text-lg text-white md:text-xl">
          © 2026 Anna Viola
        </p>

        <nav className="footer-legal-row mt-4 overflow-x-auto" aria-label="Legal">
          <ul className="inline-flex min-w-full flex-nowrap items-center justify-center whitespace-nowrap">
            {LEGAL_LINKS.map((link, i) => (
              <li key={link.label} className="flex shrink-0 items-center">
                {i > 0 && (
                  <span className="mx-1.5 font-body text-xs text-white/25 md:mx-2 md:text-sm" aria-hidden="true">
                    |
                  </span>
                )}
                {link.external ? (
                  <a href={link.href} className={`${legalClass} text-xs md:text-sm`}>
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className={`${legalClass} text-xs md:text-sm`}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </CursorSheen>
  );
}
