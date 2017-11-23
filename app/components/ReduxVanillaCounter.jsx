/*
 * ReduxVanillaCounter.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var redux = require("redux");

const clickCountReducer = (state = { clickCount: 0 }, action) => {
  var { newCount } = action;
  switch (action.type) {
    case "SET_COUNT":
      return { ...state, clickCount: newCount };
    default:
      return state;
  }
};

var store = redux.createStore(clickCountReducer);

store.subscribe(() => {
  console.log(store.getState());
});

var incrementCountAction = () => {
  return {
    type: "SET_COUNT",
    newCount: store.getState().clickCount + 1
  };
};

var resetCountAction = () => {
  return {
    type: "SET_COUNT",
    newCount: 0
  };
};

class ReduxVanillaCounter extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}

  clickHandler = () => {
    console.log(store.getState().clickCount);
    store.dispatch(incrementCountAction());

    // forceUpdate() is needed since we aren't using react-redux bridge,
    // and we're doing all this in one module
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        This is ReduxVanillaCounter.jsx
        <p>
          You clicked the button {store.getState().clickCount} number of times!
        </p>
        <button className="button" onClick={this.clickHandler}>
          Click Me.
        </button>
        <button
          className="hollow button"
          onClick={() => {
            store.dispatch(resetCountAction());
            this.forceUpdate();
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

ReduxVanillaCounter.propTypes = {};

ReduxVanillaCounter.defaultProps = {};

module.exports = ReduxVanillaCounter;
