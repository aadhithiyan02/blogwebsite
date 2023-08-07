// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// import {getFirestore} from 'firebase/firestore'
// import {getStorage} from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyAVm7UssCpGHxvY76TgM4LCDoyo9F7FbQI",
//   authDomain: "blog-17d94.firebaseapp.com",
//   projectId: "blog-17d94",
//   storageBucket: "blog-17d94.appspot.com",
//   messagingSenderId: "587282271541",
//   appId: "1:587282271541:web:d2c4c83d227a7ef4d5107c"
// };

// const app = initializeApp(firebaseConfig);

// export const db=getFirestore(app);
// export const auth=getAuth(app);
// export const provider=new GoogleAuthProvider();
// export const storage=getStorage(app);

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVm7UssCpGHxvY76TgM4LCDoyo9F7FbQI",
  authDomain: "blog-17d94.firebaseapp.com",
  projectId: "blog-17d94",
  storageBucket: "blog-17d94.appspot.com",
  messagingSenderId: "587282271541",
  appId: "1:587282271541:web:d2c4c83d227a7ef4d5107c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const storage = getStorage(app);


