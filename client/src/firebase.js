// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mesaverde-ca50b.firebaseapp.com",
  projectId: "mesaverde-ca50b",
  storageBucket: "mesaverde-ca50b.appspot.com",
  messagingSenderId: "655789463307",
  appId: "1:655789463307:web:13b343891f89464644f40e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);