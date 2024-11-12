// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { API_ROOT } from './src/utils/constants'


// // https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     'process.env': process.env,
//   },
//   plugins: [react()],
//   server: {
//     port: 3000,
//     proxy:{
//       "/api":{
//         target: API_ROOT ,
//         changeOrigin:true,
//         secure: true,
//       }
//     }
//   }
// })


// Cấu hình Vite tùy theo môi trường
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_BUILD_MODE': JSON.stringify(import.meta.env.VITE_BUILD_MODE || 'http://localhost:5000'), // mặc định cho dev
  },
  server: {
    proxy: mode === 'development' ? {
      '/api': {
        target: 'http://localhost:5000', // Local backend trong development
        changeOrigin: true,
        secure: false,
      },
    } : undefined,
  },
}));
