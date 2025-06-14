import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes it accessible via IP address
    // You can also explicitly set the port if you want, e.g., port: 3000
  }
})