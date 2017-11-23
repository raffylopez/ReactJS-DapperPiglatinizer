var redux = require('redux');
var {ipfyReducer} = require('../reducers')
var thunk = require('redux-thunk').default

export var configurestore = () => {
  var reducers = redux.combineReducers({
    ipfy: ipfyReducer
  });
  var store = redux.createStore(
    reducers,
    redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f=>f
    )
  );

  return store
}


