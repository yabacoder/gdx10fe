/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    customForms: theme => ({
      default: {
        input: {
          '&:focus': {
            boxShadow: undefined,
            borderColor: '#031F7E',
          },
        },
        select: {
          '&:focus': {
            boxShadow: undefined,
            borderColor: '#031F7E',
          }
        },
        textarea: {
          '&:focus': {
            boxShadow: undefined,
            borderColor: '#031F7E',
          }
        }
      }
    }),
    extend: {
      width: {
        'cardWidth': '18rem',
      },
      height: {

        '7Vh': '70vh',

      },
      colors: {
        gdblue: '#24315d',
        gdbase: '#031F7E',
        gdsubBlue: '#354372',
        gdtextBlue: 'rgba(2, 19, 90, 0.5)'
      },
      fontFamily: {
        getdev: 'RobotoRegular',
        getdevM: 'RobotoMedium',
        getdevB: 'RobotoBold',
        getdevBL: 'RobotoBlack'
      },
      fontSize: {
        '7xl': '5.5rem',
        '8xl': '6rem',
      },
      borderRadius: {
        'topNav': '22px',
      },
      boxShadow: {
        cardShadow: '0px 5px 50px 0px rgba(2,19,89,0.1)'
      },

    },
  },
  plugins: [],
};