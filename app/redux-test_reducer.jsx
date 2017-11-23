var reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign(state, {
        todos: [...state.todos, action.newItem]
      })
    case 'TOGGLE_SHOW_COMPLETED':
      return Object.assign(state, {
        showCompleted: !state.showCompleted
      })
    case 'CHANGE_LABEL_VALUE':
      return Object.assign(state, {
        labelValue: action.labelValue
      })
    case 'UBER_ACTION':
      return Object.assign(state, {
        searchText: action.searchText
      })
    default:
      return state;
  }
  // this must not be reached
}

module.exports = { reducer: reducer }
