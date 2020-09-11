import  firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAOSm-yovtwJHJ_2YBH1INBmV_51e_lPqM",
      authDomain: "react-app-f2113.firebaseapp.com",
      databaseURL: "https://react-app-f2113.firebaseio.com",
      projectId: "react-app-f2113",
      storageBucket: "react-app-f2113.appspot.com",
      messagingSenderId: "383387228992",
      appId: "1:383387228992:web:3bdcbe5152013069f938a5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

export default firebase;
