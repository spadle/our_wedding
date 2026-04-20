/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FBF7EF",
          100: "#F4EEE3",
          200: "#EDE4D3",
          300: "#E2D5BD",
          400: "#D4C2A3",
        },
        oxblood: {
          50: "#F7E8E8",
          500: "#8C3A3D",
          700: "#4A1D1F",
          900: "#2B0F11",
        },
        brass: {
          300: "#D4B481",
          500: "#B08D57",
          700: "#876A3C",
        },
        ink: {
          700: "#2A221B",
          900: "#1A1512",
        },
        sage: {
          500: "#8A9A7B",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Instrument Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
    },
  },
  plugins: [],
};
