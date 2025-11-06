import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // استخدم مسار نسبي ليعمل على GitHub Pages
  plugins: [react()],
});
