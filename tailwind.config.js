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

      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xll: "0 20px 25px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
