import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Include all files inside /src/app
    "./src/app/components/**/*.{js,ts,jsx,tsx}", // Explicitly include components folder
    "./src/app/sudoku/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18274E",
        secondary: "#5DA9E9",
        contrast: "#F5A623",
        neutral: "#D3D3D3",
      },
    },
  },
  plugins: [],
};
export default config;
