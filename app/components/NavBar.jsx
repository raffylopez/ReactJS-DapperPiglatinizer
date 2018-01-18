import React, { Component } from "react";
import { Link } from "react-router";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="side-nav">
          <li>
            <Link to="todo-app">Todo App</Link>
          </li>
          <li>
            <Link to="todo-2">Todo 2</Link>
          </li>
          <li>
            <Link to="foo">Foo</Link>
          </li>
          <li>
            <Link to="pc-configurator">pc-configurator</Link>
          </li>
          <li>
            <Link to="redux-engaged">redux-engaged</Link>
          </li>
          <li>
            <Link to="awesome-redux">awesome-redux</Link>
          </li>
          <li>
            <Link to="color-me-badd">color-me-badd</Link>
          </li>
          <li>
            <Link to="redux-localstorage">redux-localstorage</Link>
          </li>
          <li>
            <Link to="react-counter">react-counter</Link>
          </li>
          <li>
            <Link to="redux-counter">redux-counter</Link>
          </li>
          <li>
            <Link to="todo-2">todo-2</Link>
          </li>
          <li>
            <Link to="synced-typing">synced-typing</Link>
          </li>
          <li>
            <Link to="bulma-experiment">bulma-experiment</Link>
          </li>
          <li>
            <Link to="redux-thunk-demo">redux-thunk-demo</Link>
          </li>
        </ul>
      </div>
    );
  }
}
