/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["Poppins-Regular", "sans-serif"],
        poppinsMedium: ["Poppins-Medium", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
      },
      colors: {
        primary: "#3629B7",
        textColor: "#CACACA",
      },
    },
  },
  plugins: [],
};
