import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/components')) {
            return 'components';
          }
          if (id.includes('src/smooth-scroll')) {
            return 'smooth-scroll';
          }
          if (id.includes('src/webflow-main')) {
            return 'webflow';
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['jquery', 'gsap', '@studio-freight/lenis', 'lazysizes'],
  },
});