/*
 * ReduxEngaged.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import Widget from 'Widget'
var { Provider } = require('react-redux')
var redux = require('redux')


class ReduxEngaged extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
    this.method = this.method.bind(this)
  }

  method() {

  }

  render() {
    var {widgetMessageReducer} = require('../reducers/reducers')
    var store = redux.createStore(
      redux.combineReducers(
        {
          // determines name of state property, as in state.widgetSet
          widgetSet: widgetMessageReducer
        }
      )
    )
    return (
      <div>
        This is ReduxEngaged.jsx
        <Provider store={store}>
          <Widget/>
        </Provider>
        
      </div>
    )
  }
}

module.exports = ReduxEngaged
