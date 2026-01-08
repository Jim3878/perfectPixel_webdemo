
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 使用相对路径，确保在 GitHub Pages 的二级目录下也能正确访问资源
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
