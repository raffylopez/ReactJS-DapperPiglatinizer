/*
 * NavbarExperiment.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
var reactNavBar = require('react-nav-bar')
var NavBar = reactNavBar.NavBar
var Menu = reactNavBar.Menu

var menus = [
  { path:'menu1', label:'Menu 1', icon:'bell'},
  <div>jsx element</div>,
  { path:'menu3', label:'Menu 3', icon:'bars', subMenus: [
    { path:'menu4', label:'Menu 4'},
    { path:'menu5', label:'Menu 5', subMenus: [
      { path:'menu6', label:'Menu 6' },
      { path:'menu7', label:'Menu 7'},
      React.createClass({ render: function() { return <li>can do that TOO</li>; } }),
      { path:'menu9', label:'Menu 9'}
    ]},
    { path:'menu10', label: <div> You can do that too</div>, icon:'bars'}
  ]}
]

class NavbarExperiment extends Component {
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
        <NavBar menus={menus} theme={'hoverLakeBright'} location={this.props.location} />
        This is NavbarExperiment.jsx
        
      </div>
    )
  }
}

NavbarExperiment.propTypes = {
}

NavbarExperiment.defaultProps = {
}

module.exports = NavbarExperiment
