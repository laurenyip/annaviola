import { useMemo } from "react";

/**
 * Drifting glitter specks. Sits above the lace but below page content (z-10),
 * and from md up is masked out of the centre reading column (see .glitter-field).
 */
export default function GlitterOverlay() {
  const specks = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 3,
        opacity: 0.15 + Math.random() * 0.45,
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 4,
        reverse: i % 2 === 0,
      })),
    []
  );

  return (
    <div
      className="glitter-field pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {specks.map((s) => (
        <div
          key={s.id}
          className={`absolute rounded-full bg-white ${s.reverse ? "animate-float-reverse" : "animate-float"}`}
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 6px rgba(255,255,255,0.85)",
          }}
        />
      ))}
    </div>
  );
}
