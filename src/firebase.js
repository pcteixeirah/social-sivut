import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9yLnCW_XVQz9osXQ9mT6uJFf85GUy1FE",
    authDomain: "sivut-firestore.firebaseapp.com",
    projectId: "sivut-firestore",
    storageBucket: "sivut-firestore.appspot.com",
    messagingSenderId: "939948001896",
    appId: "1:939948001896:web:0d83ab30666be477c109dd"
};


// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
export { db, auth }