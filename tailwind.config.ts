import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        "warm-white": "var(--warm-white)",
        sage: "var(--sage)",
        "sage-dark": "var(--sage-dark)",
        blush: "var(--blush)",
        charcoal: "var(--charcoal)",
        muted: "var(--muted)",
        "gold-light": "var(--gold-light)"
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-dm-sans)"],
        label: ["var(--font-jost)"]
      },
      boxShadow: {
        petal: "0 24px 80px var(--shadow-color)",
        card: "0 18px 54px var(--shadow-color)",
        glow: "0 20px 70px rgba(167, 155, 244, 0.28)"
      },
      borderRadius: {
        organic: "24px"
      },
      backgroundImage: {
        linen:
          "linear-gradient(135deg, rgba(255,255,255,0.42), rgba(255,255,255,0)), radial-gradient(circle at 20% 20%, rgba(239,183,220,0.16), transparent 24%), radial-gradient(circle at 80% 0%, rgba(167,155,244,0.15), transparent 26%)"
      }
    }
  },
  plugins: []
};

export default config;
