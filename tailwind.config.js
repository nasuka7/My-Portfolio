module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: theme => ({
        'tokyo-img': "url('../img/tokyostation.png')",
      }),
      colors: {
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b1e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
