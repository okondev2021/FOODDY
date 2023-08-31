/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'big': {'max': '1300px'},
      // => @media (max-width: 1300px) { ... }

      'md': {'max': '1030px'},
      // => @media (max-width: 1030px) { ... }
      'mobile': {'max': '640px'},
      // => @media (max-width: 640px) { ... }
    },
    extend: {
      fontFamily: {
        'Poppins' : ['Poppins', 'sans-serif']
      },
      colors: {
        primary:'#8CC63F',
        secondary: {
          100 : "#8CC63F",
          200:"#101D00"
        },
        tertiary : "#2D2D2D",
        extra : "#fbcc06"
      },
      backgroundImage: {
        'hero-pattern' : "url('./assets/images/Illustrations.svg')"
      },
      height: {
        'hero-main': '10%',
        'big-img':'400px',
        'small-img': '400px',
        'minor':'300px',
        'bigscreen':'130vh',
        'nav-empty': '0px',
        'nav_height': '70px'
      },
      width: {
        'big-hero' : '400px',
        'big-img':"1500px",
        'small-img': '800px'

      },
      lineHeight: {
        'big' : '3em'
      },
      

    },
  },
  plugins: [],
}