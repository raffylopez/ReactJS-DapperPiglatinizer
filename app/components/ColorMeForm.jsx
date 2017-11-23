/*
 * ColorMeForm.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var actions = require('../actions/actions.jsx')
var { connect } = require('react-redux')


class ColorMeForm extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
    this.method = this.method.bind(this)
  }

  method() {
    var { dispatch } = this.props
    dispatch(actions.changeColor(this.refs.color.value))
  }

  clickHandler = (e) => {
    e.preventDefault()
    this.props.dispatch(
      actions.sayHi("Aloha")
    )
  }

  render() {

    return (
      <div>
        <form action="#">
          <label htmlFor="color">
            Color
            <select id="color" ref="color" onChange={this.method} >
              <option value="red">Apple</option>
              <option value="blue">Blueberry</option>
              <option value="green">Mango</option>
              <option value="purple">Grapes</option>
            </select>
        <button className="button" onClick={this.clickHandler}>Say Hi</button>
          </label>
        </form>
      </div>
    )
  }
}

ColorMeForm.propTypes = {
}

ColorMeForm.defaultProps = {
}

module.exports = connect(
  (state)=> {
    return {
      color: state.color
    }
  }
)(ColorMeForm)
