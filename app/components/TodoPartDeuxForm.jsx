/*
 * TodoPartDeuxForm.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var actions = require("../actions/actions.jsx");
var { connect } = require("react-redux");
var uuid = require("uuid");

class TodoPartDeuxForm extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}
  clickHandler = e => {
    e.preventDefault();
    var input = this.refs.txt.value;
    if (input == "") return 
    var { dispatch } = this.props;
    dispatch(
      actions.addTodo({
        text: this.refs.txt.value,
        completed: false,
        id: uuid()
      })
    );
    this.refs.txt.value = "";
  };

  render() {
    return (
      <div>
        <form action="#" onSubmit={this.clickHandler}>
          <input type="text" placeholder="Enter todo text" ref="txt" />
          <input type="submit" className="button expanded" value="Add Todo" />
        </form>
      </div>
    );
  }
}

TodoPartDeuxForm.propTypes = {};

TodoPartDeuxForm.defaultProps = {};

module.exports = connect()(TodoPartDeuxForm);
