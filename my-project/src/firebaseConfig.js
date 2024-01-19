// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGCLU1K7u_smTh6JnCHb3D09M4PyBM5nw",
  authDomain: "linkedin-clone-1af3d.firebaseapp.com",
  projectId: "linkedin-clone-1af3d",
  storageBucket: "linkedin-clone-1af3d.appspot.com",
  messagingSenderId: "300932493142",
  appId: "1:300932493142:web:cc713ab4483a1faffb30f7",
  measurementId: "G-0ZB9MWQD73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);