/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#707070",
          200: "#F5F5F5",
          400: "#969798",
          500: "#353535",
          700: "#353535",
          800: "#262626",
          900: "#171818",
        },
        //Warna Utama
        utama: {
          hover: "#342BA8",
          primary: "#4E46B4",
        },
        // Warna Garis
        grayline: {
          200: "#E5E7EB",
        },
        //Warna Font
        sidecolor: {
          200: "#E9E8F6",
          400: "#4E46B4",
        },
      },
      fontFamily: {
        // AvertaStd: [...defaultTheme.fontFamily.sans],
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
