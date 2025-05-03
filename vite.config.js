import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // This is important for GitHub Pages deployment
  plugins: [react()],
})
