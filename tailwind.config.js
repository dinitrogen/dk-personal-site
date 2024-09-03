import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'skills': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["cupcake", "emerald", "corporate"],
  },
};
