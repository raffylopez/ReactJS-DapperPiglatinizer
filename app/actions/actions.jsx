import thunk from 'redux-thunk'
export const changeColor = (newColor) => ({
  type: 'CHANGE_COLOR',
  color: newColor
});

export const sayHi = (greeting) => ({
  type: 'SAY_HI',
  greeting
});

export const addTodo = (newTodo) => { 
  return {
    type: 'TODO_PART_DEUX::ADD_TODO',
    newTodo
  }
};

export const setTodos = (newTodos) => { 
  return {
    type: 'TODO_PART_DEUX::SET_TODOS',
    newTodos
  }
};

export const setFilteredTodos = (newFilteredTodos) => { 
  return {
    type: 'TODO_PART_DEUX::SET_FILTERED_TODOS',
    newFilteredTodos
  }
};

export const setSearchKey = (newSearchKey) => { 
  return {
    type: 'TODO_PART_DEUX::SET_SEARCHKEY',
    newSearchKey
  }
};







