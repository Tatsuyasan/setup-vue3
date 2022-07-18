import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import vitedgePlugin from 'vitedge/plugin.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitedgePlugin(),
    vue(),
    Components({
      dts: 'src/types/components.d.ts'
    }),
    Pages(),
    eslint()
  ],
  resolve: {
    alias: {
      '@': `${__dirname}/src`
    }
  }
});
