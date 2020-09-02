module.exports = {
  purge: ['./*.html', './**/*.pcss'],
  theme: {
    extend: {
      colors: {
        hotpink: '#FF006E',
        hotblue: '#4CC9F0',
        hotyellow: '#ffff00'
      }
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
