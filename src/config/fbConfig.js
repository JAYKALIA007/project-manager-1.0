import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyCL82iFKdZcDGMMAtJPmzV7YILaIb9Bf1M",
  authDomain: "project-manager-98f99.firebaseapp.com",
  projectId: "project-manager-98f99",
  storageBucket: "project-manager-98f99.appspot.com",
  messagingSenderId: "624781308798",
  appId: "1:624781308798:web:3b48464478721b1571f92f",
  measurementId: "G-C34HW6ZNZT",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timeStampsInSnapshots: true });

export default firebase;
