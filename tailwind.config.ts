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
        'brand-green': '#009246',
        'brand-red': '#CE2B37',
        'brand-white': '#FFFFFF',
        'brand-light-gray': '#F8F9FA',
      },
    },
  },
  plugins: [],
};
export default config;
