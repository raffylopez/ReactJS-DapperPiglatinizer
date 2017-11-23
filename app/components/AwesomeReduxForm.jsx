/*
 * AwesomeReduxForm.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var { connect } = require('react-redux')

class AwesomeReduxForm extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
    this.method = this.method.bind(this)
  }

  method() {

  }

  formSubmit = (e) => {
    e.preventDefault();
    var { dispatch } = this.props
    dispatch({
      type: 'SUBMIT_REGISTRATION',
      name: this.refs.name.value,
      email: this.refs.email.value
    })
      this.refs.name.value = ""
      this.refs.email.value = ""
  }

  render() {
    return (
      <div>
        <h4>Registration</h4>
        <form action="#" onSubmit={this.formSubmit}>
          <label htmlFor="name">
            <p>Name</p>
            <input type="text" id="name" ref="name" />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input type="text" id="email" ref="email"/>
          </label>
          <input type="submit" value="Submit" className="button" />
        </form>

      </div>
    )
  }
}

AwesomeReduxForm.propTypes = {
}

AwesomeReduxForm.defaultProps = {
}

module.exports = connect()(AwesomeReduxForm)
