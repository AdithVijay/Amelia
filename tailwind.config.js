/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'nutral': '#FFFBF2', 
        'primary': '#FB7902',
      },
    },
  },
  plugins: [],
}

