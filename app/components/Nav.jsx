/*
 * Nav.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";

class Nav extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <p style={{ fontFamily: "Verdana" }}>Multiplexed TodoApp</p>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <input type="search" />
            </li>
            <li>
              <button className="button">Find</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {};

Nav.defaultProps = {};

module.exports = Nav;
