// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyActzAP0McOb9_9S3WVEekslFCoPNz3og0",
    authDomain: "freshbear-59c4f.firebaseapp.com",
    projectId: "freshbear-59c4f",
    storageBucket: "freshbear-59c4f.appspot.com",
    messagingSenderId: "231078483300",
    appId: "1:231078483300:web:5785bbf810bfde68411671",
    measurementId: "G-003WFM1TLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
}