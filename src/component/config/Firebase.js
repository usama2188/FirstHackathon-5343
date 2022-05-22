
import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPJ_guyr47qlCpOBwhsIS2H0OJd6neqFw",
  authDomain: "first-hackathon-991.firebaseapp.com",
  projectId: "first-hackathon-991",
  storageBucket: "first-hackathon-991.appspot.com",
  messagingSenderId: "193612434047",
  appId: "1:193612434047:web:a317c634aaab60e8490d4a",
  measurementId: "G-0Z4EE85CT1"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const db = firebase.firestore();
  export const storage = firebase.storage();


//   export const storage = firebase.storage();
  export const auth = firebase.auth();
  firebase.analytics();
  export default firebase;