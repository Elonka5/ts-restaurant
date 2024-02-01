import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  databaseURL: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
  authDomain: 'food-zero-api.firebaseapp.com',
  databaseURL:
    'https://food-zero-api-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'food-zero-api',
  storageBucket: 'food-zero-api.appspot.com',
  messagingSenderId: '388978102062',
  appId: '1:388978102062:web:cd9aeb56106c71012a34bf',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const firestore = getFirestore(app);
