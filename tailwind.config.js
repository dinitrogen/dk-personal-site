import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        hex: "0px 20px 4px black",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["cupcake", "emerald", "corporate"],
  },
};
