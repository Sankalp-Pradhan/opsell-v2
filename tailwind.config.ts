import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Opsell brand
        brand: {
          DEFAULT: "#5046E5",
          light: "#F0EFFF",
          mid: "#7B73FF",
          dark: "#3B32C4",
          deeper: "#2A2494",
        },
        // AI tokens
        ai: {
          bg: "#F0EFFF",
          border: "#C7C4FF",
          pulse: "#5046E5",
        },
        // Neutrals (n-scale)
        n: {
          900: "#0F1114",
          800: "#1C1F24",
          700: "#2E3238",
          600: "#4A4F57",
          500: "#6B707A",
          400: "#8C919A",
          300: "#B0B4BC",
          200: "#D1D4D9",
          150: "#E2E4E8",
          100: "#F0F1F3",
          50: "#F8F9FA",
        },
        // Semantic
        success: {
          DEFAULT: "#16A34A",
          light: "#ECFDF5",
        },
        warning: {
          DEFAULT: "#F59E0B",
          light: "#FFFBEB",
        },
        error: {
          DEFAULT: "#EF4444",
          light: "#FEF2F2",
        },
      },
      fontFamily: {
        // Map to CSS variables set in layout/global CSS via Google Fonts
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        // Opsell product UI type scale
        "ds-display": ["32px", { fontWeight: "800", lineHeight: "1.05" }],
        "ds-h1": ["24px", { fontWeight: "700", lineHeight: "1.15" }],
        "ds-h2": ["20px", { fontWeight: "600", lineHeight: "1.2" }],
        "ds-h3": ["16px", { fontWeight: "600", lineHeight: "1.3" }],
        "ds-body": ["14px", { fontWeight: "400", lineHeight: "1.5" }],
        "ds-body-sm": ["13px", { fontWeight: "400", lineHeight: "1.5" }],
        "ds-caption": ["12px", { fontWeight: "500", lineHeight: "1.4" }],
        "ds-mono": ["13px", { fontWeight: "400", lineHeight: "1.5" }],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      spacing: {
        // Opsell 4px base unit
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "12": "48px",
        "14": "56px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
      },
      keyframes: {
        aiPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        aiShimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "ai-pulse": "aiPulse 1.2s ease infinite",
        "ai-pulse-2": "aiPulse 1.2s ease 0.2s infinite",
        "ai-pulse-3": "aiPulse 1.2s ease 0.4s infinite",
        "ai-shimmer": "aiShimmer 2s ease infinite",
      },
      backgroundImage: {
        "ai-shimmer":
          "linear-gradient(90deg, #F0F1F3 25%, #F0EFFF 50%, #F0F1F3 75%)",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
      boxShadow: {
        // Opsell elevation scale
        "elev-1": "0 1px 2px rgba(15,17,20,0.06)",
        "elev-2": "0 2px 8px rgba(15,17,20,0.08), 0 1px 2px rgba(15,17,20,0.04)",
        "elev-3": "0 8px 24px rgba(15,17,20,0.10), 0 2px 6px rgba(15,17,20,0.06)",
        "elev-4": "0 20px 48px rgba(15,17,20,0.14), 0 4px 12px rgba(15,17,20,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;