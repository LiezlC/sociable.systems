/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep teal-charcoal — body text, headings, dominant dark
        ink: "#1a2f38",
        // Warm cream — page background
        paper: "#f8f6f1",
        // Brown-orange accent — eyebrows, small highlights, tier badges
        rust: "#a84b2f",
        // Warm brown — secondary text, captions, muted UI
        steel: "#5e5240",
        // Brand teal — links, buttons, interactive elements
        teal: {
          DEFAULT: "#2d7a6d",
          light: "#5fb3a1",
          dark: "#13343b",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
