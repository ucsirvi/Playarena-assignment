/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scroll-left": "scroll-left 10s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "hero-bg": "url('/path-to-your-hero-image.jpg')",
      },
      colors: {
        radha: {
          primary: "#FF6F61",
          secondary: "#FFD700",
          accent: "#8B0000",
          background: "#FFF8E7",
        },
      },
    },
  },
  plugins: [],
};
