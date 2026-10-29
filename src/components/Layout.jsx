import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import GlitterOverlay from "./GlitterOverlay";
import LaceOverlay from "./LaceOverlay";
import Nav from "./Nav";
import NewsletterBand from "./NewsletterBand";
import Footer from "./Footer";
import KonamiOverlay from "./easter-eggs/KonamiOverlay";
import { ArtistJsonLd } from "./Seo";

export default function Layout() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:text-ivory focus:ring-1 focus:ring-xray"
      >
        Skip to content
      </a>
      <ArtistJsonLd />
      <KonamiOverlay />
      <LaceOverlay />
      <GlitterOverlay />
      <Nav />
      <main id="main-content" className="relative z-10 min-h-screen pt-[4.5rem] sm:pt-24 md:pt-[6.5rem]">
        {/* initial={false}: the first page paints visible; only route changes fade. */}
        <AnimatePresence mode="wait" initial={false}>
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
      <NewsletterBand />
      <Footer />
    </MotionConfig>
  );
}
