import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { pluginoptions } from "@mightymeld/runtime";

const swcPlugins = [];

if (process.env.MIGHTYMELD) {
  swcPlugins.push([
    "@mightymeld/runtime/swc-plugin-mightymeld",
    pluginoptions(),
  ]);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: swcPlugins,
    }),
  ],
});
