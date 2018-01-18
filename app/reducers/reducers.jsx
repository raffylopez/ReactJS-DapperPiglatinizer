var redux = require("redux");
var uuid = require("uuid");

var initState = {
  name: "Hawk",
  email: "hawk@foo.com"
};

export const syncedTypingReducer = (
  state = {
    text: "",
    options: {
      minChars: 3,
      minCharsActive: true,
      ignoreCommonWordsActive: true
    }
  },
  action
) => {
  var { newText } = action;
  switch (action.type) {
    case "SYNCEDTYPING::CHANGE_TEXT":
      return { ...state, text: newText };
    case "SYNCEDTYPING::TOGGLE_IGNORE_COMMON":
      return {
        ...state,
        options: {
          ...state.options,
          ignoreCommonWordsActive: !state.options.ignoreCommonWordsActive
        }
      };
    case "SYNCEDTYPING::TOGGLE_MIN_CHARS":
      return {
        ...state,
        options: {
          ...state.options,
          minCharsActive: !state.options.minCharsActive
        }
      };
    case "SYNCEDTYPING::SET_MIN_CHARS":
      return {
        ...state,
        options: {
          ...state.options,
          minChars: action.minChars
        }
      };
    default:
      return state;
  }
};

export var awesomeFormReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUBMIT_REGISTRATION":
      return { ...state, name: action.name, email: action.email };
    default:
      return state;
  }
  // this shouldn't be reached
};

export var widgetMessageReducer = (state = "START", action) => {
  switch (action.type) {
    case "CHANGE_MESSAGE":
      return "FOOBAR";
    case "SAY_HELLO":
      return "ALOHA";
    default:
      return state;
  }
  // this shouldn't be reached
};

export const foodieReducer = (state = { food: "" }, action) => {
  switch (action.type) { // param (newFood)
    case "CHANGE_FOOD_TO":
      console.log("dfsdfsdf");
      return { food: action.newFood };
    default:
      return state;
  }
};

import { combineReducers } from "redux";

var todoPartDeuxReducerInitial = {
  todos: [
    {
      text: "Ensure proper temperature of cryogenic chambers",
      completed: false,
      id: uuid()
    },
    { text: "Recalibrate fusion generators", completed: false, id: uuid() },
    { text: "Adjust planetary slingshot angle", completed: false, id: uuid() }
  ],
  searchKey: ""
};
export const todoPartDeuxReducer = (
  state = todoPartDeuxReducerInitial,
  action
) => {
  var { newTodo, newTodos, newFilteredTodos, newSearchKey } = action;
  switch (action.type) {
    case "TODO_PART_DEUX::ADD_TODO":
      return {
        ...state,
        todos: state.todos.concat([newTodo])
      };
    case "TODO_PART_DEUX::SET_TODOS":
      return {
        ...state,
        todos: newTodos
      };
    case "TODO_PART_DEUX::SET_SEARCHKEY":
      return {
        ...state,
        searchKey: newSearchKey
      };
    // case 'TODO_PART_DEUX::SET_FILTERED_TODOS':
    //   return {
    //     ...state,
    //     filteredTodos: newFilteredTodos
    //   }
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.todo]);
    default:
      return state;
  }
  // this shouldn't be reached
};

var addTodoAction = todo => {
  return {
    type: "ADD_TODO",
    todo
  };
};

var store = redux.createStore(redux.combineReducers({ todos: todosReducer }));
store.subscribe(() => {
  console.log("Foo");
});
store.dispatch(addTodoAction());
console.log("Done");
