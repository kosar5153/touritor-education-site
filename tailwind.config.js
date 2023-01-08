
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      keyframes: {
        'round-Anim': {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'cloudy-movement': {
          '0%': { transform: 'translateX(-80%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'book-movement': {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'woman-movement': {
          '0%': { transform: 'translateY(10px) translateX(20px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        'lamp-movement': {
          '0%': { transform: 'rotateZ(10deg)' },
          '100%': { transform: 'rotate(-10deg)' },

        },
        'nav-active': {
          '0%': { transform: ' scale(0)' },
          '100%': { transform: 'scale(-1)' },

        },
        'border-movement': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },

        },
      },
      animation: {
        'TwCon-round-Anim': 'round-Anim 3s linear infinite',
        'TwCon-cloudy-movement': 'cloudy-movement 6s linear infinite alternate',
        'TwCon-book-movement': 'book-movement 2s linear infinite alternate',
        'TwCon-woman-movement': 'woman-movement 2s linear infinite alternate',
        'TwCon-lamp-movement': 'lamp-movement .5s linear infinite alternate',
        'TwCon-nav-active': 'nav-active .5s linear infinite alternate',
        'TwCon-Border-movement': 'border-movement 10s linear infinite alternate'
      },
      colors: {
        'Main-Blue': '#264067',
        'INPUT-BLUE': '#2d6479',
        'Main-Green': '#0db481',
        'Bg-Dark': 'rgb(30,30,30)',
        'Dark-MainBg': '#27323A',
        'Dark-ItemBg': '#435055',
        'Dark-Teal': '#29A19C',
        'Dark-Sea': '#A3F7BF',
        'Dark-Pink': '#E23E57'
      },

    }
  },
  plugins: [],
}