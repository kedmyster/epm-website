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
        "xxs": "0.6875rem",
        "epm-base": "0.9375rem",
        "7.5xl": "5.25rem",
        "8.5xl": "7.5rem",
      },
      lineHeight: {
        '0': '0',
      },
      colors: {
        "epm-gray-100": "#f8f8f8",
        "epm-gray-300": "#EEEEEF",
        "epm-gray-500": "#A9ACB0",
        "epm-gray-700": "#636466",
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
        "lg-container": "73.75rem",
        "3/4-screen": "75vw",
        "1/4-screen": "25vw",
      },
      height: {
        101 : "31.25rem",
        110 : "56.375rem",
        "2/3-screen": "66.66666vh",
        "1/3-screen": "33.33333vh",
        "1/2-screen": "50vh",
        "1/6-screen": "16.66667vh",
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
    extend: {
      borderWidth: ['last'],
      margin: ['last'],
    },
  },
  plugins: [],
};
