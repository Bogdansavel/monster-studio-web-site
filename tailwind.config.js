/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto']
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}