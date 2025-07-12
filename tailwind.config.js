/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basewhite: "var(--basewhite)",
        "blue600-primary": "var(--blue600-primary)",
        "grey-50": "var(--grey-50)",
        "grey-950": "var(--grey-950)",
        "monochrome-600": "var(--monochrome-600)",
        "monochrome-900": "var(--monochrome-900)",
        "primary-950": "var(--primary-950)",
      },
      fontFamily: {
        "body-text-body-3-regular":
          "var(--body-text-body-3-regular-font-family)",
      },
    },
  },
  plugins: [],
};
