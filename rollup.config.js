import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript2';
require('dotenv').config();

function external(id) {
  return (
    id in pkg.dependencies ||
    id in pkg.peerDependencies ||
    ['path'].includes(id)
  )
}

export default {
  input: './src/index.ts',
  output: {
    format: 'es',
    file: pkg.main,
  },
  external,
  plugins: [
    ts(),
    vue({ css: false }),
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
      ],
    }),
  ],
};
