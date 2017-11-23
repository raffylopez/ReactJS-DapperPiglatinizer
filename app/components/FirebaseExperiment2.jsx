import firebase, {firebaseRef} from 'app/firebase'

firebaseRef.off();
firebaseRef.set({
  name: "John",
  age: 24,
  hobbies: ["swimming", "skiing"],
  todos: {}
});

firebaseRef.child("name").on("value", successValue => {
  console.log(`${successValue.key} was changed to ${successValue.val()}`);
});

firebaseRef.child("todos").on("child_added", snapshot => {
  console.log("child_added");
});

firebaseRef.child("todos").push({ text: "carbon" });
firebaseRef.child("todos").push({ text: "vanadium" });
firebaseRef.child("todos").push({ text: "cobalt" });

firebaseRef.update({
  name: "Frank"
});

var fruits = ["apple", "grapes", "banana"];

firebaseRef.push({ fruits: {} });
fruits.map(fruit => {
  firebaseRef.child("fruits").push({ fruit });
});
