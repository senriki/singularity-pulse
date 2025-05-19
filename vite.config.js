import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['offline.html'],
      manifest: {
        name: 'Singularity Pulse',
        short_name: 'Pulse',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#00fff7',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '48x48',
            type: 'image/x-icon'
          },
          {
            src: '/cover-image.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        navigateFallback: '/offline.html',
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

})
