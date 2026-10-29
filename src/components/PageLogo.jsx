import { Link } from "react-router-dom";
import { IMAGES } from "../data/content";

/** Site mark — ornament + “anna viola”. Use `compact` in the navbar. */
export default function PageLogo({
  variant = "dark",
  compact = false,
  className = "",
}) {
  const color = variant === "light" ? "text-ivory" : "text-ink";

  return (
    <div className={`flex justify-center ${className}`}>
      <Link
        to="/"
        className={`flex flex-col items-center transition-opacity hover:opacity-90 ${
          compact
            ? "w-[7.5rem] sm:w-[11.5rem] md:w-[13rem]"
            : "w-full max-w-[260px] sm:max-w-[300px]"
        }`}
        aria-label="Anna Viola home"
      >
        <img
          src={IMAGES.logoOrnamentTop}
          alt=""
          className={`mb-0.5 block h-auto w-[88%] select-none ${
            compact ? "max-h-8 object-contain sm:max-h-12 md:max-h-[3.25rem]" : ""
          }`}
          draggable={false}
        />
        <span
          className={`font-display leading-none tracking-wide lowercase ${color} ${
            compact
              ? "text-base sm:text-lg md:text-xl"
              : "text-[1.85rem] sm:text-4xl"
          }`}
        >
          anna viola
        </span>
      </Link>
    </div>
  );
}
