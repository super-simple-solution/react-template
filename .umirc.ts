import { defineConfig } from "umi";

export default defineConfig({
  history: { type: 'hash' },
  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
