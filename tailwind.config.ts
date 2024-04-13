import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              50: "#fee7ef",
              100: "#fdd0df",
              200: "#faa0bf",
              300: "#ff6868",
              400: "#ef4747",
              500: "#f31260",
              600: "#c20e4d",
              700: "#920b3a",
              800: "#920b3a",
              900: "#310413",
              DEFAULT: "#ef4747",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#eceef4",
              100: "#d0d5e0",
              200: "#b3bac8",
              300: "#969eb1",
              400: "#80899f",
              500: "#6a758e",
              600: "#5c677d",
              700: "#4b5466",
              800: "#3b4251",
              900: "#282d39",
              DEFAULT: "#5c677d",
              foreground: "#ffffff",
            },
            

            focus: "#6A71F1",
          },
        },
        light: {
          colors: {
            primary: {
              50: "#fee7ef",
              100: "#fdd0df",
              200: "#faa0bf",
              300: "#ff6868",
              400: "#ef4747",
              500: "#f31260",
              600: "#c20e4d",
              700: "#920b3a",
              800: "#920b3a",
              900: "#310413",
              DEFAULT: "#ef4747",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#eceef4",
              100: "#d0d5e0",
              200: "#b3bac8",
              300: "#969eb1",
              400: "#80899f",
              500: "#6a758e",
              600: "#5c677d",
              700: "#4b5466",
              800: "#3b4251",
              900: "#282d39",
              DEFAULT: "#5c677d",
              foreground: "#ffffff",
            },
            focus: "#6A71F1",
            background: "#ffffff",
          },
        },
      },
    }),
  ],
};
