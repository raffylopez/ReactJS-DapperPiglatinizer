/*
 * Main.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import Nav from 'Nav'
import TodoApp from 'TodoApp'

class Main extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
    }
    this.method = this.method.bind(this)
  }

  method() {

  }

  render() {
    return (
      <div>
        <Nav/>
        This is Main.jsx
        <TodoApp/>
      </div>
    )
  }
}

Main.propTypes = {
}

Main.defaultProps = {
}

module.exports = Main
