/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bgg.png')",
        'footer-texture': "url('./src/assets/texture.svg')",
      },
      colors: {
        'nutral': '#FFFBF2', 
        'primary': '#FB7902',
      },
    },
  },
  plugins: [],
}

