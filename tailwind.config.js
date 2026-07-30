/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0e17",
          800: "#0d1220",
          700: "#131a2b",
          600: "#1b2438",
        },
        sand: {
          100: "#f4f1ea",
          200: "#e9e3d4",
          300: "#ded5bf",
        },
        clay: "#c9a876",
      },
      fontFamily: {
        display: ["'Archivo Black'", "'Arial Black'", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "flow-slow": "flow 22s ease-in-out infinite",
        "flow-slower": "flow 32s ease-in-out infinite reverse",
      },
      keyframes: {
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        flow: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(3%,-2%) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
