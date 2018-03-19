
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'out/ulog.js',
    format: 'iife',
    sourcemap: 'true',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    })
  ],
};
