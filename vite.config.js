import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import macroPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss("./tailwind.config.js"), macroPlugin()],
});
