let apiRoot = '';
console.log('import meta env' ,import.meta.env);

if (import.meta.env.VITE_BUILD_MODE === 'development') {
  apiRoot = 'http://localhost:5000';
} else if (import.meta.env.VITE_BUILD_MODE === 'production') {
  apiRoot = 'https://api-chat-app-209j.onrender.com';
}

export const API_ROOT = apiRoot;
