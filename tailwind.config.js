module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('../img/wovencity.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
