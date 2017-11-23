export var ipfyReducer = (state = {
    isFetching: false,
    url       : undefined,
    doneSomething       : false
}, action) => {
      console.log(action.type)
    switch (action.type) {
        case 'DO_SOMETHING':
            return Object.assign(state, {doneSomething: true});
        case 'START_FETCH':
            return Object.assign(state, {isFetching: true, url: undefined});
        case 'FETCH_COMPLETE':
            return Object.assign(state, {isFetching: false, url: action.url});
        default:
            return state;
    }
    // this shouldn't be reached
}

export var activityReducer = (state = {
  isActive: false
}, action) => {
  // action.foo = 123
  switch (action.type) {
    case 'MAKE_ACTIVE':
      return {
        isActive: true
      }
    default:
      return state
  }
}

export var messageReducer = (state = "<none>", action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message
    default:
      return state;
  }
  // this shouldn't be reached
}
