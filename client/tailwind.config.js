/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        accent: '#85286F',
        secondary: '#A02C74',
        primary: '#4B0056',
        yellow: {
          400: '#facc15', // overwrite Tailwind's yellow-400 to use hex
        },
        gray: {
          300: '#d1d5db',
          500: '#6b7280',
        }
      },
      extend: {},
    },
    plugins: [],
  }
  