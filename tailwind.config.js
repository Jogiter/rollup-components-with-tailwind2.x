module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{vue,ts,js}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F6F8FA',
          200: '#F0F2F6',
          300: '#EAEDF0',
          400: '#D9DCE0',
          500: '#C4C7CB',
          600: '#9DA1A7',
          700: '#70767F',
          800: '#272F3B',
          900: '#000',
        },
        primary: '#206EF7',
        success: '#32BE48',
        warning: '#F6A132',
        error: '#F74439',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
