/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      custom: ["ubuntu-mono", "Ubuntu", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
