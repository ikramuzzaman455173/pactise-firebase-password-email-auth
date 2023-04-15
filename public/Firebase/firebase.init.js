// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDllLul7E3DbR6ZctckKbCm6cNzeHuCZCk",
  authDomain: "pactise-email-auth-password.firebaseapp.com",
  projectId: "pactise-email-auth-password",
  storageBucket: "pactise-email-auth-password.appspot.com",
  messagingSenderId: "647446233629",
  appId: "1:647446233629:web:bd70a65f0f61d8ab1cfcf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app