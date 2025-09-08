// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (keep as is)
const firebaseConfig = {
  apiKey: "AIzaSyBNrD4OA1h5C3VCOGN8Mrv3Cl2MIqrCvXk",
  authDomain: "llbp-b6f36.firebaseapp.com",
  projectId: "llbp-b6f36",
  storageBucket: "llbp-b6f36.appspot.com", // 👈 fix: use ".appspot.com"
  messagingSenderId: "228780722246",
  appId: "1:228780722246:web:3efdfbeb6de23d0a122247",
  measurementId: "G-MHQNSLCN2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);