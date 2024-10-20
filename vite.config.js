import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  define: {
    // Remove these lines as we'll handle jQuery differently
    // 'window.jQuery': 'jQuery',
    // 'window.$': 'jQuery',
    global: "window",
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          jquery: ["jquery"],
          gsap: ["gsap"],
          lenis: ["@studio-freight/lenis"],
          lazysizes: ["lazysizes"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["jquery", "gsap", "@studio-freight/lenis", "lazysizes"],
    exclude: ["webflow-main"],
  },
  resolve: {
    alias: {
      jquery: "jquery/dist/jquery.js",
    },
  },
});
