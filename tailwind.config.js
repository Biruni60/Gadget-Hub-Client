/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login':"url('https://i.ibb.co/mh6B26s/Sprinkle.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

