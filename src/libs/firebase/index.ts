import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/libs/firebase/config";

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase