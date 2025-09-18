/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00ccff',
          DEFAULT: '#00ccff',
          dark: '#0099cc',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#f8f9fa',
          dark: '#1e1e1e',
        },
        background: {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#333333',
          DEFAULT: '#333333',
          dark: '#e0e0e0',
          secondary: {
            light: '#666666',
            DEFAULT: '#666666',
            dark: '#b0b0b0',
          }
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}