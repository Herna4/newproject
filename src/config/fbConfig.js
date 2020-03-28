import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCD7C80brQxfWlZFOYUTg1G8DKNug0sIa8",
    authDomain: "net-project-7a9bd.firebaseapp.com",
    databaseURL: "https://net-project-7a9bd.firebaseio.com",
    projectId: "net-project-7a9bd",
    storageBucket: "net-project-7a9bd.appspot.com",
    messagingSenderId: "40284732305",
    appId: "1:40284732305:web:68f0d0b7e3166e3fd93830",
    measurementId: "G-G99JFH7DRN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ 
    // timestampsInSnapshots: true
  })
  // firebase.analytics();

  export default firebase;