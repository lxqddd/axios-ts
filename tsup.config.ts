import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'], // 多入口
  splitting: true, // 代码分割
  sourcemap: true, // 生成源码映射
  clean: true, // 清理 dist 目录
  dts: {
    resolve: ['index.d.ts']
  }, // 生成类型声明文件
  format: ['cjs', 'esm'], // 输出模块格式
  minify: true // 压缩输出
})
