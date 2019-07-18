import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDW0-0cCcyXgdSt1R2sE0Dp3TxEaukZyjM",
    authDomain: "net-ninja-marioplan-d2665.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-d2665.firebaseio.com",
    projectId: "net-ninja-marioplan-d2665",
    storageBucket: "",
    messagingSenderId: "126311794378",
    appId: "1:126311794378:web:1b587e13876cc95b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()//.settings({ timestampsInSnapshots: true });

export default firebase;