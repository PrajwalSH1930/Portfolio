/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",    // Deep Tech Black
        secondary: "#161616",  // Elevated Surface
        accent: "#00f0ff",     // Electric Cyan (Cyber vibe)
        terminal: "#1a1a1a",   // Code Block color
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'], // The ultimate coder font
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}