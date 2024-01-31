import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOrAUqCJa6KaSQrV8U0VIHI7a-LjybWaQ",
  authDomain: "bbc-clone-e010c.firebaseapp.com",
  projectId: "bbc-clone-e010c",
  storageBucket: "bbc-clone-e010c.appspot.com",
  messagingSenderId: "28651387648",
  appId: "1:28651387648:web:a8efc78a0da93fedc851e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)