import { initializeApp } from "@firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "@firebase/auth";
import { UserType } from "@/types/user";
import { firebaseConfig } from "./config";

initializeApp(firebaseConfig);
export const auth = getAuth()

export const firebaseLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
    
  } catch (error) {
    console.log(error);
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    throw new Error(error)
  }
}

export const firebaseLogout = async() => {
  auth.signOut()
};

export const convertToUser = (user: User): UserType => {
  return {
    id: user.uid,
    name: user.displayName || 'No name',
    iconPath: user.photoURL
  }
}