import ViteVue from '@vitejs/plugin-vue'
import type { ConfigEnv, UserConfig } from 'vite'
import ViteWindiCSS from 'vite-plugin-windicss'
import pkg from './package.json'

const externalDeps = [...new Set([...Object.keys(pkg.dependencies ?? {})]), /node_modules/]

export default ({ command, mode }: ConfigEnv): UserConfig => ({
  resolve: {
    alias: [
      {
        find: '@', // @/xxx => src/xxx
        replacement: '/src',
      },
      {
        find: '#', // #/xxx => typings/xxx
        replacement: '/typings',
      },
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [ViteVue(), ViteWindiCSS()],
  build: {
    minify: false,
    rollupOptions: {
      external: externalDeps,
    },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 1500,
  },
})
