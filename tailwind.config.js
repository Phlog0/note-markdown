/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  lightMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        textColor: "var(--color-text-base)",
        mdColor: "var(--markDown-bg)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),

  ],
}

