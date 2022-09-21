import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyAk1rZbPAifRK-etQdKossW8l_aljJp3Zo",
    authDomain: "todo-app-c51aa.firebaseapp.com",
    projectId: "todo-app-c51aa",
    storageBucket: "todo-app-c51aa.appspot.com",
    messagingSenderId: "868228809297",
    appId: "1:868228809297:web:b2a242c227a03bf2b12e70",
    measurementId: "G-6R8STXHX8D"
  };
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth();