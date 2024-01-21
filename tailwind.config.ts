import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#40BFFF',
      'secondary': '#FF4858',
      'tertiary': '#BCDDFE',
      'neutral': '#373737'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      raleway: ['Raleway', 'serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
