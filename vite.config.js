import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
},
resolve: {
  alias: {
    util: 'rollup-plugin-node-polyfills/polyfills/util'
  }
},
optimizeDeps: {
  esbuildOptions: {
    plugins: [
          NodeGlobalsPolyfillPlugin({
              process: true,
              buffer: true
          }),
          NodeModulesPolyfillPlugin()
    ]
  }
}
})
