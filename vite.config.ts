import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    allowedHosts: [
      'mastertherobots.com',
      'www.mastertherobots.com'
    ]
  },
  envDir: '.',
  define: {
    'process.env': {}
  }
});
