import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ci-bg": "#090e1c",
        "ci-surface": "#0c1828",
        "ci-deep": "#091624",
        "ci-border": "#19293f",
        "ci-border-lt": "#1a3050",
        "ci-teal": "#00c89e",
        "ci-teal-dim": "#00a07e",
        "ci-blue": "#1a8cff",
        "ci-blue-dim": "#1a6acc",
        "ci-text": "#d4e8f8",
        "ci-muted": "#4a6888",
        "ci-subtle": "#3a5878",
        "ci-hint": "#2e5070",
        "ci-ghost": "#1e3448",
        "ci-dark": "#060b16",
        "ci-nav-link": "#4a6a88",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
