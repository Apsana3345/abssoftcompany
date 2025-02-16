import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({


  server: {
    allowedHosts: [
      'https://c364-2407-5200-400-3181-dc8e-ce28-1cf2-e309.ngrok-free.app',
      // other allowed hosts can go here
    ],},
  plugins: [react()],
})
