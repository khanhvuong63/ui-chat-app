// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


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
//         target: 'http://localhost:5000' ,
//         changeOrigin:true,
//         secure: true,
//       }
//     }
//   }
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      'process.env': process.env, // Cấu hình process.env để sử dụng các biến môi trường
    },
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
