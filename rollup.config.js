import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const dev = process.env.BUILD === 'development';

export default {
  input: 'src/backup-card.ts',
  output: {
    file: 'dist/backup-card.js',
    format: 'es',
    sourcemap: dev
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false
    }),
    !dev && terser({
      format: {
        comments: false
      },
      compress: {
        drop_console: false
      }
    })
  ].filter(Boolean)
};
