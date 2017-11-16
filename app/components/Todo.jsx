/*
 * Todo.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'


class Todo extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
    this.method = this.method.bind(this)
  }

  method() {

  }

  render() {
    let { id, text } = this.props
    return (
      <div>
      {id}. {text}
    </div>
    )
  }
}

Todo.propTypes = {
}

Todo.defaultProps = {
}

module.exports = Todo
