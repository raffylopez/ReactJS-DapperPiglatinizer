/*
 * TodoApp.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import TodoList from 'TodoList'

class TodoApp extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      todos: [
        { id: 1, text: 'Calibrate thermodynamic beam' },
        { id: 2, text: 'Buy hero suit' },
        { id: 3, text: 'Activate camouflage defense' },
        { id: 4, text: 'Improve reactor energy output at hq' }
      ]
    }
    this.method = this.method.bind(this)
  }

  method() {

  }

  render() {
    return (
      <div>
        This is TodoApp.jsx
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

TodoApp.propTypes = {
}

TodoApp.defaultProps = {
}

module.exports = TodoApp
