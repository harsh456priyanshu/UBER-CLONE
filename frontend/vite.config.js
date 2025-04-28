// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import fs from 'fs'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change if needed
    open: true, // Auto-open browser
  }
})
