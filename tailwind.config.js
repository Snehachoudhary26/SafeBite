/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        safebite: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#10b981',
          600: '#00875a',
          700: '#006644',
          800: '#064e3b',
          900: '#022c22',
        },
        darkBg: {
          900: '#0b1120',
          950: '#060913',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
