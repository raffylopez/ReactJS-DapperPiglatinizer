/*
 * TodoList.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import Todo from 'Todo'

class TodoList extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
    this.method = this.method.bind(this)
  }

  renderTodos = (todos) => {
    // return todos.map(x=><h1 key={x.id}>{ x.text }</h1>)
    return todos.map(item=><Todo key={item.id} {...item}  />)
  }
  method() {

  }

  render() {
    var { todos } = this.props
    return (
      <div>
        This is TodoList.jsx
        {this.renderTodos(todos)}
      </div>
    )
  }
}

TodoList.propTypes = {
}

TodoList.defaultProps = {
}

module.exports = TodoList
