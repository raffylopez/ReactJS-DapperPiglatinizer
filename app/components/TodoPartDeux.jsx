/*
 * TodoPartDeux.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var TodoPartDeuxList = require("TodoPartDeuxList");
var { Provider } = require("react-redux");

var { todoPartDeuxReducer } = require("../reducers/reducers");
var store = require("../store/redux-store.jsx").configure(todoPartDeuxReducer);
var TodoPartDeuxList = require("TodoPartDeuxList");
var TodoPartDeuxForm = require("TodoPartDeuxForm");
var TodoPartDeuxSearchPanel = require("TodoPartDeuxSearchPanel");
var TodoPartDeuxCompletedPool = require("TodoPartDeuxCompletedPool");

var state = store.getState();
store.subscribe(() => {
  console.log(state);
});
class TodoPartDeux extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}

  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="row">
            <div className="large-12 columns">
              <TodoPartDeuxSearchPanel />
            </div>
          </div>
          <div className="row">
            <div className="large-6 columns">
              <TodoPartDeuxList />
            </div>
            <div className="large-6 columns">
              <TodoPartDeuxCompletedPool />
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <TodoPartDeuxForm />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

TodoPartDeux.propTypes = {};

TodoPartDeux.defaultProps = {};

module.exports = TodoPartDeux;
