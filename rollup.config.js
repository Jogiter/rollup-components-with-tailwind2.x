import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue';
require('dotenv').config();

function external(id) {
  return (
    id in pkg.dependencies ||
    id in pkg.peerDependencies ||
    ['path'].includes(id)
  )
}

export default {
  input: './src/index.js',
  output: {
    format: 'es',
    file: pkg.main,
  },
  external,
  plugins: [
    vue(),
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }),
  ],
};
