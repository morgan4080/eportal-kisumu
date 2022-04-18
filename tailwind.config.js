module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        blue: {
          titleBlue: '#344f9f',
          buttonBlue: '#344f9f',
        }
      },
      height: {
        '58': '15rem'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
