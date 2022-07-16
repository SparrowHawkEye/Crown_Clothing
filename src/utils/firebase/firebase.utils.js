import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcWJSu9YjzORXmxGR0zqdFz-pXWSdeYMo",
  authDomain: "crown-clothing-db-ba00f.firebaseapp.com",
  projectId: "crown-clothing-db-ba00f",
  storageBucket: "crown-clothing-db-ba00f.appspot.com",
  messagingSenderId: "166011924653",
  appId: "1:166011924653:web:5d96ead45f5fb8c2059624",
};

const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, GoogleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Can not create user, email already in use");
      } else {
        console.log("error creating the user", error.message);
      }
    }
  }
  return userDocRef;
  //if user data exists

  // return userDocRef

  // If user data does not exist
  // create/set the document with the data from userAuth in my Collection
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};
