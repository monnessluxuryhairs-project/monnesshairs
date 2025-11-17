/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) rotateX(20deg) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) rotateX(0) scale(1)",
          },
        },
      },

      animation: {
        gradientShift: "gradientShift 15s ease infinite",
        fadeInUp: "fadeInUp 1s cubic-bezier(0.175,0.885,0.32,1.275) forwards",
      },

      colors: {
        gold: "#ffd700",
        lightPurple: "#9370db",
        black: "#121212",

        primaryPurple: "var(--primary-purple)",
        darkPurple: "var(--dark-purple)",
        lightPurpleVar: "var(--light-purple)",
        milk: "var(--milk)",
        goldVar: "var(--gold)",
        blackColor: "var(--black)",
        glass: "var(--glass)",
      },

      boxShadow: {
        glass: "var(--glass-shadow)",
      },

      backdropBlur: {
        10: "10px",
      },

      blur: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
