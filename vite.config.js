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

export default defineConfig(({ mode }) => {
  return {
    define: {
        'process.env': process.env,
      },
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: mode === 'development' ? 'http://localhost:5000' : 'https://api-chat-app-209j.onrender.com',
          changeOrigin: true,
          secure: mode === 'production',
          rewrite: (path) => path.replace(/^\/api/, ''), // Xóa `/api` khi gửi tới backend
        },
      },
    },
  };
});
