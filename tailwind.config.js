/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'navbar-gratient':'linear-gradient(180deg,rgba(0,0,0,.7) 15%,transparent)'
      }
    },
  },
  plugins: [],
};
