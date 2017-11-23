import firebase from 'firebase'

// automatically executes upon require/import
console.log("Loading firebase config")
try {
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCdeTlp1kQNYG_6XyamamoyIGTNoIZJUaQ",
  authDomain: "todo-part-deux-app.firebaseapp.com",
  databaseURL: "https://todo-part-deux-app.firebaseio.com",
  projectId: "todo-part-deux-app",
  storageBucket: "todo-part-deux-app.appspot.com",
  messagingSenderId: "588945160576"
};
firebase.initializeApp(config);
firebaseRef = firebase().ref()
// set, update, remove, once('value'), on
} catch(e) {
  console.log(`Uh oh: ${e}`)
}

// helper
export var firebaseRef = firebase.database().ref()
export default firebase;
