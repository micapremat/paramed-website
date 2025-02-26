/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        // Add your custom colors here
        'primary': '#0c365b',
        'secondary': '#b62a2a',
        'accent': '#ff7849',
        'font-black': '#363636',
        'custom-blue': '#1fb6ff',
        'custom-pink': '#ff49db',
        'custom-orange': '#ff7849',
        'custom-green': '#13ce66',
        'custom-gray': '#8492a6',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
