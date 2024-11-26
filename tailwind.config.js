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
          light: "#2A4B75",
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
      },
      animation: {
        scroll: "scroll 80s linear infinite",
        slideUp: 'slideUp 0.8s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-200px * 10))" }, // Ajusta según el tamaño de las tarjetas
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#132B41 #1A242F', // Pulgar y pista
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent', // Pista
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#2A4B75', // Pulgar
            borderRadius: '10px',
            border: '1px solid #1A2C3D', // Borde del pulgar
          },
        },
      };
    
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

