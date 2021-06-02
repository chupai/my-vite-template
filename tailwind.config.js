module.exports = {
  mode: 'jit',
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: {},
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
