
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzMdBweOde1vg_C_b00IPxFDaTGveaCBI",
  authDomain: "tienda-ecommerce-5b3c0.firebaseapp.com",
  projectId: "tienda-ecommerce-5b3c0",
  storageBucket: "tienda-ecommerce-5b3c0.appspot.com",
  messagingSenderId: "311060011298",
  appId: "1:311060011298:web:53dcaf66933ee386882d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);