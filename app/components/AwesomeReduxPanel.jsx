/*
 * AwesomeReduxPanel.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var { connect } = require('react-redux')

class AwesomeReduxPanel extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
    this.method = this.method.bind(this)
  }

  method() {

  }

  render() {
    var {name, email} = this.props
    console.log("panel-render")
    return (
      <div className='callout success'>
        Name: {this.props.name}<br/>
        Email: {this.props.email}
      </div>
    )
  }
}

AwesomeReduxPanel.propTypes = {
}

AwesomeReduxPanel.defaultProps = {
}

module.exports = connect(
  (state)=> {
    return {
      name: state.name,
      email: state.email
    }
  }
)(AwesomeReduxPanel)
