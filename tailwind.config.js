/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "cyan": "hsl(180, 66%, 49%)",
      "darkViolet": "hsl(257, 27%, 26%)",
      "myRed": "hsl(0, 87%, 67%)"
    }
  },
  plugins: [],
}