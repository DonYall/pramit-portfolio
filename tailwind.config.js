/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      keyframes: {
        "appear-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "appear-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "appear-up": "appear-up 1.5s ease-out",
        "appear-down": "appear-down 1.5s ease-out",
      },
    },
  },
  plugins: [],
};
