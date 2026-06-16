import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ShootingStarCursor from "./ShootingStarCursor";
import GlitterOverlay from "./GlitterOverlay";
import LaceOverlay from "./LaceOverlay";
import Nav from "./Nav";
import Footer from "./Footer";
import KonamiOverlay from "./easter-eggs/KonamiOverlay";
import { ArtistJsonLd } from "./Seo";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:text-ink focus:ring-1 focus:ring-ink"
      >
        Skip to content
      </a>
      <ArtistJsonLd />
      <ShootingStarCursor />
      <KonamiOverlay />
      <GlitterOverlay />
      <LaceOverlay />
      <Nav />
      <main id="main-content" className="min-h-screen pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
