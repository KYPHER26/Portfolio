/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050609",
        surface: "#0A0D14",
        card: "#0D111A",
        border: "#1B2233",
        accent: {
          DEFAULT: "#2F6FED",
          light: "#5B8DF7",
          dim: "#1C3D82",
        },
        cyan: {
          glow: "#4EE1FF",
        },
        ink: {
          DEFAULT: "#EAF0FB",
          dim: "#8B95AB",
          faint: "#5A6478",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(90,110,150,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(90,110,150,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(47,111,237,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(47,111,237,0.5)",
        "glow-sm": "0 0 20px -6px rgba(78,225,255,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
