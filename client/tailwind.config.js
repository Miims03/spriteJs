/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-80%)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(80%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-80%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(80%)' },
        },
      },
      animation: {
        slideOutLeft: 'slideOutLeft 0.5s ease-in-out forwards',
        slideInRight: 'slideInRight 0.5s ease-in-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-in-out forwards',
        slideOutRight: 'slideOutRight 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
