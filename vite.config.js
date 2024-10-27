import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

//-
export default defineConfig({
  // ...
  rollupOptions: {
    input: 'src/index.js',
    plugins: [react()],
  },
});