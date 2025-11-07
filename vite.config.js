import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/clima-react/", // <-- o nome do seu repositório
  plugins: [react(), tailwindcss()],
});

