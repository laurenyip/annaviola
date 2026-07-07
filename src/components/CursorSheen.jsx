import useCursorSheen from "../hooks/useCursorSheen";

/**
 * Ambient cursor sheen — soft gold + x-ray blue (Lorde Ultrasound palette).
 */
export default function CursorSheen({
  children,
  className = "",
  intensity = 0.07,
  blueIntensity = 0.06,
  size = "140%",
  lag = 0.06,
  as: Tag = "div",
}) {
  const { ref, position, reducedMotion } = useCursorSheen(lag);

  return (
    <Tag ref={ref} className={`relative overflow-hidden ${className}`}>
      {!reducedMotion && (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            aria-hidden="true"
            style={{
              background: `radial-gradient(${size} circle at ${position.x}% ${position.y}%, rgba(212, 175, 95, ${intensity}) 0%, transparent 70%)`,
              transition: "background 0.12s linear",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            aria-hidden="true"
            style={{
              background: `radial-gradient(${size} circle at ${100 - position.x}% ${100 - position.y}%, rgba(126, 200, 220, ${blueIntensity}) 0%, transparent 65%)`,
              transition: "background 0.12s linear",
            }}
          />
        </>
      )}
      {children}
    </Tag>
  );
}
