import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const MOBILE_LINKS = [
  { to: "/videos", label: "Watch" },
  { to: "/music", label: "Listen" },
  { to: "/connect", label: "Follow" },
];

const linkClass = ({ isActive }) =>
  `nav-link font-display text-xl tracking-wide transition-opacity duration-200 md:text-2xl ${
    isActive ? "text-ivory opacity-100" : "text-ivory/60 hover:text-ivory hover:opacity-100"
  }`;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-ink">
        <nav className="relative flex h-16 w-full items-center px-3 md:h-[4.5rem] md:px-5">
          <div className="hidden w-full items-center md:flex">
            <NavLink to="/videos" className={linkClass}>
              Watch
            </NavLink>

            <NavLink
              to="/music"
              className={({ isActive }) =>
                `${linkClass({ isActive })} absolute left-1/2 -translate-x-1/2`
              }
            >
              Listen
            </NavLink>

            <NavLink to="/connect" className={({ isActive }) => `${linkClass({ isActive })} ml-auto`}>
              Follow
            </NavLink>
          </div>

          <button
            type="button"
            className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="block h-px w-5 bg-ivory" />
            <span className="block h-px w-5 bg-ivory" />
            <span className="block h-px w-5 bg-ivory" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center md:right-5"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span className="absolute block h-px w-5 rotate-45 bg-ivory" />
              <span className="absolute block h-px w-5 -rotate-45 bg-ivory" />
            </button>

            <ul className="flex flex-col items-center gap-10">
              {MOBILE_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                >
                  <NavLink to={link.to} className={linkClass} onClick={closeMenu}>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
