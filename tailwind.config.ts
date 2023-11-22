import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config;
