// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./app/**/*.{js,jsx,ts,tsx}"],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#062033', 
//         secondary: '#d58f04'
//       }, 
//       fontFamily: {
//         pthin: ["Poppins-Thin", "sans-serif"],
//         pextralight: ["Poppins-ExtraLight", "sans-serif"],
//         plight: ["Poppins-Light", "sans-serif"],
//         pregular: ["Poppins-Regular", "sans-serif"],
//         pmedium: ["Poppins-Medium", "sans-serif"],
//         psemibold: ["Poppins-SemiBold", "sans-serif"],
//         pbold: ["Poppins-Bold", "sans-serif"],
//         pextrabold: ["Poppins-ExtraBold", "sans-serif"],
//         pblack: ["Poppins-Black", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0D2031",
        secondary: {
          DEFAULT: "#D69006",
          100: "#AD6E14",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
