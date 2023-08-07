import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBIgjKc8-chFzH6_zi6pTWWRSXIY6NdScQ",
  authDomain: "messaging-app-mern-bd06a.firebaseapp.com",
  projectId: "messaging-app-mern-bd06a",
  storageBucket: "messaging-app-mern-bd06a.appspot.com",
  messagingSenderId: "222662174800",
  appId: "1:222662174800:web:1c2e056db56936d314c955",
  measurementId: "G-H6N3QK264M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
export default firebaseApp;
