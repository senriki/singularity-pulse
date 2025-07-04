import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default ({ mode }) => {
  // Load correct env file (.env.github, .env.production, etc.)
  const env = loadEnv(mode, process.cwd());

  console.log('🔥 VITE_BASE_URL:', env.VITE_BASE_URL); // should now show correct value

  return defineConfig({
    base: env.VITE_BASE_URL || '/',
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        includeAssets: [env.VITE_BASE_URL || '/' + 'offline.html'],
        manifest: {
          name: 'Singularity Pulse',
          short_name: 'Pulse',
          start_url: '/',
          display: 'standalone',
          background_color: '#000000',
          description: 'Singularity Pulse – AI-generated anime music universe blending story, emotion, and glitch memory.',
          theme_color: '#00fff7',
          icons: [
            {
              src: '/favicon.ico',
              sizes: '48x48',
              type: 'image/x-icon'
            },
            {
              src: env.VITE_BASE_URL || '/' + '/cover-image.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '/icon-192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          navigateFallback: env.VITE_BASE_URL || '/' + '/offline.html',
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.destination === 'document',
              handler: 'NetworkFirst'
            },
            {
              urlPattern: ({ request }) => request.destination === 'image',
              handler: 'CacheFirst'
            },
            {
              urlPattern: ({ request }) => request.destination === 'style',
              handler: 'StaleWhileRevalidate'
            }
          ]
        }
      })
    ]
  });
};
