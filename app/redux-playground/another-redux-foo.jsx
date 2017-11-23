var redux = require('redux')
var reducers = require('./reducers/index.jsx')
var thunk = require('redux-thunk').default

var makeActiveAction = () => {
  return {
    type: 'MAKE_ACTIVE'
  }
}

var setMessageAction = (message) => {
  return {
    type: 'SET_MESSAGE',
    message
  }
}

var store = redux.createStore(
  redux.combineReducers({
    activity: reducers.activityReducer,
    message: reducers.messageReducer
  }),
  redux.compose(
    redux.applyMiddleware(thunk)
  )
)

store.subscribe(
  () => {
    var state = store.getState()
    console.log("isActive:" + state.activity.isActive)
    console.log("Message: " + state.message)
  }
)

store.dispatch(makeActiveAction())
store.dispatch(setMessageAction("foo"))

console.log('done')


