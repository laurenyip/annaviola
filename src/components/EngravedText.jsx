import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * Foil-stamped / engraved headline — white & x-ray blue highlight on black.
 */
export default function EngravedText({
  children,
  as: Tag = "span",
  className = "",
}) {
  const ref = useRef(null);
  const target = useRef({ x: 50, y: 50 });
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
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
      setGradientPos((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.1,
        y: prev.y + (target.current.y - prev.y) * 0.1,
      }));
      frame = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  const highlight = reducedMotion
    ? "linear-gradient(135deg, #e8e8e8 0%, #7ec8dc 45%, #c8c8c8 100%)"
    : `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, #ffffff 0%, #a8e0f0 30%, #7ec8dc 55%, #d4d4d4 80%, #ffffff 100%)`;

  return (
    <Tag
      ref={ref}
      className={`text-engraved inline-block cursor-default ${className}`}
      style={{
        backgroundImage: highlight,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
    >
      {children}
    </Tag>
  );
}
