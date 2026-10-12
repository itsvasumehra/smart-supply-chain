import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  // Sends /api calls to the Node backend (avoids CORS problems in development)
  server: { proxy: { '/api': 'http://localhost:5000' } },
})
