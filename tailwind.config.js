const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/**.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'peach': '#FFAA85',
        'red-wine': '#B3315F'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus', 'active'],
      borderColor: ['group-focus'],
      boxShadow: ['group-focus'],
      opacity: ['group-focus'],
      textColor: ['group-focus', 'active'],
      textDecoration: ['group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({addUtilities, theme})=> {
      addUtilities({
        '.bg-app': {
          'background-image': `linear-gradient( 135deg, ${theme('colors.peach')} 10%, ${theme('colors.red-wine')} 100%)`
        }
      }, ['responsive', 'hover'])
    })
  ],
};
