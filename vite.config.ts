import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  const isProduction = process.env.NODE_ENV === 'production';
  
  return {
    plugins: [react()],
    // Set base URL for GitHub Pages
    base: isProduction ? '/technical-space/' : '/',
    define: {
      // Make environment variables available to the app
      'process.env': env,
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
