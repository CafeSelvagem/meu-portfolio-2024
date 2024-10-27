import { defineConfig } from 'vite'// vite.config.js


export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: '',
    emptyOutDir: false,
  },
  server: {
    open: true,
  },
});

