/*
 * PcConfigurator.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var PcConfiguratorDynaList = require("PcConfiguratorDynaList");

class PcConfigurator extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      softwareItems: []
    };
  }

  onSelMenuChange = e => {
    e.preventDefault();
    console.log(this.refs.seln.value);
    if (this.refs.seln.value === "Rendering") {
      this.setState({
        softwareItems: ["Adobe Photoshop", "Maya", "Cinema4d"]
      });
    }
    else if (this.refs.seln.value === "Twitch") {
      this.setState({
        softwareItems: ["Minecraft", "Starcraft"]
      });
    } else if (this.refs.seln.value === "Gaming") {
      this.setState({
        softwareItems: ["Assassin's Creed", "Valkyrie", "Super Mario"]
      });
    } else {
      this.setState({
        softwareItems: []
      });
    }
  };

  render() {
    console.log(this.state.softwareItems);

    return (
      <div>
        <h2>Build the PC of your Dreams!</h2>

        <form action="">
          <div className="row">
            <div className="medium-6 columns">
              <label>
                Select target:
                <select
                  ref="seln"
                  id=""
                  name="foo"
                  onChange={this.onSelMenuChange}
                >
                  <option value="Rendering">Rendering</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Twitch">Twitch</option>
                </select>
              </label>
            </div>
            <div className="medium-6 columns">
              <label>
                Price Point:
                <select id="" name="foo">
                  <option value="one">Budget</option>
                  <option value="two">Mid</option>
                  <option value="two">Take my money!</option>
                </select>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="medium-12 columns">
              <PcConfiguratorDynaList items={this.state.softwareItems} />
            </div>
          </div>
          <div className="row">
            <div className="medium-12 columns">
              <button className="button expanded">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PcConfigurator.propTypes = {};

PcConfigurator.defaultProps = {};

module.exports = PcConfigurator;
