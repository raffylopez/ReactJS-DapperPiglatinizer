var redux = require("redux");
var reducers = require("../reducers/reducers");
var thunk = require("redux-thunk");

export var configure = reducers => {
  var store = redux.createStore(reducers);
  store.subscribe(() => {
    console.log("redux-store.jsx: STATE CHANGE!");
    var state = store.getState();
    console.log(state);
  });
  return store;
};
