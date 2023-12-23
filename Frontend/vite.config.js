import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Your Express backend
        changeOrigin: true,
        secure: false,
        // Path rewrite is optional, depending on your backend setup
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
