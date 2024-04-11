const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      header: ["Montserrat", "sans-serif"],
      header2: ["Nunito+Sans", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },

    fontSize: {
      'xs': '.75rem',     // 12px
      'sm': '.875rem',    // 14px
      'base': '1rem',     // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '4rem',      // 64px
      '7xl': '5rem',      // 80px
      '8xl': '6rem',      // 96px
      '9xl': '7rem',      // 112px
      '10xl': '8rem',     // 128px
      'vw-xs': '1vw',     // 2% of viewport width
      'vw-sm': '1.8vw',     // 3% of viewport width
      'vw-base': '4vw',   // 4% of viewport width
      'vw-lg': '5vw',     // 5% of viewport width
      'vw-xl': '15vw',     // 6% of viewport width
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    colors: {
      transparent: "transparent",
      primary: "#1b4a66",
      secondary: "#ff775e",
      white: "#ffffff",
      black: "#000000",
      yellow: "#f5af02",
      green: "#9ACD32",
      lila: "#e6e5ec",
      coral:"#f37d58",
      copy: "#303030",
      paper: "#fdf9e9",
      sand: "#e0ccbb",
      "off-black": "#303030",
      "grey-10": "#6c6b6d",
      "grey-20": "#7c7c7c",
      "grey-30": "#919091",
      "grey-40": "#929293",
      "grey-50": "#fdf9e9",
      "grey-60": "#edebf6",
      "grey-70": "#d8d8d8",
      "hero-gradient-from": "rgba(30, 81, 106, 0.75)",
      "hero-gradient-to": "rgba(27, 74, 102, 0.73)",
      "blog-gradient-from": "#8f9098",
      "blog-gradient-to": "#222222",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    shadows: {
      default: "0 2px 18px rgba(0, 0, 0, 0.06)",
      md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
    },

    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        42: "10.5rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
      },
      inset: {
        "2/5": "40%",
      },
      lineHeight: {
        'extra-loose': '130%',
        'loose': '110%',
        'tight': '90%',
        'extra-tight': '80%',
      },
      padding: {
        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
      },
      textIndent: {
        '1': '0.25rem',
        '2': '0.5rem',
      },
      height: {
        '50':  '50vh',
        '75':  '75vh',
        '100': '100vh',
        '150': '150vh',
        '200': '200vh',
        '300': '300vh',
      },
    },
  },
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('tailwindcss'),
  ],
}

