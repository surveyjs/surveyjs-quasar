import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: fileURLToPath(
        new URL('./src/quasar-variables.sass', import.meta.url),
      ),
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      // tabulator-tables ESM build has no default export; survey-analytics expects one.
      {
        find: /^tabulator-tables$/,
        replacement: fileURLToPath(
          new URL(
            './node_modules/tabulator-tables/dist/js/tabulator.min.js',
            import.meta.url,
          ),
        ),
      },
    ],
  },
  server: {
    host: '127.0.0.1',
    port: 5174,
  },
})
