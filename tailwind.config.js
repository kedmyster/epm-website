module.exports = {
  purge: [
    "./pages/**/*.js",
    "./pages/**/*.jsx",
    "./components/**/*.js",
    "./components/**/*.jsx",
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      body: [
        "Lato",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
      title: [
        "Varela Round",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      0.5: "0.5px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      fontSize: {
        "8.5xl": "7.5rem",
      },
      colors: {
        "epm-lighter-gray": "#EEEEEF",
        "epm-light-gray": "#A9ACB0",
        "epm-dark-gray": "#636466",
        "epm-yellow": "#FFD534",
      },
      opacity: {
        85: "0.85",
      },
      width: {
        101: "31rem",
        103: "33rem",
        105: "35rem",
        "container": "58.125rem",
        "3/4-screen": "75vw",
        "1/4-screen": "25vw",
      },
      height: {
        101 : "31.25rem",
        "2/3-screen": "66.66666vh",
        "1/3-screen": "33.33333vh",
        "1/2-screen": "50vh",
      },
      margin: {
        '15': '3.875rem',
        '-15': '-3.875rem',
        '22': '5.625rem',
        '-22': '-5.625rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
