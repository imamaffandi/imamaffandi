import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// BASE_PATH is set by the Pages workflow ("/imamaffandi/", or "/" with a custom domain)
export default defineConfig({
  base: "/",
  plugins: [tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
