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
        vintage: {
          cream: "#F4F1E8",
          sepia: "#D4B896",
          brown: "#8B6F47",
          darkbrown: "#5D4E37",
          ink: "#2C3E50",
          crimson: "#8B2635",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
        vintage: ["'Playfair Display'", "'Crimson Text'", "'Old Standard TT'", "Georgia", "serif"],
      },
      backgroundImage: {
        "vintage-texture": "url('/textures/parchment.png')",
        "leather-texture": "url('/textures/leather.png')",
      },
      animation: {
        "parallax-slow": "parallax 10s linear infinite",
        "parallax-medium": "parallax 6s linear infinite",
        "parallax-fast": "parallax 3s linear infinite",
        "fade-in": "fadeIn 1s ease-out",
        "slide-in-left": "slideInFromLeft 0.8s ease-out",
        "bounce-in": "bounceIn 0.6s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;