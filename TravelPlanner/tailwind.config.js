/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#212121',
      secondary: '#FFC107',
      lightgray: "#E5E5E5",
      purple: "#7C4DFF",
      darkpurple: "#5731C0",
      white: '#FFFFFF',
      black: '#000000',
      gray: '#979dac',
     
    },
    fontFamily: {
      'inter': "Inter",
      'montserrat': "montserrat",
      'barlow': "barlow",
      
    },
    extend: {
      gridTemplateColumns: {
        
        '2': 'repeat(2, minmax(30%, 1fr))',
      },
      boxShadow: {
        '2xl': '0 25px 30px -12px rgb(0 0 0 / 0.25);',
      }
    },
  },
  plugins: [],
}

