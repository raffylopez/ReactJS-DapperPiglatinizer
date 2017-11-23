/*
 * TodoApp.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
import TodoList from "TodoList";
var AddTodo = require("AddTodo");
var TodoAPI = require('TodoAPI')

class TodoApp extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      meow: [
        {
          id: 0,
          text: "meow meow"
        }
      ],
      todos: TodoAPI.getTodos(),
      buttonStyle: "button hollow",
      buttonText: "Click me.",
      msgVisible: false
    };
    this.method = this.method.bind(this);
  }


  addTodoHandler = text => {
    let { todos } = this.state;
    let newId = todos.length + 1;
    var todo = {
      id: newId,
      text: text
    };
    this.setState({
      meow: [...this.state.meow, todo],
      todos: [...this.state.todos, todo]
    });
  };

  onBlankTodo = () => {
    console.log("FOOBAR");
    this.setState({
      msgVisible: true
    });
  };

  method() {}
  buttonChangeHandler = () => {
    new Promise((resolve, reject) => {
      this.setState({
        buttonStyle: "button alert",
        buttonText: "You clicked me!"
      });
      resolve();
    }).then(() => {
      console.log("DONE");
      setTimeout(() => {
        this.setState({
          buttonStyle: "button",
          buttonText: ":P"
        });
      }, 4000);
    });
  };

  render() {
    let theButtonStyle = this.state.buttonStyle;
    let theMessageStyle = "callout alert ";
    theMessageStyle += this.state.msgVisible ? "" : "hide";
    console.log(theMessageStyle);

    return (
      <div>
        This is TodoApp.jsx
        <TodoList todos={this.state.todos} />
        <AddTodo
          addTodoHandler={this.addTodoHandler}
          onBlankTodo={this.onBlankTodo}
        />
        <div className={theMessageStyle}>
          <em>You must enter some text!</em>
        </div>
        <div className="row">
          <div className="small-6 columns">
            <TodoList todos={this.state.meow} />
          </div>
          <div className="small-6 columns">
            <TodoList todos={this.state.meow} />
          </div>
        </div>
        <button onClick={this.buttonChangeHandler} className={theButtonStyle}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

TodoApp.propTypes = {};

TodoApp.defaultProps = {};

module.exports = TodoApp;
