// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBhgfwroiunHbExQNPlo5CUfYh5XfodQ8",
  authDomain: "clone-ae3c9.firebaseapp.com",
  projectId: "clone-ae3c9",
  storageBucket: "clone-ae3c9.appspot.com",
  messagingSenderId: "933180562596",
  appId: "1:933180562596:web:59e6b83c520a6511b31a31",
  measurementId: "G-K5Y6PH9YHL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
