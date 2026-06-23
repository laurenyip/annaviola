import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageLogo({ variant = "dark", className = "" }) {
  const color = variant === "light" ? "text-ivory" : "text-ink";

  return (
    <motion.div
      className={`flex justify-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Link
        to="/"
        className={`font-display text-4xl tracking-wide transition-opacity hover:opacity-75 md:text-5xl ${color}`}
        aria-label="Anna Viola home"
      >
        Anna Viola
      </Link>
    </motion.div>
  );
}
