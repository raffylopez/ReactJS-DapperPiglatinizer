var redux = require('redux');

// Single Value Reducer
// --------------------
var singleValueReducer = (state = "some value", action) => {
  switch (action.type) {
    case 'CHANGE_SINGLE_VALUE':
      return "secret message yay!"
    default:
      return state;
  }
}

// Contacts Reducer
// ----------------
var contactsReducer = (state = ["initial"], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      console.log('added a contact!')
      return state.concat([action.newContact])
    case 'ACTION_2':
      console.log("hi")
      return Object.assign(state, {
        searchText: action.searchText
      })
    default:
      return state;
  }
  // this shouldn't be reached
}

var addContact = (newContact) => {
  return {
    type: 'ADD_CONTACT',
    newContact // equiv to newContact: newContact
  }
}

// Hobbies Reducer
// ---------------
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return state.concat([action.newHobby])
    case 'REMOVE_HOBBY':
      console.log("DELETE : " + action.hobbyToDelete)
      return state.filter((hobby) => {
        return hobby !== action.hobbyToDelete
      })
    default:
      return state;
  }
  // this shouldn't be reached
}

// Combine!
// --------
var reducers = redux.combineReducers({
  singleValue: singleValueReducer,
  hobbies: hobbiesReducer,
  contacts: contactsReducer
})
console.log('combined reducers...')
var store = redux.createStore(reducers)

console.log('created store...')
store.subscribe(
  () => {
    var state = store.getState()
    console.log('------')
    console.log(state.contacts)
    console.log(state.singleValue)
    console.log(state.hobbies)
  }
)

store.dispatch({ type: 'ADD_CONTACT' })
store.dispatch({ type: 'ADD_CONTACT' })
store.dispatch({ type: 'ADD_HOBBY', newHobby: 'skiing' })
store.dispatch({ type: 'ADD_HOBBY', newHobby: 'jetpacking' })
store.dispatch({ type: 'REMOVE_HOBBY', hobbyToDelete: 'jetpacking' })
store.dispatch({ type: 'ADD_HOBBY', newHobby: 'fishing' })

store.dispatch(addContact("Foo"))
