import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBAXaVLwgkSN1YJmBSZ7T-rXyPdPZCnAug",
  authDomain: "data-43495.firebaseapp.com",
  projectId: "data-43495",
  storageBucket: "data-43495.appspot.com",
  messagingSenderId: "154616674380",
  appId: "1:154616674380:web:a35dd2fdb6f6481db7dce9",
  measurementId: "G-9S23PX9CP3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
