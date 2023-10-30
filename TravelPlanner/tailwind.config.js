/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#264653',
      secondary: '#2a9d8f',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#979dac',
     
    },
    fontFamily: {
      'inter': "Inter",
      'montserrat': "montserrat",
      
    },
    extend: {
      
    },
  },
  plugins: [],
}

