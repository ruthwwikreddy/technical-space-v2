import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode, command }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  
  // Use the base from command line if provided, otherwise default to '/technical-space/'
  const base = process.env.VITE_BASE_PATH || '/technical-space/';
  
  return {
    plugins: [react()],
    base,
    define: {
      // Only expose VITE_ prefixed environment variables for security
      ...Object.keys(env).reduce((prev, key) => {
        prev[`process.env.${key}`] = JSON.stringify(env[key]);
        return prev;
      }, {}),
      __APP_ENV__: JSON.stringify(env.NODE_ENV || 'production'),
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    build: {
      // Ensure static assets are served with the correct MIME type
      assetsInlineLimit: 0,
    },
  };
});
