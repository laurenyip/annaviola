import { useEffect, useRef, useState, useCallback } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function useKonamiCode() {
  const indexRef = useRef(0);
  const [isActive, setIsActive] = useState(false);

  const dismiss = useCallback(() => {
    setIsActive(false);
    indexRef.current = 0;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const expected = KONAMI_SEQUENCE[indexRef.current];

      if (e.code === expected) {
        indexRef.current += 1;
        if (indexRef.current === KONAMI_SEQUENCE.length) {
          indexRef.current = 0;
          setIsActive(true);
        }
        return;
      }

      indexRef.current = e.code === KONAMI_SEQUENCE[0] ? 1 : 0;
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { isActive, dismiss };
}
