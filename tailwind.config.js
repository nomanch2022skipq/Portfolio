/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, ts, vue}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#2EC4B6",
        "custom-primary-hover": "#31A79B",
      },
    },
  },
  plugins: [],
};
