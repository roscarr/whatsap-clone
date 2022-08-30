import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCUCEozZQHrvg9kfEPIji8SL6DncCCv9UM",
  authDomain: "whatsapp-clone-ee0b7.firebaseapp.com",
  projectId: "whatsapp-clone-ee0b7",
  storageBucket: "whatsapp-clone-ee0b7.appspot.com",
  messagingSenderId: "1730684063",
  appId: "1:1730684063:web:e91c0aaf6c1f25bce6eeaa",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
