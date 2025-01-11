/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          white: '#ffffff',  // Example light primary color
          skyblue: '#8be2e3', // Main primary color (used when calling `primary`)
          dark: '#0a0a0a',    // Dark primary color
        },
        'scrollbar-bg': '#333',
        'scrollbar-thumb': '#555',
      },
    },
  },
  plugins: [],
}