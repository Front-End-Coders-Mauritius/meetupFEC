module.exports = {
  mode: "jit",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Pacifico: ["Pacifico", "open-sans"],
      Mochiy: ['"Mochiy Pop P One"', "sans-serif"],
      FiraSans: ['"Fira Sans"', "sans-serif"],
      Major: ["Major Mono Display", "monospace"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      height: {
        80: "80vh",
        85: "85vh",
        90: "90vh",
        100: "100vh",
      },
      lineClamp: {
        3: "3",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
