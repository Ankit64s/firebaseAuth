// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg4Z11lYLXRlYYP9WwASaSncdGIjlAP4k",
  authDomain: "authentication-react-app-293bb.firebaseapp.com",
  projectId: "authentication-react-app-293bb",
  storageBucket: "authentication-react-app-293bb.appspot.com",
  messagingSenderId: "390544433107",
  appId: "1:390544433107:web:fab51464d04371024e5926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = app.auth;

export const auth = getAuth(app);

const useAuth = () => {
    return { auth }; // Return the auth object
  };
export {useAuth};  

export default app;