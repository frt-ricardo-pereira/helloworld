module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        sunset: {
          '50':  '#fdfcfa',
          '100': '#fbf1eb',
          '200': '#f7d2d6',
          '300': '#eca6ae',
          '400': '#e77582',
          '500': '#d8515e',
          '600': '#bf3741',
          '700': '#902026',
          '800': '#6b1c20',
          '900': '#401111',
        },
      }
    },
    fontFamily: {
      inter_black: [`inter_black`],
      inter_black_italic: [`inter_black_italic`],
      inter_bold: [`inter_bold`],
      inter_bold_italic: [`inter_bold_italic`],
      inter_extrabold: [`inter_extrabold`],
      inter_extrabold_italic: [`inter_extrabold_italic`],
      inter_extralight: [`inter_extralight`],
      inter_extralight_italic: [`inter_extralight_italic`],
      inter_italic: [`inter_italic`],
      inter_light: [`inter_light`],
      inter_light_italic: [`inter_light_italic`],
      inter_medium: [`inter_medium`],
      inter_medium_italic: [`inter_medium_italic`],
      sans: [`inter_regular`],
      inter_semibold: [`inter_semibold`],
      inter_semibold_italic: [`inter_semibold_italic`],
      inter_thin: [`inter_thin`],
      inter_thin_italic: [`inter_thin_italic`],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
