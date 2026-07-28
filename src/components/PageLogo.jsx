import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMAGES } from "../data/content";

export default function PageLogo({
  variant = "dark",
  ornament = false,
  className = "",
}) {
  const color = variant === "light" ? "text-ivory" : "text-ink";

  return (
    <motion.div
      className={`flex justify-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {ornament ? (
        <Link
          to="/"
          className="flex w-full max-w-[260px] flex-col items-center transition-opacity hover:opacity-90 sm:max-w-[300px]"
          aria-label="Anna Viola home"
        >
          <img
            src={IMAGES.logoOrnamentTop}
            alt=""
            className="mb-1 block h-auto w-[85%] select-none sm:w-[90%]"
            draggable={false}
          />
          <span
            className={`font-display text-[1.85rem] leading-none tracking-wide lowercase sm:text-4xl ${color}`}
          >
            anna viola
          </span>
        </Link>
      ) : (
        <Link
          to="/"
          className={`font-display text-5xl tracking-wide transition-opacity hover:opacity-75 md:text-6xl ${color}`}
          aria-label="Anna Viola home"
        >
          Anna Viola
        </Link>
      )}
    </motion.div>
  );
}
