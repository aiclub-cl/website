import { describe } from "node:test";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "940px",
        desktop: "1154px"
      },
      colors: {
        'pink-club': '#F00586',
        'pink-robot': '#FFC5E9',
        'white-pastel': '#FCF1F8',
        'yellow-happy': '#F7CB15',
        'green-perceptron': '#45BF5E',
        'blue-academic': '#2191FB',
        'gray': '#CACECF',
        'gray-clarito': '#EAEBEC',
        'night': '#101010',
        'space': '#474747'
      },
      fontSize: {
        '4xl': ['3.25rem', { lineHeight: '1.1' }],    // 52px
        '3xl': ['3rem', { lineHeight: '1.2' }],       // 48px
        '2xl': ['2.5rem', { lineHeight: '1.2' }],     // 40px
        'xl': ['1.5rem', { lineHeight: '1.3' }],      // 24px
        'lg': ['1.25rem', { lineHeight: '1.4' }],     // 20px
        'md': ['1rem', { lineHeight: '1.5' }],        // 16px
      },
      fontFamily: {
        'instrument-sans': ['"Instrument Sans"', 'sans-serif'],
        'instrument-serif': ['"Instrument Serif"', 'serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
