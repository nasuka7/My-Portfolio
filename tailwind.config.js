module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: "class",
  theme: {
    boxShadow:{
      "custom-light":"0 0 10px #313131",
      "custom-black":"5px 5px 10px #0a0c0e , -5px -5px 10px #14161c"
    },
    extend: {
      // backgroundImage: theme => ({
      //   'tokyo-img': "url('../img/tokyostation.png')",
      // }),
      colors: {
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
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
