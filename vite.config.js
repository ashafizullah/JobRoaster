import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true
  },
  // Tambahkan konfigurasi untuk mode dev
  build: {
    sourcemap: true,
    rollupOptions: {
      external: [
        // Eksternal URL untuk PDF.js worker
        new RegExp('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/.*')
      ]
    }
  },
  optimizeDeps: {
    exclude: ['pdfjs-dist']
  }
})