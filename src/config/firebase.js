import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_VERCEL_ENV_API_KEY || process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_VERCEL_ENV_AUTH_DOMAIN || process.env.REACT_APP_APP_ID,
  projectId: process.env.REACT_APP_VERCEL_ENV_PROJECT_ID || process.env.REACT_APP_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_VERCEL_ENV_STORAGE_BUCKET || process.env.REACT_APP_MESSAGING_SENDER_ID,
  messagingSenderId: process.env.REACT_APP_VERCEL_ENV_MESSAGING_SENDER_ID || process.env.REACT_APP_PROJECT_ID,
  appId: process.env.REACT_APP_VERCEL_ENV_APP_ID || process.env.REACT_APP_STORAGE_BUCKET
};

export const firebase = initializeApp(firebaseConfig);