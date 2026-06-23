import { Link } from "react-router-dom";

export default function AvLogo({ className = "" }) {
  return (
    <Link
      to="/"
      aria-label="Anna Viola home"
      className={`inline-flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <rect width="40" height="40" fill="#0A0A0A" />
        <text
          x="20"
          y="26"
          textAnchor="middle"
          fill="#FAFAFA"
          fontFamily="UVNMuaThu, cursive"
          fontSize="18"
        >
          av
        </text>
      </svg>
    </Link>
  );
}
