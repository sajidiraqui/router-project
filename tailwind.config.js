/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: {
          900: '#0B0C10',
          800: '#1A1C1F',
          700: '#2E3138',
          100: '#D1D5DB',
          50: '#F7F8FA',
          
          // You can define other shades if needed
        },
    },
  },
  plugins: [],
}
}