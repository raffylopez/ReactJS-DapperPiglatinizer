/*
 * TodoPartDeuxItem.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var { connect } = require('react-redux')
var actions = require('../actions/actions.jsx')

class TodoPartDeuxItem extends Component {
  constructor(props: any) {
    super(props);
  }

  clickHandler = () => {
    var { dispatch } = this.props
    console.log(this.refs.item_id.id)
    var targetId = this.refs.item_id.id
    var remappedTodos = this.props.todos.map(
      (item)=>{
        if (item.id == targetId) {
          return {
            text: item.text,
            id: item.id,
            completed: !item.completed
          }
        }
        return item
      }
    )
    dispatch(actions.setTodos(remappedTodos))
    console.log('FOOOO')
  }

  render() {
    var stylistic = this.props.item.completed ? "line-through" : "none"
    var styleCheck = this.props.item.completed ? true: false
    var styleColor = this.props.item.completed ? "gray": ""
    return (
      <div>
        <li id={this.props.item.id} ref="item_id" style={{cursor:"pointer"}}>
          <input type="checkbox" style={{ marginRight: "1rem" }} onClick={this.clickHandler} checked={styleCheck} />
          <span
            style={{textDecoration:stylistic, color:styleColor}}
            onClick={this.clickHandler}
          >
          {this.props.item.text}
          </span>
        </li>
      </div>
    );
  }
}

TodoPartDeuxItem.propTypes = {};

TodoPartDeuxItem.defaultProps = {};

module.exports = connect(
  (state)=> {
    return {
      todos: state.todos
    }
  }
)(TodoPartDeuxItem)
