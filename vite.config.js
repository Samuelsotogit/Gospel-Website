import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// site will be served at https://samuelsotogit.github.io/Gospel-Website/
export default defineConfig({
  base: "/Gospel-Website/",
  plugins: [react()],
});