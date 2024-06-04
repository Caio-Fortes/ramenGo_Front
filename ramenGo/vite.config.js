import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  outputDir: path.resolve(__dirname, '../server/public'),
  transpileDependencies: true,
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:5000'
      }
    }
  }
})
