import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': '/src',
      '@public': '/public',
      '@components': '/src/components',
      '@common': '/src/components/common',
      '@img': '/src/assets/images/'
    },
  },
});
