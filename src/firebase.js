import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCDD_x7Ss3wgBVjdoXCePk1CDUYbx8vPuc",
    authDomain: "disney-clone-26898.firebaseapp.com",
    projectId: "disney-clone-26898",
    storageBucket: "disney-clone-26898.appspot.com",
    messagingSenderId: "1075106659074",
    appId: "1:1075106659074:web:74ff7ca55bf2cfe7d0601b",
    measurementId: "G-4ZK1XZ2PW9"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;