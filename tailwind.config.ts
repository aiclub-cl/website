import { describe } from "node:test";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			tablet: '768px',
  			desktop: '1154px'
  		},
  		colors: {
  			'pink-club': '#F00586',
  			'pink-robot': '#FFC5E9',
  			'white-pastel': '#FCF1F8',
  			'yellow-happy': '#F7CB15',
  			'green-perceptron': '#45BF5E',
  			'blue-academic': '#2191FB',
  			gray: '#CACECF',
  			'gray-clarito': '#EAEBEC',
  			night: '#101010',
  			space: '#474747'
  		},
  		fontSize: {
  			'4xl': [
  				'3.25rem',
  				{
  					lineHeight: '1.1'
  				}
  			],
  			'3xl': [
  				'3rem',
  				{
  					lineHeight: '1.2'
  				}
  			],
  			'2xl': [
  				'2.5rem',
  				{
  					lineHeight: '1.2'
  				}
  			],
  			xl: [
  				'1.5rem',
  				{
  					lineHeight: '1.3'
  				}
  			],
  			lg: [
  				'1.25rem',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			md: [
  				'1rem',
  				{
  					lineHeight: '1.5'
  				}
  			]
  		},
  		fontFamily: {
  			'instrument-sans': [
  				'Instrument Sans',
  				'sans-serif'
  			],
  			'instrument-serif': [
  				'Instrument Serif',
  				'serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
