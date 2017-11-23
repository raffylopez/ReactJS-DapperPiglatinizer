var redux = require('redux')
var reducers = require('../reducers/reducers')

export var configure = (reducers)=> {
  var store = redux.createStore(reducers)
  store.subscribe(

    ()=>{
      // var state = store.getState()
      // console.log(state)
    }
  )
  return store
}
