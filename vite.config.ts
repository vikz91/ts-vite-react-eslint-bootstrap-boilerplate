import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3010,
    host: '0.0.0.0',
    https: true
  },
  plugins: [react(), mkcert()],
});
