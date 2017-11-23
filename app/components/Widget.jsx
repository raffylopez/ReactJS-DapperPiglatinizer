/*
 * Widget.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, {Component} from 'react';
var {connect} = require('react-redux');

class Widget extends Component {
    constructor(props : any) {
        super(props);
        this.state  = {
            message: "INITIAL"
        };
        this.method = this
            .method
            .bind(this);
    }

    method() {}

    render() {
      // grab these from props, after mapping redux state to props
        var {widgetMessage, dispatch, greetingText} = this.props;
        return (
            <div>
              {widgetMessage}<br/>
                <button
                  onClick={() => {dispatch({type: 'CHANGE_MESSAGE'})}}
                  className="button">
                    Click me.</button>
                <button
                  onClick={() => {dispatch({type: 'SAY_HELLO'})}}
                  className="button">
                    Click me.</button>
            </div>
        );
    }
}

Widget.propTypes    = {};

Widget.defaultProps = {};

module.exports      = connect((state) => {
  return {
    widgetMessage: state.widgetSet,
  };
})(Widget);

