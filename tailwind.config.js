/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f7f8f3',
          100: '#ebefd8',
          200: '#d8e0b8',
          300: '#c2cc93',
          400: '#aab872',
          500: '#8c9e4f',
          600: '#6b7a3d',
          700: '#556231',
          800: '#414a29',
          900: '#343c24',
          950: '#1a1e12',
        },
      },
    },
  },
  plugins: [],
}
