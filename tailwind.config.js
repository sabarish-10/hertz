/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#E6E6E6',
        cust: '#262626', 
        lightOrange: '#FE5D26',
        grayCustom: '#98989A',
        bigText:'#FE5D264D'
      },
      borderRadius: {
        'custom-lg': '0.74px',
      },
      spacing: {
        18: '4.5rem', 
      },
      fontFamily: {
        segoe: ['"Segoe UI"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
