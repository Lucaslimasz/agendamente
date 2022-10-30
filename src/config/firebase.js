import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_VERCEL_ENV_API_KEY,
  authDomain: process.env.REACT_APP_VERCEL_ENV_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_VERCEL_ENV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_VERCEL_ENV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_VERCEL_ENV_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_VERCEL_ENV_APP_ID
};

console.log (
  {
    apiKey: process.env.REACT_APP_VERCEL_ENV_API_KEY,
    authDomain: process.env.REACT_APP_VERCEL_ENV_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_VERCEL_ENV_PROJECT_ID,
    storageBucket: process.env.REACT_APP_VERCEL_ENV_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_VERCEL_ENV_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_VERCEL_ENV_APP_ID
  }
)

export const firebase = initializeApp(firebaseConfig);