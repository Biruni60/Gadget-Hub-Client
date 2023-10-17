// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM1MUbgVXiuywZ2-PEPvnfrg6tpwaYlNc",
  authDomain: "gadget-hub-auth.firebaseapp.com",
  projectId: "gadget-hub-auth",
  storageBucket: "gadget-hub-auth.appspot.com",
  messagingSenderId: "929044998489",
  appId: "1:929044998489:web:e7b2b8e800acad4cd14448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;