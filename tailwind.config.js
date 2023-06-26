/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        josefin: ["Josefin Sans"],
        tilt: ["Tilt Warp"],
        blanks: ["Blank's Script"]
      },
      fontFace:{
        blanks:{
          
          'font-family': ["Blank's Script"],
          src: "url('src/assets/Images/fonts/BlanksscriptpersonaluseBdit-jEM6O.otf') format('truetype')",
        }
      }
    },
  },
  plugins: [],
};
