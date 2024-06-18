import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    development: true // Enable development mode
  })],
  server: {
    port: 3003,
  }
  
});
