import { combineReducers } from 'redux';

export const mainReducer = (state = {color:"red", greeting: "Some text..."}, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.color
      };
      case 'SAY_HI':
        return {...state, greeting: "aloha!"}
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  mainReducer
});

export default combinedReducers;
