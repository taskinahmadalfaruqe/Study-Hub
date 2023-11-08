/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '1rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    fontFamily: {
      'Rancho': ['Rancho', 'cursive'],    
      'Raleway': ['Raleway', 'sans-serif'],    
    },
    extend: {
      colors: {
        'blackColor': '#000000',
        'whiteColor': '#FFFFFF',
        'blueColor': '#214185',
        'orangeColor': '#FCA311',
        'plataniamColor': '#E5E5E5',
        'greenColor': '#15803d',
      },
    },
  },
  plugins: [require("daisyui")],
}

