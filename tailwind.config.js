module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   sans : ['Quicksand','sans-serif' ]
      // },
      // // Palette generated with https://coolors.co/7e8987-4b4a67-fef102-f49097-f2f5ff
      colors:{
        yellow: {
           light: '#ffff58',
           DEFAULT: '#fef102', // Grin yellow
           dark: '#c7c000'
        },
        gray: {
          light: '#adb9b7',
          DEFAULT: '#7e8987', // Battleship Gray
          dark: '#525c5a'
        },
        purple: {
          light: '#777695',
          DEFAULT: '#4b4a67', // Independence
          dark: '#22223c'
        },
        pink: {
          light: '#ffc1c8',
          DEFAULT: '#f49097', // Salmon Pink
          dark: '#bf6169'
        },
        white: {
          light: '#ffffff',
          DEFAULT: '#f2f5ff',  //Ghost white
          dark: '#bfc2cc'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
     require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}
