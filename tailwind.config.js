/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0A8F65',
          dark: '#076B4C',
          light: '#12B37D',
          surface: '#DFF5EC',
        },
        sos: {
          DEFAULT: '#D63B3B',
          surface: '#FDEAEA',
        },
        amber_s: {
          DEFAULT: '#C47A12',
          surface: '#FEF3E0',
        },
        ink: {
          900: '#1A1916',
          700: '#2C2B28',
          500: '#6B6864',
          400: '#A09D99',
          200: '#E0DDD6',
          100: '#F0EEE9',
          50: '#F6F5F2',
        },
        sidebar: {
          DEFAULT: '#0C1A12',
          elev: '#152820',
          border: '#1F3226',
          text: '#7AB89A',
          active: '#5DD4A4',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
