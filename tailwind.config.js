module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'tokyo-img': "url('../img/tokyostation.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
