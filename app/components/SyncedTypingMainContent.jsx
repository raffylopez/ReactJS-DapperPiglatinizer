/*
 * SyncedTypingMainContent.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var { connect } = require('react-redux')

class SyncedTypingMainContent extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
    }
    this.method = this.method.bind(this)
  }

  reverse = s=> s.split("").reverse().join("");

  shouldComponentUpdate() {
    return false
  }

  method() {

  }

  render() {
    return (
      <div>
        {
        this.reverse(this.props.text)
        }
        
      </div>
    )
  }
}

SyncedTypingMainContent.propTypes = {
}

SyncedTypingMainContent.defaultProps = {
}

module.exports = connect(
  (state)=> {
    return {
      text: state.text
    }
  }
)(SyncedTypingMainContent)
