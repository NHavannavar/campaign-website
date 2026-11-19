import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site builds for the root of its own domain (Cloudflare Pages).
// The GitHub Pages workflow sets BASE_PATH=/campaign-website/ for its copy.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
