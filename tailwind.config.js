/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: "#0A1D29",
          light: "#1A2C3D",
          dark: "#00141A"
        },
        secondary:{
          DEFAULT: "#1C3A5D",
          light: "#2A4B75 ",
          dark: "#132B41 "
        },
        'dark-gray':{
          DEFAULT: "#2C3E50",
          light: "#34495E",
          darker: "#1A242F"
        },
        'vibrant-blue':{
          DEFAULT: "#1E90FF",
          light: "#4BA3FF",
          dark: "#1565C0"
        },
        'aqua':{
          DEFAULT: "#4DD0E1",
          light: "#80E0E6",
          dark: "#26A69A"
        },
        'prim-txt':{
          DEFAULT: "#FFFFFF",
          light: "#F2F2F2",
          dark: "#BDC3C7"
        },
        'sec-txt':{
          DEFAULT: "#BDC3C7",
          light: "#D1D8DB",
          dark: "#95A5A6"
        },
      }
    },
  },
  plugins: [],
}

