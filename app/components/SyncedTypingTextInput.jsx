/*
 * SyncedTypingTextInput.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var { connect } = require("react-redux");

class SyncedTypingTextInput extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}

  changeHandler = () => {
    var { dispatch } = this.props;
    var text = this.refs.input.value;
    dispatch({
      type: "SYNCEDTYPING::CHANGE_TEXT",
      newText: text
    });
  };

  render() {
    return (
      <div>
        <form action="#">
          <textarea
            style={{
              height: "180px",
              marginBottom: "0px",
              marginTop: "30px"
            }}
            placeholder="Say something..."
            ref="input"
            id="input"
            name="input"
            cols="30"
            rows="10"
            defaultValue={this.props.text}
            onChange={this.changeHandler}
            value={this.props.text}
          />
        </form>
      </div>
    );
  }
}

SyncedTypingTextInput.propTypes = {};

SyncedTypingTextInput.defaultProps = {};

module.exports = connect(state => {
  return {
    text: state.text
  };
})(SyncedTypingTextInput);
