// let apiRoot = '';
console.log('import meta env' ,import.meta.env);
console.log('process env' ,process.env);

// if (process.env.BUILD_MODE === 'dev') {
//   apiRoot = 'http://localhost:5000';
// } if (process.env.BUILD_MODE === 'production') {
//   apiRoot = 'https://api-chat-app-209j.onrender.com';
// }

// export const API_ROOT = apiRoot;

export const API_ROOT  = process.env.BUILD_MODE === 'production' 
    ? 'https://ui-chat-app.vercel.app' 
    : 'http://localhost:3000';