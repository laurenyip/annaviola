import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { InstagramIcon, SpotifyIcon, TikTokIcon, YouTubeIcon } from "./icons";
import { LINKS } from "../data/links";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/music", label: "Music" },
  { to: "/videos", label: "Videos" },
  { to: "/connect", label: "Connect" },
];

const linkClass = ({ isActive }) =>
  `font-body text-[13px] tracking-widest transition-colors duration-200 ${
    isActive ? "text-ivory" : "text-ivory/60 hover:text-ivory"
  }`;

const socialLinks = (
  <div className="flex items-center gap-4">
    <a
      href={LINKS.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ivory transition-opacity hover:opacity-70"
      aria-label="Instagram"
    >
      <InstagramIcon />
    </a>
    <a
      href={LINKS.tiktok}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ivory transition-opacity hover:opacity-70"
      aria-label="TikTok"
    >
      <TikTokIcon />
    </a>
    <a
      href={LINKS.youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ivory transition-opacity hover:opacity-70"
      aria-label="YouTube"
    >
      <YouTubeIcon />
    </a>
    <a
      href={LINKS.spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ivory transition-opacity hover:opacity-70"
      aria-label="Spotify"
    >
      <SpotifyIcon />
    </a>
  </div>
);

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 bg-ink/[0.92] backdrop-blur-sm"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            to="/"
            className="font-script text-[22px] text-ivory transition-opacity hover:opacity-80"
          >
            annaviolaa
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">{socialLinks}</div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="block h-px w-5 bg-ivory" />
            <span className="block h-px w-5 bg-ivory" />
            <span className="block h-px w-5 bg-ivory" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              className="absolute right-6 top-5 flex h-10 w-10 items-center justify-center text-ivory"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span className="absolute block h-px w-5 rotate-45 bg-ivory" />
              <span className="absolute block h-px w-5 -rotate-45 bg-ivory" />
            </button>

            <ul className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                >
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={linkClass}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.42, ease: "easeOut" }}
            >
              {socialLinks}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
