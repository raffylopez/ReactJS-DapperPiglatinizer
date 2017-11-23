/*
 * FoobarThingie.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var { connect } = require('react-redux')

class FoobarThingie extends Component {
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div>
        ALOHA:{this.props.text}
        
      </div>
    )
  }
}

FoobarThingie.propTypes = {
}

FoobarThingie.defaultProps = {
}

module.exports = connect(
  (state)=> {
    return {
      text: state.text
    }
  }
)(FoobarThingie)
