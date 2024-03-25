/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        subtle: 'subtle 1s ease-in-out infinite',
      },
      keyframes: {
        subtle: {
          '0%,50%,100%': { transform: 'rotate(-0.3deg)' },
          '25%,75%': { transform: 'rotate(0.3deg)' },
        }
      }
      
  },
  plugins: [],
}}