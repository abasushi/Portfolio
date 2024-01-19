/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background": "#FFDFCA",
        "primary": "#275d30",
        "secondary": "#ceeed3",
        "accent": "#5fab6a",
        "text": "#275d30"
      }
    },
    fontFamily: {
      inter: ["Inter, sans-serif"],
      instrumentSans: ["'Instrument Serif', serif"],
    },
    // screens: {
    //   lg: "1124px"
    // },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [],
}

