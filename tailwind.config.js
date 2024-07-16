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
        primary1: "#3629B7",
        primary2: "#5655B9",
        primary3: "#A8A3D7",
        primary4: "#F2F1F9",
        neutral1: "#343434",
        neutral2: "#898989",
        neutral3: "#989898",
        neutral4: "#CACACA",
        neutral5: "#E0E0E0",
        semantic1: "#FF4267",
        semantic2: "#0890FE",
        semantic3: "#FFAF2A",
        semantic4: "#52D5BA",
        semantic5: "#FB6B18",
      },
    },
  },
  plugins: [],
};
