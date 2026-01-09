import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server:{
    proxy:{
      "/todo":{
        target: "https://fullstack-todolist-hfj1.onrender.com",
        changeOrigin: true,
        secure: false
      }
    }
  }
})
