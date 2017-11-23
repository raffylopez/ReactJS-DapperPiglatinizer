/*
 * TodoPartDeuxCompletedItem.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var { connect } = require("react-redux");
var actions = require("../actions/actions.jsx");

class TodoPartDeuxCompletedItem extends Component {
  constructor(props: any) {
    super(props);
  }

  clickHandler = () => {
    var { dispatch } = this.props;
    console.log(this.refs.item_id.id);
    var targetId = this.refs.item_id.id;
    var remappedTodos = this.props.todos.map(item => {
      if (item.id == targetId) {
        return {
          text: item.text,
          id: item.id,
          completed: !item.completed
        };
      }
      return item;
    });
    dispatch(actions.setTodos(remappedTodos));
    console.log("FOOOO");
  };

  render() {
    return (
      <div>
        <li id={this.props.item.id} ref="item_id">
          <span style={{fontWeight:"bold"}}>{this.props.item.text} </span>
          <span>({this.props.item.id})</span>
        </li>
      </div>
    );
  }
}

TodoPartDeuxCompletedItem.propTypes = {};

TodoPartDeuxCompletedItem.defaultProps = {};

module.exports = connect(state => {
  return {
    todos: state.todos
  };
})(TodoPartDeuxCompletedItem);
