import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "coffee-dukan.firebaseapp.com",
  projectId: "coffee-dukan",
  storageBucket: "coffee-dukan.appspot.com",
  messagingSenderId: process.env.FIREBASE_API_MESSAGING_SENDERID,
  appId: process.env.FIREBASE_API_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
