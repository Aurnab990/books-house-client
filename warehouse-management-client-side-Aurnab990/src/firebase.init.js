// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjotPLJ_x7zp9OzzVA9gheGQBhb8de-ug",
  authDomain: "mognoassesment.firebaseapp.com",
  projectId: "mognoassesment",
  storageBucket: "mognoassesment.appspot.com",
  messagingSenderId: "258897895196",
  appId: "1:258897895196:web:0b565fe84469e63134a4d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;