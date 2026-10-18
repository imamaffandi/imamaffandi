import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// BASE_PATH is set by the Pages workflow ("/imamaffandi/", or "/" with a custom domain)
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [tailwindcss()],
});
