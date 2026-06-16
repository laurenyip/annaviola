import { useEffect, useRef, useState } from "react";

const STAR_SIZE = 12;
const SPARKLE_SIZE = 4;
const SPARKLE_FADE_MS = 400;
const COLORS = ["#FAFAFA", "#FFFFFF"];

function StarIcon() {
  return (
    <svg
      width={STAR_SIZE}
      height={STAR_SIZE}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 0L7.4 4.6L12 6L7.4 7.4L6 12L4.6 7.4L0 6L4.6 4.6L6 0Z"
        fill="#FFFFFF"
        stroke="#0A0A0A"
        strokeWidth="0.5"
      />
    </svg>
  );
}

function Sparkle({ x, y, color, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, SPARKLE_FADE_MS);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className="pointer-events-none fixed z-[10001] rounded-full"
      style={{
        width: SPARKLE_SIZE,
        height: SPARKLE_SIZE,
        left: x - SPARKLE_SIZE / 2,
        top: y - SPARKLE_SIZE / 2,
        backgroundColor: color,
        animation: `sparkle-fade ${SPARKLE_FADE_MS}ms ease-out forwards`,
      }}
      aria-hidden="true"
    />
  );
}

function useFinePointer() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return enabled;
}

export default function ShootingStarCursor() {
  const enabled = useFinePointer();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [sparkles, setSparkles] = useState([]);
  const sparkleId = useRef(0);
  const lastSpawn = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    const spawnSparkle = (clientX, clientY) => {
      const dx = clientX - lastSpawn.current.x;
      const dy = clientY - lastSpawn.current.y;
      if (Math.sqrt(dx * dx + dy * dy) < 6) return;
      lastSpawn.current = { x: clientX, y: clientY };

      const id = sparkleId.current++;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const offsetX = (Math.random() - 0.5) * 16;
      const offsetY = (Math.random() - 0.5) * 16;

      setSparkles((prev) => [
        ...prev,
        { id, x: clientX + offsetX, y: clientY + offsetY, color },
      ]);
    };

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      spawnSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        @keyframes sparkle-fade {
          from { opacity: 0.9; transform: scale(1); }
          to { opacity: 0; transform: scale(0.3); }
        }
      `}</style>

      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          x={sparkle.x}
          y={sparkle.y}
          color={sparkle.color}
          onDone={() =>
            setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id))
          }
        />
      ))}

      <div
        className="pointer-events-none fixed z-[10002]"
        style={{
          left: position.x - STAR_SIZE / 2,
          top: position.y - STAR_SIZE / 2,
        }}
        aria-hidden="true"
      >
        <StarIcon />
      </div>
    </>
  );
}
