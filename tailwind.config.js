/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAFAFA",
        ink: "#0A0A0A",
        plum: "#141414",
        navy: "#1A1A1A",
        lilac: "#D8D8E8",
        lavender: "#D8D8E8",
        gold: "#D4D4D4",
        silver: "#E8E8E8",
        xray: "#7EC8DC",
        "xray-deep": "#3D6B7A",
        "xray-glow": "#A8E0F0",
        "xray-ink": "#1A2E38",
      },
      fontFamily: {
        display: ["UVNMuaThu", "cursive"],
        body: ["DM Sans", "sans-serif"],
        script: ["UVNMuaThu", "cursive"],
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "luxe-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        luxe: "600ms",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(255, 255, 255, 0.15)" },
          "50%": { borderColor: "rgba(255, 255, 255, 0.45)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 6s ease-in-out infinite",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "ken-burns": "ken-burns 20s ease-out forwards",
      },
    },
  },
  plugins: [],
};
