import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container": "#ebefed",
        "inverse-surface": "#2d3130",
        "secondary-fixed": "#ffdbcd",
        "outline": "#717972",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#7c2e00",
        "on-primary": "#ffffff",
        "surface-dim": "#d7dbd9",
        "on-surface": "#181c1c",
        "tertiary-container": "#5b2b30",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#ffb595",
        "tertiary-fixed": "#ffdadb",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "on-surface-variant": "#414942",
        "on-error-container": "#93000a",
        "surface-container-lowest": "#ffffff",
        "inverse-primary": "#a1d2b1",
        "primary-container": "#14422a",
        "secondary-container": "#ffeedd", // lighter orange background
        "on-tertiary-fixed-variant": "#6b383d",
        "secondary": "#f59e0b", // warm golden-hour orange
        "surface-container-low": "#f1f4f2",
        "tertiary-fixed-dim": "#fbb4b9",
        "on-tertiary-container": "#d49297",
        "surface-bright": "#f7faf8",
        "surface-tint": "#22c55e", // bright green
        "on-primary-fixed": "#002110",
        "primary": "#047857", // premium green (brighter than before)
        "inverse-on-surface": "#eef1ef",
        "primary-fixed-dim": "#a1d2b1",
        "on-secondary": "#ffffff",
        "outline-variant": "#c1c9c0",
        "on-background": "#181c1c",
        "surface-container-high": "#e6e9e7",
        "primary-fixed": "#bdeecc",
        "surface-variant": "#e0e3e1",
        "on-primary-container": "#7fae8f",
        "surface": "#f7faf8",
        "tertiary": "#41161b",
        "surface-container-highest": "#e0e3e1",
        "on-secondary-fixed": "#351000",
        "on-tertiary-fixed": "#360d13",
        "background": "#f7faf8",
        "on-primary-fixed-variant": "#224f36",
        "on-secondary-container": "#5c2000"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
};
export default config;