// Actions are just helpers, that return type and params to be fed to a reducer. This helps us avoid having to dispatch json objects with type:'FOO' ourselves.
export var startFetch = () => {
    return {type: 'START_FETCH'};
}
export var doSomething = () => {
    console.log('DoSomething()')
    return {type: 'DO_SOMETHING'};
}

export var completeLocationFetch = (url) => {
    return {type: 'FETCH_COMPLETE', url};
}

export var beginDoSomething = ()=> {
  return (dispatch,getState) => {
    console.log('BeginDoSomething()')
    setTimeout(
      ()=>{
        dispatch(doSomething())
      }, 4000
    )
  }
}
