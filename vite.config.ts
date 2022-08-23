import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { vitePluginSar } from './plugins/vite-plugin-sar'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    Inspect(),
    vitePluginSar(),
    vueJsx(),
    vue()
  ],
  build: {
    minify: false
  }
})
