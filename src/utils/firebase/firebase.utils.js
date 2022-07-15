import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcWJSu9YjzORXmxGR0zqdFz-pXWSdeYMo",
  authDomain: "crown-clothing-db-ba00f.firebaseapp.com",
  projectId: "crown-clothing-db-ba00f",
  storageBucket: "crown-clothing-db-ba00f.appspot.com",
  messagingSenderId: "166011924653",
  appId: "1:166011924653:web:5d96ead45f5fb8c2059624",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// firebaseApp;
