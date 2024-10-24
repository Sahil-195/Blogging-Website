/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom-only': '10px 0px 5px -5px rgba(0, 0, 0, 0.5)', // Bottom shadow
        // 'top-only': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',    // Top shadow
        // 'right-only': '4px 0 6px -1px rgba(0, 0, 0, 0.1)',   // Right shadow
        // 'left-only': '-4px 0 6px -1px rgba(0, 0, 0, 0.1)',   // Left shadow
      },
    },
  },
  plugins: [],
}