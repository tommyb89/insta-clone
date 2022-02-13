import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB44n0HuyuwlyatkUxl5XhdZdR_JOsj8PM",
  authDomain: "insta-clone-c9274.firebaseapp.com",
  projectId: "insta-clone-c9274",
  storageBucket: "insta-clone-c9274.appspot.com",
  messagingSenderId: "943065729444",
  appId: "1:943065729444:web:1457098e9cf03569815931",
  measurementId: "G-3RWMFGB22V",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
