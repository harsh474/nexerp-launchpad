import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  // server: {
  //   host: "::",
  //   port: 8080,
  //   proxy: {
  //     "/erp": {
  //       target: "http://20.193.138.77:8000",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/erp/, "")
  //     }
  //   }
  // },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'au-manufacturing-erp': resolve(__dirname, 'au-manufacturing-erp/index.html'),
        // Add more geo routes here later:
        // 'uk-manufacturing-erp': resolve(__dirname, 'uk-manufacturing-erp/index.html'),
      },
    },
  },
}));


