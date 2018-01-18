/*
 * Main.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
import Nav from "Nav";
import TodoApp from "TodoApp";
import NavBar from "./NavBar";

var { Helmet } = require("react-helmet");

class Main extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}

  render() {
    var rowStyle = {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      height: "100%",
      backgroundColor: "green",
      maxHeight: "initial",
      maxWidth: "initial"
    };
    return (
      <div>
        {/*<Nav/>*/}
        {/*<div className="row left wrapper">*/}
        {/*<div className="sidebar medium-4 large-4 columns" style={{backgroundColor: "#EEEEE"}}>*/}
        {/*<NavBar/>*/}
        {/*</div>*/}
        {/*<div className="medium-8 large-8 columns">*/}
        {/*<div className="medium-8 large-10 small-centered">*/}
        {this.props.children}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

Main.propTypes = {};

Main.defaultProps = {};

module.exports = Main;
