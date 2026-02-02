import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages set: base: '/REPO_NAME/'.
export default defineConfig({
  plugins: [react()],
  base: '/pp/',
})
