/*
 * AwesomeRedux.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, {Component} from 'react';

var AwesomeReduxForm = require('AwesomeReduxForm');
var AwesomeReduxPanel = require('AwesomeReduxPanel');
var reducers = require('../reducers/reducers.jsx')
var {Provider} = require('react-redux');

class AwesomeRedux extends Component {
    constructor(props : any) {
        super(props);
        this.state  = {};
        this.method = this
            .method
            .bind(this);
    }

    method() {}

    render() {
        var store = require('../store/redux-store').configure(reducers.awesomeFormReducer);
        return (
            <Provider store={store}>
                <div>
                    <AwesomeReduxForm/>
                    <AwesomeReduxPanel/>
                </div>
            </Provider>
        );
    }
}

AwesomeRedux.propTypes    = {};

AwesomeRedux.defaultProps = {};

module.exports            = AwesomeRedux;

