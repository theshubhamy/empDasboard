/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // maxWidth: {
    //   app: " 90rem",
    // },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
