/*
 * SyncedTypingTextInput.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var { connect } = require('react-redux')


class SyncedTypingTextInput extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
    this.method = this.method.bind(this)
  }

  method() {

  }

  changeHandler = () => {
    var { dispatch } = this.props
    var text = this.refs.input.value
    dispatch(
      {
        type: 'SYNCEDTYPING::CHANGE_TEXT',
        newText: text
      }
    )
  }

  render() {
    return (
      <div>
        <form action="#">
          <textarea ref="input" id="input" name="input" cols="30" rows="10" onChange={this.changeHandler}></textarea>
        </form>
      </div>
    )
  }
}

SyncedTypingTextInput.propTypes = {
}

SyncedTypingTextInput.defaultProps = {
}

module.exports = connect()(SyncedTypingTextInput)
