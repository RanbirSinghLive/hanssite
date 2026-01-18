import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-deep': '#1e3a5f',
        'sky-blue': '#4a90e2',
        'earth-green': '#6b7d5a',
        'earth-brown': '#8b7355',
        'earth-straw': '#d4c5a9',
        'mountain-dark': '#2c2c2c',
        'clothing-brown': '#5d4037',
        'denim-blue': '#6b9bd1',
      },
    },
  },
  plugins: [],
};
export default config;
