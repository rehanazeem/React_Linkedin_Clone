import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGCLU1K7u_smTh6JnCHb3D09M4PyBM5nw",
  authDomain: "linkedin-clone-1af3d.firebaseapp.com",
  projectId: "linkedin-clone-1af3d",
  storageBucket: "linkedin-clone-1af3d.appspot.com",
  messagingSenderId: "300932493142",
  appId: "1:300932493142:web:cc713ab4483a1faffb30f7",
  measurementId: "G-0ZB9MWQD73",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
