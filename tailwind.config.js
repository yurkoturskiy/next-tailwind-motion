const { fontFamily } = require("tailwindcss/defaultTheme");

const colors = require("@radix-ui/colors");
let radixColors = {};
let radixDarkColors = {};
for (const [key, value] of Object.entries(colors)) {
  if (key.includes("Dark")) {
    radixDarkColors = { ...radixDarkColors, ...value };
  } else {
    radixColors = { ...radixColors, ...value };
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        d: {
          ...radixDarkColors,
        },
        ...radixColors,
      },
    },
  },
  plugins: [],
};
