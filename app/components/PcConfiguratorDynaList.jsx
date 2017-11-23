/*
 * PcConfiguratorDynaList.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";

class PcConfiguratorDynaList extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {
    console.log("Foo")
  }

  renderItems = (items) => {
    var foo = items.map(item=>
      <option value="{item}" >{item}</option>
    )
    console.log("sdfsdf")
    console.log(foo)
return foo
  };

  render() {
    var { items } = this.props;
    return (
      <div>
        <select id="foo" name="" height={5} multiple={true}>
          {this.renderItems(items)}
        </select>
      </div>
    );
  }
}

PcConfiguratorDynaList.propTypes = {};

PcConfiguratorDynaList.defaultProps = {};

module.exports = PcConfiguratorDynaList;
