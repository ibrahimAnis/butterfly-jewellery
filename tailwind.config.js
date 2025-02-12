/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand_color: "#d85c8a",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
