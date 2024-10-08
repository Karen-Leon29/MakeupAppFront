import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      core: '/src/core',
      modules: '/src/modules',
      assets: '/src/assets',
    },
  },
  build: { chunkSizeWarningLimit: 2500 },
})
