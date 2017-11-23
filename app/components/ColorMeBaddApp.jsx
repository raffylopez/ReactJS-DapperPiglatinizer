/*
 * ColorMeBaddApp.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var ColorMeBaddBox = require('ColorMeBaddBox');
var ColorMeForm = require('ColorMeForm');
var {mainReducer} = require('../reducers/reducers2.jsx')
var store = require('../store/redux-store').configure(mainReducer)
var { Provider } = require('react-redux');

class ColorMeBaddApp extends Component {
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
      <Provider store={store}>

        <div>
          This is ColorMeBaddApp.jsx
          <ColorMeBaddBox/>
          <ColorMeForm/>
          </div>
        </Provider>
    )
  }
}

ColorMeBaddApp.propTypes = {
}

ColorMeBaddApp.defaultProps = {
}

module.exports = ColorMeBaddApp
