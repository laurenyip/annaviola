import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VanityMirrorModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Vanity mirror"
        >
          <motion.div
            className="relative w-full max-w-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <svg viewBox="0 0 320 420" className="w-full" aria-hidden="true">
              <defs>
                <clipPath id="mirror-clip">
                  <ellipse cx="160" cy="175" rx="88" ry="108" />
                </clipPath>
                <radialGradient id="mirror-shine" cx="40%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#DEC9E9" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#0D0D0D" stopOpacity="0" />
                </radialGradient>
              </defs>

              <ellipse
                cx="160"
                cy="175"
                rx="100"
                ry="120"
                fill="none"
                stroke="#D4D4D4"
                strokeWidth="3"
              />
              <ellipse
                cx="160"
                cy="175"
                rx="94"
                ry="114"
                fill="none"
                stroke="#D4D4D4"
                strokeWidth="0.75"
                strokeDasharray="4 6"
                opacity="0.6"
              />

              <path
                d="M62 175 Q40 120 55 75 Q100 45 160 42 Q220 45 265 75 Q280 120 258 175"
                fill="none"
                stroke="#D4D4D4"
                strokeWidth="2"
              />
              <path
                d="M62 175 Q85 250 100 310 L120 400 L200 400 L220 310 Q235 250 258 175"
                fill="none"
                stroke="#D4D4D4"
                strokeWidth="2"
              />

              <circle cx="75" cy="95" r="5" fill="#D4D4D4" opacity="0.7" />
              <circle cx="245" cy="95" r="5" fill="#D4D4D4" opacity="0.7" />
              <path
                d="M130 55 Q160 35 190 55"
                fill="none"
                stroke="#D4D4D4"
                strokeWidth="1.5"
              />

              <foreignObject x="72" y="67" width="176" height="216" clipPath="url(#mirror-clip)">
                <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-plum to-ink">
                  <img
                    src="/images/portrait.jpg"
                    alt=""
                    className="h-full w-full object-cover opacity-90"
                    style={{ filter: "saturate(0.85) contrast(1.05)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-silver/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ivory/10" />
                </div>
              </foreignObject>

              <ellipse
                cx="160"
                cy="175"
                rx="88"
                ry="108"
                fill="url(#mirror-shine)"
                pointerEvents="none"
              />

              <rect x="145" y="395" width="30" height="12" rx="2" fill="#D4D4D4" opacity="0.8" />
            </svg>

            <motion.p
              className="mt-2 text-center font-script text-3xl text-silver md:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              you&apos;re radiant ✦
            </motion.p>
            <p className="mt-3 text-center font-body text-xs tracking-widest text-ivory/40 uppercase">
              click outside to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
