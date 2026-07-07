import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const MOBILE_LINKS = [
  { to: "/music", label: "Listen" },
  { to: "/", label: "News", end: true },
  { to: "/connect", label: "Follow" },
];

const baseLinkClass = (isActive) =>
  `nav-link font-display text-2xl tracking-wide transition-opacity duration-200 md:text-4xl ${
    isActive ? "text-ivory opacity-100" : "text-ivory/60 hover:text-ivory hover:opacity-100"
  }`;

const newsLinkClass = (isActive) =>
  `${baseLinkClass(isActive)} ${isActive ? "nav-news-oval" : ""}`;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-black">
        <nav className="relative flex h-20 w-full items-center px-3 md:h-[5.5rem] md:px-5">
          <div className="hidden w-full items-center md:flex">
            <NavLink to="/music" className={({ isActive }) => baseLinkClass(isActive)}>
              Listen
            </NavLink>

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${newsLinkClass(isActive)} absolute left-1/2 -translate-x-1/2`
              }
            >
              News
            </NavLink>

            <NavLink
              to="/connect"
              className={({ isActive }) => `${baseLinkClass(isActive)} ml-auto`}
            >
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
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black md:hidden"
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
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      link.label === "News" ? newsLinkClass(isActive) : baseLinkClass(isActive)
                    }
                    onClick={closeMenu}
                  >
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
