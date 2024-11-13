import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pyellow: "#FBAB20",
        phyellow: "#FFD07E",
        pdarkblue: "#3E446E",
        pbrown: "#5E4949",
      },
      fontFamily: {
        AdvertisingScript: ['Advertising Script', 'sans-serif'],
        KLINOM: ['KLINOM', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
