/*
 * ReduxLocalStorageApp.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var { foodieReducer } = require('../reducers/reducers.jsx')
var store = require('../store/redux-store.jsx').configure(foodieReducer)

store.subscribe(
  ()=> {
    // put code here that would react to state change
    console.log(state)
var state = store.getState()

    if (state.food == "apple") {
      console.log('John says: "yum!"')
    }
    localStorage.setItem('fruit', state.food)
  }
)

var maryStoreWatcher = ()=>{
var state = store.getState()
    if (state.food == "apple") {
      console.log('Mary says: "love them apples!"')
    }
  }
store.subscribe(maryStoreWatcher)


class ReduxLocalStorageApp extends Component {
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
        <button className="button" onClick={()=>
          {
          console.log("foobar");
          
          store.dispatch(
          {type:"CHANGE_FOOD_TO", newFood:"apple" }
          );
          }}>Click
        </button>
      </div>
    )
  }
}

ReduxLocalStorageApp.propTypes = {
}

ReduxLocalStorageApp.defaultProps = {
}

module.exports = ReduxLocalStorageApp
