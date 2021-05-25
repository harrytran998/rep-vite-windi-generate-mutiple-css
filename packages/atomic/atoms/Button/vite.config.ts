// import rollupResolver from '@rollup/plugin-node-resolve';
import vitePluginVue from '@vitejs/plugin-vue';
import path from 'path';
import rollupTS from 'rollup-plugin-typescript2';
import type { ConfigEnv, UserConfig } from 'vite';
import pkg from './package.json';

const resolvePath = p => path.resolve(__dirname, p);

const banner = `/*!
* Package: ${pkg.name} 
* Version: v${pkg.version}
* Build date: ${new Date().toLocaleString('en-US')}
* (c) ${new Date().getFullYear()} @harrytran998.
* Released under the MIT License.
*/`;

export default ({ command, mode }: ConfigEnv): UserConfig => ({
  plugins: [
    vitePluginVue(),
    {
      ...rollupTS({
        check: true,
        tsconfig: resolvePath('tsconfig.json'),
      }),
      enforce: 'pre',
    },
  ],
  build: {
    minify: mode === 'production' ? 'terser' : false,
    lib: {
      entry: resolvePath('src/index.ts'),
      name: 'AButton',
    },
    terserOptions: {
      compress: {
        // keep Code in one line
        keep_infinity: true,
        // Used to delete console in production environment
        drop_console: true,
        collapse_vars: true,
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'commonjs',
          exports: 'named',
          dir: undefined,
          file: './dist/index.js',
          banner,
        },
        {
          format: 'esm',
          dir: undefined,
          exports: 'named',
          file: './dist/index.mjs',
          banner,
        },
      ],
    },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
});
