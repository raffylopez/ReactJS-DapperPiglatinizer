/*
 * NavbarExperiment2.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var reactStickyHeader = require('react-sticky-header')

// Import the base CSS, if you're using webpack just import them straight.
// Else import them into your base CSS.
import 'react-sticky-header/styles.css'
import StickyHeader from 'react-sticky-header';
 
const MyHeader = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <div className="Header_root">
        <h1 className="Header_title">ReactStickyHeader</h1>
 
        <ul className="Header_links">
          <li className="Header_link">When</li>
          <li className="Header_link">Why</li>
          <li className="Header_link">About</li>
        </ul>
      </div>
    }
  >
    <section>
      <p>
        This section will be what the sticky header scrolls over before entering into
        sticky state. See the gif above or run the test story book to see examples.
      </p>
    </section>
  </StickyHeader>
);

class NavbarExperiment2 extends Component {
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
        <MyHeader/>
        
      </div>
    )
  }
}

NavbarExperiment2.propTypes = {
}

NavbarExperiment2.defaultProps = {
}

module.exports = NavbarExperiment2
