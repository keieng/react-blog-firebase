import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgDTlSbgRXSNpKdgWNLAma1DWVW_3-JKg",
  authDomain: "blog-341e3.firebaseapp.com",
  projectId: "blog-341e3",
  storageBucket: "blog-341e3.appspot.com",
  messagingSenderId: "140963410685",
  appId: "1:140963410685:web:8052c9f84b8ecad9120494",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
