/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        colorGrey: "var(--color-grey-50)",
        colorGrey2: "var(--color-grey-0)",
        borderColor: "var(--color-grey-100)",
        textColor: "var(--color-grey-600)",

        purple: "var(--purple)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
