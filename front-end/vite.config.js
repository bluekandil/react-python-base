import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load the env file based on current mode
  const env = loadEnv(mode, path.resolve())

  return {
    plugins: [react()],
    define: {
      __API_BASE_URL__: JSON.stringify(env.VITE_API_BASE_URL),
    },
  }
})