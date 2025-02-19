/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arcade: ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'neon-pulse': {
          '0%': {
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #9333ea, 0 0 20px #9333ea',
          },
          '100%': {
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #9333ea, 0 0 40px #9333ea',
          },
        },
      },
    },
  },
  plugins: [],
};