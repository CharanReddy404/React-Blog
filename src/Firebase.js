import firebase, { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAEWfhK_v1pZDVQhvm31F1U2EmjKYTqHg",
    authDomain: "react-blog-b787d.firebaseapp.com",
    projectId: "react-blog-b787d",
    storageBucket: "react-blog-b787d.appspot.com",
    messagingSenderId: "742450090970",
    appId: "1:742450090970:web:ded25774655504f67a66e3"
};

const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();