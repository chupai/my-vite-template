import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'vite-plugin-components';
import viteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      customComponentResolvers: ViteIconsResolver(),
    }),
    viteIcons(),
  ],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
