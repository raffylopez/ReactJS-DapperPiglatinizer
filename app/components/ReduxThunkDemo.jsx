import thunk from "redux-thunk";
import React, { Component } from "react";
import { connect } from "react-redux";
var redux = require("redux");

var reducer = (state = { value: "red" }, action) => {
  switch (action.type) {
    case "STD::CHANGE_VALUE":
      return { ...state, value: action.newValue };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.applyMiddleware(thunk));

var actionChangeValue = argument => {
  return (dispatch, getState) => {
    window.alert("yeah that just happened");

    dispatch({
      type: "STD::CHANGE_VALUE",
      newValue: argument
    });

    // by returning a new promise, we can chain a .then with store.dispatch()
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
};

export default class ReduxThunkDemo extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  clickHandler = () => {
    console.log("clicked");
    store.dispatch(actionChangeValue("blue")).then(
      ok => {
        console.log("foo");
      },
      err => {
        console.log("uh oh");
      }
    );
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <p>This is ReduxThunkDemo</p>
        <div className="callout success">
          "A thunk allows some custom code to execute before a
          store.dispatch(...) occurs"
        </div>
        <p>Value: {store.getState().value}</p>
        <button className="button" onClick={this.clickHandler}>
          Click Me.
        </button>
      </div>
    );
  }
}
