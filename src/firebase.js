import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATZyny99K7EqrnUi5w9ZMeAhRGGXLa3f8",
  authDomain: "app-e364c.firebaseapp.com",
  projectId: "app-e364c",
  storageBucket: "app-e364c.appspot.com",
  messagingSenderId: "211650576494",
  appId: "1:211650576494:web:959fe55607aa4f1a99a67f",
  measurementId: "G-PJRCJVSPSD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
