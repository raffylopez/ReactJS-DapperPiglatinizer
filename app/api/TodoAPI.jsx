/*
 * TodoAPI.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, {Component} from "react";
var $ = require('jquery');

class TodoAPI extends Component {
    constructor(props : any) {
        super(props);
        this.state  = {};
        this.method = this
            .method
            .bind(this);
    }

    method() {}

    render() {
        return <div>This is TodoAPI.jsx</div>;
    }
}

TodoAPI.propTypes    = {};

TodoAPI.defaultProps = {};

module.exports       = {
    getTodos: () => {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log('Uh oh');
        }

        return $.isArray(todos) ? todos : []

    },
    setTodos: (todos) => {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
        // return undefined if todos not an array
    },
    TodoAPI : TodoAPI
};

