import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      sourcemap: true
    }, {
      format: 'es',
      file: pkg.module,
      sourcemap: true
    }
  ],
  plugins: [
    typescript(),
    dts()
  ],
  exclude: '**/*.d.ts'
}
