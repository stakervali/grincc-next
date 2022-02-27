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
        },
        salmon : {
          DEFAULT: '#f49097'
        },
        grinblue:{
          DEFAULT:"#1C46FF"
        },
        gringreen:{
          DEFAULT:"#81FF0F"
        }

      },
      backgroundImage: (theme) => ({
        'bg-grincc-logo-black':
            "url('https://images.unsplash.com/photo-1629651480694-edb8451b31aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80')",
        'bg-grincc-logo-transparent':
            "url('https://images.unsplash.com/photo-1629651480694-edb8451b31aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80')",

      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [
     require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}
