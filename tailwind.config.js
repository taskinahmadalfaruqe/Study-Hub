/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackColor': '#000000',
        'whiteColor': '#FFFFFF',
        'blueColor': '#214185',
        'orangeColor': '#FCA311',
        'plataniamColor': '#E5E5E5',
      },
    },
  },
  plugins: [require("daisyui")],
}

