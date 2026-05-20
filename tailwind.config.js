const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#ecefeb',
          100: '#d9ded8',
          200: '#b6c0b5',
          300: '#859584',
          400: '#5d6f5b',
          500: '#455844',
          600: '#3a4c38',
          700: '#2e3d2c',
          800: '#243023',
          900: '#1a2419',
        },
        mustard: {
          50: '#fbf4dd',
          100: '#f6e9c3',
          200: '#efdca0',
          300: '#e3c66e',
          400: '#d6b13e',
          500: '#c79d09',
          600: '#b08808',
          700: '#9a7807',
          800: '#785d05',
          900: '#5a4604',
        },
        brand: {
          black: '#242F25',
          brown: '#865F36',
          beige: '#D2C5BC',
          eggshell: '#F0EFED',
          sunlight: '#FFFCF5',
        },
      },
      fontFamily: {
        display: ['var(--font-encode)', ...fontFamily.sans],
        body: ['var(--font-encode)', ...fontFamily.sans],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '12px',
      },
      maxWidth: {
        layout: '1280px',
        container: '1440px',
      },
      fontSize: {
        '2xs': ['11px', '1rem'],
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
      },
      letterSpacing: {
        wider2: '0.12em',
        widest2: '0.2em',
        widest3: '0.24em',
      },
    },
  },
  plugins: [],
};
