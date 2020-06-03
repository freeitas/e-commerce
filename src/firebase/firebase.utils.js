import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzc_J331jF7mTQCkAl0Iz-AxJil4ThbmY",
  authDomain: "e-commerce-cef6d.firebaseapp.com",
  databaseURL: "https://e-commerce-cef6d.firebaseio.com",
  projectId: "e-commerce-cef6d",
  storageBucket: "e-commerce-cef6d.appspot.com",
  messagingSenderId: "668632654943",
  appId: "1:668632654943:web:dc2865febe03676606a7ea",
  measurementId: "G-T81NRT2DW9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
