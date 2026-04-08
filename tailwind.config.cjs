/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'sea-pulse': 'sea-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-slow': 'glow 8s ease-in-out infinite',
      },
      keyframes: {
        'sea-pulse': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: .7, transform: 'scale(1.02)' },
        },
        'glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(6, 182, 212, 0.8))' },
        },
      },
      colors: {
        ocean: {
          900: '#020617',
          950: '#010409',
        },
      },
    },
  },
  plugins: [],
};
