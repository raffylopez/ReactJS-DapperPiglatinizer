var firebase = require("firebase");
document.getElementById("app").innerHTML = "FirebaseTest";
console.log("FirebaseTest Start");
var $ = require("jquery");


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

var firebaseRef = firebase.database().ref();

firebaseRef.on('value', (snapshot)=> {
  console.log("VALUE CHANGED:")
  console.log(snapshot.val())
})

firebaseRef.set({
  appName: "Todo App Part Deux",
  isRunning: true,
  fruits: ["apple", "grapes"],
  user: {
    name: "John",
    age: 24
  },
  one: {
    two: {
      three: "foo!"
    }
  }
});
function firebaseSave() {
  firebaseRef
    .child("user")
    .child("name")
    .set("foobar")
    .then(
      response => {
        $("#app").html((i, orig) => {
          return orig + "..." + "Success!";
        });
      },
      err => {
        $("#app").html("Uh-oh");
        console.log("Error");
      }
    );

  // multipath
  firebaseRef.update({
    "one/two/three": "bar!"
  });
  // firebaseRef.remove()
  firebaseRef.update({ isRunning: null });
  firebaseRef.child("user/age").remove();

  return true;
}

var formText =
  "<input type='text'/><input type='button' id='fooButton' value='Go' />";
firebaseRef.child("appName").set("Foobar");
var europa = document.createElement("div");
europa.setAttribute("id", "europa");
document.getElementById("app").appendChild(europa);
document.getElementById("europa").innerHTML = formText;
document.getElementById("fooButton").onclick = firebaseSave;

function tag(targetId, tagname, attributes, html) {
  var elem = document.createElement(tagname);
  elem.setAttribute(attributes);
  document.getElementById(targetId).appendChild(europa);
  elem.innerHTML = html;
}

firebaseRef.once("value").then(
  snapshot => {
    console.log(snapshot.val());
  },
  err => {
    console.log("ERROR: " + err);
  }
);



firebaseRef
  .child("appName")
  .once("value")
  .then(
    snapshot => {
      console.log(snapshot.key + ": " + snapshot.val());
    },
    err => {
      console.log("ERROR: " + err);
    }
  );
