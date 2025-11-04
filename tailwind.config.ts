import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        brand: "var(--color-brand)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        glow: "0 24px 60px rgba(224, 177, 76, 0.16)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, rgba(224, 177, 76, 0.18), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
