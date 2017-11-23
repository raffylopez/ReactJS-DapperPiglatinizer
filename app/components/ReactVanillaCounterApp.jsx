/*
 * ReactVanillaCounterApp.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'

class ReactVanillaCounterApp extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      clickCount: 0
    }
    this.method = this.method.bind(this)
  }

  method() {

  }

  clickHandler = () => {
    // code
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  resetCountHandler = () => {
    // code
    this.setState({
      clickCount: 0
    });
  }

  render() {
    return (
      <div>
        This is ReactVanillaCounterApp.jsx
        <p>You clicked the button {this.state.clickCount} number of times!</p>
        <button className="button" onClick={this.clickHandler}>Click Me.</button>
        <button className="hollow button" onClick={this.resetCountHandler}>Reset</button>
      </div>
    )
  }
}

ReactVanillaCounterApp.propTypes = {
}

ReactVanillaCounterApp.defaultProps = {
}

module.exports = ReactVanillaCounterApp
