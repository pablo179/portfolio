import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./clientComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
      },
      maxWidth: {
        "8xl": "70rem",
      },
      colors: {
        'white': '#F6FAFB',
        'blue': '#1D9DC4',
        'stroke': '#F0F0DF',
      },
      borderRadius: {
        "4xl": "18px",
      },
    },
  },
  plugins: [],
};
export default config;
