/*
 * Todo.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";

class Todo extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}

  render() {
    let { id, text, onMark } = this.props;
    console.log(id + " " + text);
    return (
      <div>
        <span><input type="checkbox" onClick={onMark} style={{marginRight: "1rem"}} /></span>
        <span style={{fontFamily:"Verdana"}}>
          {id}. {text}</span>
      </div>
    );
  }
}

Todo.propTypes = {};

Todo.defaultProps = {};

module.exports = Todo;
