/*
 * TodoPartDeuxSearchPanel.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
var { connect } = require("react-redux");
var actions = require("../actions/actions.jsx");

var x = [];

class TodoPartDeuxSearchPanel extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}

  onChangeHandler = () => {
    var filterText = this.refs.txt.value;
    var { dispatch, todos } = this.props;

    dispatch(actions.setSearchKey(filterText))
  };

  render() {
    return (
      <div>
          <input
            className='clearable'
            type="search"
            placeholder="Filter"
            ref="txt"
            onChange={this.onChangeHandler}
          />
      </div>
    );
  }
}

TodoPartDeuxSearchPanel.propTypes = {};

TodoPartDeuxSearchPanel.defaultProps = {};

module.exports = TodoPartDeuxSearchPanel;

module.exports = connect(state => {
  return {
    todos: state.todos
  };
})(TodoPartDeuxSearchPanel);
