/*
 * TodoPartDeuxCompletedPool.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var { connect } = require("react-redux");
var TodoPartDeuxCompletedItem = require('../components/TodoPartDeuxCompletedItem.jsx');


class TodoPartDeuxCompletedPool extends Component {
  constructor(props: any) {
    super(props)
  }

  renderItems = () => {
    var { todos, searchKey } = this.props;
    var filteredTodos = todos.filter(item => item.completed);
    return filteredTodos.map(item => <TodoPartDeuxCompletedItem item={item} />);

  };

  render() {
    return (
      <div className="callout success">
        <h3>Completed</h3>
        <ul style={{ listStyle: "disc" }}>{this.renderItems()}</ul>
      </div>
    );
  }
}

TodoPartDeuxCompletedPool.propTypes = {
}

TodoPartDeuxCompletedPool.defaultProps = {
}

module.exports = connect(state => {
  return {
    searchKey: state.searchKey,
    todos: state.todos
  };
})(TodoPartDeuxCompletedPool);
