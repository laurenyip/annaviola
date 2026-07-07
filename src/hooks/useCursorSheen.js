import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

/**
 * Tracks cursor position inside a container with eased lag for ambient sheen.
 * Returns ref + percentage coords (0–100) for radial-gradient positioning.
 */
export default function useCursorSheen(lag = 0.06) {
  const ref = useRef(null);
  const target = useRef({ x: 50, y: 50 });
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      target.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
    };

    let frame;
    const tick = () => {
      setPosition((prev) => ({
        x: prev.x + (target.current.x - prev.x) * lag,
        y: prev.y + (target.current.y - prev.y) * lag,
      }));
      frame = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [lag, reducedMotion]);

  return { ref, position, reducedMotion };
}
