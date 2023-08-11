module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        cart: "auto auto 1fr auto",
      },
      gridTemplateColumns: {
        bottomCart: "1fr auto",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {transform: "translateX(0%)"},
          "100%": {transform: "translateX(-100%)"},
        },
      },
      colors: {
        "initial-black": "#1D1D1D",
        "final-gray": "rgba(21, 21, 21, 0)",
      },
    },
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: {paintOrder: "fill stroke markers"},
      fms: {paintOrder: "fill markers stroke"},
      sfm: {paintOrder: "stroke fill markers"},
      smf: {paintOrder: "stroke markers fill"},
      mfs: {paintOrder: "markers fill stroke"},
      msf: {paintOrder: "markers stroke fill"},
    },
  },
  variants: {
    extend: {},
    textFillColor: ["responsive"],
    textStrokeColor: ["responsive"],
    textStrokeWidth: ["responsive"],
    paintOrder: ["responsive"],
  },
  plugins: [require("tailwindcss-text-fill-stroke")()],
};
