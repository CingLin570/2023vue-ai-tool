/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // 水平置中
      padding: '12px', // 水平間距
    },
    screens: {
      'md': '992px',
      // => @media (min-width: 992px) { ... }
      'lg': '1296px',
      // => @media (min-width: 1296px) { ... }
    },
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(101%)" },
          "25%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(0%)" },
          "75%": { transform: "translateY(-101%)" },
          "100%": { transform: "translateY(-101%)" },
        },
      },
      // animation: {
      //   slideUp: "slideUp 4s ease-in infinite",
      // },
    },
  },
  plugins: [],
}
