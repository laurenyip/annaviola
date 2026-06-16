import { useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import useKonamiCode from "../../hooks/useKonamiCode";

function SparkleBurst() {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        angle: (i / 16) * Math.PI * 2,
        distance: 40 + Math.random() * 60,
        size: 3 + Math.random() * 4,
        delay: 0.3 + Math.random() * 0.4,
        color: Math.random() > 0.5 ? "#FFFFFF" : "#D4D4D4",
      })),
    []
  );

  return (
    <>
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            marginLeft: -s.size / 2,
            marginTop: -s.size / 2,
          }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: Math.cos(s.angle) * s.distance,
            y: Math.sin(s.angle) * s.distance - 30,
            scale: [0, 1.2, 0],
          }}
          transition={{ duration: 0.9, delay: s.delay, ease: "easeOut" }}
        />
      ))}
    </>
  );
}

function JewelryBox({ reducedMotion }) {
  const lidTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.8, delay: 0.35, ease: "easeOut" };

  return (
    <div className="relative mx-auto h-48 w-48">
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
        <motion.rect
          x="40"
          y="100"
          width="120"
          height="70"
          rx="6"
          fill="#3B1F2B"
          stroke="#D4D4D4"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
        />
        <motion.rect
          x="50"
          y="108"
          width="100"
          height="8"
          rx="2"
          fill="#D4D4D4"
          opacity="0.6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.2 }}
        />
        <motion.g
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: reducedMotion ? 0 : -55, y: reducedMotion ? 0 : -35 }}
          transition={lidTransition}
          style={{ transformOrigin: "100px 100px" }}
        >
          <path
            d="M35 100 Q100 55 165 100 L165 115 Q100 75 35 115 Z"
            fill="#141414"
            stroke="#D4D4D4"
            strokeWidth="2"
          />
          <ellipse cx="100" cy="100" rx="18" ry="8" fill="#D4D4D4" opacity="0.8" />
        </motion.g>
      </svg>
      {!reducedMotion && <SparkleBurst />}
    </div>
  );
}

export default function KonamiOverlay() {
  const { isActive, dismiss } = useKonamiCode();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isActive && (
        <motion.button
          type="button"
          className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center bg-ink px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          onClick={dismiss}
          aria-label="Dismiss secret"
        >
          <JewelryBox reducedMotion={prefersReducedMotion} />
          <motion.p
            className="mt-10 font-script text-[48px] text-silver"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.7 }}
          >
            you found a secret ✦
          </motion.p>
          <p className="mt-6 font-body text-xs tracking-widest text-ivory/30 uppercase">
            click anywhere to close
          </p>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
