import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBWNWyJbCgWv1NEMrW4kf1tftry2E8Yz2E",
    authDomain: "react-checkpoint.firebaseapp.com",
    projectId: "react-checkpoint",
    storageBucket: "react-checkpoint.appspot.com",
    messagingSenderId: "216217697854",
    appId: "1:216217697854:web:d14c0efb2baae812a85b6f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export  { projectStorage, projectFirestore, timestamp };