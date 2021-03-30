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
        'darkest-black': '#121212'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
