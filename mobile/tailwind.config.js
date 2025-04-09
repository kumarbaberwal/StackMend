/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",	//Deep Navy
        accent: "#00BCD4",	//Cyan
        background: "#F8F9FA",	//Light Gray
        text: "#1A1A1A",	//Almost Black
        success: "#4CAF50",	//Green
        warning: "#FF9800",	//Orange
        danger: "#F44336", //Red
      }
    },
  },
  plugins: [],
}