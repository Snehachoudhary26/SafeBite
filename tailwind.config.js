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
        capBlue: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0070ba',
          600: '#005a9c',
          700: '#00457c',
          800: '#00335e',
          900: '#002240',
        },
        safebiteGold: {
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
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
