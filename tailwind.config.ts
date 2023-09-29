import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        tape: {
            "0%":{
                transform: 'translateX(100%)',
            },
            "100%":{
                transform: 'translateX(-100%)'
            }
        },
      },
      animation: {
        tape: 'tape 60s linear infinite',
      },
      colors: {
        primary: "#004aab",
        secondary: "#137dce",
        tertiary: "#39b5ff",
        light: "#f7faff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
export default config
