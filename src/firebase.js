import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChUaQPfcReEgAOpKKMDmtq1oyCileGZrc",
    authDomain: "sivut-social.firebaseapp.com",
    projectId: "sivut-social",
    storageBucket: "sivut-social.appspot.com",
    messagingSenderId: "778918135364",
    appId: "1:778918135364:web:337393c3ed25bb4968de11"
};


// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
export { db, auth }