import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC7ZzFi8tr-1k-j6jFoiSSBa-h2-QMq_A0",
    authDomain: "react-firebase-authentic-14ee6.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-14ee6.firebaseio.com",
    projectId: "react-firebase-authentic-14ee6",
    storageBucket: "react-firebase-authentic-14ee6.appspot.com",
    messagingSenderId: "487199533972",
    appId: "1:487199533972:web:4b397d50b8304cd017bd81"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

}
export default Firebase;
