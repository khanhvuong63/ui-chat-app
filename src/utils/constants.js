// let apiRoot = '';
// console.log('import meta env' ,import.meta.env);
// console.log('process env' ,process.env);

// if (process.env.BUILD_MODE === 'dev') {
//   apiRoot = '/api';
// } if (process.env.BUILD_MODE === 'production') {
//   apiRoot = 'https://api-chat-app-209j.onrender.com';
// }
// console.log('apiroot', apiRoot);

//  export const API_ROOT = apiRoot;

export const API_ROOT  = process.env.BUILD_MODE === 'production' 
    ? '/api'
    : '/api';

console.log('apiroot:', API_ROOT);