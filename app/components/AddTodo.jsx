/*
 * AddTodo.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler = e => {
    e.preventDefault();
    var { addTodoHandler, onBlankTodo } = this.props;
    var s = this.refs.text.value;
    this.refs.text.value = "";
    if (s.length > 0) {
      addTodoHandler(s);
    } else {
      onBlankTodo();
    }
  };

  method() {}

  render() {
    return (
      <div>
        <div>
          <form action="#" onSubmit={this.onSubmitHandler}>
            <input type="text" placeholder="Enter todo" ref="text" />
            <input className="button expanded blue" type="submit" value="Add Todo" />
          </form>
        </div>
      </div>
    );
  }
}

AddTodo.propTypes = {};

AddTodo.defaultProps = {};

module.exports = AddTodo;
