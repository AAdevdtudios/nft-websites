/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./layouts/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': 'Poppins'
      },
      animation:{
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes:{
        marquee:{
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
        marquee2:{
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        },
      },
      colors:{
        'bg-products': '#f8f8f8',
        'whatsapp': '#25d366',
        'whatsapp2': '#128c7e',
        'telegram': '#2AABEE',
        'facebook': '#006aff',
        'accents': '#f68e3a',
        'secondaries': '#42040c',
        'primaries': '#989797',
        'hover-white': 'hsla(0,0%,100%,.9)'
      },
      aspectRatio:{
        '300/285': 'auto 300 / 285'
      },
      width:{
        '120': '120px',
        '430': '420px',
        '42': '42rem',
        '44': '45rem',
        '510': '510px',
        '700': '700px'
      },
      height:{
        '120': '120px',
        '35': '35rem',
        '42': '42rem',
        '44': '45rem',
        '430': '420px',
        '43': '300px'
      },
      backgroundImage:{
        'product-ads': "url('@/assets/images/shoe.jpg')",
        'hero-pattern': "url('@/assets/images/NFT/investment.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};