import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyD_vNOwRWB-irZaWq8WTLKJ9Lg8sGhPIXw",
    authDomain: "social-cool-c182d.firebaseapp.com",
    projectId: "social-cool-c182d",
    storageBucket: "social-cool-c182d.appspot.com",
    messagingSenderId: "697524642393",
    appId: "1:697524642393:web:1f047fde440e896a68c748"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;