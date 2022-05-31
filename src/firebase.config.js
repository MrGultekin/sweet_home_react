import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRJ_wefmZjqEIybuYj4fdvCsJM-2gPo0g",
    authDomain: "dream-home-finder-c5302.firebaseapp.com",
    projectId: "dream-home-finder-c5302",
    storageBucket: "dream-home-finder-c5302.appspot.com",
    messagingSenderId: "870731730567",
    appId: "1:870731730567:web:928d7cd7a5795f92143222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // unnecessary
export const db = getFirestore();