import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAkhw6sOz9roJyJCIix8q7X0nRNrmRZmvY",
    authDomain: "nextfire-22a60.firebaseapp.com",
    projectId: "nextfire-22a60",
    storageBucket: "nextfire-22a60.appspot.com",
    messagingSenderId: "272841401403",
    appId: "1:272841401403:web:1a40f810dbf69c0153681e"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
