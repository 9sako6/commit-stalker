import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [
      "**/node_modules/**",
      "./tests/e2e/**",
      "./tests-examples/**"
    ]
  },
})
