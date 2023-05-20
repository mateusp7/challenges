/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marineBlue: "#02295A",
        purplistBlue: "#473DFF",
        pastelBlue: "#ADBEFF",
        lightBlue: "#BFE2FD",
        strawberryRed: "#ED3548",

        coolGray: "#9699AB",
        lightGray: "#D6D9E6",
        magnolia: "#F0F6FF",
        alabaster: "#FAFBFF",
        white: "#FFFFFF",
      },
      backgroundImage: {
        aside: "url('/src/assets/bg-sidebar-desktop.svg')",
        checked: "url('/src/assets/icon-check.svg')",
      },
    },
  },
  plugins: [],
}
