/*
 * SimpleTest.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";

class SimpleTest extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      saveMessage: ""
    };
  }

  retrieveDataHandler = e => {
    this.refs.tfData.value = localStorage.getItem("data")
  };

  saveDataHandler = e => {
    e.preventDefault();
    var text = this.refs.tfData.value;
    if (text.length == 0) {
      return;
    }
    localStorage.setItem("data", text);
    this.refs.tfData.value = "";
    this.setState({
      saveMessage: "Saved."
    });
  };

  render() {
    var cname = "callout success"
    if ( this.state.saveMessage === "" ) {
      cname += " hide"
    }
    return (
      <div>
        <h4 className="text-center">The localStorage demo</h4>
        <input type="text" ref="tfData" />
        <button className="button expanded" onClick={this.saveDataHandler}>
          Save Data
        </button>
        <button className="button hollow expanded" onClick={this.retrieveDataHandler}>
          Retrieve Data
        </button>
        <div className={cname}>{this.state.saveMessage}</div>
      </div>
    );
  }
}

SimpleTest.propTypes = {};

SimpleTest.defaultProps = {};

module.exports = SimpleTest;
