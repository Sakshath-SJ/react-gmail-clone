import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCWLITpHhpbPlIHAezysFEECkbl1PEE2dY",
  authDomain: "clone-with-reactjs-db854.firebaseapp.com",
  projectId: "clone-with-reactjs-db854",
  storageBucket: "clone-with-reactjs-db854.appspot.com",
  messagingSenderId: "290402162052",
  appId: "1:290402162052:web:ee6dc6c43b1a59027079d1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
