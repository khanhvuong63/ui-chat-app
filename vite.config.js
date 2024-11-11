// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { API_ROOT } from './src/utils/constants'


// // https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     'process.env': {},
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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Cấu hình Vite tùy theo môi trường
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? './' : '/', // Đặt base path cho production
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: mode === 'production' ? 'https://api-chat-app-209j.onrender.com' : 'http://localhost:5000',
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
