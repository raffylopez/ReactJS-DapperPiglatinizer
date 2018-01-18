import React, { Component } from "react";
import piglatinizer from "../api/piglatinizer";
import { connect } from "react-redux";

export default class SyncTypingPigLatinContent extends Component {
  state = {};

  constructor(props) {
    super(props);
  }
  render() {
    console.log("MINCHARS");
    console.log(this.props.options.minChars);
    return (
      <div
        style={{
          marginLeft: "14px",
          marginRight: "14px",
          backgroundColor: "#F7F7F7",
          padding: "20px"
        }}
      >
        {/*PIGGIFIED: {piglatin(this.props.text)}*/}
        {/*<h3>This little piggy says:</h3>*/}
        <h4 id="piglatintext">
          {this.props.text.split("\n").map((item, key) => {
            return (
              <span key={key}>
                {piglatinizer(item, {
                  excludeIfWordLength: this.props.options.minCharsActive
                    ? parseInt(this.props.options.minChars)
                    : 1,
                  ignoreCommon: this.props.options.ignoreCommonWordsActive
                })}
                <br />
              </span>
            );
          })}
        </h4>
      </div>
    );
  }
}

module.exports = connect(state => {
  return {
    text: state.text,
    options: state.options
  };
})(SyncTypingPigLatinContent);
