/*
 * SyncedTypingApp.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var SyncedTypingTextInput = require("SyncedTypingTextInput");
var SyncedTypingMainContent = require("SyncedTypingMainContent");
var { syncedTypingReducer } = require("../reducers/reducers.jsx");
var store = require("../store/redux-store.jsx").configure(syncedTypingReducer);
var { Provider } = require("react-redux");
var FoobarThingie = require('FoobarThingie');

class SyncedTypingApp extends Component {
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
          This is SyncedTypingApp.jsx
          <SyncedTypingTextInput />
          <SyncedTypingMainContent />
          <SyncedTypingMainContent />
          <SyncedTypingMainContent />
          <SyncedTypingMainContent />
          <SyncedTypingMainContent />
          <FoobarThingie />
        </div>
      </Provider>
    );
  }
}

SyncedTypingApp.propTypes = {};

SyncedTypingApp.defaultProps = {};

module.exports = SyncedTypingApp;
