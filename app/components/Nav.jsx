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
        <div className="topbar-left">
          <ul className="menu">
            <li>TodoApp</li>
          </ul>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {};

Nav.defaultProps = {};

module.exports = Nav;
