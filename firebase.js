import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhMmyABqYklMl901dDLglerN122ka_OUU",
    authDomain: "lexferzon.firebaseapp.com",
    projectId: "lexferzon",
    storageBucket: "lexferzon.appspot.com",
    messagingSenderId: "625139157296",
    appId: "1:625139157296:web:f3a71e51d7e85f69b620f5",
    measurementId: "G-YH5ZLSTQPZ"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore()

export default db;