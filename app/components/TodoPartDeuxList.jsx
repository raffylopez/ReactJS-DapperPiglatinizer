/*
 * TodoPartDeuxList.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var TodoPartDeuxItem = require("TodoPartDeuxItem");
var { connect } = require("react-redux");

class TodoPartDeuxList extends Component {
  constructor(props: any) {
    super(props);
    this.method = this.method.bind(this);
  }

  state = {
  };

  method() {}

  renderItems = (filteredTodos) => {
    var { todos, searchKey } = this.props;
    if (searchKey.length > 0) {
      return filteredTodos.map(item => <TodoPartDeuxItem item={item} />);
    } else {
      return todos.map(item => <TodoPartDeuxItem item={item} />);
    }
  };

  render() {
    var { todos, searchKey } = this.props;

    // do filter
    var beginFilter = () => {
      if (searchKey.length > 0) {
        var filteredTodos = todos.filter(
          item => item.text.toLowerCase().indexOf(searchKey.toLowerCase()) != -1
        );
        return filteredTodos;
      }
      return todos
    };

    var filteredTodos = beginFilter()

    var onFilterText =
      this.props.searchKey.length > 0 ? ` (${filteredTodos.length})` : "";
    return (
      <div className="callout success">
        <h3>Checklist{onFilterText}</h3>
        <ul style={{ listStyle: "none" }}>{this.renderItems(filteredTodos)}</ul>
      </div>
    );
  }
}

TodoPartDeuxList.propTypes = {};

TodoPartDeuxList.defaultProps = {};

module.exports = connect(state => {
  return {
    searchKey: state.searchKey,
    todos: state.todos
  };
})(TodoPartDeuxList);
