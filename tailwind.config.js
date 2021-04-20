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
        'light-blue': '#90F7EC',
        'dark-blue': '#32CCBC',
      },
      transitionProperty: {
        card: 'opacity, padding, max-height',
      },
      animation: {
        bounce: 'bounce 1s 1;',
      },
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
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities, theme }) => {
      addUtilities(
        {
          '.bg-app': {
            'background-image': `linear-gradient( 135deg, ${theme(
              'colors.light-blue'
            )} 10%, ${theme('colors.dark-blue')} 100%)`,
          },
        },
        ['responsive', 'hover']
      );
    }),
  ],
};
