module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'dev-loper': "url('../public/dev.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
