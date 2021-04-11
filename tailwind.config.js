module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      robot: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'dark-black': '#272727',
        'dark2-black': '#1e1e1e',
        'darkest-black': '#121212'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
