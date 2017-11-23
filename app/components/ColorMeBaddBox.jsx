/*
 * ColorMeBaddBox.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var { connect } = require('react-redux')
var actions = require('../actions/actions.jsx')

class ColorMeBaddBox extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
    this.method = this.method.bind(this)
  }

  method() {
    var { dispatch } = this.props
    dispatch(actions.sayHi("Aloha"))
  }

  render() {
    return (
      <div style={{backgroundColor:this.props.color}}>
        <p style={{color:"white"}}>{this.props.greeting}</p>
      </div>
    )
  }
}

ColorMeBaddBox.propTypes = {
}

ColorMeBaddBox.defaultProps = {
}

module.exports = connect(
  (state)=> {
    return {
      color: state.color,
      greeting: state.greeting
    }
  }
)(ColorMeBaddBox)
