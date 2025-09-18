  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [
      react(),
      tailwindcss(),   // ← new plugin
    ],
  server: {
    host: "0.0.0.0",  // listen on all network interfaces
    port: 5173,       // optional: fix port (default is 5173)
  },
  })
