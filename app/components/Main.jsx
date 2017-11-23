/*
 * Main.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
import Nav from "Nav";
import TodoApp from "TodoApp";
var { Helmet } = require('react-helmet')

class Main extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}

  render() {
    return (
      <div>
        <Nav />
        This is Main.jsx
        <div className="medium-8 large-10 small-centered">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = {};

Main.defaultProps = {};

module.exports = Main;
