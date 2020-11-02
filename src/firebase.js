import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLCdo_XyGtYJAv4c-uGQb0biK103jgDM8",
    authDomain: "clone-87fb5.firebaseapp.com",
    databaseURL: "https://clone-87fb5.firebaseio.com",
    projectId: "clone-87fb5",
    storageBucket: "clone-87fb5.appspot.com",
    messagingSenderId: "409251296886",
    appId: "1:409251296886:web:2951b2d5f6f3ff64151157",
    measurementId: "G-GJ84GNV0RY"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firestore = firebaseApp.firestore();
  const auth = firebase.auth();

  export {firestore,auth};
  