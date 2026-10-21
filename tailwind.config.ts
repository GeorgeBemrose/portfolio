import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Accountant's columnar pad: green paper, blue rules, red margin
      colors: {
        paper: "#EAF0E2",
        rule: "#B4CADB",
        margin: "#C0392B",
        ink: "#1E2B3A",
        muted: "#55665F",
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        condensed: ["var(--font-plex-condensed)", "var(--font-plex-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
