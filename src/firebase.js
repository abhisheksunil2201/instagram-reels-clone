import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXrubDQp8yZIVR7oQihWWMFwplz5zl-d0",
    authDomain: "reels-ig-clone-be375.firebaseapp.com",
    databaseURL: "https://reels-ig-clone-be375.firebaseio.com",
    projectId: "reels-ig-clone-be375",
    storageBucket: "reels-ig-clone-be375.appspot.com",
    messagingSenderId: "296120642210",
    appId: "1:296120642210:web:a2928a6c84f75468e445fb",
    measurementId: "G-2ZGX0JQ885"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();  

export default db;