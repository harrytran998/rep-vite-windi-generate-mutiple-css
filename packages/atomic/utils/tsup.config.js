/**
 * @type {import('tsup').Options}
 */
module.exports = {
  clean: true,
  entryPoints: ['src'],
  format: ['cjs', 'esm'],
  splitting: true,
  dts: true,
  external: ['vue'],
  sourcemap: process.env.NODE_ENV === 'dev',
  ignoreWatch: ['**/{.git,node_modules}/**', 'dist', 'test'],
};
