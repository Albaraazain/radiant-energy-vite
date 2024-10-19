import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    plugins: [
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ],
    define: {
        'window.jQuery': 'jQuery',
        'window.$': 'jQuery'
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks: {
                    jquery: ['jquery'],
                    gsap: ['gsap'],
                    lenis: ['@studio-freight/lenis'],
                    lazysizes: ['lazysizes']
                }
            }
        }
    },
    optimizeDeps: {
        include: ['jquery', 'gsap', '@studio-freight/lenis', 'lazysizes']
    },
    resolve: {
        alias: {
            'jquery': 'jquery/dist/jquery.js',
        }
    }
});
