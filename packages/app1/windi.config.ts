import path from 'path'
import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: [
      path.resolve(__dirname, '**/*.{vue,ts}'),
      'src/**/*.{vue,ts}',
      'components/**/*.{vue,ts}',
      '../atomic/atoms/**/**/*.{vue.ts}',
    ],
    exclude: ['public', 'index.html'],
  },
  plugins: [typography],
  safelist: ['!opacity-0', 'data-theme'],
  shortcuts: {
    'abs-t': 'absolute bottom-0 left-0 right-0',
    'abs-tl': 'absolute top-0 left-0',
    'abs-tr': 'absolute top-0 right-0',
    'abs-b': 'absolute bottom-0 left-0 right-0',
    'abs-bl': 'absolute bottom-0 left-0',
    'abs-br': 'absolute bottom-0 right-0',
  },
  attributify: true,
  darkMode: 'class',
  preflight: {
    includeBase: true,
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: { color: 'inherit' },
            b: { color: 'inherit' },
            code: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            blockquote: { color: 'inherit' },
          },
        },
      },
    },
  },
})
