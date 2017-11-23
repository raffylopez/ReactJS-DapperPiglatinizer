/*
 * redux-test.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */

var redux = require('redux');

initState = {
  searchText: 'foo',
  showCompleted: false,
  labelValue: 'aloha',
  todos: []
};

// state computer
var { reducer } = require('./redux-test_reducer.jsx')
var store = redux.createStore(reducer);

initState = {
  searchText: 'foo',
  showCompleted: false,
  labelValue: 'aloha',
  todos: []
};

store.subscribe(
  ()=>{
    var state = store.getState()
    console.log(state)
  }
)
// ----------------------
var displayState = () => {
  console.log(store.getState());
}

var action = {
  searchText: 'bar',
  type: 'UBER_ACTION'
};

store.dispatch(action);

store.dispatch({
  type: 'CHANGE_LABEL_VALUE',
  labelValue: 'hullo'
})

store.dispatch({ type: 'TOGGLE_SHOW_COMPLETED' })
store.dispatch({ type: 'TOGGLE_SHOW_COMPLETED' })
store.dispatch({ type: 'ADD_ITEM' , newItem: "ganymede"})
store.dispatch({ type: 'ADD_ITEM' , newItem: "europa"})
store.dispatch({ type: 'ADD_ITEM' , newItem: "io"})

