import { initializeApp } from "@firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { firebaseConfig } from "./config";

initializeApp(firebaseConfig);
export const auth = getAuth()

export const login = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error);
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
  }
}

export const logout = async() => {
  auth.signOut()
};