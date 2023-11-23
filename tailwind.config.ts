import type { Config } from "tailwindcss";
import theme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { sans: ["atkinson", ...theme.fontFamily.sans] },
    },
  },
  plugins: [typography],
} satisfies Config;
