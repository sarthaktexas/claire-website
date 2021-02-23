module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        gilroy: 'Gilroy, sans-serif',
        inter: 'Inter, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
