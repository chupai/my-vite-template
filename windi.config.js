import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [require('@windicss/plugin-icons')],
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  safelist: '',
  attributify: {
    prefix: 'w:',
  },
  alias: {},
  theme: {
    extend: {
      colors: {},
    },
  },
});
