import { defineConfig } from 'windicss/helpers/index'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  safelist: 'p-3 p-4 p-5',
  purge: ['./src/**/*.{vue,tsx}'],
  theme,
  // plugins: [formsPlugin],
})
